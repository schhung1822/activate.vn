import React, {useState} from 'react';
import { useI18n } from '../../i18n';
import {buildBookingSteps, CONSULTANT, DEPOSIT_FULL, DEPOSIT_SHORT, HOTLINE} from './bookingData.js';

const ConsultantProfile = () => {
    const { t, tm } = useI18n();
    const BOOKING_STEPS = buildBookingSteps(t, tm);
    const [avatarFailed, setAvatarFailed] = useState(false);

    return (
        <div>
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#9ee6f5]">
                {t('booking.profile.badge')}
            </div>

            <div className="mt-6 flex items-center gap-5">
                <div className="h-24 w-24 flex-none rounded-full bg-gradient-to-br from-[#2e7bdf] via-[#41c8e6] to-[#7a6cea] p-[3px]">
                    {CONSULTANT.avatar && !avatarFailed ? (
                        <img
                            src={CONSULTANT.avatar}
                            alt={CONSULTANT.name}
                            onError={() => setAvatarFailed(true)}
                            className="h-full w-full rounded-full object-cover"
                        />
                    ) : (
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-[#0a1326] font-archivo text-[26px] font-bold text-white">
                            {CONSULTANT.initials}
                        </span>
                    )}
                </div>
                <div>
                    <h1 className="font-archivo text-[28px] font-bold leading-[1.05] tracking-[-0.02em] text-white lg:text-[40px]">
                        {CONSULTANT.name}
                    </h1>
                    <div className="mt-2 text-[13px] font-semibold tracking-[0.04em] text-white/65">
                        {CONSULTANT.role}
                    </div>
                </div>
            </div>

            <p className="mt-6 max-w-[520px] text-[15.5px] leading-[1.7] text-white/[.78]">{t('booking.consultant.bio')}</p>

            <div className="mt-6 max-w-[520px] border-l-2 border-[#41c8e6] py-1 pl-5">
                <p className="font-archivo text-[16px] font-medium leading-[1.5] text-white lg:text-[19px]">
                    {t('booking.consultant.quote')}
                </p>
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                    — {CONSULTANT.name}, {CONSULTANT.role}
                </div>
            </div>

            <div className="mt-8 max-w-[560px] rounded-[20px] border border-white/[.12] bg-white/[.05] px-6 py-6">
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#9ee6f5]">
                    {t('booking.profile.badge2', {depositShort: DEPOSIT_SHORT})}
                </div>
                <p className="mt-3 text-[14.5px] leading-[1.7] text-white/[.78]">
                    {t('booking.profile.callLabel')} <strong className="font-semibold text-white">{t('booking.profile.noFee')}</strong>.{' '}
                    {t('booking.profile.depositPrefix', {deposit: DEPOSIT_FULL})}
                    <strong className="font-semibold text-white">{t('booking.profile.anyTime')}</strong>{t('booking.profile.refundSuffix')}
                </p>
            </div>

            <div className="mt-8 max-w-[560px]">
                {BOOKING_STEPS.map((step) => (
                    <div key={step.n} className="flex gap-5 border-t border-white/10 py-[18px]">
                        <span className="flex-none pt-0.5 text-[13px] font-semibold text-[#41c8e6]">{step.n}</span>
                        <div>
                            <div className="text-[15px] font-bold text-white">{step.title}</div>
                            <p className="mt-1.5 text-[14px] leading-[1.65] text-white/65">{step.body}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-9 flex items-center gap-4 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-white/45">
                <img
                    src="/assets/images/brand/activate-logo-light.png"
                    alt="Activate"
                    className="h-4 w-auto object-contain opacity-80"
                />
                <span>Hotline {HOTLINE.display}</span>
            </div>
        </div>
    );
};

export default ConsultantProfile;
