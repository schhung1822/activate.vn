import React from 'react';
import { useI18n } from '../../i18n';
import {Bot, Gem, Megaphone, MonitorSmartphone, Target} from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import {buildGrowthServices} from './bookingData.js';

const ICONS = {
    'target': Target,
    'monitor-smartphone': MonitorSmartphone,
    'bot': Bot,
    'gem': Gem,
    'megaphone': Megaphone
};

const GrowthServicesSection = () => {
    const { t, tm } = useI18n();
    const GROWTH_SERVICES = buildGrowthServices(tm);

    return (
    <section className="border-t border-[#eef2f8] bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-[110px]">
        <div className="mx-auto max-w-[1180px]">
            <SectionHeading
                eyebrow={t('booking.growth.badge')}
                title={t('booking.growth.title')}
                className="max-w-[820px]"
            />

            <p className="mt-5 max-w-[820px] text-[15px] leading-[1.75] text-[#3a4256] lg:text-[16.5px]">
                {t('booking.growth.descriptionPrefix')}
                <strong className="font-semibold text-[#0b0e18]">{t('booking.growth.highlight')}</strong>{t('booking.growth.description')}
            </p>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {GROWTH_SERVICES.map((service) => {
                    const Icon = ICONS[service.icon];
                    return (
                        <div
                            key={service.title}
                            className="rounded-[20px] border border-[#e6ebf3] bg-[#f9fafd] px-7 py-[30px] transition-all duration-200 hover:-translate-y-[3px] hover:border-[#cdd6e3] hover:shadow-[0_14px_36px_rgba(10,19,38,0.09)]"
                        >
                            <div className="flex items-center justify-between">
                                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-gradient-to-br from-[#2e7bdf] to-[#41c8e6] text-white">
                                    {Icon && <Icon className="h-5 w-5" />}
                                </span>
                                <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#7a6cea]">
                                    {service.tag}
                                </span>
                            </div>
                            <h3 className="mt-5 font-archivo text-[19px] font-extrabold tracking-[-0.01em] text-[#0b0e18]">
                                {service.title}
                            </h3>
                            <p className="mt-2.5 text-[14px] leading-[1.7] text-[#515d75]">{service.body}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
    );
};

export default GrowthServicesSection;
