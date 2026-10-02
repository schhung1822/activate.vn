// src/admin/imageUpload.js
//
// Ảnh được nén ngay trên trình duyệt (chuyển WEBP, tối đa 1920px) trước khi gửi lên,
// vừa nhẹ cho website vừa nằm trong giới hạn 4.5MB/request của Vercel.
//
// Khi lưu bằng GitHub, ảnh mới chỉ có trên website sau khi Vercel build xong, nên
// trong phiên làm việc trang admin hiển thị bản xem trước từ chính file đã chọn.
import {adminApi} from './api.js';

const MAX_WIDTH = 1920;
const QUALITY = 0.85;

const previews = new Map(); // url trên website -> object URL để xem trước

export const previewSrc = (url) => previews.get(url) || url;

const toBase64 = (blob) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result).split(',')[1] || '');
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
    });

const compress = async (file) => {
    // GIF giữ nguyên để không mất chuyển động
    if (file.type === 'image/gif') return file;

    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_WIDTH / bitmap.width);
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close?.();

    const webp = await new Promise((resolve) => canvas.toBlob(resolve, 'image/webp', QUALITY));
    if (webp && webp.type === 'image/webp') return webp;
    // Trình duyệt không xuất được WEBP (Safari cũ) -> JPEG
    return new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', QUALITY));
};

/**
 * Nén + tải một ảnh lên. Trả về {url, path, sha?}:
 *   url  - đường dẫn dùng trong bài viết (/assets/images/uploads/...)
 *   sha  - chỉ có khi lưu bằng GitHub; phải gửi kèm lúc bấm Lưu để ảnh vào commit
 */
export const uploadImage = async (file, folder) => {
    if (!file.type.startsWith('image/') || file.type === 'image/svg+xml') {
        throw new Error('Chỉ hỗ trợ file ảnh JPG, PNG, WEBP, GIF, AVIF.');
    }
    const blob = await compress(file);
    const result = await adminApi.upload({
        folder,
        filename: file.name,
        contentType: blob.type,
        data: await toBase64(blob)
    });
    previews.set(result.url, URL.createObjectURL(blob));
    return result;
};

/** Ảnh đã tải lên nhưng chưa commit, chỉ giữ những ảnh còn được dùng trong bài. */
export const filesToCommit = (staged, ...contents) => {
    const haystack = contents.map((value) => (typeof value === 'string' ? value : JSON.stringify(value))).join('\n');
    return staged.filter((file) => file.sha && haystack.includes(file.url));
};
