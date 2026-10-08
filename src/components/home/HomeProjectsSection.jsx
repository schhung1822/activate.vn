import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useI18n } from '../../i18n';
import { getProjectCategories } from '../../data/projectsData';
import { useProjects } from '../../hooks/useProjects';
import ProjectThumbBackdrop from './ProjectThumbBackdrop.jsx';

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// `logo` là null khi chưa có file logo thương hiệu; tab sẽ hiển thị `tabLabel` thay thế.
const FEATURED_PROJECTS = [
    { id: 'miniapp-beautysummit-2026', tabLabel: 'Beauty Summit', logo: '/assets/images/partner/partner25.png' },
    { id: 'srxvietnam', tabLabel: 'SRX Việt Nam', logo: '/assets/images/partner/partner34.webp' },
    { id: 'hoang-minh-logistic', tabLabel: 'Hoàng Minh', logo: '/assets/images/partner/logo_HM.webp' },
    { id: 'topmus', tabLabel: 'Topmus', logo: '/assets/images/partner/partner32.webp' }
];

// Nhờ Header mở popup tư vấn thay vì tự render một bản riêng: popup của Header nằm
// ngoài mọi section nên không bị `overflow-hidden`/stacking context của section làm lệch.
const openConsultationPopup = () => {
    window.dispatchEvent(new Event('nextgency:open-consultation-popup'));
};

