// src/admin/pages/NewsEditAdmin.jsx - viết bài mới / sửa bài viết
import {lazy, Suspense, useMemo, useState} from 'react';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import {ArrowLeft, ExternalLink, Loader2, Save} from 'lucide-react';
import {slugify} from '../../utils/slugify.js';
import {adminApi} from '../api.js';
import {filesToCommit} from '../imageUpload.js';
import {useAdmin, useContentList} from '../context.js';
import {confirmLeave, useUnsavedWarning} from '../useUnsavedWarning.js';
import {Button, Card, Field, Notice, StatusSelect, TagInput, TextArea, TextInput} from '../components/ui.jsx';
import {ImageField} from '../components/ImageFields.jsx';

// Trình soạn thảo khá nặng - chỉ tải khi mở trang soạn bài
const MarkdownEditor = lazy(() => import('../components/MarkdownEditor.jsx'));

const today = () => {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
};

const blankNews = () => ({
    title: '',
    slug: '',
    description: '',
    thumbnail: '',
    date: today(),
    status: 'published',
    categories: [],
    tags: [],
    content: ''
});

const NewsForm = ({initial, isNew, allItems}) => {
    const {session, upsertItem} = useAdmin();
    const navigate = useNavigate();
    const location = useLocation();

    const {content: initialContent, ...initialMeta} = initial;
    const [form, setForm] = useState(initialMeta);
    const [content, setContent] = useState(initialContent || '');
    const [slugTouched, setSlugTouched] = useState(!isNew);
    const [staged, setStaged] = useState([]);
    const [dirty, setDirty] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState(location.state?.savedMessage || '');
    useUnsavedWarning(dirty);

    const update = (field, value) => {
        setForm((current) => {
            const next = {...current, [field]: value};
            // Slug tự theo tiêu đề cho tới khi người dùng tự sửa slug
            if (field === 'title' && !slugTouched) next.slug = slugify(value);
            return next;
        });
        setDirty(true);
        setMessage('');
    };

    const onUploaded = (file) => setStaged((current) => [...current, file]);

    const suggestions = useMemo(() => {
        const categories = new Set();
        const tags = new Set();
        allItems.forEach((item) => {
            (item.categories || []).forEach((category) => categories.add(category));
            (item.tags || []).forEach((tag) => tags.add(tag));
        });
        return {categories: [...categories], tags: [...tags]};
    }, [allItems]);

    const save = async () => {
        setSaving(true);
        setError('');
        setMessage('');
        try {
            const result = await adminApi.save({
                type: 'news',
                isNew,
                item: form,
                content,
                files: filesToCommit(staged, content, form)
            });
            upsertItem('news', result.item);
            setStaged([]);
            setDirty(false);
            const savedMessage =
                session.storage?.mode === 'github'
                    ? 'Đã lưu và commit lên GitHub. Website sẽ cập nhật sau khoảng 1-2 phút.'
                    : `Đã lưu vào src/content/news/${result.item.id}.json và .md.`;
            if (isNew) {
                navigate(`/admin/news/${result.item.id}`, {replace: true, state: {savedMessage}});
            } else {
                setForm((current) => ({...current, slug: result.item.slug}));
                setMessage(savedMessage);
            }
        } catch (saveError) {
            setError(saveError.message);
        } finally {
            setSaving(false);
        }
    };

    const publicUrl = !isNew ? `/news/${form.slug}-${form.id}` : null;

    return (
        <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <Link to="/admin/news" onClick={(event) => !confirmLeave(dirty) && event.preventDefault()} className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-indigo-600">
                    <ArrowLeft className="h-4 w-4" />
                    Danh sách bài viết
                </Link>
                <div className="flex items-center gap-2">
                    {dirty && <span className="text-sm text-amber-600">Chưa lưu</span>}
                    {publicUrl && (
                        <a href={publicUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-100">
                            <ExternalLink className="h-4 w-4" />
                            Xem bài
                        </a>
                    )}
                    <Button onClick={save} disabled={saving}>
                        {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                        {isNew ? 'Đăng bài' : 'Lưu thay đổi'}
                    </Button>
                </div>
            </div>

            {error && <Notice tone="error">{error}</Notice>}
            {message && <Notice tone="success">{message}</Notice>}

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
                <div className="space-y-5">
                    <Card>
                        <Field label="Tiêu đề" required>
                            <TextInput value={form.title} onChange={(value) => update('title', value)} placeholder="Tiêu đề bài viết" />
                        </Field>
                        <Field label="Mô tả ngắn" hint="Hiện ở danh sách tin tức và dùng làm mô tả SEO. Nên dưới 160 ký tự.">
                            <TextArea value={form.description} onChange={(value) => update('description', value)} rows={2} />
                        </Field>
                    </Card>

                    <Card title="Nội dung bài viết" description="Định dạng bằng thanh công cụ, hoặc gõ tắt như markdown: ## tiêu đề, - gạch đầu dòng, **in đậm**.">
                        <Suspense fallback={<div className="flex justify-center py-16 text-slate-400"><Loader2 className="h-6 w-6 animate-spin" /></div>}>
                            <MarkdownEditor
                                markdown={initialContent || ''}
                                onChange={(value) => {
                                    setContent(value);
                                    setDirty(true);
                                    setMessage('');
                                }}
                                folder="news"
                                onUploaded={onUploaded}
                            />
                        </Suspense>
                    </Card>
                </div>

                <div className="space-y-5">
                    <Card title="Xuất bản">
                        <Field label="Trạng thái">
                            <StatusSelect value={form.status} onChange={(value) => update('status', value)} />
                        </Field>
                        <Field label="Ngày đăng" hint="Bài mới hơn hiện lên trước.">
                            <TextInput type="date" value={form.date} onChange={(value) => update('date', value)} />
                        </Field>
                        <Field label="Đường dẫn (slug)" hint={`Địa chỉ bài: /news/${form.slug || '...'}-${isNew ? '<mã>' : form.id}`}>
                            <TextInput
                                value={form.slug}
                                onChange={(value) => {
                                    setSlugTouched(true);
                                    update('slug', slugify(value) || value);
                                }}
                            />
                        </Field>
                    </Card>

                    <Card title="Ảnh đại diện">
                        <ImageField value={form.thumbnail} onChange={(value) => update('thumbnail', value)} folder="news" onUploaded={onUploaded} />
                    </Card>

                    <Card title="Phân loại">
                        <Field label="Danh mục" hint="Enter hoặc dấu phẩy để thêm." group>
                            <TagInput value={form.categories} onChange={(value) => update('categories', value)} suggestions={suggestions.categories} placeholder="VD: Marketing" />
                        </Field>
                        <Field label="Tag" group>
                            <TagInput value={form.tags} onChange={(value) => update('tags', value)} suggestions={suggestions.tags} placeholder="VD: AI" />
                        </Field>
                    </Card>
                </div>
            </div>
        </div>
    );
};

const NewsEditAdmin = () => {
    const {id} = useParams();
    const {items, error} = useContentList('news');
    const isNew = !id;

    if (error) return <Notice tone="error">{error}</Notice>;
    if (!items) {
        return (
            <div className="flex justify-center py-16 text-slate-400">
                <Loader2 className="h-6 w-6 animate-spin" />
            </div>
        );
    }

    const item = isNew ? blankNews() : items.find((entry) => String(entry.id) === id);
    if (!item) return <Notice tone="error">Không tìm thấy bài viết #{id}.</Notice>;

    // key: đổi bài (hoặc vừa tạo xong) thì dựng lại form + trình soạn thảo
    return <NewsForm key={id || 'new'} initial={item} isNew={isNew} allItems={items} />;
};

export default NewsEditAdmin;
