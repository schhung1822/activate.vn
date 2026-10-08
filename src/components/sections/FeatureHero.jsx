// Hero cho trang lĩnh vực - chuyển thể từ components/facebookads/Hero.jsx:
// tiêu đề 2 dòng (dòng 2 chuyển màu) + chuỗi vòng tròn, mô tả, gạch đầu dòng, ảnh vuông.
import React from 'react';

const PulseCircles = () => (
    <svg viewBox="0 0 94 51" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12" aria-hidden="true">
        {[
            {cx: 25.44, fill: '#fdeef6', delay: '0s'},
            {cx: 40.1, fill: '#fbd5e8', delay: '0.5s'},
            {cx: 53.9, fill: '#f7b3d6', delay: '1s'},
            {cx: 68.56, fill: '#f06aae', delay: '1.5s'}
        ].map((circle) => (
            <circle
                key={circle.cx}
                cx={circle.cx}
                cy="25.44"
                r="25.44"
                fill={circle.fill}
                className="animate-pulse"
                style={{animationDelay: circle.delay, animationDuration: '2s'}}
            />
        ))}
    </svg>
);

const FeatureHero = ({eyebrow, titleLine1, titleLine2, description, bullets = [], image, imageAlt = '', icon: Icon, actions}) => (
    <section className="bg-white py-[60px] lg:py-[90px]">
        <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-8">
                <div className="md:col-span-3 space-y-4">
                    {eyebrow && (
                        <span className="inline-block text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase text-[#ee3e99]">
                            {eyebrow}
                        </span>
                    )}
                    <div className="space-y-2">
                        <div className="flex items-center gap-4">
                            <h1 className="text-[30px] md:text-[40px] lg:text-[56px] font-archivo font-bold text-black leading-none tracking-tight">
                                {titleLine1}
                            </h1>
                            <div className="flex-shrink-0">
                                <PulseCircles />
                            </div>
                        </div>
                        <p className="text-[30px] md:text-[40px] lg:text-[56px] font-archivo font-bold bg-gradient-to-r from-black to-[#ee3e99] bg-clip-text text-transparent leading-tight tracking-tight">
                            {titleLine2}
                        </p>
                    </div>

                    <div className="hidden lg:block w-72 h-0.5 bg-black" />

                    <p className="text-[15px] lg:text-[18px] text-black max-w-xl">{description}</p>

                    {bullets.length > 0 && (
                        <ul className="space-y-3">
                            {bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#ee3e99] rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-[13px] lg:text-[16px] text-gray-700">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {actions && <div className="flex flex-wrap items-center gap-3 pt-2">{actions}</div>}
                </div>

                <div className="md:col-span-2 p-2 bg-gray-50 rounded-2xl">
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-black">
                        <img src={image} alt={imageAlt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        {Icon && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center">
                                    <Icon className="w-12 h-12 lg:w-16 lg:h-16 text-white" strokeWidth={1.4} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default FeatureHero;
