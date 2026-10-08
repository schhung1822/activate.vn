import React from 'react';
import { useI18n } from '../../i18n';
import {Link} from "react-router-dom";
import {ArrowUpRight} from "lucide-react";

const Hero = () => {
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
        <section className="bg-white py-[60px] lg:py-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Content */}
                <div className="text-center mb-4 lg:mb-8">
                    <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-archivo font-bold bg-gradient-to-r from-black to-[#f06aae] uppercase bg-clip-text text-transparent leading-none tracking-tight mb-1">
                        {t('servicePages.googleAds.hero.title')}
                    </h1>
                    <p className="text-[15px] lg:text-[18px] text-black max-w-xl mx-auto">
                        {t('servicePages.googleAds.hero.description')}
                    </p>
                </div>

                {/* Image Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-4 sm:mb-8">
                    {/* Column 1 - Single tall image */}
                    <div className="hidden lg:flex items-center justify-center">
                        <div className="w-full aspect-[4/4] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-lg overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Two stacked images */}
                    <div className="hidden md:flex flex-col gap-4 sm:gap-6 justify-center p-2 bg-gray-50 rounded-2xl">
                        <div className="w-full aspect-[4/3] bg-gradient-to-br from-fuchsia-100 to-pink-100 rounded-xl shadow-lg overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            </div>
                        </div>
                        <div className="w-full aspect-[4/4] bg-gradient-to-br from-green-100 to-teal-100 rounded-xl shadow-lg overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            </div>
                        </div>
                    </div>

                    {/* Column 3 - Main large image */}
                    <div className="flex items-center justify-center">
                        <div className="w-full max-h-[320px] lg:max-h-[340px] aspect-[4/5] bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl shadow-xl overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            </div>
                        </div>
                    </div>

                    {/* Column 4 - Two stacked images */}
                    <div className="hidden md:flex flex-col gap-4 sm:gap-6 justify-center p-2 bg-gray-50 rounded-2xl">
                        <div className="w-full aspect-[4/4] bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl shadow-lg overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            </div>
                        </div>
                        <div className="w-full aspect-[4/3] bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl shadow-lg overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            </div>
                        </div>
                    </div>

                    {/* Column 5 - Single tall image */}
                    <div className="hidden lg:flex items-center justify-center">
                        <div className="w-full aspect-[4/4] bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-2xl shadow-lg overflow-hidden">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Gallery for smaller screens */}
                <div className="md:hidden grid grid-cols-2 gap-4 mb-6 p-2 bg-gray-50 rounded-2xl">
                    <div className="aspect-[4/4] bg-gradient-to-br from-orange-100 to-red-100 rounded-xl shadow-lg overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        </div>
                    </div>
                    <div className="aspect-[4/4] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl shadow-lg overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-black mb-4 text-[15px] lg:text-[18px] transition-colors duration-300">
                        {t('shared.cta.contactForQuote')}
                    </p>
                    {/* CTA Button */}
                    <div className="flex items-center justify-center space-x-4">
                        <button
                            onClick={scrollToContact}
                            className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-black text-[15px] sm:text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"

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
            </div>
        </section>
    );
};

export default Hero;