// src/admin/pages/DocsAdmin.jsx - tài liệu hướng dẫn trong trang /admin
//
// Nội dung lấy từ docs/*.md (một nguồn duy nhất, đọc được cả trên GitHub cho người
// tích hợp API không có tài khoản admin).
import {NavLink, Navigate, useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {BookOpen, Code2} from 'lucide-react';
import adminGuide from '../../../docs/huong-dan-admin.md?raw';
import newsApiGuide from '../../../docs/news-api.md?raw';
import {useAdmin} from '../context.js';
import {Notice} from '../components/ui.jsx';

const DOCS = {
    'huong-dan': {label: 'Dùng trang quản trị', icon: BookOpen, content: adminGuide},
    api: {label: 'API đăng tin tức', icon: Code2, content: newsApiGuide}
};

const markdownComponents = {
    // Bảng rộng thì cuộn ngang trong khung, không đẩy cả trang
    table: (props) => (
        <div className="overflow-x-auto">
            <table {...props} />
        </div>
    ),
    a: ({href, ...props}) => (
        <a href={href} {...props} {...(href?.startsWith('http') ? {target: '_blank', rel: 'noreferrer'} : {})} />
    )
};

const tabClass = ({isActive}) =>
    `inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition ${
        isActive ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
    }`;

const ApiStatus = () => {
    const {session} = useAdmin();
    return session.newsApiEnabled ? (
        <Notice tone="success">
            API đang <b>bật</b>. API key nằm trong biến môi trường <code>NEWS_API_KEY</code>; trang này không hiển thị key
            vì lý do bảo mật.
        </Notice>
    ) : (
        <Notice tone="warning">
            API đang <b>tắt</b>. Thêm biến môi trường <code>NEWS_API_KEY</code> (chuỗi ngẫu nhiên ít nhất 20 ký tự) vào
            Vercel (hoặc <code>.env.local</code> khi chạy trên máy) rồi deploy lại.
        </Notice>
    );
};

const DocsAdmin = () => {
    const {doc} = useParams();
    const current = DOCS[doc];
    if (!current) return <Navigate to="/admin/docs/huong-dan" replace />;

    return (
        <div className="space-y-5">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <h1 className="text-2xl font-bold">Hướng dẫn</h1>
                <nav className="flex flex-wrap gap-1 rounded-xl bg-slate-100 p-1">
                    {Object.entries(DOCS).map(([key, item]) => {
                        const Icon = item.icon;
                        return (
                            <NavLink key={key} to={`/admin/docs/${key}`} className={tabClass}>
                                <Icon className="h-4 w-4" />
                                {item.label}
                            </NavLink>
                        );
                    })}
                </nav>
            </div>

            {doc === 'api' && <ApiStatus />}

            <article className="admin-prose admin-doc min-w-0 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                    {current.content}
                </ReactMarkdown>
            </article>
        </div>
    );
};

export default DocsAdmin;
