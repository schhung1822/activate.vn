import React, { useState } from 'react';
import { useI18n } from '../../i18n';
import { ChevronDown } from 'lucide-react';

const ProfileSection = () => {
    const { t, tm } = useI18n();
    const [expandedSections, setExpandedSections] = useState({ 0: true });

    const toggleSection = (index) => {
        setExpandedSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const requirements = tm('servicePages.toolContentAi.faq.items');

    return (
        <section className="w-full bg-white py-[60px] lg:py-[90px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black leading-[1.45] mb-1 uppercase">
                        {t('servicePages.toolContentAi.faq.title')}
                    </h2>
                    <p className="text-[15px] lg:text-[18px] text-black max-w-3xl mx-auto">
                        {t('servicePages.toolContentAi.faq.subtitle')}
                    </p>
                </div>

                {/* Requirements Accordion */}
                <div className="space-y-4 p-2 bg-gray-50 rounded-2xl">
                    {requirements.map((req, index) => {
                        const isExpanded = expandedSections[index];
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-lg border-2 border-white shadow-md transition-all duration-300 ${
                                    isExpanded
                                        ? 'bg-white border-[#6a4fdb] shadow-lg'
                                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                                }`}
                            >
                                {/* Active Indicator */}
                                {isExpanded && (
                                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-black to-[#6a4fdb]"></div>
                                )}

                                {/* Header */}
                                <div
                                    className={`flex items-center justify-between cursor-pointer p-6 transition-all duration-300 ${
                                        isExpanded ? 'pb-4' : 'hover:bg-gray-50'
                                    }`}
                                    onClick={() => toggleSection(index)}
                                >
                                    <div className="flex items-center space-x-5 flex-1">
                                        {/* Number Badge */}
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[16px] transition-all duration-300 ${
                                            isExpanded
                                                ? 'bg-[#6a4fdb] text-white'
                                                : 'bg-black text-white group-hover:bg-[#6a4fdb]'
                                        }`}>
                                            {String(index + 1).padStart(2,)}
                                        </div>

                                        {/* Title */}
                                        <h3 className={`text-[14px] md:text-[16px] font-medium transition-all duration-300 ${
                                            isExpanded ? 'text-black' : 'text-gray-700 group-hover:text-black'
                                        }`}>
                                            {req.title}
                                        </h3>
                                    </div>

                                    {/* Expand Icon */}
                                    <button className={`ml-4 p-2 rounded-lg transition-all duration-300 ${
                                        isExpanded
                                            ? ' text-[#6a4fdb] rotate-180'
                                            : ' text-gray-500 hover:bg-gray-200'
                                    }`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Expandable Content */}
                                <div className={`transition-all duration-300 ${
                                    isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                }`} style={{
                                    maxHeight: isExpanded ? '600px' : '0px',
                                    overflow: 'hidden'
                                }}>
                                    <div className="px-6 pb-6">
                                        <p className="ml-15 text-gray-600 text-[13px] lg:text-[15px] leading-relaxed">
                                            {req.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;