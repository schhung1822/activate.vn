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
    baseUrl: 'https://activate.vn',
    name: 'Activate',
    siteName: 'Activate - Thương mại · Phân phối · Xuất nhập khẩu',
    locale: 'vi_VN',
    lang: 'vi',
    twitterHandle: '',
    themeColor: '#EE3E99',
    logo: '/assets/images/brand/activate-icon.png'
};

// Thông tin pháp lý của doanh nghiệp - dùng chung cho footer, trang liên hệ và schema Organization
export const COMPANY = {
    brand: 'Activate',
    legalName: 'CIVI GLOBAL COMPANY LIMITED',
    taxId: '0111450660',
    email: 'contact@activate.vn',
    phone: '+84332083366',
    phoneDisplay: '(+84) 33 208 3366',
    website: 'activate.vn',
    // Hồ sơ năng lực cho nút "Tải hồ sơ năng lực" - thay file PDF tại đường dẫn này khi có bản chính thức
    profilePdf: '/assets/docs/activate-ho-so-nang-luc.pdf',
    address: {
        street: 'Số 16, Ngõ 250 Trịnh Đình Cửu',
        ward: 'Phường Định Công',
        city: 'TP Hà Nội',
        country: 'Việt Nam',
        full: 'Số 16, Ngõ 250 Trịnh Đình Cửu, Phường Định Công, TP Hà Nội, Việt Nam'
    }
};

