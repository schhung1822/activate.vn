import React, { useState } from 'react';
import { Star, CheckCircle, Target } from 'lucide-react';
import { CONSULTATION_SERVICE_OPTIONS } from '../data/consultationServices';
import { useI18n } from '../i18n';
import { submitConsultation } from '../utils/submitConsultation';

export default function ConsultationSection() {
    const { t } = useI18n();
    const [formData, setFormData] = useState({
        customer_name: '',
        phone: '',
        email: '',
        business_field: '',
        brand_name: '',
        service: '',
        consultation_request: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const submitToNocoDB = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await submitConsultation(formData);

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    customer_name: '',
                    phone: '',
                    email: '',
                    business_field: '',
                    brand_name: '',
                    service: '',
                    consultation_request: ''
                });

                // Auto hide success message after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                throw new Error('Failed to submit');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="lilcontact" className="bg-gradient-to-t from-black via-black to-[#2D0F3B] py-[60px] lg:py-[90px] relative overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-left mb-4 lg:mb-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold leading-[1.45] uppercase text-white mb-1">
                        {t('consultation.title')}
                    </h2>
                    <p className="text-[15px] sm:text-[18px] text-white">
                        {t('consultation.description')}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Right Side - Form */}
                    <div className="relative">
                        <div className="backdrop-blur-3xl bg-white/5 rounded-xl border-2 border-white/10 shadow-2xl p-4 lg:p-6">
                            {/* Success/Error Messages */}
                            {submitStatus && (
                                <div className={`mb-4 p-4 rounded-lg ${
                                    submitStatus === 'success'
                                        ? 'bg-green-500/20 border border-green-500/30 text-green-200'
                                        : 'bg-red-500/20 border border-red-500/30 text-red-200'
                                }`}>
                                    {submitStatus === 'success'
                                        ? `✅ ${t('form.success')}`
                                        : `❌ ${t('form.error')}`
                                    }
                                </div>
                            )}

                            <form onSubmit={submitToNocoDB} className="space-y-4">
                                {/* Tên khách hàng */}
                                <div className="space-y-2">
                                    <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                        {t('form.name')}
                                    </label>
                                    <input
                                        type="text"
                                        name="customer_name"
                                        value={formData.customer_name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 bg-white/95 border-2 border-white/20 rounded-lg text-black text-[13px] lg:text-[15px] placeholder-gray-400 transition-all duration-300 focus:border-[#6a4fdb] focus:bg-white focus:shadow-lg"
                                        placeholder={t('form.namePlaceholder')}
                                        required
                                    />
                                </div>

                                {/* Row with Phone and Email */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Số điện thoại */}
                                    <div className="space-y-2">
                                        <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                            {t('form.phone')}
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 bg-white/95 border-2 border-white/20 rounded-lg text-black text-[13px] lg:text-[15px] placeholder-gray-400 transition-all duration-300 focus:border-[#6a4fdb] focus:bg-white focus:shadow-lg"
                                            placeholder={t('form.phonePlaceholder')}
                                            required
                                        />
                                    </div>

                                    {/* Gmail */}
                                    <div className="space-y-2">
                                        <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                            {t('form.email')}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 bg-white/95 border-2 border-white/20 rounded-lg text-black text-[13px] lg:text-[15px] placeholder-gray-400 transition-all duration-300 focus:border-[#6a4fdb] focus:bg-white focus:shadow-lg"
                                            placeholder={t('form.emailPlaceholder')}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Row with Business Field and Brand */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Lĩnh vực kinh doanh */}
                                    <div className="space-y-2">
                                        <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                            {t('form.businessField')}
                                        </label>
                                        <input
                                            type="text"
                                            name="business_field"
                                            value={formData.business_field}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 bg-white/95 border-2 border-white/20 rounded-lg text-black text-[13px] lg:text-[15px] placeholder-gray-400 transition-all duration-300 focus:border-[#6a4fdb] focus:bg-white focus:shadow-lg"
                                            placeholder={t('form.businessFieldPlaceholder')}
                                            required
                                        />
                                    </div>

                                    {/* Tên thương hiệu */}
                                    <div className="space-y-2">
                                        <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                            {t('form.brand')}
                                        </label>
                                        <input
                                            type="text"
                                            name="brand_name"
                                            value={formData.brand_name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 bg-white/95 border-2 border-white/20 rounded-lg text-black text-[13px] lg:text-[15px] placeholder-gray-400 transition-all duration-300 focus:border-[#6a4fdb] focus:bg-white focus:shadow-lg"
                                            placeholder={t('form.brandPlaceholder')}
                                        />
                                    </div>
                                </div>

                                {/* Dịch vụ cần tư vấn */}
                                <div className="space-y-2">
                                    <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                        {t('form.service')}
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 bg-white/95 border-2 border-white/20 rounded-lg text-black text-[13px] lg:text-[15px] transition-all duration-300 focus:border-[#6a4fdb] focus:bg-white focus:shadow-lg cursor-pointer"
                                        required
                                    >
                                        <option value="" disabled>{t('form.servicePlaceholder')}</option>
                                        {CONSULTATION_SERVICE_OPTIONS.map((option) => (
                                            <option key={option.value} value={option.value}>{t(option.i18nKey)}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Yêu cầu tư vấn */}
                                <div className="space-y-2">
                                    <label className="block text-white text-[13px] lg:text-[15px] font-medium">
                                        {t('form.request')}
                                    </label>
                                    <textarea
                                        rows="5"
                                        name="consultation_request"
                                        value={formData.consultation_request}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 bg-white/95 border-2 border-white/20 rounded-lg text-black text-[13px] lg:text-[15px] placeholder-gray-400 transition-all duration-300 focus:border-[#6a4fdb] focus:bg-white focus:shadow-lg resize-none"
                                        placeholder={t('form.requestPlaceholder')}
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full group relative px-8 py-4 bg-[#f06aae] rounded-lg text-white font-medium text-[15px] lg:text-[16px] hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        <span className="flex items-center justify-center space-x-2">
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    <span>{t('form.submitting')}</span>
                                                </>
                                            ) : (
                                                <span>{t('form.submit')}</span>
                                            )}
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Left Side - Visual Elements */}
                    <div className="relative">
                        <div className="relative">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg shadow-lg backdrop-blur-3xl">
                                    <div>
                                        <h3 className="text-[10px] sm:text-[12px] font-archivo font-medium text-[#ee3e99] mb-1 uppercase tracking-widest">{t('common.hotline')}</h3>
                                        <p className="text-white text-[13px] lg:text-[15px]">(+84) 33 208 3366</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg shadow-lg backdrop-blur-3xl">
                                    <div>
                                        <h3 className="text-[10px] sm:text-[12px] font-archivo font-medium text-[#ee3e99] mb-1 uppercase tracking-widest">{t('common.email')}</h3>
                                        <p className="text-white text-[13px] lg:text-[15px]">contact@activate.vn</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg shadow-lg backdrop-blur-3xl">
                                    <div>
                                        <h3 className="text-[10px] sm:text-[12px] font-archivo font-medium text-[#ee3e99] mb-1 uppercase tracking-widest">{t('common.address')}</h3>
                                        <p className="text-white text-[13px] lg:text-[15px]">{t('common.addressValue')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -top-4 -right-0 bg-[#f06aae] rounded-lg px-4 py-2">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">500+</div>
                                    <div className="text-xs text-white">{t('common.customers')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}