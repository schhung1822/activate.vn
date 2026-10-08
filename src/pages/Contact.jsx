import React from 'react';
import {Mail, MapPin, Phone} from 'lucide-react';
import PartnerFormSection from '../components/sections/PartnerFormSection.jsx';
import {SectionBadge} from '../components/sections/ui.jsx';
import SEOManager from '../components/SEO/SEOManager.jsx';
import {COMPANY, seoConfigs} from './seo-configs.js';
import {useI18n} from '../i18n';

// Trang Liên hệ = cổng thông tin đối tác: đầu trang có 3 kênh liên hệ nhanh, bên dưới là
// biểu mẫu đề xuất hợp tác kèm thông tin pháp nhân đầy đủ.
export default function Contact() {
    const {t} = useI18n();
    const channels = [
        {icon: Phone, label: t('common.hotline'), value: COMPANY.phoneDisplay, href: `tel:${COMPANY.phone}`},
        {icon: Mail, label: t('common.email'), value: COMPANY.email, href: `mailto:${COMPANY.email}`},
        {icon: MapPin, label: t('corporate.legal.headquarters'), value: t('common.addressValue')}
    ];

    return (
        <div>
            <SEOManager seo={seoConfigs.contact} />

            <section className="bg-white py-[60px] lg:py-[90px]">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl space-y-3 mb-8 lg:mb-12">
                        <SectionBadge tone="brand">{t('corporate.contact.hero.badge')}</SectionBadge>
                        <h1 className="text-[34px] md:text-[44px] lg:text-[64px] font-archivo font-bold uppercase leading-[1.15] bg-gradient-to-r from-black to-[#ee3e99] bg-clip-text text-transparent">
                            {t('corporate.contact.hero.title')}
                        </h1>
                        <p className="text-[15px] lg:text-[18px] text-black">{t('corporate.contact.hero.description')}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {channels.map(({icon, label, value, href}) => {
                            const Icon = icon;
                            const body = (
                                <>
                                    <span className="w-11 h-11 rounded-xl bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-[#ee3e99] transition-colors">
                                        <Icon className="w-5 h-5 text-white" />
                                    </span>
                                    <span>
                                        <span className="block text-[11px] sm:text-[13px] font-archivo font-medium text-gray-500 uppercase tracking-widest mb-1">{label}</span>
                                        <span className="block text-black text-[14px] lg:text-[16px] font-medium">{value}</span>
                                    </span>
                                </>
                            );
                            const classes = 'group flex items-start gap-4 border-2 border-black rounded-xl p-5 shadow-md bg-white';
                            return href ? (
                                <a key={label} href={href} className={`${classes} hover:shadow-lg transition-shadow`}>{body}</a>
                            ) : (
                                <div key={label} className={classes}>{body}</div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <PartnerFormSection />
        </div>
    );
}
