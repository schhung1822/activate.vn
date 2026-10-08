// src/admin/AdminApp.jsx
//
// Trang quản trị nội dung /admin: đăng tin tức và dự án mà không cần sửa code.
// Được nạp lười (React.lazy) từ App.jsx nên trình soạn thảo không làm nặng website.
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Loader2} from 'lucide-react';
import {adminApi} from './api.js';
import {AdminContext} from './context.js';
import AdminLayout from './pages/AdminLayout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import NewsListAdmin from './pages/NewsListAdmin.jsx';
import NewsEditAdmin from './pages/NewsEditAdmin.jsx';
import ProjectListAdmin from './pages/ProjectListAdmin.jsx';
import ProjectEditAdmin from './pages/ProjectEditAdmin.jsx';
import DocsAdmin from './pages/DocsAdmin.jsx';
import './admin.css';

/** Chặn công cụ tìm kiếm index trang admin (robots.txt đã Disallow, đây là lớp thứ hai). */
const useNoIndex = () => {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = 'Quản trị nội dung | Activate';
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'noindex, nofollow';
        document.head.appendChild(meta);
        return () => {
            document.title = previousTitle;
            meta.remove();
        };
    }, []);
};

const AdminApp = () => {
    useNoIndex();
    const [session, setSession] = useState(null);
    const [sessionError, setSessionError] = useState('');
    const [lists, setLists] = useState({news: null, projects: null});
    const [listErrors, setListErrors] = useState({});

    const refreshSession = useCallback(async () => {
        try {
            setSession(await adminApi.session());
            setSessionError('');
        } catch (error) {
            setSessionError(error.message);
        }
    }, []);

    useEffect(() => {
        refreshSession();
        const onUnauthorized = () => setSession((current) => (current ? {...current, authenticated: false} : current));
        window.addEventListener('nextgency-admin:unauthorized', onUnauthorized);
        return () => window.removeEventListener('nextgency-admin:unauthorized', onUnauthorized);
    }, [refreshSession]);

    // Danh sách đã tải (hoặc đang tải) - giữ trong ref để loadList không phải đổi theo state
    const loadedRef = useRef(new Set());

    const loadList = useCallback(async (type, {force = false} = {}) => {
        if (loadedRef.current.has(type) && !force) return;
        loadedRef.current.add(type);

        try {
            const items = await adminApi.list(type);
            setLists((current) => ({...current, [type]: items}));
            setListErrors((current) => ({...current, [type]: ''}));
        } catch (error) {
            loadedRef.current.delete(type);
            setListErrors((current) => ({...current, [type]: error.message}));
        }
    }, []);

    // Cập nhật danh sách tại chỗ sau khi lưu/xoá, không cần tải lại
    const upsertItem = useCallback((type, item) => {
        setLists((current) => {
            if (!current[type]) return current;
            const exists = current[type].some((entry) => entry.id === item.id);
            return {
                ...current,
                [type]: exists ? current[type].map((entry) => (entry.id === item.id ? item : entry)) : [item, ...current[type]]
            };
        });
    }, []);

    const removeItem = useCallback((type, id) => {
        setLists((current) =>
            current[type] ? {...current, [type]: current[type].filter((entry) => entry.id !== id)} : current
        );
    }, []);

    const logout = useCallback(async () => {
        await adminApi.logout().catch(() => {});
        loadedRef.current.clear();
        setLists({news: null, projects: null});
        setSession((current) => ({...current, authenticated: false}));
    }, []);

    const contextValue = useMemo(
        () => ({session, lists, listErrors, loadList, upsertItem, removeItem, logout}),
        [session, lists, listErrors, loadList, upsertItem, removeItem, logout]
    );

    if (!session) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-500">
                {sessionError ? (
                    <div className="text-center">
                        <p className="text-rose-600">{sessionError}</p>
                        <button type="button" onClick={refreshSession} className="mt-3 text-sm font-semibold text-indigo-600">
                            Thử lại
                        </button>
                    </div>
                ) : (
                    <Loader2 className="h-6 w-6 animate-spin" />
                )}
            </div>
        );
    }

    if (!session.authenticated) {
        return <LoginPage configured={session.configured} onLoggedIn={refreshSession} />;
    }

    return (
        <AdminContext.Provider value={contextValue}>
            <AdminLayout>
                <Routes>
                    <Route index element={<Navigate to="news" replace />} />
                    <Route path="news" element={<NewsListAdmin />} />
                    <Route path="news/new" element={<NewsEditAdmin />} />
                    <Route path="news/:id" element={<NewsEditAdmin />} />
                    <Route path="projects" element={<ProjectListAdmin />} />
                    <Route path="projects/new" element={<ProjectEditAdmin />} />
                    <Route path="projects/:id" element={<ProjectEditAdmin />} />
                    <Route path="docs" element={<Navigate to="huong-dan" replace />} />
                    <Route path="docs/:doc" element={<DocsAdmin />} />
                    <Route path="*" element={<Navigate to="news" replace />} />
                </Routes>
            </AdminLayout>
        </AdminContext.Provider>
    );
};

export default AdminApp;
