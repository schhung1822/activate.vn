import React from 'react';
import { useI18n } from '../../i18n';
import { Link2, Search, FileText, Send } from 'lucide-react';

const HowItWorks = () => {
    const { t, tm } = useI18n();
    // Icon giữ trong code, phần chữ lấy từ từ điển
    const steps = tm('servicePages.toolContentAi.howItWorks.steps').map((step, index) => ({
        icon: [Link2, Search, FileText, Send][index],
        title: step.title,
        description: step.description
    }));

    return (
        <section className="relative bg-white pt-[60px] lg:pt-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 lg:mb-12">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1">
                        {t('servicePages.toolContentAi.howItWorks.title')}
                    </h2>
                    <p className="text-black text-[15px] lg:text-[18px]">
                        {t('servicePages.toolContentAi.howItWorks.subtitle')}
                    </p>
                </div>

                {/* Steps */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isLast = index === steps.length - 1;

                        return (
                            <div key={index} className="relative group text-center">
                                {/* Connector line (desktop only) */}
                                {!isLast && (
                                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2.75rem)] right-[calc(-50%+2.75rem)] h-px border-t-2 border-dashed border-[#ee3e99]/50"></div>
                                )}

                                {/* Icon + number badge */}
                                <div className="relative inline-flex mb-4">
                                    <div className="w-16 h-16 bg-white border-2 border-black rounded-2xl flex items-center justify-center shadow-md transform-gpu transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                                        <Icon className="w-6 h-6 text-[#6a4fdb]" strokeWidth={2} />
                                    </div>
                                    <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-gradient-to-r from-[#6a4fdb] to-[#ee3e99] text-white text-[13px] font-bold flex items-center justify-center border-2 border-white shadow-md">
                                        {index + 1}
                                    </span>
                                </div>

                                {/* Text */}
                                <h3 className="text-[15px] lg:text-[18px] font-medium text-black mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-gray-700 text-[13px] lg:text-[15px] max-w-[260px] mx-auto">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
