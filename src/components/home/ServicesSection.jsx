import React, { useState, useEffect, useRef } from 'react';
import {
    Code,
    Globe,
    Smartphone,
    ArrowUpRight,
    Bot,
    Target, Music, Users, BarChart3, CheckCircle
} from 'lucide-react';
import { Link, useI18n } from "../../i18n";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
    const { t } = useI18n();
    const [activeTab, setActiveTab] = useState(0);

    // Refs cho animation
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const labelRef = useRef(null);
    const titleRef = useRef(null);
    const tabsRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    // Phần cấu trúc (icon, ảnh, công nghệ, link) nằm ở đây; toàn bộ chữ hiển thị
    // lấy từ từ điển theo `key` nên tự đổi theo ngôn ngữ đang xem.
    const services = [
        {
            id: 0,
            key: 'aiData',
            icon: <Bot className="w-4 h-4" />,
            image: '/assets/images/services/data-ai.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'AI Automation' },
                { icon: <Code className="w-4 h-4" />, name: 'n8n' },
                { icon: <Code className="w-4 h-4" />, name: 'CRM Integration' },
                { icon: <Code className="w-4 h-4" />, name: 'Dashboard' },
            ],
            link: '/services/ai-data'
        },
        {
            id: 1,
            key: 'googleAds',
            icon: <Target className="w-4 h-4" />,
            image: '/assets/images/services/google-ads.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'Search Ads' },
                { icon: <Code className="w-4 h-4" />, name: 'Display Ads' },
                { icon: <Code className="w-4 h-4" />, name: 'Performance Max' },
                { icon: <Code className="w-4 h-4" />, name: 'Conversion Tracking' },
            ],
            link: '/services/google-ads'
        },
        {
            id: 2,
            key: 'facebookAds',
            icon: <Smartphone className="w-4 h-4" />,
            image: '/assets/images/services/facebook-ads.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'Meta Ads' },
                { icon: <Code className="w-4 h-4" />, name: 'Pixel Tracking' },
                { icon: <Code className="w-4 h-4" />, name: 'Custom Audience' },
                { icon: <Code className="w-4 h-4" />, name: 'Retargeting' },
            ],
            link: '/services/facebook-ads'
        },
        {
            id: 3,
            key: 'websiteLanding',
            icon: <Globe className="w-4 h-4" />,
            image: '/assets/images/portfolio/15.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'React' },
                { icon: <Code className="w-4 h-4" />, name: 'Next.js' },
                { icon: <Code className="w-4 h-4" />, name: 'Wordpress' },
                { icon: <Code className="w-4 h-4" />, name: 'SEO Onpage' },
            ],
            link: '/services/website-landing-page'
        },
        {
            id: 4,
            key: 'tiktokAds',
            icon: <Music className="w-4 h-4" />,
            image: '/assets/images/services/tiktok-ads.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'TikTok Ads' },
                { icon: <Code className="w-4 h-4" />, name: 'TikTok Pixel' },
                { icon: <Code className="w-4 h-4" />, name: 'Spark Ads' },
                { icon: <Code className="w-4 h-4" />, name: 'Creative Testing' },
            ],
            link: '/services/tiktok-ads'
        },
        {
            id: 5,
            key: 'facebookCrm',
            icon: <Users className="w-4 h-4" />,
            image: '/assets/images/services/crm.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'Meta Dataset' },
                { icon: <Code className="w-4 h-4" />, name: 'CRM Sync' },
                { icon: <Code className="w-4 h-4" />, name: 'Lead Tracking' },
                { icon: <Code className="w-4 h-4" />, name: 'CAPI' },
            ],
            link: '/services/facebook-crm'
        },
        {
            id: 6,
            key: 'marketingOutsource',
            icon: <BarChart3 className="w-4 h-4" />,
            image: '/assets/images/services/mkt.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'Marketing Plan' },
                { icon: <Code className="w-4 h-4" />, name: 'Content Strategy' },
                { icon: <Code className="w-4 h-4" />, name: 'Media Planning' },
                { icon: <Code className="w-4 h-4" />, name: 'Performance Report' },
            ],
            link: '/services/marketing-outsource'
        },
        {
            id: 7,
            key: 'tickXanh',
            icon: <CheckCircle className="w-4 h-4" />,
            image: '/assets/images/services/tich-xanh.webp',
            technologies: [
                { icon: <Code className="w-4 h-4" />, name: 'Profile Audit' },
                { icon: <Code className="w-4 h-4" />, name: 'Media Profile' },
                { icon: <Code className="w-4 h-4" />, name: 'Document Review' },
                { icon: <Code className="w-4 h-4" />, name: 'Meta Verification' },
            ],
            link: '/services/tick-xanh-facebook'
        }
    ].map((service) => ({
        ...service,
        name: t(`home.services.items.${service.key}.name`),
        title: t(`home.services.items.${service.key}.title`),
        description: t(`home.services.items.${service.key}.description`),
        completedDate: t(`home.services.items.${service.key}.duration`),
        note: t(`home.services.items.${service.key}.note`)
    }));

    // Animation khi mount component
    useEffect(() => {
        const section = sectionRef.current;
        const label = labelRef.current;
        const title = titleRef.current;
        const tabs = tabsRef.current;
        const content = contentRef.current;

        // Set initial states
        gsap.set([label, title, tabs, content], {
            opacity: 0,
            y: 40
        });

        // Create main timeline
        const mainTl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 60%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        });

        // Animation sequence
        mainTl
            .to(label, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            })
            .to(title, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.4")
            .to(tabs, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.4")
            .to(content, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power2.out"
            }, "-=0.6");

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Animation khi thay đổi tab
    useEffect(() => {
        const content = contentRef.current;
        const image = imageRef.current;

        if (content) {
            // Animation cho content khi thay đổi tab
            gsap.fromTo(content,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                }
            );

            // Animation cho các elements bên trong content
            const contentElements = content.querySelectorAll('.animate-content');
            gsap.fromTo(contentElements,
                {
                    opacity: 0,
                    y: 15
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power2.out",
                    delay: 0.2
                }
            );

            // Hiệu ứng đặc biệt cho ảnh khi thay đổi tab
            if (image) {
                const img = image.querySelector('img');
                const overlay = image.querySelector('.image-overlay');

                // Set initial state cho ảnh
                gsap.set(overlay, { scaleX: 1 });

                // Animation timeline cho ảnh
                const imageTimeline = gsap.timeline({ delay: 0.3 });

                imageTimeline
                    .to(overlay, {
                        scaleX: 0,
                        duration: 0.8,
                        ease: "power2.inOut",
                        transformOrigin: "left center"
                    })
                    .to(img, {
                        scale: 1,
                        rotation: 0,
                        duration: 1.2,
                        ease: "power2.out"
                    }, "-=0.6");
            }
        }
    }, [activeTab]);

    // Animation parallax cho ảnh khi scroll
    useEffect(() => {
        const image = imageRef.current;

        if (image) {
            const img = image.querySelector('img');

            // Hover effect cho container ảnh
            image.addEventListener('mouseenter', () => {
                gsap.to(img, {
                    duration: 0.6,
                    ease: "power2.out"
                });
            });

            image.addEventListener('mouseleave', () => {
                gsap.to(img, {
                    duration: 0.6,
                    ease: "power2.out"
                });
            });
        }

        // Cleanup
        return () => {
            if (image) {
                image.removeEventListener('mouseenter', () => {});
                image.removeEventListener('mouseleave', () => {});
            }
        };
    }, [activeTab]);

    return (
        <section ref={sectionRef} className="bg-gradient-to-t from-black via-black to-[#2B144D] py-[60px] lg:py-[90px]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div ref={headerRef} className="mb-4 sm:mb-8">
                    <div ref={labelRef} className="inline-flex items-center justify-center">
                        <span className=" text-white rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            Services
                        </span>
                    </div>
                    <h2 ref={titleRef} className="text-[26px] md:text-[32px] lg:text-[60px] font-archivo font-bold text-white mb-1 uppercase">
                        {t('home.services.title')}
                    </h2>
                </div>

                {/* Tabs */}
                <div ref={tabsRef} className="mb-4 sm:mb-8">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(index)}
                                className={`flex items-center gap-1 px-4 py-2.5 rounded-sm transition-all duration-300 text-[12px] lg:text-[15px] ${
                                    activeTab === index
                                        ? 'bg-white text-black'
                                        : 'bg-white/5 text-gray-100 hover:bg-white/10 border border-white/25'
                                }`}
                            >
                                {service.icon}
                                <span className="">{service.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="">
                    {/* Tab Content */}
                    <div className=" overflow-hidden ">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`transition-all duration-500 ${
                                    activeTab === index
                                        ? 'opacity-100 transform translate-y-0'
                                        : 'opacity-0 transform translate-y-4 absolute pointer-events-none'
                                }`}
                            >
                                {activeTab === index && (
                                    <div ref={contentRef} className="">
                                        {/* Row 1: Title */}
                                        <h3 className="animate-content text-[18px] md:text-[24px] lg:text-[32px] font-medium text-white mb-4 sm:mb-8 border-b border-gray-100 pb-4">

                                        </h3>

                                        {/* Row 2: Two columns */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 sm:min-h-[480px]">
                                            {/* Column 1: Description & Image */}
                                            <div className="space-y-12 p-4">
                                                <div ref={imageRef} className="animate-content relative aspect-radio-[16/9] rounded-xl overflow-hidden group border border-gray-800">

                                                    <img
                                                        src={service.image}
                                                        alt={service.name}
                                                        className="w-full h-full object-cover rounded-lg transition-all duration-700"
                                                    />
                                                </div>
                                            </div>

                                            {/* Column 2: Technologies, Date, Note */}
                                            <div className="">
                                                <div className="space-y-12 p-4">
                                                    <div className="animate-content">
                                                        <h4 className="text-[11px] sm:text-[13px] font-medium text-[#c08dfe] mb-4 uppercase tracking-widest">{t('home.services.descriptionLabel')}</h4>
                                                        <p className="text-white text-[14px] sm:text-[16px] text-justify">
                                                            {service.description}
                                                        </p>
                                                    </div>

                                                    {/* Technologies */}
                                                    <div className="animate-content">
                                                        <h4 className="text-[11px] sm:text-[13px] font-medium text-[#c08dfe] mb-4 uppercase tracking-widest">{t('home.services.technologiesLabel')}</h4>
                                                        <div className="flex flex-wrap gap-3">
                                                            {service.technologies.map((tech, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className="flex items-center gap-2 pr-4 text-white transition-colors"
                                                                >
                                                                    {tech.icon}
                                                                    <span className="text-sm text-[14px] lg:text-[16px]">{tech.name}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    {/* Completed Date */}
                                                    <div className="animate-content">
                                                        <h4 className="text-[11px] sm:text-[13px] font-medium text-[#c08dfe] mb-4 uppercase tracking-widest">{t('home.services.durationLabel')}</h4>
                                                        <p className="text-[14px] lg:text-[16px] text-white inline-block">
                                                            {service.completedDate}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="animate-content mt-8">
                                                    {/* CTA Button */}
                                                    <div className="flex items-center space-x-2 ">
                                                        <Link
                                                            to={service.link}
                                                            className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#2B144D] via-[#c08dfe] to-[#2B144D] text-[15px] sm:text-[16px] text-white rounded-full transition-all duration-300 hover:scale-105 group animate-gradient-shift"
                                                        >
                                                            <span className="">
                                                                {t('home.services.cta')}
                                                            </span>
                                                            <div className="w-9 h-9 sm:w-[2.5rem] sm:h-[2.5rem] bg-black rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                                                <ArrowUpRight
                                                                    className="w-5 h-5 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-105"
                                                                    strokeWidth={2.5}
                                                                />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;