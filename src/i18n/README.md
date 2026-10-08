# Đa ngôn ngữ (i18n)

Ba ngôn ngữ, phân biệt bằng prefix trong URL:

| Ngôn ngữ | Mã | URL | `<html lang>` |
|---|---|---|---|
| Tiếng Việt (mặc định) | `vi` | `/`, `/about` | `vi` |
| English | `en` | `/en`, `/en/about` | `en` |
| 简体中文 | `cn` | `/cn`, `/cn/about` | `zh-Hans` |

**Ngôn ngữ nằm ở URL, không nằm ở state.** Vào `activate.vn` luôn ra tiếng Việt;
không có chuyển hướng tự động theo trình duyệt. Nhờ vậy mọi link chia sẻ mở đúng ngôn
ngữ, và crawler thấy đúng nội dung mà không cần chạy JavaScript.

## Dùng trong component

```jsx
import { Link, useI18n } from '../i18n';   // '../../i18n' nếu ở thư mục con

const MyComponent = () => {
    const { t, tm, locale, localePath } = useI18n();

    return (
        <div>
            <h2>{t('home.about.titleLine1')}</h2>
            <p>{t('language.switchTo', { language: 'English' })}</p>   {/* nội suy {{language}} */}
            {tm('home.testimonials.items').map((quote, i) => <p key={i}>{quote}</p>)}

            {/* Link tự gắn prefix: '/about' -> '/en/about' khi đang ở tiếng Anh */}
            <Link to="/about">...</Link>
        </div>
    );
};
```

- `t(key, vars?)` – lấy chuỗi đã dịch, có nội suy `{{tên}}`.
- `tm(key)` – lấy danh sách (mảng) đã dịch.
- `localePath(path)` – gắn prefix thủ công, cho trường hợp không dùng `<Link>`.
- `useLocalizedNavigate()` – như `useNavigate` nhưng tự gắn prefix.

**Luôn import `Link` từ `../i18n`, đừng import từ `react-router-dom`** – nếu không,
link sẽ nhảy về tiếng Việt khi khách đang ở `/en` hoặc `/cn`.

Chưa có key ở `en`/`cn` thì tự rơi về tiếng Việt (và log cảnh báo khi chạy `npm run dev`),
nên trang không bao giờ trắng hay hiện ra chính cái key.

## Phạm vi đã dịch

Toàn bộ trang của site đã có EN + ZH: trang chủ, giới thiệu, liên hệ, 9 trang dịch vụ,
các trang dự án (kể cả 31 case study chi tiết), thư viện workflow, case study Mini App,
trang đặt lịch Growth Call, chính sách bảo mật, 404 và toàn bộ header/footer/form.

**Giữ nguyên tiếng Việt ở mọi ngôn ngữ** (theo thống nhất với khách hàng):

- Nội dung 15 bài tin tức trong `src/data/doc/*.md` và tiêu đề/mô tả của chúng.
- Tên riêng: tên người (`Ngô Hồng Sơn`), tên khách hàng/đối tác trong `projectsData.js`.
- Số tiền VND (`100.000đ`, `9.000.000đ`) và số tài khoản ngân hàng.
- Giá trị `value` của `CONSULTATION_SERVICE_OPTIONS` – đây là chuỗi ghi xuống NocoDB,
  đổi sẽ làm vỡ báo cáo. Chỉ nhãn hiển thị được dịch.

## Thêm / sửa bản dịch

1. Thêm key vào `translations/vi.js` (bản gốc), rồi thêm đúng key đó vào `en.js` và `cn.js`.
2. Chạy `npm run check-i18n`. Script kiểm tra ba việc:
   - key có ở tiếng Việt nhưng thiếu ở en/cn (sẽ hiển thị ra tiếng Việt),
   - key thừa còn sót lại,
   - **key được gọi bằng `t('...')` trong code nhưng từ điển không có** – lỗi này
     không làm gãy build, trang chỉ lặng lẽ in ra đúng cái tên key.

## Thêm meta SEO cho một trang

Trong `src/pages/seo-configs.js`, thêm khối `translations` vào route:

```js
about: {
    path: '/about',
    title: '...',            // tiếng Việt
    description: '...',
    translations: {
        en: { title: '...', description: '...', keywords: '...' },
        cn: { title: '...', description: '...', keywords: '...' }
    }
}
```

Trang **chưa** có `translations` cho một ngôn ngữ thì URL đó vẫn mở được nhưng bị đánh
`noindex`, không vào `sitemap.xml` và không có thẻ `hreflang` – để Google không index
nội dung tiếng Việt dưới địa chỉ `/en` hay `/cn`. Thêm `translations` là trang tự được
mở index ở lần build kế tiếp.

Hiện cả 19 route đều đã có đủ ba ngôn ngữ, nên `npm run build` sinh ra 57 URL trong
`sitemap.xml` và không còn trang nào bị `noindex`.

## Dữ liệu dịch nằm ngoài từ điển

Ba chỗ ghép phần cấu trúc (ảnh, link, icon, ngày, số liệu – giữ trong code) với phần chữ
(lấy từ từ điển):

| Nguồn cấu trúc | Hook / hàm dựng | Khoá từ điển |
|---|---|---|
| `src/data/projectsData.js` | `useProjects()`, `useProject(id)` trong `src/hooks/useProjects.js` | `projects.items.<id>.*` |
| `src/components/dat-lich/bookingData.js` | `buildBookingSteps`, `buildGrowthServices`, `buildCallAgenda`, `buildRefundMoments`, `buildBankRows` | `booking.*` |
| Mảng ở tầng module của `beautyverse/` | các hàm `build…(tm)` ngay trong từng file | `beautyverse.*` |

## Thêm một route mới

Khai báo route **một lần** trong `src/App.jsx` bằng `routePath('/duong-dan')`; cả ba
ngôn ngữ tự có. Nếu route cần prerender SEO thì thêm vào `seo-configs.js`, chạy
`npm run build` rồi thêm rewrite mà script nhắc vào `vercel.json`.

## Thêm một ngôn ngữ thứ tư

Thêm một mục vào `LOCALES` trong `config.js`, tạo `translations/<mã>.js`, khai báo nó
trong `translations/index.js`, rồi chạy `npm run build` và bổ sung rewrite theo cảnh báo
của script.

## File trong thư mục này

| File | Việc |
|---|---|
| `config.js` | Khai báo ngôn ngữ + hàm tách/gắn prefix (dùng chung cho cả build script chạy bằng Node) |
| `translations/` | Ba bộ từ điển |
| `translate.js` | Tra cứu dot-path, fallback về tiếng Việt, nội suy biến |
| `context.js` | Context + hook `useI18n` |
| `LanguageProvider.jsx` | Đọc ngôn ngữ từ URL, đặt `<html lang>`, cung cấp `switchLocale` |
| `Link.jsx` | `Link` / `NavLink` tự gắn prefix |
| `useLocalizedNavigate.js` | `useNavigate` tự gắn prefix |
