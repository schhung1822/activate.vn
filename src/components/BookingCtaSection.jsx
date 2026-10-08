import React from 'react';
import {useLocation} from 'react-router-dom';
import {ArrowUpRight} from 'lucide-react';
import {Link, useI18n} from '../i18n';

/**
 * Slug ngữ cảnh gửi kèm sang trang đặt lịch: đoạn cuối của pathname.
 * /services/google-ads -> google-ads · /ai -> ai
 */
const slugFromPath = (pathname) => {
    const segments = pathname.split('/').filter(Boolean);
    return segments[segments.length - 1] || 'home';
};

/**
 * Dải CTA đặt lịch Growth Call, dùng chung ở cuối các trang dịch vụ.
 * Bấm nút sang /dat-lich?ctx=<slug trang hiện tại> để biết khách đến từ dịch vụ nào.
 */
const BookingCtaSection = ({ctx, title, description, buttonLabel}) => {
    const {pathname} = useLocation();
    const {t} = useI18n();
    const context = ctx || slugFromPath(pathname);

    // Trang nào truyền chữ riêng thì dùng chữ đó, còn lại lấy bản dịch mặc định
    const finalTitle = title || t('shared.bookingCta.title');
    const finalDescription = description || t('shared.bookingCta.description');
    const finalButtonLabel = buttonLabel || t('shared.bookingCta.button');

    return (
        <section id='lilcontact' className="bg-gradient-to-t from-black via-black to-[#2D0F3B] py-[60px] lg:py-[90px] relative overflow-hidden">

            <div className="relative z-10 mx-auto px-4 text-center md:max-w-[700px] sm:px-6 lg:max-w-[1280px] lg:px-8">
                <h2 className="mb-2 font-archivo text-[24px] font-bold uppercase leading-[1.45] text-white md:text-[32px] lg:text-[40px]">
                    {finalTitle}
                </h2>

                <p className="mb-6 text-[15px] text-white/80 lg:text-[18px]">{finalDescription}</p>

                <div className="flex items-center justify-center">
                    <Link
                        to={`/dat-lich?ctx=${encodeURIComponent(context)}`}
                        className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#6a4fdb] via-[#ee3e99] to-[#6a4fdb] text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/20 hover:scale-105 group animate-gradient-shift"
                        style={{
                            backgroundSize: '200% 200%'
                        }}
                    >
                        <span className="">
                            {finalButtonLabel}
                        </span>
                        <div className="w-[2.5rem] h-[2.5rem] bg-black rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                            <ArrowUpRight className="w-5 h-5 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-105" strokeWidth={2.5}/>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BookingCtaSection;
