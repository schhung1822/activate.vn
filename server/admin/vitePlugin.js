// server/admin/vitePlugin.js
//
// Gắn các API vào dev server của Vite để chạy được bằng `npm run dev` (không cần
// `vercel dev`):
//   /api/admin       - trang /admin            (trên Vercel: api/admin.js)
//   /api/news[/id]   - API đăng tin tức        (trên Vercel: api/news/*.js)
// Ở chế độ này nội dung được ghi thẳng vào thư mục dự án, trừ khi .env.local có GITHUB_TOKEN.
import {loadEnv} from 'vite';
import {handleAdminRequest} from './handler.js';
import {handleNewsApiRequest} from './newsApi.js';

const MAX_BODY_BYTES = 6 * 1024 * 1024;

class BadRequest extends Error {}

const readJsonBody = (req) =>
    new Promise((resolve, reject) => {
        let size = 0;
        const chunks = [];
        req.on('data', (chunk) => {
            size += chunk.length;
            if (size > MAX_BODY_BYTES) {
                reject(new BadRequest('Body quá lớn.'));
                req.destroy();
                return;
            }
            chunks.push(chunk);
        });
        req.on('end', () => {
            const raw = Buffer.concat(chunks).toString('utf8');
            try {
                resolve(raw ? JSON.parse(raw) : undefined);
            } catch {
                reject(new BadRequest('Body không phải JSON hợp lệ.'));
            }
        });
        req.on('error', reject);
    });

const send = (res, {status, headers = {}, body}) => {
    res.statusCode = status;
    Object.entries(headers).forEach(([name, value]) => res.setHeader(name, value));
    res.setHeader('Cache-Control', 'no-store');
    if (body === null || body === undefined) {
        res.end();
        return;
    }
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(body));
};

export const adminApiPlugin = () => ({
    name: 'nextgency-admin-api',
    configureServer(server) {
        const {root, mode} = server.config;

        /** Gắn một handler; `route(req, url, context)` trả về {status, headers, body}. */
        const mount = (path, route) => {
            server.middlewares.use(path, async (req, res) => {
                // Đọc lại env mỗi request để sửa .env.local không cần khởi động lại dev server
                const env = {...process.env, ...loadEnv(mode, root, '')};
                const url = new URL(req.url, 'http://localhost');

                let body;
                try {
                    body = ['POST', 'PUT', 'PATCH'].includes(req.method) ? await readJsonBody(req) : undefined;
                } catch (error) {
                    send(res, {status: 400, body: {error: {code: 'invalid_json', message: error.message}}});
                    return;
                }

                send(res, await route(req, url, {env, body, root}));
            });
        };

        mount('/api/admin', (req, url, {env, body}) =>
            handleAdminRequest({
                method: req.method,
                query: Object.fromEntries(url.searchParams),
                headers: req.headers,
                body,
                env,
                root
            })
        );

        // connect cắt phần /api/news nên url.pathname còn lại là "/" hoặc "/<id>"
        mount('/api/news', (req, url, {env, body}) => {
            const segments = url.pathname.split('/').filter(Boolean);
            if (segments.length > 1) {
                return {status: 404, body: {error: {code: 'not_found', message: 'Không có đường dẫn này.'}}};
            }
            return handleNewsApiRequest({
                method: req.method,
                id: segments[0] ? decodeURIComponent(segments[0]) : null,
                query: Object.fromEntries(url.searchParams),
                headers: req.headers,
                body,
                env,
                root
            });
        });
    }
});
