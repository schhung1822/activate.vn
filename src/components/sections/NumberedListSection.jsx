// Danh sách cam kết đánh số; mục có `subCommitments` được nhấn nền đen + biểu tượng cảnh báo.
// Chuyển thể từ components/facebookads/CommitmentSection.jsx.
import React, {useRef} from 'react';
import {ShieldCheck} from 'lucide-react';
import {SectionBadge} from './ui.jsx';
import {useReveal} from './helpers.js';

const NumberedListSection = ({badge, title, items = [], className = 'py-[60px] lg:py-[90px]'}) => {
    const sectionRef = useRef(null);
    useReveal(sectionRef);

    return (
        <section ref={sectionRef} className={`bg-white ${className}`}>
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6 lg:mb-10">
                    <div data-reveal className="mb-2"><SectionBadge>{badge}</SectionBadge></div>
                    <h2 data-reveal className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black uppercase leading-[1.35]">{title}</h2>
                </div>

                <div className="p-2 bg-gray-50 rounded-2xl space-y-4">
                    {items.map((item, index) => {
                        const highlighted = Boolean(item.subCommitments);
                        return (
                            <div
                                data-reveal
                                key={item.description}
                                className={`rounded-lg p-2 sm:p-3 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-black ${highlighted ? 'bg-black' : 'bg-white'}`}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center ${highlighted ? 'bg-[#f06aae]' : 'bg-black'}`}>
                                        {highlighted ? (
                                            <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                                        ) : (
                                            <span className="text-[14px] sm:text-[16px] font-semibold text-white">{index + 1}</span>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className={`text-[13px] lg:text-[15px] ${highlighted ? 'text-white' : 'text-black'}`}>{item.description}</p>
                                        {highlighted && (
                                            <div className="space-y-2 mt-3 pl-4 ml-1 border-l-2 border-white">
                                                {item.subCommitments.map((sub, subIndex) => (
                                                    <div key={sub} className="flex items-start space-x-2">
                                                        <span className="flex-shrink-0 w-6 h-6 bg-[#f06aae] rounded-full flex items-center justify-center text-xs font-semibold text-white">
                                                            {subIndex + 1}
                                                        </span>
                                                        <p className="text-gray-100 text-[12px] sm:text-[14px] italic mt-0.5">{sub}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
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

export default NumberedListSection;
