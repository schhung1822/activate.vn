// server/admin/handler.js
//
// API của trang /admin, viết không phụ thuộc framework để dùng chung cho:
//   - api/admin.js                (Vercel Function, khi chạy thật)
//   - server/admin/vitePlugin.js  (dev server của Vite, khi `npm run dev`)
//
// Gọi: /api/admin?action=<tên>
//   GET  session                      -> đã đăng nhập chưa + đang lưu kiểu gì
//   POST login  {email, password}
//   POST logout
//   GET  list   &type=news|projects
//   POST save   {type, item, content?, isNew, files?}
//   POST delete {type, id}
//   POST upload {folder, filename, contentType, data(base64)}
import {
    checkCredentials,
    clearSessionCookie,
    createSessionToken,
    getAuthConfig,
    parseCookies,
    readSession,
    SESSION_COOKIE,
    sessionCookie
} from './auth.js';
import {createStorage, StorageError} from './storage.js';
import {deleteContent, listContent, saveContent, uploadImage} from './content.js';
import {getApiKeys} from './newsApi.js';

const json = (status, body, headers = {}) => ({status, headers, body});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * @param {object} request
 * @param {string} request.method
 * @param {Record<string, string>} request.query
 * @param {Record<string, string|undefined>} request.headers  - tên header viết thường
 * @param {any} request.body                                  - JSON đã parse
 * @param {Record<string, string|undefined>} request.env
 * @param {string} [request.root]                             - thư mục dự án (chế độ local)
 */
export const handleAdminRequest = async ({method, query = {}, headers = {}, body, env, root}) => {
    const action = query.action || '';
    const secure = headers['x-forwarded-proto'] === 'https' || Boolean(env.VERCEL);
    const auth = getAuthConfig(env);

    try {
        // Chặn CSRF: mọi request ghi phải tự gắn header này (form của trang khác không gắn được)
        if (method === 'POST' && headers['x-admin-request'] !== '1') {
            return json(403, {error: 'Yêu cầu không hợp lệ.'});
        }

        const session = readSession(auth, parseCookies(headers.cookie)[SESSION_COOKIE]);

        if (action === 'session' && method === 'GET') {
            let storage = null;
            let storageError = null;
            try {
                storage = createStorage(env, {root}).describe();
            } catch (error) {
                storageError = error.message;
            }
            return json(200, {
                configured: Boolean(auth),
                authenticated: Boolean(session),
                email: session?.email || null,
                storage,
                storageError,
                // Chỉ báo có bật hay không - không bao giờ trả key về trình duyệt
                newsApiEnabled: getApiKeys(env).length > 0
            });
        }

        if (action === 'login' && method === 'POST') {
            if (!auth) {
                return json(503, {error: 'Chưa cấu hình ADMIN_EMAIL và ADMIN_PASSWORD trong biến môi trường.'});
            }
            if (!checkCredentials(auth, body?.email, body?.password)) {
                await wait(800); // làm chậm dò mật khẩu
                return json(401, {error: 'Email hoặc mật khẩu không đúng.'});
            }
            return json(200, {ok: true, email: auth.email}, {
                'Set-Cookie': sessionCookie(createSessionToken(auth), {secure})
            });
        }

        if (action === 'logout' && method === 'POST') {
            return json(200, {ok: true}, {'Set-Cookie': clearSessionCookie({secure})});
        }

        // ---- Từ đây trở xuống cần đăng nhập
        if (!session) return json(401, {error: 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.'});

        const storage = createStorage(env, {root});

        if (action === 'list' && method === 'GET') {
            return json(200, {items: await listContent(storage, query.type)});
        }
        if (action === 'save' && method === 'POST') {
            return json(200, await saveContent(storage, body || {}));
        }
        if (action === 'delete' && method === 'POST') {
            return json(200, await deleteContent(storage, body || {}));
        }
        if (action === 'upload' && method === 'POST') {
            return json(200, await uploadImage(storage, body || {}));
        }

        return json(404, {error: 'Không có tác vụ này.'});
    } catch (error) {
        if (error instanceof StorageError) return json(error.status, {error: error.message});
        console.error('[admin]', error);
        return json(500, {error: 'Lỗi máy chủ. Vui lòng thử lại.'});
    }
};
