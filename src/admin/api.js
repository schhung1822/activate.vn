// src/admin/api.js - gọi API /api/admin (server/admin/handler.js)

export class ApiError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

const request = async (action, {method = 'GET', params = {}, body} = {}) => {
    const query = new URLSearchParams({action, ...params});
    let response;
    try {
        response = await fetch(`/api/admin?${query}`, {
            method,
            credentials: 'same-origin',
            headers: {
                // Server từ chối request ghi không có header này (chống CSRF)
                'X-Admin-Request': '1',
                ...(body ? {'Content-Type': 'application/json'} : {})
            },
            body: body ? JSON.stringify(body) : undefined
        });
    } catch {
        throw new ApiError('Không kết nối được máy chủ. Kiểm tra mạng rồi thử lại.', 0);
    }

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
        if (response.status === 401 && action !== 'login') {
            window.dispatchEvent(new Event('nextgency-admin:unauthorized'));
        }
        throw new ApiError(data.error || `Lỗi ${response.status}`, response.status);
    }
    return data;
};

export const adminApi = {
    session: () => request('session'),
    login: (email, password) => request('login', {method: 'POST', body: {email, password}}),
    logout: () => request('logout', {method: 'POST', body: {}}),
    list: (type) => request('list', {params: {type}}).then((data) => data.items),
    save: (payload) => request('save', {method: 'POST', body: payload}),
    remove: (type, id) => request('delete', {method: 'POST', body: {type, id}}),
    upload: (payload) => request('upload', {method: 'POST', body: payload})
};
