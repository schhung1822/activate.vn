// Hero có 3 thẻ xếp chồng nghiêng theo chuột - chuyển thể từ components/aboutus/AboutHeroSection.jsx.
import React, {useEffect, useRef, useState} from 'react';
import {SectionBadge} from './ui.jsx';

const CARD_LAYOUTS = [
    {style: 'bg-black text-white', position: 'right-0 top-0'},
    {style: 'bg-white text-black border border-black/20', position: 'left-10 top-20'},
    {style: 'bg-gradient-to-b from-black via-black to-[#ee3e99] text-white border-t-2 border-white', position: 'right-10 bottom-0'}
];

const CardBody = ({card, compact}) => {
    const isLight = card.layout.style.includes('bg-white');
    return (
        <>
            <div>
                <p className={`${compact ? 'text-[11px]' : 'text-[13px]'} font-archivo font-medium text-[#ee3e99] uppercase tracking-widest mb-2`}>
                    {card.title}
                </p>
                <p className={`${compact ? 'text-[13px] leading-relaxed' : 'text-[16px]'} ${isLight ? 'text-gray-800' : 'text-gray-200'}`}>
                    {card.description}
                </p>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className={`text-xs ${isLight ? 'text-black' : 'text-white'}`}>Activate</span>
            </div>
        </>
    );
};

const StackedCardsHero = ({badge, titleLine1, titleLine2, description, cards = [], actions}) => {
    const containerRef = useRef(null);
    const cardsRef = useRef(null);
    const [mouse, setMouse] = useState({x: 0, y: 0});

    // Chỉ nghiêng thẻ theo chuột trên desktop
    useEffect(() => {
        const container = containerRef.current;
        if (!container || window.innerWidth < 1024) return undefined;
        const onMove = (e) => {
            const rect = cardsRef.current?.getBoundingClientRect();
            if (!rect) return;
            setMouse({
                x: (e.clientX - (rect.left + rect.width / 2)) / rect.width,
                y: (e.clientY - (rect.top + rect.height / 2)) / rect.height
            });
        };
        const onLeave = () => setMouse({x: 0, y: 0});
        container.addEventListener('mousemove', onMove);
        container.addEventListener('mouseleave', onLeave);
        return () => {
            container.removeEventListener('mousemove', onMove);
            container.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    const items = cards.slice(0, 3).map((card, index) => ({...card, layout: CARD_LAYOUTS[index]}));

    return (
        <section ref={containerRef} className="bg-white py-[60px] lg:py-[90px]">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <SectionBadge>{badge}</SectionBadge>
                            <h1 className="text-[32px] md:text-[42px] lg:text-[52px] font-archivo font-bold text-black uppercase leading-[1.2]">
                                {titleLine1}
                                <span className="block bg-gradient-to-r from-black to-[#ee3e99] bg-clip-text text-transparent">{titleLine2}</span>
                            </h1>
                        </div>
                        <p className="text-[15px] lg:text-[18px] text-black">{description}</p>
                        {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
                    </div>

                    <div ref={cardsRef}>
                        {/* Mobile: xếp chồng đơn giản, không 3D */}
                        <div className="lg:hidden space-y-3">
                            {items.map((card) => (
                                <div key={card.title} className={`rounded-sm p-5 flex flex-col gap-4 ${card.layout.style}`}>
                                    <CardBody card={card} compact />
                                </div>
                            ))}
                        </div>

                        {/* Desktop: thẻ chồng lên nhau, nghiêng theo chuột */}
                        <div className="hidden lg:block relative h-[600px]">
                            {items.map((card, index) => (
                                <div
                                    key={card.title}
                                    className={`absolute ${card.layout.position} w-[320px] h-[320px] rounded-md p-8 flex flex-col justify-between ${card.layout.style} transition-transform duration-300 ease-out`}
                                    style={{
                                        transform: `perspective(1000px) rotateY(${mouse.x * (5 + index * 3)}deg) rotateX(${-mouse.y * (5 + index * 3)}deg) translate(${mouse.x * (10 + index * 5)}px, ${mouse.y * (10 + index * 5)}px)`
                                    }}
                                >
                                    <CardBody card={card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StackedCardsHero;
