// src/pages/news/NewsListPage.jsx - trang danh sách tin tức (/news)
//
// Cùng ngôn ngữ thiết kế với trang chủ: nền trắng, chữ đen, tiêu đề Archivo in hoa,
// nhãn chữ giãn rộng, nút viên thuốc đen và điểm nhấn gradient tím.
import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { Link, useI18n } from '../../i18n';
import { newsItems } from '../../data/newsData';
import { ArticleCard, NewsMeta, NewsThumbnail, PillLabel } from '../../components/news/NewsParts.jsx';
import { newsPath, toDate } from '../../components/news/newsUtils.js';
import CtaBandSection from '../../components/sections/CtaBandSection.jsx';

const PAGE_SIZE = 9;
const ALL = 'all';

const sortedNews = [...newsItems].sort((left, right) => toDate(right.date) - toDate(left.date));

// Danh mục xếp theo số bài, nhiều nhất đứng trước
const categories = (() => {
    const counts = new Map();
    newsItems.forEach((item) => item.categories?.forEach((category) => counts.set(category, (counts.get(category) || 0) + 1)));
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([category]) => category);
})();

const FeaturedArticle = ({ item, t }) => (
    <Link
        to={newsPath(item)}
        className="group grid gap-6 rounded-[16px] bg-[#f7f7f8] p-3 sm:p-4 md:grid-cols-[1.2fr_1fr] md:gap-10 lg:p-5"
    >
        <NewsThumbnail item={item} eager className="aspect-[16/10] rounded-[12px]" />
        <div className="flex flex-col justify-center px-2 pb-4 md:px-0 md:pb-0 md:pr-6">
            <div className="flex flex-wrap items-center gap-3">
                <span className="animate-gradient-shift rounded-full bg-gradient-to-r from-[#6A4FDB] via-[#ee3e99] to-[#6A4FDB] px-3 py-1 text-[11px] font-medium text-white lg:text-[12px]">
                    {t('news.list.featured')}
                </span>
                <NewsMeta item={item} />
            </div>
            <h2 className="mt-5 text-[22px] font-bold leading-tight text-black md:text-[28px] lg:text-[34px]">
                {item.title}
            </h2>
            {item.description && (
                <p className="mt-4 line-clamp-3 text-[15px] text-black/60 sm:text-[16px]">{item.description}</p>
            )}
            <div className="mt-7">
                <PillLabel>{t('news.list.readArticle')}</PillLabel>
            </div>
        </div>
    </Link>
);

const NewsListPage = () => {
    const { t } = useI18n();
    const [category, setCategory] = useState(ALL);
    const [search, setSearch] = useState('');
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    const filtered = useMemo(() => {
        const term = search.trim().toLowerCase();
        return sortedNews.filter((item) => {
            if (category !== ALL && !item.categories?.includes(category)) return false;
            if (!term) return true;
            return [item.title, item.description, ...(item.categories || []), ...(item.tags || [])]
                .join(' ')
                .toLowerCase()
                .includes(term);
        });
    }, [category, search]);

    const isFiltering = category !== ALL || search.trim().length > 0;
    // Bài mới nhất được làm nổi bật khi đang xem toàn bộ, không lọc
    const featured = !isFiltering ? filtered[0] : null;
    const gridItems = featured ? filtered.slice(1) : filtered;
    const shownItems = gridItems.slice(0, visibleCount);

    const changeCategory = (value) => {
        setCategory(value);
        setVisibleCount(PAGE_SIZE);
    };

    const changeSearch = (value) => {
        setSearch(value);
        setVisibleCount(PAGE_SIZE);
    };

    const clearFilters = () => {
        changeCategory(ALL);
        setSearch('');
    };

    return (
        <div className="bg-white text-black">
            <section className="mx-auto max-w-[1440px] px-6 pt-12 lg:px-8 lg:pt-20">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl animate-rise-in">
                        <h1 className="mt-3 font-archivo text-[34px] font-bold uppercase leading-[1.1] text-black sm:text-[44px] lg:text-[64px]">
                            {t('news.list.title')}
                        </h1>
                    </div>

                    <div className="relative w-full lg:w-[360px]">
                        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
                        <input
                            type="search"
                            value={search}
                            onChange={(event) => changeSearch(event.target.value)}
                            placeholder={t('news.list.searchPlaceholder')}
                            aria-label={t('news.list.searchLabel')}
                            className="w-full rounded-full border border-black/10 bg-[#f7f7f8] py-3 pl-11 pr-11 text-[15px] text-black outline-none transition placeholder:text-black/40 focus:border-black/40 focus:bg-white [&::-webkit-search-cancel-button]:hidden"
                        />
                        {search && (
                            <button
                                type="button"
                                onClick={() => changeSearch('')}
                                className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-black/50 transition hover:bg-black/5 hover:text-black"
                                aria-label={t('news.list.clearFilters')}
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </div>

                <div className="mt-10 flex items-center gap-4 border-b border-black/10 pb-5">
                    <div className="-mx-6 flex flex-1 gap-2 overflow-x-auto px-6 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden">
                        {[ALL, ...categories].map((value) => {
                            const active = category === value;
                            return (
                                <button
                                    key={value}
                                    type="button"
                                    onClick={() => changeCategory(value)}
                                    aria-pressed={active}
                                    className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[13px] transition ${
                                        active
                                            ? 'bg-black text-white'
                                            : 'border border-black/10 text-black/60 hover:border-black/30 hover:text-black'
                                    }`}
                                >
                                    {value === ALL ? t('news.list.allCategories') : value}
                                </button>
                            );
                        })}
                    </div>
                    <span className="hidden shrink-0 text-[13px] text-black/45 sm:block">
                        {t('news.list.count', { count: filtered.length })}
                    </span>
                </div>
            </section>

            {featured && (
                <section className="mx-auto max-w-[1440px] animate-rise-in px-6 pt-10 lg:px-8">
                    <FeaturedArticle item={featured} t={t} />
                </section>
            )}

            <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-12 lg:px-8 lg:pb-28">
                {filtered.length === 0 ? (
                    <div className="rounded-[16px] bg-[#f7f7f8] px-6 py-16 text-center">
                        <p className="text-[18px] font-bold text-black">{t('news.list.empty')}</p>
                        <p className="mt-2 text-[15px] text-black/60">{t('news.list.emptyHint')}</p>
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="mt-6 rounded-full bg-black px-6 py-2.5 text-[15px] text-white transition hover:scale-105"
                        >
                            {t('news.list.clearFilters')}
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            {shownItems.map((item, index) => (
                                <ArticleCard key={item.id} item={item} delay={(index % PAGE_SIZE) * 50} />
                            ))}
                        </div>

                        {gridItems.length > visibleCount && (
                            <div className="mt-14 flex justify-center">
                                <button
                                    type="button"
                                    onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                                    className="group"
                                >
                                    <PillLabel>{t('news.list.loadMore')}</PillLabel>
                                </button>
                            </div>
                        )}
                    </>
                )}
            </section>

            <CtaBandSection />
        </div>
    );
};

export default NewsListPage;
