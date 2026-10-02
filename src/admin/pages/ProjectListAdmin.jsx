// src/admin/pages/ProjectListAdmin.jsx - danh sách dự án (theo thứ tự hiển thị)
import {useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import {ExternalLink, Loader2, Pencil, Plus, Search, Trash2} from 'lucide-react';
import {adminApi} from '../api.js';
import {previewSrc} from '../imageUpload.js';
import {useAdmin, useContentList} from '../context.js';
import {ButtonLink, inputClass, Notice, StatusBadge} from '../components/ui.jsx';

const ProjectListAdmin = () => {
    const {items, error, reload} = useContentList('projects');
    const {removeItem} = useAdmin();
    const [query, setQuery] = useState('');
    const [deleting, setDeleting] = useState(null);
    const [deleteError, setDeleteError] = useState('');

    const filtered = useMemo(() => {
        if (!items) return [];
        const sorted = [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        const keyword = query.trim().toLowerCase();
        if (!keyword) return sorted;
        return sorted.filter((item) =>
            [item.id, item.partner, item.content?.vi?.name, item.content?.vi?.summary, ...(item.category || [])]
                .join(' ')
                .toLowerCase()
                .includes(keyword)
        );
    }, [items, query]);

    const handleDelete = async (item) => {
        const name = item.content?.vi?.name || item.id;
        if (!window.confirm(`Xoá dự án "${name}"? Trang /projects/${item.id} sẽ không còn truy cập được.`)) return;
        setDeleting(item.id);
        setDeleteError('');
        try {
            await adminApi.remove('projects', item.id);
            removeItem('projects', item.id);
        } catch (removeError) {
            setDeleteError(removeError.message);
        } finally {
            setDeleting(null);
        }
    };

    return (
        <div className="space-y-5">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Dự án</h1>
                    <p className="mt-1 text-sm text-slate-500">
                        {items ? `${items.length} dự án - sắp theo "Thứ tự hiển thị"` : 'Đang tải...'}
                    </p>
                </div>
                <ButtonLink to="/admin/projects/new">
                    <Plus className="h-4 w-4" />
                    Thêm dự án
                </ButtonLink>
            </div>

            <div className="relative">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm theo tên, đối tác, danh mục..." className={`${inputClass} pl-10`} />
            </div>

            {error && (
                <Notice tone="error">
                    {error}{' '}
                    <button type="button" onClick={reload} className="font-semibold underline">
                        Tải lại
                    </button>
                </Notice>
            )}
            {deleteError && <Notice tone="error">{deleteError}</Notice>}

            {!items && !error && (
                <div className="flex justify-center py-16 text-slate-400">
                    <Loader2 className="h-6 w-6 animate-spin" />
                </div>
            )}

            {items && (
                <ul className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    {filtered.map((item) => (
                        <li key={item.id} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                            <span className="hidden w-8 shrink-0 text-center text-sm font-semibold text-slate-400 sm:block">{item.order}</span>
                            {item.slides?.[0] ? (
                                <img src={previewSrc(item.slides[0])} alt="" className="aspect-[16/10] w-full shrink-0 rounded-lg object-cover sm:w-32" />
                            ) : (
                                <div className="aspect-[16/10] w-full shrink-0 rounded-lg bg-slate-100 sm:w-32" />
                            )}
                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                    <StatusBadge status={item.status} />
                                    <span className="text-xs text-slate-500">{item.date}</span>
                                    {item.partner && <span className="text-xs text-slate-500">· {item.partner}</span>}
                                </div>
                                <Link to={`/admin/projects/${item.id}`} className="mt-1.5 block font-semibold text-slate-900 hover:text-indigo-600">
                                    {item.content?.vi?.name || item.id}
                                </Link>
                                <p className="mt-0.5 line-clamp-1 text-sm text-slate-500">{item.content?.vi?.summary}</p>
                            </div>
                            <div className="flex shrink-0 gap-1">
                                <Link to={`/admin/projects/${item.id}`} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-indigo-600" title="Sửa">
                                    <Pencil className="h-4 w-4" />
                                </Link>
                                <a href={`/projects/${item.id}`} target="_blank" rel="noreferrer" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-indigo-600" title="Xem trên website">
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                                <button type="button" onClick={() => handleDelete(item)} disabled={deleting === item.id} className="rounded-lg p-2 text-slate-500 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50" title="Xoá">
                                    {deleting === item.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                                </button>
                            </div>
                        </li>
                    ))}
                    {filtered.length === 0 && <li className="p-10 text-center text-sm text-slate-500">Không có dự án phù hợp.</li>}
                </ul>
            )}
        </div>
    );
};

export default ProjectListAdmin;
