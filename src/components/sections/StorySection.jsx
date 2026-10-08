// Section kể chuyện nền tối: ảnh lớn + ảnh nhỏ chồng góc, nội dung có chấm tròn.
// Chuyển thể từ components/aboutus/MyStorySection.jsx.
import React, {useRef} from 'react';
import {SectionBadge} from './ui.jsx';
import {useReveal} from './helpers.js';

const StorySection = ({badge, titleLine1, titleLine2, subtitle, paragraphs = [], image, insetImage, imageAlt = '', insetContent}) => {
    const sectionRef = useRef(null);
    useReveal(sectionRef);

    return (
        <section ref={sectionRef} className="bg-gradient-to-t from-black via-black to-[#2D0F3B] py-[60px] lg:py-[90px]">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div data-reveal className="relative order-last lg:order-first">
                        <div className="relative aspect-[7/8] lg:aspect-[6/7] overflow-hidden rounded-md">
                            <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
                            {(insetImage || insetContent) && (
                                <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-black rounded-sm overflow-hidden">
                                    {insetImage ? (
                                        <img src={'/assets/images/trust.webp'} alt="" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center p-6 bg-white">{insetContent}</div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4 text-white">
                        <div data-reveal><SectionBadge tone="light">{badge}</SectionBadge></div>
                        <h2 data-reveal className="text-[26px] md:text-[32px] lg:text-[60px] font-archivo font-bold leading-tight uppercase">
                            {titleLine1}
                            <span className="block">{titleLine2}</span>
                        </h2>
                        <p data-reveal className="text-[15px] md:text-[18px] text-[#ee3e99]">{subtitle}</p>
                        {paragraphs.map((paragraph) => (
                            <div data-reveal key={paragraph} className="flex gap-4">
                                <span className="w-2 h-2 bg-[#ee3e99] rounded-full mt-2 flex-shrink-0" />
                                <p className="text-white text-[14px] md:text-[16px] max-w-lg">{paragraph}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
