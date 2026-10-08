import React from 'react';
import { useI18n } from '../../i18n';

/* Hai đơn vị cùng phát triển Tool Content AI */
const DEVELOPERS = [
    {
        name: 'Activate',
        roleKey: 'strategy',
        logo: '/assets/images/brand/activate-logo-dark.png',
        logoClass: 'max-h-10 lg:max-h-12 max-w-[80%]'
    },
    {
        name: 'Noti.vn',
        roleKey: 'platform',
        logo: '/assets/images/partner/noti.webp',
        logoClass: 'max-h-14 lg:max-h-16 max-w-[60%]'
    }
];

const DevelopmentPartners = () => {
    const { t } = useI18n();
    return (
        <section className="bg-white py-[60px] lg:py-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tiêu đề và mô tả ngắn */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-8">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1">
                            {t('servicePages.toolContentAi.partners.titleLine1')}<br/>{t('servicePages.toolContentAi.partners.titleLine2')}
                        </h2>
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-right">
                        <p className="text-[15px] lg:text-[18px] text-black">
                            {t('servicePages.toolContentAi.partners.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Hai logo bên trái - khung mô tả bên phải */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {DEVELOPERS.map((developer) => (
                        <div
                            key={developer.name}
                            className="group relative flex min-h-[160px] flex-col items-center justify-center gap-4
                                       overflow-hidden rounded-xl border border-[#fbd5e8] bg-white p-6
                                       transition-all duration-300 ease-in-out
                                       hover:-translate-y-1 hover:border-[#ee3e99] hover:shadow-lg cursor-pointer"
                        >
                            <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-[#ee3e99]/30 to-transparent blur-xl" />
                            <img
                                src={developer.logo}
                                alt={`Logo ${developer.name}`}
                                loading="lazy"
                                className={`relative object-contain transition-opacity duration-300 group-hover:opacity-80 ${developer.logoClass}`}
                            />
                            <div className="relative text-center">
                                <p className="text-[12px] lg:text-[13px] text-gray-600">{t(`servicePages.toolContentAi.partners.roles.${developer.roleKey}`)}</p>
                            </div>
                        </div>
                    ))}

                    {/* Khung đen mô tả */}
                    <div className="group col-span-2 relative flex items-center overflow-hidden rounded-xl
                                    border border-[#ee3e99]/25 bg-gradient-to-br from-[#1f0b2a] via-[#0d0f26] to-[#070818]
                                    p-4 lg:p-6 shadow-[0_24px_60px_-28px_rgba(85,52,187,.85)]
                                    transition-all duration-500 ease-in-out cursor-pointer
                                    hover:-translate-y-1 hover:border-[#ee3e99]/50 hover:shadow-[0_30px_70px_-26px_rgba(85,52,187,1)]">
                        {/* Lưới nền mờ */}
                        <div className="pointer-events-none absolute inset-0 opacity-40
                                        bg-[linear-gradient(rgba(238,62,153,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(238,62,153,.05)_1px,transparent_1px)]
                                        bg-[size:26px_26px]" />
                        {/* Hào quang tím - xanh */}
                        <div className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-[#ee3e99]/25 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-[#6a4fdb]/30 blur-3xl" />
                        {/* Vạch nhấn bên trái */}
                        <span className="pointer-events-none absolute inset-y-4 left-0 w-[3px] rounded-full bg-gradient-to-b from-[#ee3e99] via-[#7a6cea] to-[#6a4fdb]" />

                        <div className="relative pl-3 lg:pl-4">
                            <p className="text-[14px] lg:text-[15px] text-gray-300 leading-relaxed mb-2">
                                {t('servicePages.toolContentAi.partners.descriptionPrefix')}<strong className="font-bold text-[#f9c3df]">Noti.vn</strong>{t('servicePages.toolContentAi.partners.and')}<strong className="font-bold text-[#f9c3df]">Activate</strong>{t('servicePages.toolContentAi.partners.descriptionSuffix')}
                            </p>
                            <p className="text-[14px] lg:text-[15px] text-gray-300 leading-relaxed">
                                {t('servicePages.toolContentAi.partners.paragraph2')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopmentPartners;
