import React from 'react';
import { useI18n } from '../../i18n';
import {ArrowUpRight, Check, Star} from 'lucide-react';

const WebsitePackages = () => {
    const { t, tm } = useI18n();
    const enterpriseFeatures = tm('servicePages.toolContentAi.packages.features');
    // Giá là con số nên giữ trong code; phần chữ lấy từ từ điển
    const pricingPlans = tm('servicePages.toolContentAi.packages.plans').map((plan, index) => ({
        duration: plan.duration,
        price: plan.price,
        perMonth: plan.perMonth,
        note: plan.note,
        badge: plan.badge || null,
        featured: index === 1
    }));

    const OpenNewSite = (e) => {
        e.preventDefault();
        window.open('https://app.nextgency.vn/login', '_blank');
    };

    return (
        <section className="py-[60px] lg:py-[90px] relative">
            <div className="md:max-w-[900px] lg:max-w-[1280px] mx-auto px-4 sm:px-4 lg:px-8">
                {/* Header */}
                <div className="text-center lg:text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1">
                        {t('servicePages.toolContentAi.packages.title')}
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black">
                        {t('servicePages.toolContentAi.packages.subtitle')}
                    </p>
                </div>

                {/* Packages */}
                <div className=" bg-gray-50 p-2 rounded-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 bg-white p-2 rounded-xl shadow-md">
                        {/* Cột 1: Thông tin gói */}
                        <div className="lg:col-span-2 bg-white border-2 border-white rounded-lg p-5 xl:p-8 neu-shadow-inset-xs transition-all duration-300 relative flex flex-col justify-between">
                            {/* Decorative elements */}
                            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#ee3e99]/35 to-transparent rounded-full blur-xl"></div>
                            <div>
                                <div className="mb-6 pb-2 border-b border-black">
                                    <h3 className="text-[20px] lg:text-[24px] font-bold text-black">
                                        Enterprise
                                    </h3>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {enterpriseFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-5 h-5 bg-[#ee3e99] rounded-full flex items-center justify-center mt-0.5">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-gray-700 text-[13px] lg:text-[14px] text-left">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="flex items-center justify-center pt-2">
                                <button
                                    onClick={OpenNewSite}
                                    className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#6a4fdb] via-[#ee3e99] to-[#6a4fdb] text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/20 hover:scale-105 group animate-gradient-shift"
                                    style={{
                                        backgroundSize: '200% 200%'
                                    }}
                                >
                                    <span className="">
                                        {t('servicePages.toolContentAi.packages.cta')}
                                    </span>
                                    <div className="w-[2.5rem] h-[2.5rem] bg-black rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-105" strokeWidth={2.5}/>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Cột 2: Các mức giá theo chu kỳ */}
                        <div className="lg:col-span-3 flex flex-col gap-2">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`rounded-lg p-5 xl:p-8 transition-all duration-300 relative flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${
                                        plan.featured
                                            ? 'bg-black border-2 border-black shadow-xl hover:shadow-2xl'
                                            : 'bg-white border-2 border-white neu-shadow-inset-xs'
                                    }`}>
                                    {/* Decorative elements */}
                                    {!plan.featured && (
                                        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#ee3e99]/35 to-transparent rounded-full blur-xl"></div>
                                    )}

                                    {/* Badge */}
                                    {plan.badge && (
                                        <div className="absolute -top-3 left-6 md:left-8">
                                            <div className="bg-gradient-to-r from-[#ee3e99] via-black to-[#ee3e99] text-white px-5 py-1.5 rounded-full text-[12px] lg:text-sm font-semibold flex items-center space-x-1">
                                                <Star className="w-3.5 h-3.5 fill-current" />
                                                <span>{plan.badge}</span>
                                            </div>
                                        </div>
                                    )}

                                    <div className="relative">
                                        <h3 className={`text-[16px] lg:text-[20px] font-medium mb-1 ${plan.featured ? 'text-white' : 'text-black'}`}>
                                            {plan.duration}
                                        </h3>
                                        <span className={`block text-[22px] lg:text-[28px] font-bold ${plan.featured ? 'text-white' : 'text-black'}`}>
                                            {plan.price}
                                        </span>
                                    </div>

                                    <div className="relative flex flex-col md:items-end gap-2">
                                        <span className={`text-[15px] lg:text-[16px] font-semibold ${plan.featured ? 'text-white' : 'text-black'}`}>
                                            {plan.perMonth}
                                        </span>
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-shrink-0 w-5 h-5 bg-[#ee3e99] rounded-full flex items-center justify-center">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className={`text-[13px] lg:text-[14px] ${plan.featured ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {plan.note}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsitePackages;
