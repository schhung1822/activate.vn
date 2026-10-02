// src/pages/news/NewsDetailPage.jsx - trang chi tiết bài viết (/news/<slug>-<id>)
//
// Bố cục đọc tối giản: tiêu đề + ảnh bìa, cột nội dung ~720px, mục lục dính bên phải
// (desktop), thanh tiến độ đọc, chia sẻ, bài trước/sau, khối CTA và bài liên quan.
// Cùng ngôn ngữ thiết kế với trang chủ và trang /news.
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Facebook, Link2, Linkedin } from 'lucide-react';
import { Link, useI18n } from '../../i18n';
import { newsItems } from '../../data/newsData';
import { slugify } from '../../utils/slugify.js';
import { ArticleCard, NewsMeta, PillLabel } from '../../components/news/NewsParts.jsx';
import { newsPath, toDate } from '../../components/news/newsUtils.js';
import SEOManager from '../../components/SEO/SEOManager.jsx';
import { generateArticleSchema, generateBreadcrumbSchema } from '../../components/SEO/schemas.js';
import { getNewsSeo } from '../seo-configs.js';

const sortedNews = [...newsItems].sort((left, right) => toDate(right.date) - toDate(left.date));

/* ------------------------------------------------------------ xử lý nội dung */

/** Bỏ ký hiệu markdown trong một dòng tiêu đề: **đậm**, `code`, [link](url). */
const plainHeading = (text) =>
    text
        .replace(/!\[[^\]]*]\([^)]*\)/g, '')
        .replace(/\[([^\]]*)]\([^)]*\)/g, '$1')
        .replace(/[*_`~]/g, '')
        .trim();

/**
 * Nhiều bài mở đầu bằng một dòng "# tiêu đề" (hoặc "## tiêu đề") lặp lại đúng tiêu đề
 * trang. Trang đã có <h1> nên bỏ dòng đó để không hiện tiêu đề hai lần.
 */
const stripLeadingTitle = (markdown, title) => {
    const match = /^\s*(#{1,2})\s+(.+?)\s*\n/.exec(markdown);
    if (!match) return markdown;
    const heading = slugify(plainHeading(match[2]));
    const pageTitle = slugify(title);
    const duplicate = match[1] === '#' || heading === pageTitle || pageTitle.startsWith(heading) || heading.startsWith(pageTitle);
    return duplicate ? markdown.slice(match[0].length) : markdown;
};

/** id cho tiêu đề, đánh số khi trùng: "loi-ich", "loi-ich-2"... */
const createIdGenerator = () => {
    const used = new Map();
    return (text) => {
        const base = slugify(text) || 'muc';
        const count = (used.get(base) || 0) + 1;
        used.set(base, count);
        return count > 1 ? `${base}-${count}` : base;
    };
};

const nodeText = (node) =>
    node.type === 'text' || node.type === 'inlineCode' ? node.value : (node.children || []).map(nodeText).join('');

/** Plugin remark gắn id cho mọi tiêu đề - cùng thuật toán với extractToc nên id luôn khớp mục lục. */
const remarkHeadingIds = () => (tree) => {
    const nextId = createIdGenerator();
    const visit = (node) => {
        if (node.type === 'heading') {
            node.data = { ...node.data, hProperties: { ...node.data?.hProperties, id: nextId(nodeText(node)) } };
        }
        node.children?.forEach(visit);
    };
    visit(tree);
};

/** Mục lục: chỉ lấy tiêu đề cấp 1-2 (cấp 3 có bài tới hàng chục mục, quá dài). */
const extractToc = (markdown) => {
    const nextId = createIdGenerator();
    const toc = [];
    let inFence = false;
    markdown.split('\n').forEach((line) => {
        if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
        if (inFence) return;
        const match = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
        if (!match) return;
        const title = plainHeading(match[2]);
        const id = nextId(title); // đếm cả cấp 3+ để id trùng khớp với plugin
        if (match[1].length <= 2) toc.push({ id, title });
    });
    return toc;
};

const estimateReadingTime = (markdown) => {
    const words = markdown
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
        .replace(/[#>*_`|-]/g, ' ')
        .split(/\s+/)
        .filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 220));
};

/** Bài liên quan: ưu tiên cùng danh mục, sau đó bài mới hơn. */
const pickRelated = (news, count = 3) =>
    sortedNews
        .filter((item) => item.id !== news.id)
        .map((item) => ({ item, score: (item.categories || []).filter((c) => news.categories?.includes(c)).length }))
        .sort((a, b) => b.score - a.score || toDate(b.item.date) - toDate(a.item.date))
        .slice(0, count)
        .map(({ item }) => item);

