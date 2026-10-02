// App.jsx - routing đa ngôn ngữ + Header/Footer có điều kiện
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from "./components/Footer.jsx";
import WebsiteLandingPage from "./pages/services/WebsiteLandingPage.jsx";
import AiData from "./pages/services/AiData.jsx";
import ToolContentAI from "./pages/services/ToolContentAI.jsx";
import GoogleAds from "./pages/services/GoogleAds.jsx";
import PageTransition from './components/PageTransition';
import { usePageTransition } from './hooks/usePageTransition';
import FacebookAds from "./pages/services/FacebookAds.jsx";
import TiktokAds from "./pages/services/TiktokAds.jsx";
import FacebookCrm from "./pages/services/FacebookCrm.jsx";
import MarketingOutsource from "./pages/services/MarketingOutsource.jsx";
import About from "./pages/About.jsx";
import Tick from "./pages/services/Tick.jsx";
import { useSEO } from './hooks/useSEO';
import NewsListPage from "./pages/news/NewsListPage.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Portfolio from "./pages/projects/Portfolio.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import TiktokVerification from "./pages/TiktokVerification.jsx";
import WorkflowAutomation from "./pages/projects/WorkflowAutomation.jsx";
import ProjectDetail from "./pages/projects/ProjectDetail.jsx";
import NewsDetailPage from "./pages/news/NewsDetailPage.jsx";
import MiniAppBeautyVerse from "./pages/projects/MiniAppBeautyVerse.jsx";
import RouteSEO from "./components/SEO/RouteSEO.jsx";
import DatLich from "./pages/DatLich.jsx";
import NotFound from "./pages/NotFound.jsx";
import { LanguageProvider, getLocalePrefix, stripLocaleFromPath, useI18n } from './i18n';

// Trang quản trị nội dung - nạp riêng khi mở /admin để không làm nặng website
const AdminApp = lazy(() => import('./admin/AdminApp.jsx'));

// Landing page tự mang header/footer riêng - ẩn header/footer chung của site.
// So khớp với đường dẫn ĐÃ bỏ prefix ngôn ngữ, nên /en/dat-lich cũng được tính là standalone.
const STANDALONE_PATHS = ['/tiktok-verification/', '/dat-lich'];

// Router Content Component
const RouterContent = () => {
    const location = useLocation();
    const { locale, localePath } = useI18n();
    const {
        isTransitioning,
        handleTransitionComplete
    } = usePageTransition();

    // Initialize SEO hooks
    useSEO();

    // Mọi route được khai báo một lần rồi tự gắn prefix của ngôn ngữ đang xem:
    // '/about' -> '/about' | '/en/about' | '/cn/about'
    const prefix = getLocalePrefix(locale);
    const routePath = (path) => (path === '/' ? prefix || '/' : `${prefix}${path}`);

    // Trang standalone (TiktokVerification, landing đặt lịch) tự lo header/footer
    const isStandalonePage = STANDALONE_PATHS.includes(stripLocaleFromPath(location.pathname));

    // /admin có giao diện riêng hoàn toàn (không header/footer, không SEO, không đa ngôn ngữ)
    if (location.pathname === '/admin' || location.pathname.startsWith('/admin/')) {
        return (
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/admin/*" element={<AdminApp />} />
                </Routes>
            </Suspense>
        );
    }

    return (
        <div className="App min-h-screen flex flex-col">
            {/* Meta mặc định theo pathname - trang nào tự gắn SEOManager sẽ ghi đè */}
            <RouteSEO />

            {/* Chỉ hiển thị Header nếu không phải trang standalone */}
            {!isStandalonePage && <Header />}

            <main className={!isStandalonePage ? "page-content flex-1 pt-[70px] lg:pt-[85px]" : "flex-1"}>
                <Routes>
                    {/* Trang chủ */}
                    <Route path={routePath('/')} element={<Home />} />
                    <Route path={routePath('/about')} element={<About />} />
                    <Route path={routePath('/news')} element={<NewsListPage />} />
                    <Route path={routePath('/contact')} element={<Contact />} />
                    <Route path={routePath('/dat-lich')} element={<DatLich />} />

                    {/* Các trang dịch vụ */}
                    <Route path={routePath('/services/website-landing-page')} element={<WebsiteLandingPage />} />
                    <Route path={routePath('/services/ai-data')} element={<AiData />} />
                    <Route path={routePath('/ai')} element={<ToolContentAI />} />
                    {/* URL cũ của trang Tool Content AI - giữ lại để không gãy link đã chia sẻ */}
                    <Route path={routePath('/services/tool-content-ai')} element={<Navigate to={localePath('/ai')} replace />} />
                    <Route path={routePath('/services/google-ads')} element={<GoogleAds />} />
                    <Route path={routePath('/services/facebook-ads')} element={<FacebookAds />} />
                    <Route path={routePath('/services/tiktok-ads')} element={<TiktokAds />} />
                    <Route path={routePath('/services/facebook-crm')} element={<FacebookCrm />} />
                    <Route path={routePath('/services/marketing-outsource')} element={<MarketingOutsource />} />
                    <Route path={routePath('/services/tick-xanh-facebook')} element={<Tick />} />
                    <Route path={routePath('/chinh-sach-bao-mat')} element={<PrivacyPolicyPage />} />
                    <Route path={routePath('/tiktok-verification/')} element={<TiktokVerification />} />

                    {/* Các trang dự án */}
                    <Route path={routePath('/projects/all')} element={<Projects />} />
                    <Route path={routePath('/projects/portfolio')} element={<Portfolio />} />
                    <Route path={routePath('/projects/workflow')} element={<WorkflowAutomation />} />
                    <Route path={routePath('/miniapp')} element={<MiniAppBeautyVerse />} />
                    <Route path={routePath('/projects/miniapp-beautysummit-2026')} element={<MiniAppBeautyVerse />} />
                    <Route path={routePath('/projects/:slug')} element={<ProjectDetail />} />
                    {/* Trang chi tiết tin tức công nghệ */}
                    <Route path={routePath('/news/:slug')} element={<NewsDetailPage />} />

                    {/* Route không khớp -> trang 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            {/* Chỉ hiển thị Footer nếu không phải trang standalone */}
            {!isStandalonePage && <Footer />}

            {/* Page Transition */}
            <PageTransition
                isTransitioning={isTransitioning}
                onTransitionComplete={handleTransitionComplete}
                logoSrc="/assets/images/header/navbarfavicon.png"
            />
        </div>
    );
};

function App() {
    return (
        <Router>
            {/* Ngôn ngữ đọc từ URL nên phải nằm trong Router và bọc toàn bộ cây component */}
            <LanguageProvider>
                <RouterContent />
            </LanguageProvider>
        </Router>
    );
}

export default App;
