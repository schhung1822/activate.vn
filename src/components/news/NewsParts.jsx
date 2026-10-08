// src/components/news/NewsParts.jsx
//
// Khối giao diện dùng chung của trang tin tức, cùng ngôn ngữ thiết kế với trang chủ:
// ảnh bo 16px, nhãn chữ giãn rộng, nút viên thuốc đen có vòng tròn mũi tên.
import {ArrowUpRight} from 'lucide-react';
import {Link, useI18n} from '../../i18n';
import {newsPath, useNewsDateFormat} from './newsUtils.js';

/** Ảnh bìa; bài chưa có ảnh thì hiện nền tím nhạt. Đặt trong phần tử có class `group` để có hiệu ứng hover. */
export const NewsThumbnail = ({item, className = '', eager = false}) => (
    <div className={`overflow-hidden bg-[#fef1f8] ${className}`}>
        {item.thumbnail && (
            <img
                src={item.thumbnail}
                alt={item.title}
                loading={eager ? 'eager' : 'lazy'}
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
        )}
    </div>
);

/** Dòng "DANH MỤC · NGÀY" (thêm phần tử con nếu cần, VD thời gian đọc). */
export const NewsMeta = ({item, children}) => {
    const formatDate = useNewsDateFormat();
    return (
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-archivo text-[11px] font-medium uppercase tracking-[0.18rem] text-black/45 lg:text-[12px]">
            {item.categories?.[0] && <span>{item.categories[0]}</span>}
            {item.categories?.[0] && <span aria-hidden="true">·</span>}
            <time dateTime={item.date}>{formatDate(item.date)}</time>
            {children}
        </div>
    );
};

/** Nút viên thuốc đen + vòng tròn mũi tên (chỉ là phần hiển thị - bọc trong Link/button có class `group`). */
export const PillLabel = ({children}) => (
    <span className="flex w-fit items-center space-x-3 rounded-full bg-black py-1 pl-6 pr-1.5 text-[15px] text-white transition-transform duration-300 group-hover:scale-105 sm:text-[16px]">
        <span>{children}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white sm:h-10 sm:w-10">
            <ArrowUpRight className="h-5 w-5 text-black transition-transform duration-300 group-hover:rotate-12" strokeWidth={2.3} />
        </span>
    </span>
);

/** Thẻ bài viết trong lưới. `delay` (ms) để các thẻ hiện lần lượt. */
export const ArticleCard = ({item, delay = 0}) => {
    const {t} = useI18n();
    return (
        <Link to={newsPath(item)} className="group flex animate-rise-in flex-col" style={{animationDelay: `${delay}ms`}}>
            <NewsThumbnail item={item} className="aspect-[16/10] rounded-[16px] border border-black/[0.06]" />
            <div className="mt-5">
                <NewsMeta item={item} />
            </div>
            <h3 className="mt-3 line-clamp-2 text-[18px] font-bold leading-snug text-black decoration-1 underline-offset-4 group-hover:underline lg:text-[20px]">
                {item.title}
            </h3>
            {item.description && <p className="mt-2 line-clamp-2 text-[14px] text-black/60">{item.description}</p>}
            <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-medium text-black">
                {t('news.list.readArticle')}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
        </Link>
    );
};
