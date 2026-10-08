    import React from 'react';
    import { useI18n } from '../../i18n';
    import {
        ChevronDown,
        Dot,
        FileSignature,
        Settings,
        TestTube,
        GraduationCap,
        Wrench
    } from 'lucide-react';

    const WorkflowSection = () => {
        const { t } = useI18n();
        return (
            <section className="pt-[60px] lg:pt-[90px] bg-white">
                <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Tiêu đề chính */}
                    <div className="text-center mb-4 lg:mb-8">
                        <div className="inline-flex items-center justify-center mb-2">
                        <span className=" text-black rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            Automation-ai-data
                        </span>
                        </div>
                        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black uppercase leading-[1.45] mb-1">
                            {t('servicePages.aiData.workflow.title')}
                        </h2>
                    </div>

                    {/* GIAI ĐOẠN 1 */}
                    <div className="mb-4 lg:mb-4 p-2 bg-gray-50 rounded-2xl">
                        <div className=" p-2 bg-white rounded-xl">
                        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 p-2 bg-gray-50 neu-shadow-inset-xs rounded-xl">
                            {/* Cột trái - Nội dung */}
                            <div className="flex flex-col justify-center">
                                {/* Card 1 */}
                                <div className="p-4 rounded-lg bg-white border-2 border-white transition-all duration-300 shadow-sm">
                                    <div className="flex items-start">
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-black">
                                                {t('servicePages.aiData.workflow.steps[0].title')}
                                            </h3>
                                            <p className="text-gray-700 text-[12px] lg:text-[13px]">
                                                {t('servicePages.aiData.workflow.steps[0].description')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-black -mt-4" />
                                </div>

                                {/* Card 2 */}
                                <div className="p-4 rounded-lg bg-white border-2 border-white transition-all duration-300 shadow-sm">
                                    <div className="flex items-start ">
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-black">
                                                {t('servicePages.aiData.workflow.steps[1].title')}
                                            </h3>
                                            <p className="text-gray-700 text-[12px] lg:text-[13px]">
                                                {t('servicePages.aiData.workflow.steps[1].description')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-black -mt-4" />
                                </div>

                                {/* Card 3 */}
                                <div className="p-4 rounded-lg bg-white border-2 border-white transition-all duration-300 shadow-sm">
                                    <div className="flex items-start ">
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-black">
                                                {t('servicePages.aiData.workflow.steps[2].title')}
                                            </h3>
                                            <p className="text-gray-700 text-[12px] lg:text-[13px]">
                                                {t('servicePages.aiData.workflow.steps[2].description')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cột phải - Ảnh */}
                            <div className="flex items-center justify-center">
                                <img
                                    src="/assets/images/aaa.png"
                                    alt="Consultation Process"
                                    className="object-contain w-full max-w-[240px] md:max-w-[300px] aspect-square"
                                />
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* GIAI ĐOẠN 2 */}
                    <div className="mb-4 lg:mb-4 p-2 bg-gray-50 rounded-2xl">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-2 neu-dark-shadow-inset-xs bg-black rounded-xl shadow-lg">
                            {/* Cột trái - Ảnh */}
                            <div className="relative order-2 lg:order-1 flex items-center justify-center">
                                <img
                                    src="/assets/images/aaa.png"
                                    alt="Solution Levels"
                                    className="object-contain w-full max-w-[240px] md:max-w-[300px] aspect-square"
                                />
                            </div>

                            {/* Cột phải - Nội dung */}
                            <div className="order-1 lg:order-2 flex flex-col justify-center">
                                {/* Card 1 */}
                                <div className="p-4 rounded-lg shadow-sm shadow-gray-700 bg-black border-2 border-black transition-all duration-300">
                                    <div className="flex items-start">
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-white">
                                                {t('servicePages.aiData.workflow.steps[3].title')}
                                            </h3>
                                            <p className="text-gray-300 text-[12px] lg:text-[13px]">
                                                {t('servicePages.aiData.workflow.steps[3].description')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-white -mt-4" />
                                </div>

                                {/* Card 2 */}
                                <div className="p-4 rounded-lg shadow-sm shadow-gray-700 bg-black border-2 border-black transition-all duration-300">
                                    <div className="flex items-start">
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-white">
                                                {t('servicePages.aiData.workflow.steps[4].title')}
                                            </h3>
                                            <p className="text-gray-300 text-[12px] lg:text-[13px]">
                                                {t('servicePages.aiData.workflow.steps[4].description')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-white -mt-4" />
                                </div>

                                {/* Card 3 */}
                                <div className="p-4 rounded-lg shadow-sm shadow-gray-700 bg-black border-2 border-black transition-all duration-300">
                                    <div className="flex items-start ">
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-white">
                                                {t('servicePages.aiData.workflow.steps[5].title')}
                                            </h3>
                                            <p className="text-gray-300 text-[12px] lg:text-[13px]">
                                                {t('servicePages.aiData.workflow.steps[5].description')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-white -mt-4" />
                                </div>

                                {/* Card 4 - Highlight */}
                                <div className="p-4 rounded-lg bg-white border-2 border-white transition-all duration-300">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 md:p-3 rounded-lg bg-black">
                                            <FileSignature className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-black">
                                                {t('servicePages.aiData.workflow.steps[6].title')}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GIAI ĐOẠN 3 */}
                    <div className=" p-2 bg-gray-50 rounded-2xl">
                        <div className=" p-2 bg-gradient-to-br from-[#ee3e99] via-black to-[#ee3e99] rounded-xl">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-2 bg-gray-50 neu-shadow-inset-xs rounded-xl">
                            {/* Cột trái - Nội dung */}
                            <div className="flex flex-col justify-center">

                                {/* Card 1 */}
                                <div className="p-4 rounded-lg bg-white shadow-sm border-2 border-white transition-all duration-300">
                                    <div className="flex items-start gap-2">
                                        <div className="p-3 rounded-lg bg-black">
                                            <Settings className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-black">
                                                {t('servicePages.aiData.workflow.steps[6].description')}
                                            </h3>
                                            <p className="text-gray-700 text-[12px] lg:text-[13px]">
                                                {t('servicePages.aiData.workflow.setupDescription')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-black -mt-4" />
                                </div>

                                {/* Card 2 */}
                                <div className="p-4 rounded-lg bg-white shadow-sm border-2 border-white transition-all duration-300">
                                    <div className="flex items-start gap-2">
                                        <div className="p-3 rounded-lg bg-black">
                                            <TestTube className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-black">
                                                {t('servicePages.aiData.workflow.steps[7].title')}
                                            </h3>
                                            <p className="text-gray-700 text-[12px] lg:text-[13px]">
                                                {t('servicePages.aiData.workflow.steps[7].description')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-black -mt-4" />
                                </div>

                                {/* Card 3 */}
                                <div className="p-4 rounded-lg bg-white shadow-sm border-2 border-white transition-all duration-300">
                                    <div className="flex items-start gap-2">
                                        <div className="p-3 rounded-lg bg-black">
                                            <GraduationCap className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium text-black">
                                                {t('servicePages.aiData.workflow.steps[8].title')}
                                            </h3>
                                            <p className="text-gray-700 text-[12px] lg:text-[13px]">
                                                {t('servicePages.aiData.workflow.steps[8].description')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="flex flex-col items-center">
                                    <Dot className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-black -mt-4" />
                                </div>

                                {/* Card 4 */}
                                <div className="p-4 rounded-lg bg-black shadow-sm border-2 border-white transition-all duration-300">
                                    <div className="flex items-start gap-2">
                                        <div className="p-3 rounded-lg bg-white">
                                            <Wrench className="w-5 h-5 text-black" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[13px] lg:text-[15px] font-medium  text-white">
                                                {t('servicePages.aiData.workflow.steps[9].title')}
                                            </h3>
                                            <p className="text-gray-300 text-[12px] lg:text-[13px]">
                                                {t('servicePages.aiData.workflow.steps[9].description')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cột phải - Ảnh */}
                            <div className="flex items-center justify-center">
                                <img
                                    src="/assets/images/aaa.png"
                                    alt="Consultation Process"
                                    className="object-contain w-full max-w-[240px] md:max-w-[300px] aspect-square"
                                />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    export default WorkflowSection;