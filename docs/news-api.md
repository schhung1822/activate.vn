# API đăng tin tức

API cho phép phần mềm khác (n8n, Make, Zapier, tool viết bài AI, script nội bộ...) đăng, sửa, xoá bài viết trên trang **Tin tức** của nextgency.vn mà không cần vào trang quản trị.

- **Địa chỉ gốc:** `https://nextgency.vn/api/news`
- **Định dạng:** JSON (gửi kèm header `Content-Type: application/json`)
- **Phạm vi:** chỉ tin tức / bài viết. Dự án vẫn quản lý trong trang `/admin`.

> **Lưu ý thời gian cập nhật:** website là trang tĩnh. Mỗi lần đăng/sửa/xoá qua API sẽ tạo một commit lên GitHub, Vercel build lại và bài mới **xuất hiện trên website sau khoảng 1-2 phút**. API trả về ngay sau khi commit xong.

## 1. Xác thực

Mọi request phải gửi API key trong header:

```http
Authorization: Bearer <API_KEY>
```

Hoặc dùng `X-API-Key: <API_KEY>` nếu công cụ của bạn không hỗ trợ Bearer.

- API key do quản trị viên cấp, lưu ở biến môi trường `NEWS_API_KEY` trên Vercel.
- Giữ key bí mật như mật khẩu: ai có key đều đăng/xoá được bài. Không nhúng key vào code chạy trên trình duyệt hoặc ứng dụng di động.
- Thiếu hoặc sai key, API trả về `401`. Server chưa cấu hình key thì trả về `503`.

## 2. Các endpoint

| Phương thức | Đường dẫn | Mô tả |
| --- | --- | --- |
| `GET` | `/api/news` | Danh sách bài viết (không kèm nội dung) |
| `POST` | `/api/news` | Đăng bài mới |
| `GET` | `/api/news/{id}` | Xem một bài, kèm nội dung |
| `PATCH` | `/api/news/{id}` | Sửa bài: chỉ gửi trường cần đổi (`PUT` cũng được, xử lý giống `PATCH`) |
| `DELETE` | `/api/news/{id}` | Xoá bài |

## 3. Cấu trúc bài viết

| Trường | Kiểu | Bắt buộc | Mô tả |
| --- | --- | --- | --- |
| `title` | string | **Có** (khi tạo) | Tiêu đề bài |
| `content` | string | | Nội dung dạng **Markdown** |
| `contentHtml` | string | | Nội dung dạng **HTML**. Server tự chuyển sang Markdown. Bỏ qua nếu đã gửi `content` |
| `description` | string | | Mô tả ngắn, dùng ở danh sách tin và làm mô tả SEO (nên dưới 160 ký tự). Bỏ trống thì tự lấy đoạn văn đầu tiên của nội dung |
| `thumbnail` | string | | Đường dẫn ảnh đại diện: URL đầy đủ (`https://...`) hoặc đường dẫn trên website (`/assets/...`) |
| `thumbnailUpload` | object | | Tải ảnh đại diện lên website (xem mục 5). Ghi đè `thumbnail` |
| `date` | string | | Ngày đăng `YYYY-MM-DD` (nhận cả ISO datetime). Mặc định là hôm nay (giờ Việt Nam). Bài mới hơn hiện trước |
| `status` | string | | `published` (mặc định, hiện trên website) hoặc `draft` (bản nháp, bị ẩn) |
| `slug` | string | | Phần chữ trong đường dẫn. Mặc định tạo từ tiêu đề, bỏ dấu tiếng Việt |
| `categories` | string[] | | Danh mục, ví dụ `["Marketing", "AI"]`. Nhận cả chuỗi cách nhau bằng dấu phẩy |
| `tags` | string[] | | Tag |

Các trường do server tạo, có trong response:

| Trường | Mô tả |
| --- | --- |
| `id` | Mã bài (số), tự tăng |
| `url` | Link bài trên website: `https://nextgency.vn/news/{slug}-{id}` |

**Markdown được hỗ trợ:** tiêu đề `##`, in đậm/nghiêng, danh sách, link, ảnh `![mô tả](url)`, trích dẫn `>`, bảng, khối code. Không hỗ trợ HTML lồng trong Markdown: muốn gửi HTML thì dùng `contentHtml`.

## 4. Ví dụ

### Đăng bài mới

```bash
curl -X POST https://nextgency.vn/api/news \
  -H "Authorization: Bearer $NEWS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "5 xu hướng marketing AI năm 2026",
    "content": "## Mở đầu\n\nAI đang thay đổi cách doanh nghiệp làm marketing...\n\n- Cá nhân hoá nội dung\n- Tự động hoá chăm sóc khách hàng",
    "thumbnail": "https://example.com/anh-bia.jpg",
    "categories": ["Marketing", "AI"],
    "tags": ["AI marketing"]
  }'
```

Response `201 Created`:

```json
{
  "data": {
    "id": 16,
    "slug": "5-xu-huong-marketing-ai-nam-2026",
    "status": "published",
    "title": "5 xu hướng marketing AI năm 2026",
    "description": "AI đang thay đổi cách doanh nghiệp làm marketing...",
    "thumbnail": "https://example.com/anh-bia.jpg",
    "date": "2026-10-02",
    "categories": ["Marketing", "AI"],
    "tags": ["AI marketing"],
    "url": "https://nextgency.vn/news/5-xu-huong-marketing-ai-nam-2026-16",
    "content": "## Mở đầu\n\nAI đang thay đổi cách doanh nghiệp làm marketing..."
  },
  "commit": "9f2c1e7..."
}
```

