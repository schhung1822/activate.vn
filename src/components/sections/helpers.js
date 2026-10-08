// Hook và hàm tiện ích dùng chung cho các section (tách khỏi ui.jsx để Fast Refresh
// chỉ phải làm việc với file thuần component).
import {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hiệu ứng hiện dần khi cuộn tới: mọi phần tử có thuộc tính `data-reveal` bên trong
 * `ref` sẽ trượt lên + hiện ra. Dùng gsap.context để chỉ dọn trigger của chính section
 * (các section cũ gọi ScrollTrigger.getAll().kill() - huỷ nhầm cả trigger nơi khác).
 */
export const useReveal = (ref) => {
    useEffect(() => {
        if (!ref.current) return undefined;
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray('[data-reveal]');
            if (!items.length) return;
            gsap.set(items, {opacity: 0, y: 30});
            ScrollTrigger.batch(items, {
                start: 'top 85%',
                once: true,
                onEnter: (batch) =>
                    gsap.to(batch, {opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out'})
            });
        }, ref);
        return () => ctx.revert();
    }, [ref]);
};

/** Cuộn mượt tới một section trong cùng trang (thay cho link #anchor). */
export const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
};
