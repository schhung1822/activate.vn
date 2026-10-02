# Hướng dẫn dùng trang quản trị

Trang quản trị ở **https://nextgency.vn/admin**, dùng để đăng tin tức và quản lý dự án mà không cần sửa code.

## 1. Đăng nhập

Đăng nhập bằng email và mật khẩu quản trị viên. Phiên đăng nhập giữ 7 ngày; bấm **Đăng xuất** ở góc phải khi dùng máy chung.

Quên mật khẩu hoặc cần đổi: nhờ người quản lý Vercel sửa biến `ADMIN_PASSWORD` rồi deploy lại. Đổi mật khẩu sẽ tự đăng xuất mọi phiên cũ.

## 2. Khi nào bài lên website?

Website là trang tĩnh, nên mỗi lần bấm **Lưu** hệ thống sẽ lưu nội dung vào kho mã (GitHub) rồi tự build lại website.

- Trang quản trị thấy thay đổi **ngay lập tức**.
- Website công khai cập nhật sau **khoảng 1-2 phút**.
- Ảnh vừa tải lên có thể chưa hiện trên website cho tới khi build xong. Đó là bình thường.

## 3. Tin tức

### Viết bài mới

1. Vào **Tin tức** → **Viết bài mới**.
2. Nhập **Tiêu đề** và **Mô tả ngắn**. Mô tả hiện ở danh sách tin và trên Google/Facebook khi chia sẻ link, nên viết dưới 160 ký tự.
3. Viết **Nội dung** trong khung soạn thảo (xem mục 3.2).
4. Ở cột bên phải:
   - **Trạng thái:** *Đã đăng* để hiện ngay, *Bản nháp* để lưu lại viết tiếp (bị ẩn khỏi website).
   - **Ngày đăng:** bài có ngày mới hơn hiện lên trước.
   - **Đường dẫn (slug):** tự tạo theo tiêu đề, thường không cần sửa.
   - **Ảnh đại diện:** bấm **Tải ảnh lên** hoặc dán đường dẫn ảnh. Nên dùng ảnh ngang tỉ lệ 16:9 hoặc 16:10.
   - **Danh mục / Tag:** gõ rồi nhấn Enter. Nên chọn lại danh mục đã có trong gợi ý để không bị trùng kiểu "Marketing" / "marketing".
5. Bấm **Đăng bài**.

### Khung soạn thảo

Thanh công cụ có các nút: hoàn tác, kiểu đoạn (đoạn văn / tiêu đề 1-4 / trích dẫn), **in đậm**, *in nghiêng*, code, danh sách, link, chèn ảnh, chèn bảng, đường kẻ ngang, khối code.

Gõ tắt cho nhanh:

| Gõ | Kết quả |
| --- | --- |
| `## ` ở đầu dòng | Tiêu đề mục (nên dùng cho các phần chính của bài) |
| `### ` ở đầu dòng | Tiêu đề phụ |
| `- ` ở đầu dòng | Gạch đầu dòng |
| `1. ` ở đầu dòng | Danh sách đánh số |
| `> ` ở đầu dòng | Trích dẫn |
| `**chữ**` | **in đậm** |
| Ctrl + B / Ctrl + I | In đậm / in nghiêng |
| Ctrl + K | Chèn link |

Mẹo:

- Dùng **Tiêu đề 2** cho các phần chính, **Tiêu đề 3** cho phần nhỏ. Trang tin tức tự tạo **mục lục** từ các tiêu đề này.
- **Chèn ảnh:** bấm nút ảnh trên thanh công cụ rồi chọn file. Ảnh tự được nén sang WEBP và thu nhỏ còn tối đa 1920px nên không cần nén trước.
- **Dán từ Word/Google Docs:** được, nhưng nên kiểm tra lại định dạng sau khi dán.
- Không có gạch chân và màu chữ: website không hiển thị được hai kiểu này.
- Nút **Source** (biểu tượng cuối thanh công cụ) mở chế độ sửa mã Markdown trực tiếp, dành cho người quen Markdown.
- Một vài bài cũ có đoạn mã đặc biệt sẽ tự mở ở chế độ sửa Markdown thô. Vẫn sửa và lưu bình thường.

