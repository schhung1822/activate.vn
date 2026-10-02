// src/pages/seo-configs.js
// Nguồn dữ liệu SEO duy nhất của toàn site.
// Dùng chung cho SEOManager / RouteSEO (phía client) và src/scripts/generate-static.js
// (prerender thẻ meta vào HTML tĩnh + sinh sitemap.xml, robots.txt).
//
// ĐA NGÔN NGỮ: mỗi route khai báo thêm khoá `translations` cho en / cn.
// Ngôn ngữ nào CHƯA có bản dịch thì URL vẫn mở được nhưng bị đánh noindex và
// không xuất hiện trong sitemap / thẻ hreflang - tránh việc Google index nội dung
// tiếng Việt dưới địa chỉ /en hoặc /cn. Dịch xong chỉ cần thêm khối translations.

import {DEFAULT_LOCALE, LOCALES, localizePath, splitLocaleFromPath} from '../i18n/config.js';
import {markdownExcerpt} from '../utils/markdownExcerpt.js';

export const SITE = {
    baseUrl: 'https://nextgency.vn',
    name: 'Nextgency',
    siteName: 'Nextgency - Digital Marketing Agency',
    locale: 'vi_VN',
    lang: 'vi',
    twitterHandle: '@nextgency',
    themeColor: '#000000'
};

// Ảnh thumbnail mặc định khi chia sẻ link lên mạng xã hội (Facebook, Zalo, LinkedIn, X...)
export const DEFAULT_OG_IMAGE = {
    url: '/assets/images/seo-banner.webp',
    width: 2721,
    height: 1258,
    type: 'image/webp',
    alt: 'Nextgency - Giải pháp Digital Marketing toàn diện'
};