### Đăng bài từ HTML, để ở dạng bản nháp

```bash
curl -X POST https://nextgency.vn/api/news \
  -H "Authorization: Bearer $NEWS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Bài viết từ trình soạn thảo HTML",
    "contentHtml": "<h2>Giới thiệu</h2><p>Nội dung <strong>quan trọng</strong>.</p>",
    "status": "draft"
  }'
```

Bản nháp không hiện trên website. Vào `/admin` để duyệt, hoặc gọi `PATCH` với `{"status": "published"}` để đăng.

### Lấy danh sách bài

```bash
curl "https://nextgency.vn/api/news?limit=10&status=published" \
  -H "Authorization: Bearer $NEWS_API_KEY"
```

Tham số (đều tuỳ chọn):

| Tham số | Mô tả |
| --- | --- |
| `limit` | Số bài mỗi trang, 1-100, mặc định 20 |
| `offset` | Bỏ qua bao nhiêu bài đầu (phân trang), mặc định 0 |
| `status` | Lọc `published` hoặc `draft` |
| `q` | Tìm theo tiêu đề / mô tả |

Response `200`:

```json
{
  "data": [{"id": 16, "title": "...", "url": "...", "...": "..."}],
  "total": 16,
  "limit": 10,
  "offset": 0
}
```

Bài được sắp xếp mới nhất trước (theo `date`).

### Xem một bài

```bash
curl https://nextgency.vn/api/news/16 \
  -H "Authorization: Bearer $NEWS_API_KEY"
```

### Sửa bài

Chỉ gửi những trường muốn đổi, các trường khác giữ nguyên:

```bash
curl -X PATCH https://nextgency.vn/api/news/16 \
  -H "Authorization: Bearer $NEWS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"title": "5 xu hướng marketing AI nổi bật năm 2026", "tags": ["AI", "Marketing 2026"]}'
```

Đổi tiêu đề **không** đổi `slug`, để link cũ đã chia sẻ không bị gãy. Muốn đổi link thì gửi `slug` mới.

### Xoá bài

```bash
curl -X DELETE https://nextgency.vn/api/news/16 \
  -H "Authorization: Bearer $NEWS_API_KEY"
```

Response: `{"data": {"id": 16, "deleted": true}, "commit": "..."}`

## 5. Tải ảnh đại diện

Nếu ảnh chưa có URL công khai, gửi thẳng nội dung ảnh (base64) trong `thumbnailUpload`. Ảnh được lưu vào website tại `/assets/images/uploads/news/...`:

```json
{
  "title": "Bài có ảnh tải lên",
  "content": "Nội dung...",
  "thumbnailUpload": {
    "filename": "anh-bia.jpg",
    "contentType": "image/jpeg",
    "data": "/9j/4AAQSkZJRgABAQ..."
  }
}
```

- `contentType`: `image/webp`, `image/jpeg`, `image/png`, `image/gif` hoặc `image/avif`.
- `data`: base64 thuần, **không** có tiền tố `data:image/...;base64,`.
- Tối đa 4MB mỗi ảnh. Toàn bộ request không vượt quá 4.5MB (giới hạn của Vercel). Nên nén ảnh, ưu tiên WEBP, rộng tối đa khoảng 1920px.
- Ảnh trong **nội dung** bài: dùng URL công khai trong Markdown `![mô tả](https://...)`.

## 6. Lỗi

Mọi lỗi có dạng:

```json
{"error": {"code": "validation_error", "message": "Bài viết cần có tiêu đề."}}
```

| HTTP | `code` | Khi nào |
| --- | --- | --- |
| 400 | `validation_error` | Dữ liệu sai: thiếu tiêu đề, sai định dạng ngày, ảnh không hợp lệ... |
| 400 | `invalid_json` | Body không phải JSON hợp lệ |
| 401 | `unauthorized` | Thiếu hoặc sai API key |
| 404 | `not_found` | Không có bài với `id` này |
| 405 | `method_not_allowed` | Sai phương thức HTTP |
| 502 | `storage_error` | Lỗi khi ghi lên GitHub, thường do token hết hạn hoặc thiếu quyền. Báo quản trị viên |
| 503 | `not_configured` | Server chưa bật API (`NEWS_API_KEY`) hoặc chưa cấu hình GitHub |
| 500 | `internal_error` | Lỗi không mong muốn. Thử lại sau |

## 7. Gợi ý khi tích hợp

- **Không gửi lại khi chưa chắc lỗi:** API không có cơ chế chống trùng. Nếu request bị timeout, gọi `GET /api/news?q=<tiêu đề>` kiểm tra trước khi đăng lại.
- **Đăng nhiều bài:** gửi lần lượt từng bài, không gửi song song. Mỗi bài là một commit; gửi dồn dập sẽ làm Vercel build nhiều lần liên tiếp.
- **n8n / Make:** dùng node *HTTP Request*, method `POST`, URL `https://nextgency.vn/api/news`, thêm header `Authorization` = `Bearer <key>`, body dạng JSON như ví dụ trên.
- **CORS** đã mở cho mọi nguồn, nhưng không nên gọi API từ trình duyệt vì sẽ lộ key.
