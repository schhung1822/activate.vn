// Thành phần giao diện dùng chung cho các section hồ sơ doanh nghiệp.
// Kiểu dáng giữ nguyên ngôn ngữ thiết kế cũ của site (nút pill + vòng tròn mũi tên,
// badge chữ giãn, tiêu đề Archivo in hoa) để các trang mới đồng bộ với phần còn lại.
import React from 'react';
import {ArrowUpRight, Download} from 'lucide-react';
import {Link} from '../../i18n';

/** Nhãn nhỏ chữ giãn phía trên tiêu đề section. */
export const SectionBadge = ({children, tone = 'dark', className = ''}) => (
    <span
        className={`inline-block text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase ${
            tone === 'light' ? 'text-white' : tone === 'brand' ? 'text-[#ee3e99]' : 'text-black'
        } ${className}`}
    >
        {children}
    </span>
);

const BUTTON_VARIANTS = {
    dark: {
        base: 'bg-black text-white hover:shadow-lg hover:shadow-gray-300',
        circle: 'bg-white',
        icon: 'text-black'
    },
    light: {
        base: 'bg-white text-black',
        circle: 'bg-black',
        icon: 'text-white'
    },
    gradient: {
        base: 'bg-gradient-to-r from-[#6A4FDB] via-[#ee3e99] to-[#6A4FDB] text-white hover:shadow-lg hover:shadow-fuchsia-500/20 animate-gradient-shift',
        circle: 'bg-black',
        icon: 'text-white'
    },
    outline: {
        base: 'bg-transparent text-white border border-white/40 hover:border-white',
        circle: 'bg-white',
        icon: 'text-black'
    }
};

/**
 * Nút pill có vòng tròn mũi tên.
 * - `to`: link nội bộ (tự gắn prefix ngôn ngữ)
 * - `href`: link ngoài / file tải về (`download` để trình duyệt tải thay vì mở)
 * - `onClick`: nút thường
 */
export const ArrowButton = ({children, to, href, download, onClick, variant = 'dark', icon = 'arrow', className = ''}) => {
    const styles = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.dark;
    const Icon = icon === 'download' ? Download : ArrowUpRight;
    const classes = `relative inline-flex items-center space-x-3 pl-6 pr-1.5 py-1.5 text-[15px] sm:text-[16px] rounded-full font-medium transition-all duration-300 hover:scale-105 group ${styles.base} ${className}`;
    const content = (
        <>
            <span>{children}</span>
            <span className={`w-9 h-9 sm:w-[2.5rem] sm:h-[2.5rem] rounded-full flex items-center justify-center flex-shrink-0 ${styles.circle}`}>
                <Icon
                    className={`w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-105 ${styles.icon}`}
                    strokeWidth={2.3}
                />
            </span>
        </>
    );
    const style = variant === 'gradient' ? {backgroundSize: '200% 200%'} : undefined;

    if (to) return <Link to={to} className={classes} style={style}>{content}</Link>;
    if (href) {
        return (
            <a href={href} download={download} target={download ? undefined : '_blank'} rel="noopener noreferrer" className={classes} style={style}>
                {content}
            </a>
        );
    }
    return <button type="button" onClick={onClick} className={classes} style={style}>{content}</button>;
};