### Sửa, ẩn, xoá bài

- Bấm vào tiêu đề (hoặc biểu tượng bút chì) trong danh sách để sửa, rồi bấm **Lưu thay đổi**.
- **Ẩn tạm** một bài: đổi trạng thái sang *Bản nháp* rồi lưu. Bài vẫn còn, có thể đăng lại sau.
- **Xoá hẳn:** biểu tượng thùng rác trong danh sách. Thao tác này không hoàn tác được trên trang quản trị (kỹ thuật viên vẫn khôi phục được từ lịch sử GitHub).
- Đổi tiêu đề **không** tự đổi đường dẫn bài, để link cũ đã chia sẻ không bị hỏng.

## 4. Dự án

### Thêm / sửa dự án

1. Vào **Dự án** → **Thêm dự án** (hoặc bấm vào dự án có sẵn).
2. Ở khung **Nội dung**, nhập theo từng tab ngôn ngữ:
   - **Tiếng Việt là bắt buộc.**
   - Tab **English / 中文**: ô nào để trống thì website hiện bản tiếng Việt. Chấm vàng trên tab nghĩa là ngôn ngữ đó chưa nhập đủ tên + tóm tắt.
   - **Chi tiết triển khai:** mỗi đoạn văn cách nhau **một dòng trống**.
3. **Kết quả & số liệu:** giá trị (VD `+38%`) dùng chung cho mọi ngôn ngữ, còn nhãn (VD "Tăng trưởng doanh thu") nhập theo tab ngôn ngữ đang chọn.
4. **Hình ảnh:** tải lên được nhiều ảnh cùng lúc. Ảnh đầu tiên là **ảnh bìa**; dùng nút mũi tên để đổi thứ tự.
5. Cột bên phải:
   - **Mã dự án:** tạo tự động từ tên, là đường dẫn `/projects/<mã>`. **Không đổi được sau khi tạo.**
   - **Thứ tự hiển thị:** số nhỏ đứng trước ở trang chủ và trang dịch vụ.
   - **Thời gian thực hiện:** dạng `MM/YYYY`, VD `07/2026`.
   - **Danh mục:** dự án có danh mục *Website & Landing Page* sẽ hiện ở trang dịch vụ Website.
   - **Link sản phẩm / Video:** để trống thì website ẩn nút / khối video tương ứng.
6. Bấm **Thêm dự án** hoặc **Lưu thay đổi**.

### Lưu ý với dự án nổi bật ở trang chủ

4 dự án ở khối "Dự án tiêu biểu" trên trang chủ được chọn cố định trong code (Beauty Summit, SRX, Hoàng Minh, Topmus). Sửa nội dung các dự án này trong admin thì trang chủ cập nhật theo. Muốn **đổi sang dự án khác** thì cần nhờ kỹ thuật.

## 5. Đăng bài tự động từ phần mềm khác

Tin tức có thể đăng tự động qua API (n8n, Make, tool viết bài AI...). Xem tab **API đăng tin tức** để biết cách tích hợp.

## 6. Gặp lỗi?

| Thông báo | Cách xử lý |
| --- | --- |
| "Phiên đăng nhập đã hết hạn" | Đăng nhập lại. Nội dung đang soạn chưa lưu sẽ mất, nên copy ra trước |
| "GitHub 401 / 403..." | Token GitHub hết hạn hoặc thiếu quyền. Nhờ kỹ thuật tạo token mới trong Vercel |
| "GitHub 409 / 422..." | Có người vừa lưu cùng lúc. Bấm lưu lại lần nữa |
| Đã lưu nhưng website chưa đổi | Đợi 2-3 phút rồi tải lại trang (Ctrl + F5). Vẫn chưa đổi thì kiểm tra trang Deployments trên Vercel |
