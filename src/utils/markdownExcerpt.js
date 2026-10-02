// src/utils/markdownExcerpt.js - dùng chung cho API tin tức (server) và SEO bài viết (client + prerender)

/** Đoạn văn đầu tiên của nội dung markdown, bỏ ký hiệu markdown, tối đa `maxLength` ký tự. */
export const markdownExcerpt = (markdown, maxLength = 160) => {
    const paragraph =
        String(markdown || '')
            .split(/\n\s*\n/)
            .map((block) => block.trim())
            .find((block) => block && !/^(#|!\[|```|\||-{3,}|>)/.test(block)) || '';
    const plain = paragraph
        .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
        .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
        .replace(/[*_`~]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    return plain.length > maxLength ? `${plain.slice(0, maxLength - 3).trimEnd()}...` : plain;
};
