// src/i18n/translations/corporate/en.js
// English version of the Activate corporate profile content. Mirrors ./vi.js key by key.
export default {
    nav: {
        about: 'About',
        fields: 'Business areas',
        fieldsOverview: 'Overview',
        news: 'News',
        contact: 'Contact'
    },

    cta: {
        partner: 'Partner with us',
        profile: 'Download company profile',
        learnMore: 'Learn more',
        aboutMore: 'About Activate',
        fieldDetail: 'Explore this area',
        sendProposal: 'Send a partnership proposal'
    },

    legal: {
        title: 'Legal entity',
        activities: 'Business areas',
        activitiesValue: 'Wholesale · Retail · Agency · Import & Export',
        headquarters: 'Head office'
    },

    footer: {
        tagline: 'Trading · Distribution · Import & Export',
        about: 'Activate is a brand of CIVI GLOBAL COMPANY LIMITED - a company operating in wholesale trading, import & export and distribution agency.',
        fieldsTitle: 'Business areas',
        companyTitle: 'Company',
        profileTitle: 'Company profile',
        profileDescription:
            'Download our company profile for full details on Activate’s legal entity, capabilities and partnership process.',
        links: {
            about: 'About',
            fields: 'Business areas',
            news: 'News',
            contact: 'Partner with us',
            privacy: 'Privacy policy'
        }
    },

    ctaBand: {
        badge: 'Partner with Activate',
        title: 'Ready to become an Activate partner?',
        description:
            'Download our company profile for the details, or send a partnership proposal and our partner development team will contact you directly.'
    },

    form: {
        title: 'Send a partnership proposal',
        description:
            'Activate welcomes manufacturers, suppliers, distributors, agents and financial institutions. Leave your details and our partner development team will get back to you as soon as possible.',
        requiredNote: 'Fields marked * are required.',
        name: 'Contact person',
        namePlaceholder: 'Full name',
        position: 'Position',
        positionPlaceholder: 'e.g. Sales Director',
        company: 'Company name',
        companyPlaceholder: 'Legal entity or brand name',
        taxId: 'Tax ID',
        taxIdPlaceholder: 'Optional',
        phone: 'Phone number',
        phonePlaceholder: 'e.g. +84 912 345 678',
        email: 'Email',
        emailPlaceholder: 'email@company.com',
        type: 'Type of partnership',
        typePlaceholder: 'Select a type of partnership',
        types: {
            supplier: 'Supplying goods (manufacturer / supplier)',
            distribution: 'Distribution / agency',
            trade: 'Import & export entrustment',
            finance: 'Financial & banking partnership',
            other: 'Other partnership'
        },
        message: 'Proposal details',
        messagePlaceholder: 'Product categories, scale, target markets and what you would like to achieve together...',
        consentPrefix: 'I agree that Activate may process this information under its ',
        consentLink: 'Privacy policy',
        submit: 'Send proposal',
        submitting: 'Sending...',
        success:
            'Activate has received your proposal. Our partner development team will get back to you as soon as possible.',
        error: 'Your proposal could not be sent. Please try again or contact us directly by phone or email.',
        audiencesTitle: 'We welcome proposals from',
        audiences: [
            'Domestic and international manufacturers & suppliers',
            'Distributors, agents and retail chains',
            'Banks & financial institutions',
            'Logistics and trade service partners'
        ]
    },

    fields: {
        wholesale: {
            name: 'Wholesale Trading & Distribution',
            shortName: 'Wholesale & Distribution',
            label: 'Wholesale & Distribution',
            menuDescription: 'Large-scale supply, broad market coverage',
            summary:
                'Activate supplies goods at scale to distributors, agents and retailers across consumer goods, household products, fashion and technical products. With carefully selected sources and proactive stock planning, we help partners keep supply steady, optimise purchasing costs and widen market coverage without carrying inventory risk.',
            values: ['Steady supply', 'Transparent wholesale pricing', 'Wider channel coverage', 'Lower inventory risk'],
            partners: 'Regional distributors, tier-1 and tier-2 agents, retail chains and trading companies.',
            hero: {
                titleLine1: 'WHOLESALE TRADING &',
                titleLine2: 'DISTRIBUTION',
                description:
                    'Large-scale supply and market coverage - helping distributors, agents and retailers secure their sources, stabilise costs and focus on growing their sales channels.',
                bullets: [
                    'Planned supply of consumer goods, household products, fashion and technical products.',
                    'Transparent wholesale pricing, agreed by volume and contract term.',
                    'Lot-by-lot quality control with full invoices and proof-of-origin documents.',
                    'Support in widening distribution coverage region by region.'
                ]
            },
            scope: {
                badge: 'Supply scope',
                items: ['Consumer goods', 'Household products', 'Fashion & accessories', 'Technical products']
            },
            benefits: {
                badge: 'Wholesale & Distribution',
                title: 'Value for our partners',
                items: [
                    {
                        title: 'Secured supply',
                        description:
                            'Supply plans follow each partner’s business cycle, reducing stock-outs during peak seasons.',
                        impact: 'Steady supply'
                    },
                    {
                        title: 'Optimised purchasing costs',
                        description:
                            'Consolidated orders and volume negotiations with manufacturers give partners competitive, transparent wholesale prices.',
                        impact: 'Competitive costs'
                    },
                    {
                        title: 'Less inventory pressure',
                        description:
                            'Activate holds stock and delivers in batches, so partners buy what they sell and turn working capital faster.',
                        impact: 'Efficient working capital'
                    },
                    {
                        title: 'Wider market coverage',
                        description:
                            'We help partners open new outlets and regions with ready stock and a consistent channel policy.',
                        impact: 'Sustainable growth'
                    }
                ]
            },
            models: {
                badge: 'Partnership models',
                title: 'Flexible to your scale',
                items: [
                    {
                        title: 'Order-based wholesale',
                        subtitle: 'For new partners and seasonal demand',
                        points: ['Order batch by batch', 'Quotes based on actual volume', 'Payment per order']
                    },
                    {
                        title: 'Long-term supply contract',
                        subtitle: 'For distributors and retail chains',
                        points: ['Quarterly / annual supply plan', 'Stable pricing and terms under contract', 'Priority allocation in peak seasons']
                    },
                    {
                        title: 'Regional distribution',
                        subtitle: 'For partners developing a market',
                        points: ['Clearly defined territories', 'Consistent channel policy', 'Support in opening new outlets']
                    }
                ]
            },
            process: {
                title: 'Wholesale supply process',
                subtitle: 'Transparent from the first enquiry to reconciliation after delivery.',
                steps: [
                    {
                        title: 'Understanding needs',
                        items: ['Discuss categories, volumes and distribution areas', 'Define quality and packaging standards']
                    },
                    {
                        title: 'Quotation & contract',
                        items: ['Quote by volume and term', 'Agree delivery and payment terms', 'Sign a framework contract']
                    },
                    {
                        title: 'Supply & inspection',
                        items: ['Source goods to plan', 'Lot-by-lot quality inspection', 'Complete invoices and documents']
                    },
                    {
                        title: 'Delivery & reconciliation',
                        items: ['Deliver on the agreed schedule', 'Acceptance and account reconciliation', 'Review and adjust the next cycle']
                    }
                ]
            }
        },

        trade: {
            name: 'Import & Export and International Trade',
            shortName: 'Import & Export',
            label: 'Global Sourcing & Trade',
            menuDescription: 'Connecting global supply chains',
            summary:
                'Activate connects partners to global supply chains: sourcing and vetting manufacturers, commercial negotiation, customs clearance and multimodal logistics by sea, air and road. Partners receive goods to standard and on time, with complete origin and quality documents and optimised logistics costs.',
            values: ['Vetted suppliers', 'End-to-end customs clearance', 'Multimodal logistics', 'Complete documentation'],
            partners: 'Businesses importing goods, manufacturers looking to export and partners entrusting import/export procedures.',
            hero: {
                titleLine1: 'IMPORT & EXPORT AND',
                titleLine2: 'INTERNATIONAL TRADE',
                description:
                    'A bridge between Vietnamese partners and global supply chains - from sourcing and negotiation to customs clearance and multimodal transport, with transparent documentation at every step.',
                bullets: [
                    'Sourcing, assessing and vetting international manufacturers and suppliers.',
                    'Commercial negotiation, drafting foreign-trade contracts and delivery terms.',
                    'Customs procedures, specialised inspections and certificates of origin.',
                    'Coordinating sea, air and road logistics.'
                ]
            },
            scope: {
                badge: 'Service scope',
                items: ['Sourcing & vetting', 'Negotiation & contracts', 'Customs & documentation', 'Multimodal logistics']
            },
            benefits: {
                badge: 'Global Sourcing & Trade',
                title: 'Value for our partners',
                items: [
                    {
                        title: 'Vetted sources',
                        description:
                            'Suppliers are assessed on production capacity, legal standing and quality before any transaction, lowering partner risk.',
                        impact: 'Lower transaction risk'
                    },
                    {
                        title: 'Fast, compliant clearance',
                        description:
                            'Customs files and specialised inspections are prepared in advance, minimising port and storage delays.',
                        impact: 'Shorter lead times'
                    },
                    {
                        title: 'Optimised logistics costs',
                        description:
                            'The right mode and route for each shipment, balancing cost against schedule.',
                        impact: 'Reasonable costs'
                    },
                    {
                        title: 'One point of contact',
                        description:
                            'A single contact from order placement until the goods reach your warehouse, with proactive progress updates.',
                        impact: 'Schedule under control'
                    }
                ]
            },
            models: {
                badge: 'Partnership models',
                title: 'Built for different trade needs',
                items: [
                    {
                        title: 'Full-service import',
                        subtitle: 'Activate imports in its own name and resupplies',
                        points: ['Sourcing and negotiation on your behalf', 'Clearance, duties and specialised inspections', 'Delivery to your warehouse']
                    },
                    {
                        title: 'Import & export entrustment',
                        subtitle: 'For partners with their own sources or buyers',
                        points: ['Procedures handled on your behalf', 'Origin and quality documents prepared', 'Transparent entrustment fee by contract']
                    },
                    {
                        title: 'Export support',
                        subtitle: 'For Vietnamese manufacturers',
                        points: ['Connections to international buyers', 'Guidance on import-market standards', 'International shipping coordination']
                    }
                ]
            },
            process: {
                title: 'Import & export process',
                subtitle: 'Every shipment is tracked milestone by milestone, transparently.',
                steps: [
                    {
                        title: 'Sourcing & vetting',
                        items: ['Define product requirements and standards', 'Assess and vet suppliers']
                    },
                    {
                        title: 'Negotiation & contract',
                        items: ['Negotiate price and Incoterms', 'Sign the foreign-trade contract', 'Agree international payment method']
                    },
                    {
                        title: 'Shipping & clearance',
                        items: ['Book and coordinate transport', 'Customs declaration and inspections', 'Complete origin and quality documents']
                    },
                    {
                        title: 'Delivery & settlement',
                        items: ['Inland delivery to your warehouse', 'Goods acceptance', 'Hand over documents and settle costs']
                    }
                ]
            }
        },

        agency: {
            name: 'Agency & Intermediary Retail Solutions',
            shortName: 'Agency & Retail Solutions',
            label: 'Retail Solutions & Agency',
            menuDescription: 'Building agent and outlet networks',
            summary:
                'As an intermediary, Activate represents manufacturers and brands in building networks of agents, outlets and specialist store chains. We standardise channel policy and support merchandising and outlet training - helping partners’ products reach consumers faster at a reasonable market-development cost.',
            values: ['Agent network', 'Standardised channel policy', 'Merchandising support', 'Outlet training'],
            partners: 'Manufacturers and brands expanding their sales channels, and stores or agents seeking distribution partnerships.',
            hero: {
                titleLine1: 'AGENCY &',
                titleLine2: 'INTERMEDIARY RETAIL SOLUTIONS',
                description:
                    'The bridge between manufacturers and points of sale - Activate builds networks of agents and specialist stores and standardises channel operations so products reach consumers faster.',
                bullets: [
                    'Representing brands in selecting and developing agents and outlets.',
                    'Building channel policy: discounts, credit terms, territories and sales support.',
                    'Merchandising, point-of-sale materials and staff training at outlets.',
                    'Tracking sell-through, stock and market feedback for manufacturers.'
                ]
            },
            scope: {
                badge: 'Scope of work',
                items: ['Agent selection', 'Channel policy', 'Merchandising & training', 'Outlet care']
            },
            benefits: {
                badge: 'Retail Solutions & Agency',
                title: 'Value for our partners',
                items: [
                    {
                        title: 'Faster market entry',
                        description:
                            'Leverage Activate’s network and channel experience instead of building a sales team from scratch.',
                        impact: 'Shorter time to market'
                    },
                    {
                        title: 'A disciplined channel',
                        description:
                            'Standardised pricing, territories and discounts reduce channel conflict and price undercutting between agents.',
                        impact: 'Stable pricing'
                    },
                    {
                        title: 'Well-supported outlets',
                        description:
                            'Agents receive merchandising, product materials and training so products are presented correctly and consistently.',
                        impact: 'Consistent brand image'
                    },
                    {
                        title: 'Transparent market data',
                        description:
                            'Regular reports on sell-through, stock and customer feedback help manufacturers adjust plans in time.',
                        impact: 'Better decisions'
                    }
                ]
            },
            models: {
                badge: 'Partnership models',
                title: 'For manufacturers and outlets',
                items: [
                    {
                        title: 'Distribution agency',
                        subtitle: 'Activate distributes the brand’s products',
                        points: ['Distribution by agreed territory', 'Channel policy built together', 'Regular sell-through reports']
                    },
                    {
                        title: 'Agent network development',
                        subtitle: 'Activate selects and manages agents',
                        points: ['Agent selection and vetting', 'Agency contract management', 'Monitoring channel-policy compliance']
                    },
                    {
                        title: 'Specialist store partnership',
                        subtitle: 'For stores and retail chains',
                        points: ['Genuine, steady supply', 'Merchandising and training support', 'Clear return policy']
                    }
                ]
            },
            process: {
                title: 'Channel development process',
                subtitle: 'Every agent and outlet is selected and supported through one consistent process.',
                steps: [
                    {
                        title: 'Research & direction',
                        items: ['Assess the product and target market', 'Choose the right channel model']
                    },
                    {
                        title: 'Policy design',
                        items: ['Pricing, discount and credit policy', 'Territory allocation', 'Outlet materials and standards']
                    },
                    {
                        title: 'Outlet development',
                        items: ['Select and sign agents', 'Merchandising and sales training', 'First-batch supply']
                    },
                    {
                        title: 'Operation & optimisation',
                        items: ['Track sell-through and stock', 'Regular agent care and review', 'Reporting and recommendations']
                    }
                ]
            }
        },

        shared: {
            why: {
                titleLine1: 'Why partners choose',
                subtitle: 'Trust built on transparency and consistency in every transaction.',
                intro:
                    'Activate works as a long-term trading partner: clear on legal matters, disciplined in operations and committed to delivering in full.',
                badges: ['Transparency', 'Keeping our word', 'Long-term partnership'],
                cards: {
                    legal: {
                        title: 'Transparent legal standing',
                        description:
                            'A clearly identified legal entity operating within its registered business lines. Contracts, e-invoices and full documentation for every transaction.'
                    },
                    quality: {
                        title: 'Quality control',
                        description: 'Lot-by-lot inspection, with traceability records for every shipment.'
                    },
                    contact: {
                        title: 'Dedicated contact',
                        description: 'Every partner has a dedicated contact who gives proactive updates and responds quickly.'
                    },
                    taxLabel: 'Tax ID',
                    taxCaption: 'Legal documents available for due diligence'
                }
            },
            commitments: {
                badge: 'Commitments',
                title: 'Activate’s commitments to partners',
                items: [
                    {description: 'Every transaction is backed by a clear contract with transparent terms, signed before work begins.'},
                    {description: 'Goods of clear origin, with full and valid invoices and documents.'},
                    {description: 'Lot-by-lot quality control before delivery, with traceability records kept.'},
                    {description: 'Delivery on the agreed schedule, with early notice of any issue.'},
                    {description: 'Strict confidentiality of partners’ commercial, pricing and customer information.'},
                    {description: 'A dedicated contact for every partner, responding during business hours.'},
                    {
                        description: 'Should any discrepancy in goods or schedule arise, Activate commits to:',
                        subCommitments: [
                            'Jointly verify the cause and record it transparently',
                            'Replace, top up or compensate under the contract terms',
                            'Review the process to prevent recurrence'
                        ]
                    }
                ]
            }
        }
    },

    home: {
        hero: {
            badge: 'Trading · Distribution · Import & Export',
            slogan: 'Connecting supply. Activating markets.',
            description:
                'Activate is the trading brand of CIVI GLOBAL COMPANY LIMITED - a trusted bridge between manufacturers, suppliers and the market, built on a transparent legal foundation and standardised processes.',
            facts: {
                legal: 'Legal entity',
                taxId: 'Tax ID',
                headquarters: 'Head office',
                headquartersValue: 'Hanoi, Vietnam'
            }
        },
        about: {
            badge: 'About us',
            titleLine1: 'A trading partner',
            titleLine2: 'built on trust',
            description:
                'Activate was founded with one clear goal: to be a trading partner that manufacturers, distributors and financial institutions can trust for the long term. We do not chase short-term deals; we build lasting partnerships in which every contract, every shipment and every document is transparent and delivered as promised.',
            visionLabel: 'Vision',
            vision:
                'To become a leading, trusted trading and distribution company, connecting quality goods between Vietnam and international markets.',
            missionLabel: 'Mission',
            mission:
                'To shorten the distance from manufacturer to market through steady supply capacity, standardised processes and strict legal compliance.'
        },
        fields: {
            badge: 'Business areas',
            title: 'Three pillars of capability',
            descriptionLabel: 'Overview',
            valuesLabel: 'Value for partners',
            partnersLabel: 'Best suited for'
        },
        values: {
            badge: 'Core values',
            title: 'Three commitments behind our reputation',
            items: [
                {
                    title: 'Transparency',
                    description:
                        'A clearly identified legal entity with complete contracts, invoices and documents. Every partnership term is agreed in writing and shared openly with partners.',
                    impact: 'Clarity in every transaction'
                },
                {
                    title: 'Keeping our word',
                    description:
                        'We only commit to what we can deliver, and we take full responsibility for the quality, quantity and timing of every order.',
                    impact: 'We do what we say'
                },
                {
                    title: 'Long-term partnership',
                    description:
                        'Partners’ lasting interests come first: stable policies, shared market insight and working through challenges together throughout the partnership.',
                    impact: 'Growing together'
                }
            ]
        },
        operations: {
            titleLine1: 'Infrastructure &',
            titleHighlight: 'Operations',
            subtitle: 'Standardised operations, control at every step.',
            intro:
                'A distributor’s reputation is measured by the stability of its operations. Activate focuses on three core foundations so every order is fulfilled consistently.',
            badges: ['Warehousing', 'QA/QC', 'Compliance'],
            imageAlt: 'Activate’s operational infrastructure',
            warehouse: {
                title: 'Warehousing & Logistics',
                description:
                    'Goods are stored, preserved and dispatched on a first-in, first-out (FIFO) basis, with inventory closely monitored. Activate works with reputable carriers to deliver on time domestically and internationally.'
            },
            quality: {
                title: 'QA/QC quality control',
                description:
                    'Multi-layer control: supplier assessment, incoming inspection, storage monitoring and pre-dispatch checks. Every lot carries traceability records.'
            },
            compliance: {
                title: 'Legal compliance',
                description:
                    'Operating within registered business lines, with transparent tax filing and full e-invoicing; compliant with labelling, origin and customs regulations.'
            }
        },
        process: {
            title: 'Partnership process',
            subtitle: 'Four clear steps, agreed in writing from the outset so partners can proceed with confidence.',
            steps: [
                {
                    title: 'Understanding needs',
                    items: ['Discuss categories, volumes, standards and timelines', 'Assess our ability to deliver']
                },
                {
                    title: 'Proposal & contract',
                    items: ['Quotation and partnership plan', 'Agree the terms', 'Sign the contract']
                },
                {
                    title: 'Supply & inspection',
                    items: ['Source the goods', 'Lot-by-lot quality inspection', 'Complete invoices and documents']
                },
                {
                    title: 'Delivery & reconciliation',
                    items: ['Delivery and acceptance', 'Account reconciliation', 'Ongoing care and periodic review']
                }
            ]
        }
    },

    about: {
        hero: {
            badge: 'About Activate',
            titleLine1: 'Connecting supply',
            titleLine2: 'Activating markets',
            description:
                'Activate is the trading brand of CIVI GLOBAL COMPANY LIMITED, operating in wholesale, import & export and distribution agency. We build a trusted bridge between manufacturers, suppliers and the market.',
            cards: {
                vision: 'Vision',
                mission: 'Mission',
                values: 'Core values',
                valuesDescription: 'Transparency · Keeping our word · Long-term partnership. Three values that guide every decision and every transaction at Activate.'
            }
        },
        story: {
            badge: 'Business philosophy',
            titleLine1: 'Trust is',
            titleLine2: 'our greatest asset',
            subtitle: 'We build partnerships, not just transactions.',
            paragraphs: [
                'In trading and distribution, the most lasting value is not a single large order but the trust earned through every on-time delivery, every clear document and every commitment kept in full.',
                'That is why Activate grows with discipline: transparent in legal matters, standardised in operations, and always putting partners’ long-term interests ahead of our own short-term gain.'
            ],
            imageAlt: 'Activate’s business philosophy'
        },
        legal: {
            badge: 'Legal profile',
            title: 'A transparent legal entity, ready for due diligence',
            description:
                'Activate provides complete legal documentation to support due diligence by partners, suppliers and credit institutions.',
            note: 'Copies of the Enterprise Registration Certificate and related documents are available on request.',
            activitiesTitle: 'Business lines',
            activities: [
                {title: 'Wholesale', description: 'Wholesale of consumer goods, household products, fashion and technical products.'},
                {title: 'Retail', description: 'Retail through specialist stores and modern distribution channels.'},
                {title: 'Agency & brokerage', description: 'Agency, brokerage and development of distribution channels.'},
                {title: 'Import & export', description: 'Export, import and import/export entrustment of goods.'}
            ]
        }
    },

    fieldsPage: {
        hero: {
            titleLine1: 'BUSINESS',
            titleLine2: 'AREAS',
            description:
                'Activate’s work is organised into three mutually reinforcing pillars, forming a seamless value chain from source to point of sale.'
        }
    },

    contact: {
        hero: {
            badge: 'Contact',
            title: 'Partner portal',
            description:
                'Send a distribution, supply or financial partnership proposal - or contact Activate directly using the legal-entity details below.'
        }
    }
};
