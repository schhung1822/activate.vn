// server/admin/storage.js
//
// Nơi đọc/ghi nội dung cho trang /admin. Nội dung vẫn là file trong repo
// (src/content/*, ảnh trong public/assets/images/uploads), chỉ khác cách ghi:
//
//   - local  : chạy `npm run dev` trên máy -> ghi thẳng vào thư mục dự án.
//   - github : chạy trên Vercel (ổ đĩa chỉ đọc) -> mỗi lần lưu là một commit lên
//              GitHub, Vercel thấy commit mới sẽ tự build lại website (~1-2 phút).
//
// Biến môi trường cho chế độ github:
//   GITHUB_TOKEN   - fine-grained token, quyền Contents: Read and write cho repo
//   GITHUB_REPO    - "owner/name"; bỏ trống trên Vercel thì lấy repo đang deploy
//   GITHUB_BRANCH  - nhánh ghi vào; bỏ trống trên Vercel thì lấy nhánh đang deploy
import fs from 'node:fs/promises';
import path from 'node:path';

export class StorageError extends Error {
    constructor(message, status = 500) {
        super(message);
        this.status = status;
    }
}

/* ------------------------------------------------------------------ local */

const createLocalStorage = (root) => {
    const resolve = (relativePath) => {
        const absolute = path.resolve(root, relativePath);
        if (!absolute.startsWith(path.resolve(root) + path.sep)) {
            throw new StorageError(`Đường dẫn không hợp lệ: ${relativePath}`, 400);
        }
        return absolute;
    };

    return {
        describe: () => ({mode: 'local'}),

        async readDir(dir) {
            const absolute = resolve(dir);
            let names = [];
            try {
                names = await fs.readdir(absolute);
            } catch (error) {
                if (error.code === 'ENOENT') return [];
                throw error;
            }
            return Promise.all(
                names.map(async (name) => ({name, text: await fs.readFile(path.join(absolute, name), 'utf8')}))
            );
        },

        // Ở local ghi luôn file ảnh để xem trước được ngay qua dev server.
        async stageFile(filePath, buffer) {
            const absolute = resolve(filePath);
            await fs.mkdir(path.dirname(absolute), {recursive: true});
            await fs.writeFile(absolute, buffer);
            return {path: filePath};
        },

        async commit({writes = [], deletes = []}) {
            for (const file of writes) {
                if (file.text === undefined) continue; // ảnh đã ghi lúc stageFile
                const absolute = resolve(file.path);
                await fs.mkdir(path.dirname(absolute), {recursive: true});
                await fs.writeFile(absolute, file.text, 'utf8');
            }
            for (const filePath of deletes) {
                await fs.rm(resolve(filePath), {force: true});
            }
            return {};
        }
    };
};

/* ----------------------------------------------------------------- github */

