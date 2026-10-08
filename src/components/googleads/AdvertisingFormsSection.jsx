import React from 'react';
import { useI18n } from '../../i18n';
import {Link} from "react-router-dom";
import {ArrowUpRight} from "lucide-react";

const AdvertisingFormsSection = () => {
    const { t, tm } = useI18n();
    // Ảnh và màu nền giữ trong code, tên hình thức lấy từ từ điển
    const advertisingForms = tm('servicePages.googleAds.adFormats.items').map((title, index) => ({
        id: index + 1,
        title,
        description: ['(Google Search)', '(Google Display)', '(YouTube Ads)', '(Google Max)', '(Google Local)', '(Google Shopping)', '(Google Discovery)', '(Google Smart)', '(Google App)'][index],
        image: ['ggsearch', 'ggdisplay', 'ggvideo', 'ggmax', 'gglocal', 'ggshopping', 'ggdiscovery', 'ggsmart', 'ggapp'].map((name) => `/assets/images/googleads/${name}.webp`)[index],
        bgColor: index % 2 === 0 ? 'bg-[#ee3e99]' : 'bg-black'
    }));

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
                {/* Section Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black leading-[1.45] uppercase mb-1">
                        {t('servicePages.googleAds.adFormats.title')}
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black max-w-3xl mx-auto">
                        {t('servicePages.googleAds.adFormats.subtitle')}
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 px-11 md:px-0">
                    {advertisingForms.map((form) => (
                        <div
                            key={form.id}
                            className={`
                ${form.bgColor} 
                overflow-hidden cursor-pointer
                transform transition-all duration-300 ease-out
                hover:scale-105 
                group relative
                aspect-square
              `}
                        >
                            {/* Card Content */}
                            <div className="p-4 h-full flex flex-col">
                                {/* Image Container - Smaller on mobile */}
                                <div className="mt-8 lg:mt-0 p-2 lg:p-4 overflow-hidden flex-1">
                                    <img
                                        src={form.image}
                                        alt={form.title}
                                        className="w-full h-full object-contain max-h-[160px] lg:max-h-none mx-auto transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-shrink-0 lg:px-0">
                                    <h3 className="text-center text-[15px] lg:text-[18px] font-medium text-white mb-0.5 transition-all duration-300">
                                        {form.title}
                                    </h3>
                                    <p className="text-center text-gray-100 text-[14px] lg:text-[16px] transition-all duration-300">
                                        {form.description}
                                    </p>
                                </div>
                            </div>

                            {/* Subtle gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
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

export default AdvertisingFormsSection;