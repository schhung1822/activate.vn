// src/admin/components/ui.jsx - các ô nhập dùng chung cho form trang /admin
import {useId, useState} from 'react';
import {Link} from 'react-router-dom';
import {X} from 'lucide-react';

export const inputClass =
    'w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 disabled:bg-slate-100 disabled:text-slate-500';

// `group`: ô phức tạp có nút bên trong (ảnh, danh sách) - bọc bằng div thay vì label,
// nếu không bấm vào chữ tiêu đề sẽ kích hoạt nút đầu tiên.
export const Field = ({label, hint, children, required, group = false}) => {
    const Wrapper = group ? 'div' : 'label';
    return (
        <Wrapper className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">
                {label}
                {required && <span className="ml-0.5 text-rose-500">*</span>}
            </span>
            {children}
            {hint && <span className="mt-1.5 block text-xs leading-5 text-slate-500">{hint}</span>}
        </Wrapper>
    );
};

export const TextInput = ({value, onChange, ...props}) => (
    <input {...props} value={value ?? ''} onChange={(event) => onChange(event.target.value)} className={inputClass} />
);

export const TextArea = ({value, onChange, rows = 3, ...props}) => (
    <textarea
        {...props}
        rows={rows}
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value)}
        className={`${inputClass} leading-6`}
    />
);

export const Select = ({value, onChange, options}) => (
    <select value={value} onChange={(event) => onChange(event.target.value)} className={inputClass}>
        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
);

/** Ô nhập nhiều giá trị (danh mục, tag, công nghệ). Enter hoặc dấu phẩy để thêm. */
export const TagInput = ({value = [], onChange, suggestions = [], placeholder}) => {
    const [draft, setDraft] = useState('');
    const listId = useId();

    const add = (raw) => {
        const parts = raw
            .split(',')
            .map((part) => part.trim())
            .filter(Boolean)
            .filter((part) => !value.includes(part));
        if (parts.length) onChange([...value, ...parts]);
        setDraft('');
    };

    return (
        <div className="flex min-h-[46px] flex-wrap items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-2 py-1.5 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20">
            {value.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 rounded-lg bg-indigo-50 px-2.5 py-1 text-sm text-indigo-700">
                    {tag}
                    <button
                        type="button"
                        onClick={() => onChange(value.filter((item) => item !== tag))}
                        className="rounded text-indigo-400 hover:text-indigo-700"
                        aria-label={`Bỏ ${tag}`}
                    >
                        <X className="h-3.5 w-3.5" />
                    </button>
                </span>
            ))}
            <input
                list={listId}
                value={draft}
                placeholder={value.length ? '' : placeholder}
                onChange={(event) => {
                    const next = event.target.value;
                    // Chọn từ gợi ý thì thêm luôn
                    if (suggestions.includes(next)) add(next);
                    else setDraft(next);
                }}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ',') {
                        event.preventDefault();
                        add(draft);
                    } else if (event.key === 'Backspace' && !draft && value.length) {
                        onChange(value.slice(0, -1));
                    }
                }}
                onBlur={() => draft && add(draft)}
                className="min-w-[140px] flex-1 border-0 bg-transparent px-1.5 py-1 text-sm focus:outline-none focus:ring-0"
            />
            <datalist id={listId}>
                {suggestions
                    .filter((item) => !value.includes(item))
                    .map((item) => (
                        <option key={item} value={item} />
                    ))}
            </datalist>
        </div>
    );
};

const BUTTON_STYLES = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-500 disabled:bg-indigo-300',
    secondary: 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:text-slate-400',
    danger: 'border border-rose-200 bg-white text-rose-600 hover:bg-rose-50 disabled:text-rose-300',
    ghost: 'text-slate-600 hover:bg-slate-100'
};

const buttonClass = (variant, className) =>
    `inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed ${BUTTON_STYLES[variant]} ${className}`;

export const Button = ({variant = 'primary', className = '', ...props}) => (
    <button type="button" {...props} className={buttonClass(variant, className)} />
);

/** Link trông như nút (không lồng <button> trong <a>). */
export const ButtonLink = ({variant = 'primary', className = '', ...props}) => (
    <Link {...props} className={buttonClass(variant, className)} />
);

export const Notice = ({tone = 'info', children}) => {
    const styles = {
        info: 'border-indigo-200 bg-indigo-50 text-indigo-800',
        success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
        warning: 'border-amber-200 bg-amber-50 text-amber-800',
        error: 'border-rose-200 bg-rose-50 text-rose-700'
    };
    return <div className={`rounded-xl border px-4 py-3 text-sm leading-6 ${styles[tone]}`}>{children}</div>;
};

export const Card = ({title, description, children, actions}) => (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        {(title || actions) && (
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                <div>
                    {title && <h2 className="text-base font-semibold text-slate-900">{title}</h2>}
                    {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
                </div>
                {actions}
            </div>
        )}
        <div className="space-y-5">{children}</div>
    </section>
);

export const StatusBadge = ({status}) =>
    status === 'draft' ? (
        <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">Bản nháp</span>
    ) : (
        <span className="inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">Đã đăng</span>
    );

const STATUS_OPTIONS = [
    {value: 'published', label: 'Đã đăng - hiển thị trên website'},
    {value: 'draft', label: 'Bản nháp - ẩn khỏi website'}
];

export const StatusSelect = ({value, onChange}) => <Select value={value} onChange={onChange} options={STATUS_OPTIONS} />;
