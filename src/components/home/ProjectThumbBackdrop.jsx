import React from 'react';

const THUMBNAILS = [
    '/assets/images/project-thumbs/13.webp',
    '/assets/images/project-thumbs/bn1.webp',
    '/assets/images/project-thumbs/18.webp',
    '/assets/images/project-thumbs/16.webp',
    '/assets/images/project-thumbs/tlm1.webp',
    '/assets/images/project-thumbs/dataset.webp',
    '/assets/images/project-thumbs/35.webp',
    '/assets/images/project-thumbs/jimto1.webp',
    '/assets/images/project-thumbs/29.webp',
    '/assets/images/project-thumbs/hom1.webp',
    '/assets/images/project-thumbs/39.webp',
    '/assets/images/project-thumbs/40.webp',
    '/assets/images/project-thumbs/CRM_dashboard.webp',
    '/assets/images/project-thumbs/qchoue_1.webp',
    '/assets/images/project-thumbs/topmus1.webp',
    '/assets/images/project-thumbs/miniapp_1.webp',
    '/assets/images/project-thumbs/hm1.webp',
    '/assets/images/project-thumbs/ladi-topmus1.webp'
];

const IMAGES_PER_COLUMN = 11;

// Tông nền tím nhạt lấy từ màu thương hiệu #c08dfe; giữ đồng bộ với `bg-`
// của <section> trong HomeProjectsSection.
const BACKDROP_GROUND = '#f4eeff';
const FOG_RGB = '250, 246, 255';

// Mép ngoài rõ nhất rồi tan dần vào giữa, không có đường cắt như lớp phủ chữ nhật.
const bandMask = (direction) =>
    `linear-gradient(${direction}, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 38%, rgba(0,0,0,0.5) 72%, rgba(0,0,0,0) 100%)`;

// Lớp sương dày nhất ở giữa, nhạt dần ra hai mép để không lộ biên.
const CORE_FOG_MASK =
    'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 14%, rgba(0,0,0,1) 32%, rgba(0,0,0,1) 68%, rgba(0,0,0,0.5) 86%, rgba(0,0,0,0) 100%)';

// Mỗi cột bắt đầu từ một vị trí khác nhau trong danh sách nên hai cột cạnh nhau
// không bao giờ hiển thị trùng ảnh ở cùng một hàng.
const columnFrom = (offset) =>
    Array.from(
        { length: IMAGES_PER_COLUMN },
        (_, index) => THUMBNAILS[(offset + index) % THUMBNAILS.length]
    );

const COLUMNS = {
    outerLeft: columnFrom(0),
    innerLeft: columnFrom(5),
    innerRight: columnFrom(9),
    outerRight: columnFrom(14)
};

const BackdropColumn = ({ images, direction, duration, delay, className = '' }) => (
    <div className={`h-full flex-1 overflow-hidden ${className}`}>
        <div
            className={`project-backdrop-track ${direction === 'down' ? 'project-backdrop-down' : 'project-backdrop-up'}`}
            style={{
                '--project-backdrop-duration': duration,
                '--project-backdrop-delay': delay
            }}
        >
            {/* Ba bản sao để vòng lặp luôn liền mạch kể cả khi section rất cao. */}
            {[0, 1, 2].map((copyIndex) => (
                <div className="project-backdrop-group" key={copyIndex}>
                    {images.map((image) => (
                        <div
                            className="aspect-video overflow-hidden rounded-[16px] border border-black/[0.05] bg-white shadow-sm"
                            key={`${copyIndex}-${image}`}
                        >
                            <img
                                src={image}
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
);

const SideBand = ({ side, children }) => (
    <div
        className={`absolute inset-y-0 flex w-[160px] gap-3 sm:w-[292px] lg:w-[clamp(300px,25vw,420px)] ${
            side === 'left' ? 'left-3 sm:left-4 lg:left-6' : 'right-3 sm:right-4 lg:right-6'
        }`}
        style={{
            maskImage: bandMask(side === 'left' ? 'to right' : 'to left'),
            WebkitMaskImage: bandMask(side === 'left' ? 'to right' : 'to left')
        }}
    >
        {children}
    </div>
);

/**
 * Nền trang trí: mỗi bên hai cột thumbnail dự án tỉ lệ 16:9 chạy ngược chiều nhau,
 * phủ lên là sương mù - ảnh vừa tan dần vừa nhoè dần khi tiến vào giữa section.
 * Dưới breakpoint `sm` mỗi bên chỉ giữ một cột vì hai cột 16:9 sẽ quá hẹp.
 */
const ProjectThumbBackdrop = () => (
    <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden px-4"
        style={{ backgroundColor: BACKDROP_GROUND }}
        aria-hidden="true"
    >
        {/* Quầng sáng màu thương hiệu để sương có màu chứ không xám xịt. */}
        <div className="absolute -left-40 top-[6%] h-[520px] w-[520px] rounded-full bg-[#c08dfe]/25 blur-[130px]" />
        <div className="absolute -right-36 bottom-[4%] h-[460px] w-[460px] rounded-full bg-[#9ef5ae]/20 blur-[130px]" />

        <SideBand side="left">
            <BackdropColumn images={COLUMNS.outerLeft} direction="up" duration="46s" delay="-8s" />
            <BackdropColumn
                images={COLUMNS.innerLeft}
                direction="down"
                duration="38s"
                delay="-21s"
                className="hidden sm:block"
            />
        </SideBand>

        <SideBand side="right">
            <BackdropColumn
                images={COLUMNS.innerRight}
                direction="down"
                duration="42s"
                delay="-15s"
                className="hidden sm:block"
            />
            <BackdropColumn images={COLUMNS.outerRight} direction="up" duration="50s" delay="-30s" />
        </SideBand>

        {/* Màn sương mỏng phủ đều: hai bên luôn hơi nhoè, không bao giờ sắc nét hẳn. */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        {/* Lõi sương: nhoè mạnh dần về giữa, alpha do mask điều khiển nên chuyển rất mượt. */}
        <div
            className="absolute inset-0 backdrop-blur-[9px]"
            style={{
                background: `linear-gradient(to right, rgba(${FOG_RGB},0) 0%, rgba(${FOG_RGB},0.5) 26%, rgba(${FOG_RGB},0.72) 50%, rgba(${FOG_RGB},0.5) 74%, rgba(${FOG_RGB},0) 100%)`,
                maskImage: CORE_FOG_MASK,
                WebkitMaskImage: CORE_FOG_MASK
            }}
        />

        {/* Sương đọng ở mép trên và mép dưới để các cột tan vào nền, không bị cắt ngang. */}
        <div
            className="absolute inset-0"
            style={{
                background: `linear-gradient(180deg, rgba(${FOG_RGB},0.96) 0%, rgba(${FOG_RGB},0) 22%, rgba(${FOG_RGB},0) 74%, rgba(${FOG_RGB},0.94) 100%)`
            }}
        />
    </div>
);

export default ProjectThumbBackdrop;
