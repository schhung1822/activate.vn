// src/admin/context.js - trạng thái dùng chung của trang /admin (phiên đăng nhập + danh sách đã tải)
import {createContext, useContext, useEffect} from 'react';

export const AdminContext = createContext(null);

export const useAdmin = () => useContext(AdminContext);

/** Danh sách tin tức / dự án, tự tải lần đầu. Trả về {items, error, reload}. */
export const useContentList = (type) => {
    const {lists, listErrors, loadList} = useAdmin();
    useEffect(() => {
        loadList(type);
    }, [type, loadList]);

    return {
        items: lists[type],
        error: listErrors[type],
        reload: () => loadList(type, {force: true})
    };
};
