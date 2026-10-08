// Danh sách thông tin pháp nhân (tên quốc tế, MST, trụ sở, liên hệ...).
// Kiểu thẻ lấy từ khối thông tin liên hệ của ConsultationSectionPrimary / trang Contact cũ.
import React from 'react';
import {useI18n} from '../../i18n';
import {COMPANY} from '../../pages/seo-configs.js';

const useLegalRows = () => {
    const {t} = useI18n();
    return [
        {label: t('common.legalName'), value: COMPANY.legalName},
        {label: t('common.brandLabel'), value: COMPANY.brand},
        {label: t('common.taxId'), value: COMPANY.taxId},
        {label: t('corporate.legal.headquarters'), value: t('common.addressValue')},
        {label: t('common.hotline'), value: COMPANY.phoneDisplay, href: `tel:${COMPANY.phone}`},
        {label: t('common.email'), value: COMPANY.email, href: `mailto:${COMPANY.email}`},
        // `wide`: chiếm trọn chiều ngang khi hiển thị dạng 2 cột
        {label: t('corporate.legal.activities'), value: t('corporate.legal.activitiesValue'), wide: true}
    ];
};

/** tone="dark" cho nền tối, "light" cho nền sáng. */
const LegalInfoList = ({tone = 'dark', columns = 1}) => {
    const rows = useLegalRows();
    const isDark = tone === 'dark';
    return (
        <dl className={`grid gap-3 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
            {rows.map((row) => (
                <div
                    key={row.label}
                    className={`p-4 rounded-sm ${columns === 2 && row.wide ? 'sm:col-span-2' : ''} ${isDark ? 'bg-white/5 backdrop-blur-3xl shadow-lg' : 'bg-gray-50/80 border border-gray-100 rounded-lg'}`}
                >
                    <dt className={`text-[11px] sm:text-[13px] font-archivo font-medium mb-1 uppercase tracking-widest ${isDark ? 'text-[#ee3e99]' : 'text-gray-500'}`}>
                        {row.label}
                    </dt>
                    <dd className={`text-[13px] lg:text-[15px] font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                        {row.href ? <a href={row.href} className="hover:text-[#ee3e99] transition-colors">{row.value}</a> : row.value}
                    </dd>
                </div>
            ))}
        </dl>
    );
};

export default LegalInfoList;
