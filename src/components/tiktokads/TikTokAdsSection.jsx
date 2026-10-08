import React from 'react';
import { useI18n } from '../../i18n';
import { Lightbulb, TrendingUp, ShoppingCart, Video, Heart, Smartphone } from 'lucide-react';

const TikTokAdsSection = () => {
    const { t, tm } = useI18n();
    // Icon, phụ đề tiếng Anh và hiệu ứng giữ trong code; tiêu đề + mô tả lấy từ từ điển
    const services = tm('servicePages.tiktokAds.adFormats.items').map((item, index) => ({
        id: index + 1,
        icon: [Lightbulb, TrendingUp, ShoppingCart, Video, Heart, Smartphone][index],
        title: item.title,
        subtitle: ['Brand Takeover, Top View, In-feed Reach & Frequency', 'Lead Gen Ads, Traffic Ads, Conversion Ads', 'In-feed Add-to-Cart, Shop Now', 'Live Ads, Top View to Live', 'Engagement Ads', 'App Install App'][index],
        description: item.description,
        delay: `delay-[${(index + 1) * 100}ms]`
    }));

    return (
        <section className="py-[60px] lg:py-[90px] bg-white">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black mb-1 leading-[1.45] uppercase">
                        {t('servicePages.tiktokAds.adFormats.title')}
                    </h2>
                    <p className="text-black text-[15px] lg:text-[18px] max-w-xl mx-auto">
                        {t('servicePages.tiktokAds.adFormats.subtitle')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className=" p-2 bg-gray-50 rounded-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 p-2 bg-white rounded-xl shadow-sm">
                        {services.map((service) => {
                            const Icon = service.icon;
                            const isLastCard = service.id === 6;

                            return (
                                <div
                                    key={service.id}
                                    className={`group ${isLastCard ? 'bg-black' : 'bg-white'} border-2 border-gray-50 rounded-lg p-6 lg:p-8 ${isLastCard ? '' : 'neu-shadow-inset-xs'} transition-all duration-500 hover:-translate-y-2 ${service.delay}`}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-14 h-14 ${isLastCard ? 'bg-gradient-to-br from-white to-gray-200' : 'bg-gradient-to-br from-black to-[#6a4fdb]'} rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                            <Icon className={`w-7 h-7 ${isLastCard ? 'text-black' : 'text-white'}`} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <h3 className={`text-[14px] lg:text-[16px] font-medium ${isLastCard ? 'text-white' : 'text-black'} mb-3 relative`}>
                                        <span className="relative z-10">{service.title}</span>
                                        <span className={`absolute inset-0 ${isLastCard ? 'bg-gradient-to-r from-transparent via-white/5 to-white/30' : 'bg-gradient-to-r from-transparent via-[#6a4fdb]/5 to-[#6a4fdb]/30'} rounded-2xl`}></span>
                                    </h3>
                                    <p className={`${isLastCard ? 'text-gray-300' : 'text-gray-700'} text-[13px] lg:text-[15px]`}>
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TikTokAdsSection;