// src/i18n/translations/en.js
// English (/en). Key nào thiếu ở đây sẽ tự rơi về bản tiếng Việt.
export default {
    language: {
        label: 'Language',
        switchTo: 'Switch to {{language}}'
    },

    common: {
        learnMore: 'Learn more',
        consultNow: 'Get a consultation',
        partnerNow: 'Work with us',
        viewProjects: 'View projects',
        hotline: 'Hotline',
        email: 'Email',
        website: 'Website',
        address: 'Address',
        addressValue: '2/11 Vuong Thua Vu, Thanh Xuan, Hanoi',
        home: 'Home',
        customers: 'Clients',
        trustedCustomers: 'Clients who trust us'
    },

    nav: {
        about: 'About',
        services: 'Services',
        ai: 'AI',
        projects: 'Projects',
        news: 'News',
        cta: 'Work with us',
        servicesMenu: {
            aiData: 'Automation - Data - AI',
            aiDataShort: 'Automation - AI',
            googleAds: 'Google Ads',
            facebookAds: 'Facebook Ads',
            tiktokAds: 'TikTok Ads',
            facebookCrm: 'Facebook Dataset & CRM',
            facebookCrmShort: 'Facebook CRM',
            tickXanh: 'Facebook Blue Badge',
            tickXanhShort: 'Blue Badge',
            websiteLanding: 'Website & Landing Page',
            marketingOutsource: 'Outsourced Marketing Team',
            marketingOutsourceShort: 'Marketing Team'
        },
        projectsMenu: {
            all: 'All projects',
            portfolio: 'Company profile',
            workflow: 'Automation workflow',
            workflowLong: 'Automation Workflow'
        }
    },

    footer: {
        tagline: 'AI - Marketing Automation Agency',
        servicesTitle: 'Our services',
        services: {
            facebookAds: 'Facebook Ads service',
            googleAds: 'Google Ads service',
            tiktokAds: 'TikTok Ads service',
            tickXanh: 'Facebook Blue Badge service',
            marketingOutsource: 'Outsourced marketing team',
            websiteLanding: 'Website & Landing page development',
            aiData: 'Automation - AI - Data',
            facebookCrm: 'Facebook Dataset & CRM'
        },
        policiesTitle: 'Policies & general terms',
        policies: {
            general: 'Policies & general terms',
            warranty: 'Warranty policy',
            privacy: 'Privacy policy',
            handover: 'Handover policy',
            payment: 'Payment terms'
        },
        newsletterTitle: 'Subscribe to our newsletter',
        newsletterDescription:
            'Subscribe for the latest updates on our services and technology trends from Nextgency.',
        newsletterPlaceholder: 'Enter your email',
        newsletterButton: 'Subscribe',
        copyright: '© Copyright and operated by'
    },

    form: {
        name: 'Full name *',
        namePlaceholder: 'Enter your name',
        phone: 'Phone number *',
        phonePlaceholder: 'Enter your phone number',
        email: 'Email *',
        emailPlaceholder: 'example@gmail.com',
        businessField: 'Industry *',
        businessFieldPlaceholder: 'E.g. E-commerce, F&B...',
        brand: 'Brand name',
        brandPlaceholder: 'Enter your brand name (if any)',
        service: 'Service you need *',
        servicePlaceholder: 'Select the service you are interested in',
        request: 'What do you need help with? *',
        requestPlaceholder: 'Describe your request in detail...',
        submit: 'Send request',
        submitNow: 'Send request now',
        submitting: 'Sending...',
        success: 'Thank you! We will get back to you within 24 hours.',
        error: 'Something went wrong, please try again later.',
        serviceOptions: {
            aiData: 'Automation - Data - AI',
            googleAds: 'Google Ads',
            facebookAds: 'Facebook Ads',
            tiktokAds: 'TikTok Ads',
            facebookCrm: 'Facebook Dataset & CRM',
            tickXanh: 'Facebook Blue Badge',
            websiteLanding: 'Website & Landing Page',
            contentAi: 'AI content system',
            marketingOutsource: 'Outsourced Marketing Team'
        }
    },

    // ================================================================
    // Khối dùng chung của các trang dịch vụ
    // ================================================================
    shared: {
        cta: {
            consultNow: 'Get a consultation',
            partnerNow: 'Work with us',
            getConsultation: 'Get a consultation',
            contactForQuote: 'Get in touch for advice and a quote.'
        },

        clients: {
            titleLine1: 'Clients &',
            titleLine2: 'Strategic partners',
            subtitle:
                'The companies walking with Nextgency on the journey towards lasting digital transformation',
            paragraph1:
                'Throughout our journey, Nextgency has been proud to work with more than 100 businesses and organisations across a wide range of sectors: beauty, education, healthcare, technology, public services and manufacturing.',
            paragraph2:
                'We do more than deliver technology projects – we act as a strategic advisory partner, analysing data with our clients, designing solutions and optimising business results stage by stage.'
        },

        commitment: {
            title: 'Our commitments',
            items: [
                {
                    title: 'Built to your requirements',
                    description: 'Your ad account will be set up to Google’s recommended structure'
                },
                {
                    title: 'Load times under 2 seconds',
                    description:
                        'We continuously optimise your budget based on real performance data and visitor behaviour'
                },
                {
                    title: 'Professional technical support',
                    description: 'You keep full access to the ad account and the reporting system.'
                },
                {
                    title: 'Full ownership handed over',
                    description:
                        'No costs outside the contract unless you have agreed to them in writing.'
                },
                {
                    title: 'Strict confidentiality',
                    description:
                        'All account details, campaign data and customer information are kept strictly confidential.'
                },
                {
                    title: 'Professional complaint handling',
                    description: 'Whenever a complaint is raised, Nextgency commits to:',
                    subCommitments: [
                        'Responding within 24 working hours',
                        'Producing a clear written record of responsibility, the fix and how it will be resolved for good',
                        'Compensating with additional services or a fair refund if the fault lies with our team'
                    ]
                }
            ]
        },

        offers: {
            title: 'Special offers',
            discountValue: '{{value}} off',
            totalCost: 'of total spend',
            footer: 'Get in touch and we will help you pick the package that fits best',
            commitment: {
                title: 'Commitment package',
                subtitle: 'Based on contract length',
                durations: ['3 months', '6 months', '12 months'],
                bonus: 'Free high-converting ad creative and landing page templates'
            },
            growth: {
                title: 'Growth package',
                subtitle: 'Based on media budget',
                budgetLabel: 'Budget',
                cashbackLabel: 'Cashback',
                methodLabel: 'Paid as',
                budgets: ['100M VND/mo', '200M VND/mo', '350M VND/mo'],
                method: 'Credited to the next month'
            },
            combo: {
                title: 'Multi-channel combo',
                subtitle: 'Combine several services',
                countLabel: 'Services',
                discountLabel: 'Discount applied',
                items: ['2 services', '3 services']
            }
        },

        whyChooseUs: {
            titleLine1: 'Why choose',
            subtitle:
                'Nextgency is a trusted agency with 3 years of experience, working alongside hundreds of businesses to raise their digital game',
            teamAlt: 'The Nextgency specialist team',
            badges: {
                enthusiastic: 'Passionate',
                young: 'Young',
                experienced: 'Experienced'
            },
            experienceTitle: '3+ years of experience',
            supportTitle: '24/7 support',
            trustedBy: 'Trusted by',
            industries: 'Businesses across many industries'
        },

        packages: {
            title: 'Our packages',
            popular: 'Popular'
        },

        // Dải CTA đặt lịch Growth Call ở cuối các trang dịch vụ
        bookingCta: {
            title: 'Ready to find the real bottleneck in your growth?',
            description:
                'Book a free 30-minute 1-to-1 Growth Call — the holding deposit is refunded in full, at any time.',
            button: 'Book a consultation'
        }
    },

    popup: {
        title: 'Get a free consultation',
        subtitle: 'One of our specialists will reach out within 24 hours'
    },

    consultation: {
        title: 'Get a consultation',
        description:
            'Thank you for taking the time to fill in this form. Our team will review your information carefully and contact you within 24 working hours with the solution that fits you best.'
    },

    contact: {
        title: 'Talk to our team',
        description:
            'Thank you for reaching out to Nextgency. Our team will review your information carefully and contact you within 24 working hours with the solution that fits you best.'
    },

    home: {
        hero: {
            badge: 'Digital Solutions Agency',
            description:
                'Nextgency is a leading technology partner delivering end-to-end digitalisation. We turn ideas into reality with the most advanced technology available.',
            cta: 'View projects'
        },
        about: {
            badge: 'About Nextgency',
            titleLine1: 'Leading The',
            titleLine2: 'Digital Shift',
            description:
                'Nextgency is your strategic partner in the digital era. We deliver digital transformation solutions that help your business grow faster.',
            cta: 'Learn more'
        },
        services: {
            badge: 'Services',
            title: 'Services by Nextgency',
            descriptionLabel: 'Overview',
            technologiesLabel: 'Technologies used',
            durationLabel: 'Delivery time',
            noteLabel: 'What you get',
            cta: 'Learn more',
            items: {
                aiData: {
                    name: 'Automation - AI - Data',
                    title: 'Automation - AI - Data',
                    description:
                        'Want to multiply output, cut manual work and improve customer experience? The answer lies in automation and AI. Nextgency helps businesses make their processes genuinely intelligent.',
                    duration: '14 - 30 days',
                    note: 'Streamlined operations, automated tasks and data you can actually act on'
                },
                googleAds: {
                    name: 'Google Ads',
                    title: 'Google Ads',
                    description:
                        'Nextgency runs Google Ads across a full range of campaign types so your business becomes the first name customers think of in your category.',
                    duration: '3 - 7 days',
                    note: 'Campaign setup, conversion tracking and continuous budget optimisation'
                },
                facebookAds: {
                    name: 'Facebook Ads',
                    title: 'Facebook Ads',
                    description:
                        'Facebook Ads by Nextgency is the right hand that helps your business mine the gold still waiting in Facebook’s vast audience.',
                    duration: '3 - 7 days',
                    note: 'Audience building, campaign rollout and conversion rate optimisation'
                },
                websiteLanding: {
                    name: 'Website & Landing Page',
                    title: 'Website & Landing Page',
                    description:
                        'A website or landing page is not just somewhere customers drop by – it is where they stay, convert and come back. Nextgency builds modern digital platforms end to end.',
                    duration: '7 - 21 days',
                    note: 'Modern interface design, faster page loads and higher conversion rates'
                },
                tiktokAds: {
                    name: 'TikTok Ads',
                    title: 'TikTok Ads',
                    description:
                        'A virus is tiny, but once it spreads the effect is enormous – exactly how your campaigns go viral on TikTok to drive revenue and brand awareness everywhere.',
                    duration: '3 - 7 days',
                    note: 'TikTok campaign rollout, creative testing and lower cost per conversion'
                },
                facebookCrm: {
                    name: 'Facebook Dataset & CRM',
                    title: 'Facebook Dataset & CRM',
                    description:
                        'In an era where data is the real diamond mine, Nextgency turns every behaviour and every interaction into advertising leverage through our Facebook Dataset & CRM service.',
                    duration: '7 - 14 days',
                    note: 'Connected customer data, CRM sync and far more reliable ad measurement'
                },
                marketingOutsource: {
                    name: 'Outsourced Marketing Team',
                    title: 'Outsourced Marketing Department',
                    description:
                        'Pouring our team’s expertise into the most promising projects of our clients is exactly what Nextgency commits to with our outsourced marketing department.',
                    duration: 'Monthly retainer',
                    note: 'We work like your in-house marketing team, from strategy through to execution'
                },
                tickXanh: {
                    name: 'Facebook Blue Badge',
                    title: 'Facebook Blue Badge',
                    description:
                        'Nextgency handles Facebook blue badge verification from A to Z, shortening review time, standardising your documentation and raising your real approval rate.',
                    duration: '7 - 30 days',
                    note: 'Document consulting, profile standardisation and full verification support'
                }
            }
        },
        projectsShowcase: {
            badge: 'Projects',
            title: 'Selected work by Nextgency',
            description: 'Explore the websites, platforms and digital solutions we have created with our clients.',
            viewAll: 'View all projects',
            hint: 'Move to explore · Select a project for a preview',
            wallLabel: 'Nextgency animated project gallery',
            preview: 'Project preview',
            close: 'Close project preview',
            noImage: 'No project image available',
            previousImage: 'Previous image',
            nextImage: 'Next image',
            image: 'Image',
            date: 'Date',
            partner: 'Partner',
            category: 'Category',
            technologies: 'Technology & solutions',
            viewDetail: 'View details',
            viewProject: 'View live project'
        },
        testimonials: {
            badge: 'Testimonials',
            title: 'what our partners say',
            description:
                'We take pride in the positive feedback from our clients – it is what keeps Nextgency moving forward.',
            items: [
                'Nextgency delivered a brilliant solution for us. A professional, creative team that is always ready to help.',
                'Nextgency brought us fresh, effective technology solutions that matched exactly where we wanted to grow.',
                'Nextgency helped us optimise our business operations with professionalism, dedication and creative thinking.',
                'Nextgency consistently brings creative ideas that are practical and effective for our communication projects.',
                'Nextgency understood our brand needs and delivered solutions that were fitting, polished and effective.',
                'Nextgency has walked alongside us with professionalism, creativity and genuinely dedicated support.',
                'We have partnered with Nextgency on several projects and have always appreciated the team’s professionalism and effectiveness.',
                'Nextgency provides dedicated support, responds quickly and stays closely involved throughout the entire implementation.'
            ]
        },
        clients: {
            titleLine1: 'Clients &',
            titleLine2: 'Strategic partners',
            description:
                'The companies walking with Nextgency on the journey towards lasting digital transformation',
            summary:
                'Nextgency is proud to work with more than 100 organisations across beauty, education, healthcare, technology, public services and manufacturing.',
            partnersLabel: 'Strategic partners'
        }
    },

    about: {
        hero: {
            badge: 'About Nextgency',
            titleLine1: 'Your all-round',
            titleLine2: 'digital transformation partner',
            description:
                'Nextgency is your strategic partner in the digital era. We deliver digital transformation solutions that help your business grow faster.',
            cta: 'Get a consultation',
            cards: {
                innovation: {
                    subtitle: 'Passionate',
                    description: 'Pioneering solutions that transform businesses'
                },
                strategy: {
                    subtitle: 'Young',
                    description: 'Data-driven approaches for measurable outcomes'
                },
                partnership: {
                    subtitle: 'Experienced',
                    description: 'Building lasting relationships through trust'
                }
            }
        },
        story: {
            badge: 'About Nextgency',
            titleLine1: 'Our',
            titleLine2: 'Story',
            subtitle: 'Technology – the turning point for a breakthrough',
            paragraph1:
                'Nextgency was founded in 2025, after our lead founder had spent more than five years running an e-commerce business. Along that journey the founder realised one thing: technology is the key that changes an entire business model – from operations management and marketing through to profit optimisation.',
            paragraph2:
                'By applying technology the right way, the founder’s own business broke through its old ceiling and opened up a new path to growth. That success became living proof that technology does not merely support a business, it reshapes its future. Built on that hands-on foundation, the core team came together to found Nextgency, with a mission to bring proven technology solutions to other businesses – helping them not only solve today’s problems but also build a long-term competitive edge.'
        }
    },

    projectSlider: {
        ecommerce: 'E-commerce website',
        elearning: 'E-learning website',
        corporate: 'Corporate website',
        event: 'Event website',
        payment: 'Event payment & check-in system',
        crm: 'CRM Dashboard',
        invitation: 'Digital invitation builder',
        branding: 'Brand identity design',
        dataset: 'Dataset Ads Funnel'
    },

    // ================================================================
    // Nội dung riêng của từng trang dịch vụ
    // ================================================================
    servicePages: {
        googleAds: {
            hero: {
                title: 'Google Ads service',
                description:
                    'Nextgency runs Google Ads across a full range of campaign types so your business becomes the first name customers think of in your category.'
            },
            divider: [
                'Google Search Ads, Display, YouTube and Performance Max.',
                'Tracking by keyword, by campaign and by lead source.',
                'Conversion optimisation driven by landing page and user behaviour.'
            ],
            painPoints: {
                title: 'Where businesses lose money',
                items: [
                    {
                        title: 'Landing page not optimised',
                        description:
                            'Your ads rank at the top but still bring no orders, because the landing page was never built to convert.',
                        impact: 'Ad spend burned for nothing'
                    },
                    {
                        title: 'No idea which keywords work',
                        description:
                            'You spend on Google every day without knowing which keywords actually deliver.',
                        impact: 'Marketing budget wasted'
                    },
                    {
                        title: 'No tracking in place',
                        description:
                            'Without proper behaviour tracking there is no way to measure performance campaign by campaign.',
                        impact: 'Nothing left to optimise'
                    },
                    {
                        title: 'Ads that do not grab attention',
                        description:
                            'Dull, forgettable creative means your best prospects end up with a competitor instead.',
                        impact: 'Customers lost'
                    }
                ]
            },
            why: {
                intro: 'Multi-channel Google Ads strategy built around the real customer journey',
                experienceDescription:
                    'Optimised on keywords, behaviour and lead source – not just impressions',
                highlightTitle: 'Landing page optimisation',
                highlightDescription:
                    'Landing pages optimised and personalised for the user experience (UX/UI).',
                supportDescription:
                    'Full support, clear reporting and campaigns adjusted to your business goals.'
            },
            packages: {
                subtitle: 'Account management / Full-service operation / Account rental',
                basic: {
                    title: 'Account management',
                    features: [
                        'Account set up to Google’s recommended structure',
                        'Conversion tracking installed and monitored',
                        'The agreed metrics tracked and monitored (CPC, CTR, conversions...)',
                        'Regular optimisation recommendations (weekly or monthly)',
                        'Performance reporting on a fixed cycle',
                        'Regular account reviews by Nextgency',
                        'Dedicated advice whenever you want to expand a campaign'
                    ]
                },
                standard: {
                    title: 'Full-service operation',
                    features: [
                        'Account built from scratch or an existing account rebuilt',
                        'Conversion tracking installed and monitored (Google Ads Conversion, GA4, GTM…)',
                        'The agreed metrics tracked and optimised (clicks, CPC, ROAS, etc.)',
                        'Campaigns proposed and launched to suit your industry',
                        'Regular reporting (weekly/monthly), performance explained, growth recommended',
                        'Automated reporting through Data Studio or Google Sheets',
                        'Help with landing pages, content and conversion funnel advice',
                        'Dedicated Google support through the Nextgency partnership'
                    ]
                },
                advanced: {
                    title: 'Account rental',
                    features: [
                        'A Google Ads invoice account provided',
                        'Nextgency creates the account and hands it over for you to use',
                        'Guidance on linking assets and assigning account permissions',
                        'Dedicated Google support through the Nextgency partnership',
                        'Payment monitoring, account protection and incident handling',
                        'Help connecting to an MCC or other related technical platforms'
                    ]
                }
            },
            process: {
                title: 'How we work',
                subtitle:
                    'Six professional steps to get the most out of your ad spend and hit your business goals',
                steps: [
                    {
                        title: 'Briefing & goal setting',
                        items: [
                            'Gathering details on your category, products and audience',
                            'Agreeing the budget and the KPIs you expect'
                        ]
                    },
                    {
                        title: 'Analysis & strategy proposal',
                        items: [
                            'Researching the market and your competitors',
                            'Recommending the right Google Ads formats',
                            'Building the funnel from Search to Display to Remarketing'
                        ]
                    },
                    {
                        title: 'Setting up the ad system',
                        items: [
                            'Creating or restructuring the Google Ads account',
                            'Installing conversion tracking, GA4 and GTM',
                            'Preparing copy, banners and landing pages'
                        ]
                    },
                    {
                        title: 'Launch & campaign monitoring',
                        items: [
                            'Rolling campaigns out in phases',
                            'Monitoring the numbers (CPC, CTR, conversions...)',
                            'Optimising budget and audiences'
                        ]
                    },
                    {
                        title: 'Reporting & performance tuning',
                        items: [
                            'Transparent weekly/monthly reporting',
                            'Performance measured against the KPIs',
                            'Adjustments based on user behaviour'
                        ]
                    },
                    {
                        title: 'Review & renewal',
                        items: [
                            'A wrap-up meeting on results',
                            'Recommendations to upgrade or increase budget',
                            'Renewing the contract if you want to continue'
                        ]
                    }
                ]
            },
            adFormats: {
                title: '9 advertising formats',
                subtitle:
                    'Every package can run all nine Google advertising formats, in whatever mix your business needs',
                items: [
                    'Search ads',
                    'Display ads',
                    'Video ads',
                    'Performance Max ads',
                    'Local ads',
                    'Shopping ads',
                    'Discovery ads',
                    'Smart ads',
                    'App ads'
                ]
            }
        },

        facebookAds: {
            hero: {
                titleLine1: 'OUR',
                brand: 'Facebook Ads',
                descriptionPrefix: 'Nextgency’s ',
                descriptionSuffix:
                    ' service is the right hand that helps your business "mine the gold" still hidden in this long-established platform, through:',
                bullets: [
                    'Ad account rental.',
                    'Conversion and remarketing campaigns with a multi-layer funnel (TOFU – MOFU – BOFU).',
                    'Optimisation driven by CAPI events (Facebook Conversion API).',
                    'Proper tracking from the top of the funnel to the order, integrated with your website and chatbot.'
                ]
            },
            divider: [
                'Ad account rental',
                'Conversion and remarketing campaigns with a multi-layer funnel (TOFU – MOFU – BOFU)',
                'Optimisation driven by CAPI events (Facebook Conversion API)',
                'Proper tracking from the top of the funnel to the order, integrated with your website and chatbot'
            ],
            painPoints: {
                title: 'Where businesses lose money',
                items: [
                    {
                        title: 'Ad account keeps getting restricted',
                        description:
                            'Ad accounts are restricted again and again, campaigns break and you can never scale.',
                        impact: 'Campaigns keep breaking'
                    },
                    {
                        title: 'Poor system integration',
                        description:
                            'The ad system cannot be connected to your chatbot, website or CRM, so the data goes unused.',
                        impact: 'Ad spend burned'
                    },
                    {
                        title: 'No tracking in place',
                        description:
                            'You spend steadily but have no idea where the orders come from – no tracking, no clear reporting',
                        impact: 'ROI cannot be measured'
                    },
                    {
                        title: 'No structured sales funnel',
                        description:
                            'Building a proper TOFU – MOFU – BOFU funnel for sustainable conversion turns out to be hard',
                        impact: 'Low conversion'
                    }
                ]
            },
            why: {
                intro: 'Official, highly stable ad accounts provided',
                experienceDescription:
                    'A team with hands-on experience across many industries, including the hard-to-advertise ones',
                highlightTitle: 'End-to-end service',
                highlightDescription:
                    'From setup to daily operation: building and running your fanpage, installing chatbots, integrating AI and more.',
                supportDescription:
                    'Clear reporting, results measured at every funnel stage – ongoing support that works like an in-house marketing team'
            },
            packages: {
                title: 'Facebook Ads packages',
                subtitle: 'Two main packages: conversion campaigns / invoice account rental',
                basicTitle: 'Package 1: Conversion campaigns',
                advancedTitle: 'Package 2: Ad account rental (Invoice)',
                basic: [
                    {
                        subtitle: '1. Strategy consulting & funnel design',
                        features: [
                            'Analysing your category, customer behaviour and business goals.',
                            'Building a multi-layer ad funnel: TOFU – MOFU – BOFU.',
                            'Mapping the budget roadmap and KPI targets by phase.'
                        ]
                    },
                    {
                        subtitle: '2. Campaign setup',
                        features: [
                            'Setting up the ad account (if you do not have one).',
                            'Installing the pixel and Facebook Conversion API (CAPI).',
                            'Building and segmenting audiences (custom audience, lookalike...).',
                            'Creating and launching campaigns (conversion, messaging, remarketing...).'
                        ]
                    },
                    {
                        subtitle: '3. Ad creative design',
                        features: [
                            'Writing copy (captions, calls to action) matched to the customer journey.',
                            'Designing static images or short videos (on request).',
                            'A/B testing multiple creative versions.'
                        ]
                    },
                    {
                        subtitle: '4. Tracking – measurement – optimisation',
                        features: [
                            'Tracking performance per campaign group: CPM, CPC, CTR, ROAS, CPA.',
                            'Detailed reporting on lead sources and the best-converting audiences.',
                            'Real-time budget optimisation, excluding audiences that do not perform.'
                        ]
                    },
                    {
                        subtitle: '5. Cross-platform integration and support',
                        features: [
                            'Connecting to your website, chatbot and CRM (if you have one).',
                            'Advice and help building the fanpage and landing pages behind the ads.'
                        ]
                    },
                    {
                        subtitle: '6. Reporting & ongoing partnership',
                        features: [
                            'Regular reporting: daily, weekly or on request.',
                            'Reviewing and adjusting KPI targets phase by phase.'
                        ]
                    }
                ],
                advanced: [
                    {
                        subtitle: '1. Invoice ad account provided',
                        features: [
                            'A large, high-trust BM account issued directly by Facebook.',
                            'High and stable spending capacity, rarely locked or restricted.',
                            'Able to run specialised or hard-to-advertise categories.'
                        ]
                    },
                    {
                        subtitle: '2. Setup and asset connection support',
                        features: [
                            'Help connecting pages, pixels, verified domains, child BMs and more.',
                            'Assigning the right permissions to your own ad team.'
                        ]
                    },
                    {
                        subtitle: '3. Top-up process and financial management',
                        features: [
                            'Flexible top-ups by bank transfer.',
                            'Fast balance confirmation so campaigns never stall.',
                            'Regular spend reports on request.'
                        ]
                    },
                    {
                        subtitle: '4. Operational support and incident handling',
                        features: [
                            'Support when ads are rejected or the account is restricted.',
                            'Technical guidance on using the account correctly within Facebook’s rules.',
                            'Basic technical support if you run the ads with your own team.'
                        ]
                    },
                    {
                        subtitle: '5. Benefits for large accounts',
                        features: [
                            'Discounts based on monthly budget level.',
                            'A dedicated account for high spend (over 500M VND per month).'
                        ]
                    }
                ]
            },
            process: {
                title: 'How we work',
                subtitle:
                    'Six professional steps to get the most out of your ad spend and hit your business goals',
                steps: [
                    {
                        title: 'Briefing & analysis',
                        items: [
                            'Taking the brief from you',
                            'Analysing your category and goals',
                            'Proposing the TOFU - MOFU - BOFU funnel strategy'
                        ]
                    },
                    {
                        title: 'Setup & preparation',
                        items: [
                            'Setting up the ad account',
                            'Installing the pixel & CAPI',
                            'Preparing copy and visuals',
                            'Structuring campaigns and ad sets'
                        ]
                    },
                    {
                        title: 'Running & optimising',
                        items: [
                            'Running the ads and monitoring them',
                            'Optimising budget and audiences',
                            'Regular reporting and alerts'
                        ]
                    },
                    {
                        title: 'Review & scale',
                        items: [
                            'Performance review meetings',
                            'Adjusting the strategy',
                            'Renewing the contract or increasing budget'
                        ]
                    }
                ]
            }
        },

        tiktokAds: {
            hero: {
                descriptionPrefix:
                    'A virus is tiny, but once it spreads the effect is enormous – exactly how your ads go viral on ',
                brand: 'the TikTok platform',
                descriptionSuffix:
                    ' to drive revenue and put your brand everywhere. Here is what Nextgency’s TikTok Ads service delivers:',
                bullets: [
                    'Short-burst viral campaigns tuned for consumer goods, fashion and beauty.',
                    'Video creative plus pixel tracking built to TikTok’s standard.',
                    'Retargeting everyone who watched or engaged with your videos.'
                ]
            },
            divider: [
                'Short-burst viral campaigns tuned for consumer goods, fashion and beauty.',
                'Video creative plus pixel tracking built to TikTok’s standard.',
                'Retargeting everyone who watched or engaged with your videos.'
            ],
            painPoints: {
                title: 'Where businesses lose money',
                items: [
                    {
                        title: 'Weak video content',
                        description:
                            'You cannot keep up with TikTok trends, and the in-house team has never made videos people want to watch.',
                        impact: 'Ad spend burned for nothing'
                    },
                    {
                        title: 'Content that does not convert',
                        description:
                            'You put money behind the ads but the content does not land – views and engagement come in, sales do not.',
                        impact: 'Low ROI, wasted budget'
                    },
                    {
                        title: 'Losing warm prospects',
                        description:
                            'With no retargeting for people who watched or engaged, thousands of repeat-purchase chances slip away.',
                        impact: 'Sales opportunities missed'
                    },
                    {
                        title: 'TikTok Pixel not set up properly',
                        description:
                            'Without a correctly installed TikTok Pixel there is no way to optimise towards your best audiences.',
                        impact: 'Targeting off the mark'
                    }
                ]
            },
            why: {
                intro: 'A complete TikTok ecosystem designed to deliver real business growth',
                experienceDescription:
                    'Driving retail sales through location-based ads that convert fast',
                highlightTitle: 'Brand building',
                highlightDescription:
                    'Building your company and product brands on the short-video platform',
                supportDescription:
                    'Close attention to the numbers, campaigns optimised, conversion committed to'
            },
            adFormats: {
                title: 'TikTok ad formats',
                subtitle:
                    'Nextgency runs every TikTok advertising format, tuned to whichever business goal you are chasing',
                items: [
                    {
                        title: 'Branding',
                        description: 'Awareness ads that appear on app open or in the feed'
                    },
                    {
                        title: 'Leads & conversion',
                        description: 'Ads that capture data and drive traffic to your site or landing page'
                    },
                    {
                        title: 'TikTok Shop',
                        description: 'Selling video ads that lift views, clicks and closed orders'
                    },
                    {
                        title: 'Livestream',
                        description: 'Pushing viewers into your livestream and lifting real engagement'
                    },
                    {
                        title: 'Engagement & personal brand',
                        description: 'More followers and channel views – ideal for creators, experts and KOLs'
                    },
                    {
                        title: 'Apps & digital products',
                        description: 'App install ads that grow your trial user base'
                    }
                ]
            },
            packages: {
                subtitle:
                    'Website and landing page conversion ads / TikTok Shop ads / TikTok livestream ads',
                basic: {
                    title: 'Website / landing page conversion package',
                    features: [
                        'Analysing your product, category and business goals',
                        'Choosing the right TikTok Ads format (Traffic, Lead Form, Conversion)',
                        'Setting up the account and tracking',
                        'Structuring campaigns around the funnel model',
                        'Configuring ad sets, audiences, budgets and scheduling',
                        'Using your existing content or proposing new creative',
                        'Monitoring the metrics and optimising performance',
                        'Reporting and recommending campaign improvements'
                    ]
                },
                standard: {
                    title: 'TikTok ads package (video conversion)',
                    features: [
                        'Reviewing your category and hero product range',
                        'Identifying peak hours and how your customers buy on TikTok',
                        'Connecting TikTok Shop to the ad system',
                        'Attaching product links inside videos and ads',
                        'Building Add to Cart / Product View / Shop Follow campaigns',
                        'Optimising the channel’s content lines',
                        'Monitoring the metrics and optimising performance',
                        'Reporting and recommending campaign improvements'
                    ]
                },
                advanced: {
                    title: 'TikTok livestream ads package',
                    features: [
                        'Registering Live-format ad campaigns with TikTok',
                        'Making sure content passes review and stays within policy',
                        'Advising on livestream scripts that hold attention (minigames, product demos, feedback...)',
                        'Optimising the set, the talk track and the call to action',
                        'Setting up ads that drive into the livestream in real time',
                        'Targeting audiences by age, behaviour and category',
                        'Real-time updates on viewer count and average watch time',
                        'Adjusting ad sets or content mid-session where needed',
                        'A full performance wrap-up after the livestream'
                    ]
                }
            }
        },

        websiteLanding: {
            hero: {
                title: 'We build'
            },
            divider: [
                'Modern UI/UX web design across every platform (PC – Mobile – Tablet).',
                'Pixels, chatbots, CRM, payments or automation integrated on request.',
                'Hosting and maintenance included in the full package.'
            ],
            carousel: {
                brand: 'Website & Landing Page',
                description:
                    ' is not just somewhere customers drop by – it is where they stay, convert and come back. Nextgency builds modern digital platforms end to end.',
                projectFallback: 'the project',
                viewDetail: 'View details of {{name}}'
            },
            portfolio: {
                title: 'Projects by Nextgency'
            },
            video: {
                badge: 'Behind the process',
                title: 'From the idea to the finished product',
                description:
                    'See how the Nextgency team turns ideas into outstanding websites. From research and design through to launch, every step is handled with care and craft.'
            },
            painPoints: {
                title: 'Where businesses lose money',
                items: [
                    {
                        title: 'Slow to load, poor experience',
                        description:
                            'The site looks good but loads slowly – the user experience (UX/UI) was never optimised.',
                        impact: 'Visitors leave within 3 seconds'
                    },
                    {
                        title: 'Not responsive on mobile',
                        description:
                            'The layout falls apart on mobile – while 80% of your customers are browsing on a phone.',
                        impact: '80% of prospects lost'
                    },
                    {
                        title: 'No visibility into the data',
                        description:
                            'No chatbot, no pixel, no measurement tools – so you never know where visitors came from, how long they stayed or whether they bought.',
                        impact: 'Marketing cannot be optimised'
                    },
                    {
                        title: 'Unclear call to action',
                        description:
                            'The landing page has no clear call to action – people arrive, scroll around and then simply leave.',
                        impact: 'Low conversion rate'
                    }
                ]
            },
            why: {
                intro: 'Built for speed on optimised hosting, so the site stays smooth on every platform',
                experienceDescription:
                    'Mobile-first interfaces: display, scrolling and user experience optimised for every mobile device',
                highlightTitle: 'Landing page optimisation',
                highlightDescription:
                    'Facebook Pixel, Google Tag Manager and AI chatbots fully integrated, so you can see the entire customer journey',
                supportDescription:
                    'SEO-ready structure and solid UX/UI for the best possible user experience',
                trustedTitle: 'Trusted by more than 100 clients',
                trustedDescription:
                    'Every landing page is designed as a sales funnel, applying behavioural psychology to guide, hold and close'
            },
            offers: {
                titleLine1: 'Special offers',
                titleLine2: 'when you take a COMBO',
                subtitleLine1: 'Available to every',
                subtitleLine2: 'customer',
                discountLabel: 'Save',
                inLabel: 'in',
                items: [
                    {title: 'COMBO\nLANDING PAGE &\n WEBSITE', description: 'of total spend'},
                    {title: 'COMBO\nWEBSITE &\nADS SERVICE', description: 'off ad spend in the first month'},
                    {
                        title: 'COMBO\nLANDING PAGE & \nWEBSITE & ADS',
                        description: 'One extra month of technical support, free'
                    }
                ]
            },
            landingPackages: {
                title: 'Landing page packages',
                subtitle:
                    'Pick the package that fits and get a professional landing page, built to convert and to work on any device',
                basic: {
                    title: 'Basic landing page',
                    features: [
                        'Custom design to your brief',
                        'Full source code handed over',
                        'Delivery in 3–7 working days',
                        'Up to 3 rounds of revisions',
                        'Works across phones, tablets and desktops',
                        'Page load optimised to 1–2 seconds',
                        'Google PageSpeed score optimised',
                        'User documentation, plus Livechat, Hotline, Facebook and Zalo integration',
                        'Design editing software not included',
                        'Built on Ladipage'
                    ]
                },
                advanced: {
                    title: 'Advanced landing page',
                    features: [
                        'Custom design to your brief, true to your brand identity',
                        'Full source code handed over',
                        'Delivery in 3–5 working days',
                        'Up to 5 rounds of revisions',
                        'Works across every device: phones, tablets and desktops',
                        'Load time optimised to 1–2 seconds',
                        'Google Speed score optimised',
                        '1GB of hosting included, with unlimited bandwidth and traffic',
                        'Self-service backups',
                        'Built on Ladipage or WordPress',
                        'Over 100 apps and tools integrated: Countdown, Notify, Gallery, Gmail, Google Sheets, Facebook Pixel, Google Analytics, Google Ads and more'
                    ]
                }
            },
            packages: {
                title: 'Website build packages',
                subtitle: 'Three packages: Basic, Standard and Advanced',
                basic: {
                    title: 'Basic website',
                    features: [
                        'Basic web interface, built in 2–3 days',
                        'Free .com domain',
                        'SSD hosting included',
                        'SEO-ready design with optimised page load',
                        'Responsive across every device',
                        'Live chat, Messenger and Zalo integrated',
                        'Core plugins and SSL pre-installed',
                        'Incident support (some items outside the contract are chargeable)',
                        'Advice on multi-platform advertising (Meta, Google, TikTok)'
                    ]
                },
                standard: {
                    title: 'Standard website',
                    features: [
                        'Mid-range or custom interface design',
                        'Free .com or .net domain',
                        'High-speed SSD hosting',
                        'Website built in 3–7 days',
                        'SEO- and UX/UI-ready design with optimised page load',
                        'Works on every device',
                        '5–10 basic SEO-ready articles included',
                        'Advice on Meta, Google and TikTok ad campaigns',
                        'Plugins and SSL certificate included',
                        'Technical support (some items outside the contract are chargeable)'
                    ]
                },
                advanced: {
                    title: 'Advanced website',
                    features: [
                        'Premium website interface design',
                        'Free .com and .net domains',
                        'High-speed SSD hosting',
                        'Website built in 7–10 days',
                        '20 SEO-ready articles included',
                        'Full configuration: multi-channel tracking, dynamic conversions, product catalogue sync',
                        'Speed optimised and mobile-ready',
                        'Advice and hands-on support for multi-platform ads',
                        'A free TikTok Ads account provided',
                        'Free website registration with the Ministry of Industry and Trade',
                        'Full plugin set and SSL certificate included',
                        'Free technical support, all in'
                    ]
                }
            },
            process: {
                title: 'How we work',
                subtitle:
                    'Six professional steps to get the most out of your ad spend and hit your business goals',
                steps: [
                    {
                        title: 'Meeting & briefing',
                        items: [
                            'Talking in person or online',
                            'Discussing and analysing the problem',
                            'Signing off the requirements and feature list'
                        ]
                    },
                    {
                        title: 'Demo design',
                        items: ['Designing the interface demo', 'You review the demo and give feedback']
                    },
                    {
                        title: 'Build & testing',
                        items: ['Refining everything against your feedback', 'Testing and finishing up']
                    },
                    {
                        title: 'Handover & payment',
                        items: [
                            'Handing the project over to you',
                            'You sign off and settle payment',
                            'Nextgency provides 24/7 warranty support'
                        ]
                    }
                ]
            }
        },

        // Trang Automation - AI - Data (dùng chung khối why + workflow với trang /ai)
        aiData: {
            hero: {
                descriptionPrefix:
                    'Want to multiply output, cut manual work and improve customer experience? The answer lies in ',
                brand: 'automation and AI.',
                descriptionSuffix:
                    ' Nextgency helps businesses make their processes genuinely intelligent, through:',
                bullets: [
                    'Automating internal and marketing workflows with n8n.',
                    'Building AI agents: smart chatbots, DISC advisory, content generation.',
                    'Connecting your platforms: Facebook, Zalo, website, email, CRM.'
                ]
            },
            divider: [
                'Automating internal and\nmarketing workflows with n8n.',
                'Building AI agents:\nsmart chatbots, DISC advisory, content generation.',
                'Connecting your platforms: Facebook, Zalo, website, email, CRM.'
            ],
            painPoints: {
                title: 'The problems, and how we solve them',
                items: [
                    {
                        title: 'Manual processes eat the day',
                        description:
                            'Sales still key in every order by hand, close every inbox one by one and send every email manually – 80% of their time goes on repetition.',
                        solutionTitle: 'Process automation',
                        solutionDescription:
                            'Turning manual processes into automated ones – freeing up 80% of your sales team’s time.'
                    },
                    {
                        title: 'No personalisation',
                        description:
                            'Marketing cannot personalise to each customer’s behaviour – the messages go out cold and land nowhere.',
                        solutionTitle: 'Smart personalisation',
                        solutionDescription:
                            'Content personalised to each customer’s behaviour – a sharp lift in conversion rate.'
                    },
                    {
                        title: 'Data scattered everywhere',
                        description:
                            'Nothing links the platforms together (Zalo, Facebook, website, CRM) – the data sits in fragments and cannot be used.',
                        solutionTitle: 'Multi-platform integration',
                        solutionDescription:
                            'Connecting every platform: Zalo – Facebook – website – CRM into one single system.'
                    },
                    {
                        title: 'No automation at all',
                        description:
                            'There is no tool for automatic replies, personalised advice or smart product recommendations.',
                        solutionTitle: 'Smart AI advisory',
                        solutionDescription:
                            'Turning on smart AI replies – a chatbot that recommends products on its own.'
                    }
                ]
            },
            why: {
                intro: 'Turning manual processes into automated ones – freeing up 80% of your sales team’s time',
                experienceDescription:
                    'Content personalised to each customer’s behaviour – a sharp lift in conversion rate.',
                highlightTitle: 'SEO optimisation',
                highlightDescription:
                    'Connecting every platform: Zalo – Facebook – website – CRM into one single system',
                supportDescription:
                    'Turning on smart AI replies – a chatbot that recommends products on its own',
                businesses: 'Businesses'
            },
            packages: {
                title: 'Our packages',
                subtitle: 'Three packages: Basic, Standard and Advanced',
                includesBasic: 'Everything in Basic, plus:',
                includesStandard: 'Everything in Standard, plus:',
                basic: {
                    title: 'Basic package',
                    features: [
                        'Automated order-closing flow from your fanpage and Zalo OA',
                        'A basic inbox reply chatbot (FAQs, order confirmation)',
                        'Website live chat integrated and synced with the fanpage',
                        'Automatic thank-you message after each order',
                        'Reminders to customers who did not complete their order',
                        'A simple, easy-to-use admin interface'
                    ]
                },
                standard: {
                    title: 'Standard package',
                    features: [
                        'Customers connected and synced from Zalo – Facebook – website – forms – CRM',
                        'An automated nurture funnel driven by customer behaviour',
                        'Remarketing scripts set up and personalised',
                        'Automatic messages/SMS/email on triggers (viewed product A → gets offer A)',
                        'Measurement tools integrated: Google Analytics, Facebook Pixel and more'
                    ]
                },
                advanced: {
                    title: 'Advanced package',
                    features: [
                        'An AI chatbot that replies naturally, in context and about your products',
                        'AI product recommendations personalised to customer behaviour',
                        'Automatic customer segmentation (by behaviour, interest level, purchase history)',
                        'Smart reporting: where deals close, which content works, the golden hours',
                        'A central data storage and analysis system (Data Hub)',
                        'Integration support for POS, CRM and email automation systems'
                    ]
                }
            },
            workflow: {
                title: 'How we work',
                steps: [
                    {title: 'Request & first consultation', description: 'Taking the brief and proposing a solution'},
                    {title: 'You describe the problem', description: 'Discussing what needs to be solved'},
                    {title: 'Analysing goals and channels', description: 'Agreeing the objectives and rollout channels'},
                    {
                        title: 'Level 1: automating repetitive tasks',
                        description: 'Freeing your people from manual work'
                    },
                    {
                        title: 'Level 2: multi-platform integration (FB, Zalo, CRM...)',
                        description: 'Seamless integration between your systems'
                    },
                    {
                        title: 'Level 3: AI advisory and data analysis',
                        description: 'Applying artificial intelligence to optimise the process'
                    },
                    {title: 'Signing the contract and agreeing the timeline', description: 'Setting up the system'},
                    {title: 'Trial run & fine-tuning', description: 'Testing and optimising system performance'},
                    {title: 'Handover & training', description: 'User training and technology transfer'},
                    {title: 'Maintenance & optimisation', description: 'Ongoing support and new feature updates'}
                ],
                setupDescription: 'Rolling out the solution exactly as agreed'
            }
        },

        // Trang Facebook Dataset & CRM (dùng chung danh sách tính năng với aiData)
        facebookCrm: {
            hero: {
                descriptionPrefix: 'In an era where data is the real "',
                brand: 'diamond mine',
                descriptionSuffix:
                    '", Nextgency turns every behaviour and every interaction into advertising leverage, through our Facebook Dataset & CRM service:',
                bullets: [
                    'Building high-quality datasets for your Facebook advertising.',
                    'Creating lookalike and remarketing audiences from CRM data, orders and user behaviour.',
                    'Connecting data from forms, your website, Zalo and chatbots, and feeding it back into Facebook CAPI.'
                ]
            },
            divider: [
                'Building high-quality datasets for your Facebook advertising',
                'Creating lookalike and remarketing audiences from CRM data, orders and user behaviour.',
                'Connecting data from forms, your website, Zalo and chatbots, and feeding it back into Facebook CAPI.'
            ],
            painPoints: {
                title: 'Where businesses lose money',
                items: [
                    {
                        title: 'Customer data going to waste',
                        description:
                            'Hundreds of orders and thousands of inbox messages already exist – and none of that data is being reused.',
                        impact: 'Ad spend burned'
                    },
                    {
                        title: 'Ad targeting off the mark',
                        description:
                            'Facebook campaigns targeted only on interests and age are never close enough to drive real conversion.',
                        impact: 'Low conversion rate'
                    },
                    {
                        title: 'No lookalike data',
                        description:
                            'Without a properly built lookalike audience, budget goes on people who were never interested.',
                        impact: 'Ads reaching the wrong people'
                    },
                    {
                        title: 'Data out of sync',
                        description:
                            'Form, web and chatbot data never reaches the CRM or Facebook CAPI – and remarketing breaks down.',
                        impact: 'Remarketing chances lost'
                    }
                ]
            },
            why: {
                intro: 'A young, creative working environment – we believe a strong team, in an open place that never stops learning, is what produces work that truly delivers for clients.',
                experienceDescription:
                    'Turning old data into a gold mine – never losing a customer who once engaged',
                highlightTitle: 'Centralised management',
                highlightDescription:
                    'Forms, website, chatbot, Zalo, CRM and Facebook synced into one single system',
                supportDescription:
                    'Properly built audiences mean ads reach the people who already engaged – higher conversion, lower cost per order'
            },
            packages: {
                standardTitle: 'Standard package',
                advancedTitle: 'Advanced package',
                includesBoth: 'Everything in Basic and Standard, plus:'
            }
        },

        marketingOutsource: {
            hero: {
                titleLine1: 'OUTSOURCED',
                titleLine2: 'MARKETING TEAM',
                descriptionPrefix:
                    'Pouring our team’s expertise into the most promising projects of our clients is exactly what Nextgency commits to with our ',
                brand: 'outsourced marketing department:',
                bullets: [
                    'An outsourced package covering the whole marketing team: ads, content, design, automation.',
                    'Working with you monthly or quarterly towards one goal: more orders, and customers who stay.',
                    'Regular performance reporting against the KPIs we committed to.'
                ]
            },
            divider: [
                'An outsourced package covering the whole marketing team: ads, content, design, automation.',
                'Working with you monthly or quarterly towards one goal: more orders, and customers who stay.',
                'Regular performance reporting against the KPIs we committed to.'
            ],
            painPoints: {
                title: 'Where businesses lose money',
                items: [
                    {
                        title: 'No in-house marketing team',
                        description: 'The budget will not stretch to hiring a full in-house marketing department.',
                        impact: 'Ad spend burned for nothing'
                    },
                    {
                        title: 'Campaigns that do not join up',
                        description:
                            'Hiring ads, content, design and automation from separate vendors leaves campaigns disjointed and ineffective.',
                        impact: 'Marketing budget wasted'
                    },
                    {
                        title: 'No clear KPIs or measurement',
                        description: 'No committed results and no specific KPIs to measure against.',
                        impact: 'Nothing left to optimise'
                    },
                    {
                        title: 'Nobody genuinely invested',
                        description:
                            'Nobody who is truly in it with you – they work to the brief without understanding your business model.',
                        impact: 'Customers lost'
                    }
                ]
            },
            why: {
                intro: 'Advice on the model and strategy that fits each brand',
                experienceDescription:
                    'Building your brand image to one consistent brand standard across every platform',
                highlightTitle: 'Performance optimisation',
                highlightDescription:
                    'Managing, running and optimising channels such as your fanpage, website, Zalo OA and TikTok',
                supportDescription:
                    'A marketing team that has done the work, covering every role from strategy to execution: content, design, media, tracking, reporting and more'
            },
            packages: {
                basic: {
                    title: 'Basic package',
                    features: [
                        'Initial brand strategy direction',
                        'Fanpage and Zalo OA set up and managed',
                        '12 posts per month (copy plus image design)',
                        'One basic landing page, or optimisation of your existing website',
                        'Small-budget Facebook Ads set up and monitored',
                        'Results reported by phase, with recommendations for what comes next'
                    ]
                },
                standard: {
                    title: 'Standard package',
                    features: [
                        'Advice on the right communications model and marketing funnel',
                        'Fanpage, website, Zalo OA and TikTok managed',
                        '20–25 pieces of content per month (posts, design, short clips)',
                        'One to two landing pages designed and launched for conversion',
                        'Facebook plus Google (or TikTok) advertising',
                        'Tracking and measurement installed (Pixel, GA4, GTM)',
                        'Results reported by phase, with recommendations for what comes next'
                    ]
                },
                advanced: {
                    title: 'Advanced package',
                    features: [
                        'End-to-end communications strategy built around your business goals',
                        'A multi-channel brand identity system',
                        'The whole ecosystem managed: fanpage, website, TikTok, Zalo, YouTube',
                        '30+ pieces of content per month: posts, images, video, in-depth short clips',
                        'Automation and CRM systems set up and optimised (where they exist)',
                        'Multi-platform ad campaigns: Facebook – Google – TikTok – Zalo',
                        'Weekly reporting, channel-by-channel review and recommendations to scale',
                        'A dedicated advisory team, meeting 1-to-1 with your leadership'
                    ]
                }
            }
        },

        tickXanh: {
            hero: {
                title: 'BLUE BADGE SERVICE',
                descriptionPart1:
                    'The Facebook blue badge is official verification that helps people and businesses ',
                highlight1: 'establish credibility',
                descriptionPart2: ', build trust and ',
                highlight2: 'protect their brand',
                descriptionPart3: ' on the platform.',
                description2:
                    'Nextgency handles Facebook blue badge registration from A to Z, shortening review time, standardising your documentation and raising your real approval rate.',
                badges: {
                    verified: 'Verified',
                    safe: 'Safe',
                    security: 'Fully confidential',
                    effective: 'Effective',
                    engagement: 'More engagement',
                    fastApproval: 'Fast approval'
                }
            },
            why: {
                intro: 'Advice, account audit, documentation prepared, submission, and results tracked',
                experienceDescription:
                    'Over 100 credible online publications available to help build your personal or company brand',
                highlightTitle: 'A professional team',
                highlightDescription:
                    'A team that has handled blue badge verification for KOLs and businesses in services, education, retail and more',
                supportDescription:
                    'Help with content, seeding and engagement to build account credibility before you submit'
            },
            profile: {
                title: 'Facebook blue badge documentation',
                subtitle:
                    'The complete list of requirements and documents needed to verify a Facebook account',
                requirements: [
                    {
                        title: 'Verified account holder details',
                        items: [
                            'Real name / brand name (must match your identity documents)',
                            'Clear, professional profile and cover photos',
                            'Account description: field of work, job title (for individuals)',
                            'Official website (if you have one)'
                        ]
                    },
                    {
                        title: 'Identity / legal verification documents',
                        subtitle: 'For individuals:',
                        items: [
                            'ID card or passport (clear scan of both sides)',
                            'Professional licence (if applicable)'
                        ],
                        subtitle2: 'For organisations and businesses:',
                        items2: [
                            'Business registration certificate',
                            'Tax payment receipts (if required)',
                            'An official letter confirming the legal representative'
                        ]
                    },
                    {
                        title: 'At least 3–5 mainstream press articles',
                        items: [
                            'Articles from credible online publications',
                            'The articles must refer directly to the person or business applying for the badge'
                        ]
                    },
                    {
                        title: 'Related social media links',
                        items: [
                            'Official fanpage (already verified)',
                            'TikTok channel, if you have one',
                            'LinkedIn, Instagram and others (they add credibility and consistency)'
                        ]
                    },
                    {
                        title: 'Evidence of activity and influence',
                        items: [
                            'Follower count (at least 20k followers on Facebook)',
                            'Engagement stats for the last 30 days (reach, comments, shares…)',
                            'Results from campaigns and PR you have run'
                        ]
                    },
                    {
                        title: 'A quality content record',
                        items: [
                            'Posting regularly and keeping the page updated',
                            'Content that does not breach community standards',
                            'An account history with no warnings or violations'
                        ]
                    },
                    {
                        title: 'Reason for applying',
                        items: ['Stated clearly in the form submitted to Facebook']
                    }
                ]
            },
            packages: {
                subtitle: 'Account management / Full-service operation / Account rental',
                basic: {
                    title: 'Buy a Facebook fanpage blue badge',
                    price: 'PRICE VARIES BY PERIOD',
                    features: [
                        'One name change included',
                        'You pick from the agency’s existing page list'
                    ]
                },
                standard: {
                    title: 'Submit a Facebook fanpage blue badge',
                    price: '85M VND / PACKAGE',
                    features: [
                        'Advice on everything involved in getting a TikTok blue badge.',
                        'Advice on what to watch for and the risks you may hit while building towards a fanpage blue badge.',
                        'Channel audit: engagement, followers, views and more.',
                        'Checking the major publications (those with a verified fanpage) the brand has appeared in over the past year.',
                        'Reviewing the policies and conditions that raise your chances of approval.',
                        'Submitting the application for the badge.',
                        'Carrying out the fanpage blue badge submission.',
                        'Reporting back on the review outcome.'
                    ]
                },
                advanced: {
                    title: 'Buy a personal Facebook profile blue badge',
                    price: '5M VND / PACKAGE',
                    features: [
                        'Delivery time: 3 days',
                        'The newly badged account is built on your current Facebook details or the details you want (name change included)',
                        'A monthly renewal fee applies: $20 = 500,000 VND'
                    ]
                }
            }
        },

        // Trang Automation Tool Content AI (/ai)
        toolContentAi: {
            hero: {
                badge: 'AI content platform · SEO · AEO · GEO',
                titleLine1: 'One AI platform to research, plan and write content that gets',
                titleLine2: 'cited by AI',
                description:
                    'Social and marketplace reports, video script analysis, articles written to be cited by AI, internal links and backlinks built automatically — all in one place.',
                ctaTrial: 'Start a free trial',
                ctaFeatures: 'See the features',
                note: 'Use your own AI API key – you stay in control of the cost, with no lock-in.',
                steps: [
                    {title: 'Analyse', desc: 'AI dissects social and marketplace shops'},
                    {title: 'Plan', desc: 'Keyword clusters become a content plan'},
                    {title: 'Write & optimise', desc: 'AI writes and scores SEO - AEO - GEO'},
                    {title: 'Build links', desc: 'Related articles linked: internal + backlinks'},
                    {title: 'Publish & report', desc: 'Multi-channel publishing with shareable links'}
                ],
                preview: {
                    keywords: 'Keyword cluster',
                    aiCluster: 'AI clustering',
                    topics: [
                        'Pillar: SEO vs AEO vs GEO',
                        'How to get cited by ChatGPT',
                        'GEO optimisation checklist 2026'
                    ],
                    draft: 'AI draft',
                    written: 'Written',
                    tags: ['Schema FAQ', 'Sources cited', 'Clear entities'],
                    linkNetwork: 'Link network',
                    auto: 'Automatic',
                    pillar: 'Pillar page',
                    linkNodes: ['Deep dive', 'Comparison', 'Case study', 'FAQ'],
                    publish: 'Multi-channel publishing',
                    channels: '3/3 channels',
                    posted: 'Published',
                    shareLink: 'Share link',
                    paused: 'Paused',
                    running: 'Running',
                    restartAria: 'Restart from the first step',
                    restartTitle: 'Restart'
                }
            },
            problems: {
                title: 'Do any of these sound familiar?',
                items: [
                    {
                        title: 'SEO writing eats too many hours',
                        description:
                            'Keyword research, outlining, optimising titles, meta and headings, adding links... every article swallows hours.'
                    },
                    {
                        title: 'Your articles never get cited by AI',
                        description:
                            'ChatGPT, Perplexity and Google AI Overviews are changing how people search – content that is not GEO-optimised gets left behind.'
                    },
                    {
                        title: 'Multi-channel, multi-language chaos',
                        description:
                            'Publishing manually to several CMSs, translating each article, tracking results... far too much repetition.'
                    }
                ]
            },
            features: {
                title: 'Everything you need, on one platform',
                subtitle:
                    'Six core capabilities that help you win on Google and inside the answers AI gives.',
                ctaFooter: 'Sign up and try it now',
                cta: 'Start a free trial',
                items: [
                    {
                        title: 'Multi-platform social reporting',
                        description:
                            'Scanning Facebook, TikTok, YouTube and Instagram — AI dissects content, engagement and competitor strategy.'
                    },
                    {
                        title: 'SEO · GEO ready writing',
                        description:
                            'Content optimised to rank on Google and to be cited by AI: ChatGPT, Gemini, AI Overviews.'
                    },
                    {
                        title: 'Automatic internal links & backlinks',
                        description:
                            'AI finds related articles and builds internal and cross-site links — connecting only genuinely relevant content.'
                    },
                    {
                        title: 'Marketplace shop analysis',
                        description:
                            'Shopee, TikTok Shop and Lazada reports: products, reviews, pricing and market opportunities.'
                    },
                    {
                        title: 'Video script analysis',
                        description:
                            'Paste a TikTok/YouTube/Facebook link — AI breaks down the hook, the formula, a second-by-second timeline and why it went viral.'
                    },
                    {
                        title: 'Research, plan, write',
                        description:
                            'From keyword research to the content plan and the finished article — all by AI, in one flow.'
                    }
                ]
            },
            forWhom: {
                title: 'Who is this tool for?',
                items: [
                    {
                        title: 'Shop owners & businesses',
                        description:
                            'Take control of your website content and pull customers in from search, without an SEO team of your own.',
                        impact: 'Lower costs'
                    },
                    {
                        title: 'SEO agencies & freelancers',
                        description:
                            'Produce more quality articles for more clients, in more languages, in far less time.',
                        impact: 'Easy to scale'
                    },
                    {
                        title: 'In-house marketing teams',
                        description:
                            'Standardise the write, optimise, review and publish flow, and collaborate on one platform.',
                        impact: 'Centralised management'
                    },
                    {
                        title: 'Content creators',
                        description:
                            'Turn ideas into SEO/GEO-ready articles fast, and spend your time on quality instead of manual work.',
                        impact: 'Creativity unlocked'
                    }
                ]
            },
            howItWorks: {
                title: 'How it works',
                subtitle: 'Four steps from connecting up to a published article with real numbers.',
                steps: [
                    {
                        title: 'Connect',
                        description: 'Enter your AI API key and connect your website (WordPress, Wix, Shopify...).'
                    },
                    {
                        title: 'Research & plan',
                        description: 'Find keywords and build a content plan around topic clusters.'
                    },
                    {
                        title: 'Write & optimise',
                        description:
                            'Let AI write the draft, score it for SEO/AEO/GEO, then follow the suggestions to lift the score.'
                    },
                    {
                        title: 'Publish & measure',
                        description: 'Publish across channels and track tokens, costs and AI citations.'
                    }
                ]
            },
            benefits: {
                titleLine1: 'Save',
                titleLine2: 'time and money',
                subtitle: 'A whole workflow done in a few minutes.',
                inLabel: 'in',
                items: [
                    {title: 'Instead of hours on one SEO-ready article, all it takes is', highlight: 'MINUTES', description: ''},
                    {title: 'SEO + AEO + GEO\nin a single pass', highlight: '3', description: ''},
                    {title: 'Localised\nfor each market in', highlight: '10', description: 'LANGUAGES'},
                    {title: 'Publish straight\nto several CMSs', highlight: 'MULTI-CHANNEL', description: ''}
                ]
            },
            packages: {
                title: 'Our packages',
                subtitle: 'Enterprise package – unlimited, on whichever billing cycle suits you',
                cta: 'Start a free trial',
                features: [
                    '∞ AI articles/month',
                    '∞ social reports/month (Facebook only)',
                    '∞ team members',
                    '∞ businesses',
                    'Article approval',
                    'Brand voice',
                    'API/Webhook',
                    'Fact checking',
                    'Human-sounding style',
                    'White-label + client reporting'
                ],
                plans: [
                    {duration: '3-month plan', price: 'VND 9,000,000', perMonth: '3M VND/month', note: 'Standard price, no discount', badge: ''},
                    {
                        duration: '6-month plan',
                        price: 'VND 14,900,000',
                        perMonth: '~2.48M VND/month',
                        note: 'Save ~17%',
                        badge: 'Most popular'
                    },
                    {duration: '12-month plan', price: 'VND 23,900,000', perMonth: '~1.99M VND/month', note: 'Save ~34%', badge: ''}
                ]
            },
            partners: {
                titleLine1: 'Built',
                titleLine2: 'Together',
                subtitle: 'Two teams researching and building the Automation Tool Content AI platform',
                roles: {
                    strategy: 'Strategy & product',
                    platform: 'Platform & technology'
                },
                descriptionPrefix: 'Automation Tool Content AI is a product researched and developed jointly by ',
                and: ' and ',
                descriptionSuffix:
                    ' – combining digital transformation consulting and marketing data expertise with experience running technology platforms at scale.',
                paragraph2:
                    'Both teams share responsibility for everything from system architecture and AI models through to the user experience, making sure the product keeps pace with changes in search engines and AI platforms.'
            },
            faq: {
                title: 'Frequently asked questions',
                subtitle: 'Answers to the common questions about Automation Tool Content AI',
                items: [
                    {
                        title: 'What is the difference between SEO, AEO and GEO?',
                        desc: 'SEO optimises for ranking on Google. AEO optimises to be picked as the direct answer (featured snippets, People Also Ask). GEO optimises so AI engines such as ChatGPT, Perplexity and Google AI Overviews cite your content.'
                    },
                    {
                        title: 'Do I need technical knowledge?',
                        desc: 'No. You just enter the topic; the platform handles the research, writing, optimisation and scoring. Detailed guides and tutorials are there for beginners.'
                    },
                    {
                        title: 'Where can I publish to?',
                        desc: 'WordPress, Wix, Shopify, Haravan, Sapo and Google Sheets. Editing an existing article and republishing updates that same article rather than creating a duplicate.'
                    },
                    {
                        title: 'Is there multi-language support?',
                        desc: 'Yes. The interface and content support 10 languages, and articles can be localised to each market’s keywords.'
                    },
                    {
                        title: 'How do I get started?',
                        desc: 'Log in, enter your AI API key, connect your website and write your first article – it only takes a few steps.'
                    }
                ]
            },
            finalCta: {
                titleLine1: 'Ready for your content',
                titleLine2: 'to be found and to be cited?',
                description: 'Log in and create your first SEO, AEO and GEO-ready article today.',
                cta: 'Sign up to get started'
            }
        }
    },

    // ================================================================
    // Giao diện các trang dự án (nội dung dự án: src/content/projects, sửa qua /admin)
    // ================================================================
    projects: {
        viewDetail: 'View details',

        // Trang danh sách dự án (/projects/all)
        list: {
            badge: 'projects',
            title: 'SELECTED PROJECTS',
            subtitle: 'Everything we have delivered, with real results and a professional process.',
            searchLabel: 'Search',
            searchPlaceholder: 'Project name, brand, description...',
            categoryLabel: 'Category',
            technologyLabel: 'Technology',
            allCategories: 'All categories',
            allTechnologies: 'All technologies',
            selecting: 'Selected',
            partner: 'Client:',
            other: 'Other',
            empty: 'No matching projects. Try changing the filters or the keyword.'
        },

        // Trang chi tiết dự án (/projects/:slug)
        detail: {
            notFoundTitle: 'Project not found',
            notFoundDescription: 'The project you are looking for does not exist or has been updated.',
            backToList: 'Back to all projects',
            backShort: '← Back to Projects',
            previous: 'Previous',
            date: 'Delivered',
            category: 'Category',
            partner: 'Client / Brand',
            technologies: 'Technologies used',
            results: 'Results & numbers',
            video: 'Overview video',
            other: 'Other',
            experience: 'Experience'
        },

        // Trang thư viện workflow (/projects/workflow)
        workflow: {
            title: 'Automation workflow library',
            searchPlaceholder: 'Search by name or node...',
            emptyTitle: 'No templates found',
            emptyDescription: 'Try adjusting the keyword or the filters',
            categories: {
                all: 'All',
                ai: 'AI',
                sales: 'Sales',
                itOps: 'IT Ops',
                marketing: 'Marketing',
                docs: 'Documents',
                other: 'Other',
                support: 'Support'
            },
            templates: [
                'AI content generation with ChatGPT',
                'Automatic lead scoring',
                'Server alerting system',
                'Social media post scheduling',
                'Automated invoice processing',
                'Support ticket routing',
                'Automatic AI image generation',
                'CRM data sync',
                'Scheduled database backups',
                'Email campaign analysis',
                'Automated PDF reporting',
                'Data validation tool',
                'AI chatbot handling',
                'Customer sentiment analysis',
                'Sales pipeline reporting'
            ]
        },
    },

    // ================================================================
    // Giao diện trang tin tức (bài viết vẫn giữ tiếng Việt ở mọi ngôn ngữ)
    // ================================================================
    news: {
        list: {
            badge: 'News',
            title: 'News & Insights',
            subtitle:
                'Articles on technology, AI, marketing and web design, organised so they are easy to find and easy to read.',
            searchLabel: 'Search articles',
            searchPlaceholder: 'Search articles...',
            allCategories: 'All',
            count: '{{count}} articles',
            featured: 'Latest article',
            readArticle: 'Read article',
            clearFilters: 'Clear filters',
            empty: 'No matching articles found.',
            emptyHint: 'Try another keyword or clear the filters to see every article.',
            loadMore: 'Load more articles'
        },
        detail: {
            breadcrumb: 'News',
            home: 'Home',
            notFoundTitle: 'Article not found',
            notFoundDescription: 'The article you are looking for may have changed or no longer exists.',
            backToNews: 'Back to news',
            readingTime: '{{count}} min read',
            toc: 'Contents',
            share: 'Share',
            shareFacebook: 'Share on Facebook',
            shareLinkedin: 'Share on LinkedIn',
            copyLinkLabel: 'Copy the article link:',
            copied: 'Copied',
            copyLink: 'Copy link',
            previous: 'Previous article',
            next: 'Next article',
            ctaTitle: 'Need a digital solution for your business?',
            ctaDescription: 'Talk to Nextgency for advice tailored to your goals and budget.',
            related: 'Related',
            relatedTitle: 'Related articles',
            viewAll: 'View all articles'
        }
    },

    // ================================================================
    // Trang Hồ sơ năng lực (/projects/portfolio) - tiêu đề menu bên trái
    // ================================================================
    portfolio: {
        menuTitle: 'Contents',
        imageError: 'Could not load image {{file}}',
        sections: {
            cover: 'Cover & Contents',
            letter: 'Opening letter',
            milestones: 'Growth milestones',
            vision: 'Vision – Mission – Core values',
            team: 'Structure & Team',
            process: 'How we deliver projects',
            why: 'Why choose Nextgency',
            services: 'Nextgency services',
            clients: 'Clients & Partners',
            featured: 'Selected projects',
            nghe: 'Project: Nghe Content',
            beautySummit: 'Project: Beauty Summit',
            tukiGroup: 'Project: TUKI Group',
            otherProjects: 'Other selected projects',
            already: 'Projects already implemented'
        }
    },

    // ================================================================
    // Trang Chính sách bảo mật (/chinh-sach-bao-mat)
    // ================================================================
    privacy: {
        title: 'PRIVACY POLICY',
        sections: [
            {
                title: 'I. Introduction',
                items: [
                    'We recognise the importance of the personal data you have entrusted to us and believe it is our responsibility to manage, protect and process your personal data appropriately. This privacy policy (the "Privacy Policy" or the "Policy") is designed to help you understand how we collect, use, disclose and/or process the personal data you have provided to us and/or that we hold about you, whether now or in the future, and to help you make an informed decision before providing us with any of your personal data.',
                    '"Personal Data" or "personal data" means data, whether true or not, about an individual who can be identified from that data, or from that data and other information to which an organisation has or is likely to have access. Common examples of personal data include a name, an identification number and contact details.',
                    'By using the Services, registering an account with us or accessing the Platform, you acknowledge and agree that you accept the practices, requirements and/or policies described in this Privacy Policy, and you hereby consent to us collecting, using, disclosing and/or processing your personal data as described here. <strong>IF YOU DO NOT CONSENT TO YOUR PERSONAL DATA BEING PROCESSED AS DESCRIBED IN THIS POLICY, PLEASE DO NOT USE OUR SERVICES OR ACCESS OUR PLATFORM OR WEBSITE.</strong> If we change our Privacy Policy, we will post those changes or the amended Privacy Policy on our Platform.'
                ]
            },
            {
                title: 'II. When does the website collect personal data?',
                items: [
                    'When you submit any form, including an application form or other forms relating to any of our products and services, whether online or otherwise.',
                    'When you enter into any agreement, or provide other documents or information in connection with your interaction with us, or when you use our products and services.',
                    'When you interact with us, for example through telephone calls (which may be recorded), letters, fax, face-to-face meetings, social media platforms and email.',
                    'When you use our electronic services, or interact with us through the Platform, the Website or our Services. This includes through cookies that we may deploy when you interact with our Platform or Website.',
                    'When you carry out transactions through our Services.',
                    'When you provide feedback or submit a complaint to us.',
                    'When you register for a contest, minigame, event and so on.',
                    'When you submit your personal data to us for any reason.'
                ]
            },
            {
                title: 'IV. Cookies',
                items: [
                    'From time to time we may use "cookies" or other features to allow us or third parties to collect or share information that will\nhelp us improve our Platform and the Services we provide, or help us offer new services and features. A "cookie" is\nan identifier we send to your computer or mobile device that allows us to recognise your computer or device and tells\nus when the Services or the Platform are used or accessed, by how many people, and to track activity within our\nPlatform. We may associate cookie information with personal data. Cookies are also linked to information about which items you selected\nfor the shopping pages you viewed, or the games you played. This information is used, for example, to track your cart. Cookies are also\nused to provide content based on your interests and to track use of the Services.',
                    'You can decline the use of cookies by choosing the appropriate settings in your browser.'
                ]
            },
            {
                title: 'V. Viewing and downloading content and advertising',
                items: [
                    'When you view pages on our website or mobile app, when you view content and advertising and access other software on our Platform or through the Services, largely the same information is sent to us (including IP address, operating system, etc.); however, instead of page views, your device sends us information about the content and advertising viewed and/or the software installed on the Services and the Platform, and the time.'
                ]
            },
            {
                title: 'VI. How do we use the information you provide to us?',
                items: [
                    'To review and/or process your application or transaction with us, or your transaction or correspondence with third parties through the Services.',
                    'To administer, operate, provide and/or manage your use of and/or access to the Services and our Platform (including your preferences), as well as your relationship and user account with us.',
                    'To respond to, process, handle or complete a transaction and/or fulfil your requests for certain products and services, and notify you of service issues and unusual account activity.',
                    'To enforce our Terms of Service or any applicable end user licence agreement.',
                    'To protect personal safety and the rights, property or safety of others.',
                    'For identification and/or verification.',
                    'To handle or facilitate customer service, carry out your instructions, and deal with or respond to any enquiries submitted by (or purported to be submitted by) you or on your behalf.',
                    'To contact you or communicate with you by telephone, text message and/or fax message, email and/or post or otherwise for the purpose of administering and/or managing your relationship with us or your use of our Services, such as communicating administrative information to you relating to our Services. You acknowledge and agree that such communication by us may be by way of mailing correspondence, documents or notices to you, which could involve disclosure of certain personal data about you in order to deliver those materials, including on the packaging or envelope.',
                    'To enable other users to interact or communicate with you through the Platform, including to notify you when another user has sent you a private message or posted a comment for you on the Platform.',
                    'To conduct research, analysis and development activities (including data analytics, surveys, product and service development and/or profiling), to analyse how you use our Services, to improve our Services or products and/or to improve your customer experience.',
                    'For marketing purposes, in which case to send you, by various means of communication, marketing and promotional information and materials relating to products and/or services (including those of third parties we may collaborate or tie up with) that we may sell, market or promote, whether those products or services exist now or are created in the future. You may unsubscribe from receiving marketing information at any time using the unsubscribe function in the electronic marketing material. We may use your contact details to send newsletters from us or from our related companies.',
                    'To respond to legal process, or to comply with or as required by applicable law and the requirements of competent state authorities.',
                    'To produce statistics and research to meet reporting requirements and/or maintain internal or statutory records.',
                    'To carry out due diligence and verification or other screening activities (including background checks) in compliance with legal or regulatory obligations or our risk management procedures, which may be required by law or which may have been adopted by us.',
                    'To audit our Services or our business.',
                    'To prevent or investigate any fraud, unlawful activity, omission or misconduct, whether or not it has occurred, whether relating to your use of our Services or any other matter arising from your relationship with us.',
                    'To store, host and back up (whether for disaster recovery or other purposes) your personal data.',
                    'Any purpose we notify you of at the time of obtaining your consent.'
                ]
            },
            {
                title: 'VII. How do we protect and store customer information?',
                items: [
                    'We implement a variety of security measures and continually strive to ensure the safety of your personal data on our systems. Users’ personal data is stored behind secured networks and is only accessible by a limited number of employees who have special access rights to our systems.',
                    'We will retain personal data in accordance with the laws on the protection of personal information and/or other applicable legislation. This means we will destroy or remove identifying information from your personal data when we have reasonable grounds to determine that (i) retaining that personal data no longer serves the purpose for which it was collected; (ii) retention is no longer necessary for any legal or business purpose; and (iii) there are no other legitimate interests in continuing to retain this personal data. If you cease using our Platform, or your right to use the Platform and/or the Services is terminated or cancelled, we may continue to store, use and/or disclose your personal data in accordance with this Privacy Policy and our obligations under the laws on the protection of personal information. Subject to the law, we may securely destroy your personal data without prior notice to you.'
                ]
            },
            {
                title: 'VIII. Do we disclose information collected from visitors?',
                items: [
                    'In the course of conducting our business, we will or may need to disclose your personal data to third-party service providers, agents and/or our affiliates or related companies, and/or other third parties, for one or more of the Purposes stated above, and that disclosure will be carried out in accordance with the procedures and provisions of applicable law. Such third-party service providers, agents and/or affiliates or related companies and/or other third parties will process your personal data either on our behalf or otherwise, for one or more of the Purposes stated above.',
                    'This may require, among other things, sharing statistical and demographic information about Users as well as their use of the Services with advertising and programming service partners. We will also share statistical and demographic information about our users and their use of the Services with advertising and programming service providers. This will not include any information that could be used to identify you specifically or disclose personal information about you.',
                    'We will not disclose any information collected from our users (except in special cases as provided by law).'
                ]
            },
            {
                title: 'IX. Information collected by third parties',
                items: [
                    '1. Our Platform uses Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses cookies, which are text files placed on your device, to help the Platform analyse how users use our Platform. The information generated by the cookie about your use of the Platform (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google will use this information to evaluate your use of our Platform, compile reports on website activity for website operators and provide other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google’s behalf. Google will not associate your IP address with any other data held by Google.',
                    '2. Alongside Google Analytics, we also use other analytics and information collection tools such as: Facebook Pixel, TikTok Pixel and others.'
                ]
            }
        ]
    },

    // ================================================================
    // Case study Zalo Mini App BEAUTYVERSE (/projects/miniapp-beautysummit-2026)
    // ================================================================
    beautyverse: {
        cta: 'Launch your own mini app',

        hero: {
            title: 'The entire digital experience of the event — inside one mini app.',
            descriptionPrefix:
                '19–20 June 2026 at the VEC Exhibition Centre, Hanoi — the largest edition to date, with more than 100 brands. After two years of proving it through results, Nextgency became the ',
            techPartner: 'official Tech Partner',
            descriptionSuffix: ', designing and running the entire digital journey for attendees.',
            viewScope: 'See the scope',
            platformNote: 'Running on a platform proven over two years',
            stats: [
                'Attendees checked in across 2 days · a record for the series',
                'Users who experienced the BEAUTYVERSE mini app',
                'Brands taking part · redeeming vouchers with BPoint',
                'Zalo OA follows since launch'
            ]
        },

        problem: {
            titleMiddle: 'the problem is ',
            badge: 'The problem',
            titleLine1: 'Not building an app —',
            titleLine2: 'keeping people in it.',
            description:
                'The organisers had previously worked with another technology vendor to build a mini app. The product was built from a purely technical point of view, out of step with how attendees actually behave — and it failed in a very familiar way:',
            oldTitle: 'The old mini app · a technical point of view',
            oldHeadline: 'Opened once, then never again.',
            oldNote:
                'The app became a formality — creating no value for attendees or for the organisers.',
            oldSteps: [
                'Access the app following the instructions at the gate',
                'Check in',
                'Open the app',
                'Engage with brands',
                'Stay connected after the event'
            ],
            newTitle: 'BEAUTYVERSE · a behavioural point of view',
            newHeadline: 'A reason to come back — before, during and after the event.',
            newNote:
                'Every feature is a reason to reopen the app — retention becomes a design decision, not a hope.',
            newSteps: [
                'QR check-in is only the starting point',
                'Gamification with quests across 3 phases',
                'BPoint — earn points, redeem vouchers from 100+ brands',
                'Brand voting · interactive map · real-time schedule'
            ],
            dataYears: '2 years',
            dataLabel: 'of data',
            dataDescription:
                'Audience insight accumulated from advertising through to check-in across two editions let Nextgency design around how attendees actually behave — instead of guessing.'
        },

        scope: {
            badge: 'Scope of delivery',
            title: 'The five pieces of BEAUTYVERSE',
            items: [
                {
                    title: 'Integrated QR check-in',
                    description:
                        'Connected directly to the ticketing → check-in system already proven across two editions. Attendees scan right inside the mini app — no printed tickets, no manual handling, running smoothly for 7,000 attendee entries over two days.',
                    tags: ['E-tickets', 'QR scan at the gate', '2024–2025 system sync']
                },
                {
                    title: 'Three-phase gamification',
                    description:
                        'A quest journey before, during and after the event, designed from real attendee behaviour data. Each phase has its own reason to open the app — solving exactly what killed the old mini app: people checked in and never came back.',
                    tags: ['Before · During · After', 'Quests & rewards', 'Designed for retention']
                },
                {
                    title: 'The BPoint rewards system',
                    description:
                        'The currency of BEAUTYVERSE. Attendees earn points through quests and on-site activity and redeem vouchers from over 100 participating brands — brands get booth engagement, attendees get real benefits, and the app gets a reason to be reopened.',
                    tags: ['Earn through activity', 'Redeem across 100+ brands', 'Win-win-win']
                },
                {
                    title: 'Brand voting across 4 categories',
                    description:
                        'An upgrade of the 2025 Beauty Award system, brought directly into the mini app — improving the voting experience for brands attending Beauty Summit.',
                    tags: ['4 award categories', 'Building on Beauty Award 2025', 'Automatic tallying']
                },
                {
                    title: 'Zalo ZNS notifications',
                    description:
                        'Automatic notifications through Zalo ZNS — lifting payment completion and reminding attendees of the schedule throughout the event journey.',
                    tags: ['Automatic payment reminders', 'Event schedule reminders', 'Zalo ZNS']
                }
            ]
        },

        journey: {
            badge: 'Experience design',
            title: 'One journey — three phases',
            description:
                'Gamification was designed around the event lifecycle, so each phase has its own reason to open the app.',
            phases: [
                {
                    label: 'Before the event',
                    title: 'Activation & familiarisation',
                    items: [
                        'Receive the e-ticket and check-in instructions inside the app',
                        'Gamification quests open early — start earning BPoint before the doors open',
                        'Explore the 100+ brand list and the event schedule'
                    ]
                },
                {
                    label: 'During the event',
                    title: 'Two days at the venue',
                    items: [
                        'QR check-in at the gate — connected to a system proven over two years',
                        'Earn BPoint through booth activity, redeem brand vouchers',
                        'Vote across 4 brand categories · navigate with an interactive map and real-time schedule'
                    ]
                },
                {
                    label: 'After the event',
                    title: 'Staying connected',
                    items: [
                        'Use the vouchers redeemed — a reason to reopen the app after leaving the venue',
                        'Follow the brand voting results by category',
                        'Behaviour data feeds the dataset for the next edition'
                    ]
                }
            ]
        },

        platform: {
            badge: 'The platform behind it',
            titleLine1: 'The mini app sits on infrastructure',
            titleLine2: 'proven over two years',
            description:
                'BEAUTYVERSE does not run on its own — every 2024–2025 component was kept running alongside it through the 2026 edition:',
            since2024: 'Since 2024',
            since2025: 'Since 2025',
            items2024: [
                {
                    title: 'Two-track B2B / B2C advertising',
                    description:
                        'Selling booths to brands and tickets to attendees — two independent campaigns.'
                },
                {
                    title: 'Ticketing — fully automated check-in',
                    description: 'Registration → payment → e-ticket → QR check-in, with no manual steps.'
                },
                {
                    title: 'Multi-channel notifications',
                    description: 'Zalo ZNS, email, Messenger — segmented automatically by customer status.'
                },
                {
                    title: 'Customer dataset',
                    description:
                        'Restructured after each flight — custom and lookalike audiences, optimising cost per conversion.'
                }
            ],
            items2025: [
                {
                    title: 'The beautysummit.vn website',
                    description: 'Event information, the brand list and the ticket registration flow.'
                },
                {
                    title: 'The Beauty Award system',
                    description:
                        'Automated voting from nomination through to results — the forerunner of brand voting in the app.'
                }
            ]
        },

        result: {
            badge: 'Results · 19–20 June 2026',
            title: 'A record for the event series',
            description:
                'The largest edition in the history of Beauty Summit Vietnam — running smoothly across every system Nextgency built: from advertising, to ticketing, to the in-app digital experience.',
            metrics: [
                'Attendees checked in across 2 days',
                '+75% versus our first year together',
                'Users who experienced the mini app during the event',
                'Brands taking part — the largest scale to date',
                'Personalised invitations in the mini app',
                'Event entry and exit check-ins',
                'Handling a large crowd across the two event days',
                '500% follower growth versus our first year together',
                '100+ brands taking part, redeeming vouchers with BPoint'
            ]
        },

        why: {
            titleMiddle: 'it is a role earned after ',
            badge: 'Why Nextgency?',
            titleLine1: 'Tech Partner is not a title -',
            titleLine2: 'it is two years of results.',
            description:
                'Three consecutive years with the same client, with the scope widening each year on the back of real delivery results — the data foundation and audience insight built up since 2024 is exactly the advantage we brought into the 2026 problem.',
            years: [
                {
                    role: 'Advertising + automation vendor',
                    metric: 'Attendees checked in',
                    items: [
                        'Two independent B2B / B2C Facebook advertising tracks',
                        'Ticketing → fully automated QR check-in',
                        'Multi-channel notifications via Zalo ZNS / email / Messenger',
                        'Customer dataset — custom and lookalike audiences'
                    ]
                },
                {
                    role: 'Multi-system operations vendor',
                    metric: 'Attendees checked in - +25%',
                    items: [
                        'Everything from 2024, in a new southern market',
                        'The official event website beautysummit.vn',
                        'The automated Beauty Award voting system — 1,000 votes'
                    ]
                },
                {
                    role: 'Official Tech Partner',
                    metric: 'Attendees checked in - a record',
                    items: [
                        'The whole 2024–2025 platform',
                        'The BEAUTYVERSE Zalo Mini App — the entire digital experience of the event',
                        'QR check-in · Gamification · BPoint · Brand Voting · ZNS notifications'
                    ]
                }
            ]
        },

        finalCta: {
            summaryHighlight: 'BEAUTYVERSE is the result of two years of data plus a real understanding of user behaviour,',
            summarySuffix: 'not a technology product built from a purely technical point of view.',
            badge: 'Proof of capability',
            description:
                'One client, three consecutive years - scope and operational scale growing every year.',
            note: 'Nextgency designs, integrates and runs mini apps around how event attendees actually behave.'
        }
    },

    // ================================================================
    // Trang đặt lịch Growth Call (/dat-lich)
    // ================================================================
    booking: {
        consultant: {
            bio: 'The person running Nextgency’s growth engine — performance advertising measured to the last dong, converting websites, branding, social content and AI automation systems — for businesses that never stop moving forward.',
            quote: '"Thirty minutes is not enough to solve your growth problem. But it is enough to point at exactly where it is blocked — and where the next dong should go first."'
        },

        bank: {
            bankLabel: 'Bank',
            accountLabel: 'Account number',
            holderLabel: 'Account holder',
            contentLabel: 'Transfer note',
            depositLabel: 'Holding deposit',
            phoneFallback: '+ your phone number',
            qrAlt: 'QR code for the holding deposit transfer'
        },

        steps: [
            {
                title: 'Pick a slot and leave your details',
                body: 'Choose a date and a 30-minute slot that suits you. Son will confirm the time when he calls.'
            },
            {
                title: 'A {{deposit}} holding deposit — refundable at any time',
                body: 'It holds your exact slot. Change your mind at any point and you get it all back, no reason needed — even mid-call.'
            },
            {
                title: '30 minutes 1-to-1 with {{name}}',
                body: 'A look at the channels you are running, the real growth bottleneck named, and one priority path to invest in first.'
            }
        ],

        services: [
            {
                tag: 'Measured to the last dong',
                title: 'Performance advertising',
                body: 'Ads measured to the last dong against real leads, not money burned on vanity engagement. Any channel that cannot prove revenue gets cut.'
            },
            {
                tag: 'Keeping visitors in',
                title: 'Converting websites',
                body: 'A website is not just there to look good — it has to turn a visitor into someone who leaves their number. Fix this and the same traffic produces noticeably more leads.'
            },
            {
                tag: 'On duty 24/7',
                title: 'AI & automation',
                body: 'Catching customers after hours, handling hundreds of conversations at once, waking up a dormant customer base — the work you could never hire enough people to do.'
            },
            {
                tag: 'One consistent face',
                title: 'Branding',
                body: 'A clear brand makes every channel behind it cheaper: ads get more believable, the site closes more easily, past customers come back more readily.'
            },
            {
                tag: 'The right channels covered',
                title: 'Social content',
                body: 'Content going out consistently, to the right audience, turning followers into buyers — instead of one viral hit and then silence for a quarter.'
            }
        ],

        agenda: [
            {
                title: 'Reading the channels you already have',
                body: 'Before the call Son has already looked at your website, the channels running ads and how you currently get customers — so the conversation starts with your business, not with questions from scratch.'
            },
            {
                title: 'Naming the real bottleneck',
                body: 'The most valuable part: plenty of owners assume they lack traffic, then we look together and find traffic is fine — the money is leaking where the site fails to hold visitors, or where the sales team replies too slowly. Pinning down one real bottleneck is worth the whole session.'
            },
            {
                title: 'Setting one priority path',
                body: 'Not a list of ten things to do that leaves you panicking, but where the next dong should go first to get the fastest, most measurable result.'
            }
        ],

        refunds: [
            {
                title: 'Before the call',
                body: 'You change your mind, something urgent comes up, you want to reconsider, or no reason at all — one message and Nextgency refunds the full {{deposit}} within 24 hours. No pushback, no attempts to keep you, not a dong in cancellation fees.'
            },
            {
                title: 'Mid-call',
                body: 'The call has started, you have listened for ten or twenty minutes and feel Son is not hitting your actual problem — say so and stop right there. The deposit comes back in full; there is no need to sit through the rest out of politeness.'
            },
            {
                title: 'Even after it is over',
                body: 'You sat through the full 30 minutes, heard everything, then thought it over and decided the timing is not right — one message and you still get it all back. Attending the session does not mean you have "spent" the deposit; the session was free from the start.'
            }
        ],

        panel: {
            heading: 'Book a Growth Call with {{name}}',
            interestedService: 'Service of interest: {{service}}',
            submitLabel: 'Hold my Growth Call slot — {{deposit}} deposit',
            slotRecorded: 'Slot recorded: {{slot}}',
            sendFailedPrefix: 'We could not send your details through. Your slot is still held — go ahead and transfer the deposit using the note below, or call ',
            sendFailedSuffix: ' directly and Son will confirm right away.',
            depositInstruction: ': a {{deposit}} holding deposit. Transfer with exactly the note below — the system alerts Son directly and he will call to confirm your slot today.',
            refundDetail: ' Before the call, mid-call, or even after it finishes if you feel it was not worth it — one message and Nextgency refunds the full {{deposit}}. Sign a contract and it comes straight off the contract.',
            prevWeek: 'Previous week',
            nextWeek: 'Next week',
            session: '1-to-1 session · 30 minutes',
            pickDate: 'Pick a date that suits you',
            pickSlot: 'Pick a 30-minute slot',
            pickDateFirst: 'Pick a date first to see the available slots.',
            contactTitle: 'Details so Son calls the right person',
            name: 'Full name',
            phone: 'Phone number *',
            website: 'Website (if you have one)',
            goal: 'Where are you trying to drive growth?',
            submitting: 'Sending your details...',
            refundNote: '100% refundable at any time, no reason needed — even during the call.',
            callTitle: 'A 30-minute Growth Call',
            oneStepPrefix: 'One more step to',
            oneStepHighlight: 'lock in this exact slot',
            refundShort: 'Refundable at any time, no reason needed.',
            back: 'Back to booking',
            orCall: 'Or call directly',
            errorPrefix: 'Could not send your booking:',
            errorSlot: 'Please pick a date and a time slot first.',
            errorPhone: 'Please leave a phone number so Son can call to confirm.'
        },

        problem: {
            intro2: 'And the most frustrating part is this: you know you are slowing down, but you are ',
            intro1: 'Most of the businesses Son meets are not weak on product or service at all. The goods are good, the craft is solid, and customers who have bought mostly come back. What keeps you awake is not quality — it is ',
            badge: 'Part 01 · Straight talk',
            title: 'Your business is not short on capability — it is short on a steady flow of customers',
            highlight1: 'a customer flow that comes and goes',
            paragraph1:
                ': this month orders pour in off one viral post or a referral, next month it goes quiet and nobody knows why. Growth is riding on luck and old relationships rather than a machine that runs every day.',
            highlight2: 'not sure where the blockage actually is',
            paragraph2:
                '. Not enough people know you — blocked at the top of the funnel? People land on the site and leave — blocked at conversion? Customers message and the team is slow to reply — blocked at closing? Or thousands of past customers sitting dormant in your data — blocked at retention? From the outside these four look identical: revenue is not going up. But the fix for each is completely different.',
            paragraph3:
                'Because the real bottleneck never gets pinned down, plenty of owners spend in the wrong place without realising: pouring budget into more advertising for traffic, when the real problem is a website that cannot hold the visitors it already gets. Or hiring more salespeople to close, when what is missing is the lead flow to close on. The money keeps going out, and the revenue needle does not move.',
            paragraph4:
                'Most businesses do not lose by doing too little. They lose by doing many things at once, spreading money thin across everything except the real bottleneck.'
        },

        growth: {
            descriptionPrefix: 'Growth is not magic that only a lucky few can pull off. It is an engineering problem — with inputs, outputs and every step measurable. Nextgency’s principle: keep only the channels that ',
            badge: 'Part 02 · The good news',
            title: 'Growth is a solvable problem — with numbers you can measure',
            highlight: 'can prove revenue with numbers',
            description:
                ', and cut the rest without hesitation. This is the toolkit Son will go through with you, to see which pieces fit your problem:'
        },

        callAgenda: {
            closing: 'You leave the call with one thing clear in your head: where you are blocked, and what the next step is. Whether or not you go on to work with Nextgency, that view is yours to keep. That is why Son is happy to leave the deposit ',
            badge: 'Part 03 · What 30 minutes can do',
            title: 'One 30-minute session, enough to change the direction of the year ahead',
            description:
                'Thirty minutes is not long, so this Growth Call does not wander. Son will not recite growth theory — he looks straight at your problem and does exactly three things:',
            refundHighlight: 'refundable at any time',
            refundSuffix:
                '— if those 30 minutes do not give you that, you do not owe Nextgency a single dong.'
        },

        deposit: {
            title: 'Genuinely free — because the {{depositShort}} deposit is refundable even after the call is over',
            paragraph1: 'It sounds backwards: the consultation is free, so why a deposit? The reason is simple. Son only has a handful of these 1-to-1 sessions each week. When something is labelled "free" with a "one-click sign-up", half the people who register forget, get busy or never pick up — and that slot dies, while someone who genuinely needed it could not book. The {{deposit}} deposit filters for the people who are serious, so every session that happens is worth having.',
            paragraph2Prefix: 'But here is where many people misunderstand, so let us be completely clear: ',
            notAFee: 'the {{deposit}} is not payment for the consultation',
            lastPrefix: 'Nextgency keeps the {{deposit}} in exactly ',
            lastMiddle: ' case: both sides move forward and sign a delivery contract — and even then it comes straight off the contract value, so you are still not a dong out of pocket. In every other case, the money is yours. That is why this is ',
            badge: 'Part 04 · Why there is a deposit',
            freeWord: 'free',
            oneClick: 'one-click sign-ups',
            spendWord: 'spend',
            description:
                '— the consultation is free to begin with. It is simply a booking fee that holds your exact slot. Whether you join the call or not, whether you stay the full 30 minutes or not, the deposit is never "spent". It remains yours — and you have every right to ask for it back, at any of the points below:',
            oneWord: 'one',
            trulyFree: 'genuinely free',
            trulyFreeSuffix: ', not free with conditions hidden in the small print.'
        },

        profile: {
            badge2: 'Free · {{depositShort}} deposit, refundable at any time',
            depositPrefix: '{{deposit}} is only a holding deposit — fully refundable ',
            badge: 'Consultation profile',
            callLabel: 'The Growth Call',
            noFee: 'carries no consulting fee',
            anyTime: 'at any time',
            refundSuffix:
                ': before the call, mid-call, or even after it finishes if you feel it was not worth it. Sign a contract and it comes straight off the contract value.'
        },

        finalCta: {
            heading: 'Book a 30-minute Growth Call with {{name}}',
            notePrefix: 'Everything above only becomes valuable once it is applied to your own problem. Remember: ',
            depositNotFee: 'the {{deposit}} is a deposit, not a fee',
            orCall: 'Or call directly ',
            firstStep: 'The first step',
            refundSuffix: '— fully refundable at any time, even during the call.',
            pickSlot: 'Pick a booking slot',
            depositNow: 'Place the deposit now — Son calls you today',
            refundNote:
                '100% refundable at any time, no reason needed — even during the call. The deposit comes straight off the contract value when you sign.'
        }
    },

    notFound: {
        seoTitle: 'Page not found | Nextgency',
        seoDescription: 'The page you are looking for does not exist or has been moved elsewhere.',
        title: 'This page does not exist',
        description:
            'The link may have moved, been mistyped or is no longer in use. Try going back, or head to one of the pages below.',
        homeCta: 'Back to home',
        backCta: 'Go back',
        links: {
            about: {title: 'About us', description: 'An overview of who Nextgency is'},
            ai: {
                title: 'Automation Content AI',
                description: 'SEO · AEO · GEO ready content written by AI.'
            },
            projects: {
                title: 'Our work',
                description: 'See what Nextgency has built for its clients.'
            },
            news: {
                title: 'News & insights',
                description: 'Practical perspectives on marketing and AI.'
            }
        }
    }
};
