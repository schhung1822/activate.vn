// src/components/news/newsUtils.js - hàm dùng chung cho trang danh sách và chi tiết tin tức
import {useMemo} from 'react';
import {useI18n} from '../../i18n';

// Ngày lưu dạng YYYY-MM-DD; thêm giờ để không bị lệch ngày theo múi giờ khi parse
export const toDate = (value) => new Date(`${value}T00:00:00`);

export const newsPath = (item) => `/news/${item.slug}-${item.id}`;

/** Định dạng ngày theo ngôn ngữ đang xem: "5 thg 6, 2026" / "Jun 5, 2026" / "2026年6月5日". */
export const useNewsDateFormat = () => {
    const {localeConfig} = useI18n();
    return useMemo(() => {
        const formatter = new Intl.DateTimeFormat(localeConfig.htmlLang, {day: 'numeric', month: 'short', year: 'numeric'});
        return (value) => formatter.format(toDate(value));
    }, [localeConfig.htmlLang]);
};
