import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useI18n } from '../../i18n';

const sliderImages = [
    '/assets/images/projects/home.webp',
    '/assets/images/projects/thiep.webp',
    '/assets/images/projects/diem.webp',
    '/assets/images/projects/doiqua.webp',
    '/assets/images/projects/load.webp',
];

const featureTags = ['Check-in QR', 'Gamification', 'BPoint', 'Brand Voting', 'Notify ZNS Zalo'];

// Con số giữ trong code, phần chữ lấy từ từ điển
const buildStats = (tm) =>
    tm('beautyverse.hero.stats').map((label, index) => ({
        ...[
            {value: 7000},
            {value: 3500, prefix: '~'},
            {value: 100, suffix: '+'},
            {value: 500, prefix: '+', suffix: '%'}
        ][index],
        label
    }));

const milestones = [
    { year: '2024', value: '4.000' },
    { year: '2025', value: '5.000' },
    { year: '2026', value: '7.000 +75%' },
];

const DotField = () => (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="beautyverse-dot-field absolute inset-0 opacity-70" />
        <div className="beautyverse-grid-field absolute inset-0 opacity-35" />
        <div className="absolute left-[-12%] top-[-18%] h-[520px] w-[520px] rounded-full bg-[#161155]/55 blur-3xl" />
        <div className="absolute bottom-[-22%] right-[12%] h-[440px] w-[440px] rounded-full bg-[#a76cff]/30 blur-3xl" />
        <div className="absolute right-[-8%] top-[18%] h-[520px] w-[520px] rounded-full bg-[#8fd7ff]/20 blur-3xl" />
    </div>
);

const PhoneSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % sliderImages.length);
        }, 2800);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <div className="beautyverse-phone-wrap relative mx-auto h-[480px] w-[240px] sm:h-[560px] sm:w-[280px] lg:h-[624px] lg:w-[312px]">
            <div className="absolute inset-x-8 bottom-[-34px] h-16 rounded-[50%] bg-black/10 blur-2xl" />
            <div className="beautyverse-phone relative h-full w-full rounded-[44px] border-[6px] border-[#070712] bg-[#080815] shadow-[0_34px_70px_rgba(0,0,0,0.42)]">
                <div className="absolute left-1/2 top-[14px] z-20 h-[20px] w-[92px] -translate-x-1/2 rounded-full bg-[#05050a]" />
                <div className="absolute inset-[8px] overflow-hidden rounded-[32px] bg-[#10102a]">
                    <div className="absolute inset-0 bg-[length:34px_34px]" />
                    {sliderImages.map((image, index) => (
                        <img
                            key={image}
                            src={image}
                            alt={`BEAUTYVERSE mini app screen ${index + 1}`}
                            className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
                                index === activeSlide ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                            }`}
                        />
                    ))}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,18,0.04),rgba(6,6,18,0.6))]" />
                    <div className="absolute bottom-5 left-5 right-5">
                        <p className="font-mono text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-white/82">
                            Screenshot
                            <br />
                            Mini App BEAUTYVERSE
                        </p>
                        <div className="mt-3 flex gap-1.5">
                            {sliderImages.map((image, index) => (
                                <button
                                    key={image}
                                    type="button"
                                    aria-label={`Mini app slide ${index + 1}`}
                                    onClick={() => setActiveSlide(index)}
                                    className={`h-1.5 rounded-full transition-all ${
                                        index === activeSlide ? 'w-8 bg-white' : 'w-2 bg-white/35'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const formatStatValue = (value) => new Intl.NumberFormat('vi-VN').format(value);

const CountUpStat = ({ stat, index }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const statRef = React.useRef(null);

    useEffect(() => {
        const node = statRef.current;
        if (!node || hasAnimated) return undefined;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
            setDisplayValue(stat.value);
            setHasAnimated(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                setHasAnimated(true);
                observer.disconnect();

                const duration = 1400 + index * 180;
                const startTime = performance.now();

                const tick = (now) => {
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);

                    setDisplayValue(Math.round(stat.value * eased));

                    if (progress < 1) {
                        window.requestAnimationFrame(tick);
                    }
                };

                window.requestAnimationFrame(tick);
            },
            { threshold: 0.35 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [hasAnimated, index, stat.value]);

    return (
        <div ref={statRef} className="beautyverse-stat">
            <div className="font-archivo text-4xl font-black tracking-normal text-white sm:text-5xl">
                <span>{stat.prefix}</span>
                <span>{formatStatValue(displayValue)}</span>
                <span>{stat.suffix}</span>
            </div>
            <p className="mt-3 max-w-[220px] font-mono text-[10px] font-bold uppercase leading-5 tracking-[0.18em] text-white/42">
                {stat.label}
            </p>
        </div>
    );
};
const BeautyVerseHero = () => {
    const { t, tm } = useI18n();
    const stats = buildStats(tm);
    const splitTitle = useMemo(() => ['BEAUTY', 'VERSE'], []);

    return (
        <section className="relative overflow-hidden bg-[#080914] text-white">
            <div className="absolute inset-0 bg-[linear-gradient(112deg,#060710_0%,#17135c_25%,#315d9f_50%,#9365f5_78%,#9bd8ff_100%)]" />
            <DotField />

            <div className="relative mx-auto grid min-h-[calc(100vh-85px)] max-w-[1280px] items-center gap-10 px-4 pb-12 pt-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-16 lg:pt-20">
                <div className="beautyverse-hero-copy max-w-3xl">
                    <div className="mb-7 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-[#8fc6ff]">
                        <Sparkles className="h-4 w-4" />
                        <span>Beauty Summit 2026 - Zalo Mini App</span>
                    </div>

                    <h1 className="font-archivo text-[58px] font-black uppercase leading-[0.82] tracking-normal sm:text-[92px] lg:text-[116px] xl:text-[132px]">
                        <span className="block text-white drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)]">{splitTitle[0]}</span>
                        <span className="block bg-[linear-gradient(90deg,#9ed6ff_0%,#b986ff_68%,#f2a8ff_100%)] bg-clip-text text-transparent">
                            {splitTitle[1]}
                        </span>
                    </h1>

                    <p className="mt-8 max-w-[640px] text-[22px] font-medium leading-[1.18] text-white/92 sm:text-[28px]">
                        {t('beautyverse.hero.title')}
                    </p>
                    <p className="mt-5 max-w-[620px] text-sm font-semibold leading-8 text-[#c7d7ff]/82 sm:text-base">
                        {t('beautyverse.hero.descriptionPrefix')}
                         <span className="text-white">{t('beautyverse.hero.techPartner')}</span>{t('beautyverse.hero.descriptionSuffix')}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                        {featureTags.map((tag, index) => (
                            <span
                                key={tag}
                                className={`inline-flex h-11 items-center rounded-full border px-5 text-[11px] font-black uppercase tracking-[0.2em] transition duration-300 hover:-translate-y-0.5 ${
                                    index === 0
                                        ? 'border-white bg-white text-[#111225]'
                                        : 'border-white/28 bg-white/5 text-white/78 backdrop-blur hover:border-white/55'
                                }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-12 mb-4 flex flex-col gap-5 sm:flex-row sm:items-center">
                        <a
                            href="#scope"
                            className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#111225] transition hover:bg-[#b7f06b]"
                        >
                            {t('beautyverse.hero.viewScope')}
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </a>
                        <div className="flex items-center gap-2 text-sm font-semibold text-white/75">
                            <CheckCircle2 className="h-5 w-5 text-[#b7f06b]" />
                            <span>{t('beautyverse.hero.platformNote')}</span>
                        </div>
                    </div>

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

                    <div className="mt-14 flex flex-wrap items-center gap-4 text-white/72">
                        {milestones.map((item, index) => (
                            <React.Fragment key={item.year}>
                                <div className="flex items-end gap-2">
                                    <span className="font-archivo text-2xl font-black text-white">{item.year}</span>
                                    <span className="mb-1 text-xs font-bold text-white/46">{item.value}</span>
                                </div>
                                {index < milestones.length - 1 && (
                                    <div className="h-px w-16 bg-white/38 sm:w-24">
                                        <span className="block h-px w-full origin-left animate-[beautyverse-line_2.4s_ease-in-out_infinite] bg-white/80" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="beautyverse-phone-stage relative flex min-h-[440px] items-center justify-center lg:min-h-[620px]">
                    <div className="absolute h-[440px] w-[440px] rounded-full bg-[#b887ff]/20 blur-3xl" />
                    <PhoneSlider />
                </div>
            </div>

            <div className="relative bg-[#05050c]">
                <div className="mx-auto grid max-w-[1280px] gap-7 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
                    {stats.map((stat, index) => (
                        <CountUpStat key={stat.label} stat={stat} index={index} />
                    ))}
                </div>
            </div>

            <style>{`
                .beautyverse-dot-field {
                    background-image: radial-gradient(circle, rgba(255,255,255,0.32) 1px, transparent 1.4px);
                    background-size: 30px 30px;
                    animation: beautyverse-dots 18s linear infinite;
                    mask-image: radial-gradient(circle at 58% 48%, #000 0%, rgba(0,0,0,0.9) 30%, transparent 78%);
                }

                .beautyverse-grid-field {
                    background-image:
                        linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px);
                    background-size: 56px 56px;
                }

                .beautyverse-hero-copy > * {
                    animation: beautyverse-rise 0.9s ease both;
                }

                .beautyverse-hero-copy > *:nth-child(2) { animation-delay: 0.08s; }
                .beautyverse-hero-copy > *:nth-child(3) { animation-delay: 0.16s; }
                .beautyverse-hero-copy > *:nth-child(4) { animation-delay: 0.24s; }
                .beautyverse-hero-copy > *:nth-child(5) { animation-delay: 0.32s; }
                .beautyverse-hero-copy > *:nth-child(6) { animation-delay: 0.4s; }
                .beautyverse-hero-copy > *:nth-child(7) { animation-delay: 0.48s; }

                .beautyverse-phone-wrap {
                    animation: beautyverse-float 5.4s ease-in-out infinite;
                    transform: rotate(4deg);
                }

                .beautyverse-phone {
                    animation: beautyverse-phone-in 1s cubic-bezier(.2,.8,.2,1) both;
                }

                .beautyverse-stat {
                    animation: beautyverse-rise 0.8s ease both;
                }

                .beautyverse-stat:nth-child(2) { animation-delay: 0.08s; }
                .beautyverse-stat:nth-child(3) { animation-delay: 0.16s; }
                .beautyverse-stat:nth-child(4) { animation-delay: 0.24s; }

                @keyframes beautyverse-dots {
                    from { transform: translate3d(0, 0, 0); }
                    to { transform: translate3d(30px, 30px, 0); }
                }

                @keyframes beautyverse-rise {
                    from {
                        opacity: 0;
                        transform: translate3d(0, 22px, 0);
                    }
                    to {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                    }
                }

                @keyframes beautyverse-float {
                    0%, 100% { transform: rotate(4deg) translate3d(0, 0, 0); }
                    50% { transform: rotate(2.2deg) translate3d(0, -18px, 0); }
                }

                @keyframes beautyverse-phone-in {
                    from {
                        opacity: 0;
                        transform: translate3d(28px, 34px, 0) scale(0.94);
                    }
                    to {
                        opacity: 1;
                        transform: translate3d(0, 0, 0) scale(1);
                    }
                }

                @keyframes beautyverse-cta-gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes beautyverse-line {
                    0%, 100% { transform: scaleX(0.15); opacity: 0.35; }
                    50% { transform: scaleX(1); opacity: 0.85; }
                }

                @media (prefers-reduced-motion: reduce) {
                    .beautyverse-dot-field,
                    .beautyverse-hero-copy > *,
                    .beautyverse-phone-wrap,
                    .beautyverse-phone,
                    .beautyverse-stat {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default BeautyVerseHero;