// Ảnh thumbnail mặc định khi chia sẻ link lên mạng xã hội (Facebook, Zalo, LinkedIn, X...)
export const DEFAULT_OG_IMAGE = {
    url: '/assets/images/brand/activate-og.png',
    width: 1200,
    height: 630,
    type: 'image/png',
    alt: 'Activate - Kết nối nguồn cung. Kích hoạt thị trường.'
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
        title: 'Activate - Thương mại, Phân phối & Xuất nhập khẩu | CIVI GLOBAL',
        description: 'Activate (CIVI GLOBAL COMPANY LIMITED, MST 0111450660) - doanh nghiệp thương mại bán buôn, xuất nhập khẩu và đại lý phân phối. Đối tác cung ứng tin cậy cho nhà phân phối, nhà sản xuất và tổ chức tài chính.',
        keywords: 'activate, civi global company limited, công ty thương mại hà nội, phân phối bán buôn, xuất nhập khẩu, đại lý phân phối, nhà cung cấp b2b',
        priority: 1.0,
        changefreq: 'weekly',
        translations: {
            en: {
                title: 'Activate - Trading, Distribution & Import-Export | CIVI GLOBAL',
                description:
                    'Activate (CIVI GLOBAL COMPANY LIMITED, Tax ID 0111450660) is a wholesale trading, import & export and distribution agency company - a trusted supply partner for distributors, manufacturers and financial institutions.',
                keywords:
                    'activate, civi global company limited, vietnam trading company, wholesale distribution, import export vietnam, distribution agency, b2b supplier'
            },
            cn: {
                title: 'Activate - 贸易、分销与进出口 | CIVI GLOBAL',
                description:
                    'Activate（CIVI GLOBAL COMPANY LIMITED，税号 0111450660）是一家从事批发贸易、进出口及分销代理的企业，是分销商、生产商与金融机构值得信赖的供应合作伙伴。',
                keywords: 'activate, civi global, 越南贸易公司, 批发分销, 越南进出口, 分销代理, b2b 供应商'
            }
        }
    },
    about: {
        path: '/about',
        title: 'Giới thiệu Activate - CIVI GLOBAL COMPANY LIMITED',
        description: 'Tầm nhìn, sứ mệnh, giá trị cốt lõi và hồ sơ pháp lý của Activate - thương hiệu thương mại của CIVI GLOBAL COMPANY LIMITED (MST 0111450660), trụ sở tại Hà Nội.',
        keywords: 'giới thiệu activate, civi global company limited, hồ sơ pháp lý, mã số thuế 0111450660, công ty thương mại hà nội',
        priority: 0.8,
        changefreq: 'monthly',
        translations: {
            en: {
                title: 'About Activate - CIVI GLOBAL COMPANY LIMITED',
                description:
                    'Vision, mission, core values and legal profile of Activate - the trading brand of CIVI GLOBAL COMPANY LIMITED (Tax ID 0111450660), headquartered in Hanoi.',
                keywords: 'about activate, civi global company limited, legal profile, tax id 0111450660, hanoi trading company'
            },
            cn: {
                title: '关于 Activate - CIVI GLOBAL COMPANY LIMITED',
                description:
                    'Activate 的愿景、使命、核心价值与法律档案——CIVI GLOBAL COMPANY LIMITED（税号 0111450660）旗下贸易品牌，总部位于河内。',
                keywords: '关于 activate, civi global, 法律档案, 税号 0111450660, 河内贸易公司'
            }
        }
    },
    news: {
        path: '/news',
        title: 'Tin tức doanh nghiệp | Activate',
        description: 'Tin tức doanh nghiệp, hoạt động hợp tác và góc nhìn thị trường thương mại, phân phối, xuất nhập khẩu từ Activate.',
        keywords: 'tin tức activate, tin tức doanh nghiệp, thị trường phân phối, xuất nhập khẩu',
        priority: 0.7,
        changefreq: 'weekly',
        translations: {
            en: {
                title: 'Company news | Activate',
                description:
                    'Company news, partnership updates and market perspectives on trading, distribution and import & export from Activate.',
                keywords: 'activate news, company news, distribution market, import export'
            },
            cn: {
                title: '企业新闻 | Activate',
                description: '来自 Activate 的企业新闻、合作动态，以及贸易、分销与进出口市场观察。',
                keywords: 'activate 新闻, 企业新闻, 分销市场, 进出口'
            }
        }
    },
    contact: {
        path: '/contact',
        title: 'Liên hệ hợp tác | Activate',
        description: 'Cổng thông tin đối tác của Activate: gửi đề xuất hợp tác phân phối, cung ứng, xuất nhập khẩu hoặc tài chính. Hotline (+84) 33 208 3366 · contact@activate.vn.',
        keywords: 'liên hệ activate, hợp tác phân phối, trở thành nhà cung cấp, đại lý phân phối, hợp tác xuất nhập khẩu',
        priority: 0.7,
        changefreq: 'monthly',
        translations: {
            en: {
                title: 'Partner with us | Activate',
                description:
                    'Activate partner portal: send a distribution, supply, import-export or financial partnership proposal. Phone (+84) 33 208 3366 · contact@activate.vn.',
                keywords: 'contact activate, distribution partnership, become a supplier, distribution agent, import export partnership'
            },
            cn: {
                title: '洽谈合作 | Activate',
                description:
                    'Activate 合作伙伴门户：提交分销、供货、进出口或金融合作意向。电话 (+84) 33 208 3366 · contact@activate.vn。',
                keywords: '联系 activate, 分销合作, 成为供应商, 分销代理, 进出口合作'
            }
        }
    },
    fields: {
        overview: {
            path: '/linh-vuc',
            title: 'Lĩnh vực hoạt động | Activate',
            description: 'Ba trụ cột năng lực của Activate: thương mại & phân phối bán buôn, xuất nhập khẩu & thương mại quốc tế, đại lý & giải pháp bán lẻ trung gian.',
            keywords: 'lĩnh vực hoạt động activate, phân phối bán buôn, xuất nhập khẩu, đại lý phân phối',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Business areas | Activate',
                    description:
                        'Activate’s three pillars: wholesale trading & distribution, import & export and international trade, and agency & intermediary retail solutions.',
                    keywords: 'activate business areas, wholesale distribution, import export, distribution agency'
                },
                cn: {
                    title: '业务领域 | Activate',
                    description: 'Activate 的三大支柱：批发贸易与分销、进出口与国际贸易、代理与中间零售解决方案。',
                    keywords: 'activate 业务领域, 批发分销, 进出口, 分销代理'
                }
            }
        },
        wholesale: {
            path: '/linh-vuc/thuong-mai-phan-phoi',
            title: 'Thương mại & Phân phối bán buôn | Activate',
            description: 'Activate cung ứng hàng tiêu dùng, gia dụng, thời trang và sản phẩm kỹ thuật quy mô lớn cho nhà phân phối, đại lý và chuỗi bán lẻ - nguồn cung ổn định, giá bán buôn minh bạch.',
            keywords: 'phân phối bán buôn, nhà cung cấp bán buôn, cung ứng hàng tiêu dùng, nhà phân phối hà nội',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Wholesale Trading & Distribution | Activate',
                    description:
                        'Activate supplies consumer goods, household, fashion and technical products at scale to distributors, agents and retail chains - steady supply and transparent wholesale pricing.',
                    keywords: 'wholesale distribution vietnam, wholesale supplier, consumer goods supply, distributor hanoi'
                },
                cn: {
                    title: '批发贸易与分销 | Activate',
                    description: 'Activate 为分销商、代理商及零售连锁规模化供应日用消费品、家居、服装及技术类产品——供应稳定，批发价格透明。',
                    keywords: '越南批发分销, 批发供应商, 消费品供应, 河内分销商'
                }
            }
        },
        trade: {
            path: '/linh-vuc/xuat-nhap-khau',
            title: 'Xuất nhập khẩu & Thương mại quốc tế | Activate',
            description: 'Dịch vụ xuất nhập khẩu của Activate: tìm nguồn và thẩm định nhà cung cấp quốc tế, thông quan, chứng từ và logistics đa phương thức; nhận uỷ thác xuất nhập khẩu.',
            keywords: 'xuất nhập khẩu, uỷ thác xuất nhập khẩu, nhập khẩu trọn gói, thông quan hàng hoá, logistics quốc tế',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Import & Export and International Trade | Activate',
                    description:
                        'Activate’s import & export services: sourcing and vetting international suppliers, customs clearance, documentation and multimodal logistics; import/export entrustment.',
                    keywords: 'import export vietnam, import export entrustment, full-service import, customs clearance, international logistics'
                },
                cn: {
                    title: '进出口与国际贸易 | Activate',
                    description: 'Activate 进出口服务：寻找并审核国际供应商、通关、单证及多式联运物流，并承接进出口委托。',
                    keywords: '越南进出口, 进出口委托, 一站式进口, 货物通关, 国际物流'
                }
            }
        },
        agency: {
            path: '/linh-vuc/dai-ly-ban-le',
            title: 'Đại lý & Giải pháp bán lẻ trung gian | Activate',
            description: 'Activate đại diện nhà sản xuất và thương hiệu phát triển mạng lưới đại lý, điểm bán và cửa hàng chuyên doanh; chuẩn hoá chính sách kênh, hỗ trợ trưng bày và đào tạo.',
            keywords: 'đại lý phân phối, phát triển mạng lưới đại lý, phân phối thương hiệu, kênh bán lẻ',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Agency & Intermediary Retail Solutions | Activate',
                    description:
                        'Activate represents manufacturers and brands in building agent, outlet and specialist-store networks, standardising channel policy and supporting merchandising and training.',
                    keywords: 'distribution agent vietnam, agent network development, brand distribution, retail channel'
                },
                cn: {
                    title: '代理与中间零售解决方案 | Activate',
                    description: 'Activate 代表生产商与品牌发展代理、网点及专卖店网络，规范渠道政策，并提供陈列与培训支持。',
                    keywords: '越南分销代理, 代理网络发展, 品牌分销, 零售渠道'
                }
            }
        }
    },
    privacy: {
        path: '/chinh-sach-bao-mat',
        title: 'Chính sách bảo mật | Activate',
        description: 'Chính sách bảo mật của Activate: cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu cá nhân của khách hàng.',
        keywords: 'chính sách bảo mật, bảo vệ dữ liệu cá nhân, activate',
        priority: 0.3,
        changefreq: 'yearly',
        translations: {
            en: {
                title: 'Privacy policy | Activate',
                description:
                    'Activate’s privacy policy: how we collect, use, store and protect our customers’ personal data.',
                keywords: 'privacy policy, personal data protection, activate'
            },
            cn: {
                title: '隐私政策 | Activate',
                description:
                    'Activate 的隐私政策：我们如何收集、使用、存储与保护客户的个人数据。',
                keywords: '隐私政策, 个人数据保护, activate'
            }
        }
    },
    datLich: {
        path: '/dat-lich',
        title: 'Đặt buổi Growth Call 30 phút với Ngô Hồng Sơn | Activate',
        description: 'Đặt buổi tư vấn tăng trưởng 1-1 miễn phí 30 phút: soi kênh đang chạy, chỉ đúng điểm nghẽn và vạch đường ưu tiên. Cọc giữ chỗ hoàn 100% bất kỳ lúc nào.',
        keywords: 'đặt lịch tư vấn, growth call, tư vấn tăng trưởng, tư vấn marketing 1-1, activate',
        priority: 0.8,
        changefreq: 'monthly',
        translations: {
            en: {
                title: 'Book a 30-minute Growth Call with Ngo Hong Son | Activate',
                description:
                    'Book a free 30-minute 1-to-1 growth consultation: a look at the channels you run, the real bottleneck named and a priority path set out. The holding deposit is refunded in full at any time.',
                keywords: 'book a consultation, growth call, growth consulting, 1-to-1 marketing consultation, activate'
            },
            cn: {
                title: '预约与 Ngo Hong Son 的 30 分钟 Growth Call | Activate',
                description:
                    '预约免费的 30 分钟一对一增长咨询：梳理正在跑的渠道、指出真正的卡点、划出优先路径。占位定金随时 100% 退还。',
                keywords: '预约咨询, growth call, 增长咨询, 一对一营销咨询, activate'
            }
        }
    },
    services: {
        'website-landing-page': {
            path: '/services/website-landing-page',
            title: 'Thiết kế Website & Landing Page chuẩn SEO | Activate',
            description: 'Dịch vụ thiết kế website và landing page chuyên nghiệp: tối ưu chuyển đổi, responsive, chuẩn SEO và cam kết hiệu quả kinh doanh.',
            keywords: 'thiết kế website, landing page, website chuyên nghiệp, thiết kế web responsive',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'SEO-ready website & landing page design | Activate',
                    description:
                        'Professional website and landing page design: optimised for conversion, responsive, SEO-ready and committed to business results.',
                    keywords: 'website design, landing page, professional website, responsive web design'
                },
                cn: {
                    title: '符合 SEO 规范的网站与落地页设计 | Activate',
                    description:
                        '专业的网站与落地页设计：以转化为导向、响应式、符合 SEO 规范，并对经营成效负责。',
                    keywords: '网站设计, 落地页, 专业网站, 响应式网页设计'
                }
            }
        },
        'ai-data': {
            path: '/services/ai-data',
            title: 'AI & Data Analytics cho Marketing | Activate',
            description: 'Ứng dụng AI và phân tích dữ liệu để tối ưu chiến dịch marketing: dự đoán xu hướng, phân tích hành vi khách hàng và tối ưu ROI.',
            keywords: 'ai marketing, data analytics, marketing automation, predictive analytics',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'AI & data analytics for marketing | Activate',
                    description:
                        'Applying AI and data analysis to optimise marketing campaigns: predicting trends, analysing customer behaviour and improving ROI.',
                    keywords: 'ai marketing, data analytics, marketing automation, predictive analytics'
                },
                cn: {
                    title: '面向营销的 AI 与数据分析 | Activate',
                    description:
                        '运用 AI 与数据分析优化营销活动：预测趋势、分析客户行为并提升 ROI。',
                    keywords: 'ai 营销, 数据分析, 营销自动化, 预测分析'
                }
            }
        },
        'tool-content-ai': {
            path: '/ai',
            title: 'Tool Content AI - Tự động hóa nội dung SEO | Activate',
            description: 'Nền tảng AI phân tích social & sàn TMĐT, lên kế hoạch và viết nội dung chuẩn SEO - AEO - GEO, tự động đi internal link, backlink và xuất bản đa kênh.',
            keywords: 'tool content ai, automation content, viết content ai, seo aeo geo, tự động đi internal link, xuất bản đa kênh',
            // Thumbnail riêng của trang này khi chia sẻ lên mạng xã hội
            image: {
                url: '/assets/images/seo-tool-content-ai.webp',
                width: 1672,
                height: 941,
                type: 'image/webp',
                alt: 'Automation Tool Content AI - Activate'
            },
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Automation Tool Content AI - SEO content on autopilot | Activate',
                    description:
                        'An AI platform that analyses social and marketplace data, plans and writes SEO, AEO and GEO-ready content, builds internal links and backlinks automatically and publishes across channels.',
                    keywords: 'content ai tool, content automation, ai writing, seo aeo geo, automatic internal linking, multi-channel publishing'
                },
                cn: {
                    title: 'Automation Tool Content AI —— 自动化 SEO 内容 | Activate',
                    description:
                        '一个 AI 平台：分析社媒与电商平台数据，规划并撰写符合 SEO、AEO、GEO 标准的内容，自动布置站内链接与外链，并实现多渠道发布。',
                    keywords: '内容 ai 工具, 内容自动化, ai 写作, seo aeo geo, 自动站内链接, 多渠道发布'
                }
            }
        },
        'google-ads': {
            path: '/services/google-ads',
            title: 'Dịch vụ quảng cáo Google Ads chuyên nghiệp | Activate',
            description: 'Quản lý và tối ưu chiến dịch Google Ads hiệu quả: tăng doanh số, giảm chi phí quảng cáo với đội ngũ chuyên gia nhiều năm kinh nghiệm.',
            keywords: 'google ads, quảng cáo google, google advertising, sem, search ads',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Professional Google Ads management | Activate',
                    description:
                        'Managing and optimising Google Ads campaigns that work: more sales, lower ad costs, run by a team with years of hands-on experience.',
                    keywords: 'google ads, google advertising, sem, search ads, ppc management'
                },
                cn: {
                    title: '专业谷歌广告投放服务 | Activate',
                    description:
                        '管理并优化真正有效的谷歌广告：提升销售额、降低广告成本，由拥有多年实战经验的团队执行。',
                    keywords: '谷歌广告, google ads, sem, 搜索广告, 竞价托管'
                }
            }
        },
        'facebook-ads': {
            path: '/services/facebook-ads',
            title: 'Dịch vụ quảng cáo Facebook Ads hiệu quả | Activate',
            description: 'Chạy quảng cáo Facebook Ads chuyên nghiệp: target đúng khách hàng, tối ưu chi phí và tăng doanh thu bền vững cho doanh nghiệp.',
            keywords: 'facebook ads, quảng cáo facebook, facebook advertising, social media marketing',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Facebook Ads services that deliver | Activate',
                    description:
                        'Professional Facebook Ads management: reaching the right customers, optimising spend and growing revenue sustainably for your business.',
                    keywords: 'facebook ads, facebook advertising, meta ads, social media marketing'
                },
                cn: {
                    title: '高效的 Facebook 广告投放服务 | Activate',
                    description:
                        '专业的 Facebook 广告投放：精准触达目标客户、优化投放成本，为企业带来可持续的营收增长。',
                    keywords: 'facebook 广告, facebook advertising, meta 广告, 社交媒体营销'
                }
            }
        },
        'tiktok-ads': {
            path: '/services/tiktok-ads',
            title: 'Dịch vụ quảng cáo TikTok Ads | Activate',
            description: 'Khai thác sức mạnh TikTok Ads để tiếp cận khách hàng trẻ với chiến dịch sáng tạo, khả năng lan tỏa cao và chi phí tối ưu.',
            keywords: 'tiktok ads, quảng cáo tiktok, tiktok advertising, tiktok marketing',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'TikTok Ads services | Activate',
                    description:
                        'Harnessing TikTok Ads to reach younger audiences with creative campaigns, strong reach potential and optimised costs.',
                    keywords: 'tiktok ads, tiktok advertising, tiktok marketing, short video ads'
                },
                cn: {
                    title: 'TikTok 广告投放服务 | Activate',
                    description:
                        '借助 TikTok 广告触达年轻人群：创意突出、传播力强、成本可控。',
                    keywords: 'tiktok 广告, tiktok advertising, tiktok 营销, 短视频广告'
                }
            }
        },
        'facebook-crm': {
            path: '/services/facebook-crm',
            title: 'Facebook CRM - Quản lý khách hàng Facebook | Activate',
            description: 'Giải pháp CRM tích hợp Facebook: quản lý tin nhắn, bình luận và khách hàng tiềm năng từ fanpage một cách tập trung, hiệu quả.',
            keywords: 'facebook crm, quản lý khách hàng facebook, social crm, facebook integration',
            priority: 0.8,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Facebook CRM - manage Facebook customers | Activate',
                    description:
                        'A CRM solution integrated with Facebook: managing messages, comments and leads from your fanpage in one place, efficiently.',
                    keywords: 'facebook crm, facebook customer management, social crm, facebook integration'
                },
                cn: {
                    title: 'Facebook CRM —— 管理 Facebook 客户 | Activate',
                    description:
                        '与 Facebook 打通的 CRM 方案：集中、高效地管理来自主页的私信、评论与潜在客户。',
                    keywords: 'facebook crm, facebook 客户管理, 社交 crm, facebook 集成'
                }
            }
        },
        'marketing-outsource': {
            path: '/services/marketing-outsource',
            title: 'Marketing Outsource - Thuê ngoài Marketing | Activate',
            description: 'Dịch vụ thuê ngoài marketing toàn diện: tiết kiệm chi phí nhân sự, vận hành chuyên nghiệp với đội ngũ chuyên gia đa lĩnh vực.',
            keywords: 'marketing outsource, thuê ngoài marketing, outsourcing marketing, marketing agency',
            priority: 0.9,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Marketing outsourcing services | Activate',
                    description:
                        'End-to-end marketing outsourcing: saving on headcount costs and running professionally with a multi-disciplinary specialist team.',
                    keywords: 'marketing outsourcing, outsourced marketing team, marketing agency'
                },
                cn: {
                    title: '营销外包服务 | Activate',
                    description:
                        '一站式营销外包：节省人力成本，由跨领域的专家团队专业运营。',
                    keywords: '营销外包, 外包营销团队, 营销代理机构'
                }
            }
        },
        'tick-xanh-facebook': {
            path: '/services/tick-xanh-facebook',
            title: 'Dịch vụ Tick xanh Facebook | Activate',
            description: 'Hỗ trợ xác minh tick xanh Facebook cho doanh nghiệp và thương hiệu, tăng uy tín cùng độ tin cậy cho fanpage của bạn.',
            keywords: 'tick xanh facebook, facebook verification, xác minh facebook, blue tick facebook',
            priority: 0.7,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Facebook blue badge verification service | Activate',
                    description:
                        'Support with Facebook blue badge verification for businesses and brands, adding credibility and trust to your fanpage.',
                    keywords: 'facebook blue badge, facebook verification, blue tick facebook, page verification'
                },
                cn: {
                    title: 'Facebook 蓝标认证服务 | Activate',
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
            title: 'Dự án tiêu biểu | Activate',
            description: 'Tổng hợp các dự án website, mini app, chiến dịch quảng cáo và giải pháp chuyển đổi số Activate đã triển khai cho khách hàng.',
            keywords: 'dự án activate, case study marketing, dự án website, dự án chuyển đổi số',
            priority: 0.8,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Selected projects | Activate',
                    description:
                        'Every website, mini app, advertising campaign and digital transformation project Activate has delivered for its clients.',
                    keywords: 'activate projects, marketing case study, website projects, digital transformation projects'
                },
                cn: {
                    title: '代表项目 | Activate',
                    description:
                        'Activate 为客户交付过的网站、小程序、广告投放与数字化转型项目汇总。',
                    keywords: 'activate 项目, 营销案例, 网站项目, 数字化转型项目'
                }
            }
        },
        portfolio: {
            path: '/projects/portfolio',
            title: 'Portfolio dự án | Activate',
            description: 'Bộ sưu tập hình ảnh các sản phẩm thiết kế, website và ấn phẩm truyền thông do Activate thực hiện.',
            keywords: 'portfolio activate, mẫu thiết kế website, ấn phẩm truyền thông',
            priority: 0.6,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Project portfolio | Activate',
                    description:
                        'A gallery of the design work, websites and communication materials produced by Activate.',
                    keywords: 'activate portfolio, website design samples, communication materials'
                },
                cn: {
                    title: '项目作品集 | Activate',
                    description:
                        'Activate 所完成的设计作品、网站与传播物料图集。',
                    keywords: 'activate 作品集, 网站设计案例, 传播物料'
                }
            }
        },
        workflow: {
            path: '/projects/workflow',
            title: 'Workflow Automation - Thư viện quy trình tự động | Activate',
            description: 'Thư viện các workflow tự động hóa marketing và vận hành: tạo nội dung AI, đồng bộ dữ liệu, chăm sóc khách hàng đa kênh.',
            keywords: 'workflow automation, tự động hóa quy trình, n8n workflow, automation marketing',
            priority: 0.7,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Workflow automation - a library of automated processes | Activate',
                    description:
                        'A library of marketing and operations automation workflows: AI content generation, data sync and multi-channel customer care.',
                    keywords: 'workflow automation, process automation, n8n workflow, marketing automation'
                },
                cn: {
                    title: '自动化工作流 —— 流程模板库 | Activate',
                    description:
                        '营销与运营自动化工作流合集：AI 内容生成、数据同步与多渠道客户维护。',
                    keywords: '自动化工作流, 流程自动化, n8n workflow, 营销自动化'
                }
            }
        },
        'miniapp-beautysummit-2026': {
            path: '/projects/miniapp-beautysummit-2026',
            title: 'Mini App Beauty Summit 2026 - BEAUTYVERSE | Activate',
            description: 'Case study Zalo Mini App BEAUTYVERSE do Activate thiết kế và vận hành cho Beauty Summit Vietnam 2026: gamification, check-in QR và hệ điểm BPoint.',
            keywords: 'Zalo Mini App, Beauty Summit 2026, BEAUTYVERSE, Activate, gamification, check-in QR, BPoint',
            type: 'article',
            priority: 0.8,
            changefreq: 'monthly',
            translations: {
                en: {
                    title: 'Beauty Summit 2026 Mini App - BEAUTYVERSE | Activate',
                    description:
                        'A case study of the BEAUTYVERSE Zalo Mini App designed and run by Activate for Beauty Summit Vietnam 2026: gamification, QR check-in and the BPoint rewards system.',
                    keywords: 'Zalo Mini App, Beauty Summit 2026, BEAUTYVERSE, Activate, gamification, QR check-in, BPoint'
                },
                cn: {
                    title: 'Beauty Summit 2026 小程序 —— BEAUTYVERSE | Activate',
                    description:
                        'Activate 为 Beauty Summit Vietnam 2026 设计并运营的 BEAUTYVERSE Zalo 小程序案例：游戏化、二维码签到与 BPoint 积分体系。',
                    keywords: 'Zalo 小程序, Beauty Summit 2026, BEAUTYVERSE, Activate, 游戏化, 二维码签到, BPoint'
                }
            }
        }
    }
};

/** Danh sách phẳng mọi route tĩnh - dùng cho prerender và sitemap. */
export const seoRoutes = [
    seoConfigs.home,
    seoConfigs.about,
    ...Object.values(seoConfigs.fields),
    seoConfigs.news,
    seoConfigs.contact,
    seoConfigs.privacy
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
