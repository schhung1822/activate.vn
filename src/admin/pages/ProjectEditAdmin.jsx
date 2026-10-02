// src/admin/pages/ProjectEditAdmin.jsx - thêm / sửa dự án
//
// Một dự án gồm phần chung (ảnh, ngày, đối tác, công nghệ, số liệu) và phần chữ
// cho từng ngôn ngữ. Tiếng Việt bắt buộc; ô tiếng Anh / tiếng Trung để trống thì
// website tự hiển thị bản tiếng Việt.
import {useMemo, useState} from 'react';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import {ArrowLeft, ExternalLink, Loader2, Plus, Save, Trash2} from 'lucide-react';
import {slugify} from '../../utils/slugify.js';
import {adminApi} from '../api.js';
import {filesToCommit} from '../imageUpload.js';
import {useAdmin, useContentList} from '../context.js';
import {confirmLeave, useUnsavedWarning} from '../useUnsavedWarning.js';
import {Button, Card, Field, inputClass, Notice, StatusSelect, TagInput, TextArea, TextInput} from '../components/ui.jsx';
import {ImageListField} from '../components/ImageFields.jsx';

const LOCALES = [
    {code: 'vi', label: 'Tiếng Việt'},
    {code: 'en', label: 'English'},
    {code: 'cn', label: '中文'}
];

const emptyLocale = () => ({name: '', summary: '', description: '', details: [], metrics: []});

const currentMonth = () => {
    const now = new Date();
    return `${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
};

// Chi tiết dự án là danh sách đoạn văn; khi sửa thì gộp thành một ô, mỗi đoạn cách một dòng trống.
const detailsToText = (details) => (Array.isArray(details) ? details.join('\n\n') : '');
const textToDetails = (text) =>
    String(text || '')
        .split(/\n\s*\n/)
        .map((part) => part.trim())
        .filter(Boolean);

const toForm = (project) => ({
    ...project,
    content: Object.fromEntries(
        LOCALES.map(({code}) => {
            const source = {...emptyLocale(), ...(project.content?.[code] || {})};
            return [code, {...source, details: detailsToText(source.details)}];
        })
    )
});

const fromForm = (form) => ({
    ...form,
    content: Object.fromEntries(
        LOCALES.map(({code}) => [code, {...form.content[code], details: textToDetails(form.content[code].details)}])
    )
});

const blankProject = (items) => ({
    id: '',
    status: 'published',
    order: items.reduce((max, item) => Math.max(max, Number(item.order) || 0), 0) + 1,
    date: currentMonth(),
    category: [],
    partner: '',
    technologies: [],
    metrics: [],
    ctaUrl: '',
    videoUrl: '',
    slides: [],
    content: {vi: emptyLocale(), en: emptyLocale(), cn: emptyLocale()}
});

const ProjectForm = ({initial, isNew, allItems}) => {
    const {session, upsertItem} = useAdmin();
    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState(() => toForm(initial));
    const [idTouched, setIdTouched] = useState(!isNew);
    const [locale, setLocale] = useState('vi');
    const [staged, setStaged] = useState([]);
    const [dirty, setDirty] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState(location.state?.savedMessage || '');
    useUnsavedWarning(dirty);

    const touch = () => {
        setDirty(true);
        setMessage('');
    };

    const update = (field, value) => {
        setForm((current) => ({...current, [field]: typeof value === 'function' ? value(current[field]) : value}));
        touch();
    };

    const updateText = (code, field, value) => {
        setForm((current) => {
            const next = {...current, content: {...current.content, [code]: {...current.content[code], [field]: value}}};
            // Mã dự án tự theo tên tiếng Việt cho tới khi được sửa tay
            if (isNew && !idTouched && code === 'vi' && field === 'name') next.id = slugify(value);
            return next;
        });
        touch();
    };

    // ---- Số liệu: giá trị dùng chung, nhãn theo từng ngôn ngữ
    const addMetric = () => {
        setForm((current) => ({
            ...current,
            metrics: [...current.metrics, {value: ''}],
            content: Object.fromEntries(
                LOCALES.map(({code}) => [code, {...current.content[code], metrics: [...current.content[code].metrics, '']}])
            )
        }));
        touch();
    };

    const removeMetric = (index) => {
        setForm((current) => ({
            ...current,
            metrics: current.metrics.filter((_, i) => i !== index),
            content: Object.fromEntries(
                LOCALES.map(({code}) => [code, {...current.content[code], metrics: current.content[code].metrics.filter((_, i) => i !== index)}])
            )
        }));
        touch();
    };

    const setMetricValue = (index, value) =>
        update('metrics', (metrics) => metrics.map((metric, i) => (i === index ? {...metric, value} : metric)));

    const setMetricLabel = (code, index, value) => {
        setForm((current) => {
            const labels = [...current.content[code].metrics];
            labels[index] = value;
            return {...current, content: {...current.content, [code]: {...current.content[code], metrics: labels}}};
        });
        touch();
    };

    const onUploaded = (file) => setStaged((current) => [...current, file]);

    const suggestions = useMemo(() => {
        const categories = new Set();
        const technologies = new Set();
        allItems.forEach((item) => {
            (item.category || []).forEach((category) => categories.add(category));
            (item.technologies || []).forEach((technology) => technologies.add(technology));
        });
        return {categories: [...categories], technologies: [...technologies]};
    }, [allItems]);

    const save = async () => {
        setSaving(true);
        setError('');
        setMessage('');
        try {
            const item = fromForm(form);
            const result = await adminApi.save({type: 'projects', isNew, item, files: filesToCommit(staged, item)});
            upsertItem('projects', result.item);
            setStaged([]);
            setDirty(false);
            const savedMessage =
                session.storage?.mode === 'github'
                    ? 'Đã lưu và commit lên GitHub. Website sẽ cập nhật sau khoảng 1-2 phút.'
                    : `Đã lưu vào src/content/projects/${result.item.id}.json.`;
            if (isNew) {
                navigate(`/admin/projects/${result.item.id}`, {replace: true, state: {savedMessage}});
            } else {
                setMessage(savedMessage);
            }
        } catch (saveError) {
            setError(saveError.message);
        } finally {
            setSaving(false);
        }
    };

    const text = form.content[locale];
    const isFilled = (code) => Boolean(form.content[code].name && form.content[code].summary);

    return (
        <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <Link to="/admin/projects" onClick={(event) => !confirmLeave(dirty) && event.preventDefault()} className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-indigo-600">
                    <ArrowLeft className="h-4 w-4" />
                    Danh sách dự án
                </Link>
                <div className="flex items-center gap-2">
                    {dirty && <span className="text-sm text-amber-600">Chưa lưu</span>}
                    {!isNew && (
                        <a href={`/projects/${form.id}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-100">
                            <ExternalLink className="h-4 w-4" />
                            Xem dự án
                        </a>
                    )}
                    <Button onClick={save} disabled={saving}>
                        {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                        {isNew ? 'Thêm dự án' : 'Lưu thay đổi'}
                    </Button>
                </div>
            </div>

            {error && <Notice tone="error">{error}</Notice>}
            {message && <Notice tone="success">{message}</Notice>}

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
                <div className="space-y-5">
                    <Card
                        title="Nội dung"
                        description="Tiếng Việt là bắt buộc. Ô nào ở tiếng Anh / tiếng Trung để trống, website sẽ hiển thị bản tiếng Việt."
                    >
                        <div className="flex flex-wrap gap-1 rounded-xl bg-slate-100 p-1">
                            {LOCALES.map(({code, label}) => (
                                <button
                                    key={code}
                                    type="button"
                                    onClick={() => setLocale(code)}
                                    className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                                        locale === code ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    {label}
                                    {!isFilled(code) && <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-amber-400 align-middle" title="Chưa nhập đủ" />}
                                </button>
                            ))}
                        </div>

                        <Field label="Tên dự án" required={locale === 'vi'}>
                            <TextInput value={text.name} onChange={(value) => updateText(locale, 'name', value)} placeholder={locale === 'vi' ? '' : form.content.vi.name} />
                        </Field>
                        <Field label="Tóm tắt" hint="Một câu ngắn, hiện trên thẻ dự án.">
                            <TextArea value={text.summary} onChange={(value) => updateText(locale, 'summary', value)} rows={2} placeholder={locale === 'vi' ? '' : form.content.vi.summary} />
                        </Field>
                        <Field label="Mô tả tổng quan" hint="Đoạn giới thiệu đầu trang chi tiết dự án.">
                            <TextArea value={text.description} onChange={(value) => updateText(locale, 'description', value)} rows={5} />
                        </Field>
                        <Field label="Chi tiết triển khai" hint="Mỗi đoạn văn cách nhau bằng một dòng trống.">
                            <TextArea value={text.details} onChange={(value) => updateText(locale, 'details', value)} rows={12} />
                        </Field>
                    </Card>

                    <Card
                        title="Kết quả & số liệu"
                        description="Giá trị (VD: +38%) dùng chung; nhãn được dịch theo tab ngôn ngữ đang chọn ở trên."
                        actions={
                            <Button variant="secondary" onClick={addMetric}>
                                <Plus className="h-4 w-4" />
                                Thêm số liệu
                            </Button>
                        }
                    >
                        {form.metrics.length === 0 && <p className="text-sm text-slate-500">Chưa có số liệu.</p>}
                        {form.metrics.map((metric, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <input value={metric.value} onChange={(event) => setMetricValue(index, event.target.value)} placeholder="+38%" className={`${inputClass} !w-24 shrink-0 sm:!w-32`} aria-label="Giá trị" />
                                <input
                                    value={text.metrics[index] || ''}
                                    onChange={(event) => setMetricLabel(locale, index, event.target.value)}
                                    placeholder={locale === 'vi' ? 'Tăng trưởng doanh thu' : form.content.vi.metrics[index] || ''}
                                    className={`${inputClass} min-w-0`}
                                    aria-label="Nhãn"
                                />
                                <button type="button" onClick={() => removeMetric(index)} className="shrink-0 rounded-lg p-2.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600" aria-label="Xoá số liệu">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </Card>

                    <Card title="Hình ảnh" description="Ảnh đầu tiên là ảnh bìa, dùng ở danh sách dự án và trang chủ.">
                        <ImageListField value={form.slides} onChange={(value) => update('slides', value)} folder="projects" onUploaded={onUploaded} />
                    </Card>
                </div>

                <div className="space-y-5">
                    <Card title="Xuất bản">
                        <Field label="Trạng thái">
                            <StatusSelect value={form.status} onChange={(value) => update('status', value)} />
                        </Field>
                        <Field label="Mã dự án" required hint={isNew ? `Đường dẫn: /projects/${form.id || '...'} - không đổi được sau khi tạo.` : `Đường dẫn: /projects/${form.id}`}>
                            <TextInput
                                value={form.id}
                                disabled={!isNew}
                                onChange={(value) => {
                                    setIdTouched(true);
                                    update('id', slugify(value) || value);
                                }}
                            />
                        </Field>
                        <Field label="Thứ tự hiển thị" hint="Số nhỏ đứng trước (trang chủ, trang dịch vụ).">
                            <TextInput type="number" value={form.order} onChange={(value) => update('order', value === '' ? '' : Number(value))} />
                        </Field>
                    </Card>

                    <Card title="Thông tin">
                        <Field label="Thời gian thực hiện" hint="Dạng MM/YYYY, VD: 07/2026. Trang danh sách sắp mới nhất lên đầu.">
                            <TextInput value={form.date} onChange={(value) => update('date', value)} placeholder="07/2026" />
                        </Field>
                        <Field label="Đối tác / Thương hiệu">
                            <TextInput value={form.partner} onChange={(value) => update('partner', value)} />
                        </Field>
                        <Field label="Danh mục" group hint={'Dự án có "Website & Landing Page" sẽ hiện ở trang dịch vụ Website.'}>
                            <TagInput value={form.category} onChange={(value) => update('category', value)} suggestions={suggestions.categories} />
                        </Field>
                        <Field label="Công nghệ" group>
                            <TagInput value={form.technologies} onChange={(value) => update('technologies', value)} suggestions={suggestions.technologies} />
                        </Field>
                    </Card>

                    <Card title="Liên kết">
                        <Field label="Link sản phẩm" hint="Nút “Xem chi tiết” trên trang dự án. Để trống thì ẩn nút.">
                            <TextInput value={form.ctaUrl} onChange={(value) => update('ctaUrl', value)} placeholder="https://..." />
                        </Field>
                        <Field label="Video giới thiệu" hint="Đường dẫn file .mp4. Để trống thì ẩn khối video.">
                            <TextInput value={form.videoUrl} onChange={(value) => update('videoUrl', value)} placeholder="/assets/... hoặc https://..." />
                        </Field>
                    </Card>
                </div>
            </div>
        </div>
    );
};

const ProjectEditAdmin = () => {
    const {id} = useParams();
    const {items, error} = useContentList('projects');
    const isNew = !id;

    if (error) return <Notice tone="error">{error}</Notice>;
    if (!items) {
        return (
            <div className="flex justify-center py-16 text-slate-400">
                <Loader2 className="h-6 w-6 animate-spin" />
            </div>
        );
    }

    const item = isNew ? blankProject(items) : items.find((entry) => entry.id === id);
    if (!item) return <Notice tone="error">Không tìm thấy dự án "{id}".</Notice>;

    return <ProjectForm key={id || 'new'} initial={item} isNew={isNew} allItems={items} />;
};

export default ProjectEditAdmin;