/** Đổi đường dẫn tương đối thành URL tuyệt đối (bắt buộc với og:image, og:url, canonical). */
export const toAbsoluteUrl = (value) => {
    if (!value) return SITE.baseUrl;
    if (/^https?:\/\//i.test(value)) return value;
    return `${SITE.baseUrl}${value.startsWith('/') ? value : `/${value}`}`;
};

/** Chuẩn hóa ảnh OG: nhận string hoặc object, luôn trả về object có url tuyệt đối. */
export const resolveOgImage = (image) => {
    if (!image) return {...DEFAULT_OG_IMAGE, url: toAbsoluteUrl(DEFAULT_OG_IMAGE.url)};
    if (typeof image === 'string') {
        return {url: toAbsoluteUrl(image), alt: DEFAULT_OG_IMAGE.alt};
    }
    return {...image, url: toAbsoluteUrl(image.url), alt: image.alt || DEFAULT_OG_IMAGE.alt};
};

export const seoConfigs = {
    home: {
        path: '/',
        title: 'Nextgency - Giải pháp Digital Marketing toàn diện',
        description: 'Nextgency là agency digital marketing chuyên thiết kế website, quảng cáo Google Ads, Facebook Ads, TikTok Ads và các giải pháp marketing tổng thể cho doanh nghiệp.',
        keywords: 'nextgency, digital marketing agency, thiết kế website, google ads, facebook ads, tiktok ads, marketing agency vietnam',
        priority: 1.0,
        changefreq: 'weekly',
        translations: {
            en: {
                title: 'Nextgency - End-to-end Digital Marketing solutions',
                description:
                    'Nextgency is a digital marketing agency specialising in web design, Google Ads, Facebook Ads, TikTok Ads and full-stack marketing solutions for businesses.',
                keywords:
                    'nextgency, digital marketing agency, web design, google ads, facebook ads, tiktok ads, marketing agency vietnam'
            },
            cn: {
                title: 'Nextgency - 全方位数字营销解决方案',
                description:
                    'Nextgency 是一家数字营销代理机构，专注于网站设计、谷歌广告、Facebook 广告、TikTok 广告以及面向企业的整体营销解决方案。',
                keywords: 'nextgency, 数字营销, 网站设计, 谷歌广告, facebook 广告, tiktok 广告, 越南营销公司'
            }
        }
    },
    about: {
        path: '/about',
        title: 'Về Nextgency - Đội ngũ Digital Marketing',
        description: 'Tìm hiểu về Nextgency - đội ngũ chuyên gia digital marketing nhiều năm kinh nghiệm trong quảng cáo online, công nghệ và phát triển thương hiệu.',
        keywords: 'về nextgency, digital marketing team, marketing agency ho chi minh',
        priority: 0.8,
        changefreq: 'monthly',
        translations: {
            en: {
                title: 'About Nextgency - Our Digital Marketing team',
                description:
                    'Get to know Nextgency - a team of digital marketing specialists with years of experience in online advertising, technology and brand building.',
                keywords: 'about nextgency, digital marketing team, marketing agency vietnam'
            },
            cn: {
                title: '关于 Nextgency - 数字营销团队',
                description:
                    '了解 Nextgency——一支在网络广告、技术与品牌建设领域拥有多年经验的数字营销专家团队。',
                keywords: '关于 nextgency, 数字营销团队, 越南营销公司'
            }
        }
    },
    news: {
        path: '/news',
        title: 'Tin tức & Kiến thức Marketing | Nextgency',
        description: 'Cập nhật tin tức, xu hướng và kiến thức thực chiến về digital marketing, quảng cáo online, AI và chuyển đổi số từ đội ngũ Nextgency.',
        keywords: 'tin tức marketing, kiến thức digital marketing, xu hướng quảng cáo, blog nextgency',
        priority: 0.7,
        changefreq: 'weekly',
        translations: {
            en: {
                title: 'Marketing news & insights | Nextgency',
                description:
                    'News, trends and hands-on knowledge about digital marketing, online advertising, AI and digital transformation from the Nextgency team.',
                keywords: 'marketing news, digital marketing insights, advertising trends, nextgency blog'
            },
            cn: {
                title: '营销资讯与知识 | Nextgency',
                description:
                    '来自 Nextgency 团队的数字营销、网络广告、AI 与数字化转型方面的资讯、趋势与实战经验。',
                keywords: '营销资讯, 数字营销知识, 广告趋势, nextgency 博客'
            }
        }
    },
    contact: {
        path: '/contact',
        title: 'Liên hệ Nextgency - Tư vấn Digital Marketing',
        description: 'Liên hệ Nextgency để được tư vấn miễn phí về website, quảng cáo online và giải pháp marketing phù hợp với ngân sách của doanh nghiệp bạn.',
        keywords: 'liên hệ nextgency, tư vấn marketing, báo giá digital marketing',
        priority: 0.7,
        changefreq: 'monthly',
        translations: {
            en: {
                title: 'Contact Nextgency - Digital Marketing consultation',
                description:
                    'Contact Nextgency for a free consultation on websites, online advertising and the marketing solution that fits your budget.',
                keywords: 'contact nextgency, marketing consultation, digital marketing quote'
            },
            cn: {
                title: '联系 Nextgency - 数字营销咨询',
                description:
                    '联系 Nextgency，免费咨询网站建设、网络广告以及符合您预算的营销解决方案。',
                keywords: '联系 nextgency, 营销咨询, 数字营销报价'
            }
        }
    },
    privacy: {
        path: '/chinh-sach-bao-mat',
        title: 'Chính sách bảo mật | Nextgency',
        description: 'Chính sách bảo mật của Nextgency: cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu cá nhân của khách hàng.',
        keywords: 'chính sách bảo mật, bảo vệ dữ liệu cá nhân, nextgency',
        priority: 0.3,
        changefreq: 'yearly',
        translations: {
            en: {
                title: 'Privacy policy | Nextgency',
                description:
                    'Nextgency’s privacy policy: how we collect, use, store and protect our customers’ personal data.',
                keywords: 'privacy policy, personal data protection, nextgency'
            },
            cn: {
                title: '隐私政策 | Nextgency',
                description:
                    'Nextgency 的隐私政策：我们如何收集、使用、存储与保护客户的个人数据。',
                keywords: '隐私政策, 个人数据保护, nextgency'
            }
        }
    },
    datLich: {
        path: '/dat-lich',
        title: 'Đặt buổi Growth Call 30 phút với Ngô Hồng Sơn | Nextgency',
        description: 'Đặt buổi tư vấn tăng trưởng 1-1 miễn phí 30 phút: soi kênh đang chạy, chỉ đúng điểm nghẽn và vạch đường ưu tiên. Cọc giữ chỗ hoàn 100% bất kỳ lúc nào.',
        keywords: 'đặt lịch tư vấn, growth call, tư vấn tăng trưởng, tư vấn marketing 1-1, nextgency',
        priority: 0.8,
        changefreq: 'monthly',
        translations: {
            en: {
                title: 'Book a 30-minute Growth Call with Ngo Hong Son | Nextgency',
                description:
                    'Book a free 30-minute 1-to-1 growth consultation: a look at the channels you run, the real bottleneck named and a priority path set out. The holding deposit is refunded in full at any time.',
                keywords: 'book a consultation, growth call, growth consulting, 1-to-1 marketing consultation, nextgency'
            },
            cn: {
                title: '预约与 Ngo Hong Son 的 30 分钟 Growth Call | Nextgency',
                description:
                    '预约免费的 30 分钟一对一增长咨询：梳理正在跑的渠道、指出真正的卡点、划出优先路径。占位定金随时 100% 退还。',
                keywords: '预约咨询, growth call, 增长咨询, 一对一营销咨询, nextgency'
            }
        }
    },
    services: {
        'website-landing-page': {
            path: '/services/website-landing-page',
            title: 'Thiết kế Website & Landing Page chuẩn SEO | Nextgency',
            description: 'Dịch vụ thiết kế website và landing page chuyên nghiệp: tối ưu chuyển đổi, responsive, chuẩn SEO và cam kết hiệu quả kinh doanh.',
            keywords: 'thiết kế website, landing page, website chuyên nghiệp, thiết kế web responsive',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'SEO-ready website & landing page design | Nextgency',
                    description:
                        'Professional website and landing page design: optimised for conversion, responsive, SEO-ready and committed to business results.',
                    keywords: 'website design, landing page, professional website, responsive web design'
                },
                cn: {
                    title: '符合 SEO 规范的网站与落地页设计 | Nextgency',
                    description:
                        '专业的网站与落地页设计：以转化为导向、响应式、符合 SEO 规范，并对经营成效负责。',
                    keywords: '网站设计, 落地页, 专业网站, 响应式网页设计'
                }
            }
        },
        'ai-data': {
            path: '/services/ai-data',
            title: 'AI & Data Analytics cho Marketing | Nextgency',
            description: 'Ứng dụng AI và phân tích dữ liệu để tối ưu chiến dịch marketing: dự đoán xu hướng, phân tích hành vi khách hàng và tối ưu ROI.',
            keywords: 'ai marketing, data analytics, marketing automation, predictive analytics',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'AI & data analytics for marketing | Nextgency',
                    description:
                        'Applying AI and data analysis to optimise marketing campaigns: predicting trends, analysing customer behaviour and improving ROI.',
                    keywords: 'ai marketing, data analytics, marketing automation, predictive analytics'
                },
                cn: {
                    title: '面向营销的 AI 与数据分析 | Nextgency',
                    description:
                        '运用 AI 与数据分析优化营销活动：预测趋势、分析客户行为并提升 ROI。',
                    keywords: 'ai 营销, 数据分析, 营销自动化, 预测分析'
                }
            }
        },
        'tool-content-ai': {
            path: '/ai',
            title: 'Tool Content AI - Tự động hóa nội dung SEO | Nextgency',
            description: 'Nền tảng AI phân tích social & sàn TMĐT, lên kế hoạch và viết nội dung chuẩn SEO - AEO - GEO, tự động đi internal link, backlink và xuất bản đa kênh.',
            keywords: 'tool content ai, automation content, viết content ai, seo aeo geo, tự động đi internal link, xuất bản đa kênh',
            // Thumbnail riêng của trang này khi chia sẻ lên mạng xã hội
            image: {
                url: '/assets/images/seo-tool-content-ai.webp',
                width: 1672,
                height: 941,
                type: 'image/webp',
                alt: 'Automation Tool Content AI - Nextgency'
            },
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Automation Tool Content AI - SEO content on autopilot | Nextgency',
                    description:
                        'An AI platform that analyses social and marketplace data, plans and writes SEO, AEO and GEO-ready content, builds internal links and backlinks automatically and publishes across channels.',
                    keywords: 'content ai tool, content automation, ai writing, seo aeo geo, automatic internal linking, multi-channel publishing'
                },
                cn: {
                    title: 'Automation Tool Content AI —— 自动化 SEO 内容 | Nextgency',
                    description:
                        '一个 AI 平台：分析社媒与电商平台数据，规划并撰写符合 SEO、AEO、GEO 标准的内容，自动布置站内链接与外链，并实现多渠道发布。',
                    keywords: '内容 ai 工具, 内容自动化, ai 写作, seo aeo geo, 自动站内链接, 多渠道发布'
                }
            }
        },
        'google-ads': {
            path: '/services/google-ads',
            title: 'Dịch vụ quảng cáo Google Ads chuyên nghiệp | Nextgency',
            description: 'Quản lý và tối ưu chiến dịch Google Ads hiệu quả: tăng doanh số, giảm chi phí quảng cáo với đội ngũ chuyên gia nhiều năm kinh nghiệm.',
            keywords: 'google ads, quảng cáo google, google advertising, sem, search ads',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Professional Google Ads management | Nextgency',
                    description:
                        'Managing and optimising Google Ads campaigns that work: more sales, lower ad costs, run by a team with years of hands-on experience.',
                    keywords: 'google ads, google advertising, sem, search ads, ppc management'
                },
                cn: {
                    title: '专业谷歌广告投放服务 | Nextgency',
                    description:
                        '管理并优化真正有效的谷歌广告：提升销售额、降低广告成本，由拥有多年实战经验的团队执行。',
                    keywords: '谷歌广告, google ads, sem, 搜索广告, 竞价托管'
                }
            }
        },
        'facebook-ads': {
            path: '/services/facebook-ads',
            title: 'Dịch vụ quảng cáo Facebook Ads hiệu quả | Nextgency',
            description: 'Chạy quảng cáo Facebook Ads chuyên nghiệp: target đúng khách hàng, tối ưu chi phí và tăng doanh thu bền vững cho doanh nghiệp.',
            keywords: 'facebook ads, quảng cáo facebook, facebook advertising, social media marketing',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Facebook Ads services that deliver | Nextgency',
                    description:
                        'Professional Facebook Ads management: reaching the right customers, optimising spend and growing revenue sustainably for your business.',
                    keywords: 'facebook ads, facebook advertising, meta ads, social media marketing'
                },
                cn: {
                    title: '高效的 Facebook 广告投放服务 | Nextgency',
                    description:
                        '专业的 Facebook 广告投放：精准触达目标客户、优化投放成本，为企业带来可持续的营收增长。',
                    keywords: 'facebook 广告, facebook advertising, meta 广告, 社交媒体营销'
                }
            }
        },
        'tiktok-ads': {
            path: '/services/tiktok-ads',
            title: 'Dịch vụ quảng cáo TikTok Ads | Nextgency',
            description: 'Khai thác sức mạnh TikTok Ads để tiếp cận khách hàng trẻ với chiến dịch sáng tạo, khả năng lan tỏa cao và chi phí tối ưu.',
            keywords: 'tiktok ads, quảng cáo tiktok, tiktok advertising, tiktok marketing',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'TikTok Ads services | Nextgency',
                    description:
                        'Harnessing TikTok Ads to reach younger audiences with creative campaigns, strong reach potential and optimised costs.',
                    keywords: 'tiktok ads, tiktok advertising, tiktok marketing, short video ads'
                },
                cn: {
                    title: 'TikTok 广告投放服务 | Nextgency',
                    description:
                        '借助 TikTok 广告触达年轻人群：创意突出、传播力强、成本可控。',
                    keywords: 'tiktok 广告, tiktok advertising, tiktok 营销, 短视频广告'
                }
            }
        },
        'facebook-crm': {
            path: '/services/facebook-crm',
            title: 'Facebook CRM - Quản lý khách hàng Facebook | Nextgency',
            description: 'Giải pháp CRM tích hợp Facebook: quản lý tin nhắn, bình luận và khách hàng tiềm năng từ fanpage một cách tập trung, hiệu quả.',
            keywords: 'facebook crm, quản lý khách hàng facebook, social crm, facebook integration',
            priority: 0.8,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Facebook CRM - manage Facebook customers | Nextgency',
                    description:
                        'A CRM solution integrated with Facebook: managing messages, comments and leads from your fanpage in one place, efficiently.',
                    keywords: 'facebook crm, facebook customer management, social crm, facebook integration'
                },
                cn: {
                    title: 'Facebook CRM —— 管理 Facebook 客户 | Nextgency',
                    description:
                        '与 Facebook 打通的 CRM 方案：集中、高效地管理来自主页的私信、评论与潜在客户。',
                    keywords: 'facebook crm, facebook 客户管理, 社交 crm, facebook 集成'
                }
            }
        },
        'marketing-outsource': {
            path: '/services/marketing-outsource',
            title: 'Marketing Outsource - Thuê ngoài Marketing | Nextgency',
            description: 'Dịch vụ thuê ngoài marketing toàn diện: tiết kiệm chi phí nhân sự, vận hành chuyên nghiệp với đội ngũ chuyên gia đa lĩnh vực.',
            keywords: 'marketing outsource, thuê ngoài marketing, outsourcing marketing, marketing agency',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Marketing outsourcing services | Nextgency',
                    description:
                        'End-to-end marketing outsourcing: saving on headcount costs and running professionally with a multi-disciplinary specialist team.',
                    keywords: 'marketing outsourcing, outsourced marketing team, marketing agency'
                },
                cn: {
                    title: '营销外包服务 | Nextgency',
                    description:
                        '一站式营销外包：节省人力成本，由跨领域的专家团队专业运营。',
                    keywords: '营销外包, 外包营销团队, 营销代理机构'
                }
            }
        },
        'tick-xanh-facebook': {
            path: '/services/tick-xanh-facebook',
            title: 'Dịch vụ Tick xanh Facebook | Nextgency',
            description: 'Hỗ trợ xác minh tick xanh Facebook cho doanh nghiệp và thương hiệu, tăng uy tín cùng độ tin cậy cho fanpage của bạn.',
            keywords: 'tick xanh facebook, facebook verification, xác minh facebook, blue tick facebook',
            priority: 0.7,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Facebook blue badge verification service | Nextgency',
                    description:
                        'Support with Facebook blue badge verification for businesses and brands, adding credibility and trust to your fanpage.',
                    keywords: 'facebook blue badge, facebook verification, blue tick facebook, page verification'
                },
                cn: {
                    title: 'Facebook 蓝标认证服务 | Nextgency',
                    description:
                        '为企业与品牌提供 Facebook 蓝标认证支持，提升主页的公信力与可信度。',
                    keywords: 'facebook 蓝标, facebook 认证, 蓝 v 认证, 主页认证'
                }
            }
        }
    },
    projects: {
        all: {
            path: '/projects/all',
            title: 'Dự án tiêu biểu | Nextgency',
            description: 'Tổng hợp các dự án website, mini app, chiến dịch quảng cáo và giải pháp chuyển đổi số Nextgency đã triển khai cho khách hàng.',
            keywords: 'dự án nextgency, case study marketing, dự án website, dự án chuyển đổi số',
            priority: 0.8,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Selected projects | Nextgency',
                    description:
                        'Every website, mini app, advertising campaign and digital transformation project Nextgency has delivered for its clients.',
                    keywords: 'nextgency projects, marketing case study, website projects, digital transformation projects'
                },
                cn: {
                    title: '代表项目 | Nextgency',
                    description:
                        'Nextgency 为客户交付过的网站、小程序、广告投放与数字化转型项目汇总。',
                    keywords: 'nextgency 项目, 营销案例, 网站项目, 数字化转型项目'
                }
            }
        },
        portfolio: {
            path: '/projects/portfolio',
            title: 'Portfolio dự án | Nextgency',
            description: 'Bộ sưu tập hình ảnh các sản phẩm thiết kế, website và ấn phẩm truyền thông do Nextgency thực hiện.',
            keywords: 'portfolio nextgency, mẫu thiết kế website, ấn phẩm truyền thông',
            priority: 0.6,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Project portfolio | Nextgency',
                    description:
                        'A gallery of the design work, websites and communication materials produced by Nextgency.',
                    keywords: 'nextgency portfolio, website design samples, communication materials'
                },
                cn: {
                    title: '项目作品集 | Nextgency',
                    description:
                        'Nextgency 所完成的设计作品、网站与传播物料图集。',
                    keywords: 'nextgency 作品集, 网站设计案例, 传播物料'
                }
            }
        },
        workflow: {
            path: '/projects/workflow',
            title: 'Workflow Automation - Thư viện quy trình tự động | Nextgency',
            description: 'Thư viện các workflow tự động hóa marketing và vận hành: tạo nội dung AI, đồng bộ dữ liệu, chăm sóc khách hàng đa kênh.',
            keywords: 'workflow automation, tự động hóa quy trình, n8n workflow, automation marketing',
            priority: 0.7,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Workflow automation - a library of automated processes | Nextgency',
                    description:
                        'A library of marketing and operations automation workflows: AI content generation, data sync and multi-channel customer care.',
                    keywords: 'workflow automation, process automation, n8n workflow, marketing automation'
                },
                cn: {
                    title: '自动化工作流 —— 流程模板库 | Nextgency',
                    description:
                        '营销与运营自动化工作流合集：AI 内容生成、数据同步与多渠道客户维护。',
                    keywords: '自动化工作流, 流程自动化, n8n workflow, 营销自动化'
                }
            }
        },
        'miniapp-beautysummit-2026': {
            path: '/projects/miniapp-beautysummit-2026',
            title: 'Mini App Beauty Summit 2026 - BEAUTYVERSE | Nextgency',
            description: 'Case study Zalo Mini App BEAUTYVERSE do Nextgency thiết kế và vận hành cho Beauty Summit Vietnam 2026: gamification, check-in QR và hệ điểm BPoint.',
            keywords: 'Zalo Mini App, Beauty Summit 2026, BEAUTYVERSE, Nextgency, gamification, check-in QR, BPoint',
            type: 'article',
            priority: 0.8,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Beauty Summit 2026 Mini App - BEAUTYVERSE | Nextgency',
                    description:
                        'A case study of the BEAUTYVERSE Zalo Mini App designed and run by Nextgency for Beauty Summit Vietnam 2026: gamification, QR check-in and the BPoint rewards system.',
                    keywords: 'Zalo Mini App, Beauty Summit 2026, BEAUTYVERSE, Nextgency, gamification, QR check-in, BPoint'
                },
                cn: {
                    title: 'Beauty Summit 2026 小程序 —— BEAUTYVERSE | Nextgency',
                    description:
                        'Nextgency 为 Beauty Summit Vietnam 2026 设计并运营的 BEAUTYVERSE Zalo 小程序案例：游戏化、二维码签到与 BPoint 积分体系。',
                    keywords: 'Zalo 小程序, Beauty Summit 2026, BEAUTYVERSE, Nextgency, 游戏化, 二维码签到, BPoint'
                }
            }
        }
    }
};

