import React from 'react';
import { useI18n } from '../../i18n';
import {Check, Star, ArrowRight, ArrowUpRight} from 'lucide-react';

const LandingPagePackages = () => {
    const { t, tm } = useI18n();
    const basicPackage = tm('servicePages.facebookAds.packages.basic');
    const advancedPackage = tm('servicePages.facebookAds.packages.advanced');

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
        <section className="bg-white py-[60px] lg:py-[90px]">
            <div className="md:max-w-[500px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black leading-[1.45] uppercase mb-1">
                        {t('servicePages.facebookAds.packages.title')}
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black max-w-xl mx-auto">
                        {t('servicePages.facebookAds.packages.subtitle')}
                    </p>
                </div>

                {/* Packages */}
                <div className=" p-2 bg-gray-50 rounded-2xl">
                    <div className="grid lg:grid-cols-2 gap-6 p-2 bg-white rounded-xl shadow-md">
                    {/* Gói Cơ Bản */}
                    <div className="bg-white border-2 border-white rounded-lg p-8 neu-shadow-inset-xs transition-all duration-300 relative flex flex-col justify-between">
                        <div>
                            <div className="mb-6 pb-2 border-b border-black">
                                <h3 className="text-[16px] lg:text-[20px] font-medium text-black">
                                    {t('servicePages.facebookAds.packages.basicTitle')}
                                </h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {basicPackage.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="space-y-3">
                                        <h4 className="text-[14px] lg:text-[16px] font-medium text-black">
                                            {section.subtitle}
                                        </h4>
                                        <div className="space-y-2 ml-4">
                                            {section.features.map((feature, index) => (
                                                <div key={index} className="flex items-start space-x-3">
                                                    <div className="flex-shrink-0 w-4 h-4 bg-[#ee3e99] rounded-full flex items-center justify-center mt-1">
                                                        <Check className="w-2.5 h-2.5 text-white" />
                                                    </div>
                                                    <span className="text-gray-700 text-[13px] lg:text-[14px] leading-relaxed">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2 space-x-4">
                            <button
                                onClick={scrollToContact}
                                className="relative flex items-center space-x-3 px-16 lg:px-24 py-4 bg-black text-[15px] sm:text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"
                            >
                                <span className="">
                                    {t('shared.cta.getConsultation')}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Gói Nâng Cao */}
                    <div className="bg-black border-2 border-black rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between">
                        {/* Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-[#ee3e99] via-black to-[#ee3e99] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-current" />
                                <span>{t('shared.packages.popular')}</span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-6 pb-2 border-b border-white">
                                <h3 className="text-[16px] lg:text-[20px] font-medium text-white">
                                    <span className="">{t('servicePages.facebookAds.packages.advancedTitle')}</span>
                                </h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {advancedPackage.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="space-y-3">
                                        <h4 className="text-[14px] lg:text-[16px] font-medium text-white">
                                            {section.subtitle}
                                        </h4>
                                        {section.features.length > 0 && (
                                            <div className="space-y-2 ml-4">
                                                {section.features.map((feature, index) => (
                                                    <div key={index} className="flex items-start space-x-3">
                                                        <div className="flex-shrink-0 w-4 h-4 bg-[#ee3e99] rounded-full flex items-center justify-center mt-1">
                                                            <Check className="w-2.5 h-2.5 text-white" />
                                                        </div>
                                                        <span className="text-gray-300 text-[13px] lg:text-[14px] leading-relaxed">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center pt-2 space-x-4">
                            <button
                                onClick={scrollToContact}
                                className="relative flex items-center space-x-3 px-16 lg:px-24 py-4 bg-white text-[15px] sm:text-[16px] text-black rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"
                            >
                                <span className="">
                                    {t('shared.cta.getConsultation')}
                                </span>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPagePackages;