import React from 'react';
import { useI18n } from '../../i18n';

const ServicesDivider = () => {
    const { tm } = useI18n();
    // Dữ liệu mẫu cho các services
    // Bố cục giữ trong code, phần chữ lấy từ từ điển
    const services = tm('servicePages.facebookAds.divider').map((description, index) => ({
        id: index + 1,
        description,
        ellipseRotation: ['rotate-3', '-rotate-2', 'rotate-1', 'rotate-2'][index],
        hoverRotation: ['group-hover:rotate-6', 'group-hover:-rotate-4', 'group-hover:rotate-3', 'group-hover:rotate-4'][index],
        badgeRotation: ['group-hover:rotate-12', 'group-hover:-rotate-12', 'group-hover:rotate-6', 'group-hover:rotate-12'][index]
    }));

    return (
        <section className="bg-black py-[60px] md:py-[90px]">
            <div className=" md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Services Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group cursor-pointer"
                        >
                            <div className="overflow-hidden">
                                {/* Image Container - Square */}
                                <div className="relative aspect-square overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                {/* Content */}
                                <div className="p-1 sm:p-2 text-center">
                                    <h3 className="text-[12px] lg:text-[16px] text-white group-hover:text-[#ee3e99] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesDivider;