import React from 'react';
import { useI18n } from '../../i18n';
import {ArrowUpRight, ChevronRight} from 'lucide-react';
import {Link} from "react-router-dom";

const PainPointSection = () => {
    const { t, tm } = useI18n();
    // Icon/kiểu hiển thị giữ nguyên trong JSX; phần chữ lấy từ từ điển
    const items = tm('servicePages.aiData.painPoints.items');
    const painPoints = items.map((item) => ({title: item.title, description: item.description}));
    const solutions = items.map((item) => ({
        title: item.solutionTitle,
        description: item.solutionDescription
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
        <section className="pt-[60px] lg:pt-[90px] relative">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-2">
                        <span className=" text-black rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            Automation-ai-data
                        </span>
                    </div>
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1">
                        {t('servicePages.aiData.painPoints.title')}
                    </h2>
                </div>

                {/* Pain & Solution Cards */}
                <div className="relative space-y-6 p-2 bg-gray-50 rounded-2xl">
                    {painPoints.map((pain, index) => {
                        return (
                            <div key={index} className="group relative">
                                {/* Connection line */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 hidden md:block">
                                    <div className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center neu-shadow-xs shadow-lg group-hover:border-[#ee3e99] transition-all duration-300">
                                        <ChevronRight className="w-5 h-5 text-[#ee3e99] transition-transform duration-300" />
                                    </div>
                                </div>

                                <div className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] z-20">
                                    <div className="grid md:grid-cols-2 p-2 gap-2">
                                        {/* Pain Point - Left Side */}
                                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg px-6 py-5 md:px-16 md:py-7 relative">
                                            <div className="relative z-10">
                                                <div className="flex justify-center mb-2">
                                                </div>
                                                <div className="text-center">
                                                    <h4 className="text-white font-medium text-[15px] lg:text-[18px] mb-1">
                                                        {pain.title}
                                                    </h4>
                                                    <p className="text-gray-300 text-[13px] lg:text-[15px]">
                                                        {pain.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Solution - Right Side */}
                                        <div className="bg-gradient-to-br from-white to-gray-50 neu-shadow-inset-xs rounded-lg px-6 py-5 md:px-16 md:py-7 relative">

                                            {/* Decorative elements */}
                                            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#ee3e99]/35 to-transparent rounded-full blur-xl"></div>

                                            <div className="relative z-10">
                                                <div className="flex justify-center mb-2">
                                                </div>
                                                <div className="text-center">
                                                    <h4 className="text-black font-medium text-[15px] lg:text-[18px] mb-1">
                                                        {solutions[index].title}
                                                    </h4>
                                                    <p className="text-gray-700 text-[13px] lg:text-[15px] mb-2">
                                                        {solutions[index].description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* CTA */}
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

export default PainPointSection;