// App.jsx - routing đa ngôn ngữ + Header/Footer có điều kiện
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from "./components/Footer.jsx";
import PageTransition from './components/PageTransition';
import { usePageTransition } from './hooks/usePageTransition';
import About from "./pages/About.jsx";
import FieldsOverview from "./pages/fields/FieldsOverview.jsx";
import FieldDetailPage from "./pages/fields/FieldDetailPage.jsx";
import { BUSINESS_FIELDS, FIELDS_OVERVIEW_PATH } from "./data/businessFields.js";
import { useSEO } from './hooks/useSEO';
import NewsListPage from "./pages/news/NewsListPage.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import TiktokVerification from "./pages/TiktokVerification.jsx";
import NewsDetailPage from "./pages/news/NewsDetailPage.jsx";
import RouteSEO from "./components/SEO/RouteSEO.jsx";
import NotFound from "./pages/NotFound.jsx";
import { LanguageProvider, getLocalePrefix, stripLocaleFromPath, useI18n } from './i18n';

// Trang quản trị nội dung - nạp riêng khi mở /admin để không làm nặng website
const AdminApp = lazy(() => import('./admin/AdminApp.jsx'));

// Landing page tự mang header/footer riêng - ẩn header/footer chung của site.
// So khớp với đường dẫn ĐÃ bỏ prefix ngôn ngữ, nên /en/... cũng được tính là standalone.
const STANDALONE_PATHS = ['/tiktok-verification/'];

// Router Content Component
const RouterContent = () => {
    const location = useLocation();
    const { locale } = useI18n();
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

                    {/* Lĩnh vực hoạt động: trang tổng quan + mỗi lĩnh vực một trang */}
                    <Route path={routePath(FIELDS_OVERVIEW_PATH)} element={<FieldsOverview />} />
                    {BUSINESS_FIELDS.map((field) => (
                        <Route key={field.key} path={routePath(field.path)} element={<FieldDetailPage fieldKey={field.key} />} />
                    ))}

                    <Route path={routePath('/news')} element={<NewsListPage />} />
                    <Route path={routePath('/news/:slug')} element={<NewsDetailPage />} />
                    <Route path={routePath('/contact')} element={<Contact />} />
                    <Route path={routePath('/chinh-sach-bao-mat')} element={<PrivacyPolicyPage />} />
                    <Route path={routePath('/tiktok-verification/')} element={<TiktokVerification />} />

                    {/* Các trang dịch vụ agency, dự án, /ai, /dat-lich cũ đã gỡ khỏi routing - URL cũ rơi vào 404 */}
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
                logoSrc="/assets/images/brand/activate-mark.svg"
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
