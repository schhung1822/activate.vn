# Nội dung website (tin tức & dự án)

Thư mục này được sửa qua trang **/admin** - thường không cần sửa tay.

| File | Nội dung |
| --- | --- |
| `news/<id>.json` | Thông tin bài viết: tiêu đề, mô tả, ảnh đại diện, ngày đăng, danh mục, tag, trạng thái |
| `news/<id>.md` | Nội dung bài viết (markdown) |
| `projects/<id>.json` | Một dự án: ảnh, ngày, đối tác, công nghệ, số liệu + chữ cho `vi` / `en` / `cn` |

Ảnh tải lên từ /admin nằm ở `public/assets/images/uploads/`.
Bài viết / dự án có `"status": "draft"` bị ẩn khỏi website.

## Cài đặt /admin

1. Copy `.env.example` thành `.env.local`, điền `ADMIN_EMAIL` và `ADMIN_PASSWORD`.
2. `npm run dev` rồi mở `http://localhost:3000/admin` - khi chạy local, nội dung được ghi
   thẳng vào thư mục này; nhớ commit + push.
3. Trên Vercel (ổ đĩa chỉ đọc), mỗi lần lưu là một commit lên GitHub và Vercel tự build lại.
   Cần khai báo trong Project Settings → Environment Variables:
   `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `GITHUB_TOKEN` (fine-grained token, chỉ repo này,
   quyền **Contents: Read and write**), và `GITHUB_REPO` / `GITHUB_BRANCH` nếu khác mặc định.

Tin tức còn đăng được từ phần mềm khác qua `/api/news` (cần `NEWS_API_KEY`), xem
[docs/news-api.md](../../docs/news-api.md). Hướng dẫn dùng trang quản trị:
[docs/huong-dan-admin.md](../../docs/huong-dan-admin.md) - cả hai cũng xem được trong /admin → Hướng dẫn.

Mã nguồn: giao diện ở `src/admin/`, API ở `server/admin/` (Vercel: `api/admin.js`, `api/news/`).
