// src/scripts/generate-static.js
//
// Chạy sau `vite build`. Ba việc:
//   1. Sinh sitemap.xml + robots.txt
//   2. Prerender thẻ <head> SEO vào một file HTML tĩnh cho từng route × từng ngôn ngữ
//   3. Ghi kết quả vào cả public/ (cho dev) lẫn dist/ (cho bản deploy)
//
// Bước 2 là bắt buộc: crawler của Facebook, Zalo, LinkedIn, X không chạy JavaScript,
// nên thẻ og:image do React gắn lúc runtime sẽ không bao giờ tới được chúng.
//
// ĐA NGÔN NGỮ: mỗi route được prerender 3 lần (/ , /en , /cn).
//   - Ngôn ngữ đã có bản dịch  -> index, có mặt trong sitemap, có thẻ hreflang.
//   - Ngôn ngữ chưa dịch       -> noindex, KHÔNG vào sitemap, KHÔNG có hreflang.
// Nhờ vậy Google không index nội dung tiếng Việt dưới địa chỉ /en hay /cn; dịch xong
// chỉ cần thêm khối `translations` trong seo-configs.js là trang tự được mở index.
//
// BÀI VIẾT TIN TỨC: mỗi bài trong src/content/news/ cũng được prerender thành
// /news/<slug>-<id>/index.html với ảnh bìa + mô tả ngắn của bài. Đăng/sửa bài qua
// /admin hoặc API đều tạo commit -> Vercel build lại -> chạy script này.

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
    DEFAULT_OG_IMAGE,
    SITE,
    getLocalizedSeoRoutes,
    getNewsSeo,
    getSeoAlternates,
    resolveOgImage,
    resolveSeoForLocale,
    seoConfigs,
    seoRoutes,
    toAbsoluteUrl
} from '../pages/seo-configs.js';
import {generateArticleSchema, generateBreadcrumbSchema} from '../components/SEO/schemas.js';
import {LOCALES, getLocaleConfig} from '../i18n/config.js';
import {translate} from '../i18n/translate.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..', '..');
const publicDir = path.join(projectRoot, 'public');
const distDir = path.join(projectRoot, 'dist');

const SEO_BLOCK_START = '<!--SEO-->';
const SEO_BLOCK_END = '<!--/SEO-->';

const escapeHtml = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

/* --------------------------------------------------------------- bài viết */

const newsDir = path.join(projectRoot, 'src', 'content', 'news');

const IMAGE_TYPES = {
    '.webp': 'image/webp',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif'
};

/** Đọc kích thước ảnh từ header file (PNG, GIF, WebP, JPEG). Không nhận ra thì trả về null. */
const readImageSize = (buffer) => {
    if (buffer.length >= 24 && buffer.readUInt32BE(0) === 0x89504e47) {
        return {width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20)};
    }
    if (buffer.length >= 10 && buffer.toString('ascii', 0, 3) === 'GIF') {
        return {width: buffer.readUInt16LE(6), height: buffer.readUInt16LE(8)};
    }
    if (buffer.length >= 30 && buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') {
        const chunk = buffer.toString('ascii', 12, 16);
        if (chunk === 'VP8X') return {width: buffer.readUIntLE(24, 3) + 1, height: buffer.readUIntLE(27, 3) + 1};
        if (chunk === 'VP8 ') return {width: buffer.readUInt16LE(26) & 0x3fff, height: buffer.readUInt16LE(28) & 0x3fff};
        if (chunk === 'VP8L') {
            const bits = buffer.readUInt32LE(21);
            return {width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1};
        }
    }
    if (buffer[0] === 0xff && buffer[1] === 0xd8) {
        let offset = 2;
        while (offset + 9 < buffer.length) {
            if (buffer[offset] !== 0xff) {
                offset += 1;
                continue;
            }
            const marker = buffer[offset + 1];
            // SOF0-SOF15 (trừ DHT, JPG, DAC) chứa kích thước ảnh
            if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
                return {height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7)};
            }
            offset += 2 + buffer.readUInt16BE(offset + 2);
        }
    }
    return null;
};

// Facebook chỉ hiện ảnh ngay lần chia sẻ đầu tiên khi biết trước kích thước ảnh,
// nên với ảnh nằm trong public/ ta đọc sẵn width/height/type.
const withImageDetails = (image) => {
    if (!image) return image;
    const pathname = image.url.split(/[?#]/)[0];
    const type = IMAGE_TYPES[path.extname(pathname).toLowerCase()];
    if (!pathname.startsWith('/')) return type ? {...image, type} : image;

    const filePath = path.join(publicDir, decodeURIComponent(pathname));
    if (!fs.existsSync(filePath)) {
        console.warn(`⚠️  Không tìm thấy ảnh bìa ${pathname} trong public/`);
        return image;
    }
    const size = readImageSize(fs.readFileSync(filePath));
    return {...image, ...(type ? {type} : {}), ...(size || {})};
};

/** Bài viết đã xuất bản, dưới dạng route SEO (xem getNewsSeo trong seo-configs.js). */
const loadNewsRoutes = () => {
    if (!fs.existsSync(newsDir)) return [];
    return fs
        .readdirSync(newsDir)
        .filter((file) => file.endsWith('.json'))
        .map((file) => {
            const meta = JSON.parse(fs.readFileSync(path.join(newsDir, file), 'utf8'));
            const bodyPath = path.join(newsDir, file.replace(/\.json$/, '.md'));
            const context = fs.existsSync(bodyPath) ? fs.readFileSync(bodyPath, 'utf8') : '';
            return {...meta, context};
        })
        .filter((news) => news.status !== 'draft' && news.slug && news.id !== undefined)
        .map((news) => {
            const route = getNewsSeo(news);
            return {...route, image: withImageDetails(route.image)};
        });
};

const newsRoutes = loadNewsRoutes();

// Mọi cặp (route × ngôn ngữ). Chỉ những cặp đã dịch mới được index / lên sitemap.
// Bài viết chỉ có tiếng Việt nên bản /en, /cn của bài bị noindex.
const staticRoutes = getLocalizedSeoRoutes();
const localizedNewsRoutes = newsRoutes.flatMap((route) =>
    LOCALES.map((locale) => resolveSeoForLocale(route, locale.code))
);
const localizedRoutes = [...staticRoutes, ...localizedNewsRoutes];
const indexableRoutes = localizedRoutes.filter((route) => route.hasTranslation);

/* ------------------------------------------------------------------ sitemap */

const generateSitemap = () => {
    const lastmod = new Date().toISOString().split('T')[0];

    const urls = indexableRoutes
        .map((route) => {
            const alternates = getSeoAlternates(route)
                .map(
                    (alternate) =>
                        `\n    <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${alternate.href}" />`
                )
                .join('');

            // Bài viết: ngày đăng thật + ảnh bìa (Google Images)
            const image =
                route.type === 'article' && route.image
                    ? `\n    <image:image>\n      <image:loc>${escapeHtml(resolveOgImage(route.image).url)}</image:loc>\n    </image:image>`
                    : '';

            return `  <url>
    <loc>${toAbsoluteUrl(route.path)}</loc>${alternates}
    <lastmod>${route.publishedTime || lastmod}</lastmod>
    <changefreq>${route.changefreq || 'monthly'}</changefreq>
    <priority>${(route.priority ?? 0.5).toFixed(1)}</priority>${image}
  </url>`;
        })
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
};

const generateRobots = () => `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /tiktok-verification/

Sitemap: ${SITE.baseUrl}/sitemap.xml
`;

/* ---------------------------------------------------------------- head tags */

const buildSchemas = (route) => {
    const locale = route.locale;
    const localeConfig = getLocaleConfig(locale);

    const organization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE.baseUrl}/#organization`,
        name: SITE.name,
        url: SITE.baseUrl,
        logo: toAbsoluteUrl('/assets/images/header/navbarlogoblack.png'),
        image: toAbsoluteUrl(DEFAULT_OG_IMAGE.url),
        description: 'Agency digital marketing: thiết kế website, quảng cáo online, AI và chuyển đổi số.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Hồ Chí Minh',
            addressCountry: 'VN'
        }
    };

    if (route.type === 'article' && route.headline) {
        return [
            generateBreadcrumbSchema([
                {name: translate(locale, 'common.home'), url: getLocaleConfig(locale).prefix || '/'},
                {name: translate(locale, 'nav.news'), url: seoConfigs.news.path},
                {name: route.headline, url: route.basePath}
            ]),
            generateArticleSchema(route)
        ];
    }

    if (route.basePath === '/') {
        return [
            organization,
            {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': `${SITE.baseUrl}/#website`,
                url: toAbsoluteUrl(route.path),
                name: SITE.siteName,
                inLanguage: localeConfig.htmlLang,
                publisher: {'@id': `${SITE.baseUrl}/#organization`}
            }
        ];
    }

    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: translate(locale, 'common.home'),
                item: toAbsoluteUrl(getLocaleConfig(locale).prefix || '/')
            },
            {'@type': 'ListItem', position: 2, name: route.title, item: toAbsoluteUrl(route.path)}
        ]
    };

    if (route.basePath.startsWith('/services/')) {
        return [
            breadcrumb,
            {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: route.title,
                description: route.description,
                url: toAbsoluteUrl(route.path),
                image: resolveOgImage(route.image).url,
                areaServed: {'@type': 'Country', name: 'Việt Nam'},
                provider: {'@id': `${SITE.baseUrl}/#organization`}
            }
        ];
    }

    return [breadcrumb];
};

const buildHead = (route) => {
    const localeConfig = getLocaleConfig(route.locale);
    const image = resolveOgImage(route.image);
    const canonical = toAbsoluteUrl(route.path);
    const type = route.type || 'website';

    const tags = [
        `<title>${escapeHtml(route.title)}</title>`,
        `<meta name="description" content="${escapeHtml(route.description)}" />`,
        `<meta name="keywords" content="${escapeHtml(route.keywords || '')}" />`,
        `<meta name="author" content="${escapeHtml(SITE.name)}" />`,
        // Trang chưa dịch sang ngôn ngữ này thì chặn index để tránh nội dung trùng lặp
        route.hasTranslation
            ? '<meta name="robots" content="index, follow, max-image-preview:large" />'
            : '<meta name="robots" content="noindex, follow" />',
        `<meta name="theme-color" content="${SITE.themeColor}" />`,
        `<meta name="language" content="${localeConfig.metaLanguage}" />`,
        '<meta name="geo.region" content="VN" />',
        '<meta name="geo.placename" content="Ho Chi Minh City" />',
        `<link rel="canonical" href="${canonical}" />`
    ];

    // hreflang - chỉ trỏ tới những ngôn ngữ đã thực sự có bản dịch
    getSeoAlternates(route).forEach((alternate) => {
        tags.push(
            `<link rel="alternate" hreflang="${alternate.hreflang}" href="${alternate.href}" />`
        );
    });

    tags.push(
        `<meta property="og:type" content="${type}" />`,
        `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
        `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
        `<meta property="og:url" content="${canonical}" />`,
        `<meta property="og:site_name" content="${escapeHtml(SITE.siteName)}" />`,
        `<meta property="og:locale" content="${localeConfig.ogLocale}" />`
    );

    LOCALES.filter((item) => item.code !== route.locale).forEach((item) => {
        tags.push(`<meta property="og:locale:alternate" content="${item.ogLocale}" />`);
    });

    if (type === 'article') {
        if (route.publishedTime) tags.push(`<meta property="article:published_time" content="${escapeHtml(route.publishedTime)}" />`);
        if (route.section) tags.push(`<meta property="article:section" content="${escapeHtml(route.section)}" />`);
        (route.tags || []).forEach((tag) => tags.push(`<meta property="article:tag" content="${escapeHtml(tag)}" />`));
    }

    // URL ảnh có thể chứa "&" (vd ảnh Unsplash ?w=400&h=250) -> phải escape trong thuộc tính
    const imageUrl = escapeHtml(image.url);
    tags.push(
        `<meta property="og:image" content="${imageUrl}" />`,
        `<meta property="og:image:secure_url" content="${imageUrl}" />`,
        `<meta property="og:image:alt" content="${escapeHtml(image.alt)}" />`
    );

    if (image.type) tags.push(`<meta property="og:image:type" content="${image.type}" />`);
    if (image.width) tags.push(`<meta property="og:image:width" content="${image.width}" />`);
    if (image.height) tags.push(`<meta property="og:image:height" content="${image.height}" />`);

    tags.push(
        '<meta name="twitter:card" content="summary_large_image" />',
        `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
        `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
        `<meta name="twitter:image" content="${imageUrl}" />`,
        `<meta name="twitter:image:alt" content="${escapeHtml(image.alt)}" />`,
        `<meta name="twitter:site" content="${SITE.twitterHandle}" />`,
        `<meta name="twitter:creator" content="${SITE.twitterHandle}" />`
    );

    buildSchemas(route).forEach((schema) => {
        // </script> trong chuỗi JSON sẽ đóng sớm thẻ script -> phải escape
        const json = JSON.stringify(schema).replace(/</g, '\\u003c');
        tags.push(`<script type="application/ld+json" data-seo-schema="true">${json}</script>`);
    });

    return tags.map((tag) => `    ${tag}`).join('\n');
};

/* -------------------------------------------------------------- prerender */

