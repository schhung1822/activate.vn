// server/admin/newsApi.js
//
// API công khai để phần mềm khác (n8n, Make, tool viết bài AI...) đăng tin tức.
// Tài liệu cho người tích hợp: docs/news-api.md
//
//   GET    /api/news            danh sách bài (không kèm nội dung)
//   POST   /api/news            đăng bài mới
//   GET    /api/news/{id}       một bài, kèm nội dung markdown
//   PATCH  /api/news/{id}       sửa một phần (PUT cũng được, xử lý như PATCH)
//   DELETE /api/news/{id}       xoá bài
//
// Xác thực: header "Authorization: Bearer <key>" (hoặc "X-API-Key: <key>"), key lấy từ
// biến môi trường NEWS_API_KEY - nhiều key thì cách nhau bằng dấu phẩy để đổi key dần.
// Không dùng cookie nên mở CORS cho mọi nguồn là an toàn.
import crypto from 'node:crypto';
import TurndownService from 'turndown';
import {gfm} from 'turndown-plugin-gfm';
import {SITE} from '../../src/pages/seo-configs.js';
import {markdownExcerpt} from '../../src/utils/markdownExcerpt.js';
import {createStorage, StorageError} from './storage.js';
import {deleteContent, listContent, saveContent, uploadImage} from './content.js';

const MIN_KEY_LENGTH = 20;
const ACTOR = 'API';

const ERROR_CODES = {
    400: 'validation_error',
    401: 'unauthorized',
    404: 'not_found',
    405: 'method_not_allowed',
    502: 'storage_error',
    503: 'not_configured'
};

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, X-API-Key, Content-Type',
    'Access-Control-Max-Age': '86400'
};

const respond = (status, body) => ({status, headers: CORS_HEADERS, body});

const fail = (status, message) =>
    respond(status, {error: {code: ERROR_CODES[status] || 'internal_error', message}});

/* ------------------------------------------------------------- xác thực */

/** Danh sách key hợp lệ; key quá ngắn bị bỏ qua để tránh key dễ đoán. */
export const getApiKeys = (env) =>
    String(env.NEWS_API_KEY || '')
        .split(',')
        .map((key) => key.trim())
        .filter((key) => key.length >= MIN_KEY_LENGTH);

const sha256 = (value) => crypto.createHash('sha256').update(value).digest();

const isAuthorized = (keys, headers) => {
    const bearer = /^Bearer\s+(.+)$/i.exec(headers.authorization || '')?.[1];
    const provided = (bearer || headers['x-api-key'] || '').trim();
    if (!provided) return false;
    // So sánh qua hash: thời gian không phụ thuộc nội dung key
    return keys.some((key) => crypto.timingSafeEqual(sha256(key), sha256(provided)));
};

/* ------------------------------------------------------------- dữ liệu */