const createGithubStorage = ({token, owner, repo, branch}) => {
    const request = async (url, {method = 'GET', body} = {}) => {
        const response = await fetch(url.startsWith('http') ? url : `https://api.github.com${url}`, {
            method,
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28',
                'User-Agent': 'nextgency-admin',
                ...(body ? {'Content-Type': 'application/json'} : {})
            },
            body: body ? JSON.stringify(body) : undefined
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
            const error = new StorageError(`GitHub ${response.status}: ${data.message || response.statusText}`, 502);
            error.githubStatus = response.status;
            throw error;
        }
        return data;
    };

    const repoPath = `/repos/${owner}/${repo}`;

    return {
        describe: () => ({mode: 'github', repo: `${owner}/${repo}`, branch}),

        // Một truy vấn GraphQL lấy nội dung mọi file trong thư mục, thay vì N lần gọi REST.
        async readDir(dir) {
            const data = await request('/graphql', {
                method: 'POST',
                body: {
                    query: `query($owner: String!, $name: String!, $expr: String!) {
                        repository(owner: $owner, name: $name) {
                            object(expression: $expr) {
                                ... on Tree { entries { name type object { ... on Blob { text isBinary isTruncated } } } }
                            }
                        }
                    }`,
                    variables: {owner, name: repo, expr: `${branch}:${dir}`}
                }
            });
            if (data.errors?.length) throw new StorageError(`GitHub: ${data.errors[0].message}`, 502);

            const entries = data.data?.repository?.object?.entries || [];
            const files = entries.filter((entry) => entry.type === 'blob' && !entry.object?.isBinary);

            return Promise.all(
                files.map(async (entry) => {
                    if (!entry.object.isTruncated) return {name: entry.name, text: entry.object.text};
                    // File quá lớn với GraphQL -> đọc riêng qua REST
                    const file = await request(`${repoPath}/contents/${dir}/${encodeURIComponent(entry.name)}?ref=${branch}`);
                    return {name: entry.name, text: Buffer.from(file.content, 'base64').toString('utf8')};
                })
            );
        },

        // Ảnh được đẩy lên thành blob riêng từng cái (tránh giới hạn 4.5MB/request của Vercel),
        // tới lúc bấm Lưu mới gắn vào commit.
        async stageFile(filePath, buffer) {
            const blob = await request(`${repoPath}/git/blobs`, {
                method: 'POST',
                body: {content: buffer.toString('base64'), encoding: 'base64'}
            });
            return {path: filePath, sha: blob.sha};
        },

        async commit({writes = [], deletes = [], message}) {
            const tree = [
                ...writes.map((file) =>
                    file.sha
                        ? {path: file.path, mode: '100644', type: 'blob', sha: file.sha}
                        : {path: file.path, mode: '100644', type: 'blob', content: file.text}
                ),
                ...deletes.map((filePath) => ({path: filePath, mode: '100644', type: 'blob', sha: null}))
            ];

            // Thử lại một lần nếu nhánh vừa có commit khác chen vào giữa chừng.
            for (let attempt = 0; ; attempt += 1) {
                const ref = await request(`${repoPath}/git/ref/heads/${branch}`);
                const parentSha = ref.object.sha;
                const parent = await request(`${repoPath}/git/commits/${parentSha}`);
                const newTree = await request(`${repoPath}/git/trees`, {
                    method: 'POST',
                    body: {base_tree: parent.tree.sha, tree}
                });
                const newCommit = await request(`${repoPath}/git/commits`, {
                    method: 'POST',
                    body: {message, tree: newTree.sha, parents: [parentSha]}
                });
                try {
                    await request(`${repoPath}/git/refs/heads/${branch}`, {
                        method: 'PATCH',
                        body: {sha: newCommit.sha}
                    });
                    return {commit: newCommit.sha};
                } catch (error) {
                    if (attempt === 0 && error.githubStatus === 422) continue;
                    throw error;
                }
            }
        }
    };
};

/* ---------------------------------------------------------------- chọn */

export const createStorage = (env, {root} = {}) => {
    if (env.GITHUB_TOKEN) {
        const repoSetting =
            env.GITHUB_REPO ||
            (env.VERCEL_GIT_REPO_OWNER && env.VERCEL_GIT_REPO_SLUG
                ? `${env.VERCEL_GIT_REPO_OWNER}/${env.VERCEL_GIT_REPO_SLUG}`
                : '');
        const [owner, repo] = repoSetting.split('/');
        if (!owner || !repo) {
            throw new StorageError('Thiếu GITHUB_REPO (dạng "owner/ten-repo") trong biến môi trường.', 503);
        }
        return createGithubStorage({
            token: env.GITHUB_TOKEN,
            owner,
            repo,
            branch: env.GITHUB_BRANCH || env.VERCEL_GIT_COMMIT_REF || 'master'
        });
    }

    if (env.VERCEL) {
        throw new StorageError(
            'Website trên Vercel không ghi file trực tiếp được. Hãy thêm GITHUB_TOKEN (và GITHUB_REPO) trong Environment Variables của Vercel.',
            503
        );
    }

    return createLocalStorage(root || process.cwd());
};