/** Danh sách phẳng mọi route tĩnh - dùng cho prerender và sitemap. */
export const seoRoutes = [
    seoConfigs.home,
    seoConfigs.about,
    seoConfigs.news,
    seoConfigs.contact,
    seoConfigs.privacy,
    seoConfigs.datLich,
    ...Object.values(seoConfigs.services),
    ...Object.values(seoConfigs.projects)
];

/** Tra cứu route theo đường dẫn KHÔNG có prefix ngôn ngữ. */
const findRouteByBasePath = (basePath = '/') => {
    const normalized = basePath.length > 1 ? basePath.replace(/\/+$/, '') : basePath;
    return seoRoutes.find((route) => route.path === normalized) || null;
};

// Cấu hình gốc (tiếng Việt, chưa ghép bản dịch) của một object SEO đã resolve.
// Nhờ nó, resolve lần hai - RouteSEO resolve rồi truyền tiếp cho SEOManager - vẫn
// dựng lại từ bản gốc thay vì chồng bản dịch lên bản dịch.
const baseConfigOf = (route) => route?.baseConfig || route;

/**
 * Ghép cấu hình gốc (tiếng Việt) với bản dịch của một ngôn ngữ.
 * `hasTranslation === false` nghĩa là ngôn ngữ đó chưa có nội dung riêng -> noindex.
 */
