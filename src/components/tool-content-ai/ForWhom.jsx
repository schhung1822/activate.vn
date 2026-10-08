import React from "react";
import { useI18n } from '../../i18n';

const ForWhom = () => {
    const { t, tm } = useI18n();
    // Kiểu hiển thị giữ trong code, phần chữ lấy từ từ điển
    const painPoints = tm('servicePages.toolContentAi.forWhom.items').map((point, index) => ({
        ...point,
        isDark: index === 3,
        rotation: ['lg:-rotate-1', 'lg:rotate-1', 'lg:rotate-1', 'lg:-rotate-1'][index]
    }));

    return (
        <section className="relative bg-white pt-[60px] lg:pt-[90px] pb-20">

            <div className="relative z-10 md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    {/* Title */}
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold leading-[1.45] uppercase text-black mb-1">
                        {t('servicePages.toolContentAi.forWhom.title')}
                    </h2>

                </div>

                {/* Pain Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className={`
        ${point.isDark ? 'bg-black' : 'bg-white'}
        ${point.rotation}
        border-2 border-black rounded-xl p-4 lg:p-6
        shadow-md transform-gpu
        lg:hover:shadow-lg lg:hover:scale-105 lg:hover:rotate-0
        transition-all duration-300 ease-out
      `}
                        >
                            {/* Card Content */}
                            <div className="flex flex-col justify-between h-full">
                                {/* Title & Description Container */}
                                <div>
                                    {/* Title */}
                                    <h3 className={`
              text-[14px] lg:text-[16px] font-medium
              ${point.isDark ? 'text-white' : 'text-black'}
            `}>
                                        {point.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`
              text-[13px] lg:text-[15px] max-w-sm
              ${point.isDark ? 'text-gray-300' : 'text-gray-700'}
            `}>
                                        {point.description}
                                    </p>
                                </div>

                                {/* Impact */}
                                <div className={`
          inline-flex items-center gap-2 px-3 py-1 rounded-full text-[13px] lg:text-[15px] font-medium mt-4 self-start
          ${point.isDark ? 'bg-[#ee3e99]/20 text-[#ee3e99]' : 'bg-[#6a4fdb]/10 text-[#6a4fdb]'}
        `}>
                                    <span className="w-2 h-2 bg-current rounded-full"></span>
                                    {point.impact}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ForWhom;