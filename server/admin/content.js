// server/admin/content.js
//
// Cấu trúc dữ liệu tin tức & dự án mà trang /admin đọc/ghi.
//
//   src/content/news/<id>.json       - thông tin bài viết (tiêu đề, ảnh, danh mục...)
//   src/content/news/<id>.md         - nội dung bài viết (markdown)
//   src/content/projects/<id>.json   - một dự án, kèm chữ cho cả 3 ngôn ngữ
//   public/assets/images/uploads/... - ảnh tải lên từ /admin
//
// Website đọc các file này qua src/data/newsData.js và src/data/projectsData.js.
import crypto from 'node:crypto';
import {slugify} from '../../src/utils/slugify.js';
import {StorageError} from './storage.js';

export const CONTENT_DIRS = {
    news: 'src/content/news',
    projects: 'src/content/projects'
};

export const LOCALES = ['vi', 'en', 'cn'];

const UPLOAD_ROOT = 'public/assets/images/uploads';
const UPLOAD_TYPES = {
    'image/webp': 'webp',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    'image/avif': 'avif'
};
const UPLOAD_PATH_PATTERN = /^public\/assets\/images\/uploads\/(news|projects)\/\d{4}-\d{2}\/[a-z0-9-]+\.(webp|jpg|png|gif|avif)$/;
const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;

const invalid = (message) => new StorageError(message, 400);

const text = (value) => (typeof value === 'string' ? value.trim() : '');
const textList = (value) =>
    Array.isArray(value) ? [...new Set(value.map(text).filter(Boolean))] : [];
// Đoạn văn trong chi tiết dự án: giữ thứ tự, bỏ đoạn rỗng, không gộp trùng
const paragraphs = (value) => (Array.isArray(value) ? value.map(text).filter(Boolean) : []);
const status = (value) => (value === 'draft' ? 'draft' : 'published');

const toJson = (data) => `${JSON.stringify(data, null, 2)}\n`;

const parseJson = (file) => {
    try {
        return JSON.parse(file.text);
    } catch {
        throw new StorageError(`File ${file.name} không phải JSON hợp lệ.`);
    }
};

/* ------------------------------------------------------------------- tin tức */

const normalizeNews = (input) => {
    const item = {
        id: Number(input.id),
        slug: slugify(input.slug || input.title),
        status: status(input.status),
        title: text(input.title),
        description: text(input.description),
        thumbnail: text(input.thumbnail),
        date: text(input.date),
        categories: textList(input.categories),
        tags: textList(input.tags)
    };

    if (!item.title) throw invalid('Bài viết cần có tiêu đề.');
    if (!item.slug) throw invalid('Đường dẫn (slug) không hợp lệ.');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(item.date)) throw invalid('Ngày đăng phải có dạng YYYY-MM-DD.');
    return item;
};

const listNews = async (storage) => {
    const files = await storage.readDir(CONTENT_DIRS.news);
    const bodies = new Map(files.filter((f) => f.name.endsWith('.md')).map((f) => [f.name, f.text]));

    return files
        .filter((file) => file.name.endsWith('.json'))
        .map((file) => {
            const meta = parseJson(file);
            return {...meta, content: bodies.get(file.name.replace(/\.json$/, '.md')) ?? ''};
        })
        .sort((a, b) => (b.date || '').localeCompare(a.date || '') || b.id - a.id);
};

/* ---------------------------------------------------------------------- dự án */

const normalizeProject = (input) => {
    const metrics = (Array.isArray(input.metrics) ? input.metrics : []).map((metric) => ({value: text(metric?.value)}));

    const content = {};
    LOCALES.forEach((locale) => {
        const source = input.content?.[locale] || {};
        const labels = Array.isArray(source.metrics) ? source.metrics : [];
        content[locale] = {
            name: text(source.name),
            summary: text(source.summary),
            description: text(source.description),
            details: paragraphs(source.details),
            // Nhãn số liệu đi theo thứ tự của `metrics`
            metrics: metrics.map((_, index) => text(labels[index]))
        };
    });

    const item = {
        id: slugify(input.id),
        status: status(input.status),
        order: Number.isFinite(Number(input.order)) ? Number(input.order) : 0,
        date: text(input.date),
        category: textList(input.category),
        partner: text(input.partner),
        technologies: textList(input.technologies),
        metrics,
        ctaUrl: text(input.ctaUrl),
        videoUrl: text(input.videoUrl),
        slides: textList(input.slides),
        content
    };

    if (!item.id) throw invalid('Dự án cần có mã (dùng làm đường dẫn /projects/<mã>).');
    if (!content.vi.name) throw invalid('Dự án cần có tên tiếng Việt.');
    if (item.date && !/^\d{2}\/\d{4}$/.test(item.date)) throw invalid('Thời gian thực hiện phải có dạng MM/YYYY.');
    return item;
};

const listProjects = async (storage) => {
    const files = await storage.readDir(CONTENT_DIRS.projects);
    return files
        .filter((file) => file.name.endsWith('.json'))
        .map(parseJson)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
};

/* ------------------------------------------------------------------ tác vụ */

export const listContent = (storage, type) => {
    if (type === 'news') return listNews(storage);
    if (type === 'projects') return listProjects(storage);
    throw invalid('Loại nội dung không hợp lệ.');
};

/** Ảnh đã tải lên trước (stageFile) và được gắn vào commit khi lưu bài. */
const stagedFiles = (files) =>
    (Array.isArray(files) ? files : [])
        .filter((file) => UPLOAD_PATH_PATTERN.test(file?.path || ''))
        .map((file) => {
            if (file.sha !== undefined && !/^[0-9a-f]{40}$/.test(file.sha)) throw invalid('Ảnh tải lên không hợp lệ.');
            return {path: file.path, sha: file.sha};
        })
        .filter((file) => file.sha); // chế độ local đã ghi ảnh từ lúc tải lên

// actor: ghi vào commit message để biết thay đổi đến từ trang /admin hay từ API ngoài
export const saveContent = async (storage, {type, item: input, content, isNew, files}, {actor = 'Admin'} = {}) => {
    if (!input || typeof input !== 'object') throw invalid('Thiếu dữ liệu.');
    const images = stagedFiles(files);

    if (type === 'news') {
        const existing = await listNews(storage);
        let id = Number(input.id);
        if (isNew) {
            id = existing.reduce((max, news) => Math.max(max, Number(news.id) || 0), 0) + 1;
        } else if (!existing.some((news) => news.id === id)) {
            throw new StorageError('Không tìm thấy bài viết để cập nhật (có thể đã bị xoá).', 404);
        }

        const item = normalizeNews({...input, id});
        const body = typeof content === 'string' ? content.replace(/\r\n/g, '\n') : '';
        const result = await storage.commit({
            writes: [
                {path: `${CONTENT_DIRS.news}/${id}.json`, text: toJson(item)},
                {path: `${CONTENT_DIRS.news}/${id}.md`, text: body.endsWith('\n') ? body : `${body}\n`},
                ...images
            ],
            message: `${actor}: ${isNew ? 'đăng' : 'cập nhật'} bài viết "${item.title}"`
        });
        return {item: {...item, content: body}, ...result};
    }

    if (type === 'projects') {
        const item = normalizeProject(input);
        const existing = await listProjects(storage);
        const exists = existing.some((project) => project.id === item.id);
        if (isNew && exists) throw invalid(`Đã có dự án với mã "${item.id}". Hãy chọn mã khác.`);
        if (!isNew && !exists) throw new StorageError('Không tìm thấy dự án để cập nhật (có thể đã bị xoá).', 404);

        const result = await storage.commit({
            writes: [{path: `${CONTENT_DIRS.projects}/${item.id}.json`, text: toJson(item)}, ...images],
            message: `${actor}: ${isNew ? 'thêm' : 'cập nhật'} dự án "${item.content.vi.name}"`
        });
        return {item, ...result};
    }

    throw invalid('Loại nội dung không hợp lệ.');
};

export const deleteContent = async (storage, {type, id}, {actor = 'Admin'} = {}) => {
    if (type === 'news') {
        const newsId = Number(id);
        const files = await storage.readDir(CONTENT_DIRS.news);
        const names = files.map((file) => file.name).filter((name) => name === `${newsId}.json` || name === `${newsId}.md`);
        if (!names.length) throw new StorageError('Không tìm thấy bài viết.', 404);
        return storage.commit({
            deletes: names.map((name) => `${CONTENT_DIRS.news}/${name}`),
            message: `${actor}: xoá bài viết #${newsId}`
        });
    }

    if (type === 'projects') {
        const projectId = slugify(id);
        const files = await storage.readDir(CONTENT_DIRS.projects);
        if (!files.some((file) => file.name === `${projectId}.json`)) throw new StorageError('Không tìm thấy dự án.', 404);
        return storage.commit({
            deletes: [`${CONTENT_DIRS.projects}/${projectId}.json`],
            message: `${actor}: xoá dự án "${projectId}"`
        });
    }

    throw invalid('Loại nội dung không hợp lệ.');
};

export const uploadImage = async (storage, {folder, filename, contentType, data}) => {
    if (folder !== 'news' && folder !== 'projects') throw invalid('Thư mục ảnh không hợp lệ.');
    const extension = UPLOAD_TYPES[contentType];
    if (!extension) throw invalid('Chỉ hỗ trợ ảnh WEBP, JPG, PNG, GIF, AVIF.');
    if (typeof data !== 'string' || !data) throw invalid('Thiếu dữ liệu ảnh.');

    const buffer = Buffer.from(data, 'base64');
    if (!buffer.length) throw invalid('Ảnh rỗng.');
    if (buffer.length > MAX_UPLOAD_BYTES) throw invalid('Ảnh quá lớn (tối đa 4MB sau khi nén).');

    const month = new Date().toISOString().slice(0, 7);
    const base = slugify(String(filename || '').replace(/\.[^.]+$/, '')).slice(0, 60) || 'image';
    const suffix = crypto.randomBytes(3).toString('hex');
    const filePath = `${UPLOAD_ROOT}/${folder}/${month}/${base}-${suffix}.${extension}`;

    const staged = await storage.stageFile(filePath, buffer);
    return {...staged, url: filePath.replace(/^public/, '')};
};
