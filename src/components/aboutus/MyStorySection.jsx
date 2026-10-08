import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "../../i18n";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MyStorySection = () => {
    const { t } = useI18n();
    const sectionRef = useRef(null);
    const imageColumnRef = useRef(null);
    useRef(null);
    const badgeRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRefs = useRef([]);
    const buttonRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const imageColumn = imageColumnRef.current;
        const badge = badgeRef.current;
        const title = titleRef.current;
        const subtitle = subtitleRef.current;
        const descriptions = descriptionRefs.current;
        const button = buttonRef.current;

        // Set initial states
        gsap.set([imageColumn, badge, title, subtitle, ...descriptions, button], {
            opacity: 0,
            y: 50
        });

        // Create timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 50%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        // Animate elements in sequence
        tl.to(imageColumn, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        })
            .to(badge, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.4")
            .to(title, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.3")
            .to(subtitle, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.2")
            .to(descriptions, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.1")
            .to(button, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.2");

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="bg-gradient-to-t from-black via-black to-[#2D0F3B] py-[60px] lg:py-[90px]">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ">

                    {/* Column A - Images */}
                    <div ref={imageColumnRef} className="relative order-last lg:order-first">
                        {/* Main Large Image */}
                        <div className="relative aspect-[7/8] lg:aspect-[6/7] overflow-hidden">
                            <img
                                src="/assets/images/about-1.webp"
                                alt="Our story"
                                className="w-full h-full object-cover rounded-md"
                            />

                            {/* Small Image - Bottom Left */}
                            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48
                bg-black rounded-sm overflow-hidden">
                                <img
                                    src="/assets/images/test.webp"
                                    alt="Team moment"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Column B - Content */}
                    <div className="space-y-4 text-white">
                        {/* Badge */}
                        <div ref={badgeRef} className="inline-flex items-center justify-center">
                        <span className=" text-white rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            {t('about.story.badge')}
                        </span>
                        </div>

                        {/* Title */}
                        <div className="space-y-4">
                            <h2 ref={titleRef} className="text-[26px] md:text-[32px] lg:text-[60px] font-archivo font-bold leading-tight uppercase">
                                {t('about.story.titleLine1')}
                                <span className="font-archivo block text-white uppercase">
                  {t('about.story.titleLine2')}
                </span>
                            </h2>
                        </div>

                        {/* Descriptions with dot icons */}
                        <div className="space-y-4">
                            {/* Subtitle */}
                            <p ref={subtitleRef} className="text-[15px] md:text-[18px] text-[#ee3e99]">
                                {t('about.story.subtitle')}
                            </p>
                            <div ref={el => descriptionRefs.current[0] = el} className="flex gap-4">
                                <div className="w-2 h-2 bg-[#ee3e99] rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-white text-[14px] md:text-[16px] max-w-lg">
                                    {t('about.story.paragraph1')}
                                </p>
                            </div>
                            <div ref={el => descriptionRefs.current[1] = el} className="flex gap-4">
                                <div className="w-2 h-2 bg-[#ee3e99] rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-white text-[14px] md:text-[16px] max-w-lg">
                                    {t('about.story.paragraph2')}
                                </p>
                            </div>
                        </div>
                        <div className="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyStorySection;