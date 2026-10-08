import React, { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../i18n';
import { Bell, Database, Globe2, Megaphone, QrCode, Trophy } from 'lucide-react';

// Icon giữ trong code; chữ lấy từ từ điển
const buildPlatformItems = (t, tm) => [
    ...tm('beautyverse.platform.items2024').map((item, index) => ({
        kicker: t('beautyverse.platform.since2024'),
        title: item.title,
        text: item.description,
        icon: [Megaphone, QrCode, Bell, Database][index]
    })),
    ...tm('beautyverse.platform.items2025').map((item, index) => ({
        kicker: t('beautyverse.platform.since2025'),
        title: item.title,
        text: item.description,
        icon: [Globe2, Trophy][index]
    }))
];

const PlatformSection = () => {
    const { t, tm } = useI18n();
    const platformItems = buildPlatformItems(t, tm);
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
        <section ref={sectionRef} className="relative overflow-hidden bg-[#f5f7fc] py-18 sm:py-20 lg:py-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-[12%] top-[10%] h-64 w-64 rounded-full bg-[#9ed6ff]/16 blur-3xl" />
                <div className="absolute bottom-[12%] left-[8%] h-72 w-72 rounded-full bg-[#b04fcd]/10 blur-3xl" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9def4] to-transparent" />
            </div>

            <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className={`max-w-[860px] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-[13px] font-black uppercase tracking-[0.36em] text-[#5a3fc8]">
                        {t('beautyverse.platform.badge')}
                    </p>
                    <h2 className="mt-5 font-archivo text-[30px] font-black leading-[0.98] tracking-normal text-[#05050b] sm:text-[46px] lg:text-[54px]">
                        {t('beautyverse.platform.titleLine1')}
                        <span className="block">{t('beautyverse.platform.titleLine2')}</span>
                    </h2>
                    <p className="mt-7 max-w-[760px] text-base font-medium leading-8 text-[#17213f]/82 sm:text-lg">
                        {t('beautyverse.platform.description')}
                    </p>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {platformItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className={`group relative min-h-[210px] overflow-hidden rounded-[18px] border border-[#dfe4f1] bg-white p-7 shadow-[0_18px_55px_rgba(13,20,45,0.045)] transition-all duration-700 hover:-translate-y-2 hover:border-[#bfcaf0] hover:shadow-[0_26px_70px_rgba(13,20,45,0.1)] ${
                                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                                style={{ transitionDelay: `${140 + index * 80}ms` }}
                            >
                                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[linear-gradient(90deg,#5a3fc8,#b04fcd,#9ed6ff)] transition-transform duration-500 group-hover:scale-x-100" />
                                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#f5f7fc] text-[#5a3fc8] transition group-hover:bg-[#101645] group-hover:text-white">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[#5a3fc8]">
                                    {item.kicker}
                                </p>
                                <h3 className="mt-4 max-w-[280px] font-archivo text-[23px] font-black leading-tight tracking-normal text-[#05050b]">
                                    {item.title}
                                </h3>
                                <p className="mt-4 max-w-[340px] text-sm font-medium leading-7 text-[#17213f]/78">
                                    {item.text}
                                </p>

                                <div className="absolute bottom-0 right-0 h-20 w-20 translate-x-8 translate-y-8 rounded-full bg-[#b04fcd]/10 blur-2xl transition group-hover:bg-[#9ed6ff]/20" />
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PlatformSection;