const HomeProjectsSection = () => {
    const { t } = useI18n();
    const projects = useProjects();
    const [activeIndex, setActiveIndex] = useState(0);
    const tabRefs = useRef([]);

    // Refs cho animation
    const sectionRef = useRef(null);
    const labelRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const cardRef = useRef(null);
    const ctaRef = useRef(null);

    const featuredProjects = useMemo(() => {
        const projectsById = new Map(projects.map((project) => [project.id, project]));
        return FEATURED_PROJECTS.map((featured) => ({
            ...featured,
            project: projectsById.get(featured.id)
        })).filter((featured) => featured.project);
    }, [projects]);

    // Fade-in khi cuộn tới, cùng nhịp với các section khác của trang chủ.
    useEffect(() => {
        const section = sectionRef.current;
        const label = labelRef.current;
        const title = titleRef.current;
        const description = descriptionRef.current;
        const card = cardRef.current;
        const cta = ctaRef.current;

        if (!section || !label || !title || !description || !card || !cta) return undefined;

        gsap.set([label, title, description, card, cta], {
            opacity: 0,
            y: 40
        });

        const mainTl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 60%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            }
        });

        mainTl
            .to(label, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
            .to(title, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4')
            .to(description, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5')
            .to(card, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, '-=0.45')
            .to(cta, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.5');

        // Chỉ huỷ trigger của section này, không đụng tới trigger của section khác.
        return () => {
            mainTl.scrollTrigger?.kill();
            mainTl.kill();
        };
    }, []);

    const activeItem = featuredProjects[activeIndex] ?? featuredProjects[0];

    if (!activeItem) return null;

    const activeProject = activeItem.project;
    const categories = getProjectCategories(activeProject);
    const activeImage = activeProject.slides?.[0];
    const metrics = activeProject.metrics?.slice(0, 3) ?? [];

    const showPrevious = () => {
        setActiveIndex((current) => (current - 1 + featuredProjects.length) % featuredProjects.length);
    };

    const showNext = () => {
        setActiveIndex((current) => (current + 1) % featuredProjects.length);
    };

    // Điều hướng tab bằng phím mũi tên theo đúng hành vi chuẩn của tablist.
    const handleTabKeyDown = (event) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

        event.preventDefault();
        const step = event.key === 'ArrowRight' ? 1 : -1;
        const nextIndex = (activeIndex + step + featuredProjects.length) % featuredProjects.length;
        setActiveIndex(nextIndex);
        tabRefs.current[nextIndex]?.focus();
    };

    return (
        <section
            ref={sectionRef}
            className="relative isolate overflow-hidden border-y border-[#e7dbfb] bg-[#fef1f8] py-[60px] lg:py-[90px]"
        >
            <ProjectThumbBackdrop />

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-4 sm:mb-8">
                    <div ref={labelRef} className="inline-flex w-full items-center justify-center">
                        <span className="text-black rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            {t('home.projectsShowcase.badge')}
                        </span>
                    </div>
                    <h2
                        ref={titleRef}
                        className="text-center text-[26px] md:text-[32px] lg:text-[60px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1"
                    >
                        {t('home.projectsShowcase.title')}
                    </h2>
                    <p ref={descriptionRef} className="text-center text-[14px] sm:text-[16px] text-black/60">
                        {t('home.projectsShowcase.description')}
                    </p>
                </div>

                {/* Showcase */}
                <div ref={cardRef} className="relative">
                    <div className="overflow-hidden rounded-[16px] border border-black/10 bg-white/95 p-2 shadow-[0_28px_80px_-42px_rgba(17,12,24,0.4)] backdrop-blur-xl sm:p-4">
                        <div
                            className="grid grid-cols-2 rounded-[16px] gap-1 sm:gap-2 lg:grid-cols-4"
                            role="tablist"
                            aria-label={t('home.projectsShowcase.title')}
                            onKeyDown={handleTabKeyDown}
                        >
                            {featuredProjects.map((item, index) => {
                                const selected = index === activeIndex;
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        role="tab"
                                        ref={(element) => {
                                            tabRefs.current[index] = element;
                                        }}
                                        aria-selected={selected}
                                        aria-controls="featured-project-panel"
                                        id={`featured-project-tab-${item.id}`}
                                        tabIndex={selected ? 0 : -1}
                                        onClick={() => setActiveIndex(index)}
                                        className={`group flex min-h-14 items-center justify-center rounded-[8px] border px-4 py-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ee3e99] ${
                                            selected
                                                ? 'border-transparent bg-[#2D0F3B] text-white'
                                                : 'border-black/10 bg-black/[0.02] text-black/45 hover:bg-black/[0.05] hover:text-black/75'
                                        }`}
                                    >
                                        {item.logo ? (
                                            <img
                                                src={item.logo}
                                                alt={item.tabLabel}
                                                loading="lazy"
                                                decoding="async"
                                                // Logo thương hiệu đều là tông tối nên ở tab đang chọn phải đảo sang trắng.
                                                className={`max-h-9 w-auto max-w-[150px] object-contain transition duration-300 ${
                                                    selected
                                                        ? 'brightness-0 invert'
                                                        : 'opacity-55 grayscale group-hover:opacity-95 group-hover:grayscale-0'
                                                }`}
                                            />
                                        ) : (
                                            <span className="text-center text-[12px] lg:text-[15px]">
                                                {item.tabLabel}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        <div
                            id="featured-project-panel"
                            role="tabpanel"
                            aria-labelledby={`featured-project-tab-${activeItem.id}`}
                            className="relative mt-2 grid min-h-[520px] p-4 overflow-hidden rounded-[16px] bg-[#f7f7f8] sm:mt-4 md:grid-cols-2"
                        >
                            <div key={`content-${activeProject.id}`} className="animate-rise-in flex min-w-0 flex-col p-0 sm:p-4 sm:p-8 lg:p-10">
                                <div className="flex flex-wrap items-center gap-2 text-[11px] lg:text-[13px] font-medium font-archivo uppercase tracking-[0.2rem] text-black/45">
                                    <span>{activeProject.partner}</span>
                                    <span aria-hidden="true">·</span>
                                    <span>{activeProject.date}</span>
                                </div>

                                <h3 className="mt-5 text-[18px] md:text-[24px] lg:text-[32px] font-bold text-black">
                                    {activeProject.name}
                                </h3>
                                <p className="mt-4 max-w-xl text-[14px] sm:text-[16px] text-black/65 text-justify">
                                    {activeProject.summary}
                                </p>

                                <div className="mt-4 sm:mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                                    {metrics.map((metric, index) => {
                                        const highlighted = index === 1;
                                        return (
                                            <div
                                                key={metric.label}
                                                className={`flex min-h-[100px] sm:min-h-[112px] flex-col justify-between rounded-[8px] p-4 ${
                                                    highlighted
                                                        ? 'animate-gradient-shift bg-gradient-to-r from-[#6A4FDB] via-[#ee3e99] to-[#6A4FDB] text-white'
                                                        : 'border border-black/[0.06] bg-white text-black'
                                                } ${index === 2 ? 'col-span-2 sm:col-span-1' : ''}`}
                                            >
                                                <p className={`text-[11px] leading-4 ${highlighted ? 'text-white/75' : 'text-black/55'}`}>
                                                    {metric.label}
                                                </p>
                                                <p className="text-[20px] lg:text-[28px] font-bold tracking-tight">{metric.value}</p>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[...categories, ...(activeProject.technologies ?? [])].slice(0, 4).map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[11px] lg:text-[13px] text-black/55"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    to={`/projects/${activeProject.id}`}
                                    className="group relative my-4 flex w-fit items-center space-x-3 rounded-full bg-black py-1 pl-6 pr-1.5 text-[15px] text-white transition-all duration-300 hover:scale-105 sm:text-[16px]"
                                >
                                    <span>{t('home.projectsShowcase.viewDetail')}</span>
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white sm:h-10 sm:w-10">
                                        <ArrowUpRight className="h-5 w-5 text-black transition-transform duration-300 group-hover:rotate-12" strokeWidth={2.3} />
                                    </span>
                                </Link>
                            </div>

                            <div key={`image-${activeProject.id}`} className="animate-slide-swap rounded-[16px] relative aspect-raido-[16/9] sm:min-h-[300px] overflow-hidden bg-[#eceaf0] md:min-h-full">
                                {activeImage && (
                                    <>
                                        <img
                                            src={activeImage}
                                            alt=""
                                            aria-hidden="true"
                                            className="absolute rounded-[14px] inset-0 h-full w-full scale-110 object-cover opacity-25 blur-2xl"
                                        />
                                        {/* Ảnh được giới hạn bằng max-w/max-h thay vì w-full h-full, nhờ vậy
                                            hộp <img> ôm sát đúng khung ảnh và bo góc mới cắt được vào ảnh thật. */}
                                        <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-6">
                                            <img
                                                src={activeImage}
                                                alt={activeProject.name}
                                                loading="lazy"
                                                decoding="async"
                                                className="max-h-full max-w-full rounded-[14px] object-contain"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={showPrevious}
                        className="absolute left-1 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ee3e99] sm:flex lg:-left-4"
                        aria-label={`${t('home.projectsShowcase.preview')} ${featuredProjects[(activeIndex - 1 + featuredProjects.length) % featuredProjects.length].project.name}`}
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        onClick={showNext}
                        className="absolute right-1 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ee3e99] sm:flex lg:-right-4"
                        aria-label={`${t('home.projectsShowcase.preview')} ${featuredProjects[(activeIndex + 1) % featuredProjects.length].project.name}`}
                    >
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>

                <div ref={ctaRef} className="relative z-10 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={openConsultationPopup}
                        className="group relative flex items-center space-x-3 rounded-full bg-gradient-to-r from-[#6A4FDB] via-[#ee3e99] to-[#6A4FDB] py-1.5 pl-6 pr-1.5 text-[15px] font-medium text-white transition-all duration-300 hover:scale-105 animate-gradient-shift sm:text-[16px]"
                    >
                        <span>{t('nav.cta')}</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black sm:h-10 sm:w-10">
                            <ArrowUpRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-12" strokeWidth={2.3} />
                        </span>
                    </button>

                    <Link
                        to="/projects/all"
                        className="group relative flex items-center space-x-3 rounded-full bg-black py-1.5 pl-6 pr-1.5 text-[15px] text-white transition-all duration-300 hover:scale-105 sm:text-[16px]"
                    >
                        <span>{t('home.projectsShowcase.viewAll')}</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white sm:h-10 sm:w-10">
                            <ArrowUpRight className="h-5 w-5 text-black transition-transform duration-300 group-hover:rotate-12" strokeWidth={2.3} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeProjectsSection;
