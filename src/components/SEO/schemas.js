// src/components/SEO/schemas.js
// Structured data (JSON-LD). Giữ đồng bộ với src/scripts/generate-static.js -
// script prerender sinh lại các schema tương đương cho bản HTML tĩnh.

import {DEFAULT_OG_IMAGE, SITE, toAbsoluteUrl} from '../../pages/seo-configs.js';

const ORGANIZATION_ID = `${SITE.baseUrl}/#organization`;

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
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

const organizationReference = {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    url: SITE.baseUrl,
    logo: {'@type': 'ImageObject', url: organizationSchema.logo}
};

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.baseUrl}/#website`,
    url: SITE.baseUrl,
    name: SITE.siteName,
    inLanguage: SITE.lang,
    publisher: {'@id': ORGANIZATION_ID}
};

export const generateServiceSchema = ({
                                          serviceName,
                                          serviceType,
                                          description,
                                          areaServed = 'Việt Nam',
                                          url,
                                          image
                                      }) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    serviceType: serviceType || serviceName,
    description,
    url: toAbsoluteUrl(url),
    image: toAbsoluteUrl(image || DEFAULT_OG_IMAGE.url),
    areaServed: {'@type': 'Country', name: areaServed},
    provider: {'@id': ORGANIZATION_ID}
});

export const generateBreadcrumbSchema = (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: toAbsoluteUrl(item.url)
    }))
});

/**
 * Nhận trực tiếp kết quả getNewsSeo() (headline, path, section, tags...) hoặc các trường
 * cũ (title, url). `image` có thể là string hoặc {url, alt}.
 */
export const generateArticleSchema = ({
                                          headline,
                                          title,
                                          description,
                                          image,
                                          path,
                                          url,
                                          publishedTime,
                                          modifiedTime,
                                          section,
                                          tags = []
                                      }) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: headline || title,
    description,
    image: toAbsoluteUrl((typeof image === 'string' ? image : image?.url) || DEFAULT_OG_IMAGE.url),
    mainEntityOfPage: {'@type': 'WebPage', '@id': toAbsoluteUrl(path || url)},
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    inLanguage: SITE.lang,
    ...(section ? {articleSection: section} : {}),
    ...(tags.length ? {keywords: tags.join(', ')} : {}),
    // Google cần tên + logo publisher ngay trong Article, không chỉ @id
    author: organizationReference,
    publisher: organizationReference
});
