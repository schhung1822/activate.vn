import React from 'react';
import { useI18n } from '../../i18n';

const Hero = () => {
    const { t } = useI18n();
    return (
        <section className="bg-white flex items-center pt-[60px] sm:pt-[90px]">
            <div className="w-full md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
                    {/* Cột 1: Circular Text với Logo (20%) */}
                    <div className="w-full md:w-1/5 flex justify-center md:justify-start">
                        <div className="relative">
                            {/* Circular Text Background */}
                            <div className="w-[145px] h-[145px] bg-black rounded-full flex items-center justify-center relative overflow-hidden">
                                {/* Circular Text */}
                                <svg
                                    className="absolute inset-0 w-full h-full animate-spin"
                                    viewBox="0 0 145 145"
                                    style={{ animationDuration: '20s' }}
                                >
                                    <path
                                        id="circle-path"
                                        d="M 72.5, 72.5 m -60.5, 0 a 60.5,60.5 0 1,1 121,0 a 60.5,60.5 0 1,1 -121,0"
                                        fill="none"
                                        stroke="none"
                                    />
                                    <text className="text-white text-[8px] font-medium tracking-wider uppercase" fill="white">
                                        <textPath href="#circle-path" startOffset="0%">
                                            Website • Landing page • User interface • User experience • Website • Landing page • User interface • User experience
                                        </textPath>
                                    </text>
                                </svg>

                                {/* Logo Center */}
                                <div className="w-[6.6rem] h-[6.6rem] bg-white rounded-full flex items-center justify-center shadow-lg">
                                    {/* Logo/Favicon Image - Placeholder */}
                                    <img
                                        src="/assets/images/brand/activate-mark.svg"
                                        alt="Activate Logo"
                                        className="h-12 w-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cột 2: Main Content (80%) */}
                    <div className="w-full md:w-4/5 text-left">
                        <div className=" md:space-y-2">
                            {/* Dòng chữ "Xây dựng" với SVG */}
                            <div className="flex flex-row items-center md:items-end gap-4 lg:gap-6">
                                <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-archivo font-bold leading-none uppercase text-black">
                                    {t('servicePages.websiteLanding.hero.title')}
                                </h1>
                                {/* SVG Circles */}
                                <div className="flex-shrink-0">
                                    <svg
                                        width="94"
                                        height="51"
                                        viewBox="0 0 94 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12"
                                    >
                                        <circle
                                            cx="25.4404"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#fdeef6"
                                            className="animate-pulse"
                                            style={{ animationDelay: '0s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="40.1005"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#fbd5e8"
                                            className="animate-pulse"
                                            style={{ animationDelay: '0.5s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="53.8994"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#f7b3d6"
                                            className="animate-pulse"
                                            style={{ animationDelay: '1s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="68.5596"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#f06aae"
                                            className="animate-pulse"
                                            style={{ animationDelay: '1.5s', animationDuration: '2s' }}
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Dòng chữ "Website & Landing page" */}
                            <h2 className="text-[32px] md:text-[40px] lg:text-[60px] font-archivo font-bold leading-none uppercase text-black">
                                Website & Landing Page
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;