// Ba cột mô hình hợp tác trên nền tối, cột giữa nổi bật màu thương hiệu.
// Chuyển thể từ components/facebookads/OffersSection.jsx (bỏ toàn bộ giá / chiết khấu -
// website B2B không công bố giá).
import React, {useRef} from 'react';
import {Check, FileSignature, Handshake, Layers} from 'lucide-react';
import {SectionBadge} from './ui.jsx';
import {useReveal} from './helpers.js';

const ICONS = [Layers, FileSignature, Handshake];

const ModelsSection = ({badge, title, items = [], footer}) => {
    const sectionRef = useRef(null);
    useReveal(sectionRef);

    return (
        <section ref={sectionRef} className="bg-gradient-to-b from-black via-black to-[#2D0F3B] py-[60px] lg:py-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6 lg:mb-10">
                    <div data-reveal className="mb-2"><SectionBadge tone="brand">{badge}</SectionBadge></div>
                    <h2 data-reveal className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-white uppercase leading-[1.35]">{title}</h2>
                </div>

                <div data-reveal className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-2 bg-black rounded-2xl">
                    {items.map((item, index) => {
                        const Icon = ICONS[index % ICONS.length];
                        const featured = index === 1;
                        return (
                            <div
                                key={item.title}
                                className={`rounded-lg p-8 border-2 transition-all duration-500 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 ${
                                    featured
                                        ? 'bg-[#ee3e99] border-white/70'
                                        : 'bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:from-white/10 hover:to-white/15'
                                }`}
                            >
                                <div className="text-center mb-6">
                                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${featured ? 'bg-black' : 'bg-[#ee3e99]'}`}>
                                        <Icon className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <h3 className={`text-[18px] lg:text-[22px] font-medium ${featured ? 'text-black' : 'text-white group-hover:text-[#ee3e99]'} transition-colors duration-300`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-sm ${featured ? 'text-black/70' : 'text-gray-300'}`}>{item.subtitle}</p>
                                </div>
                                <div className={featured ? 'p-2 bg-white/35 backdrop-blur-2xl rounded-xl space-y-2' : 'space-y-2'}>
                                    {item.points.map((point) => (
                                        <div
                                            key={point}
                                            className={`flex items-start gap-2 rounded-xl p-3 lg:p-4 border ${
                                                featured ? 'bg-[#1f1f1f] border-[#363636]' : 'bg-white/5 border-white/10 hover:bg-white/10'
                                            }`}
                                        >
                                            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${featured ? 'text-[#f7a8cf]' : 'text-[#ee3e99]'}`} />
                                            <span className="text-white text-[13px] lg:text-[15px]">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {footer && <div data-reveal className="text-center mt-8">{footer}</div>}
            </div>
        </section>
    );
};

export default ModelsSection;
