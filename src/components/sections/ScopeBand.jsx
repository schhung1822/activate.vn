// Dải nền đen 4 ô vuông - chuyển thể từ components/facebookads/ServicesDivider.jsx.
// Bản gốc dùng ảnh minh hoạ; ở đây dùng icon trên nền chuyển màu thương hiệu.
import React from 'react';

const TILE_BACKGROUNDS = [
    'from-[#2D0F3B] via-black to-[#6a4fdb]/60',
    'from-black via-[#2D0F3B] to-[#ee3e99]/50',
    'from-[#6a4fdb]/50 via-black to-[#2D0F3B]',
    'from-[#ee3e99]/40 via-black to-black'
];

const ScopeBand = ({badge, items = []}) => (
    <section className="bg-black py-[50px] md:py-[80px]">
        <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            {badge && (
                <p className="text-center mb-6 text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase text-white/70">{badge}</p>
            )}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {items.map(({label, icon}, index) => {
                    const Icon = icon;
                    return (
                        <div key={label} className="group">
                            <div className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${TILE_BACKGROUNDS[index % TILE_BACKGROUNDS.length]} border border-white/10 flex items-center justify-center`}>
                                <Icon className="w-12 h-12 lg:w-16 lg:h-16 text-white/90 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.3} />
                                <span className="absolute top-3 left-4 font-archivo text-[13px] text-white/40">0{index + 1}</span>
                            </div>
                            <h3 className="p-2 text-center text-[13px] lg:text-[16px] text-white group-hover:text-[#ee3e99] transition-colors duration-300">{label}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default ScopeBand;
