// Quy trình 4 bước dạng thẻ, mỗi bước có các mục con; thẻ cuối nền tối.
// Chuyển thể từ components/facebookads/GoogleAdsProcess.jsx.
import React, {useRef} from 'react';
import {SectionBadge} from './ui.jsx';
import {useReveal} from './helpers.js';

const StepCard = ({step, index, isLast}) => (
    <div
        className={`border-2 rounded-lg p-5 shadow-md flex flex-col h-full ${
            isLast ? 'bg-gradient-to-br from-black via-black to-[#6a4fdb] border-black' : 'bg-white/60 border-white'
        }`}
    >
        <div className="flex items-center gap-3 mb-4">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold ${isLast ? 'bg-white text-black' : 'bg-black text-white'}`}>
                {index + 1}
            </span>
            <h3 className={`text-[15px] lg:text-[18px] font-medium leading-tight ${isLast ? 'text-white' : 'text-black'}`}>{step.title}</h3>
        </div>
        <div className="space-y-3">
            {step.items.map((text, itemIndex) => {
                const isLastItem = itemIndex === step.items.length - 1;
                const tone = isLast
                    ? isLastItem
                        ? 'bg-white border-gray-300 text-gray-900'
                        : 'bg-black border-gray-700 text-gray-300'
                    : isLastItem && index > 0
                        ? 'bg-black border-gray-800 text-white'
                        : 'bg-white border-white shadow-sm text-gray-700';
                return (
                    <p key={text} className={`p-3 rounded-lg border text-[13px] lg:text-[15px] min-h-[56px] flex items-center ${tone}`}>
                        {text}
                    </p>
                );
            })}
        </div>
    </div>
);

const ProcessSection = ({id, badge, title, subtitle, steps = [], className = 'py-[60px] lg:py-[90px]'}) => {
    const sectionRef = useRef(null);
    useReveal(sectionRef);

    return (
        <section id={id} ref={sectionRef} className={`bg-white scroll-mt-24 ${className}`}>
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-6 sm:mb-8">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        {badge && <div data-reveal className="mb-2"><SectionBadge>{badge}</SectionBadge></div>}
                        <h2 data-reveal className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold leading-[1.35] uppercase text-black">
                            {title}
                        </h2>
                    </div>
                    <p data-reveal className="lg:w-1/2 text-center lg:text-right max-w-md lg:ml-auto text-[15px] lg:text-[18px] text-black">{subtitle}</p>
                </div>

                <div data-reveal className="p-2 bg-gray-50 rounded-2xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
                    {steps.map((step, index) => (
                        <StepCard key={step.title} step={step} index={index} isLast={index === steps.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
