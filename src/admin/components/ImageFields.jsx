// src/admin/components/ImageFields.jsx - chọn/tải ảnh đại diện và bộ ảnh dự án
import {useRef, useState} from 'react';
import {ArrowDown, ArrowUp, ImagePlus, Loader2, Trash2} from 'lucide-react';
import {previewSrc, uploadImage} from '../imageUpload.js';
import {Button, inputClass} from './ui.jsx';

/** Nút chọn file + trạng thái đang tải. onUploaded nhận kết quả của từng ảnh. */
const useUploader = (folder, onUploaded) => {
    const inputRef = useRef(null);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState('');

    const handleFiles = async (fileList) => {
        const files = Array.from(fileList || []);
        if (!files.length) return;
        setBusy(true);
        setError('');
        try {
            for (const file of files) {
                onUploaded(await uploadImage(file, folder));
            }
        } catch (uploadError) {
            setError(uploadError.message);
        } finally {
            setBusy(false);
            if (inputRef.current) inputRef.current.value = '';
        }
    };

    return {inputRef, busy, error, handleFiles, open: () => inputRef.current?.click()};
};

const Thumb = ({src, className = ''}) =>
    src ? (
        <img src={previewSrc(src)} alt="" className={`object-cover ${className}`} />
    ) : (
        <div className={`flex items-center justify-center bg-slate-100 text-slate-400 ${className}`}>
            <ImagePlus className="h-6 w-6" />
        </div>
    );

/** Một ảnh (ảnh đại diện bài viết). Có thể tải lên hoặc dán đường dẫn. */
export const ImageField = ({value, onChange, folder, onUploaded}) => {
    const uploader = useUploader(folder, (result) => {
        onUploaded(result);
        onChange(result.url);
    });

    return (
        <div className="space-y-3">
            <div className="space-y-3">
                <Thumb src={value} className="aspect-[16/10] w-full rounded-xl border border-slate-200" />
                <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                        <Button variant="secondary" onClick={uploader.open} disabled={uploader.busy}>
                            {uploader.busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImagePlus className="h-4 w-4" />}
                            {uploader.busy ? 'Đang tải lên...' : value ? 'Đổi ảnh' : 'Tải ảnh lên'}
                        </Button>
                        {value && (
                            <Button variant="ghost" onClick={() => onChange('')}>
                                Bỏ ảnh
                            </Button>
                        )}
                    </div>
                    <input
                        value={value || ''}
                        onChange={(event) => onChange(event.target.value)}
                        placeholder="Hoặc dán đường dẫn ảnh: /assets/images/... hoặc https://..."
                        className={inputClass}
                    />
                    {uploader.error && <p className="text-sm text-rose-600">{uploader.error}</p>}
                </div>
            </div>
            <input
                ref={uploader.inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(event) => uploader.handleFiles(event.target.files)}
            />
        </div>
    );
};

/** Danh sách ảnh có thứ tự (ảnh slide dự án). Ảnh đầu tiên là ảnh bìa. */
export const ImageListField = ({value = [], onChange, folder, onUploaded}) => {
    const [draftUrl, setDraftUrl] = useState('');
    const uploader = useUploader(folder, (result) => {
        onUploaded(result);
        // Dùng hàm cập nhật để nhiều ảnh tải liên tiếp không ghi đè nhau
        onChange((current) => [...current, result.url]);
    });

    const move = (index, offset) => {
        const next = [...value];
        const [item] = next.splice(index, 1);
        next.splice(index + offset, 0, item);
        onChange(next);
    };

    const addUrl = () => {
        const url = draftUrl.trim();
        if (url && !value.includes(url)) onChange([...value, url]);
        setDraftUrl('');
    };

    return (
        <div className="space-y-3">
            {value.length > 0 && (
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {value.map((src, index) => (
                        <li key={src} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                            <div className="relative">
                                <Thumb src={src} className="aspect-[16/10] w-full" />
                                {index === 0 && (
                                    <span className="absolute left-2 top-2 rounded-md bg-slate-900/80 px-2 py-0.5 text-xs font-semibold text-white">
                                        Ảnh bìa
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center justify-between gap-2 px-2 py-1.5">
                                <span className="truncate text-xs text-slate-500" title={src}>
                                    {src.split('/').pop()}
                                </span>
                                <div className="flex shrink-0">
                                    <button type="button" disabled={index === 0} onClick={() => move(index, -1)} className="rounded p-1.5 text-slate-500 hover:bg-slate-100 disabled:opacity-30" aria-label="Lên trước">
                                        <ArrowUp className="h-4 w-4" />
                                    </button>
                                    <button type="button" disabled={index === value.length - 1} onClick={() => move(index, 1)} className="rounded p-1.5 text-slate-500 hover:bg-slate-100 disabled:opacity-30" aria-label="Xuống sau">
                                        <ArrowDown className="h-4 w-4" />
                                    </button>
                                    <button type="button" onClick={() => onChange(value.filter((item) => item !== src))} className="rounded p-1.5 text-rose-500 hover:bg-rose-50" aria-label="Xoá ảnh">
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <div className="flex flex-col gap-2 sm:flex-row">
                <Button variant="secondary" onClick={uploader.open} disabled={uploader.busy}>
                    {uploader.busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImagePlus className="h-4 w-4" />}
                    {uploader.busy ? 'Đang tải lên...' : 'Tải ảnh lên (chọn được nhiều)'}
                </Button>
                <input
                    value={draftUrl}
                    onChange={(event) => setDraftUrl(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            addUrl();
                        }
                    }}
                    placeholder="Hoặc dán đường dẫn ảnh rồi nhấn Enter"
                    className={inputClass}
                />
            </div>
            {uploader.error && <p className="text-sm text-rose-600">{uploader.error}</p>}
            <input
                ref={uploader.inputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(event) => uploader.handleFiles(event.target.files)}
            />
        </div>
    );
};
