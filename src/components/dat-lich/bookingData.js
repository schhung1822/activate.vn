// Nguồn dữ liệu duy nhất cho trang /dat-lich (Growth Call).
// Sửa nội dung, số tài khoản hay mức cọc ở đây - mọi section tự cập nhật theo.

export const CONSULTANT = {
    name: 'Ngô Hồng Sơn',
    role: 'Growth Manager · Activate',
    // Thả ảnh chân dung vào đúng đường dẫn này; chưa có file thì tự rơi về ô chữ cái đầu.
    avatar: '/assets/images/chauson.webp',
    initials: 'NS',
    // bio và quote lấy từ từ điển (booking.consultant.*) lúc render
};

export const HOTLINE = {
    display: '0332 083 366',
    tel: '0332083366'
};

export const DEPOSIT = 100000;

export const BANK = {
    name: 'MBBANK',
    account: '0332083366',
    holder: 'NGO HONG SON'
};

/** 100000 -> "100.000đ" */
export const formatVnd = (amount) => `${amount.toLocaleString('vi-VN')}đ`;

/** 100000 -> "100k" */
export const shortVnd = (amount) => `${Math.round(amount / 1000)}k`;

export const DEPOSIT_FULL = formatVnd(DEPOSIT);
export const DEPOSIT_SHORT = shortVnd(DEPOSIT);

/** QR VietQR đã điền sẵn số tiền và nội dung chuyển khoản. */
export const buildQrUrl = (phone = '') => {
    const account = BANK.account.replace(/\s/g, '');
    const rawBank = BANK.name.toUpperCase().replace(/\s/g, '');
    const bankCode = rawBank.indexOf('MB') === 0 ? 'MB' : rawBank;
    const addInfo = encodeURIComponent(`DATCOC ${phone.trim()}`.trim());
    return `https://img.vietqr.io/image/${bankCode}-${account}-qr_only.png?amount=${DEPOSIT}&addInfo=${addInfo}&accountName=${encodeURIComponent(BANK.holder)}`;
};

/** Bảng thông tin chuyển khoản; nhãn lấy từ từ điển. */
export const buildBankRows = (t, phone = '') => [
    {label: t('booking.bank.bankLabel'), value: BANK.name},
    {label: t('booking.bank.accountLabel'), value: BANK.account},
    {label: t('booking.bank.holderLabel'), value: BANK.holder},
    {
        label: t('booking.bank.contentLabel'),
        value: `DATCOC ${phone.trim() || t('booking.bank.phoneFallback')}`
    },
    {label: t('booking.bank.depositLabel'), value: DEPOSIT_FULL}
];

/** Khung giờ 30 phút mở đặt trong ngày. */
export const SLOT_TIMES = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '14:00',
    '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
];

/** Ba bước đặt lịch; chữ lấy từ từ điển. */
export const buildBookingSteps = (t, tm) =>
    tm('booking.steps').map((step, index) => ({
        n: String(index + 1).padStart(2, '0'),
        title: step.title
            .replace(/\{\{deposit\}\}/g, DEPOSIT_FULL)
            .replace(/\{\{name\}\}/g, CONSULTANT.name),
        body: step.body
    }));

/** Bộ dịch vụ tăng trưởng; icon giữ trong code, chữ lấy từ từ điển. */
export const buildGrowthServices = (tm) =>
    tm('booking.services').map((service, index) => ({
        icon: ['target', 'monitor-smartphone', 'bot', 'gem', 'megaphone'][index],
        tag: service.tag,
        title: service.title,
        body: service.body
    }));

/** Ba việc làm trong buổi gọi; chữ lấy từ từ điển. */
export const buildCallAgenda = (tm) =>
    tm('booking.agenda').map((item, index) => ({
        n: String(index + 1).padStart(2, '0'),
        title: item.title,
        body: item.body
    }));

/** Ba mốc được hoàn cọc; chữ lấy từ từ điển. */
export const buildRefundMoments = (tm) =>
    tm('booking.refunds').map((moment, index) => ({
        icon: ['calendar-x', 'phone-off', 'history'][index],
        title: moment.title,
        body: moment.body.replace(/\{\{deposit\}\}/g, DEPOSIT_FULL)
    }));
