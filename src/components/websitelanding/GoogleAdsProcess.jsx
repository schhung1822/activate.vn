
import React from "react";
import { useI18n } from '../../i18n';

const GoogleAdsProcess = () => {
    const { t, tm } = useI18n();
    // Ảnh minh hoạ gắn ở bước 1; phần chữ lấy từ từ điển
    const processSteps = tm('servicePages.websiteLanding.process.steps').map((step, index) => ({
        id: index + 1,
        title: step.title,
        steps: step.items,
        hasImage: index === 0
    }));

    const Card = ({ step }) => {
        const maxSteps = 3;
        const isLastCard = step.id === 4;

        return (
            <div className={`border-2 rounded-lg p-5 transition-all shadow-md duration-300 flex flex-col h-full ${
                isLastCard
                    ? 'bg-gradient-to-br from-black via-black to-[#6a4fdb] border-black'
                    : ' border-white'
            }`}>
                {/* Card Header with Number */}
                <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isLastCard ? 'bg-white text-black' : 'bg-black text-white'
                    }`}>
                        <span className="text-sm font-bold">{step.id}</span>
                    </div>
                    <h3 className={`text-[15px] lg:text-[18px] font-medium leading-tight ${
                        isLastCard ? 'text-white' : 'text-black'
                    }`}>
                        {step.title}
                    </h3>
                </div>

                {/* Steps Container - Fixed height to ensure equal card heights */}
                <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                        {step.steps.map((stepText, index) => {
                            const isLastStep = index === step.steps.length - 1;
                            const isCard1 = step.id === 1;

                            return (
                                <div key={index}>
                                    <div className={`flex items-start gap-2 p-2 rounded-lg border transition-colors duration-200 min-h-[80px] ${
                                        isLastCard
                                            ? isLastStep
                                                ? 'bg-white border-gray-300 text-gray-700 ' // Contrasting background for last step in black card
                                                : 'bg-black border-gray-700'
                                            : isLastStep && !isCard1
                                                ? 'bg-black border-gray-800 text-gray-300' // Contrasting background for last step in white card (except card 1)
                                                : 'bg-white border-white shadow-sm'
                                    }`}>
                                        <div>
                                        </div>
                                        <p className={`text-[13px] lg:text-[15px] mt-0.5 flex-1 ${
                                            isLastCard
                                                ? isLastStep
                                                    ? 'text-gray-900'
                                                    : 'text-gray-300'
                                                : isLastStep && !isCard1
                                                    ? 'text-white'
                                                    : 'text-gray-700'
                                        }`}>
                                            {stepText}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Add image for step 1 to match height */}
                        {step.hasImage && step.steps.length < maxSteps && (
                            <>
                                <div className="rounded-xl border border-gray-100 min-h-[80px] flex items-center justify-center">
                                    <img src="/assets/images/tiktokads/hero.webp"
                                         alt=""
                                         className="rounded-lg max-h-[80px] w-full object-cover"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="bg-white pt-[60px] lg:pt-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-8">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold leading-[1.45] text-black mb-1 uppercase">
                            {t('servicePages.websiteLanding.process.title')}<br/>Website/ Landing page
                        </h2>
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-right max-w-md">
                        <p className="text-[15px] lg:text-[18px] text-black">
                            {t('servicePages.websiteLanding.process.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Process Grid */}
                <div className="p-2 bg-gray-50 rounded-2xl">
                    {/* Mobile Layout - Single Column in Order */}
                    <div className="lg:hidden space-y-4">
                        {processSteps.map((step) => (
                            <Card key={step.id} step={step} />
                        ))}
                    </div>

                    {/* Desktop Layout - 3 Columns */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-6">
                        {/* Column 1 */}
                        <div className="space-y-6 flex flex-col">
                            <Card step={processSteps[0]} />
                            <Card step={processSteps[2]} />
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-6 flex flex-col">
                            <Card step={processSteps[1]} />
                            <Card step={processSteps[3]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoogleAdsProcess;