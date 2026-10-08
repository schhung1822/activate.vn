// Cổng tiếp nhận đề xuất hợp tác: form bên trái, thông tin pháp nhân + đối tượng hợp tác bên phải.
// Chuyển thể từ components/ConsultationSectionPrimary.jsx (form tư vấn cũ) - đổi trường
// sang thông tin doanh nghiệp B2B và gửi qua submitPartnerProposal.
import React, {useState} from 'react';
import {CheckCircle2} from 'lucide-react';
import {Link, useI18n} from '../../i18n';
import {PARTNERSHIP_TYPES} from '../../data/businessFields.js';
import {submitPartnerProposal} from '../../utils/submitConsultation.js';
import LegalInfoList from './LegalInfoList.jsx';

const EMPTY_FORM = {name: '', position: '', company: '', taxId: '', phone: '', email: '', type: '', message: '', consent: false};

const INPUT_CLASS =
    'w-full px-4 py-2.5 bg-white/95 rounded-sm text-black text-[13px] lg:text-[15px] placeholder-gray-400 border border-transparent transition-all duration-300 focus:outline-none focus:border-[#ee3e99] focus:bg-white focus:shadow-lg';

const Field = ({label, required, children}) => (
    <label className="block space-y-2">
        <span className="block text-white text-[13px] lg:text-[15px] font-medium">
            {label}
            {required && <span className="text-[#ee3e99]"> *</span>}
        </span>
        {children}
    </label>
);

const PartnerFormSection = ({id = 'lien-he-hop-tac', title, description}) => {
    const {t} = useI18n();
    const [form, setForm] = useState(EMPTY_FORM);
    const [status, setStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const update = (e) => {
        const {name, value, type, checked} = e.target;
        setForm((prev) => ({...prev, [name]: type === 'checkbox' ? checked : value}));
    };

    const submit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);
        try {
            const response = await submitPartnerProposal(form);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            setStatus('success');
            setForm(EMPTY_FORM);
        } catch (error) {
            console.error('Error submitting partner proposal:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id={id} className="bg-gradient-to-t from-black via-black to-[#2D0F3B] py-[60px] lg:py-[90px] relative overflow-hidden scroll-mt-24">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6 lg:mb-10 max-w-3xl">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[54px] font-archivo font-bold text-white mb-2 leading-[1.25] uppercase">
                        {title || t('corporate.form.title')}
                    </h2>
                    <p className="text-[15px] sm:text-[18px] text-gray-200">{description || t('corporate.form.description')}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                        {status && (
                            <div
                                role="status"
                                className={`mb-4 p-4 rounded-lg ${
                                    status === 'success'
                                        ? 'bg-fuchsia-400/30 border border-fuchsia-400/60 text-fuchsia-50'
                                        : 'bg-red-500/20 border border-red-500/30 text-red-200'
                                }`}
                            >
                                {t(status === 'success' ? 'corporate.form.success' : 'corporate.form.error')}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <Field label={t('corporate.form.name')} required>
                                    <input name="name" value={form.name} onChange={update} required className={INPUT_CLASS} placeholder={t('corporate.form.namePlaceholder')} />
                                </Field>
                                <Field label={t('corporate.form.position')}>
                                    <input name="position" value={form.position} onChange={update} className={INPUT_CLASS} placeholder={t('corporate.form.positionPlaceholder')} />
                                </Field>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Field label={t('corporate.form.company')} required>
                                    <input name="company" value={form.company} onChange={update} required className={INPUT_CLASS} placeholder={t('corporate.form.companyPlaceholder')} />
                                </Field>
                                <Field label={t('corporate.form.taxId')}>
                                    <input name="taxId" value={form.taxId} onChange={update} inputMode="numeric" className={INPUT_CLASS} placeholder={t('corporate.form.taxIdPlaceholder')} />
                                </Field>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Field label={t('corporate.form.phone')} required>
                                    <input type="tel" name="phone" value={form.phone} onChange={update} required className={INPUT_CLASS} placeholder={t('corporate.form.phonePlaceholder')} />
                                </Field>
                                <Field label={t('corporate.form.email')} required>
                                    <input type="email" name="email" value={form.email} onChange={update} required className={INPUT_CLASS} placeholder={t('corporate.form.emailPlaceholder')} />
                                </Field>
                            </div>
                            <Field label={t('corporate.form.type')} required>
                                <select name="type" value={form.type} onChange={update} required className={`${INPUT_CLASS} cursor-pointer`}>
                                    <option value="" disabled>{t('corporate.form.typePlaceholder')}</option>
                                    {PARTNERSHIP_TYPES.map((option) => (
                                        <option key={option.key} value={option.value}>{t(`corporate.form.types.${option.key}`)}</option>
                                    ))}
                                </select>
                            </Field>
                            <Field label={t('corporate.form.message')} required>
                                <textarea rows="5" name="message" value={form.message} onChange={update} required className={`${INPUT_CLASS} resize-none`} placeholder={t('corporate.form.messagePlaceholder')} />
                            </Field>

                            <label className="flex items-start gap-3 text-[13px] lg:text-[14px] text-gray-200">
                                <input type="checkbox" name="consent" checked={form.consent} onChange={update} required className="mt-1 h-4 w-4 accent-[#ee3e99]" />
                                <span>
                                    {t('corporate.form.consentPrefix')}
                                    <Link to="/chinh-sach-bao-mat" className="underline decoration-[#ee3e99] underline-offset-2 hover:text-white">
                                        {t('corporate.form.consentLink')}
                                    </Link>
                                </span>
                            </label>
                            <p className="text-[12px] text-gray-400">{t('corporate.form.requiredNote')}</p>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-gradient-to-r from-[#6a4fdb] via-[#ee3e99] to-[#6a4fdb] animate-gradient-shift rounded-sm text-white font-medium text-[15px] lg:text-[16px] hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                style={{backgroundSize: '200% 200%'}}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    {isSubmitting && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                                    {t(isSubmitting ? 'corporate.form.submitting' : 'corporate.form.submit')}
                                </span>
                            </button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-[11px] sm:text-[13px] font-archivo font-medium text-white/70 mb-3 uppercase tracking-[0.3rem]">
                                {t('corporate.form.audiencesTitle')}
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {t('corporate.form.audiences').map((audience) => (
                                    <li key={audience} className="flex items-start gap-2 text-white text-[13px] lg:text-[15px]">
                                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#ee3e99] flex-shrink-0" />
                                        {audience}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[11px] sm:text-[13px] font-archivo font-medium text-white/70 mb-3 uppercase tracking-[0.3rem]">
                                {t('corporate.legal.title')}
                            </h3>
                            <LegalInfoList tone="dark" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerFormSection;
