import React, { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../i18n';
import { CheckCircle2, Sparkles, Trophy } from 'lucide-react';

// Năm và con số giữ trong code; chữ lấy từ từ điển
const buildTimeline = (tm) =>
    tm('beautyverse.why.years').map((year, index) => ({
        year: ['2024', '2025', '2026'][index],
        eyebrow: year.role,
        result: ['4.000', '5.000', '7.000'][index],
        resultLabel: year.metric,
        items: year.items,
        featured: index === 2
    }));

const WhyNextgencySection = () => {
    const { t, tm } = useI18n();
    const timeline = buildTimeline(tm);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return undefined;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
            setIsVisible(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setIsVisible(true);
                observer.disconnect();
            },
            { threshold: 0.22 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-white py-18 sm:py-20 lg:py-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[7%] top-[18%] h-56 w-56 rounded-full bg-[#9ed6ff]/18 blur-3xl" />
                <div className="absolute bottom-[8%] right-[9%] h-64 w-64 rounded-full bg-[#9d6bff]/16 blur-3xl" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d9def4] to-transparent" />
            </div>

            <div className="relative mx-auto max-w-[1280px] py-12 sm:py-2 px-4 sm:px-6 lg:px-8">
                <div className={`max-w-[980px] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-[13px] font-black uppercase tracking-[0.36em] text-[#5a3fc8]">
                        {t('beautyverse.why.badge')}
                    </p>
                    <h2 className="mt-5 font-archivo text-[30px] font-black leading-[0.98] tracking-normal text-[#05050b] sm:text-[36px] lg:text-[42px]">
                        {t('beautyverse.why.titleLine1')}
                        <span className="block">
                            {t('beautyverse.why.titleMiddle')}
                            <span className="bg-[linear-gradient(90deg,#263f96_0%,#6d65ff_45%,#aa73ff_70%,#9ed6ff_100%)] bg-clip-text text-transparent">
                                {t('beautyverse.why.titleLine2')}
                            </span>
                        </span>
                    </h2>
                    <p className="mt-7 max-w-[760px] text-base font-medium leading-8 text-[#17213f]/82 sm:text-lg">
                        {t('beautyverse.why.description')}
                    </p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_0.9fr_1.12fr]">
                    {timeline.map((item, index) => (
                        <article
                            key={item.year}
                            className={`beautyverse-why-card group relative min-h-[370px] overflow-hidden rounded-[18px] border p-7 transition-all duration-700 hover:-translate-y-2 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            } ${
                                item.featured
                                    ? 'border-transparent bg-[linear-gradient(135deg,#060614_0%,#263d8f_42%,#b04fcd_78%,#9ed6ff_100%)] text-white shadow-[0_28px_70px_rgba(65,74,175,0.28)]'
                                    : 'border-[#dfe4f1] bg-white text-[#070816] shadow-[0_18px_55px_rgba(13,20,45,0.06)]'
                            }`}
                            style={{ transitionDelay: `${160 + index * 120}ms` }}
                        >
                            {item.featured && (
                                <>
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_88%,rgba(255,255,255,0.28),transparent_32%)]" />
                                    <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur">
                                        <Trophy className="h-5 w-5 text-[#c5f5ff]" />
                                    </div>
                                </>
                            )}

                            <div className="relative">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-archivo text-[40px] font-black leading-none tracking-normal">
                                            {item.year}
                                        </h3>
                                        <p className={`mt-4 text-[11px] font-black uppercase tracking-[0.26em] ${item.featured ? 'text-[#c5f5ff]' : 'text-[#5a3fc8]'}`}>
                                            {item.featured && <Sparkles className="mr-2 inline h-3.5 w-3.5" />}
                                            {item.eyebrow}
                                        </p>
                                    </div>
                                </div>

                                <ul className="mt-6 space-y-4">
                                    {item.items.map((line) => (
                                        <li key={line} className={`flex gap-3 text-sm font-medium leading-6 ${item.featured ? 'text-white/88' : 'text-[#17213f]/86'}`}>
                                            {item.featured ? (
                                                <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#bff4ff]" />
                                            ) : (
                                                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#5e5cf0]" />
                                            )}
                                            <span>{line}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className={`mt-10 h-px ${item.featured ? 'bg-white/24' : 'bg-[#dfe4f1]'}`} />
                                <div className="mt-5 flex items-end gap-3">
                                    <strong className="font-archivo text-[34px] font-black leading-none tracking-normal">
                                        {item.result}
                                    </strong>
                                    <span className={`mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] ${item.featured ? 'text-white/56' : 'text-[#7c86a4]'}`}>
                                        {item.resultLabel}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyNextgencySection;