/* ---------------------------------------------------------------- kiểu chữ */

const isExternal = (href = '') => /^https?:\/\//.test(href) && !href.includes('nextgency.vn');

// react-markdown truyền thêm prop `node` (cây cú pháp) - bỏ đi trước khi rải vào thẻ HTML
const clean = (props) => {
    const rest = { ...props };
    delete rest.node;
    return rest;
};

const markdownComponents = {
    // "#" trong nội dung hiển thị như "##": trang chỉ có một <h1> là tiêu đề bài
    h1: (props) => (
        <h2 className="mt-14 scroll-mt-32 text-[24px] font-bold leading-tight text-black md:text-[30px]" {...clean(props)} />
    ),
    h2: (props) => (
        <h2 className="mt-14 scroll-mt-32 text-[24px] font-bold leading-tight text-black md:text-[30px]" {...clean(props)} />
    ),
    h3: (props) => (
        <h3 className="mt-10 scroll-mt-32 text-[20px] font-bold leading-snug text-black md:text-[22px]" {...clean(props)} />
    ),
    h4: (props) => <h4 className="mt-8 scroll-mt-32 text-[18px] font-semibold text-black" {...clean(props)} />,
    p: (props) => <p className="mt-5 text-[16px] leading-[1.85] text-black/75 md:text-[18px]" {...clean(props)} />,
    ul: (props) => (
        <ul className="mt-5 list-disc space-y-2 pl-6 text-[16px] leading-[1.8] text-black/75 marker:text-black/30 md:text-[18px]" {...clean(props)} />
    ),
    ol: (props) => (
        <ol className="mt-5 list-decimal space-y-2 pl-6 text-[16px] leading-[1.8] text-black/75 marker:font-medium marker:text-black/40 md:text-[18px]" {...clean(props)} />
    ),
    li: (props) => <li className="pl-1 [&>p]:mt-0 [&>ul]:mt-2 [&>ol]:mt-2" {...clean(props)} />,
    strong: (props) => <strong className="font-semibold text-black" {...clean(props)} />,
    a: (props) => (
        <a
            className="font-medium text-black underline decoration-[#c08dfe] decoration-2 underline-offset-4 transition hover:decoration-black"
            {...(isExternal(props.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            {...clean(props)}
        />
    ),
    blockquote: (props) => (
        <blockquote
            className="mt-8 border-l-2 border-[#c08dfe] pl-6 text-[17px] leading-relaxed text-black/70 md:text-[20px] [&>p]:mt-0 [&>p]:text-[length:inherit] [&>p]:text-black/70"
            {...clean(props)}
        />
    ),
    img: (props) => (
        // Không lazy: ảnh không có kích thước sẵn, tải muộn sẽ đẩy nội dung và làm lệch vị trí khi bấm mục lục.
        // fetchPriority thấp để không tranh băng thông với ảnh bìa.
        <img alt="" decoding="async" fetchPriority="low" className="mt-8 w-full rounded-[16px] border border-black/[0.06]" {...clean(props)} />
    ),
    code: (props) => (
        <code className="rounded-md bg-[#f4eeff] px-1.5 py-0.5 text-[0.88em] text-[#2B144D]" {...clean(props)} />
    ),
    // Code trong khối <pre> bỏ nền/khung của code nội dòng
    pre: (props) => (
        <pre
            className="mt-8 overflow-x-auto rounded-[12px] bg-[#111014] p-5 text-[14px] leading-relaxed text-white/90 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-[length:inherit] [&_code]:text-inherit"
            {...clean(props)}
        />
    ),
    hr: () => <hr className="my-12 border-black/10" />,
    table: (props) => (
        <div className="mt-8 overflow-x-auto rounded-[12px] border border-black/10">
            <table className="w-full border-collapse text-left text-[15px]" {...clean(props)} />
        </div>
    ),
    th: (props) => (
        <th className="border-b border-black/10 bg-[#f7f7f8] px-4 py-3 font-semibold text-black" {...clean(props)} />
    ),
    td: (props) => (
        <td className="border-b border-black/[0.06] px-4 py-3 align-top text-black/75" {...clean(props)} />
    )
};

/* ------------------------------------------------------------ thành phần */

/** Thanh tiến độ đọc mảnh trên cùng, cập nhật trực tiếp style để không render lại trang. */
const ReadingProgress = ({ targetRef }) => {
    const barRef = useRef(null);

    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            const target = targetRef.current;
            if (!target || !barRef.current) return;
            const rect = target.getBoundingClientRect();
            const total = rect.height - window.innerHeight * 0.6;
            const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1;
            barRef.current.style.transform = `scaleX(${progress})`;
        };
        const onScroll = () => {
            if (!frame) frame = window.requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [targetRef]);

    return (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]" aria-hidden="true">
            <div
                ref={barRef}
                className="h-full origin-left bg-gradient-to-r from-[#2B144D] via-[#c08dfe] to-[#c08dfe]"
                style={{ transform: 'scaleX(0)' }}
            />
        </div>
    );
};

const scrollToHeading = (event, id) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Ảnh phía trên tải xong giữa chừng có thể làm lệch đích -> kiểm tra và cuộn lại vài lần
    let attempts = 0;
    const settle = () => {
        attempts += 1;
        const offset = parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
        if (Math.abs(target.getBoundingClientRect().top - offset) > 24 && attempts < 4) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.setTimeout(settle, 800);
        }
    };
    window.setTimeout(settle, 900);
};

