import React, { useState, useEffect } from 'react';

const PageTransition = ({ isTransitioning, onTransitionComplete, logoSrc = '/assets/images/brand/activate-mark.svg' }) => {
    const [phase, setPhase] = useState('hidden'); // hidden, entering, exiting

    useEffect(() => {
        if (isTransitioning) {
            // Prevent body scroll during transition
            document.body.classList.add('transition-active');

            setPhase('entering');

            // Phase 1: Fade in từ bên phải (300ms)
            const enterTimer = setTimeout(() => {
                setPhase('exiting');

                // Phase 2: Fade out ra bên trái (300ms)
                const exitTimer = setTimeout(() => {
                    setPhase('hidden');
                    document.body.classList.remove('transition-active');
                    onTransitionComplete();
                }, 1000);

                return () => clearTimeout(exitTimer);
            }, 1000);

            return () => clearTimeout(enterTimer);
        }
    }, [isTransitioning, onTransitionComplete]);

    if (phase === 'hidden') return null;

    return (
        <>
            {/* Transition overlay */}
            <div
                className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-transform duration-[1000ms] ease-out ${
                    phase === 'entering'
                        ? 'translate-x-0'
                        : phase === 'exiting'
                            ? '-translate-x-full'
                            : 'translate-x-full'
                }`}
                style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                }}
            >
                {/* Logo container */}
                <div className="flex items-center justify-center">
                    <img
                        src={logoSrc}
                        alt="Activate Logo"
                        className="w-20 h-20 md:w-28 md:h-28 object-contain opacity-90 transition-all duration-500"
                        style={{
                            animation: phase === 'entering' ? 'logoFadeIn 0.5s ease-out' : 'logoFadeOut 0.3s ease-in'
                        }}
                        onError={(e) => {
                            // Fallback if logo doesn't load
                            e.target.style.display = 'none';
                        }}
                    />
                </div>
            </div>

            {/* Inline styles for logo animations */}
            <style jsx>{`
                @keyframes logoFadeIn {
                    0% {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    100% {
                        opacity: 0.9;
                        transform: scale(1);
                    }
                }

                @keyframes logoFadeOut {
                    0% {
                        opacity: 0.9;
                        transform: scale(1);
                    }
                    100% {
                        opacity: 0.6;
                        transform: scale(0.95);
                    }
                }
            `}</style>
        </>
    );
};

export default PageTransition;