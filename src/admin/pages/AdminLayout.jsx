// src/admin/pages/AdminLayout.jsx - thanh trên cùng + thông báo đang lưu kiểu gì
import {NavLink, useLocation} from 'react-router-dom';
import {BookOpen, ExternalLink, FolderKanban, LogOut, Newspaper} from 'lucide-react';
import {useAdmin} from '../context.js';
import {Notice} from '../components/ui.jsx';

const navClass = ({isActive}) =>
    `inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition ${
        isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'
    }`;

const StorageNotice = () => {
    const {session} = useAdmin();
    if (session.storageError) return <Notice tone="error">{session.storageError}</Notice>;
    if (session.storage?.mode === 'github') {
        return (
            <Notice tone="info">
                Mỗi lần lưu sẽ tạo một commit lên GitHub (<b>{session.storage.repo}</b>, nhánh <b>{session.storage.branch}</b>).
                Website tự cập nhật sau khi Vercel build xong, thường mất 1-2 phút.
            </Notice>
        );
    }
    return (
        <Notice tone="warning">
            Đang chạy trên máy (local): nội dung được ghi thẳng vào thư mục <code>src/content</code> của dự án. Nhớ commit
            và push để đưa lên website.
        </Notice>
    );
};

const AdminLayout = ({children}) => {
    const {session, logout} = useAdmin();
    const {pathname} = useLocation();

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
                    <a href="/admin" className="mr-2 flex items-center gap-2.5">
                        <img src="/assets/images/brand/activate-mark.svg" alt="" className="h-8 w-8 rounded-lg" />
                        <span className="font-bold">Activate Admin</span>
                    </a>
                    <nav className="flex gap-1">
                        <NavLink to="/admin/news" className={navClass}>
                            <Newspaper className="h-4 w-4" />
                            Tin tức
                        </NavLink>
                        <NavLink to="/admin/projects" className={navClass}>
                            <FolderKanban className="h-4 w-4" />
                            Dự án
                        </NavLink>
                        <NavLink to="/admin/docs" className={navClass}>
                            <BookOpen className="h-4 w-4" />
                            Hướng dẫn
                        </NavLink>
                    </nav>
                    <div className="ml-auto flex items-center gap-2">
                        <a href="/" target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 sm:inline-flex">
                            <ExternalLink className="h-4 w-4" />
                            Xem website
                        </a>
                        <span className="hidden text-sm text-slate-500 md:inline">{session.email}</span>
                        <button type="button" onClick={logout} className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100">
                            <LogOut className="h-4 w-4" />
                            Đăng xuất
                        </button>
                    </div>
                </div>
            </header>
            <main className="mx-auto max-w-[1600px] space-y-6 px-4 py-6 sm:px-6 sm:py-8">
                {!pathname.startsWith('/admin/docs') && <StorageNotice />}
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
