// src/i18n/translations/vi.js
// Tiếng Việt - ngôn ngữ gốc, đồng thời là bản dự phòng khi en/cn còn thiếu key.
import corporate from './corporate/vi.js';

export default {
    // Nội dung hồ sơ doanh nghiệp Activate - xem ./corporate/vi.js
    corporate,

    language: {
        label: 'Ngôn ngữ',
        switchTo: 'Chuyển sang {{language}}'
    },

    common: {
        learnMore: 'Xem thêm',
        consultNow: 'Tư vấn ngay',
        partnerNow: 'Hợp tác ngay',
        viewProjects: 'Xem dự án',
        hotline: 'Hotline',
        email: 'Email',
        website: 'Website',
        address: 'Địa chỉ',
        addressValue: 'Số 16, Ngõ 250 Trịnh Đình Cửu, Phường Định Công, TP Hà Nội, Việt Nam',
        taxId: 'Mã số thuế',
        legalName: 'Tên quốc tế',
        brandLabel: 'Thương hiệu',
        home: 'Trang chủ',
        customers: 'Khách hàng',
        trustedCustomers: 'Khách hàng tin tương'
    },

    nav: {
        about: 'Giới thiệu',
        services: 'Dịch vụ',
        ai: 'AI',
        projects: 'Dự án',
        news: 'Tin tức',
        cta: 'Hợp tác ngay',
        servicesMenu: {
            aiData: 'Automation - Data - Ai',
            aiDataShort: 'Automation - Ai',
            googleAds: 'Google Ads',
            facebookAds: 'Facebook Ads',
            tiktokAds: 'TikTok Ads',
            facebookCrm: 'Facebook Dataset & CRM',
            facebookCrmShort: 'Facebook CRM',
            tickXanh: 'Tick Xanh Facebook',
            tickXanhShort: 'Tick xanh FB',
            websiteLanding: 'Website & Landing Page',
            marketingOutsource: 'Thuê Phòng Marketing',
            marketingOutsourceShort: 'Thuê phòng Marketing'
        },
        projectsMenu: {
            all: 'Các dự án',
            portfolio: 'Hồ sơ năng lực',
            workflow: 'Automation workflow',
            workflowLong: 'Automation Workflow'
        }
    },

    footer: {
        tagline: 'Chuyển đổi số & Bán lẻ sản phẩm',
        about: 'Activate là thương hiệu của CIVI GLOBAL COMPANY LIMITED - doanh nghiệp kinh doanh giải pháp chuyển đổi số và bán lẻ sản phẩm.',
        servicesTitle: 'Dịch vụ của chúng tôi',
        services: {
            facebookAds: 'Dịch vụ Facebook Ads',
            googleAds: 'Dịch vụ Google Ads',
            tiktokAds: 'Dịch vụ Tiktok Ads',
            tickXanh: 'Dịch vụ Tick Xanh Facebook',
            marketingOutsource: 'Phòng Marketing thuê ngoài',
            websiteLanding: 'Xây dựng Website & Landing page',
            aiData: 'Automation - AI - Data',
            facebookCrm: 'Facebook Dataset & CRM'
        },
        policiesTitle: 'Chính sách & quy định chung',
        policies: {
            general: 'Chính sách & quy định chung',
            warranty: 'Chính sách bảo hành',
            privacy: 'Chính sách bảo mật thông tin',
            handover: 'Chính sách bàn giao ',
            payment: 'Quy định về thanh toán'
        },
        newsletterTitle: 'Đăng ký nhận thông tin',
        newsletterDescription:
            'Đăng ký để nhận thông tin mới nhất về dịch vụ và xu hướng công nghệ từ Activate.',
        newsletterPlaceholder: 'Nhập email của bạn',
        newsletterButton: 'Đăng ký',
        copyright: '© Bản quyền thuộc về & cung cấp bởi'
    },

    form: {
        name: 'Tên khách hàng *',
        namePlaceholder: 'Nhập tên của bạn',
        phone: 'Số điện thoại *',
        phonePlaceholder: 'Nhập số điện thoại',
        email: 'Email *',
        emailPlaceholder: 'example@gmail.com',
        businessField: 'Lĩnh vực kinh doanh *',
        businessFieldPlaceholder: 'Ví dụ: Thương mại điện tử, F&B...',
        brand: 'Tên thương hiệu',
        brandPlaceholder: 'Nhập tên thương hiệu (nếu có)',
        service: 'Dịch vụ cần tư vấn *',
        servicePlaceholder: 'Chọn dịch vụ bạn quan tâm',
        request: 'Yêu cầu tư vấn *',
        requestPlaceholder: 'Mô tả chi tiết yêu cầu tư vấn của bạn...',
        submit: 'Gửi thông tin',
        submitNow: 'Gửi thông tin ngay',
        submitting: 'Đang gửi...',
        success: 'Cảm ơn bạn! Chúng tôi sẽ liên hệ trong vòng 24h.',
        error: 'Có lỗi xảy ra, vui lòng thử lại sau.',
        serviceOptions: {
            aiData: 'Automation - Data - AI',
            googleAds: 'Google Ads',
            facebookAds: 'Facebook Ads',
            tiktokAds: 'TikTok Ads',
            facebookCrm: 'Facebook Dataset & CRM',
            tickXanh: 'Tick Xanh Facebook',
            websiteLanding: 'Website & Landing Page',
            contentAi: 'Hệ thống content AI',
            marketingOutsource: 'Thuê Phòng Marketing'
        }
    },

    // ================================================================
    // Khối dùng chung của các trang dịch vụ (lặp lại ở 7-9 file component)
    // ================================================================
    shared: {
        cta: {
            consultNow: 'Tư vấn ngay',
            partnerNow: 'Hợp tác ngay',
            getConsultation: 'Nhận tư vấn',
            contactForQuote: 'Liên hệ ngay để nhận tư vấn và báo giá.'
        },

        clients: {
            titleLine1: 'Khách hàng &',
            titleLine2: 'Đối tác chiến lược',
            subtitle:
                'Những người bạn đồng hành cùng Activate trên hành trình kiến tạo chuyển đổi số bền vững',
            paragraph1:
                'Trong suốt hành trình phát triển, Activate tự hào được đồng hành cùng hơn 100+ doanh nghiệp và tổ chức trong nhiều lĩnh vực khác nhau: từ làm đẹp, giáo dục, y tế, công nghệ đến dịch vụ công và sản xuất.',
            paragraph2:
                'Chúng tôi không chỉ triển khai các dự án công nghệ, mà còn đóng vai trò là đối tác tư vấn chiến lược – cùng khách hàng phân tích dữ liệu, thiết kế giải pháp và tối ưu hiệu quả kinh doanh theo từng giai đoạn.'
        },

        commitment: {
            title: 'Cam kết của chúng tôi',
            items: [
                {
                    title: 'Thiết kế tùy biến theo yêu cầu',
                    description: 'Cam kết tài khoản quảng cáo được thiết lập chuẩn cấu trúc Google'
                },
                {
                    title: 'Tối ưu tốc độ tải < 2 giây',
                    description:
                        'Cam kết tối ưu ngân sách liên tục dựa trên dữ liệu thực tế và hành vi truy cập'
                },
                {
                    title: 'Hỗ trợ kỹ thuật chuyên nghiệp',
                    description:
                        'Khách hàng được toàn quyền truy cập tài khoản quảng cáo và hệ thống báo cáo.'
                },
                {
                    title: 'Bàn giao đầy đủ quyền sở hữu',
                    description:
                        'Cam kết không phát sinh chi phí ngoài hợp đồng trừ khi có sự đồng ý bằng văn bản của khách hàng.'
                },
                {
                    title: 'Bảo mật thông tin tuyệt đối',
                    description:
                        'Mọi thông tin về tài khoản, dữ liệu chiến dịch và khách hàng được bảo mật tuyệt đối.'
                },
                {
                    title: 'Xử lý khiếu nại chuyên nghiệp',
                    description: 'Trong mọi tình huống khiếu nại, Activate cam kết:',
                    subCommitments: [
                        'Phản hồi trong vòng 24h làm việc',
                        'Có biên bản làm việc rõ ràng về trách nhiệm, giải pháp và phương án xử lý triệt để',
                        'Bồi thường bằng dịch vụ bổ sung hoặc hoàn tiền hợp lý nếu lỗi thuộc về đội ngũ vận hành'
                    ]
                }
            ]
        },

        offers: {
            title: 'Các ưu đãi đặc biệt',
            discountValue: 'Giảm {{value}}',
            totalCost: 'tổng chi phí',
            footer: 'Liên hệ ngay để được tư vấn gói ưu đãi phù hợp nhất',
            commitment: {
                title: 'Gói cam kết',
                subtitle: 'Cam kết thời gian sử dụng',
                durations: ['3 tháng', '6 tháng', '12 tháng'],
                bonus: 'Tặng bộ mẫu quảng cáo & landing chuyển đổi cao'
            },
            growth: {
                title: 'Gói tăng trưởng',
                subtitle: 'Dựa trên ngân sách đầu tư',
                budgetLabel: 'Ngân sách',
                cashbackLabel: 'Cashback',
                methodLabel: 'Hình thức',
                budgets: ['100tr/th', '200tr/th', '350tr/th'],
                method: 'Trừ vào tháng kế tiếp'
            },
            combo: {
                title: 'Gói combo đa kênh',
                subtitle: 'Kết hợp nhiều dịch vụ',
                countLabel: 'Số dịch vụ',
                discountLabel: 'Ưu đãi áp dụng',
                items: ['2 dịch vụ', '3 dịch vụ']
            }
        },

        whyChooseUs: {
            titleLine1: 'Vì sao bạn nên chọn',
            subtitle:
                'Activate là đơn vị uy tín với 3 năm kinh nghiệm – đồng hành cùng hàng trăm doanh nghiệp nâng tầm thương hiệu số',
            teamAlt: 'Đội ngũ chuyên gia Activate',
            badges: {
                enthusiastic: 'Nhiệt tình',
                young: 'Trẻ trung',
                experienced: 'Giàu kinh nghiệm'
            },
            experienceTitle: 'Kinh nghiệm 3+ năm',
            supportTitle: 'Hỗ trợ 24/7',
            trustedBy: 'Được tin tưởng bởi',
            industries: 'Doanh nghiệp từ các lĩnh vực'
        },

        packages: {
            title: 'Các gói dịch vụ',
            popular: 'Phổ Biến'
        },

        // Dải CTA đặt lịch Growth Call ở cuối các trang dịch vụ
        bookingCta: {
            title: 'Sẵn sàng tìm đúng điểm nghẽn tăng trưởng?',
            description:
                'Đặt buổi Growth Call 30 phút 1-1 — miễn phí, cọc giữ chỗ hoàn 100% bất kỳ lúc nào.',
            button: 'Đặt lịch tư vấn ngay'
        }
    },

    popup: {
        title: 'Nhận tư vấn miễn phí',
        subtitle: 'Chuyên gia sẽ liên hệ trong vòng 24h'
    },

    consultation: {
        title: 'Nhận tư vấn',
        description:
            'Activate chân thành cảm ơn bạn đã dành thời gian điền bảng khảo sát này. Đội ngũ của chúng tôi sẽ xem xét kỹ thông tin và liên hệ trong vòng 24h làm việc để tư vấn giải pháp phù hợp nhất.'
    },

    contact: {
        title: 'Nhận tư vấn ngay',
        description:
            'Activate chân thành cảm ơn bạn đã dành thời gian liên hệ với chúng tôi. Đội ngũ của chúng tôi sẽ xem xét kỹ thông tin và liên hệ trong vòng 24h làm việc để tư vấn giải pháp phù hợp nhất.'
    },

    home: {
        hero: {
            badge: 'Chuyển đổi số & Bán lẻ',
            description:
                'Activate đồng hành cùng doanh nghiệp chuyển đổi số toàn diện - từ website, quảng cáo, CRM đến AI & tự động hoá - đồng thời cung cấp sản phẩm bán lẻ chất lượng, chính hãng.',
            cta: 'Xem dự án'
        },
        about: {
            badge: 'About Nexgency',
            titleLine1: 'Tiên Phong',
            titleLine2: 'Chuyển Đổi Số',
            description:
                'Activate là đối tác chiến lược của bạn trong kỷ nguyên số. Chúng tôi cung cấp giải pháp chuyển đổi số, giúp doanh nghiệp bạn tăng tốc phát triển.',
            cta: 'Xem thêm'
        },
        services: {
            badge: 'Services',
            title: 'Dịch vụ từ Activate',
            descriptionLabel: 'Mô tả',
            technologiesLabel: 'Công nghệ sử dụng',
            durationLabel: 'Ngày hoàn thành',
            noteLabel: 'Lưu ý',
            cta: 'Xem thêm',
            items: {
                aiData: {
                    name: 'Automation - Ai - Data',
                    title: 'Automation - AI - Data',
                    description:
                        'Muốn nhân bản năng suất, giảm thủ công, tăng trải nghiệm? Câu trả lời nằm ở Automation và AI. Activate giúp doanh nghiệp chuyển mình thông minh hóa quy trình.',
                    duration: '14 - 30 ngày',
                    note: 'Tối ưu quy trình vận hành, tự động hóa tác vụ và khai thác dữ liệu hiệu quả'
                },
                googleAds: {
                    name: 'Google Ads',
                    title: 'Google Ads',
                    description:
                        'Activate triển khai Google Ads với đa dạng chiến dịch để đưa doanh nghiệp lên top 1 trong tâm trí người dùng khi nhắc tới lĩnh vực của bạn.',
                    duration: '3 - 7 ngày',
                    note: 'Thiết lập chiến dịch, đo lường chuyển đổi và tối ưu ngân sách quảng cáo'
                },
                facebookAds: {
                    name: 'Facebook Ads',
                    title: 'Facebook Ads',
                    description:
                        'Dịch vụ Facebook Ads từ Activate chính là cánh tay phải đắc lực giúp doanh nghiệp "khai thác mỏ vàng" từ vùng đất Facebook đầy cơ hội.',
                    duration: '3 - 7 ngày',
                    note: 'Xây dựng tệp khách hàng, triển khai quảng cáo và tối ưu hiệu quả chuyển đổi'
                },
                websiteLanding: {
                    name: 'Website & Landing Page',
                    title: 'Website & Landing Page',
                    description:
                        'Website & Landing Page không chỉ là nơi khách hàng "ghé chơi", mà là đích đến giúp họ ở lại – chuyển đổi – và quay lại. Activate thiết kế nền tảng số hiện đại với giải pháp trọn gói.',
                    duration: '7 - 21 ngày',
                    note: 'Thiết kế giao diện hiện đại, tối ưu tốc độ tải trang và tăng tỷ lệ chuyển đổi'
                },
                tiktokAds: {
                    name: 'TikTok Ads',
                    title: 'TikTok Ads',
                    description:
                        'Virus tuy nhỏ nhưng một khi đã lây lan thì sẽ tạo nên hiệu ứng khổng lồ, cũng như cách quảng cáo của anh chị viral trên nền tảng Tiktok để mang về doanh thu và độ nhận diện phủ khắp.',
                    duration: '3 - 7 ngày',
                    note: 'Triển khai quảng cáo TikTok, kiểm thử nội dung và tối ưu chi phí chuyển đổi'
                },
                facebookCrm: {
                    name: 'Facebook Dataset & CRM',
                    title: 'Facebook Dataset & CRM',
                    description:
                        'Trong thời đại dữ liệu là "mỏ kim cương", Activate giúp doanh nghiệp biến từng hành vi, từng tương tác thành đòn bẩy quảng cáo hiệu quả qua dịch vụ Facebook Dataset & CRM.',
                    duration: '7 - 14 ngày',
                    note: 'Kết nối dữ liệu khách hàng, đồng bộ CRM và tối ưu khả năng đo lường quảng cáo'
                },
                marketingOutsource: {
                    name: 'Thuê Phòng Marketing',
                    title: 'Phòng Marketing Thuê Ngoài',
                    description:
                        'Đem chất xám từ đội ngũ của chúng tôi để rót vào những dự án đầy tiềm năng của các doanh nghiệp chính là phương châm cống hiến của Activate khi cung cấp dịch vụ Phòng Marketing thuê ngoài.',
                    duration: 'Theo tháng',
                    note: 'Đồng hành như một đội ngũ marketing nội bộ, từ chiến lược đến triển khai thực tế'
                },
                tickXanh: {
                    name: 'Tick Xanh Facebook',
                    title: 'Tick Xanh Facebook',
                    description:
                        'Activate cung cấp dịch vụ đăng ký tích xanh Facebook trọn gói từ A–Z, giúp khách hàng rút ngắn thời gian xét duyệt, chuẩn hóa hồ sơ và tăng tỷ lệ được phê duyệt thực tế.',
                    duration: '7 - 30 ngày',
                    note: 'Tư vấn hồ sơ, chuẩn hóa thông tin và hỗ trợ quy trình xác minh Facebook'
                }
            }
        },
        projectsShowcase: {
            badge: 'Projects',
            title: 'Dự án nổi bật của Activate',
            description: 'Khám phá những website, nền tảng và giải pháp số chúng tôi đã cùng khách hàng kiến tạo.',
            viewAll: 'Xem tất cả dự án',
            hint: 'Di chuột để khám phá · Nhấn vào dự án để xem trước',
            wallLabel: 'Thư viện dự án chuyển động của Activate',
            preview: 'Xem trước dự án',
            close: 'Đóng cửa sổ xem trước',
            noImage: 'Chưa có hình ảnh dự án',
            previousImage: 'Ảnh trước',
            nextImage: 'Ảnh tiếp theo',
            image: 'Ảnh',
            date: 'Thời gian',
            partner: 'Đối tác',
            category: 'Hạng mục',
            technologies: 'Công nghệ & giải pháp',
            viewDetail: 'Xem chi tiết',
            viewProject: 'Xem dự án'
        },
        testimonials: {
            badge: 'Testimonials',
            title: 'đối tác nói gì về chúng tôi',
            description:
                'Chúng tôi tự hào về những phản hồi tích cực từ khách hàng, là động lực để Activate không ngừng phát triển.',
            items: [
                'Activate đã mang đến cho chúng tôi một giải pháp tuyệt vời. Đội ngũ chuyên nghiệp, sáng tạo và luôn hỗ trợ nhiệt tình.',
                'Activate đã mang đến cho chúng tôi những giải pháp công nghệ mới mẻ, hiệu quả và phù hợp với nhu cầu phát triển.',
                'Activate đã giúp chúng tôi tối ưu hoạt động kinh doanh bằng sự chuyên nghiệp, tận tâm và tư duy sáng tạo.',
                'Activate luôn mang đến những ý tưởng sáng tạo, thực tế và hiệu quả cho các dự án truyền thông của chúng tôi.',
                'Activate thấu hiểu nhu cầu thương hiệu và mang đến cho chúng tôi những giải pháp phù hợp, chỉn chu và hiệu quả.',
                'Activate đã đồng hành cùng chúng tôi bằng sự chuyên nghiệp, sáng tạo và tinh thần hỗ trợ rất tận tâm.',
                'Chúng tôi đã hợp tác cùng Activate qua nhiều dự án và luôn hài lòng với sự chuyên nghiệp, hiệu quả của đội ngũ.',
                'Activate hỗ trợ rất tận tình, phản hồi nhanh và luôn đồng hành sát sao trong suốt quá trình triển khai.'
            ]
        },
        clients: {
            titleLine1: 'Khách hàng &',
            titleLine2: 'Đối tác chiến lược',
            description:
                'Những doanh nghiệp, thương hiệu và tổ chức đã tin tưởng hợp tác cùng Activate.',
            summary:
                'Activate tự hào đồng hành cùng hơn 100+ doanh nghiệp và tổ chức trong nhiều lĩnh vực: làm đẹp, giáo dục, y tế, công nghệ, dịch vụ công và sản xuất.',
            partnersLabel: 'Đối tác chiến lược'
        }
    },

    about: {
        hero: {
            badge: 'About Nexgency',
            titleLine1: 'Đối tác',
            titleLine2: 'chuyển đổi số đa năng',
            description:
                'Activate là đối tác chiến lược của bạn trong kỷ nguyên số. Chúng tôi cung cấp giải pháp chuyển đổi số, giúp doanh nghiệp bạn tăng tốc phát triển.',
            cta: 'Tư vấn ngay',
            cards: {
                innovation: {
                    subtitle: 'Nhiệt tình',
                    description: 'Pioneering solutions that transform businesses'
                },
                strategy: {
                    subtitle: 'Trẻ Trung',
                    description: 'Data-driven approaches for measurable outcomes'
                },
                partnership: {
                    subtitle: 'Kinh nghiệm',
                    description: 'Building lasting relationships through trust'
                }
            }
        },
        story: {
            badge: 'About Activate',
            titleLine1: 'Câu chuyện',
            titleLine2: 'Của chúng tôi',
            subtitle: 'Công nghệ – Bước ngoặt cho sự bứt phá',
            paragraph1:
                'Activate được thành lập vào năm 2025, sau khi founder chính đã có hơn 5 năm kinh nghiệm kinh doanh trong lĩnh vực thương mại điện tử. Trong hành trình đó, founder nhận ra: công nghệ chính là chìa khóa thay đổi toàn bộ mô hình kinh doanh – từ quản lý vận hành, marketing cho đến tối ưu lợi nhuận.',
            paragraph2:
                'Nhờ ứng dụng công nghệ đúng cách, doanh nghiệp của founder đã bứt phá mạnh mẽ, vượt qua giới hạn cũ và mở ra con đường tăng trưởng mới. Thành công ấy trở thành minh chứng sống động rằng công nghệ không chỉ hỗ trợ, mà còn tái định hình tương lai doanh nghiệp. Từ nền tảng thực tiễn này, đội ngũ core team đã cùng nhau thành lập Activate, với sứ mệnh đồng hành và mang giải pháp công nghệ đã được kiểm chứng đến nhiều doanh nghiệp khác, giúp họ không chỉ giải quyết vấn đề hiện tại mà còn kiến tạo lợi thế cạnh tranh dài hạn.'
        }
    },

    projectSlider: {
        ecommerce: 'Wesite E-commerce',
        elearning: 'Website E-learning',
        corporate: 'Wesite giới thiệu doanh nghiệp',
        event: 'Wesite sự kiện',
        payment: 'Hệ thống Thanh toán & Check-in Sự kiện',
        crm: 'CRM Dashboard',
        invitation: 'Web tạo thiệp mời',
        branding: 'Thiết kế bộ nhận diện thương hiệu',
        dataset: 'Dataset Ads Funnel'
    },

    // ================================================================
    // Nội dung riêng của từng trang dịch vụ
    // ================================================================
    servicePages: {
        googleAds: {
            hero: {
                title: 'Dịch vụ google ads',
                description:
                    'Activate triển khai Google Ads với đa dạng chiến dịch để đưa doanh nghiệp lên top 1 trong tâm trí người dùng khi nhắc tới lĩnh vực của bạn.'
            },
            divider: [
                'Triển khai Google Search Ads, Display, YouTube và Performance Max.',
                'Tracking theo từ khóa – chiến dịch – nguồn đơn.',
                'Tối ưu chuyển đổi theo landing page và hành vi người dùng.'
            ],
            painPoints: {
                title: 'Nỗi đau của doanh nghiệp',
                items: [
                    {
                        title: 'Landing page không tối ưu',
                        description:
                            'Quảng cáo hiện top nhưng vẫn không ra đơn vì landing page không được tối ưu cho chuyển đổi.',
                        impact: 'Tiền ads bị đốt cháy vô ích'
                    },
                    {
                        title: 'Không biết từ khóa hiệu quả',
                        description:
                            'Mỗi ngày tiêu tiền trên Google nhưng không biết từ khóa nào thực sự hiệu quả.',
                        impact: 'Ngân sách marketing lãng phí'
                    },
                    {
                        title: 'Thiếu hệ thống tracking',
                        description:
                            'Không có hệ thống tracking hành vi rõ ràng – không đo được hiệu suất theo từng chiến dịch.',
                        impact: 'Không tối ưu marketing'
                    },
                    {
                        title: 'Quảng cáo không thu hút',
                        description:
                            'Mẫu quảng cáo nhàm chán, không thu hút – tệp khách tiềm năng bị đối thủ cướp mất.',
                        impact: 'Mất khách hàng'
                    }
                ]
            },
            why: {
                intro: 'Chiến lược quảng cáo Google đa kênh, nắm rõ hành trình khách hàng trong chiến dịch',
                experienceDescription:
                    'Tối ưu theo từ khóa – hành vi – nguồn đơn, không chỉ dừng ở lượt hiển thị',
                highlightTitle: 'Tối ưu landing page',
                highlightDescription:
                    'Tối ưu landing page – cá nhân hóa trải nghiệm người dùng (UX/UI).',
                supportDescription:
                    'Đồng hành toàn diện – báo cáo rõ ràng – điều chỉnh chiến dịch theo mục tiêu kinh doanh.'
            },
            packages: {
                subtitle: 'Quản trị tài khoản/ Trọn gói vận hành/ Thuê tài khoản',
                basic: {
                    title: 'Quản trị tài khoản',
                    features: [
                        'Setup tài khoản chuẩn theo cấu trúc Google đề xuất',
                        'Cài đặt và theo dõi chuyển đổi',
                        'Cài đặt và theo dõi các chỉ số đã cam kết (CPC, CTR, Conversion...)',
                        'Đề xuất phương án tối ưu định kỳ (theo tuần hoặc theo tháng)',
                        'Hệ thống báo cáo hiệu suất theo chu kỳ',
                        'Activate hỗ trợ review tài khoản định kỳ',
                        'Được hỗ trợ tư vấn riêng nếu cần mở rộng thêm chiến dịch'
                    ]
                },
                standard: {
                    title: 'Trọn gói vận hành',
                    features: [
                        'Setup tài khoản chuẩn từ đầu hoặc cải tiến tài khoản cũ',
                        'Cài đặt và theo dõi chuyển đổi (Google Ads Conversion, GA4, GTM…)',
                        'Theo dõi và tối ưu các chỉ số đã cam kết (Click, CPC, ROAS, v.v.)',
                        'Đề xuất và triển khai chiến dịch phù hợp từng ngành nghề',
                        'Báo cáo định kỳ (tuần/tháng), giải trình hiệu quả, khuyến nghị mở rộng',
                        'Hệ thống báo cáo tự động hóa qua Data Studio hoặc Google Sheet',
                        'Hỗ trợ xây dựng landing page, nội dung, tư vấn funnel chuyển đổi',
                        'Được support riêng từ Google thông qua hệ thống của Activate'
                    ]
                },
                advanced: {
                    title: 'Thuê tài khoản',
                    features: [
                        'Cung cấp tài khoản Google Ads Invoice',
                        'Activate tạo tài khoản và gửi lại cho khách hàng sử dụng',
                        'Hướng dẫn kết nối tài sản, phân quyền tài khoản',
                        'Được hỗ trợ riêng từ Google thông qua hệ thống Activate',
                        'Theo dõi thanh toán, hỗ trợ bảo vệ tài khoản, xử lý sự cố',
                        'Hỗ trợ kết nối với MCC hoặc các nền tảng kỹ thuật liên quan'
                    ]
                }
            },
            process: {
                title: 'Quy trình triển khai',
                subtitle:
                    '6 bước chuyên nghiệp để tối ưu hiệu quả quảng cáo và đạt được mục tiêu kinh doanh',
                steps: [
                    {
                        title: 'Tiếp nhận & Tư vấn mục tiêu',
                        items: [
                            'Thu thập thông tin ngành hàng, sản phẩm, đối tượng',
                            'Xác định ngân sách và KPI kỳ vọng'
                        ]
                    },
                    {
                        title: 'Phân tích & Đề xuất chiến lược',
                        items: [
                            'Nghiên cứu thị trường và đối thủ',
                            'Đề xuất loại hình Google Ads phù hợp',
                            'Xây dựng phễu từ Search - Display - Remarketing'
                        ]
                    },
                    {
                        title: 'Thiết lập hệ thống quảng cáo',
                        items: [
                            'Tạo/cấu trúc lại tài khoản Google Ads',
                            'Cài đặt chuyển đổi, GA4, GTM',
                            'Chuẩn bị nội dung, banner, landing page'
                        ]
                    },
                    {
                        title: 'Triển khai & Theo dõi chiến dịch',
                        items: [
                            'Khởi chạy chiến dịch theo giai đoạn',
                            'Theo dõi chỉ số(CPC, CTR, Conversion...)',
                            'Tối ưu ngân sách và tệp quảng cáo'
                        ]
                    },
                    {
                        title: 'Báo cáo & Tối ưu hiệu suất',
                        items: [
                            'Báo cáo tuần/tháng minh bạch',
                            'Đánh giá hiệu quả theo KPI',
                            'Điều chỉnh theo hành vi người dùng'
                        ]
                    },
                    {
                        title: 'Đánh giá và gia hạn hợp tác',
                        items: [
                            'Họp tổng kết hiệu quả',
                            'Đề xuất nâng cấp hoặc mở rộng ngân sách',
                            'Ký lại hợp đồng nếu tiếp tục triển khai'
                        ]
                    }
                ]
            },
            adFormats: {
                title: '9 Hình thức quảng cáo',
                subtitle:
                    'Mỗi gói sẽ được triển khai 9 hình thức quảng cáo của Google theo yêu cầu từ doanh nghiệp',
                items: [
                    'Quảng cáo tìm kiếm',
                    'Quảng cáo hiển thị',
                    'Quảng cáo video',
                    'Quảng cáo Performance Max',
                    'Quảng cáo địa phương',
                    'Quảng cáo Shopping',
                    'Quảng cáo Discovery',
                    'Quảng cáo Smart',
                    'Quảng cáo App'
                ]
            }
        },

        facebookAds: {
            hero: {
                titleLine1: 'DỊCH VỤ',
                brand: 'Facebook Ads',
                descriptionPrefix: 'Dịch vụ ',
                descriptionSuffix:
                    ' từ Activate chính là cánh tay phải đắc lực giúp doanh nghiệp "khai thác mỏ vàng" từ vùng đất tiềm ẩn đầy cơ hội trên nền tảng lâu đời này bằng giải pháp:',
                bullets: [
                    'Cho thuê tài khoản quảng cáo.',
                    'Xây dựng chiến dịch chuyển đổi, remarketing và thu phễu đa tầng (TOFU – MOFU – BOFU).',
                    'Tối ưu theo sự kiện CAPI (Facebook Conversion API).',
                    'Tracking chuẩn từ phễu đầu đến đơn hàng, hỗ trợ tích hợp với website và chatbot.'
                ]
            },
            divider: [
                'Cho thuê tài khoản quảng cáo',
                'Xây dựng chiến dịch chuyển đổi, remarketing và thu phễu đa tầng (TOFU – MOFU – BOFU)',
                'Tối ưu theo sự kiện CAPI (Facebook Conversion API)',
                'Tracking chuẩn từ phễu đầu đến đơn hàng, hỗ trợ tích hợp với website và chatbot'
            ],
            painPoints: {
                title: 'Nỗi đau của doanh nghiệp',
                items: [
                    {
                        title: 'Tài khoản ads bị hạn chế',
                        description:
                            'Tài khoản quảng cáo liên tục bị hạn chế, khiến chiến dịch đứt gãy và không thể scale.',
                        impact: 'Chiến dịch đứt gãy'
                    },
                    {
                        title: 'Tích hợp hệ thống kém',
                        description:
                            'Không thể tích hợp hệ thống quảng cáo với chatbot, website hay CRM để khai thác dữ liệu hiệu quả.',
                        impact: 'Ads bị đốt cháy'
                    },
                    {
                        title: 'Thiếu hệ thống tracking',
                        description:
                            'Chi tiền đều đặn nhưng không biết đơn hàng đến từ đâu – thiếu tracking và báo cáo rõ ràng',
                        impact: 'Không đo lường ROI'
                    },
                    {
                        title: 'Phễu bán hàng thiếu bài bản',
                        description:
                            'Khó khăn trong việc xây dựng phễu TOFU – MOFU – BOFU bài bản để tạo chuyển đổi bền vững',
                        impact: 'Conversion thấp'
                    }
                ]
            },
            why: {
                intro: 'Cung cấp tài khoản quảng cáo chính thống, ổn định cao',
                experienceDescription:
                    'Đội ngũ có kinh nghiệm thực chiến đa ngành, bao gồm cả các ngành đặc thù khó quảng cáo',
                highlightTitle: 'Dịch vụ toàn diện',
                highlightDescription:
                    'Từ thiết lập đến vận hành: xây dựng & chăm sóc fanpage, cài chatbot, tích hợp AI,....',
                supportDescription:
                    'Báo cáo rõ ràng, đo lường hiệu quả từng giai đoạn phễu – hỗ trợ liên tục như một phòng marketing nội bộ'
            },
            packages: {
                title: 'Gói dịch vụ Facebook Ads',
                subtitle: '2 gói chính: Chạy quảng cáo chuyển đổi/ Cho thuê tài khoản Invoice',
                basicTitle: 'Gói 1: Chạy quảng cáo chuyển đổi:',
                advancedTitle: 'Gói 2: Cho thuê tài khoản quảng cáo (Invoice)',
                basic: [
                    {
                        subtitle: '1. Tư vấn chiến lược & xây dựng phễu quảng cáo',
                        features: [
                            'Phân tích ngành hàng, hành vi khách hàng và mục tiêu kinh doanh.',
                            'Xây dựng phễu quảng cáo đa tầng: TOFU – MOFU – BOFU.',
                            'Lên roadmap ngân sách, mục tiêu KPI theo giai đoạn.'
                        ]
                    },
                    {
                        subtitle: '2. Thiết lập chiến dịch quảng cáo',
                        features: [
                            'Setup tài khoản quảng cáo (nếu chưa có).',
                            'Cài đặt pixel và Facebook Conversion API (CAPI).',
                            'Thiết lập và phân loại tệp đối tượng (custom audience, lookalike...).',
                            'Tạo và triển khai chiến dịch quảng cáo (tối ưu chuyển đổi, tin nhắn, remarketing...).'
                        ]
                    },
                    {
                        subtitle: '3. Thiết kế nội dung quảng cáo',
                        features: [
                            'Viết nội dung (caption, call-to-action) phù hợp với hành trình khách hàng.',
                            'Thiết kế hình ảnh tĩnh hoặc video ngắn (nếu có yêu cầu).',
                            'Test A/B nhiều phiên bản mẫu quảng cáo.'
                        ]
                    },
                    {
                        subtitle: '4. Tracking – đo lường – tối ưu hóa',
                        features: [
                            'Theo dõi hiệu quả theo từng nhóm chiến dịch: CPM, CPC, CTR, ROAS, CPA.',
                            'Báo cáo chi tiết nguồn đơn, tệp chuyển đổi tốt nhất.',
                            'Tối ưu ngân sách theo thời gian thực, loại trừ đối tượng không hiệu quả.'
                        ]
                    },
                    {
                        subtitle: '5. Tích hợp và hỗ trợ liên nền tảng',
                        features: [
                            'Kết nối với website, chatbot, CRM (nếu có).',
                            'Tư vấn và hỗ trợ xây dựng fanpage, landing page phục vụ quảng cáo.'
                        ]
                    },
                    {
                        subtitle: '6. Báo cáo & đồng hành',
                        features: [
                            'Báo cáo định kỳ: theo ngày, tuần, hoặc theo yêu cầu.',
                            'Đánh giá và điều chỉnh mục tiêu KPI theo từng giai đoạn.'
                        ]
                    }
                ],
                advanced: [
                    {
                        subtitle: '1. Cung cấp tài khoản quảng cáo Invoice',
                        features: [
                            'Tài khoản BM lớn, độ uy tín cao, được cấp trực tiếp từ Facebook.',
                            'Khả năng chi tiêu lớn, ổn định, ít bị khóa hoặc hạn chế.',
                            'Có thể chạy các ngành đặc thù hoặc khó lên quảng cáo.'
                        ]
                    },
                    {
                        subtitle: '2. Hỗ trợ khởi tạo và kết nối tài sản',
                        features: [
                            'THỗ trợ kết nối page, pixel, domain xác minh, BM con...',
                            'Cấp quyền phù hợp cho đội ngũ chạy quảng cáo của khách hàng.'
                        ]
                    },
                    {
                        subtitle: '3. Quy trình nạp tiền và quản lý tài chính',
                        features: [
                            'Nạp tiền linh hoạt qua chuyển khoản.',
                            'Xác nhận số dư nhanh chóng, đảm bảo không gián đoạn chiến dịch.',
                            'Cung cấp báo cáo chi tiêu định kỳ theo yêu cầu.'
                        ]
                    },
                    {
                        subtitle: '4. Hỗ trợ vận hành và xử lý sự cố',
                        features: [
                            'Hỗ trợ xử lý khi quảng cáo không được duyệt, tài khoản bị hạn chế.',
                            'Hướng dẫn kỹ thuật sử dụng tài khoản, đảm bảo chạy đúng quy trình Facebook.',
                            'Hỗ trợ kỹ thuật cơ bản nếu khách hàng có đội chạy riêng.'
                        ]
                    },
                    {
                        subtitle: '5. Ưu đãi cho khách hàng lớn',
                        features: [
                            'Chính sách chiết khấu theo mức ngân sách tháng.',
                            'Hỗ trợ tài khoản riêng biệt nếu chi tiêu lớn (>500 triệu/tháng).'
                        ]
                    }
                ]
            },
            process: {
                title: 'Quy trình triển khai',
                subtitle:
                    '6 bước chuyên nghiệp để tối ưu hiệu quả quảng cáo và đạt được mục tiêu kinh doanh',
                steps: [
                    {
                        title: 'Tiếp nhận & Phần tích',
                        items: [
                            'Tiếp nhận yêu cầu từ khách hàng',
                            'Phân tích ngành hàng & mục tiêu',
                            'Đề xuất chiến lược phễu TOFU - MOFU - BOFU'
                        ]
                    },
                    {
                        title: 'Thiết lập & Chuẩn bị',
                        items: [
                            'Thiết lập tài khoản quảng cáo',
                            'Cài đặt Pixel & CAPI',
                            'Chuẩn bị nội dung & hình ảnh',
                            'Cấu trúc chiến dịch và nhóm quảng cáo'
                        ]
                    },
                    {
                        title: 'Vận hành và tối ưu',
                        items: [
                            'Chạy quảng cáo & theo dõi',
                            'Tối ưu ngân sách và tệp đối tượng',
                            'Báo cáo định kỳ & cảnh báo'
                        ]
                    },
                    {
                        title: 'Triển khai & Theo dõi chiến dịch',
                        items: [
                            'Họp đánh giá hiệu suất',
                            'Điều chỉnh chiến lược',
                            'Gia hạn hợp đồng hoặc mở rộng ngân sách'
                        ]
                    }
                ]
            }
        },

        tiktokAds: {
            hero: {
                descriptionPrefix:
                    'Virus tuy nhỏ nhưng một khi đã lây lan thì sẽ tạo nên hiệu ứng khổng lồ, cũng như cách quảng cáo của anh chị viral trên ',
                brand: 'nền tảng Tiktok',
                descriptionSuffix:
                    ' để mang về doanh thu và độ nhận diện phủ khắp. Giải pháp từ dịch vụ Tiktok Ads của Activate:',
                bullets: [
                    'Tối ưu quảng cáo viral ngắn hạn cho ngành hàng tiêu dùng, thời trang, làm đẹp.',
                    'Thiết kế nội dung video + tracking pixel chuẩn TikTok.',
                    'Retargeting khách đã xem video, đã tương tác.'
                ]
            },
            divider: [
                'Tối ưu quảng cáo viral ngắn hạn cho ngành hàng tiêu dùng, thời trang, làm đẹp.',
                'Thiết kế nội dung video + tracking pixel chuẩn TikTok.',
                'Retargeting khách đã xem video, đã tương tác.'
            ],
            painPoints: {
                title: 'Nỗi đau của doanh nghiệp',
                items: [
                    {
                        title: 'Video content kém chất lượng',
                        description:
                            'Không theo kịp trend TikTok, đội in-house thiếu kinh nghiệm làm video hấp dẫn.',
                        impact: 'Ads burn tiền vô ích'
                    },
                    {
                        title: 'Content không chuyển đổi',
                        description:
                            'Đã đầu tư vào quảng cáo nhưng nội dung không đủ chạm – view có, tương tác có nhưng không chuyển đổi.',
                        impact: 'ROI thấp, lãng phí budget'
                    },
                    {
                        title: 'Mất khách đã quan tâm',
                        description:
                            'Thiếu hệ thống retargeting khách đã xem, đã tương tác – bỏ lỡ hàng ngàn cơ hội mua lại.',
                        impact: 'Bỏ lỡ cơ hội bán hàng'
                    },
                    {
                        title: 'TikTok Pixel chưa chuẩn',
                        description:
                            'Không cài được TikTok Pixel chuẩn – không tối ưu hóa được tệp người dùng tiềm năng.',
                        impact: 'Targeting không chính xác'
                    }
                ]
            },
            why: {
                intro: 'Thiết kế một hệ sinh thái TikTok toàn diện giúp doanh nghiệp tăng trưởng thực tế',
                experienceDescription:
                    'Gia tăng doanh số cho cửa hàng bán lẻ bằng quảng cáo định vị – chuyển đổi nhanh',
                highlightTitle: 'Xây dựng thương hiệu',
                highlightDescription:
                    'Xây dựng thương hiệu doanh nghiệp & nhãn hàng trên nền tảng video ngắn',
                supportDescription: 'Theo sát số liệu – tối ưu chiến dịch – cam kết chuyển đổi'
            },
            adFormats: {
                title: 'Định dạng quảng cáo Tiktok',
                subtitle:
                    'Activate hỗ trợ triển khai đầy đủ các hình thức quảng cáo Tiktok, tối ưu cho từng mục tiêu kinh doanh của bạn',
                items: [
                    {
                        title: 'Branding',
                        description: 'Quảng cáo tăng nhận diện thương hiệu xuất hiện đầu app hoặc trong luồng'
                    },
                    {
                        title: 'Lead & Chuyển đổi',
                        description: 'Quảng cáo thu data, kéo về web hoặc landing page'
                    },
                    {
                        title: 'TikTok Shop',
                        description: 'Quảng cáo video bán hàng, tăng view, click, chốt đơn'
                    },
                    {
                        title: 'Livestream',
                        description: 'Đẩy người xem về livestream, tăng tương tác thực'
                    },
                    {
                        title: 'Engagement & Personal Brand',
                        description: 'Tăng lượt theo dõi, view kênh, phù hợp với creator, chuyên gia, KOLs'
                    },
                    {
                        title: 'App & Sản phẩm số',
                        description: 'Quảng cáo cài app, tăng người dùng thử nghiệm sản phẩm'
                    }
                ]
            },
            packages: {
                subtitle:
                    'Chạy ads chuyển đổi Website và Landing page/ Chạy ads Tiktok Shop/ Chạy ads Livestream Tiktok',
                basic: {
                    title: 'Gói quảng cáo chuyển đổi Website/ Landing page',
                    features: [
                        'Phân tích sản phẩm, ngành hàng và mục tiêu kinh doanh',
                        'Lựa chọn định dạng TikTok Ads phù hợp (Traffic, Lead Form, Conversion)',
                        'Thiết lập tài khoản & tracking',
                        'Lên cấu trúc chiến dịch theo mô hình phễu',
                        'Cài đặt nhóm quảng cáo, đối tượng, ngân sách, lịch trình',
                        'Lựa chọn content có sẵn hoặc đề xuất nội dung mới',
                        'Theo dõi chỉ số & tối ưu hiệu suất',
                        'Báo cáo và đề xuất phương án cải tiến chiến dịch'
                    ]
                },
                standard: {
                    title: 'Gói quảng cáo Tiktok (Chuyển đổi video)',
                    features: [
                        'Rà soát ngành hàng, danh mục sản phẩm nổi bật',
                        'Xác định thời gian vàng và hành vi mua hàng của khách trên TikTok',
                        'Kết nối TikTok Shop với hệ thống quảng cáo',
                        'Gắn liên kết sản phẩm trong video/ads',
                        'Lên chiến dịch Add to Cart / Product View / Shop Follow',
                        'Tối ưu hóa tuyến nội dung kênh',
                        'Theo dõi chỉ số & tối ưu hiệu suất',
                        'Báo cáo và đề xuất phương án cải tiến chiến dịch'
                    ]
                },
                advanced: {
                    title: 'Gói quảng cáo Livestream Tiktok',
                    features: [
                        'Đăng ký chiến dịch quảng cáo dạng Live với TikTok',
                        'Đảm bảo duyệt nội dung, tránh vi phạm chính sách',
                        'Tư vấn kịch bản livestream thu hút (minigame, giới thiệu sản phẩm, feedback...)',
                        'Tối ưu không gian, lời thoại, call-to-action',
                        'Thiết lập quảng cáo dẫn về livestream theo thời gian thực',
                        'Target tệp khách theo độ tuổi, hành vi, ngành hàng',
                        'Cập nhật real-time số lượt xem, thời gian xem trung bình',
                        'Điều chỉnh nhóm quảng cáo hoặc content giữa phiên (nếu cần)',
                        'Tổng kết hiệu quả sau phiên livestream'
                    ]
                }
            }
        },

        websiteLanding: {
            hero: {
                title: 'Xây dựng'
            },
            divider: [
                'Thiết kế web theo UI/UX hiện đại, đa nền tảng (PC – Mobile – Tablet).',
                'Tích hợp pixel, chatbot, CRM, thanh toán hoặc automation theo yêu cầu.',
                'Hosting và bảo trì đi kèm dịch vụ trọn gói.'
            ],
            carousel: {
                brand: 'Website & Landing Page',
                description:
                    ' không chỉ là nơi khách hàng "ghé chơi", mà là đích đến giúp họ ở lại – chuyển đổi – và quay lại. Activate thiết kế nền tảng số hiện đại với giải pháp trọn gói.',
                projectFallback: 'dự án',
                viewDetail: 'Xem chi tiết {{name}}'
            },
            portfolio: {
                title: 'Dự án của Activate'
            },
            video: {
                badge: 'Khám phá quy trình',
                title: 'Từ ý tưởng đến sản phẩm hoàn thiện',
                description:
                    'Xem cách đội ngũ Activate biến những ý tưởng thành những website xuất sắc. Từ nghiên cứu, thiết kế cho đến triển khai - mỗi bước đều được thực hiện với sự tỉ mỉ và chuyên nghiệp.'
            },
            painPoints: {
                title: 'Nỗi đau của doanh nghiệp',
                items: [
                    {
                        title: 'Tải chậm, trải nghiệm tệ',
                        description:
                            'Website nhìn đẹp mắt, nhưng load chậm – không tối ưu trải nghiệm người dùng (UX/UI).',
                        impact: 'Khách hàng rời đi sau 3 giây'
                    },
                    {
                        title: 'Không responsive mobile',
                        description:
                            'Giao diện không tối ưu trên mobile – trong khi 80% khách hàng đang lướt bằng điện thoại.',
                        impact: 'Mất 80% khách hàng tiềm năng'
                    },
                    {
                        title: 'Không theo dõi được dữ liệu',
                        description:
                            'Không tích hợp chatbot, pixel hay công cụ đo lường – không biết khách từ đâu đến, ở lại bao lâu, có mua hay không.',
                        impact: 'Không tối ưu được marketing'
                    },
                    {
                        title: 'CTA không rõ ràng',
                        description:
                            'Landing page không rõ ràng Call To Action – khách hàng truy cập, lướt web qua lại sau đó… rời đi luôn.',
                        impact: 'Tỷ lệ chuyển đổi thấp'
                    }
                ]
            },
            why: {
                intro: 'Thiết kế chuẩn tốc độ, sử dụng hosting tối ưu, đảm bảo website luôn mượt trên mọi nền tảng',
                experienceDescription:
                    'Xây dựng giao diện mobile-first: tối ưu hiển thị, thao tác lướt và trải nghiệm người dùng trên mọi thiết bị di động',
                highlightTitle: 'Tối ưu landing page',
                highlightDescription:
                    'Tích hợp đầy đủ Facebook Pixel, Google Tag Manager, chatbot AI,... giúp doanh nghiệp nắm bắt toàn bộ hành trình khách hàng',
                supportDescription:
                    'Đảm bảo cấu trúc chuẩn SEO, UX/UI, đem lại trải nghiệm người dùng tốt nhất',
                trustedTitle: 'Hơn 100+ Khách hàng tin tưởng',
                trustedDescription:
                    'Mỗi Landing Page được thiết kế như một sales funnel, tâm lý học hành vi được áp dụng để dẫn dắt – giữ chân – chốt đơn'
            },
            offers: {
                titleLine1: 'Chương trình ưu đãi',
                titleLine2: 'khi đăng ký COMBO',
                subtitleLine1: 'Ưu đãi dành cho mọi đối tượng',
                subtitleLine2: 'khách hàng',
                discountLabel: 'Giảm',
                inLabel: 'trong',
                items: [
                    {title: 'COMBO\nLANDINGPAGE &\n WEBSITE', description: 'tổng chi phí'},
                    {title: 'COMBO\nWEBSITE &\nDỊCH VỤ ADS', description: 'Chi phí Ads trong tháng đầu tiên'},
                    {
                        title: 'COMBO\nLANDINGPAGE & \nWEBSITE & ADS',
                        description: 'Tặng thêm 1 tháng kĩ thuật miễn phí'
                    }
                ]
            },
            landingPackages: {
                title: 'Gói xây dựng Landing Page',
                subtitle:
                    'Chọn gói dịch vụ phù hợp để tạo ra landing page chuyên nghiệp, tối ưu hóa chuyển đổi và phù hợp với mọi thiết bị',
                basic: {
                    title: 'Gói Landing Page Cơ Bản',
                    features: [
                        'Thiết kế tùy biến theo yêu cầu',
                        'Bàn giao đầy đủ source code',
                        'Thời gian hoàn thành: 3–7 ngày làm việc',
                        'Chỉnh sửa tối đa 3 lần',
                        'Giao diện tương thích với các thiết bị: điện thoại, máy tính bảng, máy tính để bàn',
                        'Tối ưu tốc độ tải trang từ 1 đến 2 giây',
                        'Tối ưu điểm Google PageSpeed',
                        'Hỗ trợ tài liệu sử dụng, tích hợp Livechat, Hotline, Facebook, Zalo',
                        'Không bao gồm phần mềm chỉnh sửa thiết kế',
                        'Nền tảng thiết kế: Ladipage'
                    ]
                },
                advanced: {
                    title: 'Gói Landing Page Nâng Cao',
                    features: [
                        'Thiết kế tùy biến theo yêu cầu, đảm bảo nhận diện thương hiệu',
                        'Bàn giao đầy đủ source code',
                        'Thời gian hoàn thành: 3–5 ngày làm việc',
                        'Chỉnh sửa tối đa 5 lần',
                        'Giao diện tương thích với mọi thiết bị: điện thoại, máy tính bảng, máy tính để bàn',
                        'Tối ưu tốc độ truy cập từ 1 đến 2 giây',
                        'Tối ưu điểm Google Speed',
                        'Tặng kèm 1GB lưu trữ (hosting), không giới hạn băng thông và số lượng truy cập',
                        'Chủ động sao lưu tài nguyên',
                        'Nền tảng thiết kế: Ladipage hoặc WordPress',
                        'Tích hợp hơn 100 ứng dụng và công cụ: Countdown, Notify, Gallery, Gmail, Google Sheet, Facebook Pixel, Google Analytics, Google Ads,...'
                    ]
                }
            },
            packages: {
                title: 'Các gói xây dựng website',
                subtitle: '3 gói chính: Cơ bản, Tiêu chuẩn & Nâng cao',
                basic: {
                    title: 'Gói website cơ bản',
                    features: [
                        'Giao diện web cơ bản, dựng trong 2–3 ngày',
                        'Miễn phí tên miền .com',
                        'Tặng Hosting SSD',
                        'Thiết kế chuẩn SEO, tối ưu tốc độ tải trang',
                        'Responsive – tương thích mọi thiết bị',
                        'Tích hợp live chat, Messenger, Zalo',
                        'Cài sẵn plugin cơ bản và SSL',
                        'Hỗ trợ xử lý sự cố (có thu phí 1 số hạng mục nếu phát sinh ngoài hợp đồng)',
                        'Tư vấn quảng cáo đa nền tảng (Meta, Google, TikTok)'
                    ]
                },
                standard: {
                    title: 'Gói website tiêu chuẩn',
                    features: [
                        'Thiết kế giao diện trung bình hoặc theo yêu cầu',
                        'Tặng tên miền .com hoặc .net',
                        'Hosting SSD lưu trữ tốc độ cao',
                        'Dựng website trong 3–7 ngày',
                        'Thiết kế chuẩn SEO, UX/UI, tối ưu tốc độ tải trang',
                        'Tương thích mọi thiết bị',
                        'Tặng 5–10 bài viết nội dung cơ bản (chuẩn SEO)',
                        'Tư vấn chiến dịch quảng cáo Meta, Google, TikTok',
                        'Tặng plugin, chứng chỉ SSL',
                        'Hỗ trợ kỹ thuật (có thu phí 1 số hạng mục nếu phát sinh ngoài hợp đồng)'
                    ]
                },
                advanced: {
                    title: 'Gói website nâng cao',
                    features: [
                        'Thiết kế giao diện website cao cấp',
                        'Tặng tên miền .com, .net',
                        'Hosting SSD lưu trữ tốc độ cao',
                        'Dựng website 7–10 ngày',
                        'Tặng 20 bài viết chuẩn SEO',
                        'Cấu hình đầy đủ: tracking đa kênh, chuyển đổi động, đồng bộ danh mục sản phẩm',
                        'Tối ưu tốc độ – chuẩn mobile',
                        'Tư vấn và đồng hành chạy Ads đa nền tảng',
                        'Cấp tài khoản TikTok Ads miễn phí',
                        'Miễn phí thông báo website với Bộ Công Thương',
                        'Tặng full plugin, chứng chỉ SSL',
                        'Hỗ trợ kỹ thuật miễn phí trọn gói'
                    ]
                }
            },
            process: {
                title: 'Quy trình triển khai',
                subtitle:
                    '6 bước chuyên nghiệp để tối ưu hiệu quả quảng cáo và đạt được mục tiêu kinh doanh',
                steps: [
                    {
                        title: 'Gặp gỡ và trao đổi',
                        items: [
                            'Trao đổi trực tiếp hoặc online',
                            'Thảo luận, phân tích bài toán',
                            'Chốt tài liệu yêu cầu/ tính năng'
                        ]
                    },
                    {
                        title: 'Thiết kế demo',
                        items: ['Thiết kế demo giao diện', 'Khách hàng xem demo và feedback']
                    },
                    {
                        title: 'Hoàn thiện và kiểm thử',
                        items: ['Tùy chỉnh hoàn thiện theo feedback', 'Kiểm thử và hoàn tất']
                    },
                    {
                        title: 'Bàn giao và thanh toán',
                        items: [
                            'Bàn giao dự án cho khách hàng',
                            'Khách hàng nghiệm thu và thanh toán',
                            'Activate hỗ trợ bảo hành 24/7'
                        ]
                    }
                ]
            }
        },

        // Trang Automation - AI - Data. Khối why + workflow đang dùng chung nguyên văn
        // với trang Tool Content AI (/ai), nên hai trang cùng trỏ về các khoá dưới đây.
        aiData: {
            hero: {
                descriptionPrefix:
                    'Muốn nhân bản năng suất, giảm thủ công, tăng trải nghiệm? Câu trả lời nằm ở ',
                brand: 'Automation và AI.',
                descriptionSuffix:
                    ' Activate giúp doanh nghiệp chuyển mình thông minh hóa quy trình bằng các giải pháp:',
                bullets: [
                    'Tự động hoá quy trình nội bộ & marketing bằng n8n.',
                    'Xây dựng AI Agent: Chatbot thông minh, tư vấn DISC, tạo nội dung.',
                    'Kết nối các nền tảng: Facebook, Zalo, Website, Email, CRM.'
                ]
            },
            divider: [
                'Tự động hoá quy trình nội bộ &\nmarketing bằng n8n.',
                'Xây dựng AI Agent:\nChatbot thông minh, tư vấn DISC, tạo nội dung.',
                'Kết nối các nền tảng: Facebook, Zalo, Website, Email, CRM.'
            ],
            painPoints: {
                title: 'Nỗi đau & giải pháp cho doanh nghiệp',
                items: [
                    {
                        title: 'Quy trình thủ công tốn thời gian',
                        description:
                            'Sale vẫn đang nhập tay từng đơn, chốt inbox từng khách, gửi tay từng email – mất 80% thời gian cho việc lặp lại.',
                        solutionTitle: 'Tự động hóa quy trình',
                        solutionDescription:
                            'Biến quy trình thủ công thành tự động – giải phóng 80% thời gian cho đội Sale.'
                    },
                    {
                        title: 'Thiếu cá nhân hóa',
                        description:
                            'Marketing không thể cá nhân hóa theo hành vi từng khách – nội dung gửi ra bị "lạnh", không hiệu quả.',
                        solutionTitle: 'Cá nhân hóa thông minh',
                        solutionDescription:
                            'Cá nhân hoá nội dung theo hành vi từng khách hàng – tăng mạnh tỷ lệ chuyển đổi.'
                    },
                    {
                        title: 'Dữ liệu rời rạc',
                        description:
                            'Thiếu hệ thống liên kết giữa các nền tảng (Zalo, Facebook, Website, CRM) – dữ liệu rời rạc, không thể khai thác.',
                        solutionTitle: 'Kết nối đa nền tảng',
                        solutionDescription:
                            'Kết nối đa nền tảng: Zalo – Facebook – Website – CRM vào 1 hệ thống duy nhất.'
                    },
                    {
                        title: 'Thiếu tự động hóa',
                        description:
                            'Không có công cụ để trả lời tự động, tư vấn cá nhân hóa, hoặc gợi ý sản phẩm thông minh.',
                        solutionTitle: 'AI tư vấn thông minh',
                        solutionDescription:
                            'Kích hoạt AI trả lời thông minh – chatbot tư vấn sản phẩm tự động.'
                    }
                ]
            },
            why: {
                intro: 'Biến quy trình thủ công thành tự động – giải phóng 80% thời gian cho đội Sale',
                experienceDescription:
                    'Cá nhân hoá nội dung theo hành vi từng khách hàng – tăng mạnh tỷ lệ chuyển đổi.',
                highlightTitle: 'Tối ưu SEO',
                highlightDescription:
                    'Kết nối đa nền tảng: Zalo – Facebook – Website – CRM vào 1 hệ thống duy nhất',
                supportDescription:
                    'Kích hoạt AI trả lời thông minh – chatbot tư vấn sản phẩm tự động',
                businesses: 'Doanh nghiệp'
            },
            packages: {
                title: 'Các gói dịch vụ',
                subtitle: '3 gói chính: Cơ bản, Tiêu chuẩn & Nâng cao',
                includesBasic: 'Bao gồm tất cả trong gói cơ bản, cộng thêm:',
                includesStandard: 'Bao gồm tất cả trong gói tiêu chuẩn, cộng thêm:',
                basic: {
                    title: 'Gói dịch vụ cơ bản',
                    features: [
                        'Thiết lập quy trình auto chốt đơn từ Fanpage & Zalo OA',
                        'Cài đặt chatbot phản hồi inbox cơ bản (FAQ, xác nhận đơn)',
                        'Tích hợp livechat website + đồng bộ với Fanpage',
                        'Gửi tin nhắn cảm ơn sau đơn hàng',
                        'Gửi nhắc lại cho khách chưa hoàn tất đơn',
                        'Giao diện quản trị đơn giản, dễ dùng'
                    ]
                },
                standard: {
                    title: 'Gói dịch vụ tiêu chuẩn',
                    features: [
                        'Kết nối & đồng bộ khách hàng từ: Zalo – Facebook – Website – Form – CRM',
                        'Thiết kế phễu tự động nuôi dưỡng khách hàng theo hành vi',
                        'Cài đặt & cá nhân hoá kịch bản remarketing',
                        'Tự động gửi tin/sms/email theo trigger (khách xem sản phẩm A → nhận ưu đãi A)',
                        'Tích hợp các công cụ đo lường: Google Analytics, Facebook Pixel...'
                    ]
                },
                advanced: {
                    title: 'Gói dịch vụ nâng cao',
                    features: [
                        'Thiết lập AI chatbot trả lời tự nhiên theo ngữ cảnh & sản phẩm',
                        'AI gợi ý sản phẩm cá nhân hoá theo hành vi khách hàng',
                        'Phân loại tệp khách hàng tự động (theo hành vi, mức độ quan tâm, lịch sử mua)',
                        'Tạo báo cáo thông minh: điểm rơi chốt đơn, hiệu quả nội dung, thời điểm vàng',
                        'Hệ thống lưu trữ & phân tích dữ liệu tập trung (Data Hub)',
                        'Hỗ trợ tích hợp với hệ thống POS, CRM, email automation'
                    ]
                }
            },
            workflow: {
                title: 'Quy trình làm việc',
                steps: [
                    {title: 'Gửi yêu cầu & tư vấn sơ bộ', description: 'Tiếp nhận nhu cầu - tư vấn giải pháp'},
                    {title: 'Khách hàng mô tả bài toán', description: 'Thảo luận vấn đề cần giải quyết'},
                    {title: 'Phân tích mục tiêu, kênh vận hành', description: 'Xác định mục tiêu và kênh triển khai'},
                    {
                        title: 'Cấp độ 1: tự động hóa thao tác lặp lại',
                        description: 'Giải phóng nhân lực khỏi các công việc thủ công'
                    },
                    {
                        title: 'Cấp độ 2: kết nối đa nền tảng (FB, Zalo, CRM...)',
                        description: 'Tích hợp liền mạch giữa các hệ thống'
                    },
                    {
                        title: 'Cấp độ 3: AI tư vấn & phân tích dữ liệu',
                        description: 'Ứng dụng trí tuệ nhân tạo để tối ưu quy trình'
                    },
                    {title: 'Ký hợp đồng, thống nhất thời gian', description: 'Thiết lập hệ thống'},
                    {title: 'Chạy thử & tinh chỉnh', description: 'Kiểm tra và tối ưu hóa hiệu suất hệ thống'},
                    {title: 'Bàn giao & đào tạo', description: 'Hướng dẫn sử dụng và chuyển giao công nghệ'},
                    {title: 'Bảo trì & tối ưu', description: 'Hỗ trợ liên tục và cập nhật tính năng mới'}
                ],
                setupDescription: 'Triển khai giải pháp theo yêu cầu đã thống nhất'
            }
        },

        // Trang Facebook Dataset & CRM. Danh sách tính năng trong gói và khối video
        // đang dùng chung nguyên văn với trang Automation-AI-Data / Website nên trỏ lại
        // servicePages.aiData.packages.* và servicePages.websiteLanding.video.*
        facebookCrm: {
            hero: {
                descriptionPrefix: 'Trong thời đại dữ liệu là "',
                brand: 'mỏ kim cương',
                descriptionSuffix:
                    '", Activate giúp doanh nghiệp biến từng hành vi, từng tương tác thành đòn bẩy quảng cáo hiệu quả qua dịch vụ Facebook Dataset & CRM:',
                bullets: [
                    'Xây dựng tệp dataset chất lượng cho quảng cáo Facebook.',
                    'Tạo đối tượng lookalike & remarketing từ dữ liệu CRM, đơn hàng, hành vi người dùng.',
                    'Kết nối dữ liệu từ form, website, Zalo, chatbot… đẩy ngược về Facebook CAPI.'
                ]
            },
            divider: [
                'Xây dựng tệp dataset chất lượng cho quảng cáo Facebook',
                'Tạo đối tượng lookalike & remarketing từ dữ liệu CRM, đơn hàng, hành vi người dùng.',
                'Kết nối dữ liệu từ form, website, Zalo, chatbot… đẩy ngược về Facebook CAPI.'
            ],
            painPoints: {
                title: 'Nỗi đau của doanh nghiệp',
                items: [
                    {
                        title: 'Lãng phí dữ liệu khách hàng',
                        description:
                            'Đã có hàng trăm đơn hàng, hàng ngàn lượt inbox – nhưng không biết cách tận dụng lại dữ liệu đó.',
                        impact: 'Tiền ads bị đốt cháy'
                    },
                    {
                        title: 'Targeting quảng cáo không chính xác',
                        description:
                            'Chạy quảng cáo Facebook chỉ target theo sở thích, độ tuổi – không đủ gần gũi để tạo chuyển đổi thật sự.',
                        impact: 'Tỷ lệ chuyển đổi thấp'
                    },
                    {
                        title: 'Không có dữ liệu lookalike',
                        description:
                            'Không xây được tệp lookalike đúng chuẩn – dẫn đến lãng phí ngân sách quảng cáo vào những người không quan tâm.',
                        impact: 'Ads tiếp cận sai đối tượng'
                    },
                    {
                        title: 'Dữ liệu không đồng bộ',
                        description:
                            'Dữ liệu form, web, chatbot… không được đồng bộ về CRM hoặc Facebook CAPI – bị đứt mạch remarketing.',
                        impact: 'Mất cơ hội remarketing'
                    }
                ]
            },
            why: {
                intro: 'Môi trường làm việc trẻ trung, sáng tạo và chúng tôi tin rằng một đội ngũ giỏi – trong môi trường mở và không ngừng học hỏi – sẽ tạo nên những sản phẩm thực sự hiệu quả cho khách hàng.',
                experienceDescription:
                    'Biến dữ liệu cũ thành mỏ vàng – Không bỏ sót khách hàng từng tương tác',
                highlightTitle: 'Quản lý tập trung',
                highlightDescription:
                    'Đồng bộ form – website – chatbot – Zalo – CRM – Facebook vào một hệ thống duy nhất',
                supportDescription:
                    'Tạo tệp đối tượng chuẩn, quảng cáo tiếp cận đúng người từng tương tác – tăng tỷ lệ chuyển đổi, giảm chi phí mỗi đơn'
            },
            packages: {
                standardTitle: 'Gói dịch vụ Tiêu Chuẩn',
                advancedTitle: 'Gói dịch vụ Nâng Cao',
                includesBoth: 'Bao gồm tất cả trong gói cơ bản và tiêu chuẩn, cộng thêm:'
            }
        },

        marketingOutsource: {
            hero: {
                titleLine1: 'PHÒNG MARKETING',
                titleLine2: 'THUÊ NGOÀI',
                descriptionPrefix:
                    'Đem chất xám từ đội ngũ của chúng tôi để rót vào những dự án đầy tiềm năng của các doanh nghiệp chính là phương chấm cống hiến của Activate khi cung cấp dịch vụ ',
                brand: 'Phòng Marketing thuê ngoài:',
                bullets: [
                    'Gói dịch vụ thuê ngoài toàn bộ team Marketing: Ads – Content – Design – Automation.',
                    'Đồng hành theo tháng/quý với mục tiêu: Tăng trưởng đơn hàng, giữ chân khách hàng.',
                    'Báo cáo hiệu quả định kỳ theo KPI cam kết.'
                ]
            },
            divider: [
                'Gói dịch vụ thuê ngoài toàn bộ team Marketing: Ads – Content – Design – Automation.',
                'Đồng hành theo tháng/quý với mục tiêu: Tăng trưởng đơn hàng, giữ chân khách hàng.',
                'Báo cáo hiệu quả định kỳ theo KPI cam kết.'
            ],
            painPoints: {
                title: 'Nỗi đau của doanh nghiệp',
                items: [
                    {
                        title: 'Thiếu đội marketing nội bộ',
                        description: 'Không đủ ngân sách để tuyển full bộ phận marketing nội bộ.',
                        impact: 'Tiền ads bị đốt cháy vô ích'
                    },
                    {
                        title: 'Thiếu sự liên kết chiến dịch',
                        description:
                            'Thuê rời rạc nhiều bên (ads – content – thiết kế – automation) khiến chiến dịch thiếu liên kết và hiệu quả.',
                        impact: 'Ngân sách marketing lãng phí'
                    },
                    {
                        title: 'Không có KPI & đo lường rõ ràng',
                        description: 'Không được cam kết kết quả, không có KPI cụ thể để đo lường.',
                        impact: 'Không tối ưu marketing'
                    },
                    {
                        title: 'Thiếu người đồng hành thực sự',
                        description:
                            'Thiếu người “đồng hành thật sự” – chỉ làm theo brief, không hiểu mô hình kinh doanh của doanh nghiệp.',
                        impact: 'Mất khách hàng'
                    }
                ]
            },
            why: {
                intro: 'Tư vấn mô hình & chiến lược phù hợp với từng thương hiệu',
                experienceDescription:
                    'Xây dựng hình ảnh thương hiệu theo một chuẩn mực thương hiệu thống nhất trên mọi nền tảng',
                highlightTitle: 'Tối ưu hiệu suất',
                highlightDescription:
                    'Quản lý, chăm sóc và tối ưu hiệu suất cho các kênh như Fanpage, Website, Zalo OA, Tiktok,…',
                supportDescription:
                    'Một đội marketing thực chiến, làm đủ vai trò từ chiến lược đến thực thi: content, design, media, tracking, báo cáo...'
            },
            packages: {
                basic: {
                    title: 'Gói dịch vụ cơ bản',
                    features: [
                        'Tư vấn định hướng chiến lược thương hiệu ban đầu',
                        'Thiết lập & chăm sóc Fanpage + Zalo OA',
                        '12 bài viết/tháng (gồm nội dung + thiết kế ảnh)',
                        '1 landing page cơ bản hoặc tối ưu website hiện có',
                        'Setup & theo dõi quảng cáo Facebook Ads ngân sách nhỏ',
                        'Báo cáo kết quả theo từng giai đoạn & đề xuất các phương án tiếp theo '
                    ]
                },
                standard: {
                    title: 'Gói dịch vụ Tiêu Chuẩn',
                    features: [
                        'Tư vấn mô hình truyền thông & phễu marketing phù hợp',
                        'Quản lý Fanpage, Website, Zalo OA, TikTok',
                        '20–25 nội dung/tháng (bài viết + thiết kế + clip ngắn)',
                        'Thiết kế & triển khai 1–2 landing page phục vụ chuyển đổi',
                        'Triển khai quảng cáo Facebook + Google (hoặc TikTok)',
                        'Cài đặt tracking & đo lường (Pixel, GA4, GTM)',
                        'Báo cáo kết quả theo từng giai đoạn & đề xuất các phương án tiếp theo'
                    ]
                },
                advanced: {
                    title: 'Gói dịch vụ Nâng Cao',
                    features: [
                        'Tư vấn chiến lược truyền thông toàn diện theo mục tiêu kinh doanh',
                        'Xây dựng bộ nhận diện thương hiệu đa kênh',
                        'Quản trị toàn bộ hệ sinh thái: Fanpage, Website, TikTok, Zalo, YouTube',
                        '30+ nội dung/tháng: bài viết, ảnh, video, clip ngắn chuyên sâu',
                        'Thiết lập và tối ưu hệ thống automation + CRM (nếu có)',
                        'Triển khai chiến dịch Ads đa nền tảng: Facebook – Google – TikTok – Zalo',
                        'Báo cáo theo tuần, đánh giá hiệu quả từng kênh, đề xuất mở rộng chiến dịch',
                        'Đội ngũ cố vấn đồng hành riêng, họp 1–1 cùng ban lãnh đạo'
                    ]
                }
            }
        },

        tickXanh: {
            hero: {
                title: 'DỊCH VỤ TICK XANH',
                descriptionPart1: 'Tick xanh Facebook là chứng nhận chính chủ giúp cá nhân và doanh nghiệp ',
                highlight1: 'khẳng định uy tín',
                descriptionPart2: ', tăng niềm tin và ',
                highlight2: 'bảo vệ thương hiệu',
                descriptionPart3: ' của mình trên nền tảng.',
                description2:
                    'Activate cung cấp dịch vụ đăng ký tích xanh Facebook trọn gói từ A–Z, giúp khách hàng rút ngắn thời gian xét duyệt, chuẩn hóa hồ sơ và tăng tỷ lệ được phê duyệt thực tế.',
                badges: {
                    verified: 'Đã xác thực',
                    safe: 'An toàn',
                    security: 'Bảo mật tuyệt đối',
                    effective: 'Hiệu quả',
                    engagement: 'Tăng tương tác',
                    fastApproval: 'Phê duyệt nhanh'
                }
            },
            why: {
                intro: 'Tư vấn – kiểm tra tài khoản – chuẩn hóa hồ sơ – gửi xét duyệt – theo dõi kết quả',
                experienceDescription:
                    'Hơn 100+ đầu báo điện tử uy tín có thể hỗ trợ xây thương hiệu cá nhân/doanh nghiệp',
                highlightTitle: 'Đội ngũ chuyên nghiệp',
                highlightDescription:
                    'Đội ngũ từng xử lý tích xanh cho KOL, doanh nghiệp dịch vụ, đào tạo, thương mại,...',
                supportDescription:
                    'Hỗ trợ xây nội dung, seeding, tăng tương tác để tăng độ tin cậy tài khoản trước nộp tích xanh'
            },
            profile: {
                title: 'Hồ sơ lên tick xanh Facebook',
                subtitle:
                    'Danh sách đầy đủ các yêu cầu và tài liệu cần thiết để xác minh tài khoản Facebook',
                requirements: [
                    {
                        title: 'Thông tin tài khoản chính chủ',
                        items: [
                            'Tên thật / tên thương hiệu (phải trùng khớp với giấy tờ xác thực)',
                            'Ảnh đại diện và ảnh bìa rõ ràng, chuyên nghiệp',
                            'Mô tả tài khoản: lĩnh vực hoạt động, vị trí công việc (nếu cá nhân)',
                            'Website chính thức (nếu có)'
                        ]
                    },
                    {
                        title: 'Giấy tờ xác minh danh tính / pháp lý',
                        subtitle: 'Với cá nhân:',
                        items: [
                            'CCCD/Hộ chiếu (bản scan rõ ràng 2 mặt)',
                            'Giấy phép hành nghề (nếu có)'
                        ],
                        subtitle2: 'Với tổ chức/doanh nghiệp:',
                        items2: [
                            'Giấy đăng ký kinh doanh',
                            'Biên lai thanh toán thuế (nếu cần)',
                            'Công văn xác nhận đại diện pháp lý'
                        ]
                    },
                    {
                        title: 'Tối thiểu 3–5 bài báo chính thống',
                        items: [
                            'Bài viết từ các đầu báo điện tử uy tín',
                            'Bài viết phải có nội dung đề cập trực tiếp đến cá nhân/doanh nghiệp xin tích xanh'
                        ]
                    },
                    {
                        title: 'Link mạng xã hội liên quan',
                        items: [
                            'Fanpage chính thức (đã xác minh)',
                            'Kênh TikTok nếu có',
                            'LinkedIn, Instagram,… (tăng uy tín và tính nhất quán)'
                        ]
                    },
                    {
                        title: 'Bằng chứng hoạt động & độ ảnh hưởng',
                        items: [
                            'Số lượng người theo dõi (tối thiểu 20k followers trên Facebook)',
                            'Thống kê tương tác 30 ngày gần nhất (reach, comment, share…)',
                            'Kết quả truyền thông, chiến dịch đã triển khai'
                        ]
                    },
                    {
                        title: 'Hồ sơ nội dung chất lượng',
                        items: [
                            'Bài viết định kỳ (thường xuyên cập nhật)',
                            'Nội dung không vi phạm tiêu chuẩn cộng đồng',
                            'Lịch sử tài khoản không có cảnh báo/vi phạm'
                        ]
                    },
                    {
                        title: 'Lý do xin tick xanh',
                        items: ['Nêu rõ trong biểu mẫu gửi Facebook']
                    }
                ]
            },
            packages: {
                subtitle: 'Quản trị tài khoản/ Trọn gói vận hành/ Thuê tài khoản',
                basic: {
                    title: 'Mua tích xanh Fanpage Facebook',
                    price: 'GIÁ TÙY THỜI ĐIỂM',
                    features: ['Được đổi tên 1 lần', 'KH lựa trong list page có sẵn của Agency']
                },
                standard: {
                    title: 'Submit tích xanh Fanpage Facebook',
                    price: '85 TRIỆU VNĐ/GÓI',
                    features: [
                        'Tự vấn các vấn đề liên quan đến việc lên tích xanh TikTok.',
                        'Tư vấn các nội dung cần chú ý, các rủi ro có thể gặp phải trong quá trình Build tích xanh Fanpage.',
                        'Kiểm tra kênh: tương tác, follow, view...',
                        'Check các đầu báo lớn (các đầu có tick xanh Fanpagge) đã đi trong vòng 01 năm qua của Brand.',
                        'Kiểm tra chính sách và điều kiện cần thiết để tăng kihả năng lên tick xanh.',
                        'Gửi hồ sơ xét duyệt lên tick.',
                        'Tiến hành submit tick xanh Fanpage.',
                        'Feedback kết quả kiểm duyệt lên tick.'
                    ]
                },
                advanced: {
                    title: 'Mua tích xanh FB Profile cá nhân',
                    price: '5 TRIỆU VNĐ/GÓI',
                    features: [
                        'Thời gian hoàn thành: 3 ngày',
                        'Tài khoản tích mới sẽ được làm theo thông tin của FB hiện tại hoặc thông tin khách muốn (bao đổi tên)',
                        'Có phí duy trì gia hạn theo tháng: 20$ = 500.000 đ'
                    ]
                }
            }
        },

        // Trang Automation Tool Content AI (/ai). Khối why + workflow dùng chung với
        // trang Automation - AI - Data nên trỏ về servicePages.aiData.*
        toolContentAi: {
            hero: {
                badge: 'Nền tảng nội dung AI · SEO · AEO · GEO',
                titleLine1: 'Một nền tảng AI: phân tích, lên kế hoạch và viết nội dung được',
                titleLine2: 'AI trích dẫn',
                description:
                    'Báo cáo Social & sàn TMĐT, phân tích kịch bản video, viết bài tối ưu cho AI trích dẫn, tự động đi internal link và backlink — tất cả trong một chỗ.',
                ctaTrial: 'Đăng ký dùng thử',
                ctaFeatures: 'Xem tính năng',
                note: 'Dùng khóa API AI của chính bạn - chủ động chi phí, không phụ thuộc.',
                steps: [
                    {title: 'Phân tích', desc: 'AI mổ xẻ social & shop sàn TMĐT'},
                    {title: 'Lên kế hoạch', desc: 'Cụm từ khóa thành kế hoạch nội dung'},
                    {title: 'Viết & tối ưu', desc: 'AI viết, chấm điểm SEO - AEO - GEO'},
                    {title: 'Đi link', desc: 'Nối bài liên quan: internal + backlink'},
                    {title: 'Đăng & báo cáo', desc: 'Xuất bản đa kênh, tạo link chia sẻ'}
                ],
                preview: {
                    keywords: 'Cụm từ khóa',
                    aiCluster: 'AI gom cụm',
                    topics: [
                        'Trụ: SEO vs AEO vs GEO',
                        'Cách được ChatGPT trích dẫn',
                        'Checklist tối ưu GEO 2026'
                    ],
                    draft: 'Bản nháp AI',
                    written: 'Viết xong',
                    tags: ['Schema FAQ', 'Trích dẫn nguồn', 'Entity rõ ràng'],
                    linkNetwork: 'Mạng lưới liên kết',
                    auto: 'Tự động',
                    pillar: 'Bài trụ',
                    linkNodes: ['Bài chi tiết', 'So sánh', 'Case study', 'FAQ'],
                    publish: 'Xuất bản đa kênh',
                    channels: '3/3 kênh',
                    posted: 'Đã đăng',
                    shareLink: 'Link chia sẻ',
                    paused: 'Tạm dừng',
                    running: 'Đang chạy',
                    restartAria: 'Chạy lại từ bước đầu',
                    restartTitle: 'Chạy lại'
                }
            },
            problems: {
                title: 'Bạn có đang gặp những vấn đề này?',
                items: [
                    {
                        title: 'Viết chuẩn SEO quá tốn thời gian',
                        description:
                            'Nghiên cứu từ khóa, dựng dàn ý, tối ưu tiêu đề, meta, heading, chèn liên kết... mỗi bài ngốn hàng giờ đồng hồ.'
                    },
                    {
                        title: 'Bài không được AI trích dẫn',
                        description:
                            'ChatGPT, Perplexity, Google AI Overviews đang thay đổi cách tìm kiếm - nội dung không tối ưu GEO sẽ bị bỏ lại phía sau.'
                    },
                    {
                        title: 'Quản lý đa kênh, đa ngôn ngữ rối',
                        description:
                            'Đăng thủ công lên nhiều CMS, dịch từng bài, theo dõi hiệu quả... quá nhiều việc lặp đi lặp lại.'
                    }
                ]
            },
            features: {
                title: 'Tất cả những gì bạn cần, trong một nền tảng',
                subtitle:
                    'Sáu năng lực cốt lõi giúp bạn thắng cả trên Google lẫn trong câu trả lời của AI.',
                ctaFooter: 'Đăng ký trải nghiệm ngay',
                cta: 'Đăng ký dùng thử',
                items: [
                    {
                        title: 'Báo cáo Social đa nền tảng',
                        description:
                            'Quét Facebook, TikTok, YouTube, Instagram — AI mổ xẻ nội dung, tương tác và chiến lược đối thủ.'
                    },
                    {
                        title: 'Viết bài chuẩn SEO · GEO',
                        description:
                            'Nội dung tối ưu để Google xếp hạng và được AI trích dẫn: ChatGPT, Gemini, AI Overviews.'
                    },
                    {
                        title: 'Tự động internal link & backlink',
                        description:
                            'AI tìm bài liên quan và đi link nội bộ lẫn chéo site — chỉ nối nội dung thật sự liên quan.'
                    },
                    {
                        title: 'Phân tích shop sàn TMĐT',
                        description:
                            'Báo cáo Shopee, TikTok Shop, Lazada: sản phẩm, đánh giá, giá và cơ hội thị trường.'
                    },
                    {
                        title: 'Phân tích kịch bản video',
                        description:
                            'Dán link TikTok/YouTube/Facebook — AI bóc tách hook, công thức, timeline theo giây và lý do viral.'
                    },
                    {
                        title: 'Phân tích, lên kế hoạch, viết',
                        description:
                            'Từ nghiên cứu từ khóa đến kế hoạch nội dung và bài hoàn chỉnh — tất cả bằng AI, trong một luồng.'
                    }
                ]
            },
            forWhom: {
                title: 'Công cụ này dành cho ai?',
                items: [
                    {
                        title: 'Chủ shop & doanh nghiệp',
                        description:
                            'Tự chủ nội dung website, kéo khách từ tìm kiếm mà không cần đội SEO riêng.',
                        impact: 'Tối ưu chi phí'
                    },
                    {
                        title: 'Agency & freelancer SEO',
                        description:
                            'Tăng sản lượng bài chất lượng cho nhiều khách hàng, nhiều ngôn ngữ, trong thời gian ngắn.',
                        impact: 'Scale-up dễ dàng'
                    },
                    {
                        title: 'Đội marketing in-house',
                        description:
                            'Chuẩn hóa quy trình viết - tối ưu - duyệt - đăng và cộng tác nhiều người trên cùng nền tảng.',
                        impact: 'Quản lý tập trung'
                    },
                    {
                        title: 'Người sáng tạo nội dung',
                        description:
                            'Biến ý tưởng thành bài chuẩn SEO/GEO thật nhanh, tập trung vào chất lượng thay vì thao tác thủ công.',
                        impact: 'Khơi nguồn sáng tạo'
                    }
                ]
            },
            howItWorks: {
                title: 'Cách hoạt động',
                subtitle: 'Bốn bước từ lúc kết nối đến khi bài viết lên sóng và có số liệu.',
                steps: [
                    {
                        title: 'Kết nối',
                        description: 'Nhập khóa API AI và kết nối website (WordPress, Wix, Shopify...).'
                    },
                    {
                        title: 'Nghiên cứu & lập kế hoạch',
                        description: 'Tìm từ khóa và dựng kế hoạch nội dung theo cụm chủ đề.'
                    },
                    {
                        title: 'Viết & tối ưu',
                        description:
                            'Để AI viết bản nháp, chấm điểm SEO/AEO/GEO rồi làm theo gợi ý để nâng điểm.'
                    },
                    {
                        title: 'Đăng & đo lường',
                        description: 'Xuất bản đa kênh và theo dõi token, chi phí cùng lượt AI trích dẫn.'
                    }
                ]
            },
            benefits: {
                titleLine1: 'Tiết kiệm',
                titleLine2: 'thời gian và chi phí',
                subtitle: 'Làm việc của cả một quy trình chỉ trong vài phút.',
                inLabel: 'trong',
                items: [
                    {title: 'Thay vì vài giờ cho một bài chuẩn SEO chỉ cần', highlight: 'VÀI PHÚT', description: ''},
                    {title: 'SEO + AEO + GEO\ntrong một lần viết', highlight: '3', description: ''},
                    {title: 'Bản địa hóa\ncho từng thị trường với', highlight: '10', description: 'NGÔN NGỮ'},
                    {title: 'Đăng thẳng\nlên nhiều CMS', highlight: 'ĐA KÊNH', description: ''}
                ]
            },
            packages: {
                title: 'Các gói dịch vụ',
                subtitle: 'Gói Enterprise - Không giới hạn, chọn chu kỳ phù hợp với bạn',
                cta: 'Đăng ký dùng thử',
                features: [
                    '∞ bài AI/tháng',
                    '∞ báo cáo Social/tháng (chỉ Facebook)',
                    '∞ nhân viên',
                    '∞ biz',
                    'Duyệt bài',
                    'Giọng thương hiệu',
                    'API/Webhook',
                    'Kiểm chứng dữ kiện',
                    'Nhân hóa văn phong',
                    'White-label + báo cáo khách'
                ],
                plans: [
                    {duration: 'Gói 3 tháng', price: '9.000.000đ', perMonth: '3tr/tháng', note: 'Giá chuẩn, không giảm', badge: ''},
                    {
                        duration: 'Gói 6 tháng',
                        price: '14.900.000đ',
                        perMonth: '~2.48tr/tháng',
                        note: 'Tiết kiệm ~17%',
                        badge: 'Gói chủ lực'
                    },
                    {duration: 'Gói 12 tháng', price: '23.900.000đ', perMonth: '~1.99tr/tháng', note: 'Tiết kiệm ~34%', badge: ''}
                ]
            },
            partners: {
                titleLine1: 'Đồng hành',
                titleLine2: 'Phát triển',
                subtitle: 'Hai đội ngũ cùng nghiên cứu và xây dựng nền tảng Automation Tool Content AI',
                roles: {
                    strategy: 'Chiến lược & sản phẩm',
                    platform: 'Nền tảng & công nghệ'
                },
                descriptionPrefix: 'Automation Tool Content AI là sản phẩm được ',
                and: ' và ',
                descriptionSuffix:
                    ' cùng nghiên cứu và phát triển – kết hợp năng lực tư vấn chuyển đổi số, dữ liệu marketing với kinh nghiệm vận hành nền tảng công nghệ quy mô lớn.',
                paragraph2:
                    'Hai đội ngũ cùng chịu trách nhiệm từ kiến trúc hệ thống, mô hình AI cho tới trải nghiệm người dùng, đảm bảo sản phẩm được cập nhật liên tục theo thay đổi của công cụ tìm kiếm và các nền tảng AI.'
            },
            faq: {
                title: 'Câu hỏi thường gặp',
                subtitle: 'Giải đáp các thắc mắc về Automation Tool Content AI',
                items: [
                    {
                        title: 'SEO, AEO và GEO khác nhau thế nào?',
                        desc: 'SEO tối ưu để xếp hạng trên Google. AEO tối ưu để được chọn làm câu trả lời trực tiếp (featured snippet, People Also Ask). GEO tối ưu để các engine AI như ChatGPT, Perplexity và Google AI Overviews trích dẫn nội dung của bạn.'
                    },
                    {
                        title: 'Tôi có cần biết kỹ thuật không?',
                        desc: 'Không. Bạn chỉ cần nhập chủ đề; nền tảng lo phần nghiên cứu, viết, tối ưu và chấm điểm. Có hướng dẫn chi tiết và tutorial cho người mới.'
                    },
                    {
                        title: 'Đăng bài lên được những đâu?',
                        desc: 'WordPress, Wix, Shopify, Haravan, Sapo và Google Sheet. Sửa bài cũ rồi đăng lại sẽ cập nhật đúng bài, không tạo bản trùng.'
                    },
                    {
                        title: 'Có hỗ trợ nhiều ngôn ngữ không?',
                        desc: 'Có. Giao diện và nội dung hỗ trợ 10 ngôn ngữ, kèm khả năng bản địa hóa bài viết theo từ khóa của từng thị trường.'
                    },
                    {
                        title: 'Tôi bắt đầu như thế nào?',
                        desc: 'Đăng nhập, nhập khóa API AI, kết nối website và viết bài đầu tiên - chỉ vài bước là xong.'
                    }
                ]
            },
            finalCta: {
                titleLine1: 'Sẵn sàng để nội dung của bạn',
                titleLine2: 'được tìm thấy và được trích dẫn?',
                description: 'Đăng nhập và tạo bài chuẩn SEO, AEO, GEO đầu tiên ngay hôm nay.',
                cta: 'Đăng ký để bắt đầu'
            }
        }
    },

    // ================================================================
    // Giao diện các trang dự án. Nội dung từng dự án (tên, mô tả, số liệu...)
    // nằm ở src/content/projects/<id>.json và được sửa qua trang /admin.
    // ================================================================
    projects: {
        viewDetail: 'Xem chi tiết',

        // Trang danh sách dự án (/projects/all)
        list: {
            badge: 'projects',
            title: 'DỰ ÁN TIÊU BIỂU',
            subtitle:
                'Tổng hợp các dự án đã triển khai, với kết quả thực tế và quy trình chuyên nghiệp.',
            searchLabel: 'Tìm kiếm',
            searchPlaceholder: 'Tên dự án, thương hiệu, mô tả...',
            categoryLabel: 'Danh mục',
            technologyLabel: 'Công nghệ',
            allCategories: 'Tất cả danh mục',
            allTechnologies: 'Tất cả công nghệ',
            selecting: 'Đang chọn',
            partner: 'Đối tác:',
            other: 'Khác',
            empty: 'Không tìm thấy dự án phù hợp. Hãy thử thay đổi bộ lọc hoặc từ khóa.'
        },

        // Trang chi tiết dự án (/projects/:slug)
        detail: {
            notFoundTitle: 'Không tìm thấy dự án',
            notFoundDescription: 'Dự án bạn tìm không tồn tại hoặc đã được cập nhật.',
            backToList: 'Quay lại danh sách dự án',
            backShort: '← Quay lại Projects',
            previous: 'Trước',
            date: 'Ngày thực hiện',
            category: 'Danh mục',
            partner: 'Đối tác / Thương hiệu',
            technologies: 'Công nghệ sử dụng',
            results: 'Kết quả & số liệu',
            video: 'Video giới thiệu',
            other: 'Khác',
            experience: 'Trải nghiệm'
        },

        // Trang thư viện workflow (/projects/workflow)
        workflow: {
            title: 'Bộ sưu tập workflow tự động hóa',
            searchPlaceholder: 'Tìm kiếm theo tên hoặc node...',
            emptyTitle: 'Không tìm thấy template',
            emptyDescription: 'Thử điều chỉnh từ khóa hoặc bộ lọc',
            categories: {
                all: 'Tất Cả',
                ai: 'AI',
                sales: 'Bán Hàng',
                itOps: 'IT Ops',
                marketing: 'Marketing',
                docs: 'Tài Liệu',
                other: 'Khác',
                support: 'Hỗ Trợ'
            },
            templates: [
                'Tạo nội dung AI với ChatGPT',
                'Tự động chấm điểm lead',
                'Hệ thống cảnh báo server',
                'Lên lịch đăng social media',
                'Tự động xử lý hóa đơn',
                'Phân phối ticket hỗ trợ',
                'Tạo ảnh AI tự động',
                'Đồng bộ dữ liệu CRM',
                'Sao lưu database định kỳ',
                'Phân tích email campaign',
                'Tạo báo cáo PDF tự động',
                'Công cụ kiểm tra dữ liệu',
                'Xử lý chatbot AI',
                'Phân tích cảm xúc khách hàng',
                'Báo cáo sales pipeline'
            ]
        },
    },

    // ================================================================
    // Giao diện trang tin tức. Tiêu đề và nội dung bài viết vẫn giữ tiếng Việt
    // ở mọi ngôn ngữ (theo thống nhất với khách hàng).
    // ================================================================
    news: {
        list: {
            badge: 'News',
            title: 'Tin tức & Kiến thức',
            subtitle:
                'Tin tức doanh nghiệp, hoạt động hợp tác và góc nhìn thị trường từ Activate.',
            searchLabel: 'Tìm kiếm bài viết',
            searchPlaceholder: 'Tìm bài viết...',
            allCategories: 'Tất cả',
            count: '{{count}} bài viết',
            featured: 'Bài mới nhất',
            readArticle: 'Đọc bài viết',
            clearFilters: 'Xóa bộ lọc',
            empty: 'Không tìm thấy bài viết phù hợp.',
            emptyHint: 'Thử từ khóa khác hoặc xóa bộ lọc để xem tất cả bài viết.',
            loadMore: 'Xem thêm bài viết'
        },
        detail: {
            breadcrumb: 'Tin tức',
            home: 'Trang chủ',
            notFoundTitle: 'Không tìm thấy bài viết',
            notFoundDescription: 'Bài viết bạn đang tìm có thể đã bị thay đổi hoặc không còn tồn tại.',
            backToNews: 'Quay lại trang tin tức',
            readingTime: '{{count}} phút đọc',
            toc: 'Mục lục',
            share: 'Chia sẻ',
            shareFacebook: 'Chia sẻ lên Facebook',
            shareLinkedin: 'Chia sẻ lên LinkedIn',
            copyLinkLabel: 'Sao chép liên kết bài viết:',
            copied: 'Đã sao chép',
            copyLink: 'Sao chép link',
            previous: 'Bài trước',
            next: 'Bài sau',
            ctaTitle: 'Quan tâm hợp tác cùng Activate?',
            ctaDescription: 'Gửi đề xuất hợp tác phân phối, cung ứng hoặc tài chính - đội ngũ Activate sẽ liên hệ lại sớm nhất.',
            related: 'Related',
            relatedTitle: 'Bài viết liên quan',
            viewAll: 'Xem tất cả bài viết'
        }
    },

    // ================================================================
    // Trang Hồ sơ năng lực (/projects/portfolio)
    // Tiêu đề trong menu bên trái - sửa chữ hiển thị ở ngay đây.
    // Muốn thêm/bớt mục thì sửa PORTFOLIO_SECTIONS trong Portfolio.jsx.
    // ================================================================
    portfolio: {
        menuTitle: 'Mục lục',
        imageError: 'Không thể tải ảnh {{file}}',
        sections: {
            cover: 'Bìa & Mục lục',
            letter: 'Thư ngỏ',
            milestones: 'Dấu ấn phát triển',
            vision: 'Tầm nhìn – Sứ mệnh – Giá trị cốt lõi',
            team: 'Cơ cấu tổ chức & Đội ngũ',
            process: 'Quy trình triển khai dự án',
            why: 'Lý do chọn Activate',
            services: 'Dịch vụ Activate',
            clients: 'Khách hàng & Đối tác',
            featured: 'Dự án tiêu biểu',
            nghe: 'Dự án: Nghề Content',
            beautySummit: 'Dự án: Beauty Summit',
            tukiGroup: 'Dự án: TUKI Group',
            otherProjects: 'Dự án tiêu biểu khác',
            already: "Hạng mục đã triển khai"
        }
    },

    // ================================================================
    // Trang Chính sách bảo mật (/chinh-sach-bao-mat)
    // ================================================================
    privacy: {
        title: 'CHÍNH SÁCH BẢO MẬT',
        sections: [
            {
                title: 'I. Giới thiệu',
                items: [
                    'Chúng tôi nhận biết tầm quan trọng của dữ liệu cá nhân mà bạn đã tin tưởng giao cho chúng tôi và tin rằng chúng tôi có trách nhiệm quản lý, bảo vệ và xử lý dữ liệu cá nhân của bạn một cách thích hợp. Chính sách bảo mật này ("Chính sách bảo mật" hay "Chính sách") được thiết kế để giúp bạn hiểu được cách thức chúng tôi thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân mà bạn đã cung cấp cho chúng tôi và/hoặc lưu giữ về bạn, cho dù là hiện nay hoặc trong tương lai, cũng như để giúp bạn đưa ra quyết định sáng suốt trước khi cung cấp cho chúng tôi bất kỳ dữ liệu cá nhân nào của bạn.',
                    '"Dữ Liệu Cá Nhân" hay "dữ liệu cá nhân" có nghĩa là dữ liệu, dù đúng hay không, về một cá nhân mà thông qua đó có thể được xác định được danh tính, hoặc từ dữ liệu đó và thông tin khác mà một tổ chức có hoặc có khả năng tiếp cận. Các ví dụ thường gặp về dữ liệu cá nhân có thể gồm có tên, số chứng minh nhân dân và thông tin liên hệ.',
                    'Bằng việc sử dụng Các Dịch Vụ, đăng ký một tài khoản với chúng tôi hoặc truy cập Nền tảng, bạn xác nhận và đồng ý rằng bạn chấp nhận các phương pháp, yêu cầu, và/hoặc chính sách được mô tả trong Chính sách bảo mật này, và theo đây bạn đồng ý cho phép chúng tôi thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân của bạn như mô tả trong đây. <strong>NẾU BẠN KHÔNG ĐỒNG Ý CHO PHÉP XỬ LÝ DỮ LIỆU CÁ NHÂN CỦA BẠN NHƯ MÔ TẢ TRONG CHÍNH SÁCH NÀY, VUI LÒNG KHÔNG SỬ DỤNG CÁC DỊCH VỤ CỦA CHÚNG TÔI HAY TRUY CẬP NỀN TẢNG HOẶC TRANG WEB CỦA CHÚNG TÔI.</strong> Nếu chúng tôi thay đổi Chính sách bảo mật của mình, chúng tôi sẽ đăng những thay đổi đó hoặc Chính sách bảo mật sửa đổi trên Nền tảng của chúng tôi.'
                ]
            },
            {
                title: 'II. Khi nào Website sẽ thu thập dữ liệu cá nhân?',
                items: [
                    'Khi bạn gửi bất kỳ biểu mẫu nào, bao gồm đơn đăng ký hoặc các mẫu đơn khác liên quan đến bất kỳ sản phẩm và dịch vụ nào của chúng tôi, bằng hình thức trực tuyến hay dưới hình thức khác.',
                    'Khi bạn ký kết bất kỳ thỏa thuận nào hoặc cung cấp các tài liệu hoặc thông tin khác liên quan đến tương tác giữa bạn với chúng tôi, hoặc khi bạn sử dụng các sản phẩm và dịch vụ của chúng tôi.',
                    'Khi bạn tương tác với chúng tôi, chẳng hạn như thông qua các culộc gọi điện thoại (có thể được ghi âm lại), thư từ, fax, gặp gỡ trực tiếp, các nền ứng dụng truyền thông xã hội và email.',
                    'Khi bạn sử dụng các dịch vụ điện tử của chúng tôi, hoặc tươngg tác với chúng tôi qua Nền tảng hoặc Trang Web hoặc Các Dịcch Vụ của chúng tôi. Trường hợp này bao gồm thông qua tập tin cookie mà chúng tôi cóthể triển khai khi bạn tương tác với các Nền tàng hoặc Trang Webcủa chúng tôi.',
                    'Khi bạn thực hiện các giao dịch thông qua Dịch vụ của chúng tôi.',
                    'Khi bạn cung cấp ý kiến phản hồi hoặc gửi khiểu nại cho chúng tôi.',
                    'Khi bạn đăng ký tham gia một cuộc thi, minigame, event ..···',
                    'Khi bạn gửi dữ liệu cả nhân của bạn cho chúng tôi vì bất kỳ lý do gì.'
                ]
            },
            {
                title: 'IV. Cookie',
                items: [
                    'Đôi khi chúng tôi có thể sử dụng "cookie" hoặc các tính năng khác để cho phép chúng tôi hoặc các bên thứ ba thu thập hoặc chia sthông tin sẽ\ngiúp chúng tôi cải thiện Nền tảng của mình và Các Dịch Vụ chúng ttôi cung cấp, hoặc giúp chúng tôi đưa ra các dịch vụ và tính năng nnới. "Cookie" là\ncác mã danh định chúng tôi gửi đến máy tính hoặc thiết bị di độngcủa bạn, cho phép chúng tôi nhận dạng máy tính hoặc thiết bị củabạn và cho\nchúng tôi biết khi nào Các Dịch Vụ hoặc Nền tàng được sử dụng haay truy cập, bởi bao nhiêu người và để theo dõi những hoạt động trông Các Nền\ntàng của chúng tôi. Chúng tôi có thể liên kết thông tin cookie với diữ liệu cá nhân. Cookie cũng liên kết với thông tin về những nội dungg bạn đã chọn\nđối với các trang mua sắm bạn đã xem, hoặc các game bạn đã chơi. Thông tin này được sử dụng để ví dụ như theo dõi giỏ hàng. Cookie cũng được\nsử dụng để cung cấp nội dung dựa trên quan tâm của bạn và để theo dõi việc sử dụng của các Dịch Vụ.',
                    'Bạn có thể từ chối sử dụng cookie bằng cách chọn các thiết lập thích hợp trên trình duyệt của bạn.'
                ]
            },
            {
                title: 'V. Xem và tải các nội dung và quảng cáo',
                items: [
                    'Do khi bạn xem các trang trên trang web hoặc ứng dụng di động của chúng tôi, khi bạn xem các nội dung và quảng cáo và truy cập vào các phần mềm khác trên Nền tảng của chúng tôi hoặc thông qua Dịch vụ, phần lớn các thông tin giống nhau sẽ được gửi đến cho chúng tôi (bao gồm địa chỉ IP, hệ điều hành, v.v…); nhưng, thay vì các lượt xem trang, thiết bị của bạn gửi đến chúng tôi thông tin về các nội dung, quảng cáo được xem và/hoặc phần mềm được cài đặt trên các Dịch vụ và Nền tảng và thời gian.'
                ]
            },
            {
                title: 'VI. Chúng tôi sử dụng thông tin bạn cung cấp cho chúng tôi như thế nào?',
                items: [
                    'Để xem xét và/hoặc xử lý đơn đăng ký/giao dịch của bạn với chúng tôi hoặc giao dịch hay thư từ của bạn với các bên thứ ba qua Các Dịch Vụ.',
                    'Để quản lý, điều hành, cung cấp và/hoặc quản lý việc bạn sử dụng và/hoặc truy cập Các Dịch Vụ và các Nền tảng của chúng tôi (bao gồm các sở thích của bạn), cũng như quan hệ và tài khoản người dùng của bạn với chúng tôi.',
                    'Để đáp ứng, xử lý, giải quyết hoặc hoàn tất một giao dịch và/hoặc đáp ứng các yêu cầu của bạn đối với các sản phẩm và dịch vụ nhất định và thông báo cho bạn về các vấn đề dịch vụ và các hoạt động tài khoản bất thường.',
                    'Để thực thi các Điều Khoản Dịch Vụ của chúng tôi hoặc bất kỳ thỏa thuận giấy phép người dùng cuối nào áp dụng.',
                    'Để bảo vệ sự an toàn cá nhân và các quyền, tài sản hoặc sự an toàn của người khác.',
                    'Để nhận dạng và/hoặc xác minh.',
                    'Để giải quyết hoặc tạo điều kiện dịch vụ khách hàng, thực hiện các chỉ thị của bạn, giải quyết hoặc trả lời bất kỳ thắc mắc nào được gửi bởi (hoặc nhằm được gửi bởi) bạn hoặc thay mặt bạn.',
                    'Để liên hệ với bạn hoặc liên lạc với bạn qua điện thoại, tin nhắn văn bản và/hoặc tin nhắn fax, email và/hoặc thư hoặc cách khác nhằm mục đích quản trị và/hoặc quản lý quan hệ của bạn với chúng tôi hoặc việc bạn sử dụng Các Dịch Vụ của chúng tôi, chẳng hạn như ở việc truyền đạt thông tin hành chính cho bạn liên quan đến Các Dịch Vụ của chúng tôi. Bạn xác nhận và đồng ý rằng sự liên lạc như thế của chúng tôi có thể là theo cách gửi thư qua đường bưu điện, tài liệu hoặc thông báo cho bạn, có thể gồm có tiết lộ dữ liệu cá nhân nhất định về bạn để cung cấp các tài liệu đó cũng như trên bao bì/phong bì.',
                    'Để cho phép các người dùng khác tương tác hoặc liên lạc với bạn thông qua Nền tảng, bao gồm để thông báo cho bạn khi một người dùng khác đã gửi cho bạn một tin nhắn riêng tư hoặc đăng nhận xét cho bạn trên Nền tảng.',
                    'Để tiến hành các hoạt động nghiên cứu, phân tích và phát triển (bao gồm phân tích dữ liệu, khảo sát, phát triển và/hoặc lập đặc tính sản phẩm và dịch vụ), để phân tích cách thức bạn sử dụng Các Dịch Vụ của chúng tôi, để cải thiện Các Dịch Vụ hoặc sản phẩm của chúng tôi và/hoặc để cải thiện trải nghiệm khách hàng của bạn.',
                    'Vì mục đích tiếp thị, trong trường hợp này, để gửi cho bạn qua các phương thức liên lạc khác nhau, thông tin và tài liệu tiếp thị và quảng bá liên quan đến các sản phẩm và/hoặc dịch vụ (bao gồm các sản phẩm và/hoặc dịch vụ của các bên thứ ba mà chúng tôi có thể hợp tác hoặc liên kết) có thể bán, tiếp thị hoặc quảng bá, cho dù các sản phẩm hoặc dịch vụ đó tồn tại vào lúc này hoặc được tạo ra trong tương lai. Bạn có thể hủy đăng ký nhận các thông tin tiếp thị tại bất cứ thời điểm nào bằng cách sử dụng chức năng hủy đăng ký trong các tài liệu tiếp thị điện tử. Chúng tôi có thể sử dụng các thông tin liên hệ của bạn để gửi các bản tin từ chúng tôi hoặc từ các công ty có liên quan của chúng tôi.',
                    'Để đáp ứng các thủ tục pháp lý hoặc để tuân thủ hoặc theo quy định của pháp luật hiện hành, và các yêu cầu của cơ quan nhà nước có thẩm quyền.',
                    'Để lập số liệu thống kê và nghiên cứu đáp ứng yêu cầu báo cáo và/hoặc duy trì sổ sách nội bộ hoặc theo quy chế.',
                    'Để thực hiện quy trình tìm hiểu và xác minh hoặc các hoạt động sàng lọc khác (bao gồm kiểm tra lý lịch) tuân thủ các nghĩa vụ theo quy định pháp luật hoặc quản lý hoặc các thủ tục kiểm soát rủi ro của chúng tôi, có thể được pháp luật yêu cầu hoặc có thể đã được chúng tôi áp dụng.',
                    'Để kiểm tra Các Dịch Vụ của chúng tôi hoặc hoạt động của chúng tôi.',
                    'Để ngăn chặn hoặc điều tra bất kỳ hoạt động gian lận, phi pháp, thiếu sót hay hành vi sai trái nào, cho dù đã diễn ra hay chưa, có liên quan đến việc bạn sử dụng Các Dịch Vụ của chúng tôi hay không hay bất kỳ vấn đề nào phát sinh từ quan hệ của bạn với chúng tôi.',
                    'Để lưu trữ, lập máy chủ, sao lưu (cho dù là vì mục đích khôi phục sau thảm họa hoặc mục đích khác) đối với dữ liệu cá nhân của bạn.',
                    'Bất kỳ mục đích nào mà chúng tôi thông báo cho bạn tại thời điểm xin sự cho phép của bạn.'
                ]
            },
            {
                title: 'VII. Chúng tôi bảo vệ và lưu trữ thông tin khách hàng bằng cách nào?',
                items: [
                    'Chúng tôi thực hiện các biện pháp bảo mật khác nhau và luôn nỗ lực để đảm bảo sự an toàn của dữ liệu cá nhân của bạn trên các hệ thống của chúng tôi. Dữ liệu cá nhân của người dùng được lưu trữ đằng sau các mạng bảo mật và chỉ có thể được truy cập bởi một số nhân viên có quyền truy cập đặc biệt đến các hệ thống của chúng tôi.',
                    'Chúng tôi sẽ duy trì dữ liệu cá nhân tuân theo các quy định của pháp luật về bảo vệ bí mật thông tin cá nhân và/hoặc các điều luật hiện hành khác. Có nghĩa là, chúng tôi sẽ hủy hoặc xóa thông tin nhận dạng ra khỏi dữ liệu cá nhân của bạn khi chúng tôi có lý do hợp lý để xác định rằng (i) việc lưu giữ dữ liệu cá nhân đó không còn phục vụ mục đích thu thập dữ liệu cá nhân đó nữa; (ii) việc lưu giữ không còn cần thiết cho bất kỳ mục đích hợp pháp hay mục đích kinh doanh nào và (iii) không còn các lợi ích hợp pháp nào khác để tiếp tục lưu giữ các dữ liệu cá nhân này. Nếu bạn ngưng sử dụng Nền tảng của chúng tôi, hoặc quyền của bạn được sử dụng Nền tảng và/hoặc Các Dịch Vụ bị chấm dứt hoặc hủy bỏ, chúng tôi có thể tiếp tục lưu, sử dụng và/hoặc tiết lộ dữ liệu cá nhân của bạn tuân theo Chính sách bảo mật này và các nghĩa vụ của chúng tôi theo các quy định của pháp luật về bảo vệ bí mật thông tin cá nhân. Tùy thuộc vào quy định của pháp luật, chúng tôi có thể tiêu hủy dữ liệu cá nhân của bạn một cách an toàn mà không cần thông báo trước cho bạn.'
                ]
            },
            {
                title: 'VIII. Chúng tôi có tiết lộ thông tin thu nhập từ người dùng truy cập không?',
                items: [
                    'Trong quá trình thực hiện hoạt động kinh doanh, chúng tôi sẽ/có thể cần phải tiết lộ dữ liệu cá nhân của bạn cho các nhà cung cấp dịch vụ bên thứ ba, đại lý và/hoặc các công ty liên kết hoặc công ty liên quan của chúng tôi, và/hoặc các bên thứ ba khác, vì một hay nhiều Mục Đích nói trên, và việc tiết lộ này sẽ được thực hiện theo đúng trình tự và quy định của pháp luật hiện hành. Các nhà cung cấp dịch vụ bên thứ ba, đại lý và/hoặc các công ty liên kết hoặc công ty liên quan và/hoặc các bên thứ ba khác như thế sẽ xử lý dữ liệu cá nhân của bạn hoặc thay mặt chúng tôi hoặc khác, vì một hoặc nhiều Mục Đích nói trên.',
                    'Trường hợp này có thể yêu cầu, ngoài các vấn đề khác, chia sẻ thông tin thống kê và nhân khẩu học về Người Dùng cũng như việc sử dụng Các Dịch Vụ của người dùng với đối tác cung cấp dịch vụ quảng cáo và lập trình. Chúng tôi cũng sẽ chia sẻ thông tin thống kê và thông tin nhân khẩu học về người dùng của chúng tôi và việc họ sử dụng Các Dịch Vụ với các nhà cung cấp dịch vụ quảng cáo và lập trình. Trường hợp này sẽ không bao gồm bất kỳ thông tin nào có thể được sử dụng để xác định danh tính cụ thể của bạn hoặc tiết lộ thông tin cá nhân về bạn.',
                    'Chúng tôi sẽ không tiết lộ bất kì thông tin thu thập nào từ người dùng của chúng tôi ( trừ trường hợp đặc biệt theo pháp luật quy định )'
                ]
            },
            {
                title: 'IX. Thông tin thu thập bởi bên thứ ba',
                items: [
                    '1.Nền tảng của chúng tôi sử dụng Google Analytics, một dịch vụ phân tích web được cung cấp bởi Google, Inc. (“Google”). Google Analytics sử dụng cookie, là các tập tin văn bản được đặt vào thiết bị của bạn, để giúp Nền tảng phân tích cách thức người dùng sử dụng Nền tảng của chúng tôi. Thông tin được tạo bởi cookie về việc bạn sử dụng Nền tảng (bao gồm địa chỉ IP của bạn) sẽ được gửi đến và lưu bởi Google trên các máy chủ tại Hoa Kỳ. Google sẽ sử dụng thông tin này để đánh giá việc bạn sử dụng Nền tảng của chúng tôi, soạn báo cáo về hoạt động trang web dành cho các nhà điều hành trang web và cung cấp các dịch vụ khác liên quan đến hoạt động trang web và việc sử dụng Internet. Google cũng có thể gửi thông tin này cho các bên thứ ba trong trường hợp luật pháp có quy định như thế, hoặc trường hợp các bên thứ ba đó xử lý thông tin thay mặt Google. Google sẽ không liên kết địa chỉ IP của bạn với bất kỳ dữ liệu nào khác mà Google nắm giữ.',
                    '2.Tương tự với Google Analytics, chúng tôi còn sử dụng các trình phân tích và thu thập thông tin khác như: Pixel Facebook, Pixel Tioktok …'
                ]
            }
        ]
    },

    // ================================================================
    // Case study Zalo Mini App BEAUTYVERSE (/projects/miniapp-beautysummit-2026)
    // ================================================================
    beautyverse: {
        cta: 'Triển khai mini app của bạn',

        hero: {
            title: 'Toàn bộ trải nghiệm số của sự kiện — trong một mini app.',
            descriptionPrefix:
                '19–20/06/2026 tại Trung tâm Triển lãm VEC, Hà Nội — kỳ sự kiện quy mô lớn nhất từ trước đến nay với hơn 100 thương hiệu. Sau 2 năm chứng minh bằng kết quả, Activate trở thành ',
            techPartner: 'Tech Partner chính thức',
            descriptionSuffix: ', thiết kế và vận hành toàn bộ hành trình số của khách tham dự.',
            viewScope: 'Xem phạm vi',
            platformNote: 'Vận hành trên nền tảng đã chạy 2 năm',
            stats: [
                'Khách check-in trong 2 ngày · kỷ lục chuỗi sự kiện',
                'Người dùng trải nghiệm mini app BEAUTYVERSE',
                'Thương hiệu tham gia · đổi voucher qua BPoint',
                'Lượt quan tâm zalo OA từ lúc triển khai'
            ]
        },

        problem: {
            titleMiddle: 'mà giải bài toán ',
            badge: 'Bài toán',
            titleLine1: 'Không phải xây một app —',
            titleLine2: 'giữ chân người dùng.',
            description:
                'Ban tổ chức từng hợp tác với một đơn vị công nghệ khác để phát triển mini app. Sản phẩm được xây từ góc nhìn kỹ thuật thuần túy, không đúng hành vi thực tế của tệp khách tham dự — và thất bại theo đúng một kịch bản quen thuộc:',
            oldTitle: 'Mini app cũ · góc nhìn kỹ thuật',
            oldHeadline: 'Mở app một lần, rồi thôi.',
            oldNote:
                'App trở thành một bước thủ tục — không tạo ra giá trị cho khách tham dự lẫn Ban tổ chức.',
            oldSteps: [
                'Truy cập app theo hướng dẫn tại cổng',
                'Check-in',
                'Mở app',
                'Tương tác với thương hiệu',
                'Giữ kết nối sau sự kiện'
            ],
            newTitle: 'BEAUTYVERSE · góc nhìn hành vi người dùng',
            newHeadline: 'Lý do quay lại — trước, trong và sau sự kiện.',
            newNote:
                'Mỗi tính năng là một lý do để mở lại app — retention trở thành thiết kế, không phải hy vọng.',
            newSteps: [
                'Check-in QR chỉ là điểm khởi đầu',
                'Gamification tạo nhiệm vụ theo 3 giai đoạn',
                'BPoint — tích điểm, đổi voucher từ 100+ thương hiệu',
                'Bình chọn thương hiệu · bản đồ · lịch trình real-time'
            ],
            dataYears: '2 năm',
            dataLabel: 'dữ liệu',
            dataDescription:
                'Hiểu biết tệp khách tích lũy từ quảng cáo đến check-in qua 2 kỳ sự kiện cho phép Activate thiết kế đúng hành vi thực tế của khách tham dự — thay vì đoán.'
        },

        scope: {
            badge: 'Phạm vi triển khai',
            title: 'Năm mảnh ghép của BEAUTYVERSE',
            items: [
                {
                    title: 'Check-in QR tích hợp',
                    description:
                        'Kết nối trực tiếp với hệ thống mua vé → check-in đã vận hành ổn định qua 2 kỳ sự kiện. Khách quét mã ngay trong mini app — không cần in vé, không có khâu xử lý thủ công, thông suốt cho 7.000 lượt khách trong 2 ngày.',
                    tags: ['Vé điện tử', 'Quét QR tại cổng', 'Đồng bộ hệ thống 2024–2025']
                },
                {
                    title: 'Gamification 3 giai đoạn',
                    description:
                        'Hành trình nhiệm vụ trước – trong – sau sự kiện, thiết kế từ dữ liệu hành vi thật của tệp khách. Mỗi giai đoạn có lý do mở app riêng — giải đúng điểm chết của mini app cũ: người dùng check-in xong rồi không quay lại.',
                    tags: ['Trước · Trong · Sau', 'Nhiệm vụ & phần thưởng', 'Thiết kế cho retention']
                },
                {
                    title: 'Hệ thống tích điểm BPoint',
                    description:
                        'Đơn vị tiền tệ của BEAUTYVERSE. Khách tích điểm qua nhiệm vụ và hoạt động tại sự kiện, đổi voucher từ hơn 100 thương hiệu tham gia — thương hiệu có lượt tương tác tại gian hàng, khách có quyền lợi thật, app có lý do được mở lại.',
                    tags: ['Tích điểm qua hoạt động', 'Đổi voucher 100+ thương hiệu', 'Win-win-win']
                },
                {
                    title: 'Brand Voting 4 hạng mục',
                    description:
                        'Nâng cấp từ hệ thống Beauty Award 2025, đưa trực tiếp vào mini app — tăng trải nghiệm voting dành cho các nhãn hàng tham dự sự kiện Beauty Summit.',
                    tags: ['4 hạng mục giải thưởng', 'Kế thừa Beauty Award 2025', 'Tổng hợp tự động']
                },
                {
                    title: 'Notify ZNS Zalo',
                    description:
                        'Thông báo tự động qua Zalo ZNS — tăng tỉ lệ thanh toán và nhắc lịch tự động cho khách tham dự trong suốt hành trình sự kiện.',
                    tags: ['Nhắc thanh toán tự động', 'Nhắc lịch sự kiện', 'Zalo ZNS']
                }
            ]
        },

        journey: {
            badge: 'Thiết kế trải nghiệm',
            title: 'Một hành trình — ba giai đoạn',
            description:
                'Gamification được thiết kế bám theo vòng đời của sự kiện, để mỗi giai đoạn đều có lý do mở app riêng.',
            phases: [
                {
                    label: 'Trước sự kiện',
                    title: 'Kích hoạt & làm quen',
                    items: [
                        'Nhận vé điện tử và hướng dẫn check-in ngay trong app',
                        'Nhiệm vụ gamification mở sớm — bắt đầu tích BPoint trước ngày diễn ra',
                        'Khám phá danh sách 100+ thương hiệu và lịch trình sự kiện'
                    ]
                },
                {
                    label: 'Trong sự kiện',
                    title: '2 ngày tại venue',
                    items: [
                        'Check-in QR tại cổng — kết nối hệ thống đã vận hành ổn định 2 năm',
                        'Tích BPoint qua hoạt động tại gian hàng, đổi voucher thương hiệu',
                        'Bình chọn Brand Voting 4 hạng mục · điều hướng bằng bản đồ tương tác & lịch trình real-time'
                    ]
                },
                {
                    label: 'Sau sự kiện',
                    title: 'Giữ kết nối',
                    items: [
                        'Sử dụng voucher đã đổi — lý do quay lại app sau khi rời venue',
                        'Theo dõi kết quả Brand Voting các hạng mục',
                        'Dữ liệu hành vi bổ sung vào dataset cho kỳ sự kiện kế tiếp'
                    ]
                }
            ]
        },

        platform: {
            badge: 'Nền tảng phía sau',
            titleLine1: 'Mini app đứng trên hạ tầng',
            titleLine2: 'đã chạy ổn định 2 năm',
            description:
                'BEAUTYVERSE không vận hành một mình — toàn bộ hạng mục 2024–2025 được duy trì song song trong kỳ 2026:',
            since2024: 'Từ 2024',
            since2025: 'Từ 2025',
            items2024: [
                {
                    title: 'Quảng cáo hai luồng B2B / B2C',
                    description:
                        'Bán gian hàng cho thương hiệu và bán vé cho khách tham dự — hai chiến dịch độc lập.'
                },
                {
                    title: 'Luồng vé — check-in tự động toàn trình',
                    description: 'Đăng ký → thanh toán → vé điện tử → check-in QR, không khâu thủ công..'
                },
                {
                    title: 'Notify đa kênh',
                    description:
                        'Zalo ZNS, Email, Messenger — tự động phân loại theo trạng thái khách hàng.'
                },
                {
                    title: 'Dataset khách hàng',
                    description:
                        'Cấu trúc lại sau mỗi đợt chạy — Custom & Lookalike Audience, tối ưu chi phí chuyển đổi.'
                }
            ],
            items2025: [
                {
                    title: 'Website beautysummit.vn',
                    description: 'Thông tin sự kiện, danh sách thương hiệu, luồng đăng ký mua vé.'
                },
                {
                    title: 'Hệ thống Beauty Award',
                    description:
                        'Bình chọn tự động từ đề cử đến kết quả — tiền thân của Brand Voting trong app.'
                }
            ]
        },

        result: {
            badge: 'Kết quả · 19–20/06/2026',
            title: 'Kỷ lục của chuỗi sự kiện',
            description:
                'Kỳ sự kiện lớn nhất trong lịch sử Beauty Summit Vietnam — vận hành thông suốt trên toàn bộ hệ thống do Activate phát triển: từ quảng cáo, luồng vé, đến trải nghiệm số trong app.',
            metrics: [
                'Khách check-in trong 2 ngày',
                '+75% so với năm đầu hợp tác',
                'Người dùng trải nghiệm mini app trong thời gian sự kiện',
                'Thương hiệu tham gia — quy mô lớn nhất từ trước đến nay',
                'Thiệp mời cá nhân hóa trên miniapp',
                'Check-in ra vào sự kiện',
                'Vận hành lượng khách lớn trong 2 ngày sự kiện',
                'Tăng trưởng 500% người theo dõi so với năm đầu hợp tác',
                '100+ thương hiệu tham gia, đổi voucher qua BPoint'
            ]
        },

        why: {
            titleMiddle: 'là vai trò được nâng cấp sau ',
            badge: 'Vì sao là Activate?',
            titleLine1: 'Tech Partner không phải danh xưng -',
            titleLine2: '2 năm kết quả.',
            description:
                'Ba năm liên tục cùng một khách hàng, phạm vi công việc mở rộng qua từng năm dựa trên kết quả triển khai thực tế — nền tảng dữ liệu và hiểu biết tệp khách tích lũy từ 2024 chính là lợi thế khi bước vào bài toán 2026.',
            years: [
                {
                    role: 'Đơn vị quảng cáo + automation',
                    metric: 'Khách check-in',
                    items: [
                        'Quảng cáo Facebook hai luồng B2B / B2C độc lập',
                        'Luồng mua vé → check-in QR tự động toàn trình',
                        'Thông báo đa kênh Zalo ZNS / Email / Messenger',
                        'Dataset khách hàng — Custom & Lookalike Audience'
                    ]
                },
                {
                    role: 'Đơn vị vận hành đa hệ thống',
                    metric: 'Khách check-in - +25%',
                    items: [
                        'Toàn bộ hạng mục 2024, tại thị trường miền Nam mới',
                        'Website sự kiện chính thức beautysummit.vn',
                        'Hệ thống bình chọn Beauty Award tự động — 1.000 lượt vote'
                    ]
                },
                {
                    role: 'Tech Partner chính thức',
                    metric: 'Khách check-in - kỷ lục',
                    items: [
                        'Toàn bộ nền tảng 2024–2025',
                        'Zalo Mini App BEAUTYVERSE — toàn bộ trải nghiệm số của sự kiện',
                        'Check-in QR · Gamification · BPoint · Brand Voting · Notify ZNS'
                    ]
                }
            ]
        },

        finalCta: {
            summaryHighlight: 'BEAUTYVERSE là kết quả của 2 năm dữ liệu + hiểu đúng hành vi người dùng,',
            summarySuffix: 'không phải một sản phẩm công nghệ xây từ góc nhìn kỹ thuật thuần túy.',
            badge: 'Điểm chứng minh năng lực',
            description:
                'Một khách hàng, ba năm liên tục - phạm vi và quy mô vận hành tăng qua từng năm.',
            note: 'Activate thiết kế, tích hợp và vận hành mini app theo đúng hành vi khách tham dự sự kiện.'
        }
    },

    // ================================================================
    // Trang đặt lịch Growth Call (/dat-lich)
    // ================================================================
    booking: {
        consultant: {
            bio: 'Người vận hành cỗ máy tăng trưởng của Activate — quảng cáo performance đo được từng đồng, website chuyển đổi, branding, social content và hệ thống AI tự động hoá — cho những doanh nghiệp không ngừng tiến về phía trước.',
            quote: '"30 phút không đủ để giải xong bài toán tăng trưởng của anh/chị. Nhưng đủ để chỉ đúng chỗ đang nghẽn — và đồng tiền tiếp theo nên tiêu vào đâu trước."'
        },

        bank: {
            bankLabel: 'Ngân hàng',
            accountLabel: 'Số tài khoản',
            holderLabel: 'Chủ tài khoản',
            contentLabel: 'Nội dung CK',
            depositLabel: 'Cọc giữ chỗ',
            phoneFallback: '+ SĐT của anh/chị',
            qrAlt: 'QR chuyển khoản cọc giữ chỗ'
        },

        steps: [
            {
                title: 'Chọn khung giờ & để lại thông tin',
                body: 'Pick ngày và một khung 30 phút anh/chị rảnh. Sơn xác nhận lại khung giờ khi gọi.'
            },
            {
                title: 'Cọc giữ chỗ {{deposit}} — hoàn bất kỳ lúc nào',
                body: 'Giữ đúng khung giờ của anh/chị. Đổi ý lúc nào cũng hoàn đủ, không cần lý do — kể cả đang trong cuộc gọi.'
            },
            {
                title: '30 phút 1-1 với {{name}}',
                body: 'Soi kênh đang chạy, chỉ đúng điểm nghẽn tăng trưởng, vạch một đường ưu tiên nên đầu tư trước.'
            }
        ],

        services: [
            {
                tag: 'Đo được từng đồng',
                title: 'Quảng cáo performance',
                body: 'Chạy ads đo được từng đồng ra lead thật, không đốt tiền lấy tương tác ảo. Kênh nào không chứng minh được ra tiền — cắt.'
            },
            {
                tag: 'Giữ chân người vào',
                title: 'Website chuyển đổi',
                body: 'Web không chỉ để đẹp — nó phải biến người ghé thăm thành người để lại số. Sửa đúng chỗ này, cùng lượng traffic mà lead tăng rõ rệt.'
            },
            {
                tag: 'Trực 24/7 không nghỉ',
                title: 'AI & Automation',
                body: 'Bắt khách ngoài giờ, tư vấn hàng trăm cuộc cùng lúc, đánh thức tệp khách cũ nằm im — làm những việc trước đây thuê người không nổi.'
            },
            {
                tag: 'Một bộ mặt nhất quán',
                title: 'Branding',
                body: 'Thương hiệu rõ ràng làm mọi kênh phía sau rẻ hơn: ads dễ tin hơn, web dễ chốt hơn, khách cũ dễ quay lại hơn.'
            },
            {
                tag: 'Phủ đúng kênh',
                title: 'Social content',
                body: 'Nội dung ra đều, đúng tệp, nuôi người theo dõi thành người mua — thay vì viral một lần rồi im ắng cả quý.'
            }
        ],

        agenda: [
            {
                title: 'Đọc kênh đang có',
                body: 'Trước cuộc gọi Sơn đã xem website, kênh chạy ads, cách anh/chị đang lấy khách — để vào cuộc là nói chuyện của mình, không hỏi lại từ đầu.'
            },
            {
                title: 'Chỉ đúng điểm nghẽn thật',
                body: 'Phần giá trị nhất: rất nhiều chủ doanh nghiệp tưởng mình thiếu traffic, nhưng ngồi soi ra mới thấy traffic đủ, tiền đang rơi ở khâu web không giữ khách hoặc đội chốt phản hồi chậm. Định vị đúng một chỗ nghẽn thôi là đã đáng cả buổi.'
            },
            {
                title: 'Vạch một đường ưu tiên',
                body: 'Không phải danh sách mười việc phải làm cho hoảng, mà là đồng tiền tiếp theo nên tiêu vào đâu trước để ra kết quả nhanh và đo được nhất.'
            }
        ],

        refunds: [
            {
                title: 'Trước cuộc gọi',
                body: 'Anh/chị đổi ý, bận đột xuất, cân nhắc lại, hay không vì lý do gì cả — chỉ cần nhắn một câu, Activate hoàn đủ {{deposit}} trong 24 giờ. Không hỏi ngược, không giữ chân, không một đồng phí hủy.'
            },
            {
                title: 'Đang giữa cuộc gọi',
                body: 'Cuộc gọi đã bắt đầu, nghe được mười phút, hai mươi phút, anh/chị thấy Sơn nói chưa trúng bài toán của mình — cứ nói thẳng và dừng lại ngay lúc đó. Khoản cọc hoàn về đủ, không cần ngồi cho hết buổi vì lịch sự.'
            },
            {
                title: 'Kể cả khi đã xong',
                body: 'Anh/chị đã ngồi trọn 30 phút, nghe hết mọi thứ, rồi về nghĩ lại thấy chưa phải lúc — vẫn nhắn một câu là được hoàn đủ. Đã dự buổi tư vấn không có nghĩa là đã "dùng" mất khoản cọc; buổi đó miễn phí ngay từ đầu.'
            }
        ],

        panel: {
            heading: 'Đặt buổi Growth Call với {{name}}',
            interestedService: 'Dịch vụ quan tâm: {{service}}',
            submitLabel: 'Giữ chỗ buổi Growth Call — cọc {{deposit}}',
            slotRecorded: 'Đã ghi nhận khung giờ: {{slot}}',
            sendFailedPrefix: 'Hệ thống chưa gửi được thông tin của anh/chị. Khung giờ vẫn giữ nguyên — anh/chị cứ chuyển cọc theo nội dung bên dưới, hoặc gọi thẳng ',
            sendFailedSuffix: ' để Sơn xác nhận ngay.',
            depositInstruction: ': cọc giữ chỗ {{deposit}}. Chuyển đúng nội dung bên dưới — hệ thống báo thẳng Sơn, và Sơn sẽ gọi xác nhận lịch trong hôm nay.',
            refundDetail: ' Trước buổi gọi, giữa buổi gọi, hay kể cả sau khi gọi xong mà anh/chị thấy chưa xứng đáng — nhắn một câu, Activate hoàn đủ {{deposit}}. Ký hợp đồng thì khoản này trừ thẳng vào hợp đồng.',
            prevWeek: 'Tuần trước',
            nextWeek: 'Tuần sau',
            session: 'Phiên 1-1 · 30 phút',
            pickDate: 'Chọn ngày anh/chị rảnh',
            pickSlot: 'Chọn khung giờ 30 phút',
            pickDateFirst: 'Chọn ngày trước để hiện khung giờ.',
            contactTitle: 'Thông tin để Sơn gọi đúng người',
            name: 'Họ tên',
            phone: 'Số điện thoại *',
            website: 'Website (nếu có)',
            goal: 'Anh/chị đang muốn đẩy tăng trưởng ở đâu?',
            submitting: 'Đang gửi thông tin...',
            refundNote: 'Hoàn 100% bất kỳ lúc nào, không cần lý do — kể cả trong cuộc gọi.',
            callTitle: 'Buổi Growth Call 30 phút',
            oneStepPrefix: 'Còn một bước để',
            oneStepHighlight: 'khoá đúng khung giờ này',
            refundShort: 'Hoàn bất kỳ lúc nào, không cần lý do.',
            back: 'Quay lại đặt lịch',
            orCall: 'Hoặc gọi thẳng',
            errorPrefix: 'Không gửi được thông tin đặt lịch:',
            errorSlot: 'Anh/chị chọn ngày và khung giờ trước nhé.',
            errorPhone: 'Anh/chị để lại số điện thoại để Sơn gọi xác nhận nhé.'
        },

        problem: {
            intro2: 'Và điều khó chịu nhất là: anh/chị biết mình đang chậm lại, nhưng ',
            intro1: 'Phần lớn doanh nghiệp Sơn gặp không hề yếu về sản phẩm hay dịch vụ. Món đồ tốt, tay nghề chắc, khách đã mua thì phần nhiều quay lại. Cái làm anh/chị mất ngủ không phải chất lượng — mà là ',
            badge: 'Phần 01 · Nhìn thẳng',
            title: 'Doanh nghiệp của anh/chị không thiếu năng lực — thiếu một dòng khách đều',
            highlight1: 'dòng khách lúc có lúc không',
            paragraph1:
                ': tháng này đơn về ào ào nhờ một bài viral hay một mối giới thiệu, tháng sau im ắng và không ai biết vì sao. Tăng trưởng đang phụ thuộc vào may rủi và các mối quan hệ cũ, chứ chưa phải một cỗ máy chạy đều mỗi ngày.',
            highlight2: 'không chắc đang nghẽn ở đâu',
            paragraph2:
                '. Thiếu người biết tới mình — nghẽn ở đầu phễu? Người ta vào web xong bỏ đi — nghẽn ở chuyển đổi? Khách nhắn mà đội phản hồi chậm — nghẽn ở khâu chốt? Hay hàng nghìn khách cũ nằm im trong data — nghẽn ở khâu giữ khách? Bốn chỗ nghẽn này trông từ ngoài giống hệt nhau: doanh thu không lên. Nhưng cách chữa từng chỗ khác nhau hoàn toàn.',
            paragraph3:
                'Chính vì không định vị được đúng chỗ nghẽn, nhiều anh/chị tiêu tiền sai chỗ mà không hay: đổ ngân sách chạy thêm quảng cáo kéo traffic, trong khi vấn đề thật nằm ở cái web không giữ chân được người vào. Hoặc thuê thêm sale để chốt, trong khi cái thiếu là nguồn lead đổ vào để có mà chốt. Tiền vẫn tiêu đều, mà cây kim doanh thu không nhúc nhích.',
            paragraph4:
                'Đa số doanh nghiệp không thua vì làm ít. Họ thua vì làm nhiều thứ cùng lúc, dàn mỏng tiền vào chỗ không phải điểm nghẽn thật.'
        },

        growth: {
            descriptionPrefix: 'Tăng trưởng không phải phép màu chỉ vài người có duyên mới làm được. Nó là một bài toán kỹ thuật — có đầu vào, có đầu ra, đo được từng bước. Nguyên tắc của Activate: chỉ giữ lại những kênh ',
            badge: 'Phần 02 · Tin vui',
            title: 'Tăng trưởng là bài toán có lời giải — bằng những con số đo được',
            highlight: 'chứng minh được ra tiền bằng số',
            description:
                ', và cắt thẳng tay phần còn lại. Đây là bộ vũ khí Sơn sẽ soi cùng anh/chị, xem cái nào hợp với bài toán của mình:'
        },

        callAgenda: {
            closing: 'Anh/chị rời cuộc gọi với một thứ rõ ràng trong đầu: mình đang nghẽn ở đâu, và bước kế tiếp là gì. Dù sau đó có làm cùng Activate hay không, cái nhìn đó là của anh/chị giữ. Đó là lý do Sơn dám để khoản cọc ',
            badge: 'Phần 03 · 30 phút làm được gì',
            title: 'Một buổi 30 phút đủ để đổi hướng cả năm tới',
            description:
                '30 phút không dài, nên buổi Growth Call này không lan man. Sơn không kể lý thuyết tăng trưởng — mà soi thẳng vào bài toán của riêng anh/chị và làm đúng ba việc:',
            refundHighlight: 'hoàn lại bất kỳ lúc nào',
            refundSuffix:
                '— nếu 30 phút không cho anh/chị được điều đó, anh/chị không nợ Activate một đồng nào.'
        },

        deposit: {
            title: 'Miễn phí thật — vì cọc {{depositShort}} hoàn được cả sau khi buổi gọi đã xong',
            paragraph1: 'Nghe hơi ngược: buổi tư vấn miễn phí, sao lại có cọc? Lý do rất thẳng. Lịch của Sơn mỗi tuần chỉ có vài buổi 1-1 như thế này. Khi thứ gì đó dán nhãn "miễn phí" và "đăng ký một cú click", một nửa người đăng ký sẽ quên, sẽ bận, sẽ không bắt máy — và khung giờ đó chết, trong khi một anh/chị thật sự cần thì không đặt được. Khoản cọc {{deposit}} lọc ra đúng những người nghiêm túc, để buổi nào diễn ra cũng là buổi đáng.',
            paragraph2Prefix: 'Nhưng đây là chỗ nhiều anh/chị hiểu nhầm, nên nói cho thật rõ: ',
            notAFee: '{{deposit}} không phải là tiền mua buổi tư vấn',
            lastPrefix: 'Activate chỉ giữ lại {{deposit}} trong đúng ',
            lastMiddle: ' trường hợp: hai bên đi tiếp và ký hợp đồng triển khai — mà khi đó khoản này được trừ thẳng vào giá trị hợp đồng, nên anh/chị vẫn không mất thêm một đồng nào. Mọi trường hợp còn lại, tiền là của anh/chị. Đó là lý do đây là ',
            badge: 'Phần 04 · Vì sao có cọc',
            freeWord: 'miễn phí',
            oneClick: 'đăng ký một cú click',
            spendWord: 'tiêu',
            description:
                '— buổi tư vấn vốn đã miễn phí. Nó chỉ là tiền đặt chỗ giữ đúng khung giờ. Việc anh/chị có tham gia cuộc gọi hay không, có ngồi hết 30 phút hay không, đều KHÔNG "tiêu" mất khoản cọc. Nó vẫn nguyên là của anh/chị — và anh/chị có toàn quyền đòi lại, ở bất kỳ mốc nào dưới đây:',
            oneWord: 'một',
            trulyFree: 'miễn phí thật',
            trulyFreeSuffix: ', chứ không phải miễn phí kèm điều kiện giấu ở dòng chữ nhỏ.'
        },

        profile: {
            badge2: 'Miễn phí · Cọc {{depositShort}} hoàn bất kỳ lúc nào',
            depositPrefix: '{{deposit}} chỉ là cọc giữ chỗ — hoàn đủ 100% ',
            badge: 'Hồ sơ buổi tư vấn',
            callLabel: 'Buổi Growth Call',
            noFee: 'không tính phí tư vấn',
            anyTime: 'bất kỳ lúc nào',
            refundSuffix:
                ': trước buổi gọi, giữa buổi gọi, hay kể cả sau khi gọi xong mà anh/chị thấy chưa xứng đáng. Ký hợp đồng thì trừ thẳng vào hợp đồng.'
        },

        finalCta: {
            heading: 'Đặt buổi Growth Call 30 phút với {{name}}',
            notePrefix: 'Mọi thứ ở trên chỉ thành giá trị khi được áp vào đúng bài toán của chính anh/chị. Nhớ: ',
            depositNotFee: '{{deposit}} là cọc, không phải phí',
            orCall: 'Hoặc gọi thẳng ',
            firstStep: 'Bước đầu tiên',
            refundSuffix: '— hoàn đủ 100% bất kỳ lúc nào, kể cả đang trong cuộc gọi.',
            pickSlot: 'Chọn khung giờ đặt lịch',
            depositNow: 'Cọc giữ chỗ ngay — Sơn gọi trong hôm nay',
            refundNote:
                'Hoàn 100% bất kỳ lúc nào, không cần lý do — kể cả trong cuộc gọi. Khoản cọc trừ thẳng vào giá trị hợp đồng khi ký.'
        }
    },

    notFound: {
        seoTitle: 'Không tìm thấy trang | Activate',
        seoDescription: 'Đường dẫn bạn truy cập không tồn tại hoặc đã được chuyển sang địa chỉ khác.',
        title: 'Trang này không tồn tại',
        description:
            'Đường dẫn có thể đã đổi địa chỉ, bị gõ sai hoặc không còn được dùng nữa. Bạn thử quay lại hoặc đi tới một trong những trang bên dưới nhé.',
        homeCta: 'Về trang chủ',
        backCta: 'Quay lại trang trước',
        links: {
            about: {title: 'Giới thiệu', description: 'Giới thiệu tổng quan về Activate'},
            fields: {title: 'Lĩnh vực hoạt động', description: 'Bán buôn, xuất nhập khẩu và đại lý phân phối.'},
            contact: {title: 'Liên hệ hợp tác', description: 'Gửi đề xuất hợp tác tới Activate.'},
            news: {title: 'Tin tức', description: 'Tin tức doanh nghiệp và góc nhìn thị trường.'}
        }
    }
};
