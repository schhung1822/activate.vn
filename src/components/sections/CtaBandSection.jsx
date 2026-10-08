// Dải kêu gọi hợp tác cuối trang: "Liên hệ hợp tác" + "Tải hồ sơ năng lực".
import React from 'react';
import {useI18n} from '../../i18n';
import {COMPANY} from '../../pages/seo-configs.js';
import {ArrowButton, SectionBadge} from './ui.jsx';

const CtaBandSection = () => {
    const {t} = useI18n();
    return (
        <section className="bg-white py-[60px] lg:py-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black via-black to-[#2D0F3B] px-6 py-12 lg:px-16 lg:py-16">
                    <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-[#ee3e99]/25 blur-3xl" aria-hidden="true" />
                    <div className="absolute -left-20 -bottom-28 w-72 h-72 rounded-full bg-[#6a4fdb]/30 blur-3xl" aria-hidden="true" />
                    <img src="/assets/images/brand/activate-mark.svg" alt="" className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 w-40 opacity-90" />
                    <div className="relative max-w-2xl space-y-4">
                        <SectionBadge tone="brand">{t('corporate.ctaBand.badge')}</SectionBadge>
                        <h2 className="text-[24px] md:text-[32px] lg:text-[44px] font-archivo font-bold text-white uppercase leading-[1.2]">
                            {t('corporate.ctaBand.title')}
                        </h2>
                        <p className="text-[15px] lg:text-[18px] text-gray-200">{t('corporate.ctaBand.description')}</p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <ArrowButton to="/contact" variant="gradient">{t('corporate.cta.partner')}</ArrowButton>
                            <ArrowButton href={COMPANY.profilePdf} download variant="outline" icon="download">
                                {t('corporate.cta.profile')}
                            </ArrowButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaBandSection;
