import React from 'react';
import {Link} from 'react-router-dom';
import {Phone} from 'lucide-react';
import ConsultantProfile from './ConsultantProfile.jsx';
import BookingPanel from './BookingPanel.jsx';
import {HOTLINE} from './bookingData.js';

const BookingHero = () => (
    <section id="dat-lich" className="relative overflow-hidden bg-[#0a1326]">
        {/* Nền gradient + hai quầng sáng */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,#060912_0%,#0a1326_34%,#12305e_66%,#1b4f9c_88%,#2e7bdf_100%)]" />
        <div className="pointer-events-none absolute -top-[30%] -right-[8%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(138,108,240,0.35),transparent_62%)]" />
        <div className="pointer-events-none absolute -bottom-[40%] right-[26%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(65,200,230,0.22),transparent_60%)]" />

        {/* Thanh đầu trang riêng của landing */}
        <header className="relative z-10 flex h-[76px] items-center justify-between border-b border-white/[.08] px-5 sm:px-8 lg:px-14">
            <Link to="/" className="block">
                <img
                    src="/assets/images/brand/activate-logo-light.png"
                    alt="Activate"
                    className="h-6 w-auto object-contain"
                />
            </Link>
            <a
                href={`tel:${HOTLINE.tel}`}
                className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] text-white/85 no-underline hover:text-white hover:no-underline"
            >
                <Phone className="h-[15px] w-[15px]" />
                {HOTLINE.display}
            </a>
        </header>

        <div className="relative z-10 mx-auto grid max-w-[1220px] grid-cols-1 items-start gap-8 px-5 pb-14 pt-9 sm:px-8 lg:grid-cols-[minmax(360px,1fr)_minmax(400px,520px)] lg:gap-16 lg:px-14 lg:pb-[88px] lg:pt-16">
            <ConsultantProfile />
            <BookingPanel />
        </div>
    </section>
);

export default BookingHero;
