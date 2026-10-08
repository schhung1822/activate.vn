// Lưới "bento" 2 cột: cột trái nền đen (giới thiệu + nhãn + ảnh), cột phải 4 ô nội dung.
// Chuyển thể từ components/facebookads/WhyChooseUs.jsx.
import React, {useRef} from 'react';
import {SectionBadge} from './ui.jsx';
import {useReveal} from './helpers.js';

const BADGE_STYLES = [
    'bg-gradient-to-r from-[#6a4fdb] via-black to-black -rotate-3',
    'bg-gradient-to-r from-black via-black to-[#ee3e99] rotate-2',
    'bg-gradient-to-r from-[#6a4fdb] via-black to-[#ee3e99] -rotate-1'
];

/**
 * cards: [ô lớn trên-trái, ô trên-phải, ô viền dưới-trái]; mỗi ô {title, description, icon?}
 * stat: ô đen dưới-phải {label, value, caption}
 */
const BentoSection = ({id, badge, titleLine1, titleHighlight, subtitle, intro, badges = [], image, imageAlt = '', cards = [], stat, footer, className = 'py-[60px] lg:py-[90px]'}) => {
    const sectionRef = useRef(null);
    useReveal(sectionRef);
    const [primary, secondary, tertiary] = cards;
    const PrimaryIcon = primary?.icon;

    return (
        <section id={id} ref={sectionRef} className={`bg-white scroll-mt-24 ${className}`}>
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6 lg:mb-10">
                    {badge && <div data-reveal className="mb-2"><SectionBadge>{badge}</SectionBadge></div>}
                    <h2 data-reveal className="text-[20px] md:text-[28px] font-archivo font-bold leading-tight uppercase">
                        {titleLine1}
                        <br />
                        <span className="bg-gradient-to-r from-black to-[#ee3e99] bg-clip-text text-transparent font-archivo text-[36px] md:text-[50px] lg:text-[60px] uppercase">
                            {titleHighlight}
                        </span>
                    </h2>
                    {subtitle && <p data-reveal className="text-black text-[15px] lg:text-[18px] max-w-xl mx-auto mt-2">{subtitle}</p>}
                </div>

                <div data-reveal className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-2 bg-gray-50 rounded-2xl">
                    {/* Cột trái */}
                    <div className="lg:col-span-2 bg-black rounded-xl p-6 text-white flex flex-col gap-6 lg:min-h-[500px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <p className="text-white text-[13px] lg:text-[15px]">{intro}</p>
                            <div className="flex flex-wrap gap-3 items-center justify-center">
                                {badges.map((label, index) => (
                                    <span
                                        key={label}
                                        className={`${BADGE_STYLES[index % BADGE_STYLES.length]} text-white px-3 py-2 rounded-full text-[11px] lg:text-[13px] font-medium transform hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out`}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 min-h-[220px] overflow-hidden rounded-2xl relative">
                            <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
                            <img src="/assets/images/brand/activate-mark.svg" alt="" className="absolute bottom-4 right-4 w-14 h-14 opacity-90" />
                        </div>
                    </div>

                    {/* Cột phải */}
                    <div className="lg:col-span-3 grid grid-rows-[auto_auto] gap-3 bg-gradient-to-tl from-[#6a4fdb] via-black to-black p-2 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                            {primary && (
                                <div className="md:col-span-3 rounded-lg p-5 bg-white relative overflow-hidden min-h-[200px]">
                                    <h3 className="text-[11px] sm:text-[13px] font-medium text-black mb-2 uppercase tracking-widest">{primary.title}</h3>
                                    <p className="text-[13px] lg:text-[15px] text-gray-700 pr-12 lg:pr-20">{primary.description}</p>
                                    {PrimaryIcon && (
                                        <PrimaryIcon className="absolute bottom-3 right-3 lg:bottom-5 lg:right-5 w-10 h-10 lg:w-16 lg:h-16 text-black/80" strokeWidth={1.4} />
                                    )}
                                </div>
                            )}
                            {secondary && (
                                <div className="md:col-span-2 bg-white rounded-lg p-5">
                                    <h3 className="text-[11px] sm:text-[13px] font-medium text-black mb-2 uppercase tracking-widest">{secondary.title}</h3>
                                    <p className="text-[13px] lg:text-[15px] text-gray-700">{secondary.description}</p>
                                </div>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                            {tertiary && (
                                <div className="md:col-span-2 border-2 bg-white border-black rounded-lg p-5">
                                    <h3 className="text-[11px] sm:text-[13px] font-medium text-black mb-2 uppercase tracking-widest">{tertiary.title}</h3>
                                    <p className="text-[13px] lg:text-[15px] text-gray-700">{tertiary.description}</p>
                                </div>
                            )}
                            {stat && (
                                <div className="md:col-span-3 bg-black rounded-lg p-5 flex flex-col justify-center items-center text-center text-white">
                                    <p className="text-gray-100 text-[13px] lg:text-[15px]">{stat.label}</p>
                                    <p className="text-[36px] lg:text-[50px] font-bold font-archivo tracking-wide bg-gradient-to-r from-white to-[#f7a8cf] bg-clip-text text-transparent">
                                        {stat.value}
                                    </p>
                                    <p className="text-gray-300 text-[13px] lg:text-[15px]">{stat.caption}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {footer && <div data-reveal className="text-center mt-8">{footer}</div>}
            </div>
        </section>
    );
};

export default BentoSection;