export const resolveSeoForLocale = (route, locale = DEFAULT_LOCALE) => {
    if (!route) return null;

    const base = baseConfigOf(route);
    const override = locale === DEFAULT_LOCALE ? null : base.translations?.[locale];

    return {
        ...base,
        ...(override || {}),
        baseConfig: base,
        basePath: base.path,
        path: localizePath(base.path, locale),
        locale,
        hasTranslation: locale === DEFAULT_LOCALE || Boolean(override)
    };
};

/**
 * Tra cứu cấu hình SEO theo pathname ĐẦY ĐỦ (có thể kèm /en, /cn).
 * Dùng cho RouteSEO và cho prerender.
 */
export const getSeoByPath = (pathname = '/') => {
    const {locale, pathname: basePath} = splitLocaleFromPath(pathname);
    const route = findRouteByBasePath(basePath);
    return route ? resolveSeoForLocale(route, locale) : null;
};

/** Những ngôn ngữ đã có bản dịch cho một route (luôn gồm tiếng Việt). */
export const getTranslatedLocales = (route) => {
    if (!route) return [DEFAULT_LOCALE];
    const base = baseConfigOf(route);
    return LOCALES.filter(
        (locale) => locale.code === DEFAULT_LOCALE || Boolean(base.translations?.[locale.code])
    ).map((locale) => locale.code);
};

