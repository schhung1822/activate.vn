import React, { useState, useEffect } from 'react';
import { X, Star, CheckCircle, Target } from 'lucide-react';
import { CONSULTATION_SERVICE_OPTIONS } from '../data/consultationServices';
import { useI18n } from '../i18n';
import { submitConsultation } from '../utils/submitConsultation';

export const ConsultationPopup = ({ isOpen, onClose }) => {
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
    const [isAnimating, setIsAnimating] = useState(false);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle animation states
    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsAnimating(false);
        setTimeout(() => {
            onClose();
            // Reset form when fully closed
            setFormData({
                customer_name: '',
                phone: '',
                email: '',
                business_field: '',
                brand_name: '',
                service: '',
                consultation_request: ''
            });
            setSubmitStatus(null);
        }, 300); // Match animation duration
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

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

                // Auto close popup after success
                setTimeout(() => {
                    handleClose();
                }, 2000);
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

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${
                    isAnimating
                        ? 'bg-black/60 backdrop-blur-sm'
                        : 'bg-black/0 backdrop-blur-none'
                }`}
                onClick={handleBackdropClick}
            >
                {/* Popup Container */}
                <div
                    className={`relative w-full max-w-4xl max-h-[90vh] overflow-hidden transition-all duration-300 ease-out ${
                        isAnimating
                            ? 'scale-100 opacity-100 translate-y-0'
                            : 'scale-95 opacity-0 translate-y-4'
                    }`}
                >
                    {/* Main Popup */}
                    <div className="bg-gradient-to-br from-[#2D0F3B] via-black to-black rounded-xl border-2 border-white/10 shadow-2xl overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <div className="mt-7 lg:mt-8">
                                <h2 className="text-[20px] md:text-[32px] lg:text-[40px] font-archivo font-bold leading-[1.45] uppercase text-white mb-1">
                                    {t('popup.title')}
                                </h2>
                                <p className="text-gray-300 text-[13px] lg:text-[15px]">
                                    {t('popup.subtitle')}
                                </p>
                            </div>
                            <button
                                onClick={handleClose}
                                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                            >
                                <X className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 max-h-[70vh] overflow-y-auto">
                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Left Side - Features (Hidden on mobile) */}
                                <div className="hidden lg:block space-y-4">
                                    <div className="flex items-center space-x-3 bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                                        <div>
                                            <h3 className="text-[11px] sm:text-[12px] font-archivo font-medium text-[#ee3e99] mb-1 uppercase tracking-widest">{t('common.hotline')}</h3>
                                            <p className="text-white text-[11px] lg:text-[13px]">(+84) 33 208 3366</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                                        <div>
                                            <h3 className="text-[11px] sm:text-[12px] font-archivo font-medium text-[#ee3e99] mb-1 uppercase tracking-widest">{t('common.email')}</h3>
                                            <p className="text-white text-[11px] lg:text-[13px]">contact@activate.vn</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                                        <div>
                                            <h3 className="text-[11px] sm:text-[12px] font-archivo font-medium text-[#ee3e99] mb-1 uppercase tracking-widest">{t('common.address')}</h3>
                                            <p className="text-white text-[11px] lg:text-[13px]">{t('common.addressValue')}</p>
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="bg-[#f06aae] rounded-xl p-4 text-center">
                                        <div className="text-3xl font-bold text-white">500+</div>
                                        <div className="text-sm text-white">{t('common.trustedCustomers')}</div>
                                    </div>
                                </div>

                                {/* Right Side - Form */}
                                <div className="lg:col-span-2">
                                    <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6">
                                        {/* Success/Error Messages */}
                                        {submitStatus && (
                                            <div className={`mb-6 p-4 rounded-lg transition-all duration-300 ${
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
                                            <div className="space-y-1">
                                                <label className="block text-white text-[11px] lg:text-[13px] font-archivo font-medium uppercase tracking-widest">
                                                    {t('form.name')}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="customer_name"
                                                    value={formData.customer_name}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 bg-white/95 border border-white/20 rounded-lg text-black text-[12px] lg:text-[14px] placeholder-gray-400 transition-all duration-300 focus:border-[#6a4fdb] focus:bg-white focus:shadow-lg focus:outline-none"
                                                    placeholder={t('form.namePlaceholder')}
                                                    required
                                                />
                                            </div>

                                            {/* Row with Phone and Email */}
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <label className="block text-white text-[11px] lg:text-[13px] font-archivo font-medium uppercase tracking-widest">
                                                        {t('form.phone')}
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="w-full px-3 py-2 bg-white/95 border border-white/20 rounded-lg text-black text-[12px] lg:text-[14px] placeholder-gray-400 transition-all duration-300 focus:border-[#6a4fdb] focus:bg-white focus:shadow-lg focus:outline-none"
                                                        placeholder={t('form.phonePlaceholder')}
                                                        required
                                                    />
                                                </div>

                                                <div className="space-y-1">
                                                    <label className="block text-white text-[11px] lg:text-[13px] font-archivo font-medium uppercase tracking-widest">
                                                        {t('form.email')}
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full px-3 py-2 bg-white/95 border border-white/20 rounded-lg text-black text-[12px] lg:text-[14px] placeholder-gray-400 transition-all duration-300 focus:border-[#6a4fdb] focus:bg-white focus:shadow-lg focus:outline-none"
                                                        placeholder={t('form.emailPlaceholder')}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* Row with Business Field and Brand */}
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <label className="block text-white text-[11px] lg:text-[13px] font-archivo font-medium uppercase tracking-widest">
                                                        {t('form.businessField')}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="business_field"
                                                        value={formData.business_field}
                                                        onChange={handleInputChange}
                                                        className="w-full px-3 py-2 bg-white/95 border border-white/20 rounded-lg text-black text-[12px] lg:text-[14px] placeholder-gray-400 transition-all duration-300 focus:border-[#6a4fdb] focus:bg-white focus:shadow-lg focus:outline-none"
                                                        placeholder={t('form.businessFieldPlaceholder')}
                                                        required
                                                    />
                                                </div>

                                                <div className="space-y-1">
                                                    <label className="block text-white text-[11px] lg:text-[13px] font-archivo font-medium uppercase tracking-widest">
                                                        {t('form.brand')}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="brand_name"
                                                        value={formData.brand_name}
                                                        onChange={handleInputChange}
                                                        className="w-full px-3 py-2 bg-white/95 border border-white/20 rounded-lg text-black text-[12px] lg:text-[14px] placeholder-gray-400 transition-all duration-300 focus:border-[#6a4fdb] focus:bg-white focus:shadow-lg focus:outline-none"
                                                        placeholder={t('form.brandPlaceholder')}
                                                    />
                                                </div>
                                            </div>

                                            {/* Dịch vụ cần tư vấn */}
                                            <div className="space-y-1">
                                                <label className="block text-white text-[11px] lg:text-[13px] font-archivo font-medium uppercase tracking-widest">
                                                    {t('form.service')}
                                                </label>
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 bg-white/95 border border-white/20 rounded-lg text-black text-[12px] lg:text-[14px] transition-all duration-300 focus:border-[#6a4fdb] focus:bg-white focus:shadow-lg focus:outline-none cursor-pointer"
                                                    required
                                                >
                                                    <option value="" disabled>{t('form.servicePlaceholder')}</option>
                                                    {CONSULTATION_SERVICE_OPTIONS.map((option) => (
                                                        <option key={option.value} value={option.value}>{t(option.i18nKey)}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Yêu cầu tư vấn */}
                                            <div className="space-y-1">
                                                <label className="block text-white text-[11px] lg:text-[13px] font-archivo font-medium uppercase tracking-widest">
                                                    {t('form.request')}
                                                </label>
                                                <textarea
                                                    rows="4"
                                                    name="consultation_request"
                                                    value={formData.consultation_request}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 bg-white/95 border border-white/20 rounded-lg text-black text-[12px] lg:text-[14px] placeholder-gray-400 transition-all duration-300 focus:border-[#6a4fdb] focus:bg-white focus:shadow-lg resize-none focus:outline-none"
                                                    placeholder={t('form.requestPlaceholder')}
                                                    required
                                                />
                                            </div>

                                            {/* Submit Button */}
                                            <div className="pt-2">
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full px-8 py-4 bg-gradient-to-r from-[#ee3e99] via-[#ee3e99] to-[#ee3e99] rounded-lg text-white font-medium text-sm hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                                    style={{ backgroundSize: '200% 200%' }}
                                                >
                                                    <span className="flex items-center justify-center space-x-2">
                                                        {isSubmitting ? (
                                                            <>
                                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                                <span>{t('form.submitting')}</span>
                                                            </>
                                                        ) : (
                                                            <span>{t('form.submitNow')}</span>
                                                        )}
                                                    </span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out;
                }

                .animate-slide-up {
                    animation: slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
            `}</style>
        </>
    );
};