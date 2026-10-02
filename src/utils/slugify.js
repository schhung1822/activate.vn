// src/utils/slugify.js
// "Chuyển đổi số cấp xã" -> "chuyen-doi-so-cap-xa". Dùng chung cho trang /admin
// (trình duyệt) và API admin (Node) nên không được import gì thêm.
export const slugify = (value) =>
    String(value || '')
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[đĐ]/g, 'd')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 120);
