import React from 'react';
import { useI18n } from '../../i18n';
import { ArrowUpRight } from 'lucide-react';

const FinalCtaSection = () => {
    const { t } = useI18n();
    const OpenNewSite = (e) => {
        e.preventDefault();
        window.open('https://app.nextgency.vn/login', '_blank');
    };

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-black via-[#6a4fdb] to-[#6a4fdb] py-[60px] lg:py-[90px]">
            {/* Dotted texture */}
            <div
                className="absolute inset-0 opacity-[0.18]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '22px 22px'
                }}
            ></div>

            {/* Glow */}
            <div className="absolute -top-24 right-0 w-[420px] h-[420px] bg-[#ee3e99]/30 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-white uppercase leading-[1.45] mb-2">
                    {t('servicePages.toolContentAi.finalCta.titleLine1')} <br className="hidden md:block" />{t('servicePages.toolContentAi.finalCta.titleLine2')}
                </h2>

                <p className="text-white/80 text-[15px] lg:text-[18px] mb-6">
                    {t('servicePages.toolContentAi.finalCta.description')}
                </p>

                {/* CTA Button */}
                <div className="flex items-center justify-center">
                    <button
                        onClick={OpenNewSite}
                        className="group relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-white text-[16px] text-black rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/20 hover:scale-105"
                    >
                        <span>{t('servicePages.toolContentAi.finalCta.cta')}</span>
                        <div className="w-[2.5rem] h-[2.5rem] bg-black rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                            <ArrowUpRight
                                className="w-5 h-5 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-105"
                                strokeWidth={2.5}
                            />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinalCtaSection;
