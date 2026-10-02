// src/admin/components/MarkdownEditor.jsx
//
// Trình soạn thảo dạng "thấy gì được nấy" (MDXEditor) nhưng lưu ra markdown, đúng
// định dạng mà trang tin tức đang đọc. Nút "Source" trên thanh công cụ cho phép
// sửa trực tiếp markdown khi cần.
import {useState} from 'react';
import {
    BlockTypeSelect,
    BoldItalicUnderlineToggles,
    CodeToggle,
    CreateLink,
    DiffSourceToggleWrapper,
    InsertCodeBlock,
    InsertImage,
    InsertTable,
    InsertThematicBreak,
    ListsToggle,
    MDXEditor,
    Separator,
    UndoRedo,
    codeBlockPlugin,
    codeMirrorPlugin,
    diffSourcePlugin,
    headingsPlugin,
    imagePlugin,
    linkDialogPlugin,
    linkPlugin,
    listsPlugin,
    markdownShortcutPlugin,
    quotePlugin,
    tablePlugin,
    thematicBreakPlugin,
    toolbarPlugin
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import {previewSrc, uploadImage} from '../imageUpload.js';
import {inputClass, Notice} from './ui.jsx';

const CODE_LANGUAGES = {'': 'Văn bản', js: 'JavaScript', jsx: 'JSX', ts: 'TypeScript', html: 'HTML', css: 'CSS', json: 'JSON', bash: 'Bash'};

const Toolbar = () => (
    <DiffSourceToggleWrapper options={['rich-text', 'source']}>
        <UndoRedo />
        <Separator />
        <BlockTypeSelect />
        {/* Không có gạch chân: markdown không hỗ trợ, trang tin tức sẽ không hiển thị */}
        <BoldItalicUnderlineToggles options={['Bold', 'Italic']} />
        <CodeToggle />
        <Separator />
        <ListsToggle />
        <Separator />
        <CreateLink />
        <InsertImage />
        <InsertTable />
        <InsertThematicBreak />
        <InsertCodeBlock />
    </DiffSourceToggleWrapper>
);

/**
 * `markdown` chỉ được đọc lúc mở editor - đổi bài thì đổi `key` của component.
 * onUploaded nhận ảnh vừa tải lên để gửi kèm khi lưu.
 */
const MarkdownEditor = ({markdown, onChange, folder, onUploaded}) => {
    // Markdown cũ có cú pháp editor không đọc được -> chuyển sang ô sửa thô để không mất chữ
    const [parseError, setParseError] = useState('');
    const [raw, setRaw] = useState(markdown);

    if (parseError) {
        return (
            <div className="space-y-3">
                <Notice tone="warning">
                    Bài này có đoạn markdown trình soạn thảo trực quan không đọc được ({parseError}). Bạn vẫn sửa được nội
                    dung markdown trực tiếp bên dưới.
                </Notice>
                <textarea
                    value={raw}
                    onChange={(event) => {
                        setRaw(event.target.value);
                        onChange(event.target.value);
                    }}
                    rows={28}
                    className={`${inputClass} font-mono leading-6`}
                />
            </div>
        );
    }

    return (
        <div className="admin-editor overflow-hidden rounded-xl border border-slate-300 bg-white focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20">
            <MDXEditor
                markdown={markdown}
                onChange={(value, initialNormalize) => {
                    // Lần chuẩn hoá đầu tiên không phải do người dùng sửa
                    if (!initialNormalize) onChange(value);
                }}
                onError={({error}) => setParseError(error)}
                // Giữ đúng kiểu markdown các bài cũ đang dùng: "- " cho gạch đầu dòng, "---" cho đường kẻ
                toMarkdownOptions={{bullet: '-', rule: '-'}}
                placeholder="Bắt đầu viết nội dung bài..."
                contentEditableClassName="admin-prose"
                plugins={[
                    toolbarPlugin({toolbarContents: Toolbar}),
                    headingsPlugin({allowedHeadingLevels: [1, 2, 3, 4]}),
                    listsPlugin(),
                    quotePlugin(),
                    thematicBreakPlugin(),
                    linkPlugin(),
                    linkDialogPlugin(),
                    tablePlugin(),
                    codeBlockPlugin({defaultCodeBlockLanguage: ''}),
                    codeMirrorPlugin({codeBlockLanguages: CODE_LANGUAGES}),
                    imagePlugin({
                        imageUploadHandler: async (file) => {
                            const result = await uploadImage(file, folder);
                            onUploaded(result);
                            return result.url;
                        },
                        imagePreviewHandler: async (src) => previewSrc(src)
                    }),
                    diffSourcePlugin({viewMode: 'rich-text'}),
                    markdownShortcutPlugin()
                ]}
            />
        </div>
    );
};

export default MarkdownEditor;