const prerender = () => {
    const templatePath = path.join(distDir, 'index.html');
    if (!fs.existsSync(templatePath)) {
        console.warn('⚠️  Chưa có dist/index.html - chạy `vite build` trước khi prerender.');
        return 0;
    }

    const template = fs.readFileSync(templatePath, 'utf8');
    const startIndex = template.indexOf(SEO_BLOCK_START);
    const endIndex = template.indexOf(SEO_BLOCK_END);

    if (startIndex === -1 || endIndex === -1) {
        console.warn(`⚠️  Không tìm thấy khối ${SEO_BLOCK_START} ... ${SEO_BLOCK_END} trong index.html - bỏ qua prerender.`);
        return 0;
    }

    const before = template.slice(0, startIndex + SEO_BLOCK_START.length);
    const after = template.slice(endIndex);

    let count = 0;
    localizedRoutes.forEach((route) => {
        const localeConfig = getLocaleConfig(route.locale);
        // <html lang> trong bản tĩnh phải khớp ngôn ngữ, không chờ React gắn lại
        const html = `${before}\n${buildHead(route)}\n${after}`.replace(
            /<html lang="[^"]*"/,
            `<html lang="${localeConfig.htmlLang}"`
        );

        const outputPath =
            route.path === '/'
                ? path.join(distDir, 'index.html')
                : path.join(distDir, route.path.replace(/^\//, ''), 'index.html');

        fs.mkdirSync(path.dirname(outputPath), {recursive: true});
        fs.writeFileSync(outputPath, html, 'utf8');
        count += 1;
    });

    // Link bài viết không có bản prerender (gõ sai slug, bài đã xoá...) -> Vercel trả 404.html.
    // Vẫn là app React nên trang NotFound (hoặc đúng bài nếu id khớp) hiện bình thường.
    const notFoundHead = [
        `<title>${escapeHtml(translate('vi', 'notFound.seoTitle'))}</title>`,
        '<meta name="robots" content="noindex, follow" />'
    ]
        .map((tag) => `    ${tag}`)
        .join('\n');
    fs.writeFileSync(path.join(distDir, '404.html'), `${before}\n${notFoundHead}\n${after}`, 'utf8');

    return count;
};

/* -------------------------------------------- kiểm tra rewrite của Vercel */

// Mỗi route prerender cần một rewrite tường minh trong vercel.json, nếu không
// rewrite bắt-tất-cả sẽ trả về index.html của trang chủ và crawler đọc sai thẻ meta.
// Bài viết dùng chung một rule dạng "/news/:slug" cho mỗi ngôn ngữ.
const checkVercelRewrites = () => {
    const vercelConfigPath = path.join(projectRoot, 'vercel.json');
    if (!fs.existsSync(vercelConfigPath)) return;

    const rewrites = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf8')).rewrites || [];
    const declared = new Set(rewrites.map((rule) => rule.source));
    const required = staticRoutes.map((route) => ({source: route.path, destination: `${route.path}/index.html`}));
    if (newsRoutes.length) {
        LOCALES.forEach((locale) => {
            const source = `${getLocaleConfig(locale.code).prefix || ''}/news/:slug`;
            required.push({source, destination: `${source}/index.html`});
        });
    }
    const missing = required.filter((rule) => rule.source !== '/' && !declared.has(rule.source));

    if (missing.length) {
        console.warn('⚠️  Thiếu rewrite trong vercel.json cho các route sau:');
        missing.forEach((rule) => {
            console.warn(`     { "source": "${rule.source}", "destination": "${rule.destination}" },`);
        });
        console.warn('     Thêm vào TRƯỚC rule "/(.*)" để trang được phục vụ đúng HTML đã prerender.');
    }
};

/* ------------------------------------------------------------------- chạy */

const sitemap = generateSitemap();
const robots = generateRobots();

[publicDir, distDir].forEach((dir) => {
    if (!fs.existsSync(dir)) return;
    fs.writeFileSync(path.join(dir, 'sitemap.xml'), sitemap, 'utf8');
    fs.writeFileSync(path.join(dir, 'robots.txt'), robots, 'utf8');
});

const prerendered = prerender();
checkVercelRewrites();

const localeSummary = LOCALES.map((locale) => {
    const done = staticRoutes.filter((route) => route.hasTranslation && route.locale === locale.code).length;
    return `${locale.code}: ${done}/${seoRoutes.length}`;
}).join(', ');

console.log(
    `✅ sitemap.xml + robots.txt (${indexableRoutes.length} URL - trang tĩnh ${localeSummary}, ${newsRoutes.length} bài viết)`
);
if (prerendered) console.log(`✅ Prerender thẻ SEO cho ${prerendered} trang trong dist/`);
