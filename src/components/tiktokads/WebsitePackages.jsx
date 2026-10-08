import React from 'react';
import { useI18n } from '../../i18n';
import {Check, Star, Crown, ArrowRight} from 'lucide-react';

const WebsitePackages = () => {
    const { t, tm } = useI18n();
    const basicFeatures = tm('servicePages.tiktokAds.packages.basic.features');
    const standardFeatures = tm('servicePages.tiktokAds.packages.standard.features');
    const advancedFeatures = tm('servicePages.tiktokAds.packages.advanced.features');

    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('lilcontact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className="pt-[60px] lg:pt-[90px]">
            <div className="md:max-w-[500px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center lg:text-left mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black leading-[1.45] uppercase mb-1">
                        {t('shared.packages.title')}
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black">
                        {t('servicePages.tiktokAds.packages.subtitle')}
                    </p>
                </div>

                {/* Packages */}
                <div className="bg-gray-50 p-2 rounded-2xl">
                    <div className="grid lg:grid-cols-3 gap-6 bg-white p-2 rounded-xl shadow-md">
                    {/* Gói Cơ Bản */}
                    <div className="bg-white border-2 border-white rounded-lg p-8 neu-shadow-inset-xs transition-all duration-300 relative flex flex-col justify-between">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#ee3e99]/35 to-transparent rounded-full blur-xl"></div>
                        <div>
                            <div className="mb-6 pb-2 border-b border-black">
                                <h3 className="text-[16px] lg:text-[20px] font-medium text-black">
                                    {t('servicePages.tiktokAds.packages.basic.title')}
                                </h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {basicFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#ee3e99] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-700 text-[13px] lg:text-[14px] text-justify">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2">
                            <button
                                onClick={scrollToContact}
                                className="relative flex items-center space-x-3 px-16 py-4 bg-black text-[15px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group">
                                <span>{t('shared.cta.getConsultation')}</span>
                            </button>
                        </div>
                    </div>

                    {/* Gói Tiêu Chuẩn */}
                    <div className="bg-white border-2 border-[#6a4fdb] rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between">
                        {/* Decorative elements */}
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-[#6a4fdb]/35 to-transparent rounded-full blur-xl"></div>
                        {/* Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-[#6a4fdb] to-black text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-current" />
                                <span>{t('shared.packages.popular')}</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-4 pb-2 border-b border-[#6a4fdb]">
                                <h3 className="text-[16px] lg:text-[20px] font-medium text-black">
                                    {t('servicePages.tiktokAds.packages.standard.title')}
                                </h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {standardFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#6a4fdb] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-700 text-[13px] lg:text-[14px] text-justify">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2">
                            <button
                                onClick={scrollToContact}
                                className="relative flex items-center space-x-3 px-16 py-4 bg-gradient-to-r from-[#6a4fdb] to-black text-[15px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#0b2f8a]/40 hover:scale-105 group">
                                <span>{t('shared.cta.getConsultation')}</span>
                            </button>
                        </div>
                    </div>

                    {/* Gói Nâng Cao */}
                    <div className="bg-black border-2 border-black rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between">
                        {/* Premium Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-[#ee3e99] via-black to-[#ee3e99] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                                <Crown className="w-4 h-4 fill-current" />
                                <span>Premium</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-4 pb-2 border-b border-white">
                                <h3 className="text-[16px] lg:text-[20px] font-medium text-white">
                                    {t('servicePages.tiktokAds.packages.advanced.title')}
                                </h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {advancedFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-[#ee3e99] rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-300 text-[13px] lg:text-[14px] text-justify">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2">
                            <button
                                onClick={scrollToContact}
                                className="relative flex items-center space-x-3 px-16 py-4 bg-white text-[15px] text-black rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group">
                                <span>{t('shared.cta.getConsultation')}</span>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsitePackages;