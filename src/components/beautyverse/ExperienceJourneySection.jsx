import React, { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../i18n';

// Số thứ tự giữ trong code; chữ lấy từ từ điển
const buildPhases = (tm) =>
    tm('beautyverse.journey.phases').map((phase, index) => ({
        number: String(index + 1).padStart(2, "0"),
        title: phase.label,
        subtitle: phase.title,
        items: phase.items
    }));

const ExperienceJourneySection = () => {
    const { t, tm } = useI18n();
    const phases = buildPhases(tm);
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
            { threshold: 0.24 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-white py-18 sm:py-20 lg:py-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-[10%] top-[16%] h-56 w-56 rounded-full bg-[#9ed6ff]/14 blur-3xl" />
                <div className="absolute bottom-[10%] left-[8%] h-64 w-64 rounded-full bg-[#b04fcd]/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-[1280px] py-12 sm:py-2 px-4 sm:px-6 lg:px-8">
                <div className={`max-w-[820px] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-[13px] font-black uppercase tracking-[0.36em] text-[#5a3fc8]">
                        {t('beautyverse.journey.badge')}
                    </p>
                    <h2 className="mt-5 font-archivo text-[30px] font-black leading-[0.98] tracking-normal text-[#05050b] sm:text-[42px] lg:text-[50px]">
                        {t('beautyverse.journey.title')}
                    </h2>
                    <p className="mt-7 max-w-[720px] text-base font-medium leading-8 text-[#17213f]/82 sm:text-lg">
                        {t('beautyverse.journey.description')}
                    </p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {phases.map((phase, index) => (
                        <article
                            key={phase.number}
                            className={`group overflow-hidden rounded-[18px] border border-[#dfe4f1] bg-white shadow-[0_18px_55px_rgba(13,20,45,0.045)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(13,20,45,0.1)] ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                            style={{ transitionDelay: `${140 + index * 120}ms` }}
                        >
                            <div className="flex min-h-[86px] items-center gap-4 border-b border-[#dfe4f1] bg-[#f7f8fc] px-7 py-5">
                                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#0f226f_0%,#5e5cf0_55%,#b87cff_100%)] font-archivo text-lg font-black text-white shadow-[0_10px_25px_rgba(94,92,240,0.24)]">
                                    {phase.number}
                                </div>
                                <div>
                                    <h3 className="font-archivo text-[22px] font-black leading-none tracking-normal text-[#05050b]">
                                        {phase.title}
                                    </h3>
                                    <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#8a94ad]">
                                        {phase.subtitle}
                                    </p>
                                </div>
                            </div>

                            <div className="p-7">
                                <ul className="space-y-5">
                                    {phase.items.map((item) => (
                                        <li key={item} className="flex gap-4 text-base font-medium leading-7 text-[#17213f]/88">
                                            <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-[#5e5cf0] shadow-[0_0_0_4px_rgba(94,92,240,0.08)]" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceJourneySection;
