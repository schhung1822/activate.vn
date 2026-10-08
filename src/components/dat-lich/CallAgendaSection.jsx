import React from 'react';
import { useI18n } from '../../i18n';
import SectionHeading from './SectionHeading.jsx';
import {buildCallAgenda} from './bookingData.js';

const CallAgendaSection = () => {
    const { t, tm } = useI18n();
    const CALL_AGENDA = buildCallAgenda(tm);

    return (
    <section className="bg-[#f6f8fc] px-5 py-16 sm:px-8 lg:px-14 lg:py-[110px]">
        <div className="mx-auto max-w-[900px]">
            <SectionHeading
                eyebrow={t('booking.callAgenda.badge')}
                title={t('booking.callAgenda.title')}
            />

            <p className="mt-6 text-[15px] leading-[1.75] text-[#3a4256] lg:text-[16.5px]">
                {t('booking.callAgenda.description')}
            </p>

            <div className="mt-7 flex flex-col">
                {CALL_AGENDA.map((item) => (
                    <div key={item.n} className="grid grid-cols-[42px_1fr] gap-4 border-t border-[#e2e8f1] py-6 sm:grid-cols-[52px_1fr] sm:gap-[18px]">
                        <span className="bg-gradient-to-br from-[#2e7bdf] to-[#7a6cea] bg-clip-text font-archivo text-[26px] font-bold text-transparent">
                            {item.n}
                        </span>
                        <div>
                            <div className="font-archivo text-[17px] font-extrabold tracking-[-0.01em] text-[#0b0e18]">
                                {item.title}
                            </div>
                            <p className="mt-2 text-[14.5px] leading-[1.7] text-[#515d75]">{item.body}</p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="border-t border-[#e2e8f1] pt-6 text-[15px] leading-[1.75] text-[#3a4256] lg:text-[16.5px]">
                {t('booking.callAgenda.closing')}
                <strong className="font-semibold text-[#0b0e18]">{t('booking.callAgenda.refundHighlight')}</strong>{t('booking.callAgenda.refundSuffix')}
            </p>
        </div>
    </section>
    );
};

export default CallAgendaSection;
