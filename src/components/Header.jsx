import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Menu,
    X,
    ChevronDown,
    Dot,
    ArrowUpRight,
    Bot,
    Target,
    Smartphone,
    Globe,
    Music,
    Users,
    BarChart3,
    CheckCircle,
    FolderOpen,
    FileText
} from 'lucide-react';
import {ConsultationPopup} from "./ConsultationPopup.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { Link, stripLocaleFromPath, useI18n } from "../i18n";

const Header = () => {
    const { t } = useI18n();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
    const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    // Scroll handler for hide/show header
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        setIsServiceDropdownOpen(false);
        setIsProjectDropdownOpen(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to restore scroll when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // `key` là định danh bất biến để so sánh trong JSX; `name` chỉ để hiển thị nên đổi
    // theo ngôn ngữ. Trước đây JSX so khớp bằng chính chuỗi tiếng Việt - dịch xong sẽ hỏng.
    const navigationItems = [
        { key: 'about', name: t('nav.about'), path: '/about' },
        {
            key: 'services',
            name: t('nav.services'),
            path: '/services',
            dropdown: [
                { name: t('nav.servicesMenu.aiData'), path: '/services/ai-data', icon: Bot },
                { name: t('nav.servicesMenu.googleAds'), path: '/services/google-ads', icon: Target },
                { name: t('nav.servicesMenu.facebookAds'), path: '/services/facebook-ads', icon: Smartphone },
                { name: t('nav.servicesMenu.websiteLanding'), path: '/services/website-landing-page', icon: Globe },
                { name: t('nav.servicesMenu.tiktokAds'), path: '/services/tiktok-ads', icon: Music },
                { name: t('nav.servicesMenu.facebookCrm'), path: '/services/facebook-crm', icon: Users },
                { name: t('nav.servicesMenu.marketingOutsource'), path: '/services/marketing-outsource', icon: BarChart3 },
                { name: t('nav.servicesMenu.tickXanh'), path: '/services/tick-xanh-facebook', icon: CheckCircle },
            ]
        },
        { key: 'ai', name: t('nav.ai'), path: '/ai' },
        {
            key: 'projects',
            name: t('nav.projects'),
            path: '/projects',
            dropdown: [
                { name: t('nav.projectsMenu.all'), path: '/projects/all', icon: FolderOpen },
                { name: t('nav.projectsMenu.portfolio'), path: '/projects/portfolio', icon: FileText },
                { name: t('nav.projectsMenu.workflowLong'), path: '/projects/workflow', icon: FileText },
            ]
        },
        { key: 'news', name: t('nav.news'), path: '/news' },
    ];

    // So khớp trên đường dẫn đã bỏ prefix ngôn ngữ để /en/about vẫn sáng mục "Giới thiệu"
    const currentPath = stripLocaleFromPath(location.pathname);

    const isActiveRoute = (path) => {
        if (path === '/') return currentPath === '/';
        return currentPath.startsWith(path);
    };

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleServiceDropdown = () => {
        setIsServiceDropdownOpen(!isServiceDropdownOpen);
    };

    const toggleProjectDropdown = () => {
        setIsProjectDropdownOpen(!isProjectDropdownOpen);
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const openConsultationPopup = () => setIsPopupOpen(true);

        window.addEventListener('nextgency:open-consultation-popup', openConsultationPopup);
        return () => window.removeEventListener('nextgency:open-consultation-popup', openConsultationPopup);
    }, []);

    return (
        <>
            {/* Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black transition-all duration-500 ${
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                } `}
            >
                <div className="max-w-[1440px] mx-auto px-6 sm:px-6 lg:px-8 ">
                    <div className="flex items-center justify-between h-[70px] lg:h-[85px]">

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="block">
                                {/* Dùng chung logo đầy đủ cho mọi kích thước màn hình */}
                                <img
                                    src="/assets/images/header/navbarlogoblack.png"
                                    alt="Nextgency Logo"
                                    className="block h-6 lg:h-7 w-auto object-contain"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden xl:flex items-center space-x-1 rounded-full">
                            <div className=" rounded-full p-1  flex items-center space-x-2">
                                {navigationItems.map((item) => (
                                    <div key={item.key} className="relative group">
                                        {item.dropdown ? (
                                            <div className="relative">
                                                <button
                                                    className={`px-6 py-2.5 rounded-full text-[16px] font-medium transition-all duration-200 flex items-center space-x-1 ${
                                                        isActiveRoute(item.path)
                                                            ? 'bg-black text-white'
                                                            : 'text-black hover:bg-black hover:text-white'
                                                    }`}
                                                >
                                                    <span>{item.name}</span>
                                                    <Dot className="w-6 h-6" />
                                                </button>
                                                {/* Dropdown Menu */}
                                                <div className={`absolute top-full left-0 mt-2 bg-white rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 ${
                                                    item.key === 'services' ? 'w-[480px]' : 'w-[280px]'
                                                }`}>
                                                    <div className="p-2.5 space-y-2">
                                                        {item.key === 'services' ? (
                                                            <>
                                                                {/* Services dropdown layout */}
                                                                <div className="grid grid-cols-2 gap-2">
                                                                    <Link
                                                                        to="/services/ai-data"
                                                                        className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] transition-colors duration-200 border-[1.5px] border-[#111111] ${
                                                                            isActiveRoute('/services/ai-data') ? 'text-white bg-black hover:bg-black' : 'text-black hover:text-white hover:bg-[#111111]'
                                                                        }`}
                                                                    >
                                                                        <Bot className="w-3.5 h-3.5" />
                                                                        <span>{t('nav.servicesMenu.aiData')}</span>
                                                                    </Link>
                                                                    <Link
                                                                        to="/services/google-ads"
                                                                        className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] transition-colors duration-200 border-[1.5px] border-[#111111] ${
                                                                            isActiveRoute('/services/google-ads') ? 'text-white bg-black hover:bg-black' : 'text-black hover:text-white hover:bg-[#111111]'
                                                                        }`}
                                                                    >
                                                                        <Target className="w-3.5 h-3.5" />
                                                                        <span>{t('nav.servicesMenu.googleAds')}</span>
                                                                    </Link>
                                                                </div>

                                                                <div className="grid grid-cols-2 gap-2">
                                                                    <Link
                                                                        to="/services/facebook-ads"
                                                                        className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] transition-colors duration-200 border-[1.5px] border-[#111111] ${
                                                                            isActiveRoute('/services/facebook-ads') ? 'text-white bg-black hover:bg-black' : 'text-black hover:text-white hover:bg-[#111111]'
                                                                        }`}
                                                                    >
                                                                        <Smartphone className="w-3.5 h-3.5" />
                                                                        <span>{t('nav.servicesMenu.facebookAds')}</span>
                                                                    </Link>
                                                                    <Link
                                                                        to="/services/tiktok-ads"
                                                                        className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] transition-colors duration-200 border-[1.5px] border-[#111111] ${
                                                                            isActiveRoute('/services/tiktok-ads') ? 'text-white bg-black hover:bg-black' : 'text-black hover:text-white hover:bg-[#111111]'
                                                                        }`}
                                                                    >
                                                                        <Music className="w-3.5 h-3.5" />
                                                                        <span>{t('nav.servicesMenu.tiktokAds')}</span>
                                                                    </Link>
                                                                </div>

                                                                <div className="grid grid-cols-2 gap-2">
                                                                    <Link
                                                                        to="/services/facebook-crm"
                                                                        className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] transition-colors duration-200 border-[1.5px] border-[#111111] ${
                                                                            isActiveRoute('/services/facebook-crm') ? 'text-white bg-black hover:bg-black' : 'text-black hover:text-white hover:bg-[#111111]'
                                                                        }`}
                                                                    >
                                                                        <Users className="w-3.5 h-3.5" />
                                                                        <span>{t('nav.servicesMenu.facebookCrm')}</span>
                                                                    </Link>
                                                                    <Link
                                                                        to="/services/tick-xanh-facebook"
                                                                        className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] transition-colors duration-200 border-[1.5px] border-[#111111] ${
                                                                            isActiveRoute('/services/tick-xanh-facebook') ? 'text-white bg-black hover:bg-black' : 'text-black hover:text-white hover:bg-[#111111]'
                                                                        }`}
                                                                    >
                                                                        <CheckCircle className="w-3.5 h-3.5" />
                                                                        <span>{t('nav.servicesMenu.tickXanh')}</span>
                                                                    </Link>
                                                                </div>

                                                                <Link
                                                                        to="/services/website-landing-page"
                                                                        className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] transition-colors duration-200 border-[1.5px] border-[#111111] ${
                                                                            isActiveRoute('/services/website-landing-page') ? 'text-white bg-black hover:bg-black' : 'text-black hover:text-white hover:bg-[#111111]'
                                                                        }`}
                                                                    >
                                                                        <Globe className="w-3.5 h-3.5" />
                                                                        <span>{t('nav.servicesMenu.websiteLanding')}</span>
                                                                    </Link>

                                                                <Link
                                                                    to="/services/marketing-outsource"
                                                                    className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] transition-colors duration-200 border-[1.5px] border-[#111111] ${
                                                                        isActiveRoute('/services/marketing-outsource') ? 'text-white bg-black hover:bg-black' : 'text-black hover:text-white hover:bg-[#111111]'
                                                                    }`}
                                                                >
                                                                    <BarChart3 className="w-3.5 h-3.5" />
                                                                    <span>{t('nav.servicesMenu.marketingOutsource')}</span>
                                                                </Link>
                                                            </>
                                                        ) : (
                                                            <>
                                                                {/* Projects dropdown layout */}
                                                                <Link
                                                                    to="/projects/all"
                                                                    className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] transition-colors duration-200 border-[1.5px] border-[#111111] ${
                                                                        isActiveRoute('/projects/all') ? 'text-white bg-black hover:bg-black' : 'text-black hover:text-white hover:bg-[#111111]'
                                                                    }`}
                                                                >
                                                                    <FolderOpen className="w-3.5 h-3.5" />
                                                                    <span>{t('nav.projectsMenu.all')}</span>
                                                                </Link>
                                                                <Link
                                                                    to="/projects/portfolio"
                                                                    className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] transition-colors duration-200 border-[1.5px] border-[#111111] ${
                                                                        isActiveRoute('/projects/portfolio') ? 'text-white bg-black hover:bg-black' : 'text-black hover:text-white hover:bg-[#111111]'
                                                                    }`}
                                                                >
                                                                    <FileText className="w-3.5 h-3.5" />
                                                                    <span>{t('nav.projectsMenu.portfolio')}</span>
                                                                </Link>
                                                                <Link
                                                                    to="/projects/workflow"
                                                                    className={`flex items-center space-x-2 px-3 py-2.5 rounded-3xl text-[14px] transition-colors duration-200 border-[1.5px] border-[#111111] ${
                                                                        isActiveRoute('/projects/workflow') ? 'text-white bg-black hover:bg-black' : 'text-black hover:text-white hover:bg-[#111111]'
                                                                    }`}
                                                                >
                                                                    <FileText className="w-3.5 h-3.5" />
                                                                    <span>{t('nav.projectsMenu.workflow')}</span>
                                                                </Link>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className={`px-6 py-2.5 rounded-full text-[16px] font-medium transition-all duration-200 flex items-center ${
                                                    isActiveRoute(item.path)
                                                        ? 'bg-black text-white'
                                                        : 'text-black hover:bg-black hover:text-white'
                                                }`}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </nav>

                        {/* Desktop CTA Button */}
                        <div className="hidden xl:flex items-center space-x-4">
                            <LanguageSwitcher />
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#2B144D] via-[#c08dfe] to-[#2B144D] text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:scale-105 group animate-gradient-shift"
                                style={{ backgroundSize: '200% 200%' }}
                            >
                                <span>{t('nav.cta')}</span>
                                <div className="w-[2.5rem] h-[2.5rem] bg-black rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-105" strokeWidth={2.3}/>
                                </div>
                            </button>

                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="xl:hidden"
                        >
                            {isMenuOpen ? (
                                <X className="w-8 h-8 text-black" strokeWidth={1.5}/>
                            ) : (
                                <Menu className="w-8 h-8 text-black" strokeWidth={1.5}/>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 xl:hidden">
                    {/* Backdrop with fade animation */}
                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-fade-in"
                        onClick={toggleMobileMenu}
                    />

                    {/* Menu Panel */}
                    <div className="relative h-full bg-white flex flex-col animate-slide-in-right">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between h-[70px] lg:h-[85px] px-6 animate-fade-in-delay-100">
                            <div className="flex-shrink-0">
                                <Link to="/" className="block">
                                    <img
                                        src="/assets/images/header/navbarlogoblack.png"
                                        alt="Nextgency Logo"
                                        className="h-6 w-auto object-contain"
                                    />
                                </Link>
                            </div>
                            <button
                                onClick={toggleMobileMenu}
                                className="mr-1 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                            >
                                <X className="w-6 h-6 text-black" />
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="flex-1 overflow-y-auto px-6 pt-4">
                            <nav className="space-y-10">
                                {navigationItems.map((item, index) => (
                                    <div
                                        key={item.key}
                                        className="animate-fade-in-up"
                                        style={{
                                            animationDelay: `${150 + index * 100}ms`,
                                            animationFillMode: 'both'
                                        }}
                                    >
                                        {item.dropdown ? (
                                            <div className="space-y-0">
                                                <button
                                                    onClick={item.key === 'services' ? toggleServiceDropdown : toggleProjectDropdown}
                                                    className={`w-full flex items-center justify-between px-2 border-l-2 border-black text-left text-[14px] font-medium transition-all duration-300 ${
                                                        isActiveRoute(item.path)
                                                            ? ' '
                                                            : 'text-black '
                                                    }`}
                                                >
                                                    <span>{item.name}</span>
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ease-out ${
                                                        (item.key === 'services' ? isServiceDropdownOpen : isProjectDropdownOpen) ? 'rotate-180' : ''
                                                    }`} />
                                                </button>

                                                {/* Mobile Dropdown with smooth animation */}
                                                <div className={`transition-all duration-[1200ms] ease-out ${
                                                    (item.key === 'services' ? isServiceDropdownOpen : isProjectDropdownOpen)
                                                        ? 'max-h-[500px] opacity-100 mt-4 transform translate-y-0'
                                                        : 'max-h-0 opacity-0 mt-0 transform -translate-y-2'
                                                } overflow-hidden`}>
                                                    <div className="pt-6 px-2 rounded-3xl ">
                                                        <div className="space-y-2">
                                                            {item.key === 'services' ? (
                                                                <>
                                                                    {/* Services mobile dropdown */}
                                                                    <div className="grid grid-cols-2 gap-2">
                                                                        <Link
                                                                            to="/services/ai-data"
                                                                            className={`flex items-center space-x-2 px-3 py-2 rounded-3xl text-[13px] border border-[#111111] transition-all duration-200 ${
                                                                                isActiveRoute('/services/ai-data')
                                                                                    ? 'text-white bg-black hover:bg-black '
                                                                                    : 'text-black hover:bg-white '
                                                                            }`}
                                                                        >
                                                                            <Bot className="w-3 h-3 flex-shrink-0" />
                                                                            <span className="truncate">{t('nav.servicesMenu.aiDataShort')}</span>
                                                                        </Link>
                                                                        <Link
                                                                            to="/services/google-ads"
                                                                            className={`flex items-center space-x-2 px-3 py-2 rounded-3xl text-[13px] border border-[#111111] transition-all duration-200 ${
                                                                                isActiveRoute('/services/google-ads')
                                                                                    ? 'text-white bg-black hover:bg-black '
                                                                                    : 'text-black hover:bg-white '
                                                                            }`}
                                                                        >
                                                                            <Target className="w-3 h-3 flex-shrink-0" />
                                                                            <span className="truncate">{t('nav.servicesMenu.googleAds')}</span>
                                                                        </Link>
                                                                    </div>

                                                                    <div className="grid grid-cols-2 gap-3">
                                                                        <Link
                                                                            to="/services/facebook-ads"
                                                                            className={`flex items-center space-x-2 px-3 py-2 rounded-3xl text-[13px] border border-[#111111] transition-all duration-200 ${
                                                                                isActiveRoute('/services/facebook-ads')
                                                                                    ? 'text-white bg-black hover:bg-black '
                                                                                    : 'text-black hover:bg-white '
                                                                            }`}
                                                                        >
                                                                            <Smartphone className="w-3 h-3 flex-shrink-0" />
                                                                            <span className="truncate">{t('nav.servicesMenu.facebookAds')}</span>
                                                                        </Link>
                                                                        <Link
                                                                            to="/services/tiktok-ads"
                                                                            className={`flex items-center space-x-2 px-3 py-2 rounded-3xl text-[13px] border border-[#111111] transition-all duration-200 ${
                                                                                isActiveRoute('/services/tiktok-ads')
                                                                                    ? 'text-white bg-black hover:bg-black '
                                                                                    : 'text-black hover:bg-white '
                                                                            }`}
                                                                        >
                                                                            <Music className="w-3 h-3 flex-shrink-0" />
                                                                            <span className="truncate">{t('nav.servicesMenu.tiktokAds')}</span>
                                                                        </Link>
                                                                    </div>

                                                                    <div className="grid grid-cols-2 gap-3">
                                                                        <Link
                                                                            to="/services/facebook-crm"
                                                                            className={`flex items-center space-x-2 px-3 py-2 rounded-3xl text-[13px] border border-[#111111] transition-all duration-200 ${
                                                                                isActiveRoute('/services/facebook-crm')
                                                                                    ? 'text-white bg-black hover:bg-black '
                                                                                    : 'text-black hover:bg-white '
                                                                            }`}
                                                                        >
                                                                            <Users className="w-3 h-3 flex-shrink-0" />
                                                                            <span>{t('nav.servicesMenu.facebookCrmShort')}</span>
                                                                        </Link>
                                                                        <Link
                                                                            to="/services/tick-xanh-facebook"
                                                                            className={`flex items-center space-x-2 px-3 py-2 rounded-3xl text-[13px] border border-[#111111] transition-all duration-200 ${
                                                                                isActiveRoute('/services/tick-xanh-facebook')
                                                                                    ? 'text-white bg-black hover:bg-black '
                                                                                    : 'text-black hover:bg-white '
                                                                            }`}
                                                                        >
                                                                            <CheckCircle className="w-3 h-3 flex-shrink-0" />
                                                                            <span className="truncate">{t('nav.servicesMenu.tickXanhShort')}</span>
                                                                        </Link>
                                                                    </div>

                                                                    <div className="space-y-2">
                                                                        <Link
                                                                            to="/services/website-landing-page"
                                                                            className={`flex items-center space-x-2 px-3 py-2 rounded-3xl text-[13px] border border-[#111111] transition-all duration-200 ${
                                                                                isActiveRoute('/services/website-landing-page')
                                                                                    ? 'text-white bg-black hover:bg-black '
                                                                                    : 'text-black hover:bg-white '
                                                                            }`}
                                                                        >
                                                                            <Globe className="w-3 h-3 flex-shrink-0" />
                                                                            <span>{t('nav.servicesMenu.websiteLanding')}</span>
                                                                        </Link>
                                                                        <Link
                                                                            to="/services/marketing-outsource"
                                                                            className={`flex items-center space-x-2 px-3 py-2 rounded-3xl text-[13px] border border-[#111111] transition-all duration-200 ${
                                                                                isActiveRoute('/services/marketing-outsource')
                                                                                    ? 'text-white bg-black hover:bg-black '
                                                                                    : 'text-black hover:bg-white '
                                                                            }`}
                                                                        >
                                                                            <BarChart3 className="w-3 h-3 flex-shrink-0" />
                                                                            <span>{t('nav.servicesMenu.marketingOutsourceShort')}</span>
                                                                        </Link>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    {/* Projects mobile dropdown */}
                                                                    <div className="space-y-2">
                                                                        <Link
                                                                            to="/projects/all"
                                                                            className={`flex items-center space-x-2 px-3 py-2 rounded-3xl text-[13px] border border-[#111111] transition-all duration-200 ${
                                                                                isActiveRoute('/projects/all')
                                                                                    ? 'text-white bg-black hover:bg-black '
                                                                                    : 'text-black hover:bg-white '
                                                                            }`}
                                                                        >
                                                                            <FolderOpen className="w-3 h-3 flex-shrink-0" />
                                                                            <span>{t('nav.projectsMenu.all')}</span>
                                                                        </Link>
                                                                        <Link
                                                                            to="/projects/portfolio"
                                                                            className={`flex items-center space-x-2 px-3 py-2 rounded-3xl text-[13px] border border-[#111111] transition-all duration-200 ${
                                                                                isActiveRoute('/projects/portfolio')
                                                                                    ? 'text-white bg-black hover:bg-black '
                                                                                    : 'text-black hover:bg-white '
                                                                            }`}
                                                                        >
                                                                            <FileText className="w-3 h-3 flex-shrink-0" />
                                                                            <span>{t('nav.projectsMenu.portfolio')}</span>
                                                                        </Link>
                                                                        <Link
                                                                            to="/projects/workflow"
                                                                            className={`flex items-center space-x-2 px-3 py-2 rounded-3xl text-[13px] border border-[#111111] transition-all duration-200 ${
                                                                                isActiveRoute('/projects/workflow')
                                                                                    ? 'text-white bg-black hover:bg-black '
                                                                                    : 'text-black hover:bg-white '
                                                                            }`}
                                                                        >
                                                                            <FileText className="w-3 h-3 flex-shrink-0" />
                                                                            <span>{t('nav.projectsMenu.workflow')}</span>
                                                                        </Link>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className={`block px-2 border-l-2 border-black text-[14px] font-medium transition-all duration-200  ${
                                                    isActiveRoute(item.path)
                                                        ? ''
                                                        : 'text-black '
                                                }`}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* Chọn ngôn ngữ - bản mobile */}
                            <div className="mt-10 animate-fade-in-up" style={{
                                animationDelay: `${150 + navigationItems.length * 100}ms`,
                                animationFillMode: 'both'
                            }}>
                                <p className="mb-2 px-2 text-[11px] font-medium uppercase tracking-widest text-gray-500">
                                    {t('language.label')}
                                </p>
                                <LanguageSwitcher variant="mobile" />
                            </div>

                            {/* Mobile CTA Button */}
                            <div className="relative flex items-center justify-center mt-8 mb-6 animate-fade-in-up" style={{
                                animationDelay: `${150 + navigationItems.length * 100 + 100}ms`,
                                animationFillMode: 'both'
                            }}>
                                <button
                                    onClick={() => setIsPopupOpen(true)}
                                    className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#2B144D] via-[#c08dfe] to-[#2B144D] text-[15px] text-white rounded-full font-medium transition-all duration-300 animate-gradient-shift"
                                    style={{
                                        backgroundSize: '200% 100%'
                                    }}
                                >
                                    <span className="relative z-10">{t('nav.cta')}</span>
                                    <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center neu-shadow-xs relative z-10">
                                        <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 hover:rotate-45" strokeWidth={2.3}/>
                                    </div>

                                    {/* Gradient overlay for extra shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-shimmer opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* CSS Animations - Thêm vào file CSS hoặc styled-components */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slide-in-right {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes gradient-shift {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }

                .animate-slide-in-right {
                    animation: slide-in-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    opacity: 0;
                }

                .animate-fade-in-delay-100 {
                    animation: fade-in-up 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s both;
                }

                .animate-gradient-shift {
                    animation: gradient-shift 3s ease-in-out infinite;
                }

                .animate-shimmer {
                    animation: shimmer 2s ease-in-out infinite;
                }
            `}</style>
            {/* Popup */}
            <ConsultationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </>
    );
};

export default Header;