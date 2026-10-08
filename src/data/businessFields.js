/* Ba lĩnh vực hoạt động (ba trụ cột năng lực) của Activate.
 *
 * Phần cấu trúc (đường dẫn, icon, ảnh) nằm ở đây; toàn bộ chữ hiển thị lấy từ
 * từ điển `corporate.fields.<key>` nên tự đổi theo ngôn ngữ đang xem.
 * Thêm/bớt lĩnh vực: sửa mảng này + từ điển + seo-configs.js + App.jsx + vercel.json.
 */
import {Boxes, Ship, Store} from 'lucide-react';

export const FIELDS_OVERVIEW_PATH = '/linh-vuc';

export const BUSINESS_FIELDS = [
    {
        key: 'wholesale',
        path: '/linh-vuc/thuong-mai-phan-phoi',
        icon: Boxes,
        image: '/assets/images/about-1.webp'
    },
    {
        key: 'trade',
        path: '/linh-vuc/xuat-nhap-khau',
        icon: Ship,
        image: '/assets/images/tien-phong.webp'
    },
    {
        key: 'agency',
        path: '/linh-vuc/dai-ly-ban-le',
        icon: Store,
        image: '/assets/images/about-2.webp'
    }
];

export const getBusinessField = (key) => BUSINESS_FIELDS.find((field) => field.key === key);

/* Hình thức hợp tác trên biểu mẫu đối tác.
 * `value` là chuỗi ĐƯỢC GHI XUỐNG NocoDB - giữ tiếng Việt, không dịch, để dữ liệu của
 * mọi ngôn ngữ đổ về cùng một giá trị. `key` trỏ tới nhãn hiển thị corporate.form.types.<key>.
 */
export const PARTNERSHIP_TYPES = [
    {key: 'supplier', value: 'Cung ứng hàng hoá'},
    {key: 'distribution', value: 'Phân phối / đại lý'},
    {key: 'trade', value: 'Uỷ thác xuất nhập khẩu'},
    {key: 'finance', value: 'Hợp tác tài chính - ngân hàng'},
    {key: 'other', value: 'Hợp tác khác'}
];
