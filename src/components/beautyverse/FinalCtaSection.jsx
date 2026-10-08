import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useI18n } from '../../i18n';

const FinalCtaSection = () => {
    const { t } = useI18n();
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
        <>
            <section ref={sectionRef} className="relative overflow-hidden bg-[#05060f] py-16 text-white sm:py-20 lg:py-24">
                <div className="pointer-events-none absolute inset-0">
                    <div className="final-cta-dot-field absolute inset-0 opacity-45" />
                    <div className="absolute left-[-14%] top-[-40%] h-[520px] w-[520px] rounded-full bg-[#16155d]/55 blur-3xl" />
                    <div className="absolute bottom-[-48%] right-[-8%] h-[520px] w-[520px] rounded-full bg-[#9365f5]/24 blur-3xl" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
                </div>

                <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div
                        className={`max-w-[1280px] transition-all duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                    >
                        <div className="inline-flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-[#8ed2ff]">
                            <Sparkles className="h-4 w-4" />
                            <span>{t('beautyverse.finalCta.badge')}</span>
                        </div>

                        <h2 className="mt-6 font-archivo text-[20px] font-black leading-[1.12] tracking-normal text-white sm:text-[24px] lg:text-[32px]">
                            {t('beautyverse.finalCta.description')}
                            <span className="bg-[linear-gradient(90deg,#9bd8ff_0%,#a88cff_58%,#b079ff_100%)] bg-clip-text text-transparent">
                                {' '}
                                {t('beautyverse.finalCta.summaryHighlight')}
                            </span>{' '}
                            {t('beautyverse.finalCta.summarySuffix')}
                        </h2>

                        <div
                            className={`mt-10 flex flex-col gap-4 transition-all delay-150 duration-700 sm:flex-row sm:items-center ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}
                        >
                            <button
                                type="button"
                                onClick={() => window.dispatchEvent(new Event('nextgency:open-consultation-popup'))}
                                className="group relative inline-flex w-fit items-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-[#6A4FDB] via-[#ee3e99] to-[#6A4FDB] py-1.5 pl-6 pr-1.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(176,79,205,0.32)] sm:text-[15px]"
                                style={{ backgroundSize: '200% 200%', animation: 'final-cta-gradient 3s ease-in-out infinite' }}
                            >
                                <span className="relative z-10">{t('beautyverse.cta')}</span>
                                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
                                    <ArrowUpRight className="h-5 w-5 transition duration-300 group-hover:rotate-12 group-hover:scale-110" strokeWidth={2.3} />
                                </span>
                                <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-[110%]" />
                            </button>

                            <p className="max-w-[460px] text-sm font-medium leading-7 text-white/58">
                                {t('beautyverse.finalCta.note')}
                            </p>
                        </div>
                    </div>
                </div>

                <style>{`
                    .final-cta-dot-field {
                        background-image: radial-gradient(circle, rgba(255,255,255,0.26) 1px, transparent 1.5px);
                        background-size: 32px 32px;
                        mask-image: radial-gradient(circle at 42% 48%, #000 0%, rgba(0,0,0,0.76) 36%, transparent 82%);
                        animation: final-cta-dots 18s linear infinite;
                    }

                    @keyframes final-cta-dots {
                        from { transform: translate3d(0, 0, 0); }
                        to { transform: translate3d(32px, 32px, 0); }
                    }

                    @keyframes final-cta-gradient {
                        0%, 100% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .final-cta-dot-field {
                            animation: none !important;
                        }
                    }
                `}</style>
            </section>
        </>
    );
};

export default FinalCtaSection;




