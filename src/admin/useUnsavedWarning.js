// src/admin/useUnsavedWarning.js - hỏi lại khi đóng/tải lại tab mà chưa lưu
import {useEffect} from 'react';

export const useUnsavedWarning = (dirty) => {
    useEffect(() => {
        if (!dirty) return undefined;
        const onBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = '';
        };
        window.addEventListener('beforeunload', onBeforeUnload);
        return () => window.removeEventListener('beforeunload', onBeforeUnload);
    }, [dirty]);
};

/** Dùng cho link "Quay lại": chưa lưu thì hỏi trước. */
export const confirmLeave = (dirty) => !dirty || window.confirm('Bạn có thay đổi chưa lưu. Rời trang và bỏ các thay đổi?');
