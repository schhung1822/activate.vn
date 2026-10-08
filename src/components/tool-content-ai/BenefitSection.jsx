import React from 'react';
import { useI18n } from '../../i18n';

const BenefitSection = () => {
    const { t, tm } = useI18n();
    // Kiểu hiển thị giữ trong code, phần chữ lấy từ từ điển
    const offers = tm('servicePages.toolContentAi.benefits.items').map((item, index) => ({
        id: index + 1,
        title: item.title,
        discount: item.highlight,
        description: item.description,
        discountLabel: index === 1 ? t('servicePages.toolContentAi.benefits.inLabel') : undefined,
        discountSuffix: index === 1 ? '1' : undefined,
        align: index === 3 ? undefined : 'left',
        gradient: index === 0 ? 'from-[#D4CEF5] to-[#EEC3E0]' : 'from-[#EEC3E0] to-[#EEC3E0]',
        isRadial: index === 3,
        isWhiteText: index === 3,
        compactHighlight: index === 0 || index === 3
    }));

    return (
        <section className="bg-black py-[60px] lg:py-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-6 sm:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-white leading-[1.35] uppercase text-center sm:text-left">
                        {t('servicePages.toolContentAi.benefits.titleLine1')} <br />{t('servicePages.toolContentAi.benefits.titleLine2')}
                    </h2>
                    <p className="text-white/80 text-[15px] lg:text-[18px] leading-relaxed text-center sm:text-right max-w-lg">
                        {t('servicePages.toolContentAi.benefits.subtitle')}
                    </p>
                </div>

                {/* Offers Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {offers.map((offer) => {
                        const textColor = offer.isWhiteText ? 'text-white' : 'text-[#6a4fdb]';
                        const highlightSize = offer.compactHighlight
                            ? 'text-[32px] sm:text-[36px] lg:text-[40px]'
                            : 'text-[44px] sm:text-[54px] lg:text-[64px]';

                        return (
                            <div
                                key={offer.id}
                                className="relative group cursor-pointer"
                            >
                                {/* Voucher Card with Hexagon Shape */}
                                <div className="relative overflow-hidden">
                                    {/* Background with gradient and hexagon clip-path */}
                                    <div
                                        className={`relative mx-auto h-[245px] sm:h-[270px] lg:h-[300px] w-full max-w-[320px] border-2 ${offer.isRadial ? 'bg-radial-gradient border-white/70' : `bg-gradient-to-br ${offer.gradient} border-white/90`} transform transition-all duration-300 shadow-2xl group-hover:shadow-3xl group-hover:-translate-y-1`}
                                        style={{
                                            clipPath: 'polygon(0% 0%, 75% 0%, 100% 25%, 100% 100%, 25% 100%, 0% 75%)',
                                            ...(offer.isRadial && {
                                                background: 'radial-gradient(circle at center, #6a4fdb, #7a6cea , #B3BDEE)'
                                            })
                                        }}
                                    >
                                        {/* Content */}
                                        <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-8 pt-7 sm:pt-8 pb-16 sm:pl-6 sm:pb-20 text-left">
                                            {/* Title */}
                                            <h3 className={`font-archivo font-semibold text-[17px] sm:text-[19px] lg:text-[20px] leading-snug w-full max-w-[230px] ${textColor}`}>
                                                {offer.title.split('\n').map((line, index) => (
                                                    <React.Fragment key={index}>
                                                        {line}
                                                        {index < offer.title.split('\n').length - 1 && <br />}
                                                    </React.Fragment>
                                                ))}
                                            </h3>

                                            {/* Discount Section */}
                                            <div className="w-full">
                                                <div className="flex items-baseline flex-wrap gap-x-1">
                                                    <span className={`font-black leading-none tracking-normal ${highlightSize} ${textColor}`}>
                                                        {offer.discount}
                                                    </span>
                                                    {offer.discountSuffix && (
                                                        <>
                                                            <span className={`text-[15px] sm:text-[17px] lg:text-[18px] font-medium mx-1 ${textColor}`}>
                                                                {offer.discountLabel}
                                                            </span>
                                                            <span className={`font-black leading-none text-[44px] sm:text-[54px] lg:text-[64px] ${textColor}`}>
                                                                {offer.discountSuffix}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>

                                                {offer.description && (
                                                    <p className={`text-[13px] sm:text-[15px] font-semibold leading-relaxed mt-2 w-full ${textColor}`}>
                                                        {offer.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full"></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BenefitSection;