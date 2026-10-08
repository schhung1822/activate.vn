import React from 'react';
import { useI18n } from '../../i18n';

const OffersSection = () => {
    const { t, tm } = useI18n();
    // Con số và kiểu hiển thị giữ trong code, phần chữ lấy từ từ điển
    const offers = tm('servicePages.websiteLanding.offers.items').map((offer, index) => ({
        id: index + 1,
        title: offer.title,
        description: offer.description,
        discount: ['15%', '10%', '3'][index],
        discountLabel: index === 2 ? t('servicePages.websiteLanding.offers.inLabel') : t('servicePages.websiteLanding.offers.discountLabel'),
        discountSuffix: index === 2 ? '1' : undefined,
        align: index === 2 ? 'center' : 'left',
        gradient: ['from-[#D4CEF5] to-[#EEC3E0]', 'from-[#EEC3E0] to-[#EEC3E0]', 'from-orange-600 to-red-600'][index],
        isRadial: index === 2,
        isWhiteText: index === 2
    }));

    return (
        <section className="bg-black py-[60px] lg:py-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4 sm:mb-8 ">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-white leading-[1.45] uppercase">
                        {t('servicePages.websiteLanding.offers.titleLine1')}<br/>{t('servicePages.websiteLanding.offers.titleLine2')}
                    </h2>
                    <p className="text-white text-[15px] lg:text-[18px] text-center sm:text-right">
                        {t('servicePages.websiteLanding.offers.subtitleLine1')}<br/>{t('servicePages.websiteLanding.offers.subtitleLine2')}
                    </p>
                </div>

                {/* Offers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="relative group cursor-pointer"
                        >
                            {/* Voucher Card with Hexagon Shape */}
                            <div className="relative overflow-hidden">
                                {/* Background with gradient and hexagon clip-path */}
                                <div
                                    className={`
                    relative mx-auto h-60 sm:h-72 lg:h-80 w-72 sm:w-72 border-2 lg:w-80 ${offer.isRadial ? 'bg-radial-gradient' : `bg-gradient-to-br ${offer.gradient}`}
                    transform transition-all duration-300
                    shadow-2xl group-hover:shadow-3xl
                  `}
                                    style={{
                                        clipPath: 'polygon(0% 0%, 75% 0%, 100% 25%, 100% 100%, 25% 100%, 0% 75%)',
                                        ...(offer.isRadial && {
                                            background: 'radial-gradient(circle at center, #6a4fdb, #7a6cea , #B3BDEE)'
                                        })
                                    }}
                                >
                                    {/* Content */}
                                    <div className={`
                    relative z-10 h-full flex flex-col pr-4 pl-12 sm:px-8 pt-8
                    ${offer.align === 'center' ? 'items-start text-left' : 'items-start text-left'}
                  `}>
                                        {/* Title */}
                                        <h3 className={`font-archivo font-semibold text-[20px] sm:text-[22px] mb-4 leading-tight w-full ${
                                            offer.isWhiteText ? 'text-white' : 'text-[#6a4fdb]'
                                        }`}>
                                            {offer.title.split('\n').map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    {index < offer.title.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </h3>

                                        {/* Discount Section */}
                                        <div className={`w-full ${offer.align === 'center' ? 'text-left' : 'text-left'}`}>
                                            {/* Only show discountLabel if there's no discountSuffix */}
                                            {!offer.discountSuffix && (
                                                <p className={`text-[13px] sm:text-[15px] font-medium ${
                                                    offer.isWhiteText ? 'text-white' : 'text-[#6a4fdb]'
                                                }`}>
                                                    {offer.discountLabel}
                                                </p>
                                            )}
                                            <div className={`flex items-baseline ${offer.align === 'center' ? 'justify-start' : 'justify-start'}`}>
                        <span className={`font-black text-5xl lg:text-7xl ${
                            offer.isWhiteText ? 'text-white' : 'text-[#6a4fdb]'
                        }`}>
                          {offer.discount}
                        </span>
                                                {offer.discountSuffix && (
                                                    <>
                            <span className={`text-base sm:text-lg font-medium mx-1 ${
                                offer.isWhiteText ? 'text-white' : 'text-[#6a4fdb]'
                            }`}>
                              {offer.discountLabel}
                            </span>
                                                        <span className={`font-black text-5xl lg:text-7xl ${
                                                            offer.isWhiteText ? 'text-white' : 'text-[#6a4fdb]'
                                                        }`}>
                              {offer.discountSuffix}
                            </span>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className={`text-[13px] sm:text-[15px] font-medium leading-relaxed w-full ${
                                            offer.isWhiteText ? 'text-white' : 'text-[#6a4fdb]'
                                        }`}>
                                            {offer.description}
                                        </p>
                                    </div>

                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OffersSection;