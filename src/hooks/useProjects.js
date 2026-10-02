// src/hooks/useProjects.js
//
// Trả về dự án đã dịch theo ngôn ngữ đang xem. Chữ của mỗi dự án nằm ngay trong
// file src/content/projects/<id>.json (`content.vi | en | cn`); ô nào ngôn ngữ
// hiện tại để trống thì lấy tiếng Việt.
//
// Component nên dùng useProjects() / useProject(id) thay cho projectsData và
// getProjectById, để nội dung tự đổi theo ngôn ngữ đang xem.
import {useMemo} from 'react';
import {projectsData, getProjectById} from '../data/projectsData';
import {useI18n} from '../i18n';
import {DEFAULT_LOCALE} from '../i18n/config.js';

const isFilled = (value) => (Array.isArray(value) ? value.some(Boolean) : Boolean(value));

/** Ghép một dự án với bản dịch tương ứng. */
const localizeProject = (project, locale, t) => {
    if (!project) return project;

    const fallback = project.content?.[DEFAULT_LOCALE] || {};
    const current = project.content?.[locale] || {};
    const pick = (field) => (isFilled(current[field]) ? current[field] : fallback[field]);

    const labels = pick('metrics') || [];
    const fallbackLabels = fallback.metrics || [];

    return {
        ...project,
        name: pick('name') || '',
        summary: pick('summary') || '',
        description: pick('description') || '',
        details: pick('details') || [],
        metrics: (Array.isArray(project.metrics) ? project.metrics : []).map((metric, index) => ({
            value: metric.value,
            label: labels[index] || fallbackLabels[index] || ''
        })),
        cta: project.ctaUrl ? {url: project.ctaUrl, label: t('projects.viewDetail')} : null
    };
};

/**
 * Toàn bộ dự án, đã dịch theo ngôn ngữ đang xem.
 * t đã được useCallback theo locale nên chỉ cần locale + t trong deps.
 */
export const useProjects = () => {
    const {locale, t} = useI18n();
    return useMemo(() => projectsData.map((project) => localizeProject(project, locale, t)), [locale, t]);
};

/** Một dự án theo id, đã dịch. Trả về undefined nếu không có. */
export const useProject = (projectId) => {
    const {locale, t} = useI18n();
    return useMemo(() => localizeProject(getProjectById(projectId), locale, t), [projectId, locale, t]);
};
