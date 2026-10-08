// Hồ sơ pháp lý: thông tin pháp nhân (trái) + nhóm ngành nghề kinh doanh (phải).
import React, {useRef} from 'react';
import {Boxes, Handshake, ShoppingBag, Ship} from 'lucide-react';
import {useI18n} from '../../i18n';
import LegalInfoList from './LegalInfoList.jsx';
import {SectionBadge} from './ui.jsx';
import {useReveal} from './helpers.js';

const ACTIVITY_ICONS = [Boxes, ShoppingBag, Handshake, Ship];

const LegalProfileSection = () => {
    const {t} = useI18n();
    const sectionRef = useRef(null);
    useReveal(sectionRef);
    const activities = t('corporate.about.legal.activities');

    return (
        <section ref={sectionRef} className="bg-white py-[60px] lg:py-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                    <div className="space-y-4">
                        <div data-reveal><SectionBadge>{t('corporate.about.legal.badge')}</SectionBadge></div>
                        <h2 data-reveal className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-black uppercase leading-[1.3]">
                            {t('corporate.about.legal.title')}
                        </h2>
                        <p data-reveal className="text-[15px] lg:text-[18px] text-black">{t('corporate.about.legal.description')}</p>
                        <div data-reveal><LegalInfoList tone="light" columns={2} /></div>
                        <p data-reveal className="text-[13px] lg:text-[14px] text-gray-500 italic">{t('corporate.about.legal.note')}</p>
                    </div>

                    <div className="space-y-4">
                        <h3 data-reveal className="text-[11px] sm:text-[13px] font-archivo font-medium text-[#ee3e99] uppercase tracking-[0.3rem] lg:mt-14">
                            {t('corporate.about.legal.activitiesTitle')}
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {activities.map((activity, index) => {
                                const Icon = ACTIVITY_ICONS[index % ACTIVITY_ICONS.length];
                                const isDark = index === activities.length - 1;
                                return (
                                    <div
                                        data-reveal
                                        key={activity.title}
                                        className={`border-2 border-black rounded-xl p-5 shadow-md ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}
                                    >
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${isDark ? 'bg-[#ee3e99]' : 'bg-black'}`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-[16px] lg:text-[18px] font-semibold mb-1">{activity.title}</h4>
                                        <p className={`text-[13px] lg:text-[15px] ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{activity.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegalProfileSection;
