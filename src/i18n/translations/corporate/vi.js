// src/i18n/translations/corporate/vi.js
// Nội dung hồ sơ doanh nghiệp Activate (website B2B, không bán lẻ online).
// Gắn vào từ điển chính dưới khoá `corporate` - xem ../vi.js.
// Lưu ý: KHÔNG đưa số liệu quy mô (diện tích kho, số đối tác...) vào đây khi chưa
// có số liệu thật - website phục vụ thẩm định của ngân hàng và đối tác.
export default {
    nav: {
        about: 'Giới thiệu',
        fields: 'Lĩnh vực hoạt động',
        fieldsOverview: 'Tổng quan lĩnh vực',
        news: 'Tin tức',
        contact: 'Liên hệ'
    },

    cta: {
        partner: 'Liên hệ hợp tác',
        profile: 'Tải hồ sơ năng lực',
        learnMore: 'Xem chi tiết',
        aboutMore: 'Tìm hiểu về Activate',
        fieldDetail: 'Xem chi tiết lĩnh vực',
        sendProposal: 'Gửi đề xuất hợp tác'
    },

    legal: {
        title: 'Thông tin pháp nhân',
        activities: 'Lĩnh vực hoạt động',
        activitiesValue: 'Bán buôn · Bán lẻ · Đại lý · Xuất nhập khẩu',
        headquarters: 'Trụ sở chính'
    },

    footer: {
        tagline: 'Thương mại · Phân phối · Xuất nhập khẩu',
        about: 'Activate là thương hiệu của CIVI GLOBAL COMPANY LIMITED - doanh nghiệp hoạt động trong lĩnh vực thương mại bán buôn, xuất nhập khẩu và đại lý phân phối.',
        fieldsTitle: 'Lĩnh vực hoạt động',
        companyTitle: 'Doanh nghiệp',
        profileTitle: 'Hồ sơ doanh nghiệp',
        profileDescription:
            'Tải hồ sơ năng lực để tìm hiểu đầy đủ về pháp nhân, năng lực và quy trình hợp tác của Activate.',
        links: {
            about: 'Giới thiệu',
            fields: 'Lĩnh vực hoạt động',
            news: 'Tin tức',
            contact: 'Liên hệ hợp tác',
            privacy: 'Chính sách bảo mật'
        }
    },

    ctaBand: {
        badge: 'Hợp tác cùng Activate',
        title: 'Sẵn sàng trở thành đối tác của Activate?',
        description:
            'Tải hồ sơ năng lực để tìm hiểu chi tiết, hoặc gửi đề xuất hợp tác để đội ngũ phát triển đối tác liên hệ trực tiếp với Quý doanh nghiệp.'
    },

    // Biểu mẫu tiếp nhận đề xuất hợp tác (cổng thông tin đối tác)
    form: {
        title: 'Gửi đề xuất hợp tác',
        description:
            'Activate chào đón nhà sản xuất, nhà cung cấp, nhà phân phối, đại lý và tổ chức tài chính cùng hợp tác. Quý đối tác vui lòng để lại thông tin - bộ phận phát triển đối tác sẽ liên hệ lại trong thời gian sớm nhất.',
        requiredNote: 'Các trường có dấu * là bắt buộc.',
        name: 'Người liên hệ',
        namePlaceholder: 'Họ và tên',
        position: 'Chức vụ',
        positionPlaceholder: 'VD: Giám đốc kinh doanh',
        company: 'Tên doanh nghiệp',
        companyPlaceholder: 'Tên pháp nhân hoặc thương hiệu',
        taxId: 'Mã số thuế',
        taxIdPlaceholder: 'Không bắt buộc',
        phone: 'Số điện thoại',
        phonePlaceholder: 'VD: 0912 345 678',
        email: 'Email',
        emailPlaceholder: 'email@congty.com',
        type: 'Hình thức hợp tác',
        typePlaceholder: 'Chọn hình thức hợp tác',
        types: {
            supplier: 'Cung ứng hàng hoá (nhà sản xuất / nhà cung cấp)',
            distribution: 'Phân phối / làm đại lý',
            trade: 'Uỷ thác xuất nhập khẩu',
            finance: 'Hợp tác tài chính - ngân hàng',
            other: 'Hợp tác khác'
        },
        message: 'Nội dung đề xuất',
        messagePlaceholder: 'Ngành hàng, quy mô, thị trường mục tiêu và mong muốn hợp tác...',
        consentPrefix: 'Tôi đồng ý để Activate xử lý thông tin theo ',
        consentLink: 'Chính sách bảo mật',
        submit: 'Gửi đề xuất',
        submitting: 'Đang gửi...',
        success:
            'Activate đã nhận được đề xuất của Quý đối tác. Bộ phận phát triển đối tác sẽ liên hệ lại trong thời gian sớm nhất.',
        error: 'Chưa gửi được đề xuất. Vui lòng thử lại hoặc liên hệ trực tiếp qua hotline / email.',
        audiencesTitle: 'Chúng tôi tiếp nhận đề xuất từ',
        audiences: [
            'Nhà sản xuất & nhà cung cấp trong nước, quốc tế',
            'Nhà phân phối, đại lý và chuỗi bán lẻ',
            'Ngân hàng & tổ chức tài chính',
            'Đối tác logistics và dịch vụ thương mại'
        ]
    },

    // Ba lĩnh vực hoạt động (ba trụ cột năng lực). Mỗi lĩnh vực có trang riêng.
    fields: {
        wholesale: {
            name: 'Thương mại & Phân phối bán buôn',
            shortName: 'Bán buôn & Phân phối',
            label: 'Wholesale & Distribution',
            menuDescription: 'Cung ứng quy mô lớn, bao phủ thị trường',
            summary:
                'Activate cung ứng hàng hoá quy mô lớn cho nhà phân phối, đại lý và doanh nghiệp bán lẻ trong các nhóm hàng tiêu dùng, gia dụng, thời trang và sản phẩm kỹ thuật. Nhờ nguồn hàng được lựa chọn kỹ lưỡng và kế hoạch dự trữ chủ động, chúng tôi giúp đối tác duy trì nguồn cung ổn định, tối ưu chi phí nhập hàng và mở rộng độ phủ thị trường mà không phải gánh rủi ro tồn kho.',
            values: ['Nguồn cung ổn định', 'Giá bán buôn minh bạch', 'Mở rộng độ phủ kênh', 'Giảm rủi ro tồn kho'],
            partners: 'Nhà phân phối khu vực, đại lý cấp 1 - cấp 2, chuỗi bán lẻ và doanh nghiệp thương mại.',
            hero: {
                titleLine1: 'THƯƠNG MẠI &',
                titleLine2: 'PHÂN PHỐI BÁN BUÔN',
                description:
                    'Năng lực cung ứng quy mô lớn và bao phủ thị trường - giúp nhà phân phối, đại lý và doanh nghiệp bán lẻ chủ động nguồn hàng, ổn định chi phí và tập trung phát triển kênh bán.',
                bullets: [
                    'Cung ứng theo kế hoạch cho các nhóm hàng tiêu dùng, gia dụng, thời trang và sản phẩm kỹ thuật.',
                    'Chính sách giá bán buôn minh bạch, thống nhất theo sản lượng và kỳ hạn hợp đồng.',
                    'Kiểm soát chất lượng theo lô, đầy đủ hoá đơn và chứng từ nguồn gốc.',
                    'Đồng hành mở rộng độ phủ kênh phân phối theo từng khu vực.'
                ]
            },
            scope: {
                badge: 'Phạm vi cung ứng',
                items: ['Hàng tiêu dùng', 'Đồ gia dụng', 'Thời trang & phụ kiện', 'Sản phẩm kỹ thuật']
            },
            benefits: {
                badge: 'Wholesale & Distribution',
                title: 'Giá trị mang lại cho đối tác',
                items: [
                    {
                        title: 'Chủ động nguồn hàng',
                        description:
                            'Kế hoạch cung ứng được thống nhất theo chu kỳ kinh doanh của đối tác, hạn chế tình trạng đứt hàng vào mùa cao điểm.',
                        impact: 'Nguồn cung ổn định'
                    },
                    {
                        title: 'Tối ưu chi phí nhập hàng',
                        description:
                            'Gom đơn và đàm phán sản lượng lớn với nhà sản xuất giúp đối tác tiếp cận mức giá bán buôn cạnh tranh, minh bạch.',
                        impact: 'Chi phí cạnh tranh'
                    },
                    {
                        title: 'Giảm áp lực tồn kho',
                        description:
                            'Activate chủ động dự trữ và giao hàng theo đợt, giúp đối tác nhập đúng lượng cần bán và xoay vòng vốn nhanh hơn.',
                        impact: 'Vốn lưu động hiệu quả'
                    },
                    {
                        title: 'Mở rộng độ phủ thị trường',
                        description:
                            'Hỗ trợ đối tác phát triển thêm điểm bán, khu vực mới bằng nguồn hàng sẵn sàng và chính sách kênh nhất quán.',
                        impact: 'Tăng trưởng bền vững'
                    }
                ]
            },
            models: {
                badge: 'Mô hình hợp tác',
                title: 'Linh hoạt theo quy mô của đối tác',
                items: [
                    {
                        title: 'Bán buôn theo đơn hàng',
                        subtitle: 'Phù hợp đối tác mới, nhu cầu theo mùa vụ',
                        points: ['Đặt hàng theo từng đợt', 'Báo giá theo sản lượng thực tế', 'Thanh toán theo từng đơn']
                    },
                    {
                        title: 'Hợp đồng cung ứng dài hạn',
                        subtitle: 'Phù hợp nhà phân phối, chuỗi bán lẻ',
                        points: [
                            'Kế hoạch cung ứng theo quý / năm',
                            'Giá và chính sách ổn định theo hợp đồng',
                            'Ưu tiên phân bổ hàng mùa cao điểm'
                        ]
                    },
                    {
                        title: 'Phân phối khu vực',
                        subtitle: 'Phù hợp đối tác muốn phát triển thị trường',
                        points: [
                            'Phân vùng thị trường rõ ràng',
                            'Chính sách kênh thống nhất',
                            'Đồng hành phát triển điểm bán mới'
                        ]
                    }
                ]
            },
            process: {
                title: 'Quy trình cung ứng bán buôn',
                subtitle: 'Minh bạch từ khâu tiếp nhận nhu cầu đến đối soát sau giao hàng.',
                steps: [
                    {
                        title: 'Tiếp nhận nhu cầu',
                        items: ['Trao đổi ngành hàng, sản lượng và khu vực phân phối', 'Xác định tiêu chuẩn chất lượng, đóng gói']
                    },
                    {
                        title: 'Báo giá & ký kết',
                        items: ['Báo giá theo sản lượng và kỳ hạn', 'Thống nhất điều khoản giao nhận, thanh toán', 'Ký kết hợp đồng nguyên tắc']
                    },
                    {
                        title: 'Cung ứng & kiểm định',
                        items: ['Tổ chức nguồn hàng theo kế hoạch', 'Kiểm tra chất lượng theo lô', 'Hoàn thiện hoá đơn, chứng từ']
                    },
                    {
                        title: 'Giao nhận & đối soát',
                        items: ['Giao hàng theo lịch đã thống nhất', 'Nghiệm thu, đối soát công nợ', 'Chăm sóc và điều chỉnh kế hoạch kỳ sau']
                    }
                ]
            }
        },

        trade: {
            name: 'Xuất nhập khẩu & Thương mại quốc tế',
            shortName: 'Xuất nhập khẩu',
            label: 'Global Sourcing & Trade',
            menuDescription: 'Kết nối chuỗi cung ứng toàn cầu',
            summary:
                'Activate kết nối đối tác với chuỗi cung ứng toàn cầu: tìm kiếm và thẩm định nhà sản xuất, đàm phán thương mại, thực hiện thủ tục thông quan và điều phối logistics đa phương thức bằng đường biển, đường hàng không và đường bộ. Đối tác nhận hàng đúng tiêu chuẩn, đúng tiến độ, kèm bộ chứng từ xuất xứ - chất lượng đầy đủ và chi phí logistics được tối ưu.',
            values: ['Thẩm định nhà cung cấp', 'Thông quan trọn gói', 'Logistics đa phương thức', 'Chứng từ đầy đủ'],
            partners: 'Doanh nghiệp cần nhập khẩu nguồn hàng, nhà sản xuất muốn xuất khẩu và đối tác uỷ thác xuất nhập khẩu.',
            hero: {
                titleLine1: 'XUẤT NHẬP KHẨU &',
                titleLine2: 'THƯƠNG MẠI QUỐC TẾ',
                description:
                    'Cầu nối giữa đối tác Việt Nam và chuỗi cung ứng toàn cầu - từ tìm nguồn, đàm phán, thông quan đến vận chuyển đa phương thức, với chứng từ minh bạch ở mọi khâu.',
                bullets: [
                    'Tìm kiếm, đánh giá và thẩm định nhà sản xuất, nhà cung cấp quốc tế.',
                    'Đàm phán thương mại, soạn thảo hợp đồng ngoại thương và điều kiện giao hàng.',
                    'Thực hiện thủ tục hải quan, kiểm tra chuyên ngành và chứng từ xuất xứ.',
                    'Điều phối logistics đường biển, đường hàng không và đường bộ.'
                ]
            },
            scope: {
                badge: 'Phạm vi dịch vụ',
                items: ['Tìm nguồn & thẩm định', 'Đàm phán & hợp đồng', 'Thông quan & chứng từ', 'Logistics đa phương thức']
            },
            benefits: {
                badge: 'Global Sourcing & Trade',
                title: 'Giá trị mang lại cho đối tác',
                items: [
                    {
                        title: 'Nguồn hàng đã được thẩm định',
                        description:
                            'Nhà cung cấp được đánh giá về năng lực sản xuất, pháp lý và chất lượng trước khi giao dịch, giảm rủi ro cho đối tác.',
                        impact: 'Giảm rủi ro giao dịch'
                    },
                    {
                        title: 'Thông quan nhanh, đúng quy định',
                        description:
                            'Hồ sơ hải quan và kiểm tra chuyên ngành được chuẩn bị đầy đủ từ trước, hạn chế phát sinh thời gian lưu kho bãi.',
                        impact: 'Rút ngắn thời gian'
                    },
                    {
                        title: 'Tối ưu chi phí logistics',
                        description:
                            'Lựa chọn phương thức và tuyến vận chuyển phù hợp với từng lô hàng, cân bằng giữa chi phí và tiến độ.',
                        impact: 'Chi phí hợp lý'
                    },
                    {
                        title: 'Một đầu mối xuyên suốt',
                        description:
                            'Một đầu mối phụ trách từ đặt hàng đến khi hàng về kho, cập nhật tiến độ chủ động cho đối tác.',
                        impact: 'Kiểm soát tiến độ'
                    }
                ]
            },
            models: {
                badge: 'Mô hình hợp tác',
                title: 'Phù hợp nhiều nhu cầu thương mại quốc tế',
                items: [
                    {
                        title: 'Nhập khẩu trọn gói',
                        subtitle: 'Activate đứng tên nhập khẩu và cung ứng lại',
                        points: ['Tìm nguồn và đàm phán thay đối tác', 'Thông quan, nộp thuế, kiểm tra chuyên ngành', 'Giao hàng tận kho đối tác']
                    },
                    {
                        title: 'Uỷ thác xuất nhập khẩu',
                        subtitle: 'Đối tác đã có nguồn hàng hoặc khách hàng',
                        points: ['Thực hiện thủ tục thay đối tác', 'Chuẩn bị chứng từ xuất xứ, chất lượng', 'Phí uỷ thác minh bạch theo hợp đồng']
                    },
                    {
                        title: 'Hỗ trợ xuất khẩu',
                        subtitle: 'Dành cho nhà sản xuất Việt Nam',
                        points: ['Kết nối người mua quốc tế', 'Hướng dẫn tiêu chuẩn thị trường nhập khẩu', 'Điều phối vận chuyển quốc tế']
                    }
                ]
            },
            process: {
                title: 'Quy trình xuất nhập khẩu',
                subtitle: 'Mỗi lô hàng được theo dõi theo từng mốc, minh bạch với đối tác.',
                steps: [
                    {
                        title: 'Tìm nguồn & thẩm định',
                        items: ['Xác định yêu cầu hàng hoá và tiêu chuẩn', 'Đánh giá, thẩm định nhà cung cấp']
                    },
                    {
                        title: 'Đàm phán & hợp đồng',
                        items: ['Đàm phán giá, điều kiện giao hàng (Incoterms)', 'Ký kết hợp đồng ngoại thương', 'Thống nhất phương thức thanh toán quốc tế']
                    },
                    {
                        title: 'Vận chuyển & thông quan',
                        items: ['Đặt chỗ và điều phối vận chuyển', 'Khai báo hải quan, kiểm tra chuyên ngành', 'Hoàn thiện chứng từ xuất xứ, chất lượng']
                    },
                    {
                        title: 'Giao hàng & quyết toán',
                        items: ['Vận chuyển nội địa về kho đối tác', 'Nghiệm thu hàng hoá', 'Bàn giao bộ chứng từ, quyết toán chi phí']
                    }
                ]
            }
        },

        agency: {
            name: 'Đại lý & Giải pháp bán lẻ trung gian',
            shortName: 'Đại lý & Bán lẻ trung gian',
            label: 'Retail Solutions & Agency',
            menuDescription: 'Phát triển mạng lưới đại lý, điểm bán',
            summary:
                'Với vai trò cầu nối trung gian, Activate đại diện nhà sản xuất và thương hiệu phát triển mạng lưới đại lý, điểm bán và chuỗi cửa hàng chuyên doanh. Chúng tôi chuẩn hoá chính sách kênh, hỗ trợ trưng bày và đào tạo điểm bán - giúp sản phẩm của đối tác tiếp cận người tiêu dùng nhanh hơn với chi phí phát triển thị trường hợp lý.',
            values: ['Mạng lưới đại lý', 'Chính sách kênh chuẩn hoá', 'Hỗ trợ trưng bày', 'Đào tạo điểm bán'],
            partners: 'Nhà sản xuất, thương hiệu muốn mở rộng kênh bán và các cửa hàng, đại lý muốn hợp tác phân phối.',
            hero: {
                titleLine1: 'ĐẠI LÝ &',
                titleLine2: 'GIẢI PHÁP BÁN LẺ TRUNG GIAN',
                description:
                    'Cầu nối giữa nhà sản xuất và điểm bán - Activate phát triển mạng lưới đại lý, cửa hàng chuyên doanh và chuẩn hoá vận hành kênh để sản phẩm đến tay người tiêu dùng nhanh hơn.',
                bullets: [
                    'Đại diện thương hiệu tuyển chọn và phát triển mạng lưới đại lý, điểm bán.',
                    'Xây dựng chính sách kênh: chiết khấu, công nợ, khu vực, hỗ trợ bán hàng.',
                    'Hỗ trợ trưng bày, ấn phẩm và đào tạo đội ngũ tại điểm bán.',
                    'Theo dõi sức bán, tồn kho và phản hồi thị trường cho nhà sản xuất.'
                ]
            },
            scope: {
                badge: 'Phạm vi hoạt động',
                items: ['Tuyển chọn đại lý', 'Chính sách kênh', 'Trưng bày & đào tạo', 'Chăm sóc điểm bán']
            },
            benefits: {
                badge: 'Retail Solutions & Agency',
                title: 'Giá trị mang lại cho đối tác',
                items: [
                    {
                        title: 'Vào thị trường nhanh hơn',
                        description:
                            'Tận dụng mạng lưới và kinh nghiệm phát triển kênh của Activate thay vì tự xây dựng đội ngũ bán hàng từ đầu.',
                        impact: 'Rút ngắn thời gian'
                    },
                    {
                        title: 'Kênh phân phối có kỷ luật',
                        description:
                            'Chính sách giá, khu vực và chiết khấu được chuẩn hoá, hạn chế xung đột kênh và phá giá giữa các đại lý.',
                        impact: 'Giữ ổn định giá'
                    },
                    {
                        title: 'Điểm bán được hỗ trợ đầy đủ',
                        description:
                            'Đại lý được hỗ trợ trưng bày, tài liệu sản phẩm và đào tạo, giúp sản phẩm được giới thiệu đúng và nhất quán.',
                        impact: 'Hình ảnh thương hiệu nhất quán'
                    },
                    {
                        title: 'Thông tin thị trường minh bạch',
                        description:
                            'Báo cáo định kỳ về sức bán, tồn kho và phản hồi khách hàng để nhà sản xuất điều chỉnh kế hoạch kịp thời.',
                        impact: 'Ra quyết định chính xác'
                    }
                ]
            },
            models: {
                badge: 'Mô hình hợp tác',
                title: 'Dành cho nhà sản xuất và điểm bán',
                items: [
                    {
                        title: 'Đại lý phân phối',
                        subtitle: 'Activate phân phối sản phẩm của thương hiệu',
                        points: ['Phân phối theo khu vực thống nhất', 'Chính sách kênh do hai bên cùng xây dựng', 'Báo cáo sức bán định kỳ']
                    },
                    {
                        title: 'Phát triển mạng lưới đại lý',
                        subtitle: 'Activate tuyển chọn và quản lý đại lý',
                        points: ['Tuyển chọn, thẩm định đại lý', 'Ký kết và quản lý hợp đồng đại lý', 'Giám sát tuân thủ chính sách kênh']
                    },
                    {
                        title: 'Hợp tác cửa hàng chuyên doanh',
                        subtitle: 'Dành cho cửa hàng, chuỗi bán lẻ',
                        points: ['Nguồn hàng chính hãng, ổn định', 'Hỗ trợ trưng bày và đào tạo', 'Chính sách đổi trả rõ ràng']
                    }
                ]
            },
            process: {
                title: 'Quy trình phát triển kênh',
                subtitle: 'Mỗi đại lý, điểm bán đều được tuyển chọn và đồng hành theo một quy trình thống nhất.',
                steps: [
                    {
                        title: 'Khảo sát & định hướng',
                        items: ['Đánh giá sản phẩm và thị trường mục tiêu', 'Xác định mô hình kênh phù hợp']
                    },
                    {
                        title: 'Xây dựng chính sách',
                        items: ['Chính sách giá, chiết khấu, công nợ', 'Phân vùng khu vực phân phối', 'Bộ tài liệu và tiêu chuẩn điểm bán']
                    },
                    {
                        title: 'Phát triển điểm bán',
                        items: ['Tuyển chọn và ký kết đại lý', 'Trưng bày, đào tạo đội ngũ bán hàng', 'Cung ứng hàng đợt đầu']
                    },
                    {
                        title: 'Vận hành & tối ưu',
                        items: ['Theo dõi sức bán, tồn kho', 'Chăm sóc và đánh giá đại lý định kỳ', 'Báo cáo và đề xuất điều chỉnh']
                    }
                ]
            }
        },

        // Nội dung dùng chung cho cả ba trang lĩnh vực
        shared: {
            why: {
                titleLine1: 'Vì sao đối tác chọn',
                subtitle: 'Uy tín được xây dựng bằng sự minh bạch và nhất quán trong từng giao dịch.',
                intro:
                    'Activate vận hành như một đối tác thương mại dài hạn: rõ ràng về pháp lý, kỷ luật trong vận hành và cam kết thực thi đến cùng.',
                badges: ['Minh bạch', 'Giữ chữ tín', 'Đồng hành dài hạn'],
                cards: {
                    legal: {
                        title: 'Pháp lý minh bạch',
                        description:
                            'Pháp nhân rõ ràng, đúng ngành nghề đăng ký. Hợp đồng, hoá đơn điện tử và chứng từ đầy đủ cho mọi giao dịch.'
                    },
                    quality: {
                        title: 'Kiểm soát chất lượng',
                        description: 'Kiểm tra theo lô, hồ sơ truy xuất nguồn gốc đi kèm từng lô hàng.'
                    },
                    contact: {
                        title: 'Đầu mối riêng',
                        description: 'Mỗi đối tác có đầu mối phụ trách, cập nhật tiến độ chủ động và phản hồi nhanh.'
                    },
                    taxLabel: 'Mã số thuế',
                    taxCaption: 'Sẵn sàng cung cấp hồ sơ pháp lý phục vụ thẩm định'
                }
            },
            commitments: {
                badge: 'Cam kết',
                title: 'Cam kết của Activate với đối tác',
                items: [
                    {description: 'Mọi giao dịch đều có hợp đồng rõ ràng, điều khoản minh bạch và được ký kết trước khi triển khai.'},
                    {description: 'Hàng hoá có nguồn gốc xuất xứ rõ ràng, đầy đủ hoá đơn và chứng từ hợp lệ.'},
                    {description: 'Kiểm soát chất lượng theo lô trước khi giao, lưu hồ sơ truy xuất nguồn gốc.'},
                    {description: 'Giao hàng đúng tiến độ đã thống nhất; chủ động thông báo sớm khi có phát sinh.'},
                    {description: 'Bảo mật tuyệt đối thông tin thương mại, giá và khách hàng của đối tác.'},
                    {description: 'Mỗi đối tác có đầu mối phụ trách riêng, phản hồi trong giờ làm việc.'},
                    {
                        description: 'Trường hợp phát sinh sai lệch về hàng hoá hoặc tiến độ, Activate cam kết:',
                        subCommitments: [
                            'Phối hợp xác minh nguyên nhân và lập biên bản minh bạch',
                            'Đổi, bổ sung hàng hoặc bồi hoàn theo điều khoản hợp đồng',
                            'Rà soát quy trình để không tái diễn'
                        ]
                    }
                ]
            }
        }
    },

    home: {
        hero: {
            badge: 'Thương mại · Phân phối · Xuất nhập khẩu',
            slogan: 'Kết nối nguồn cung. Kích hoạt thị trường.',
            description:
                'Activate là thương hiệu thương mại của CIVI GLOBAL COMPANY LIMITED - cầu nối tin cậy giữa nhà sản xuất, nhà cung cấp và thị trường, vận hành trên nền tảng pháp lý minh bạch và quy trình chuẩn hoá.',
            facts: {
                legal: 'Pháp nhân',
                taxId: 'Mã số thuế',
                headquarters: 'Trụ sở',
                headquartersValue: 'Hà Nội, Việt Nam'
            }
        },
        about: {
            badge: 'Về chúng tôi',
            titleLine1: 'Đối tác thương mại',
            titleLine2: 'xây dựng trên chữ tín',
            description:
                'Activate được thành lập với một mục tiêu rõ ràng: trở thành đối tác thương mại mà nhà sản xuất, nhà phân phối và tổ chức tài chính có thể đặt niềm tin lâu dài. Chúng tôi không chạy theo giao dịch ngắn hạn, mà tập trung xây dựng quan hệ hợp tác bền vững - nơi mỗi hợp đồng, mỗi lô hàng và mỗi chứng từ đều minh bạch, đúng cam kết.',
            visionLabel: 'Tầm nhìn',
            vision:
                'Trở thành doanh nghiệp thương mại và phân phối đáng tin cậy hàng đầu, kết nối hàng hoá chất lượng giữa Việt Nam và thị trường quốc tế.',
            missionLabel: 'Sứ mệnh',
            mission:
                'Rút ngắn khoảng cách từ nhà sản xuất đến thị trường bằng năng lực cung ứng ổn định, quy trình chuẩn hoá và sự tuân thủ pháp lý nghiêm ngặt.'
        },
        fields: {
            badge: 'Lĩnh vực hoạt động',
            title: 'Ba trụ cột năng lực',
            descriptionLabel: 'Mô tả',
            valuesLabel: 'Giá trị cho đối tác',
            partnersLabel: 'Đối tác phù hợp'
        },
        values: {
            badge: 'Giá trị cốt lõi',
            title: 'Ba cam kết làm nên chữ tín',
            items: [
                {
                    title: 'Minh bạch',
                    description:
                        'Pháp nhân rõ ràng, hợp đồng - hoá đơn - chứng từ đầy đủ. Mọi điều khoản hợp tác được thống nhất bằng văn bản và công khai với đối tác.',
                    impact: 'Rõ ràng trong mọi giao dịch'
                },
                {
                    title: 'Giữ chữ tín',
                    description:
                        'Chỉ cam kết những gì có thể thực hiện, và chịu trách nhiệm đến cùng về chất lượng, số lượng cũng như tiến độ của từng đơn hàng.',
                    impact: 'Nói được - làm được'
                },
                {
                    title: 'Đồng hành dài hạn',
                    description:
                        'Đặt lợi ích bền vững của đối tác làm trọng tâm: chính sách ổn định, chia sẻ thông tin thị trường và cùng tháo gỡ khó khăn trong suốt chu kỳ hợp tác.',
                    impact: 'Cùng phát triển bền vững'
                }
            ]
        },
        operations: {
            titleLine1: 'Hạ tầng &',
            titleHighlight: 'Vận hành',
            subtitle: 'Vận hành chuẩn hoá, kiểm soát từng khâu.',
            intro:
                'Uy tín của một doanh nghiệp phân phối được đo bằng sự ổn định trong vận hành. Activate tập trung vào ba nền tảng then chốt để mọi đơn hàng được thực hiện nhất quán.',
            badges: ['Kho vận', 'QA/QC', 'Tuân thủ'],
            imageAlt: 'Hạ tầng vận hành của Activate',
            warehouse: {
                title: 'Kho vận & Logistics',
                description:
                    'Hàng hoá được lưu trữ, bảo quản và xuất nhập theo nguyên tắc nhập trước - xuất trước (FIFO), tồn kho được theo dõi chặt chẽ. Activate phối hợp với các đơn vị vận tải uy tín để giao nhận đúng hẹn trong nước và quốc tế.'
            },
            quality: {
                title: 'Kiểm soát chất lượng QA/QC',
                description:
                    'Kiểm soát nhiều lớp: đánh giá nhà cung cấp, kiểm tra hàng đầu vào, giám sát lưu kho và kiểm tra trước khi xuất giao. Mỗi lô hàng có hồ sơ truy xuất nguồn gốc.'
            },
            compliance: {
                title: 'Tuân thủ pháp lý',
                description:
                    'Hoạt động đúng ngành nghề đăng ký, kê khai thuế minh bạch, hoá đơn điện tử đầy đủ; tuân thủ quy định về nhãn hàng hoá, xuất xứ và hải quan.'
            }
        },
        process: {
            title: 'Quy trình hợp tác',
            subtitle: 'Bốn bước rõ ràng, thống nhất bằng văn bản ngay từ đầu để đối tác an tâm triển khai.',
            steps: [
                {
                    title: 'Tiếp nhận nhu cầu',
                    items: ['Trao đổi về ngành hàng, sản lượng, tiêu chuẩn và tiến độ', 'Đánh giá khả năng đáp ứng']
                },
                {
                    title: 'Đề xuất & ký kết',
                    items: ['Báo giá và phương án hợp tác', 'Thống nhất điều khoản', 'Ký kết hợp đồng']
                },
                {
                    title: 'Cung ứng & kiểm định',
                    items: ['Tổ chức nguồn hàng', 'Kiểm tra chất lượng theo lô', 'Hoàn thiện hoá đơn, chứng từ']
                },
                {
                    title: 'Giao nhận & đối soát',
                    items: ['Giao hàng, nghiệm thu', 'Đối soát công nợ', 'Chăm sóc và đánh giá định kỳ']
                }
            ]
        }
    },

    about: {
        hero: {
            badge: 'Về Activate',
            titleLine1: 'Kết nối nguồn cung',
            titleLine2: 'Kích hoạt thị trường',
            description:
                'Activate là thương hiệu thương mại của CIVI GLOBAL COMPANY LIMITED, hoạt động trong lĩnh vực bán buôn, xuất nhập khẩu và đại lý phân phối. Chúng tôi xây dựng cầu nối tin cậy giữa nhà sản xuất, nhà cung cấp và thị trường.',
            cards: {
                vision: 'Tầm nhìn',
                mission: 'Sứ mệnh',
                values: 'Giá trị cốt lõi',
                valuesDescription: 'Minh bạch · Giữ chữ tín · Đồng hành dài hạn. Ba giá trị định hướng mọi quyết định và mọi giao dịch của Activate.'
            }
        },
        story: {
            badge: 'Triết lý kinh doanh',
            titleLine1: 'Uy tín là',
            titleLine2: 'tài sản lớn nhất',
            subtitle: 'Chúng tôi xây dựng quan hệ hợp tác, không chỉ thực hiện giao dịch.',
            paragraphs: [
                'Trong thương mại và phân phối, giá trị bền vững nhất không nằm ở một đơn hàng lớn, mà ở niềm tin được tích luỹ qua từng lần giao hàng đúng hẹn, từng chứng từ rõ ràng và từng cam kết được thực hiện trọn vẹn.',
                'Vì vậy, Activate lựa chọn phát triển một cách kỷ luật: minh bạch về pháp lý, chuẩn hoá trong vận hành và luôn đặt lợi ích dài hạn của đối tác lên trước lợi ích ngắn hạn của mình.'
            ],
            imageAlt: 'Triết lý kinh doanh của Activate'
        },
        legal: {
            badge: 'Hồ sơ pháp lý',
            title: 'Pháp nhân minh bạch, sẵn sàng thẩm định',
            description:
                'Activate cung cấp đầy đủ hồ sơ pháp lý phục vụ công tác thẩm định của đối tác, nhà cung cấp và tổ chức tín dụng.',
            note: 'Bản sao Giấy chứng nhận đăng ký doanh nghiệp và hồ sơ liên quan được cung cấp theo yêu cầu.',
            activitiesTitle: 'Nhóm ngành nghề kinh doanh',
            activities: [
                {title: 'Bán buôn', description: 'Bán buôn hàng tiêu dùng, đồ gia dụng, hàng thời trang và sản phẩm kỹ thuật.'},
                {title: 'Bán lẻ', description: 'Bán lẻ qua cửa hàng chuyên doanh và các kênh phân phối hiện đại.'},
                {title: 'Đại lý & môi giới', description: 'Đại lý, môi giới và phát triển kênh phân phối hàng hoá.'},
                {title: 'Xuất nhập khẩu', description: 'Xuất khẩu, nhập khẩu và uỷ thác xuất nhập khẩu hàng hoá.'}
            ]
        }
    },

    fieldsPage: {
        hero: {
            titleLine1: 'LĨNH VỰC',
            titleLine2: 'HOẠT ĐỘNG',
            description:
                'Hoạt động của Activate được tổ chức thành ba trụ cột bổ trợ lẫn nhau, tạo nên chuỗi giá trị liền mạch từ nguồn hàng đến điểm bán.'
        }
    },

    contact: {
        hero: {
            badge: 'Liên hệ',
            title: 'Cổng thông tin đối tác',
            description:
                'Gửi đề xuất hợp tác phân phối, cung ứng hoặc tài chính - hoặc liên hệ trực tiếp với Activate qua thông tin pháp nhân bên dưới.'
        }
    }
};
