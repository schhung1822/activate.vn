import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Quote } from 'lucide-react';
import { useI18n } from "../../i18n";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
    const { t, tm } = useI18n();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const carouselRef = useRef(null);

    // Refs cho animation
    const sectionRef = useRef(null);
    const labelRef = useRef(null);
    const titleRef = useRef(null);
    const mainContainerRef = useRef(null);
    const leftColumnRef = useRef(null);
    const carouselContainerRef = useRef(null);
    const navigationRef = useRef(null);
    const cardsRef = useRef([]);

    // Sample testimonials data
    // Tên người và công ty là danh từ riêng nên giữ nguyên; chỉ lời nhận xét được dịch.
    const quotes = tm('home.testimonials.items');
    const testimonials = [
        {id: 1, author: "Võ Anh Dũng", company: "EAC Group", image: "/assets/images/projects/srx-1.webp"},
        {id: 2, author: "Sumi Han", company: "Beauty Summit", image: "/assets/images/portfolio/11.webp"},
        {id: 3, author: "Nguyễn Trung Kiên", company: "Tuki Group", image: "/assets/images/portfolio/35.webp"},
        {id: 4, author: "Trần Viết Tín", company: "Topmus Entertainment", image: "/assets/images/projects/topmus1.webp"},
        {id: 5, author: "Thủy Kat", company: "Kat Skin", image: "/assets/images/portfolio/13.webp"},
        {id: 6, author: "Hoàng Hà", company: "Mewart", image: "/assets/images/portfolio/40.webp"},
        {id: 7, author: "Bá Quyền", company: "QC House", image: "/assets/images/projects/qchoue_1.webp"},
        {id: 8, author: "Hoàng Minh", company: "Hoàng Minh Logistics", image: "/assets/images/projects/hm1.webp"}
    ].map((item, index) => ({...item, content: quotes[index] || ''}));

    const itemsPerSlide = window.innerWidth < 768 ? 1 : 2;
    const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

    // Animation khi mount component
    useEffect(() => {
        const section = sectionRef.current;
        const label = labelRef.current;
        const title = titleRef.current;
        const mainContainer = mainContainerRef.current;
        const leftColumn = leftColumnRef.current;
        const carouselContainer = carouselContainerRef.current;
        const navigation = navigationRef.current;

        // Set initial states
        gsap.set([label, title, mainContainer], {
            opacity: 0,
            y: 40
        });

        gsap.set([leftColumn, carouselContainer, navigation], {
            opacity: 0,
            x: -30
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
            .to(mainContainer, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power2.out"
            }, "-=0.5")
            .to(leftColumn, {
                opacity: 1,
                x: 0,
                duration: 0.7,
                ease: "power2.out"
            }, "-=0.6")
            .to(carouselContainer, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.5")
            .to(navigation, {
                opacity: 1,
                x: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.4");

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, totalSlides]);

    // Handle navigation
    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    // Handle touch events
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            goToNext();
        }
        if (isRightSwipe) {
            goToPrevious();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <section ref={sectionRef} className="w-full bg-white py-[60px] md:py-[90px]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-4 lg:mb-8">
                    <div ref={labelRef} className="inline-flex items-center justify-center mb-4">
                        <span className=" text-black rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            Testimonials
                        </span>
                    </div>
                    <h2 ref={titleRef} className="text-[26px] md:text-[32px] lg:text-[60px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1">
                        {t('home.testimonials.title')}
                    </h2>
                </div>

                {/* Main Content Container */}
                <div ref={mainContainerRef} className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8 p-2 rounded-md bg-gradient-to-br from-[#2B144D] via-black to-[#2B144D]">
                    {/* Left Column - Description & CTA */}
                    <div ref={leftColumnRef} className="lg:col-span-1 flex flex-col justify-between">
                        <div className="mb-2 lg:mb-6 lg:mb-0 p-4">
                            <p className="text-[15px] lg:text-[18px] text-white text-justify">
                                {t('home.testimonials.description')}
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Carousel */}
                    <div className="lg:col-span-4">
                        <div
                            ref={carouselContainerRef}
                            className="overflow-hidden"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                ref={carouselRef}
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                                    <div key={slideIndex} className="w-full flex-shrink-0">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                                            {testimonials
                                                .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                                .map((testimonial, cardIndex) => (
                                                    <div
                                                        key={testimonial.id}
                                                        ref={el => cardsRef.current[slideIndex * itemsPerSlide + cardIndex] = el}
                                                        className="relative bg-white rounded-[10px] transition-all group flex min-h-[320px] sm:min-h-[420px] flex-col overflow-hidden"
                                                    >
                                                        {/* Shine Effect */}
                                                        <div className=" transform -translate-x-full opacity-0"></div>
                                                        <div className="relative z-10 flex flex-1 flex-col justify-between p-4 lg:p-6">
                                                            <img
                                                                src={testimonial.image}
                                                                alt={testimonial.company}
                                                                className="aspect-video w-full rounded-[8px] border border-[#2a164b] object-cover"
                                                                loading="lazy"
                                                            />
                                                            {/* Feedback Content */}
                                                            <div className="relative pl-10">
                                                                <Quote className="absolute left-0 top-0 h-6 w-6 fill-[#2B144D] text-[#2B144D] opacity-[0.5]" />
                                                                <p className="text-black text-[14px] lg:text-[16px]">
                                                                    {testimonial.content}
                                                                </p>
                                                            </div>

                                                            {/* Bottom Section - Author Info */}
                                                            <div className="relative z-10 text-right">
                                                                <p className="text-[11px] sm:text-[13px] font-archivo font-medium text-[#2B144D] uppercase tracking-widest">
                                                                    {testimonial.company}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows - Below Carousel */}
                        <div ref={navigationRef} className="flex justify-end gap-3 mt-4 mr-4">


                            <button
                                onClick={goToNext}
                                className=" border-2 border-white rounded-full p-3 text-white transition-all duration-300 group hover:bg-white"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5 text-white group-hover:text-black" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
