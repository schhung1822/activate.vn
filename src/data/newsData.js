// src/data/newsData.js
//
// Mỗi bài viết là 2 file trong src/content/news/ (đăng/sửa qua trang /admin):
//   <id>.json - tiêu đề, mô tả, ảnh, danh mục, ngày đăng...
//   <id>.md   - nội dung bài (markdown)
// File này chỉ gom chúng lại cho trang tin tức. Bài ở trạng thái "draft" bị ẩn.
const metas = import.meta.glob('../content/news/*.json', {eager: true, import: 'default'});
const bodies = import.meta.glob('../content/news/*.md', {eager: true, query: '?raw', import: 'default'});

export const newsItems = Object.entries(metas)
    .map(([file, meta]) => ({...meta, context: bodies[file.replace(/\.json$/, '.md')] ?? ''}))
    .filter((news) => news.status !== 'draft');