/**
 * Danh sách thẻ <link rel="alternate" hreflang> của một route.
 * Chỉ liệt kê ngôn ngữ đã dịch; x-default luôn trỏ về bản tiếng Việt.
 * Trả về [] nếu route mới chỉ có tiếng Việt (khi đó không cần hreflang).
 */
export const getSeoAlternates = (route) => {
    if (!route) return [];

    const basePath = baseConfigOf(route).path || '/';
    const translated = getTranslatedLocales(route);
    if (translated.length < 2) return [];

    const alternates = LOCALES.filter((locale) => translated.includes(locale.code)).map((locale) => ({
        hreflang: locale.hreflang,
        href: toAbsoluteUrl(localizePath(basePath, locale.code))
    }));

    alternates.push({
        hreflang: 'x-default',
        href: toAbsoluteUrl(localizePath(basePath, DEFAULT_LOCALE))
    });

    return alternates;
};

/** Mọi cặp (route × ngôn ngữ) - dùng cho prerender và kiểm tra rewrite. */
export const getLocalizedSeoRoutes = () =>
    seoRoutes.flatMap((route) => LOCALES.map((locale) => resolveSeoForLocale(route, locale.code)));

/* ------------------------------------------------------------ bài viết tin tức */

/**
 * Cấu hình SEO của một bài viết (/news/<slug>-<id>), cùng dạng với các route tĩnh ở trên.
 * Dùng chung cho NewsDetailPage (client) và generate-static.js (prerender), nên thẻ
 * chia sẻ Facebook / Zalo luôn là ảnh bìa + mô tả ngắn của chính bài viết.
 *
 * Bài viết chỉ có tiếng Việt (không có `translations`), nên bản /en, /cn bị noindex.
 *
 * @param {object} news - metadata bài viết (src/content/news/<id>.json), kèm `context`
 *                        là nội dung markdown để lấy mô tả dự phòng khi thiếu description.
 */
export const getNewsSeo = (news) => {
    const description =
        String(news.description || '').trim() || markdownExcerpt(news.context) || seoConfigs.news.description;
    const tags = (news.tags || []).map((tag) => String(tag).trim()).filter(Boolean);

    return {
        path: `/news/${news.slug}-${news.id}`,
        title: `${news.title} | ${SITE.name}`,
        headline: news.title,
        description,
        keywords: tags.join(', '),
        image: news.thumbnail ? {url: news.thumbnail, alt: news.title} : null,
        type: 'article',
        publishedTime: news.date,
        section: news.categories?.[0] || '',
        tags,
        priority: 0.6,
        changefreq: 'monthly'
    };
};
