import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '../../i18n';
import {Play, ArrowRight, ArrowUpRight} from 'lucide-react';
import {Link} from "react-router-dom";

const VideoSection = () => {
    const { t } = useI18n();
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const videoRef = useRef(null);

    // Detect mobile device
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            setIsVideoPlaying(true);
            videoRef.current.play();
        }
    };

    const handleVideoEnd = () => {
        setIsVideoPlaying(false);
    };

    const handleMouseEnter = () => {
        if (!isMobile) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsHovered(false);
        }
    };

    const handleVideoClick = () => {
        if (isMobile) {
            // On mobile, show hover effect immediately and play video
            setIsHovered(true);
            handlePlayVideo();
        } else {
            // On desktop, normal behavior
            handlePlayVideo();
        }
    };

    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('lilcontact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className="pt-[60px] lg:pt-[90px] bg-white">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                        {/* Video Column (60%) */}
                        <div className="lg:col-span-3">
                            <div
                                className="video-container relative w-full rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl"
                                style={{ aspectRatio: '6/5' }}
                                onClick={handleVideoClick}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* Custom Thumbnail */}
                                {!isVideoPlaying && (
                                    <div
                                        className="w-full h-full object-cover absolute inset-0"
                                        onClick={handleVideoClick}
                                    >
                                        <img
                                            src="/assets/images/video.webp"
                                            alt="Video thumbnail"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                {/* Play Button */}
                                {!isVideoPlaying && (
                                    <div
                                        className={`play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2 ${
                                            isHovered || isMobile
                                                ? 'bg-fuchsia-400/95 border-fuchsia-400/30 scale-110 shadow-lg shadow-fuchsia-400/40'
                                                : 'bg-white/95 border-white/30'
                                        }`}
                                        onClick={handleVideoClick}
                                    >
                                        <Play className={`text-lg transition-colors duration-300 ml-1 ${isHovered || isMobile ? 'text-white' : 'text-gray-800'}`} size={20} />
                                    </div>
                                )}

                                {/* Video Overlay */}
                                <div
                                    className={`video-overlay absolute inset-0 transition-opacity duration-300 ${isHovered || isMobile ? 'opacity-100' : 'opacity-0'}`}
                                    onClick={handleVideoClick}
                                ></div>

                                {/* Actual Video */}
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    controls={isVideoPlaying}
                                    preload="metadata"
                                    onEnded={handleVideoEnd}
                                    style={{ display: isVideoPlaying ? 'block' : 'none' }}
                                >
                                    <source src="/assets/images/website&landingpage/video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        {/* Content Column (40%) */}
                        <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center">
                            <div className="space-y-6">
                                {/* Title */}
                                <h3 className="text-[24px] lg:text-[40px] font-archivo font-semibold text-black leading-tight">
                                    {t('servicePages.websiteLanding.video.badge')}
                                </h3>

                                {/* Short Description */}
                                <p className="text-gray-600 text-[14px] lg:text-[16px] leading-relaxed">
                                    {t('servicePages.websiteLanding.video.title')}
                                </p>

                                {/* Content Text */}
                                <div className="space-y-4">
                                    <p className="text-gray-800 text-[14px] lg:text-[16px] leading-relaxed">
                                        {t('servicePages.websiteLanding.video.description')}
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={scrollToContact}
                                        className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-black text-[15px] sm:text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"

                                    >
        <span className="">
            {t('shared.cta.partnerNow')}
        </span>
                                        <div
                                            className="w-9 h-9 sm:w-[2.5rem] sm:h-[2.5rem] bg-white rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                            <ArrowUpRight
                                                className="w-5 h-5 text-black transition-all duration-300 group-hover:rotate-12 group-hover:scale-105"
                                                strokeWidth={2.5}/>
                                        </div>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;