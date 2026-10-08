import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link, useI18n } from "../i18n";
import { COMPANY } from "../pages/seo-configs.js";
import { BUSINESS_FIELDS, FIELDS_OVERVIEW_PATH } from "../data/businessFields.js";
import { ArrowButton } from "./sections/ui.jsx";

const FooterLink = ({ to, children }) => (
    <li className="flex items-center text-[14px] text-gray-200 hover:text-white transition-colors">
        <ChevronRight className="w-4 h-4 mr-2 text-[#f06aae] flex-shrink-0" />
        <Link to={to} className="hover:text-white">{children}</Link>
    </li>
);

const Footer = () => {
    const { t } = useI18n();

    return (
        <footer className="bg-black text-white py-[60px] lg:py-[120px]">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="mb-12">
                    <img
                        src="/assets/images/brand/activate-logo-light.png"
                        alt="Activate Logo"
                        className="h-9 lg:h-10 w-auto object-contain"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-12">
                    {/* Cột A - Giới thiệu & liên hệ */}
                    <div className="space-y-4">
                        <h3 className="text-[16px] font-medium text-white mb-2">{t('corporate.footer.tagline')}</h3>
                        <p className="text-[14px] text-gray-300 leading-relaxed">{t('corporate.footer.about')}</p>
                        <div className="space-y-3">
                            <div className="text-[14px] text-gray-200">
                                <span className="font-medium">{t('common.hotline')}:</span>
                                <a href={`tel:${COMPANY.phone}`} className="block text-gray-300 hover:text-white">{COMPANY.phoneDisplay}</a>
                            </div>
                            <div className="text-[14px] text-gray-200">
                                <span className="font-medium">{t('common.email')}:</span>
                                <a href={`mailto:${COMPANY.email}`} className="block text-gray-300 hover:text-white">{COMPANY.email}</a>
                            </div>
                            <div className="text-[14px] text-gray-200">
                                <span className="font-medium">{t('common.address')}:</span>
                                <div className="text-gray-300">{t('common.addressValue')}</div>
                            </div>
                        </div>
                        <div className="flex space-x-5 pt-2">
                            <a href={`https://zalo.me/${COMPANY.phone.replace('+84', '0')}`} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <img src="/assets/images/footer/zalo.png" alt="Zalo" className="w-8 h-8 object-contain" />
                            </a>
                        </div>
                    </div>

                    {/* Cột B - Lĩnh vực hoạt động */}
                    <div className="space-y-4">
                        <h3 className="text-[16px] font-medium text-white mb-2">{t('corporate.footer.fieldsTitle')}</h3>
                        <ul className="space-y-3">
                            {BUSINESS_FIELDS.map((field) => (
                                <FooterLink key={field.key} to={field.path}>{t(`corporate.fields.${field.key}.name`)}</FooterLink>
                            ))}
                        </ul>
                    </div>

                    {/* Cột C - Doanh nghiệp */}
                    <div className="space-y-4">
                        <h3 className="text-[16px] font-medium text-white mb-2">{t('corporate.footer.companyTitle')}</h3>
                        <ul className="space-y-3">
                            <FooterLink to="/about">{t('corporate.footer.links.about')}</FooterLink>
                            <FooterLink to={FIELDS_OVERVIEW_PATH}>{t('corporate.footer.links.fields')}</FooterLink>
                            <FooterLink to="/news">{t('corporate.footer.links.news')}</FooterLink>
                            <FooterLink to="/contact">{t('corporate.footer.links.contact')}</FooterLink>
                            <FooterLink to="/chinh-sach-bao-mat">{t('corporate.footer.links.privacy')}</FooterLink>
                        </ul>
                    </div>

                    {/* Cột D - Hồ sơ doanh nghiệp */}
                    <div className="space-y-4">
                        <h3 className="text-[16px] font-medium text-white mb-2">{t('corporate.footer.profileTitle')}</h3>
                        <p className="text-[14px] text-gray-200">{t('corporate.footer.profileDescription')}</p>
                        <div className="flex flex-col items-start gap-3">
                            <ArrowButton href={COMPANY.profilePdf} download variant="light" icon="download">{t('corporate.cta.profile')}</ArrowButton>
                            <ArrowButton to="/contact" variant="gradient">{t('corporate.cta.partner')}</ArrowButton>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-[13px] lg:text-[14px] text-gray-300">
                        {t('footer.copyright')}{'  '}
                        <span className="text-white font-semibold">{COMPANY.legalName}</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
