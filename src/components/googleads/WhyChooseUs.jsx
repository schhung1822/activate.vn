import React from 'react';
import { useI18n } from '../../i18n';
import {Link} from "react-router-dom";
import {ArrowUpRight} from "lucide-react";

const WhyChooseUs = () => {
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
        <section className="pt-[60px] lg:pt-[90px] bg-white">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[20px] md:text-[28px] font-archivo font-bold leading-none uppercase">
                        {t('shared.whyChooseUs.titleLine1')}<br />
                        <span className="bg-gradient-to-r from-black to-[#ee3e99] bg-clip-text text-transparent font-archivo text-[36px] md:text-[50px] lg:text-[60px] uppercase">
              Activate?
            </span>
                    </h2>
                    <p className="hidden lg:block text-black text-[15px] lg:text-[18px] max-w-lg mx-auto">
                        {t('shared.whyChooseUs.subtitle')}
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-2 bg-gray-50 rounded-2xl">
                    {/* Cột A (40%) */}
                    <div className="lg:col-span-2 bg-black rounded-xl px-6 pt-6 text-white lg:h-[500px]">
                        {/* Row A (45%) */}
                        <div className="mb-6 lg:mb-8 lg:h-[20%] flex flex-col justify-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Cột mô tả */}
                                <div className="flex flex-col justify-center">
                                    <p className="text-white text-[13px] lg:text-[15px]">
                                        {t('servicePages.googleAds.why.intro')}
                                    </p>
                                </div>

                                {/* Cột badges */}
                                <div className="flex flex-wrap gap-3 items-center justify-center">
                                    <div className="bg-gradient-to-r from-[#6a4fdb] via-black to-black text-white px-3 py-2 rounded-full text-[11px] lg:text-[13px] font-medium transform -rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer hover:shadow-lg hover:shadow-cyan-500/25">
                                        {t('shared.whyChooseUs.badges.enthusiastic')}
                                    </div>
                                    <div className="bg-gradient-to-r from-black via-black to-[#ee3e99] text-white px-3 py-2 rounded-full text-[11px] lg:text-[13px] font-medium transform rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer hover:shadow-lg hover:shadow-fuchsia-500/25">
                                        {t('shared.whyChooseUs.badges.young')}
                                    </div>
                                    <div className="bg-gradient-to-r from-[#6a4fdb] via-black to-[#ee3e99] text-white px-3 py-2 rounded-full text-[11px] lg:text-[13px] font-medium transform -rotate-1 hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer hover:shadow-lg hover:shadow-indigo-500/25">
                                        {t('shared.whyChooseUs.badges.experienced')}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row B (55%) - Ảnh nhân sự */}
                        <div className="h-[80%] flex lg:pb-8">
                            <div className="w-full h-56 md:h-full pb-6 overflow-hidden">
                                <img
                                    src="/assets/images/whychooseus.webp"
                                    alt={t('shared.whyChooseUs.teamAlt')}
                                    className="w-full h-full rounded-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Cột B (60%) */}
                    <div className="lg:col-span-3 space-y-3 lg:h-[500px] bg-gradient-to-tl from-[#6a4fdb] via-black to-black p-2 rounded-xl">
                        {/* Row A (50%) */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:h-[236px]">
                            {/* Cột 60% */}
                            <div className="md:col-span-3 rounded-lg p-5 bg-white relative overflow-hidden h-full">
                                <h3 className="text-[11px] sm:text-[13px] font-medium text-black mb-1 uppercase tracking-widest">
                                    {t('shared.whyChooseUs.experienceTitle')}
                                </h3>
                                <p className="text-[13px] lg:text-[15px] text-gray-700">
                                    {t('servicePages.googleAds.why.experienceDescription')}
                                </p>
                                <div className="absolute bottom-2 right-2 lg:bottom-6 lg:right-6">
                                    <svg className="w-11+ h-11 lg:w-20 lg:h-20 text-black opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path fill="black" stroke="none" d="M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" d="M9 12l2 2 4-4"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Cột 40% */}
                            <div className="md:col-span-2 bg-white rounded-lg p-5 flex flex-col h-full">
                                <h3 className="text-[11px] sm:text-[13px] font-medium text-black mb-1 uppercase tracking-widest">
                                    {t('servicePages.googleAds.why.highlightTitle')}
                                </h3>
                                <p className="text-[13px] lg:text-[15px] text-gray-700 ">
                                    {t('servicePages.googleAds.why.highlightDescription')}
                                </p>
                            </div>
                        </div>

                        {/* Row B (50%) */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:h-[236px]">
                            {/* Cột 40% */}
                            <div className="md:col-span-2 border-2 bg-white border-black rounded-lg p-6 flex flex-col h-full">
                                <h3 className="text-[11px] sm:text-[13px] font-medium text-black mb-1 uppercase tracking-widest">
                                    {t('shared.whyChooseUs.supportTitle')}
                                </h3>
                                <p className="text-[13px] lg:text-[15px] text-gray-700">
                                    {t('servicePages.googleAds.why.supportDescription')}
                                </p>
                            </div>

                            {/* Cột 60% */}
                            <div className="md:col-span-3 bg-black rounded-lg p-5 flex flex-col justify-center items-center text-center text-white h-full">
                                <p className="text-gray-100 text-[13px] lg:text-[15px] -mb-1">
                                    {t('shared.whyChooseUs.trustedBy')}
                                </p>
                                <div className="text-[44px] lg:text-[54px] font-bold text-white">
                                    100+
                                </div>
                                <p className="text-gray-100 text-[13px] lg:text-[15px] -mt-1">
                                    {t('shared.whyChooseUs.industries')}
                                </p>
                            </div>
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

export default WhyChooseUs;