const turndown = new TurndownService({headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced', hr: '---'});
turndown.use(gfm);
turndown.remove(['script', 'style', 'iframe', 'object', 'embed', 'form']);

const htmlToMarkdown = (html) =>
    turndown
        .turndown(String(html))
        // Turndown để 3 dấu cách sau "-" / "1." - rút về 1 cho giống bài viết tay
        .replace(/^(\s*)(-|\d+\.)\s{2,}/gm, '$1$2 ');

const todayInVietnam = () => new Intl.DateTimeFormat('en-CA', {timeZone: 'Asia/Ho_Chi_Minh'}).format(new Date());

const publicUrl = (item) => `${SITE.baseUrl}/news/${item.slug}-${item.id}`;

const present = (item, {withContent = false} = {}) => {
    const {content, ...meta} = item;
    return {...meta, url: publicUrl(item), ...(withContent ? {content} : {})};
};

const ALLOWED_FIELDS = ['title', 'slug', 'description', 'thumbnail', 'date', 'status', 'categories', 'tags'];

/**
 * Ghép dữ liệu gửi lên với bài hiện có (khi sửa). Trả về {item, content, upload}.
 * Chỉ trường nào có mặt trong body mới bị thay đổi.
 */
const mergeInput = (body, existing) => {
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
        throw new StorageError('Body phải là JSON object.', 400);
    }

    const item = existing ? {...existing} : {status: 'published', date: todayInVietnam(), categories: [], tags: []};
    delete item.content;
    ALLOWED_FIELDS.forEach((field) => {
        if (body[field] !== undefined) item[field] = body[field];
    });
    ['categories', 'tags'].forEach((field) => {
        if (typeof item[field] === 'string') item[field] = item[field].split(',');
        if (item[field] !== undefined && !Array.isArray(item[field])) {
            throw new StorageError(`"${field}" phải là mảng chuỗi.`, 400);
        }
    });
    // Chấp nhận cả ISO datetime ("2026-10-02T09:00:00Z") - chỉ lấy phần ngày
    if (typeof item.date === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(item.date)) item.date = item.date.slice(0, 10);
    if (body.thumbnailUpload !== undefined && (typeof body.thumbnailUpload !== 'object' || body.thumbnailUpload === null)) {
        throw new StorageError('"thumbnailUpload" phải là object {data, contentType, filename}.', 400);
    }
    if (item.status !== undefined && !['published', 'draft'].includes(item.status)) {
        throw new StorageError('"status" chỉ nhận "published" hoặc "draft".', 400);
    }

    let content = existing?.content ?? '';
    if (typeof body.content === 'string') content = body.content;
    else if (typeof body.contentHtml === 'string') content = htmlToMarkdown(body.contentHtml);
    if (body.content !== undefined && typeof body.content !== 'string') {
        throw new StorageError('"content" phải là chuỗi markdown.', 400);
    }

    // Bài mới mà đổi tiêu đề thì slug đi theo tiêu đề; bài cũ giữ slug để không gãy link
    if (!existing && body.slug === undefined) item.slug = '';
    if (!item.description && body.description === undefined) item.description = markdownExcerpt(content);

    return {item, content, upload: body.thumbnailUpload};
};

/* -------------------------------------------------------------- xử lý */

/**
 * @param {object} request
 * @param {string} request.method
 * @param {string|null} request.id         - id trong đường dẫn /api/news/{id}
 * @param {Record<string, string>} request.query
 * @param {Record<string, string|undefined>} request.headers
 * @param {any} request.body
 * @param {Record<string, string|undefined>} request.env
 * @param {string} [request.root]
 */
export const handleNewsApiRequest = async ({method, id, query = {}, headers = {}, body, env, root}) => {
    if (method === 'OPTIONS') return {status: 204, headers: CORS_HEADERS, body: null};

    const keys = getApiKeys(env);
    if (!keys.length) {
        return fail(503, `API chưa được bật: thêm NEWS_API_KEY (ít nhất ${MIN_KEY_LENGTH} ký tự) vào biến môi trường.`);
    }
    if (!isAuthorized(keys, headers)) {
        return fail(401, 'Thiếu hoặc sai API key. Gửi header "Authorization: Bearer <key>".');
    }

    try {
        const storage = createStorage(env, {root});
        const all = await listContent(storage, 'news');

        // ---- /api/news
        if (!id) {
            if (method === 'GET') {
                const status = query.status;
                const search = String(query.q || '').trim().toLowerCase();
                const filtered = all.filter(
                    (item) =>
                        (!status || item.status === status) &&
                        (!search || `${item.title} ${item.description}`.toLowerCase().includes(search))
                );
                const limit = Math.min(Math.max(Number(query.limit) || 20, 1), 100);
                const offset = Math.max(Number(query.offset) || 0, 0);
                return respond(200, {
                    data: filtered.slice(offset, offset + limit).map((item) => present(item)),
                    total: filtered.length,
                    limit,
                    offset
                });
            }

            if (method === 'POST') {
                const {item, content, upload} = mergeInput(body, null);
                const files = [];
                if (upload) {
                    const image = await uploadImage(storage, {...upload, folder: 'news'});
                    item.thumbnail = image.url;
                    files.push(image);
                }
                const result = await saveContent(storage, {type: 'news', isNew: true, item, content, files}, {actor: ACTOR});
                return respond(201, {data: present(result.item, {withContent: true}), commit: result.commit || null});
            }

            return fail(405, `Không hỗ trợ ${method} /api/news.`);
        }

        // ---- /api/news/{id}
        const existing = all.find((item) => String(item.id) === String(id));
        if (!existing) return fail(404, `Không có bài viết #${id}.`);

        if (method === 'GET') return respond(200, {data: present(existing, {withContent: true})});

        if (method === 'PATCH' || method === 'PUT') {
            const {item, content, upload} = mergeInput(body, existing);
            const files = [];
            if (upload) {
                const image = await uploadImage(storage, {...upload, folder: 'news'});
                item.thumbnail = image.url;
                files.push(image);
            }
            const result = await saveContent(storage, {type: 'news', isNew: false, item, content, files}, {actor: ACTOR});
            return respond(200, {data: present(result.item, {withContent: true}), commit: result.commit || null});
        }

        if (method === 'DELETE') {
            const result = await deleteContent(storage, {type: 'news', id: existing.id}, {actor: ACTOR});
            return respond(200, {data: {id: existing.id, deleted: true}, commit: result.commit || null});
        }

        return fail(405, `Không hỗ trợ ${method} /api/news/{id}.`);
    } catch (error) {
        if (error instanceof StorageError) return fail(error.status, error.message);
        console.error('[news-api]', error);
        return fail(500, 'Lỗi máy chủ. Vui lòng thử lại.');
    }
};
