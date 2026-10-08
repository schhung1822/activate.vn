import React from 'react';
import { useI18n } from '../../i18n';
import {ArrowRight, ArrowUpRight, Play} from 'lucide-react';
import {Link} from "react-router-dom";

const Hero = () => {
    const { t, tm } = useI18n();

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
        <section className="py-[60px] lg:py-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Row A - Hidden on mobile */}
                <div className="hidden lg:block">
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img
                            src="/assets/images/tiktokads/hero.webp"
                            alt="Team collaboration"
                            className="w-full h-48 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Row B - Main content */}
                <div className="py-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 items-center">

                        {/* Column A - Content (40%) */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="space-y-2">
                                <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-archivo font-bold text-black uppercase leading-none tracking-tight">
                                    Tiktok Ads
                                </h1>

                                {/* Description */}
                                <div className="space-y-4">
                                    <p className="text-[15px] lg:text-[18px] text-black text-justify max-w-xl">
                                        {t('servicePages.tiktokAds.hero.descriptionPrefix')}<strong>{t('servicePages.tiktokAds.hero.brand')}</strong>{t('servicePages.tiktokAds.hero.descriptionSuffix')}</p>

                                    {/* Bullet Points */}
                                    <div className="space-y-4">
                                        {tm('servicePages.tiktokAds.hero.bullets').map((bullet, index) => (
                                            <div key={index} className="flex items-start space-x-2">
                                                <div className="w-1.5 h-1.5 bg-[#ee3e99] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-[13px] lg:text-[16px] text-gray-700">
                                                    {bullet}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={scrollToContact}
                                    className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-black text-[15px] sm:text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"

                                >
        <span className="">
            {t('shared.cta.partnerNow')}
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

                        {/* Column B - Images (60%) */}
                        <div className="md:col-span-3 grid grid-cols-10 gap-4 h-60 lg:h-[450px]">

                            {/* B1 - 60% column */}
                            <div className="col-span-6 relative">
                                <div className="h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                                    <img
                                        src="/assets/images/tiktokads/hero2.webp"
                                        alt="Modern workspace"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t rounded-xl from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* B2 - 40% column */}
                            <div className="col-span-4 relative">
                                <div className="h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                                    <img
                                        src="/assets/images/tiktokads/hero2.webp"
                                        alt="Innovation"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t rounded-xl from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;