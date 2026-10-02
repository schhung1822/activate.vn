// server/admin/auth.js
//
// Đăng nhập trang /admin bằng một tài khoản duy nhất khai báo trong biến môi trường:
//   ADMIN_EMAIL, ADMIN_PASSWORD           - bắt buộc
//   ADMIN_SESSION_SECRET                  - tuỳ chọn, khoá ký cookie phiên
//
// Phiên đăng nhập là cookie HttpOnly đã ký HMAC, không cần database. Không đặt
// ADMIN_SESSION_SECRET thì khoá được suy ra từ email + mật khẩu, nên đổi mật khẩu
// sẽ tự đăng xuất mọi phiên cũ.
import crypto from 'node:crypto';

export const SESSION_COOKIE = 'ng_admin';
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 ngày

const sha256 = (value) => crypto.createHash('sha256').update(String(value)).digest();

const base64url = (input) => Buffer.from(input).toString('base64url');

export const getAuthConfig = (env) => {
    const email = (env.ADMIN_EMAIL || '').trim().toLowerCase();
    const password = env.ADMIN_PASSWORD || '';
    if (!email || !password) return null;

    const secret = env.ADMIN_SESSION_SECRET || sha256(`nextgency-admin:${email}:${password}`).toString('hex');
    return {email, password, secret};
};

/** So sánh qua hash để thời gian so sánh không phụ thuộc độ dài / vị trí sai. */
const safeEqual = (left, right) => crypto.timingSafeEqual(sha256(left), sha256(right));

export const checkCredentials = (config, email, password) => {
    const emailOk = safeEqual(String(email || '').trim().toLowerCase(), config.email);
    const passwordOk = safeEqual(String(password || ''), config.password);
    return emailOk && passwordOk;
};

const sign = (payload, secret) => crypto.createHmac('sha256', secret).update(payload).digest('base64url');

export const createSessionToken = (config) => {
    const payload = base64url(JSON.stringify({email: config.email, exp: Date.now() + SESSION_MAX_AGE * 1000}));
    return `${payload}.${sign(payload, config.secret)}`;
};

export const readSession = (config, token) => {
    if (!config || !token || typeof token !== 'string') return null;
    const [payload, signature] = token.split('.');
    if (!payload || !signature) return null;

    const expected = sign(payload, config.secret);
    if (expected.length !== signature.length) return null;
    if (!crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) return null;

    try {
        const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
        if (data.email !== config.email || typeof data.exp !== 'number' || data.exp < Date.now()) return null;
        return data;
    } catch {
        return null;
    }
};

export const parseCookies = (header = '') =>
    Object.fromEntries(
        header
            .split(';')
            .map((part) => part.trim())
            .filter(Boolean)
            .map((part) => {
                const index = part.indexOf('=');
                if (index === -1) return [part, ''];
                return [part.slice(0, index), decodeURIComponent(part.slice(index + 1))];
            })
    );

export const sessionCookie = (token, {secure}) =>
    [
        `${SESSION_COOKIE}=${encodeURIComponent(token)}`,
        'Path=/api/admin',
        'HttpOnly',
        'SameSite=Strict',
        `Max-Age=${SESSION_MAX_AGE}`,
        secure ? 'Secure' : ''
    ]
        .filter(Boolean)
        .join('; ');

export const clearSessionCookie = ({secure}) =>
    [`${SESSION_COOKIE}=`, 'Path=/api/admin', 'HttpOnly', 'SameSite=Strict', 'Max-Age=0', secure ? 'Secure' : '']
        .filter(Boolean)
        .join('; ');
