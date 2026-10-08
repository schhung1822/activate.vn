// src/i18n/translations/corporate/cn.js
// Activate 企业简介内容（简体中文），与 ./vi.js 的键一一对应。
export default {
    nav: {
        about: '关于我们',
        fields: '业务领域',
        fieldsOverview: '业务概览',
        news: '新闻资讯',
        contact: '联系我们'
    },

    cta: {
        partner: '洽谈合作',
        profile: '下载企业简介',
        learnMore: '了解详情',
        aboutMore: '了解 Activate',
        fieldDetail: '查看业务详情',
        sendProposal: '提交合作意向'
    },

    legal: {
        title: '法人信息',
        activities: '业务领域',
        activitiesValue: '批发 · 零售 · 代理 · 进出口',
        headquarters: '总部地址'
    },

    footer: {
        tagline: '贸易 · 分销 · 进出口',
        about: 'Activate 是 CIVI GLOBAL COMPANY LIMITED 旗下品牌，业务涵盖批发贸易、进出口及分销代理。',
        fieldsTitle: '业务领域',
        companyTitle: '企业',
        profileTitle: '企业简介',
        profileDescription: '下载企业简介，全面了解 Activate 的法人信息、业务能力与合作流程。',
        links: {
            about: '关于我们',
            fields: '业务领域',
            news: '新闻资讯',
            contact: '洽谈合作',
            privacy: '隐私政策'
        }
    },

    ctaBand: {
        badge: '与 Activate 合作',
        title: '准备好成为 Activate 的合作伙伴了吗？',
        description: '下载企业简介了解详情，或提交合作意向，我们的合作伙伴发展团队将直接与贵司联系。'
    },

    form: {
        title: '提交合作意向',
        description:
            'Activate 欢迎生产商、供应商、分销商、代理商及金融机构携手合作。请留下贵司信息，合作伙伴发展部将尽快与您联系。',
        requiredNote: '带 * 的为必填项。',
        name: '联系人',
        namePlaceholder: '姓名',
        position: '职务',
        positionPlaceholder: '例如：销售总监',
        company: '企业名称',
        companyPlaceholder: '法人或品牌名称',
        taxId: '税号',
        taxIdPlaceholder: '选填',
        phone: '电话',
        phonePlaceholder: '例如：+84 912 345 678',
        email: '电子邮箱',
        emailPlaceholder: 'email@company.com',
        type: '合作形式',
        typePlaceholder: '请选择合作形式',
        types: {
            supplier: '供货（生产商 / 供应商）',
            distribution: '分销 / 代理',
            trade: '进出口委托',
            finance: '金融 - 银行合作',
            other: '其他合作'
        },
        message: '合作意向说明',
        messagePlaceholder: '产品品类、规模、目标市场及合作期望……',
        consentPrefix: '我同意 Activate 根据其',
        consentLink: '隐私政策',
        submit: '提交意向',
        submitting: '提交中……',
        success: 'Activate 已收到贵司的合作意向，合作伙伴发展部将尽快与您联系。',
        error: '提交未成功，请重试或直接通过电话 / 邮箱联系我们。',
        audiencesTitle: '我们欢迎以下合作方',
        audiences: ['国内外生产商与供应商', '分销商、代理商及零售连锁', '银行与金融机构', '物流及贸易服务合作方']
    },

    fields: {
        wholesale: {
            name: '批发贸易与分销',
            shortName: '批发与分销',
            label: 'Wholesale & Distribution',
            menuDescription: '规模化供货，广泛覆盖市场',
            summary:
                'Activate 为分销商、代理商及零售企业规模化供应日用消费品、家居用品、服装及技术类产品。凭借严格甄选的货源与主动的备货计划，我们帮助合作伙伴保持稳定供应、优化采购成本、扩大市场覆盖，而无需承担库存风险。',
            values: ['稳定供应', '透明批发价格', '扩大渠道覆盖', '降低库存风险'],
            partners: '区域分销商、一级与二级代理商、零售连锁及贸易企业。',
            hero: {
                titleLine1: '批发贸易',
                titleLine2: '与分销',
                description: '规模化供货与市场覆盖能力——帮助分销商、代理商及零售企业掌握货源、稳定成本，专注拓展销售渠道。',
                bullets: [
                    '按计划供应日用消费品、家居用品、服装及技术类产品。',
                    '批发价格透明，按销量与合同期限统一约定。',
                    '逐批质量管控，发票及来源单证齐全。',
                    '协助按区域扩大分销渠道覆盖。'
                ]
            },
            scope: {
                badge: '供货范围',
                items: ['日用消费品', '家居用品', '服装与配饰', '技术类产品']
            },
            benefits: {
                badge: 'Wholesale & Distribution',
                title: '为合作伙伴创造的价值',
                items: [
                    {
                        title: '货源有保障',
                        description: '供货计划与合作伙伴的经营周期同步，减少旺季断货。',
                        impact: '供应稳定'
                    },
                    {
                        title: '优化采购成本',
                        description: '集中下单并与生产商进行批量谈判，让合作伙伴获得有竞争力且透明的批发价格。',
                        impact: '成本有竞争力'
                    },
                    {
                        title: '减轻库存压力',
                        description: 'Activate 主动备货、分批交付，合作伙伴按需进货，资金周转更快。',
                        impact: '营运资金高效'
                    },
                    {
                        title: '扩大市场覆盖',
                        description: '以现货与统一的渠道政策，协助合作伙伴开拓新网点与新区域。',
                        impact: '可持续增长'
                    }
                ]
            },
            models: {
                badge: '合作模式',
                title: '灵活匹配合作伙伴规模',
                items: [
                    {
                        title: '按单批发',
                        subtitle: '适合新合作伙伴及季节性需求',
                        points: ['分批下单', '按实际销量报价', '按单结算']
                    },
                    {
                        title: '长期供货合同',
                        subtitle: '适合分销商与零售连锁',
                        points: ['按季度 / 年度制定供货计划', '合同期内价格与政策稳定', '旺季优先配货']
                    },
                    {
                        title: '区域分销',
                        subtitle: '适合拓展市场的合作伙伴',
                        points: ['市场区域划分清晰', '渠道政策统一', '协助开发新网点']
                    }
                ]
            },
            process: {
                title: '批发供货流程',
                subtitle: '从需求沟通到交货后对账，全程透明。',
                steps: [
                    {
                        title: '需求沟通',
                        items: ['沟通品类、数量及分销区域', '明确质量与包装标准']
                    },
                    {
                        title: '报价与签约',
                        items: ['按数量与期限报价', '约定交付与付款条款', '签订框架合同']
                    },
                    {
                        title: '供货与检验',
                        items: ['按计划组织货源', '逐批质量检验', '完善发票与单证']
                    },
                    {
                        title: '交付与对账',
                        items: ['按约定时间交货', '验收与对账', '跟进并调整下期计划']
                    }
                ]
            }
        },

        trade: {
            name: '进出口与国际贸易',
            shortName: '进出口',
            label: 'Global Sourcing & Trade',
            menuDescription: '连接全球供应链',
            summary:
                'Activate 将合作伙伴与全球供应链相连接：寻找并审核生产商、商务谈判、办理通关手续，并统筹海运、空运及陆运多式联运物流。合作伙伴按标准、按期收货，原产地与质量单证齐全，物流成本得到优化。',
            values: ['供应商审核', '一站式通关', '多式联运物流', '单证齐全'],
            partners: '需要进口货源的企业、希望出口的生产商，以及委托进出口的合作伙伴。',
            hero: {
                titleLine1: '进出口',
                titleLine2: '与国际贸易',
                description: '连接越南合作伙伴与全球供应链——从寻源、谈判到通关与多式联运，每个环节单证透明。',
                bullets: [
                    '寻找、评估并审核国际生产商与供应商。',
                    '商务谈判，起草外贸合同及交货条件。',
                    '办理海关手续、专项检验及原产地证明。',
                    '统筹海运、空运及陆运物流。'
                ]
            },
            scope: {
                badge: '服务范围',
                items: ['寻源与审核', '谈判与合同', '通关与单证', '多式联运物流']
            },
            benefits: {
                badge: 'Global Sourcing & Trade',
                title: '为合作伙伴创造的价值',
                items: [
                    {
                        title: '货源经过审核',
                        description: '交易前对供应商的生产能力、法律资质与质量进行评估，降低合作风险。',
                        impact: '降低交易风险'
                    },
                    {
                        title: '快速合规通关',
                        description: '提前备齐报关资料与专项检验文件，减少港口与仓储滞留。',
                        impact: '缩短周期'
                    },
                    {
                        title: '优化物流成本',
                        description: '为每批货物选择合适的运输方式与路线，兼顾成本与时效。',
                        impact: '成本合理'
                    },
                    {
                        title: '一站式对接',
                        description: '从下单到货物入库由专人全程负责，主动同步进度。',
                        impact: '进度可控'
                    }
                ]
            },
            models: {
                badge: '合作模式',
                title: '满足多种国际贸易需求',
                items: [
                    {
                        title: '一站式进口',
                        subtitle: 'Activate 以自身名义进口并转供',
                        points: ['代为寻源与谈判', '通关、缴税及专项检验', '送货至合作伙伴仓库']
                    },
                    {
                        title: '进出口委托',
                        subtitle: '适合已有货源或买家的合作伙伴',
                        points: ['代办全部手续', '准备原产地与质量单证', '委托费用按合同透明收取']
                    },
                    {
                        title: '出口支持',
                        subtitle: '面向越南生产企业',
                        points: ['对接国际买家', '指导进口市场标准', '统筹国际运输']
                    }
                ]
            },
            process: {
                title: '进出口流程',
                subtitle: '每批货物按节点跟踪，对合作伙伴全程透明。',
                steps: [
                    {
                        title: '寻源与审核',
                        items: ['明确货物要求与标准', '评估并审核供应商']
                    },
                    {
                        title: '谈判与签约',
                        items: ['谈判价格与贸易术语（Incoterms）', '签订外贸合同', '约定国际支付方式']
                    },
                    {
                        title: '运输与通关',
                        items: ['订舱并统筹运输', '报关及专项检验', '完善原产地与质量单证']
                    },
                    {
                        title: '交付与结算',
                        items: ['国内段运输至合作伙伴仓库', '货物验收', '移交单证并结算费用']
                    }
                ]
            }
        },

        agency: {
            name: '代理与中间零售解决方案',
            shortName: '代理与零售解决方案',
            label: 'Retail Solutions & Agency',
            menuDescription: '发展代理与网点网络',
            summary:
                '作为中间桥梁，Activate 代表生产商与品牌发展代理商、销售网点及专卖连锁网络。我们规范渠道政策，支持陈列与网点培训，帮助合作伙伴的产品以合理的市场开发成本更快触达消费者。',
            values: ['代理网络', '规范渠道政策', '陈列支持', '网点培训'],
            partners: '希望拓展销售渠道的生产商与品牌，以及寻求分销合作的门店与代理商。',
            hero: {
                titleLine1: '代理与',
                titleLine2: '中间零售解决方案',
                description: '连接生产商与销售终端——Activate 发展代理与专卖店网络，规范渠道运营，让产品更快到达消费者手中。',
                bullets: [
                    '代表品牌甄选并发展代理商与销售网点。',
                    '制定渠道政策：折扣、账期、区域及销售支持。',
                    '提供网点陈列、宣传物料及人员培训支持。',
                    '为生产商跟踪动销、库存及市场反馈。'
                ]
            },
            scope: {
                badge: '业务范围',
                items: ['甄选代理', '渠道政策', '陈列与培训', '网点维护']
            },
            benefits: {
                badge: 'Retail Solutions & Agency',
                title: '为合作伙伴创造的价值',
                items: [
                    {
                        title: '更快进入市场',
                        description: '借助 Activate 的网络与渠道经验，无需从零组建销售团队。',
                        impact: '缩短上市时间'
                    },
                    {
                        title: '渠道有序规范',
                        description: '统一价格、区域与折扣政策，减少渠道冲突与代理之间的低价竞争。',
                        impact: '价格稳定'
                    },
                    {
                        title: '网点支持到位',
                        description: '代理商获得陈列、产品资料与培训支持，确保产品介绍准确、一致。',
                        impact: '品牌形象统一'
                    },
                    {
                        title: '市场信息透明',
                        description: '定期报告动销、库存与客户反馈，帮助生产商及时调整计划。',
                        impact: '决策更精准'
                    }
                ]
            },
            models: {
                badge: '合作模式',
                title: '面向生产商与销售网点',
                items: [
                    {
                        title: '分销代理',
                        subtitle: 'Activate 分销品牌产品',
                        points: ['按约定区域分销', '双方共同制定渠道政策', '定期提交动销报告']
                    },
                    {
                        title: '代理网络发展',
                        subtitle: 'Activate 甄选并管理代理商',
                        points: ['甄选与审核代理商', '签订并管理代理合同', '监督渠道政策执行']
                    },
                    {
                        title: '专卖店合作',
                        subtitle: '面向门店与零售连锁',
                        points: ['正品货源稳定', '陈列与培训支持', '退换货政策清晰']
                    }
                ]
            },
            process: {
                title: '渠道发展流程',
                subtitle: '每一家代理与网点都按统一流程甄选和陪伴。',
                steps: [
                    {
                        title: '调研与定位',
                        items: ['评估产品与目标市场', '确定合适的渠道模式']
                    },
                    {
                        title: '制定政策',
                        items: ['价格、折扣与账期政策', '划分分销区域', '网点资料与标准']
                    },
                    {
                        title: '发展网点',
                        items: ['甄选并签约代理商', '陈列与销售培训', '首批供货']
                    },
                    {
                        title: '运营与优化',
                        items: ['跟踪动销与库存', '定期维护与评估代理', '报告与改进建议']
                    }
                ]
            }
        },

        shared: {
            why: {
                titleLine1: '合作伙伴为何选择',
                subtitle: '信誉源自每一笔交易中的透明与一致。',
                intro: 'Activate 以长期贸易伙伴的方式运作：法律层面清晰、运营有纪律，并坚持履约到底。',
                badges: ['透明', '守信', '长期同行'],
                cards: {
                    legal: {
                        title: '法律资质透明',
                        description: '法人身份清晰，在登记经营范围内开展业务。每笔交易均有合同、电子发票及完整单证。'
                    },
                    quality: {
                        title: '质量管控',
                        description: '逐批检验，每批货物附带可追溯记录。'
                    },
                    contact: {
                        title: '专人对接',
                        description: '每位合作伙伴均有专属对接人，主动同步进度，快速响应。'
                    },
                    taxLabel: '税号',
                    taxCaption: '可提供法律文件以供尽职调查'
                }
            },
            commitments: {
                badge: '承诺',
                title: 'Activate 对合作伙伴的承诺',
                items: [
                    {description: '每笔交易均有明确合同，条款透明，并在执行前签署。'},
                    {description: '货物来源清晰，发票与单证齐全有效。'},
                    {description: '交货前逐批质量管控，并保存可追溯记录。'},
                    {description: '按约定进度交货；如有变动，提前主动告知。'},
                    {description: '严格保密合作伙伴的商业、价格及客户信息。'},
                    {description: '每位合作伙伴均有专属对接人，工作时间内及时回复。'},
                    {
                        description: '如货物或进度出现偏差，Activate 承诺：',
                        subCommitments: ['共同核实原因并如实记录', '按合同条款换货、补货或赔偿', '复盘流程，避免再次发生']
                    }
                ]
            }
        }
    },

    home: {
        hero: {
            badge: '贸易 · 分销 · 进出口',
            slogan: '连接供应，激活市场。',
            description:
                'Activate 是 CIVI GLOBAL COMPANY LIMITED 旗下贸易品牌——生产商、供应商与市场之间值得信赖的桥梁，以透明的法律基础和标准化流程运营。',
            facts: {
                legal: '法人',
                taxId: '税号',
                headquarters: '总部',
                headquartersValue: '越南河内'
            }
        },
        about: {
            badge: '关于我们',
            titleLine1: '以诚信为本的',
            titleLine2: '贸易合作伙伴',
            description:
                'Activate 创立之初便目标明确：成为生产商、分销商与金融机构可以长期信赖的贸易伙伴。我们不追逐短期交易，而是专注建立可持续的合作关系——每一份合同、每一批货物、每一份单证都透明且如约履行。',
            visionLabel: '愿景',
            vision: '成为领先且值得信赖的贸易与分销企业，连接越南与国际市场之间的优质商品。',
            missionLabel: '使命',
            mission: '以稳定的供应能力、标准化流程和严格的合规经营，缩短从生产商到市场的距离。'
        },
        fields: {
            badge: '业务领域',
            title: '三大核心能力',
            descriptionLabel: '概述',
            valuesLabel: '为合作伙伴创造的价值',
            partnersLabel: '适合的合作伙伴'
        },
        values: {
            badge: '核心价值',
            title: '成就信誉的三项承诺',
            items: [
                {
                    title: '透明',
                    description: '法人身份清晰，合同、发票、单证齐全。所有合作条款均以书面形式约定，并对合作伙伴公开。',
                    impact: '每笔交易清晰明了'
                },
                {
                    title: '守信',
                    description: '只承诺能够做到的事，并对每笔订单的质量、数量与进度负责到底。',
                    impact: '言出必行'
                },
                {
                    title: '长期同行',
                    description: '以合作伙伴的长远利益为中心：政策稳定、共享市场信息，在整个合作周期中共同解决问题。',
                    impact: '携手持续发展'
                }
            ]
        },
        operations: {
            titleLine1: '基础设施与',
            titleHighlight: '运营',
            subtitle: '标准化运营，环环把控。',
            intro: '分销企业的信誉取决于运营的稳定性。Activate 聚焦三大核心基础，确保每笔订单一致履行。',
            badges: ['仓储物流', 'QA/QC', '合规'],
            imageAlt: 'Activate 的运营基础设施',
            warehouse: {
                title: '仓储与物流',
                description:
                    '货物按先进先出（FIFO）原则存储、保管与出入库，库存严格跟踪。Activate 与可靠的运输商合作，确保国内外按时交付。'
            },
            quality: {
                title: 'QA/QC 质量管控',
                description: '多层管控：供应商评估、来料检验、仓储监控及出货前检查。每批货物均有可追溯记录。'
            },
            compliance: {
                title: '合规经营',
                description: '在登记经营范围内开展业务，税务申报透明，电子发票齐全；遵守商品标签、原产地及海关相关规定。'
            }
        },
        process: {
            title: '合作流程',
            subtitle: '四个清晰步骤，从一开始便以书面形式约定，让合作伙伴安心推进。',
            steps: [
                {
                    title: '需求沟通',
                    items: ['沟通品类、数量、标准与进度', '评估供应能力']
                },
                {
                    title: '方案与签约',
                    items: ['报价与合作方案', '约定条款', '签订合同']
                },
                {
                    title: '供货与检验',
                    items: ['组织货源', '逐批质量检验', '完善发票与单证']
                },
                {
                    title: '交付与对账',
                    items: ['交货与验收', '对账', '持续维护与定期评估']
                }
            ]
        }
    },

    about: {
        hero: {
            badge: '关于 Activate',
            titleLine1: '连接供应',
            titleLine2: '激活市场',
            description:
                'Activate 是 CIVI GLOBAL COMPANY LIMITED 旗下贸易品牌，业务涵盖批发、进出口及分销代理。我们在生产商、供应商与市场之间搭建值得信赖的桥梁。',
            cards: {
                vision: '愿景',
                mission: '使命',
                values: '核心价值',
                valuesDescription: '透明 · 守信 · 长期同行。三大价值指引 Activate 的每一个决策与每一笔交易。'
            }
        },
        story: {
            badge: '经营理念',
            titleLine1: '信誉是',
            titleLine2: '我们最大的资产',
            subtitle: '我们建立的是合作关系，而不仅仅是交易。',
            paragraphs: [
                '在贸易与分销领域，最持久的价值不在于一笔大订单，而在于每一次准时交货、每一份清晰单证、每一项圆满履行的承诺所积累的信任。',
                '因此，Activate 选择有纪律地发展：法律上透明、运营上标准化，并始终将合作伙伴的长远利益置于自身短期利益之前。'
            ],
            imageAlt: 'Activate 的经营理念'
        },
        legal: {
            badge: '法律档案',
            title: '法人透明，随时接受尽职调查',
            description: 'Activate 提供完整的法律文件，配合合作伙伴、供应商及信贷机构的尽职调查。',
            note: '企业登记证书副本及相关文件可应要求提供。',
            activitiesTitle: '经营范围',
            activities: [
                {title: '批发', description: '批发日用消费品、家居用品、服装及技术类产品。'},
                {title: '零售', description: '通过专卖店及现代分销渠道零售。'},
                {title: '代理与经纪', description: '商品代理、经纪及分销渠道开发。'},
                {title: '进出口', description: '货物出口、进口及进出口委托。'}
            ]
        }
    },

    fieldsPage: {
        hero: {
            titleLine1: '业务',
            titleLine2: '领域',
            description: 'Activate 的业务由三大相互支撑的支柱构成，形成从货源到销售终端的完整价值链。'
        }
    },

    contact: {
        hero: {
            badge: '联系我们',
            title: '合作伙伴门户',
            description: '提交分销、供货或金融合作意向，或通过下方法人信息直接联系 Activate。'
        }
    }
};
