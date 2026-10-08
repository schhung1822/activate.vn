import React from 'react';
import { useI18n } from '../../i18n';
import {CheckCircle2, Shield, TrendingUp, ArrowRight, Sparkles, Verified, ArrowUpRight} from 'lucide-react';
import {Link} from "react-router-dom";

const HeroSection = () => {
    const { t } = useI18n();

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
        <section className="bg-white py-[60px] lg:py-[90px] relative">
            <div className="relative md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 items-center">
                    {/* Content Column - 60% */}
                    <div className="lg:col-span-3 space-y-4 mb-12 lg:mb-0">
                        {/* Title Section */}
                        <div className="space-y-2">
                            <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-archivo font-bold bg-black  bg-clip-text text-transparent leading-none tracking-tight">
                               {t('servicePages.tickXanh.hero.title')}
                            </h1>
                            <div className="flex items-center gap-4">
                                <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-archivo font-bold bg-gradient-to-r from-black to-[#ee3e99] bg-clip-text text-transparent leading-none tracking-tight">
                                    FACEBOOK
                                </h1>
                                {/* SVG Circles */}
                                <div className="flex-shrink-0">
                                    <svg
                                        width="94"
                                        height="51"
                                        viewBox="0 0 94 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12"
                                    >
                                        <circle
                                            cx="25.4404"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#fdeef6"
                                            className="animate-pulse"
                                            style={{ animationDelay: '0s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="40.1005"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#fbd5e8"
                                            className="animate-pulse"
                                            style={{ animationDelay: '0.5s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="53.8994"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#f7b3d6"
                                            className="animate-pulse"
                                            style={{ animationDelay: '1s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="68.5596"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#f06aae"
                                            className="animate-pulse"
                                            style={{ animationDelay: '1.5s', animationDuration: '2s' }}
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Divider Line */}
                        <div className="hidden lg:block w-72 h-0.5 bg-black"></div>

                        {/* Description */}
                        <div className="space-y-2">
                            <p className="text-[15px] lg:text-[18px] text-black text-justify max-w-xl">
                                {t('servicePages.tickXanh.hero.descriptionPart1')}<strong>{t('servicePages.tickXanh.hero.highlight1')}</strong>{t('servicePages.tickXanh.hero.descriptionPart2')}<strong>{t('servicePages.tickXanh.hero.highlight2')}</strong>{t('servicePages.tickXanh.hero.descriptionPart3')}
                            </p>


                            <p className="text-[15px] lg:text-[18px] text-black text-justify max-w-xl">
                                {t('servicePages.tickXanh.hero.description2')}
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={scrollToContact}
                                className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-black text-[15px] sm:text-[16px] text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"

                            >
        <span className="">
            {t('shared.cta.consultNow')}
        </span>
                                <div
                                    className="w-9 h-9 sm:w-[2.5rem] sm:h-[2.5rem] bg-white rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                    <ArrowUpRight
                                        className="w-5 h-5 text-black transition-all duration-300 group-hover:rotate-12 group-hover:scale-105"
                                        strokeWidth={2.5}/>
                                </div>
                            </button>

                        </div>
                    </div>

                    {/* Image Column - 40% */}
                    <div className="lg:col-span-2">
                        {/* Visual Column */}
                        <div className="relative">
                            <div className="relative p-2 bg-gray-50 rounded-2xl">
                                {/* Main card */}
                                <div className="relative bg-gradient-to-br from-black via-black to-[#ee3e99] rounded-xl p-6 sm:p-8 shadow-md">
                                    {/* Facebook profile mockup */}
                                    <div className="relative bg-white rounded-lg p-4 ">
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center neu-shadow-xs border-2 border-white">
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                                                    <CheckCircle2 className="w-5 h-5 text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-[15px] lg:text-[18px] font-bold text-black flex items-center gap-2">
                                                    Activate
                                                    <CheckCircle2 className="w-5 h-5 text-black" />
                                                </h3>
                                                <p className="text-sm text-blue-600 font-medium mt-1">{t('servicePages.tickXanh.hero.badges.verified')}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature badges */}
                                    <div className="grid grid-cols-2 gap-3 mt-6">
                                        <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                                            <div>
                                                <div className="text-[14px] lg:text-[16px] font-semibold text-gray-900">{t('servicePages.tickXanh.hero.badges.safe')}</div>
                                                <div className="text-[12px] lg:text-[15px] text-gray-600">{t('servicePages.tickXanh.hero.badges.security')}</div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                                            <div>
                                                <div className="text-[14px] lg:text-[16px] font-semibold text-gray-900">{t('servicePages.tickXanh.hero.badges.effective')}</div>
                                                <div className="text-[12px] lg:text-[15px] text-gray-600">{t('servicePages.tickXanh.hero.badges.engagement')}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <div className="absolute -top-4 -left-0 bg-white rounded-xl shadow-lg p-3">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-black" />
                                        <span className="text-sm font-medium">{t('servicePages.tickXanh.hero.badges.fastApproval')}</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;