// Giới thiệu 2 cột: chữ bên trái, ảnh + thẻ nổi bên phải.
// Chuyển thể từ components/home/AboutUsSection.jsx.
import React, {useRef} from 'react';
import {SectionBadge} from './ui.jsx';
import {useReveal} from './helpers.js';

const SplitIntroSection = ({id, badge, titleLine1, titleLine2, description, image, imageAlt = '', highlights = [], actions}) => {
    const sectionRef = useRef(null);
    useReveal(sectionRef);

    return (
        <section id={id} ref={sectionRef} className="relative bg-white py-[60px] lg:py-[90px] scroll-mt-24">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <div data-reveal><SectionBadge>{badge}</SectionBadge></div>
                        <h2 data-reveal className="text-[26px] md:text-[32px] lg:text-[54px] font-archivo font-bold text-black uppercase leading-[1.25]">
                            {titleLine1}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black to-[#ee3e99]">{titleLine2}</span>
                        </h2>
                        <p data-reveal className="text-[15px] lg:text-[18px] text-black">{description}</p>
                        {actions && <div data-reveal className="flex flex-wrap gap-3 lg:pt-4">{actions}</div>}
                    </div>

                    <div data-reveal className="relative">
                        <div className="aspect-[4/3] w-full rounded-md overflow-hidden">
                            <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
                        </div>
                        {highlights.length > 0 && (
                            <div className="grid sm:grid-cols-2 gap-3 mt-3 lg:mt-0 lg:absolute lg:left-6 lg:right-6 lg:bottom-6">
                                {highlights.map((item) => (
                                    <div key={item.label} className="bg-white/90 backdrop-blur-md border-2 border-black rounded-lg p-4 shadow-md">
                                        <p className="text-[11px] lg:text-[13px] font-medium text-[#ee3e99] uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-[13px] lg:text-[15px] text-gray-800">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SplitIntroSection;
