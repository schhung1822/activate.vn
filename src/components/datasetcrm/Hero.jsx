import React from 'react';
import { useI18n } from '../../i18n';
import {ArrowRight, ArrowUpRight} from 'lucide-react';
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
        <section className="relative min-h-[60%] lg:min-h-[1020px] flex items-center justify-center overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                {/* Desktop Background */}
                <div className="hidden md:block absolute inset-0">
                    <img
                        src="/assets/images/crm/herodesktop.webp"
                        alt="Facebook Dataset & CRM - Desktop Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Mobile Background */}
                <div className="block md:hidden absolute inset-0">
                    <img
                        src="/assets/images/crm/herodesktop.webp"
                        alt="Facebook Dataset & CRM - Mobile Background"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left space-y-4 py-20">
                    {/* Main Title */}
                    <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-bold text-black leading-none uppercase">
                        <span className="block font-archivo">Facebook<br/>Dataset & CRM</span>
                    </h1>

                    {/* Description */}
                    <div className="space-y-4">
                        <p className="text-[15px] lg:text-[18px] text-black text-justify max-w-xl">
                            {t('servicePages.facebookCrm.hero.descriptionPrefix')}{t('servicePages.facebookCrm.hero.brand')}{t('servicePages.facebookCrm.hero.descriptionSuffix')}
                        </p>

                                    {/* Bullet Points */}
                                    <div className="space-y-4">
                                        {tm('servicePages.facebookCrm.hero.bullets').map((bullet, index) => (
                                            <div key={index} className="flex items-start space-x-2">
                                                <div className="w-1.5 h-1.5 bg-[#ee3e99] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-[13px] lg:text-[16px] text-gray-700">
                                                    {bullet}
                                                </p>
                                            </div>
                                        ))}
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
            </div>
        </section>
    );
};

export default Hero;