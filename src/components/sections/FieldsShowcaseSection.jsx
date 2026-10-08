// Ba lĩnh vực hoạt động dạng tab: ảnh bên trái, mô tả + giá trị + đối tác phù hợp bên phải.
// Chuyển thể từ components/home/ServicesSection.jsx (khối "Dịch vụ" dạng tab cũ).
import React, {useRef, useState} from 'react';
import {CheckCircle2} from 'lucide-react';
import {useI18n} from '../../i18n';
import {BUSINESS_FIELDS} from '../../data/businessFields.js';
import {ArrowButton, SectionBadge} from './ui.jsx';
import {useReveal} from './helpers.js';

const FieldsShowcaseSection = ({id}) => {
    const {t} = useI18n();
    const [active, setActive] = useState(0);
    const sectionRef = useRef(null);
    useReveal(sectionRef);

    const fields = BUSINESS_FIELDS.map((field) => ({
        ...field,
        name: t(`corporate.fields.${field.key}.name`),
        shortName: t(`corporate.fields.${field.key}.shortName`),
        label: t(`corporate.fields.${field.key}.label`),
        summary: t(`corporate.fields.${field.key}.summary`),
        values: t(`corporate.fields.${field.key}.values`),
        partners: t(`corporate.fields.${field.key}.partners`)
    }));
    const field = fields[active];
    const Icon = field.icon;

    return (
        <section id={id} ref={sectionRef} className="bg-gradient-to-t from-black via-black to-[#2D0F3B] py-[60px] lg:py-[90px] scroll-mt-24">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-4 sm:mb-8">
                    <div data-reveal><SectionBadge tone="light">{t('corporate.home.fields.badge')}</SectionBadge></div>
                    <h2 data-reveal className="text-[26px] md:text-[32px] lg:text-[60px] font-archivo font-bold text-white mb-1 uppercase">
                        {t('corporate.home.fields.title')}
                    </h2>
                </div>

                {/* Tabs */}
                <div data-reveal className="mb-4 sm:mb-8 flex flex-wrap gap-1 sm:gap-2" role="tablist">
                    {fields.map((item, index) => {
                        const TabIcon = item.icon;
                        return (
                            <button
                                key={item.key}
                                type="button"
                                role="tab"
                                aria-selected={active === index}
                                onClick={() => setActive(index)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-sm transition-all duration-300 text-[12px] lg:text-[15px] ${
                                    active === index
                                        ? 'bg-white text-black'
                                        : 'bg-white/5 text-gray-100 hover:bg-white/10 border border-white/25'
                                }`}
                            >
                                <TabIcon className="w-4 h-4" />
                                <span>{item.shortName}</span>
                            </button>
                        );
                    })}
                </div>

                {/* key đổi theo tab để chạy lại hiệu ứng rise-in mỗi lần chuyển tab */}
                <div key={field.key} className="animate-rise-in">
                    <h3 className="text-[18px] md:text-[24px] lg:text-[32px] font-medium text-white mb-4 sm:mb-8 border-b border-white/20 pb-4">
                        <span className="text-[#ee3e99] mr-3">0{active + 1}</span>
                        {field.name}
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        <div className="p-0 lg:p-4">
                            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-gray-800">
                                <img src={field.image} alt={field.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center">
                                        <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.4} />
                                    </div>
                                    <span className="text-[11px] lg:text-[13px] font-archivo tracking-[0.3rem] uppercase text-white/90">{field.label}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 lg:space-y-10 p-0 lg:p-4">
                            <div>
                                <h4 className="text-[11px] sm:text-[13px] font-medium text-[#ee3e99] mb-3 uppercase tracking-widest">
                                    {t('corporate.home.fields.descriptionLabel')}
                                </h4>
                                <p className="text-white text-[14px] sm:text-[16px] text-justify">{field.summary}</p>
                            </div>
                            <div>
                                <h4 className="text-[11px] sm:text-[13px] font-medium text-[#ee3e99] mb-3 uppercase tracking-widest">
                                    {t('corporate.home.fields.valuesLabel')}
                                </h4>
                                <div className="flex flex-wrap gap-x-5 gap-y-3">
                                    {field.values.map((value) => (
                                        <span key={value} className="flex items-center gap-2 text-white text-[14px] lg:text-[16px]">
                                            <CheckCircle2 className="w-4 h-4 text-[#ee3e99]" />
                                            {value}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[11px] sm:text-[13px] font-medium text-[#ee3e99] mb-3 uppercase tracking-widest">
                                    {t('corporate.home.fields.partnersLabel')}
                                </h4>
                                <p className="text-[14px] lg:text-[16px] text-white">{field.partners}</p>
                            </div>
                            <ArrowButton to={field.path} variant="gradient">{t('corporate.cta.fieldDetail')}</ArrowButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FieldsShowcaseSection;
