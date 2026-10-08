import React from 'react';
import { useI18n } from '../../i18n';

const ClientsPartnersSection = () => {
    const { t } = useI18n();
    return (
        <section className="bg-white pt-[60px] lg:pt-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Thẻ chứa A - Tiêu đề và mô tả */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-8">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1">
                            {t('shared.clients.titleLine1')}<br/>{t('shared.clients.titleLine2')}
                        </h2>
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-right">
                        <p className="text-[15px] lg:text-[18px] text-black">
                            {t('shared.clients.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Thẻ chứa B - 4 cột với 2 logo mỗi cột */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 ">
                    {/* Cột 1 */}
                    <div className="flex flex-col space-y-4">
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center  h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner1.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner2.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                    </div>

                    {/* Cột 2 */}
                    <div className="flex flex-col space-y-4">
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner3.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner4.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                    </div>

                    {/* Cột 3 */}
                    <div className="flex flex-col space-y-4">
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner5.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner6.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                    </div>

                    {/* Cột 4 */}
                    <div className="flex flex-col space-y-4">
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner7.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner8.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                    </div>
                </div>

                {/* Thẻ chứa C - 4 cột (cột C và D merge chứa mô tả) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    {/* Cột A - 2 logo */}
                    <div className="flex flex-col space-y-4">
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner9.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner10.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                    </div>

                    {/* Cột B - 2 logo */}
                    <div className="flex flex-col space-y-4">
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner11.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner12.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                    </div>

                    {/* Cột C & D merge - Mô tả */}
                    <div className="col-span-2 flex justify-center neu-shadow-xs bg-black
                                  rounded-xl p-3 transition-all duration-500 ease-in-out cursor-pointer">
                        <div className="">
                            <p className="text-[14px] lg:text-[15px] text-white leading-relaxed mb-2">
                                {t('shared.clients.paragraph1')}
                            </p>
                            <p className="text-[14px] lg:text-[15px] text-white leading-relaxed">
                                {t('shared.clients.paragraph2')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Thẻ chứa D - 4 cột (cột A có text, cột B,C,D có logo) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
                    {/* Cột A - Text với gradient animation */}
                    <div className="flex items-center justify-center neu-shadow-xs bg-black
                                  text-white rounded-xl p-4 animate-gradient-shift
                                  hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                        <div className="text-center">
                            <div className="text-[40px] font-black">100+</div>
                            <div className="text-[14px] lg:text-[15px]">
                                {t('shared.clients.titleLine2')}
                            </div>
                        </div>
                    </div>

                    {/* Cột B - 2 logo */}
                    <div className="flex flex-col space-y-4">
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner13.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner14.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                    </div>

                    {/* Cột C - 2 logo */}
                    <div className="flex flex-col space-y-4">
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner15.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner16.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                    </div>

                    {/* Cột D - 2 logo */}
                    <div className="flex flex-col space-y-4">
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner25.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-16 md:h-20
                                      hover:shadow-lg hover:scale-105
                                      transition-all duration-300 ease-in-out cursor-pointer
                                      group border border-[#fbd5e8]">
                            <img
                                src="/assets/images/partner/partner18.png"
                                alt="Partner Logo 3"
                                className="max-w-full max-h-full object-contain
                                         group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsPartnersSection;