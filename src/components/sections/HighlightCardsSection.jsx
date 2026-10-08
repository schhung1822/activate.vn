// Lưới thẻ viền đen hơi nghiêng, mỗi thẻ có nhãn "tác động" ở cuối.
// Chuyển thể từ components/facebookads/PainPointsSection.jsx.
import React, {useRef} from 'react';
import {SectionBadge} from './ui.jsx';
import {useReveal} from './helpers.js';

const ROTATIONS = ['lg:-rotate-1', 'lg:rotate-1', 'lg:rotate-1', 'lg:-rotate-1'];

const HighlightCardsSection = ({badge, title, items = [], numbered = false, className = 'py-[60px] lg:py-[90px]'}) => {
    const sectionRef = useRef(null);
    useReveal(sectionRef);
    // Thẻ cuối nền đen để tạo điểm nhấn như bản gốc
    const darkIndex = items.length - 1;
    const columns = items.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

    return (
        <section ref={sectionRef} className={`relative bg-white ${className}`}>
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6 lg:mb-10">
                    <div data-reveal className="mb-2"><SectionBadge>{badge}</SectionBadge></div>
                    <h2 data-reveal className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold leading-[1.35] uppercase text-black">
                        {title}
                    </h2>
                </div>

                <div className={`grid grid-cols-1 ${columns} gap-4 lg:gap-6`}>
                    {items.map((item, index) => {
                        const isDark = index === darkIndex;
                        return (
                            <div
                                data-reveal
                                key={item.title}
                                className={`${isDark ? 'bg-black' : 'bg-white'} ${ROTATIONS[index % ROTATIONS.length]} border-2 border-black rounded-xl p-5 lg:p-6 shadow-md transform-gpu lg:hover:shadow-lg lg:hover:scale-105 lg:hover:rotate-0 transition-all duration-300 ease-out`}
                            >
                                <div className="flex flex-col justify-between h-full gap-4">
                                    <div>
                                        {numbered && (
                                            <span className={`block font-archivo text-[28px] lg:text-[36px] font-bold leading-none mb-3 ${isDark ? 'text-[#ee3e99]' : 'text-black/15'}`}>
                                                0{index + 1}
                                            </span>
                                        )}
                                        <h3 className={`text-[16px] lg:text-[20px] font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{item.title}</h3>
                                        <p className={`text-[13px] lg:text-[15px] ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
                                    </div>
                                    {item.impact && (
                                        <span
                                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[13px] lg:text-[15px] font-medium self-start ${
                                                isDark ? 'bg-[#ee3e99]/20 text-[#ee3e99]' : 'bg-[#6a4fdb]/10 text-[#6a4fdb]'
                                            }`}
                                        >
                                            <span className="w-2 h-2 bg-current rounded-full" />
                                            {item.impact}
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HighlightCardsSection;