const TocList = ({ toc, activeId }) => (
    <ul className="border-l border-black/10">
        {toc.map((item) => {
            const active = item.id === activeId;
            return (
                <li key={item.id}>
                    <a
                        href={`#${item.id}`}
                        onClick={(event) => scrollToHeading(event, item.id)}
                        aria-current={active ? 'location' : undefined}
                        className={`-ml-px block border-l-2 py-1.5 pl-4 text-[14px] leading-snug transition ${
                            active ? 'border-black font-medium text-black' : 'border-transparent text-black/50 hover:text-black'
                        }`}
                    >
                        {item.title}
                    </a>
                </li>
            );
        })}
    </ul>
);

const Label = ({ children }) => (
    <p className="font-archivo text-[11px] font-medium uppercase tracking-[0.3rem] text-black/45 lg:text-[12px]">{children}</p>
);

const shareButtonClass =
    'flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/70 transition hover:border-black hover:bg-black hover:text-white';

const ShareButtons = () => {
    const { t } = useI18n();
    const { pathname } = useLocation();
    const [copied, setCopied] = useState(false);
    const url = typeof window === 'undefined' ? '' : `${window.location.origin}${pathname}`;
    const encoded = encodeURIComponent(url);

    useEffect(() => {
        if (!copied) return undefined;
        const timer = window.setTimeout(() => setCopied(false), 2000);
        return () => window.clearTimeout(timer);
    }, [copied]);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
        } catch {
            window.prompt(t('news.detail.copyLinkLabel'), url);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
                target="_blank"
                rel="noopener noreferrer"
                className={shareButtonClass}
                aria-label={t('news.detail.shareFacebook')}
                title={t('news.detail.shareFacebook')}
            >
                <Facebook className="h-4 w-4" />
            </a>
            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
                target="_blank"
                rel="noopener noreferrer"
                className={shareButtonClass}
                aria-label={t('news.detail.shareLinkedin')}
                title={t('news.detail.shareLinkedin')}
            >
                <Linkedin className="h-4 w-4" />
            </a>
            <button
                type="button"
                onClick={copyLink}
                className={shareButtonClass}
                aria-label={t('news.detail.copyLink')}
                title={copied ? t('news.detail.copied') : t('news.detail.copyLink')}
            >
                {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
            </button>
            <span className="sr-only" aria-live="polite">
                {copied ? t('news.detail.copied') : ''}
            </span>
        </div>
    );
};

const AdjacentLink = ({ item, direction }) => {
    const { t } = useI18n();
    const isPrevious = direction === 'previous';
    const Icon = isPrevious ? ArrowLeft : ArrowRight;
    return (
        <Link to={newsPath(item)} className={`group block ${isPrevious ? '' : 'sm:col-start-2 sm:text-right'}`}>
            <span className={`inline-flex items-center gap-2 text-[13px] text-black/45 ${isPrevious ? '' : 'sm:flex-row-reverse'}`}>
                <Icon className={`h-4 w-4 transition-transform duration-300 ${isPrevious ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
                {isPrevious ? t('news.detail.previous') : t('news.detail.next')}
            </span>
            <span className="mt-2 line-clamp-2 block text-[16px] font-semibold leading-snug text-black decoration-1 underline-offset-4 group-hover:underline md:text-[18px]">
                {item.title}
            </span>
        </Link>
    );
};

const openConsultationPopup = () => window.dispatchEvent(new Event('nextgency:open-consultation-popup'));

/* ---------------------------------------------------------------- trang */

const NotFound = () => {
    const { t } = useI18n();
    return (
        <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
            <Label>{t('news.detail.breadcrumb')}</Label>
            <h1 className="mt-4 font-archivo text-[32px] font-bold uppercase leading-tight text-black md:text-[44px]">
                {t('news.detail.notFoundTitle')}
            </h1>
            <p className="mt-4 text-[16px] text-black/60">{t('news.detail.notFoundDescription')}</p>
            <Link to="/news" className="group mt-8">
                <PillLabel>{t('news.detail.backToNews')}</PillLabel>
            </Link>
        </div>
    );
};

const NewsDetailPage = () => {
    const { t } = useI18n();
    const { slug } = useParams();
    const articleRef = useRef(null);
    const [activeId, setActiveId] = useState('');

    const news = useMemo(() => {
        const id = Number(slug?.split('-').pop());
        return sortedNews.find((item) => item.id === id) ?? null;
    }, [slug]);

    const body = useMemo(() => (news ? stripLeadingTitle(news.context || '', news.title) : ''), [news]);
    const toc = useMemo(() => extractToc(body), [body]);
    const readingTime = useMemo(() => estimateReadingTime(body), [body]);
    const related = useMemo(() => (news ? pickRelated(news) : []), [news]);

    // Danh sách xếp mới -> cũ: "bài trước" là bài cũ hơn, "bài sau" là bài mới hơn
    const index = news ? sortedNews.findIndex((item) => item.id === news.id) : -1;
    const previousArticle = index >= 0 ? sortedNews[index + 1] : null;
    const nextArticle = index > 0 ? sortedNews[index - 1] : null;

    // Mô tả trùng tiêu đề (nhiều bài như vậy) thì không hiện lại
    const lead = news?.description && slugify(news.description) !== slugify(news.title) ? news.description : '';

    // Mục đang đọc trong mục lục
    useEffect(() => {
        if (!toc.length) return undefined;
        let frame = 0;
        const update = () => {
            frame = 0;
            let current = toc[0].id;
            for (const item of toc) {
                const element = document.getElementById(item.id);
                if (element && element.getBoundingClientRect().top <= 160) current = item.id;
            }
            setActiveId(current);
        };
        const onScroll = () => {
            if (!frame) frame = window.requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
        };
    }, [toc]);

    if (!news) return <NotFound />;

    const hasToc = toc.length > 1;
    // Cùng nguồn với bản prerender (generate-static.js) để thẻ meta không lệch nhau
    const seo = getNewsSeo(news);

    return (
        <div className="bg-white text-black">
            <SEOManager
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
                image={seo.image}
                ogUrl={seo.path}
                type="article"
                structuredData={[
                    generateArticleSchema(seo),
                    generateBreadcrumbSchema([
                        { name: t('common.home'), url: '/' },
                        { name: t('nav.news'), url: '/news' },
                        { name: seo.headline, url: seo.path }
                    ])
                ]}
            />
            <ReadingProgress targetRef={articleRef} />

            <header className="mx-auto max-w-[1440px] px-6 pt-8 lg:px-8 lg:pt-12">
                <div className={`grid gap-8 lg:items-center lg:gap-14 ${news.thumbnail ? 'lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]' : ''}`}>
                    <div className="animate-rise-in">
                        <nav className="flex items-center gap-2 text-[13px] text-black/45" aria-label="Breadcrumb">
                            <Link to="/" className="transition hover:text-black">
                                {t('news.detail.home')}
                            </Link>
                            <span aria-hidden="true">/</span>
                            <Link to="/news" className="transition hover:text-black">
                                {t('news.detail.breadcrumb')}
                            </Link>
                        </nav>
                        <div className="mt-6">
                            <NewsMeta item={news}>
                                <span aria-hidden="true">·</span>
                                <span>{t('news.detail.readingTime', { count: readingTime })}</span>
                            </NewsMeta>
                        </div>
                        <h1 className="mt-3 max-w-[880px] text-[28px] font-bold leading-[1.15] text-black sm:text-[34px] lg:text-[38px] xl:text-[44px]">
                            {news.title}
                        </h1>
                        {lead && (
                            <p className="mt-4 line-clamp-3 max-w-[720px] text-[16px] leading-relaxed text-black/60 lg:text-[18px]">{lead}</p>
                        )}
                    </div>

                    {news.thumbnail && (
                        <div className="overflow-hidden rounded-[16px] border border-black/[0.06] bg-[#f4eeff]">
                            <img src={news.thumbnail} alt={news.title} decoding="async" className="aspect-[16/9] w-full object-cover" />
                        </div>
                    )}
                </div>
            </header>

            {/* Hai cột: nội dung chiếm phần lớn chiều rộng | mục lục + chia sẻ dính bên phải */}
            <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-12 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-16 xl:gap-20">
                <div className="min-w-0">
                    {hasToc && (
                        <details className="group mb-10 rounded-[16px] bg-[#f7f7f8] p-5 lg:hidden">
                            <summary className="flex cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">
                                <Label>{t('news.detail.toc')}</Label>
                                <ChevronDown className="h-4 w-4 text-black/50 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="mt-4">
                                <TocList toc={toc} activeId={activeId} />
                            </div>
                        </details>
                    )}

                    <article ref={articleRef} className="[&>*:first-child]:mt-0">
                        <ReactMarkdown remarkPlugins={[remarkGfm, remarkHeadingIds]} components={markdownComponents}>
                            {body}
                        </ReactMarkdown>
                    </article>

                    <div className="mt-14 flex flex-col gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap gap-2">
                            {[...(news.categories || []), ...(news.tags || [])]
                                // Bỏ trùng không phân biệt hoa thường ("Zalo Mini App" / "Zalo mini app")
                                .filter((value, position, list) => list.findIndex((other) => other.toLowerCase() === value.toLowerCase()) === position)
                                .map((value) => (
                                    <span key={value} className="rounded-full border border-black/10 px-3 py-1.5 text-[12px] text-black/55">
                                        {value}
                                    </span>
                                ))}
                        </div>
                        <div className="flex shrink-0 items-center gap-3">
                            <span className="text-[13px] text-black/45">{t('news.detail.share')}</span>
                            <ShareButtons />
                        </div>
                    </div>

                    {(previousArticle || nextArticle) && (
                        <nav className="mt-10 grid gap-8 rounded-[16px] bg-[#f7f7f8] p-6 sm:grid-cols-2 sm:p-8">
                            {previousArticle && <AdjacentLink item={previousArticle} direction="previous" />}
                            {nextArticle && <AdjacentLink item={nextArticle} direction="next" />}
                        </nav>
                    )}
                </div>

                <aside className="hidden lg:block">
                    <div className="sticky top-28 space-y-10">
                        {hasToc && (
                            <div>
                                <Label>{t('news.detail.toc')}</Label>
                                <div className="mt-4 max-h-[calc(100vh-16rem)] overflow-y-auto pr-2">
                                    <TocList toc={toc} activeId={activeId} />
                                </div>
                            </div>
                        )}
                        <div>
                            <Label>{t('news.detail.share')}</Label>
                            <div className="mt-4">
                                <ShareButtons />
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            <section className="mx-auto max-w-[1440px] px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-[16px] bg-[#2B144D] px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-14">
                    <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#c08dfe]/40 blur-3xl" aria-hidden="true" />
                    <div className="relative max-w-xl">
                        <h2 className="font-archivo text-[24px] font-bold uppercase leading-tight lg:text-[32px]">
                            {t('news.detail.ctaTitle')}
                        </h2>
                        <p className="mt-3 text-[15px] text-white/70 sm:text-[16px]">{t('news.detail.ctaDescription')}</p>
                    </div>
                    <button type="button" onClick={openConsultationPopup} className="group relative mt-8 shrink-0 lg:mt-0">
                        <span className="flex w-fit items-center space-x-3 rounded-full bg-white py-1 pl-6 pr-1.5 text-[15px] font-medium text-black transition-transform duration-300 group-hover:scale-105 sm:text-[16px]">
                            <span>{t('nav.cta')}</span>
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black sm:h-10 sm:w-10">
                                <ArrowUpRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-12" strokeWidth={2.3} />
                            </span>
                        </span>
                    </button>
                </div>
            </section>

            {related.length > 0 && (
                <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <Label>{t('news.detail.related')}</Label>
                            <h2 className="mt-3 font-archivo text-[26px] font-bold uppercase leading-[1.1] text-black md:text-[32px] lg:text-[44px]">
                                {t('news.detail.relatedTitle')}
                            </h2>
                        </div>
                        <Link to="/news" className="group shrink-0">
                            <PillLabel>{t('news.detail.viewAll')}</PillLabel>
                        </Link>
                    </div>
                    <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {related.map((item, position) => (
                            <ArticleCard key={item.id} item={item} delay={position * 50} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default NewsDetailPage;
