import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useI18n} from "../../i18n";
import {COMPANY} from "../../pages/seo-configs.js";
import {ArrowButton} from "../sections/ui.jsx";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const { t } = useI18n();
    const [sloganHead, sloganTail] = t('corporate.home.hero.slogan').split(/(?<=\.)\s+/);
    const sectionRef = useRef(null);
    const bgLogoRef = useRef(null);
    const titleRef = useRef(null);
    const glassCardRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const bgLogo = bgLogoRef.current;
        const title = titleRef.current;
        const glassCard = glassCardRef.current;

        // Check if device is mobile (screen width <= 768px)
        const isMobile = window.innerWidth <= 768;

        // Create context for better performance
        let ctx = gsap.context(() => {
            // Initial state - set elements to invisible
            gsap.set([bgLogo, title], {
                opacity: 0,
                y: 40
            });

            // Fade-in animations on page load
            const tl = gsap.timeline();

            tl.to(bgLogo, {
                opacity: 0.7,
                y: 0,
                duration: 1.6,
                delay: 0.8,
                ease: "power3.out"
            })
                .to(title, {
                    opacity: 1,
                    y: 0,
                    duration: 1.8,
                    ease: "power3.out"
                }, "-=0.8")

            // Background logo parallax - moves slower (always active)
            gsap.to(bgLogo, {
                yPercent: 75,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                    invalidateOnRefresh: true
                }
            });

            // Main title parallax - only on desktop
            gsap.to(title, {
                yPercent: -80,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                    invalidateOnRefresh: true
                }
            });

            // Glass card parallax effect - only on desktop
            gsap.to(glassCard, {
                yPercent: 30,
                scale: 0.95,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.2,
                    invalidateOnRefresh: true
                }
            });

            // Refresh ScrollTrigger on window resize for responsive behavior
            ScrollTrigger.refresh();

        }, section);

        // Handle window resize to update parallax effects
        const handleResize = () => {
            const newIsMobile = window.innerWidth <= 768;
            if (newIsMobile !== isMobile) {
                ctx.revert();
                ScrollTrigger.refresh();
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            ctx.revert();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[80vh] md:max-h-[750px] lg:max-h-[1200px] 2xl:max-h-[900px] w-full bg-white overflow-hidden pt-[60px] lg:pt-0">
            {/* Large centered logo background */}
            <div ref={bgLogoRef} className="absolute inset-0 flex top-20 lg:items-center justify-center will-change-transform">
                <div className="w-80 h-80 md:w-[600px] md:h-[600px] xl:w-[750px] xl:h-[750px]">
                    <img
                        src="/assets/images/brand/activate-mark.svg"
                        alt="Activate Innovation"
                        className="w-full h-full object-contain opacity-30"
                    />
                </div>
            </div>

            {/* Main container */}
            <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center md:justify-start items-center">

                {/* Main title */}
                <h1 ref={titleRef} className="text-[55px] md:text-[115px] lg:text-[150px] xl:text-[200px] 2xl:text-[230px] tracking-tighter font-archivo font-bold will-change-transform">
                    ACTIVATE
                </h1>

                {/* Glassmorphism card */}
                <div ref={glassCardRef} className="w-full max-w-[1440px] mb-4 will-change-transform">
                    <div className="backdrop-blur-md bg-white/30 border-2 border-white rounded-sm px-4 py-6 md:px-6">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Column A - Định vị + 2 nút B2B */}
                            <div className="space-y-6 lg:space-y-8">
                                <span className="inline-block text-[#ee3e99] text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.3rem] uppercase">
                                    {t('corporate.home.hero.badge')}
                                </span>
                                {/* Slogan 2 vế ("Kết nối nguồn cung. Kích hoạt thị trường.") - vế sau tô màu thương hiệu */}
                                <h2 className="text-[24px] md:text-[30px] lg:text-[40px] font-archivo font-bold leading-[1.15] text-black">
                                    {sloganHead}
                                    {sloganTail && (
                                        <span className="block bg-gradient-to-r from-[#6A4FDB] via-[#ee3e99] to-[#F8B736] bg-clip-text text-transparent">
                                            {sloganTail}
                                        </span>
                                    )}
                                </h2>
                                <p className="text-black text-[15px] lg:text-[18px] max-w-lg">
                                    {t('corporate.home.hero.description')}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <ArrowButton to="/contact" variant="gradient">{t('corporate.cta.partner')}</ArrowButton>
                                    <ArrowButton href={COMPANY.profilePdf} download icon="download">{t('corporate.cta.profile')}</ArrowButton>
                                </div>
                            </div>

                            {/* Column B - Ảnh + dải thông tin pháp nhân */}
                            <div className="relative h-72 md:h-96 overflow-hidden rounded-md">
                                <img
                                    src="/assets/images/tangtruong.webp"
                                    alt="Activate"
                                    className="w-full h-full object-cover rounded-md"
                                />
                                <dl className="absolute left-3 right-3 bottom-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    {[
                                        {label: t('corporate.home.hero.facts.legal'), value: COMPANY.legalName},
                                        {label: t('corporate.home.hero.facts.taxId'), value: COMPANY.taxId},
                                        {label: t('corporate.home.hero.facts.headquarters'), value: t('corporate.home.hero.facts.headquartersValue')}
                                    ].map((fact) => (
                                        <div key={fact.label} className="bg-black/55 backdrop-blur-md border border-white/15 rounded-sm px-3 py-2">
                                            <dt className="text-[10px] lg:text-[11px] uppercase tracking-widest text-[#f7a8cf]">{fact.label}</dt>
                                            <dd className="text-[12px] lg:text-[13px] font-semibold text-white">{fact.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;