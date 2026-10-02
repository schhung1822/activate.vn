// src/data/projectsData.js
//
// Mỗi dự án là một file src/content/projects/<id>.json (thêm/sửa qua trang /admin),
// gồm phần cấu trúc (ảnh, link, ngày, công nghệ, danh mục) và chữ cho cả 3 ngôn ngữ
// trong `content.vi | en | cn`. Component nên dùng useProjects() / useProject(id) để
// nhận bản đã dịch; file này chỉ nạp, lọc bản nháp và sắp xếp theo `order`.
const files = import.meta.glob('../content/projects/*.json', {eager: true, import: 'default'});

export const projectsData = Object.values(files)
    .filter((project) => project.status !== 'draft')
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export const getProjectById = (projectId) =>
    projectsData.find((project) => project.id === projectId);

export const getProjectCategories = (project) => {
    if (!project) {
        return [];
    }

    if (Array.isArray(project.category)) {
        return project.category.filter(Boolean);
    }

    return project.category ? [project.category] : [];
};

export const getProjectFilters = () => {
    const categories = Array.from(
        new Set(projectsData.flatMap((project) => getProjectCategories(project)))
    );
    const technologies = Array.from(
        new Set(projectsData.flatMap((project) => project.technologies))
    );

    return { categories, technologies };
};
