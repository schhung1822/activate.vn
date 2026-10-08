import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Dot, ArrowUpRight, LayoutGrid } from 'lucide-react';
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { Link, stripLocaleFromPath, useI18n } from "../i18n";
import { BUSINESS_FIELDS, FIELDS_OVERVIEW_PATH } from "../data/businessFields.js";

const Header = () => {
    const { t } = useI18n();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFieldsOpen, setIsFieldsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    // Ẩn header khi cuộn xuống, hiện lại khi cuộn lên
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 100));
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Đổi trang thì đóng menu mobile
    useEffect(() => {
        setIsMenuOpen(false);
        setIsFieldsOpen(false);
    }, [location]);

    // Khoá cuộn trang khi menu mobile đang mở
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Menu con "Lĩnh vực hoạt động": trang tổng quan + từng lĩnh vực
    const fieldLinks = [
        { key: 'overview', path: FIELDS_OVERVIEW_PATH, icon: LayoutGrid, name: t('corporate.nav.fieldsOverview') },
        ...BUSINESS_FIELDS.map((field) => ({
            key: field.key,
            path: field.path,
            icon: field.icon,
            name: t(`corporate.fields.${field.key}.shortName`),
            description: t(`corporate.fields.${field.key}.menuDescription`)
        }))
    ];

    const navigationItems = [
        { key: 'about', name: t('corporate.nav.about'), path: '/about' },
        { key: 'fields', name: t('corporate.nav.fields'), path: FIELDS_OVERVIEW_PATH, dropdown: fieldLinks },
        { key: 'news', name: t('corporate.nav.news'), path: '/news' },
        { key: 'contact', name: t('corporate.nav.contact'), path: '/contact' }
    ];

    // So khớp trên đường dẫn đã bỏ prefix ngôn ngữ để /en/about vẫn sáng mục "Giới thiệu"
    const currentPath = stripLocaleFromPath(location.pathname);
    const isActiveRoute = (path) => (path === '/' ? currentPath === '/' : currentPath.startsWith(path));
    const isExactRoute = (path) => currentPath === path;

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black transition-all duration-500 ${
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="max-w-[1440px] mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-[70px] lg:h-[85px]">
                        {/* Logo */}
                        <Link to="/" className="block flex-shrink-0">
                            <img
                                src="/assets/images/brand/activate-logo-dark.png"
                                alt="Activate Logo"
                                className="block h-7 lg:h-8 w-auto object-contain"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden xl:flex items-center space-x-2">
                            {navigationItems.map((item) => (
                                <div key={item.key} className="relative group">
                                    <Link
                                        to={item.path}
                                        className={`px-6 py-2.5 rounded-full text-[16px] font-medium transition-all duration-200 flex items-center ${
                                            isActiveRoute(item.path) ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white'
                                        }`}
                                    >
                                        <span>{item.name}</span>
                                        {item.dropdown && <Dot className="w-6 h-6 -mr-2" />}
                                    </Link>

                                    {item.dropdown && (
                                        <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                            <div className="w-[440px] bg-white rounded-3xl p-2.5 space-y-2 shadow-xl">
                                                {item.dropdown.map((link) => {
                                                    const Icon = link.icon;
                                                    const active = isExactRoute(link.path);
                                                    return (
                                                        <Link
                                                            key={link.key}
                                                            to={link.path}
                                                            className={`flex items-center gap-3 px-4 py-2.5 rounded-3xl text-[14px] transition-colors duration-200 border-[1.5px] border-[#111111] ${
                                                                active ? 'text-white bg-black' : 'text-black hover:text-white hover:bg-[#111111]'
                                                            }`}
                                                        >
                                                            <Icon className="w-4 h-4 flex-shrink-0" />
                                                            <span className="flex-1">
                                                                <span className="block font-medium">{link.name}</span>
                                                                {link.description && <span className="block text-[12px] opacity-70">{link.description}</span>}
                                                            </span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden xl:flex items-center space-x-4">
                            <LanguageSwitcher />
                            <Link
                                to="/contact"
                                className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#6A4FDB] via-[#ee3e99] to-[#6A4FDB] text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:scale-105 group animate-gradient-shift"
                                style={{ backgroundSize: '200% 200%' }}
                            >
                                <span>{t('corporate.cta.partner')}</span>
                                <span className="w-[2.5rem] h-[2.5rem] bg-black rounded-full flex items-center justify-center neu-shadow-xs">
                                    <ArrowUpRight className="w-5 h-5 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-105" strokeWidth={2.3}/>
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="xl:hidden" aria-label="Menu">
                            {isMenuOpen ? <X className="w-8 h-8 text-black" strokeWidth={1.5}/> : <Menu className="w-8 h-8 text-black" strokeWidth={1.5}/>}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 xl:hidden">
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-fade-in" onClick={() => setIsMenuOpen(false)} />

                    <div className="relative h-full bg-white flex flex-col animate-slide-in-right">
                        <div className="flex items-center justify-between h-[70px] px-6 animate-fade-in-delay-100">
                            <Link to="/" className="block">
                                <img src="/assets/images/brand/activate-logo-dark.png" alt="Activate Logo" className="h-7 w-auto object-contain" />
                            </Link>
                            <button onClick={() => setIsMenuOpen(false)} className="mr-1 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" aria-label="Close">
                                <X className="w-6 h-6 text-black" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 pt-4">
                            <nav className="space-y-10">
                                {navigationItems.map((item, index) => (
                                    <div
                                        key={item.key}
                                        className="animate-fade-in-up"
                                        style={{ animationDelay: `${150 + index * 100}ms`, animationFillMode: 'both' }}
                                    >
                                        {item.dropdown ? (
                                            <div>
                                                <button
                                                    onClick={() => setIsFieldsOpen(!isFieldsOpen)}
                                                    className="w-full flex items-center justify-between px-2 border-l-2 border-black text-left text-[14px] font-medium text-black"
                                                >
                                                    <span>{item.name}</span>
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isFieldsOpen ? 'rotate-180' : ''}`} />
                                                </button>
                                                <div
                                                    className={`transition-all duration-700 ease-out overflow-hidden ${
                                                        isFieldsOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                                                    }`}
                                                >
                                                    <div className="pt-2 px-2 space-y-2">
                                                        {item.dropdown.map((link) => {
                                                            const Icon = link.icon;
                                                            return (
                                                                <Link
                                                                    key={link.key}
                                                                    to={link.path}
                                                                    className={`flex items-center space-x-2 px-3 py-2 rounded-3xl text-[13px] border border-[#111111] ${
                                                                        isExactRoute(link.path) ? 'text-white bg-black' : 'text-black'
                                                                    }`}
                                                                >
                                                                    <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                                                                    <span>{link.name}</span>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link to={item.path} className="block px-2 border-l-2 border-black text-[14px] font-medium text-black">
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* Chọn ngôn ngữ - bản mobile */}
                            <div
                                className="mt-10 animate-fade-in-up"
                                style={{ animationDelay: `${150 + navigationItems.length * 100}ms`, animationFillMode: 'both' }}
                            >
                                <p className="mb-2 px-2 text-[11px] font-medium uppercase tracking-widest text-gray-500">{t('language.label')}</p>
                                <LanguageSwitcher variant="mobile" />
                            </div>

                            {/* Mobile CTA */}
                            <div
                                className="flex items-center justify-center mt-8 mb-6 animate-fade-in-up"
                                style={{ animationDelay: `${250 + navigationItems.length * 100}ms`, animationFillMode: 'both' }}
                            >
                                <Link
                                    to="/contact"
                                    className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#6A4FDB] via-[#ee3e99] to-[#6A4FDB] text-[15px] text-white rounded-full font-medium animate-gradient-shift"
                                    style={{ backgroundSize: '200% 100%' }}
                                >
                                    <span>{t('corporate.cta.partner')}</span>
                                    <span className="w-9 h-9 bg-black rounded-full flex items-center justify-center neu-shadow-xs">
                                        <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={2.3}/>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Animation của menu mobile */}
            <style>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slide-in-right {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fade-in 0.3s ease-out; }
                .animate-slide-in-right { animation: slide-in-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
                .animate-fade-in-up { animation: fade-in-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); opacity: 0; }
                .animate-fade-in-delay-100 { animation: fade-in-up 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s both; }
            `}</style>
        </>
    );
};

export default Header;
