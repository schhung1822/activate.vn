import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Bell, Gift, QrCode, Sparkles, Vote } from 'lucide-react';
import { useI18n } from '../../i18n';

// Icon, ảnh và số thứ tự giữ trong code; chữ lấy từ từ điển
const buildModules = (tm) =>
    tm('beautyverse.scope.items').map((item, index) => ({
        icon: [QrCode, Sparkles, Gift, Vote, Bell][index],
        number: String(index + 1).padStart(2, "0"),
        title: item.title,
        text: item.description,
        tags: item.tags,
        image: ['/assets/images/projects/qr-checkin.webp', '/assets/images/projects/nhiemvu.webp', '/assets/images/projects/diem.webp', '/assets/images/projects/vote.webp', '/assets/images/projects/zbs.webp'][index],
        caption: ['Screenshot - Man hinh check-in QR', 'Screenshot - Nhiem vu gamification', 'Screenshot - Vi BPoint va doi voucher', 'Screenshot - Brand Voting 4 hang muc', 'Screenshot - Thong bao Zalo ZNS'][index]
    }));

const PhonePreview = ({ image, caption, reverse, index }) => (
    <div
        className={`beautyverse-scope-phone relative mx-auto h-[440px] w-[222px] sm:h-[520px] sm:w-[262px] ${reverse ? 'lg:ml-8 lg:mr-auto' : 'lg:ml-auto lg:mr-8'}`}
        style={{ animationDelay: `${index * 140}ms` }}
    >
        <div className="absolute inset-x-5 bottom-[-34px] h-16 rounded-[50%] bg-black/24 blur-2xl" />
        <div className="relative h-full w-full rounded-[38px] border-[7px] border-[#06070d] bg-[#06070d] p-[8px] shadow-[0_34px_95px_rgba(5,8,24,0.26)]">
            <div className="absolute left-1/2 top-[18px] z-20 h-[22px] w-[86px] -translate-x-1/2 rounded-full bg-[#0b0d18]" />
            <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#f7f8fc]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,60,120,0.04)_0_10%,transparent_10%_20%,rgba(30,60,120,0.04)_20%_30%,transparent_30%_40%)] bg-[length:34px_34px]" />
                <img src={image} alt={caption} className="absolute inset-0 h-full w-full object-cover" />
            </div>
        </div>
    </div>
);

const ScopeRow = ({ module, index, isVisible }) => {
    const Icon = module.icon;
    const reverse = index % 2 === 1;

    return (
        <article
            className={`group relative grid gap-10 border-b border-[#dfe4f1] py-16 transition-all duration-700 lg:min-h-[560px] lg:grid-cols-2 lg:items-center lg:gap-16 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: `${160 + index * 90}ms` }}
        >
            <div className={`absolute top-16 hidden h-px w-28 overflow-hidden bg-[#dfe4f1] lg:block ${reverse ? 'right-[46%]' : 'left-[46%]'}`}>
                <span className="beautyverse-scope-line block h-px w-full origin-left bg-[linear-gradient(90deg,#5a3fc8,#b04fcd,#9ed6ff)]" />
            </div>

            <div className={`${reverse ? 'lg:order-2' : ''}`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#0f226f_0%,#5e5cf0_55%,#b87cff_100%)] font-archivo text-xl font-black text-white shadow-[0_10px_25px_rgba(94,92,240,0.24)]">
                    {module.number}
                </div>
                <h3 className="mt-4 font-archivo text-[34px] font-black leading-tight tracking-normal text-[#05050b] sm:text-[44px]">
                    {module.title}
                </h3>
                <p className="mt-5 max-w-[620px] text-base font-medium leading-8 text-[#17213f]/82">
                    {module.text}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                    {module.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-[#dfe4f1] bg-white/70 px-4 py-2 font-mono text-[11px] font-bold tracking-[0.12em] text-[#5a3fc8] shadow-[0_8px_22px_rgba(24,34,74,0.04)] backdrop-blur"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className={`${reverse ? 'lg:order-1' : ''}`}>
                <PhonePreview image={module.image} caption={module.caption} reverse={reverse} index={index} />
            </div>
        </article>
    );
};

const ScopeSection = () => {
    const { t, tm } = useI18n();
    const modules = buildModules(tm);
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
            { threshold: 0.12 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="scope" ref={sectionRef} className="relative overflow-hidden bg-[linear-gradient(180deg,#f4f8ff_0%,#ffffff_38%,#f6f3ff_100%)] py-18 sm:py-20 lg:py-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(158,214,255,0.28),transparent_28%),radial-gradient(circle_at_82%_38%,rgba(176,79,205,0.18),transparent_30%)]" />
                <div className="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(rgba(33,78,171,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(33,78,171,0.12)_1px,transparent_1px)] [background-size:52px_52px]" />
                <div className="absolute right-[12%] top-[12%] h-64 w-64 rounded-full bg-[#9ed6ff]/20 blur-3xl" />
                <div className="absolute bottom-[12%] left-[8%] h-72 w-72 rounded-full bg-[#b04fcd]/14 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-[1280px] py-14 sm:py-2 px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-[13px] font-black uppercase tracking-[0.36em] text-[#5a3fc8]">
                        {t('beautyverse.scope.badge')}
                    </p>
                    <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
                        <h2 className="mt-5 max-w-[880px] font-archivo text-[38px] font-black leading-[0.98] tracking-normal text-[#05050b] sm:text-[56px] lg:text-[68px]">
                            {t('beautyverse.scope.title')}
                        </h2>
                    </div>
                </div>

                <div className="mt-14">
                    {modules.map((module, index) => (
                        <ScopeRow key={module.number} module={module} index={index} isVisible={isVisible} />
                    ))}
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
            </div>

            <style>{`
                .beautyverse-scope-phone {
                    animation: beautyverse-scope-float 5.6s ease-in-out infinite;
                    will-change: transform;
                }

                .beautyverse-scope-phone::before {
                    content: "";
                    position: absolute;
                    inset: -22px;
                    border-radius: 44px;
                    background: linear-gradient(135deg, rgba(33,78,171,0.16), rgba(176,79,205,0.16), rgba(158,214,255,0.2));
                    filter: blur(18px);
                    opacity: 0.72;
                    z-index: -1;
                    animation: beautyverse-scope-glow 3.8s ease-in-out infinite;
                }

                .beautyverse-scope-line {
                    animation: beautyverse-scope-line 2.6s ease-in-out infinite;
                }

                @keyframes beautyverse-scope-float {
                    0%, 100% { transform: translate3d(0, 0, 0) rotate(-1.2deg); }
                    50% { transform: translate3d(0, -16px, 0) rotate(1.2deg); }
                }

                @keyframes beautyverse-scope-glow {
                    0%, 100% { opacity: 0.45; transform: scale(0.98); }
                    50% { opacity: 0.8; transform: scale(1.03); }
                }

                @keyframes beautyverse-scope-line {
                    0%, 100% { transform: scaleX(0.18); opacity: 0.35; }
                    50% { transform: scaleX(1); opacity: 0.92; }
                }

                @media (prefers-reduced-motion: reduce) {
                    .beautyverse-scope-phone,
                    .beautyverse-scope-phone::before,
                    .beautyverse-scope-line {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default ScopeSection;