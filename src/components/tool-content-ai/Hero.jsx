import React, {useCallback, useEffect, useRef, useState} from 'react';
import { useI18n } from '../../i18n';
import {Link} from "react-router-dom";
import {ArrowUpRight, Check, Copy, Link2, RotateCcw, Send, Sparkles, TrendingUp} from "lucide-react";

/* Bảng màu preview - bám tông tím/xanh của trang (#ee3e99 · #7a6cea · #6a4fdb · #6a4fdb) */

const CHANNELS = [
    { name: 'TikTok', value: '21.7k', width: '92%', color: '#ee3e99' },
    { name: 'Facebook', value: '8.4k', width: '82%', color: '#a07af6' },
    { name: 'YouTube', value: '5.9k', width: '68%', color: '#7a6bf0' },
    { name: 'Shopee', value: '3.1k', width: '55%', color: '#4f7fe0' }
];

const SCORES = [
    { label: 'SEO', value: 94, color: '#ee3e99' },
    { label: 'AEO', value: 90, color: '#7a6cea' },
    { label: 'GEO', value: 96, color: '#4f7fe0' }
];

// Toạ độ giữ trong code, nhãn lấy từ từ điển
const LINK_NODE_POSITIONS = [
    {x: 16, y: 18, color: '#ee3e99'},
    {x: 84, y: 22, color: '#a07af6'},
    {x: 18, y: 82, color: '#7a6bf0'},
    {x: 82, y: 79, color: '#4f7fe0'}
];

const PUBLISH_TARGETS = [
    { name: 'WordPress', short: 'WP', color: '#ee3e99', width: '100%' },
    { name: 'Wix', short: 'WX', color: '#7a6cea', width: '100%' },
    { name: 'Shopify', short: 'SP', color: '#4f7fe0', width: '100%' }
];

const RING_CIRCUMFERENCE = 2 * Math.PI * 26;
const STEP_DURATION = 4200;
const TICK = 50;

/* Số đếm tăng dần mỗi lần frame được mở */
const CountUp = ({value, duration = 900, className}) => {
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        let frameId;
        let startedAt;
        const tick = (now) => {
            if (startedAt === undefined) startedAt = now;
            const ratio = Math.min(1, (now - startedAt) / duration);
            setDisplay(Math.round(value * (1 - Math.pow(1 - ratio, 3))));
            if (ratio < 1) frameId = requestAnimationFrame(tick);
        };
        frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, [value, duration]);

    return <span className={className}>{display}</span>;
};

/* 1 · Phân tích kênh */
const AnalyticsFrame = () => (
    <div className="hero-frame flex h-full flex-col">
        <div className="flex items-center gap-1.5 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#ee3e99]" />
            <span className="h-2 w-2 rounded-full bg-[#7a6cea]" />
            <span className="h-2 w-2 rounded-full bg-[#4f7fe0]" />
            <span className="ml-2 text-[11px] font-bold text-gray-400">social · shop</span>
            <span className="hero-pop ml-auto inline-flex items-center gap-1 rounded-full border border-[#ee3e99]/25 bg-[#ee3e99]/12 px-2.5 py-1 text-[10px] font-bold text-[#f9c3df]" style={{'--delay': '.35s'}}>
                <TrendingUp className="h-3 w-3" />+38%
            </span>
        </div>

        <svg viewBox="0 0 260 54" className="mb-3 h-[54px] w-full" preserveAspectRatio="none" fill="none">
            <defs>
                <linearGradient id="heroAreaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ee3e99" stopOpacity=".38" />
                    <stop offset="100%" stopColor="#6a4fdb" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="heroAreaStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4f7fe0" />
                    <stop offset="100%" stopColor="#ee3e99" />
                </linearGradient>
            </defs>
            <path className="hero-fade" style={{'--delay': '.45s'}} d="M0 44 L37 38 L74 41 L111 27 L148 29 L185 15 L222 18 L260 6 L260 54 L0 54 Z" fill="url(#heroAreaFill)" />
            <path
                className="hero-draw"
                pathLength="100"
                d="M0 44 L37 38 L74 41 L111 27 L148 29 L185 15 L222 18 L260 6"
                stroke="url(#heroAreaStroke)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
            />
        </svg>

        <div className="flex-1 space-y-2.5">
            {CHANNELS.map((channel, index) => (
                <div key={channel.name} className="grid grid-cols-[68px_1fr_44px] items-center gap-3">
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400">
                        <span className="h-1.5 w-1.5 rounded-full" style={{background: channel.color}} />
                        {channel.name}
                    </span>
                    <span className="h-[7px] rounded-full bg-white/8 overflow-hidden">
                        <span
                            className="hero-bar block h-full rounded-full"
                            style={{
                                width: channel.width,
                                '--delay': `${0.15 + index * 0.09}s`,
                                background: `linear-gradient(90deg, ${channel.color}55, ${channel.color})`,
                                boxShadow: `0 0 12px ${channel.color}66`
                            }}
                        />
                    </span>
                    <span className="text-right text-[12px] font-black text-white">{channel.value}</span>
                </div>
            ))}
        </div>
    </div>
);

/* 2 · Từ khóa → kế hoạch nội dung */
const PlanFrame = ({t}) => (
    <div className="hero-frame flex h-full flex-col">
        <p className="text-[10px] font-archivo font-bold uppercase tracking-[.14em] text-gray-500 mb-3">{t('servicePages.toolContentAi.hero.preview.keywords')}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {['seo cho ai', 'geo optimization', 'ai overviews', 'answer engine'].map((keyword, index) => (
                <span
                    key={keyword}
                    className="hero-pop rounded-full border border-[#ee3e99]/25 bg-[#ee3e99]/10 px-3 py-1.5 text-[11.5px] font-bold text-[#e2d3ff]"
                    style={{'--delay': `${index * 0.09}s`}}
                >
                    {keyword}
                </span>
            ))}
        </div>
        <div className="mb-4 flex items-center gap-2">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ee3e99]/45 to-transparent" />
            <span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#c9b0ff]">{t('servicePages.toolContentAi.hero.preview.aiCluster')}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ee3e99]/45 to-transparent" />
        </div>
        <div className="flex-1 space-y-2.5">
            {t('servicePages.toolContentAi.hero.preview.topics').map((topic, index) => (
                <div
                    key={topic}
                    className="hero-pop flex items-center gap-3 rounded-lg border border-white/10 bg-white/[.05] px-3 py-2.5"
                    style={{'--delay': `${0.45 + index * 0.12}s`}}
                >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ee3e99]/18">
                        <Check className="h-3 w-3 text-[#ee3e99]" />
                    </span>
                    <span className="text-[12px] sm:text-[12.5px] font-bold text-white">{topic}</span>
                </div>
            ))}
        </div>
    </div>
);

/* 3 · Viết & chấm điểm */
const ScoreFrame = ({t}) => (
    <div className="hero-frame flex h-full flex-col">
        <div className="mb-3 flex items-center gap-2">
            <p className="text-[10px] font-archivo font-bold uppercase tracking-[.14em] text-gray-500">{t('servicePages.toolContentAi.hero.preview.draft')}</p>
            <span className="hero-pop ml-auto inline-flex items-center gap-1 rounded-full border border-[#ee3e99]/25 bg-[#ee3e99]/12 px-2.5 py-1 text-[10px] font-bold text-[#f9c3df]" style={{'--delay': '.75s'}}>
                <Sparkles className="h-3 w-3" />{t('servicePages.toolContentAi.hero.preview.written')}
            </span>
        </div>

        {/* Khung soạn thảo với hiệu ứng gõ chữ */}
        <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10 bg-white/[.04] p-3">
            <span className="hero-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            <span className="hero-type mb-2.5 block h-2.5 rounded bg-gradient-to-r from-[#ee3e99] to-[#7a6cea]" style={{'--w': '58%', '--delay': '.05s'}} />
            <span className="hero-type mb-1.5 block h-1.5 rounded bg-white/20" style={{'--w': '100%', '--delay': '.25s'}} />
            <span className="hero-type mb-1.5 block h-1.5 rounded bg-white/20" style={{'--w': '86%', '--delay': '.4s'}} />
            <span className="flex items-center gap-1">
                <span className="hero-type block h-1.5 rounded bg-white/20" style={{'--w': '52%', '--delay': '.55s'}} />
                <span className="hero-caret block h-3 w-[2px] rounded-full bg-[#ee3e99]" />
            </span>
        </div>

        {/* Ba vòng điểm số */}
        <div className="flex flex-1 items-start justify-around gap-2">
            {SCORES.map((score, index) => (
                <div key={score.label} className="hero-pop text-center" style={{'--delay': `${0.2 + index * 0.12}s`}}>
                    <div className="relative h-[62px] w-[62px]">
                        <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
                            <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="6" />
                            <circle
                                className="hero-ring"
                                cx="32"
                                cy="32"
                                r="26"
                                fill="none"
                                stroke={score.color}
                                strokeWidth="6"
                                strokeLinecap="round"
                                style={{
                                    strokeDasharray: RING_CIRCUMFERENCE,
                                    '--dash': `${RING_CIRCUMFERENCE * (1 - score.value / 100)}px`,
                                    '--delay': `${0.25 + index * 0.12}s`,
                                    filter: `drop-shadow(0 0 6px ${score.color}80)`
                                }}
                            />
                        </svg>
                        <CountUp value={score.value} className="absolute inset-0 flex items-center justify-center text-[15px] font-black text-white" />
                    </div>
                    <p className="mt-1.5 text-[10px] font-black uppercase tracking-wide" style={{color: score.color}}>{score.label}</p>
                </div>
            ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
            {t('servicePages.toolContentAi.hero.preview.tags').map((tag, index) => (
                <span
                    key={tag}
                    className="hero-pop inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[.04] px-2.5 py-1 text-[10px] font-bold text-gray-300"
                    style={{'--delay': `${0.65 + index * 0.1}s`}}
                >
                    <Check className="h-2.5 w-2.5 text-[#ee3e99]" />{tag}
                </span>
            ))}
        </div>
    </div>
);

/* 4 · Liên kết nội bộ & backlink */
const LinkFrame = ({t, linkNodes}) => (
    <div className="hero-frame flex h-full flex-col">
        <div className="mb-2 flex items-center gap-2">
            <p className="text-[10px] font-archivo font-bold uppercase tracking-[.14em] text-gray-500">{t('servicePages.toolContentAi.hero.preview.linkNetwork')}</p>
            <span className="hero-pop ml-auto inline-flex items-center gap-1 rounded-full border border-[#ee3e99]/25 bg-[#ee3e99]/12 px-2.5 py-1 text-[10px] font-bold text-[#f9c3df]" style={{'--delay': '.9s'}}>
                <Link2 className="h-3 w-3" />{t('servicePages.toolContentAi.hero.preview.auto')}
            </span>
        </div>

        <div className="relative flex-1">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                {linkNodes.map((node, index) => (
                    <g key={node.label}>
                        <path
                            className="hero-draw"
                            pathLength="100"
                            d={`M50 50 L${node.x} ${node.y}`}
                            stroke="rgba(238,62,153,.32)"
                            strokeWidth="1.4"
                            vectorEffect="non-scaling-stroke"
                            style={{'--delay': `${0.2 + index * 0.12}s`}}
                        />
                        {/* Dòng dữ liệu chạy dọc theo liên kết */}
                        <path
                            className="hero-flow"
                            pathLength="100"
                            d={`M50 50 L${node.x} ${node.y}`}
                            stroke={node.color}
                            strokeWidth="1.8"
                            strokeDasharray="4 12"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                            style={{'--delay': `${0.9 + index * 0.12}s`}}
                        />
                    </g>
                ))}
                <path
                    className="hero-fade"
                    pathLength="100"
                    d="M16 18 L84 22 M18 82 L82 79"
                    stroke="rgba(79,127,224,.22)"
                    strokeWidth="1.2"
                    strokeDasharray="3 6"
                    vectorEffect="non-scaling-stroke"
                    style={{'--delay': '.8s'}}
                />
            </svg>

            {/* Nút trung tâm */}
            <div className="hero-hub absolute left-1/2 top-1/2 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-[#ee3e99] bg-gradient-to-br from-[#7a6cea] to-[#6a4fdb] text-white">
                <Sparkles className="h-3.5 w-3.5" />
                <span className="mt-0.5 text-[9px] font-black uppercase tracking-wide">{t('servicePages.toolContentAi.hero.preview.pillar')}</span>
            </div>

            {/* Bài vệ tinh */}
            {linkNodes.map((node, index) => (
                <span
                    key={node.label}
                    className="hero-pop-center absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border bg-[#100f27] px-2.5 py-1.5 text-[10px] font-bold text-white shadow-[0_6px_18px_-6px_rgba(0,0,0,.9)]"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        borderColor: `${node.color}80`,
                        '--delay': `${0.45 + index * 0.12}s`
                    }}
                >
                    <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle" style={{background: node.color}} />
                    {node.label}
                </span>
            ))}
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="hero-pop rounded-lg border border-white/10 bg-white/[.04] px-3 py-1.5" style={{'--delay': '.85s'}}>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">Internal link</p>
                <CountUp value={24} className="text-[14px] font-archivo font-black text-[#ee3e99]" />
            </div>
            <div className="hero-pop rounded-lg border border-white/10 bg-white/[.04] px-3 py-1.5" style={{'--delay': '.95s'}}>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">Backlink</p>
                <CountUp value={12} className="text-[14px] font-archivo font-black text-[#4f7fe0]" />
            </div>
        </div>
    </div>
);

/* 5 · Xuất bản & báo cáo */
const PublishFrame = ({t}) => (
    <div className="hero-frame flex h-full flex-col">
        <div className="mb-3 flex items-center gap-2">
            <p className="text-[10px] font-archivo font-bold uppercase tracking-[.14em] text-gray-500">{t('servicePages.toolContentAi.hero.preview.publish')}</p>
            <span className="hero-pop ml-auto inline-flex items-center gap-1 rounded-full border border-[#ee3e99]/25 bg-[#ee3e99]/12 px-2.5 py-1 text-[10px] font-bold text-[#f9c3df]" style={{'--delay': '.8s'}}>
                <Send className="h-3 w-3" />{t('servicePages.toolContentAi.hero.preview.channels')}
            </span>
        </div>

        <div className="flex-1 space-y-2">
            {PUBLISH_TARGETS.map((target, index) => (
                <div
                    key={target.name}
                    className="hero-pop flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.04] px-3 py-2.5"
                    style={{'--delay': `${index * 0.12}s`}}
                >
                    <span
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[10px] font-black"
                        style={{background: `${target.color}22`, color: target.color, boxShadow: `inset 0 0 0 1px ${target.color}44`}}
                    >
                        {target.short}
                    </span>
                    <div className="min-w-0 flex-1">
                        <p className="text-[11.5px] font-bold text-white">{target.name}</p>
                        <span className="mt-1.5 block h-[3px] overflow-hidden rounded-full bg-white/10">
                            <span
                                className="hero-bar block h-full rounded-full"
                                style={{
                                    width: target.width,
                                    background: `linear-gradient(90deg, ${target.color}66, ${target.color})`,
                                    '--delay': `${0.15 + index * 0.12}s`
                                }}
                            />
                        </span>
                    </div>
                    <span
                        className="hero-pop inline-flex shrink-0 items-center gap-1 rounded-full border border-[#ee3e99]/30 bg-[#ee3e99]/14 px-2 py-1 text-[10px] font-bold text-[#e2d3ff]"
                        style={{'--delay': `${0.6 + index * 0.12}s`}}
                    >
                        <Check className="h-2.5 w-2.5" />{t('servicePages.toolContentAi.hero.preview.posted')}
                    </span>
                </div>
            ))}
        </div>

        <div className="hero-pop mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.05] p-3" style={{'--delay': '.9s'}}>
            <span className="text-[11px] font-bold text-gray-500">{t('servicePages.toolContentAi.hero.preview.shareLink')}</span>
            <span className="truncate text-[11px] font-bold text-[#f9c3df]">/share/r/8f2c...</span>
            <Copy className="ml-auto h-4 w-4 shrink-0 text-gray-500" />
        </div>
    </div>
);

/* memo: thanh tiến trình cập nhật liên tục, không cần render lại khung nội dung */
const FRAMES = [AnalyticsFrame, PlanFrame, ScoreFrame, LinkFrame, PublishFrame].map((Frame) => React.memo(Frame));

const HeroAutomationPreview = () => {
    const { t, tm } = useI18n();
    const steps = tm('servicePages.toolContentAi.hero.steps');
    const linkNodes = LINK_NODE_POSITIONS.map((position, index) => ({
        ...position,
        label: tm('servicePages.toolContentAi.hero.preview.linkNodes')[index]
    }));
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [hovered, setHovered] = useState(false);
    const [inView, setInView] = useState(true);
    const [runId, setRunId] = useState(0);
    const elapsedRef = useRef(0);
    const rootRef = useRef(null);

    /* Cuộn qua khỏi hero -> ngưng hẳn timer và mọi animation CSS để không tốn CPU */
    useEffect(() => {
        const node = rootRef.current;
        if (!node || typeof IntersectionObserver === 'undefined') return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            {rootMargin: '150px 0px', threshold: 0}
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const paused = hovered || !inView;

    const goToStep = useCallback((index) => {
        elapsedRef.current = 0;
        setProgress(0);
        setActiveStep(index);
        setRunId((id) => id + 1);
    }, []);

    const restart = useCallback(() => goToStep(0), [goToStep]);

    useEffect(() => {
        if (paused) return undefined;
        const timer = setInterval(() => {
            elapsedRef.current += TICK;
            if (elapsedRef.current >= STEP_DURATION) {
                elapsedRef.current = 0;
                setProgress(0);
                setRunId((id) => id + 1);
                setActiveStep((step) => (step + 1) % steps.length);
            } else {
                setProgress(elapsedRef.current / STEP_DURATION);
            }
        }, TICK);
        return () => clearInterval(timer);
    }, [paused, activeStep, runId, steps.length]);

    const ActiveFrame = FRAMES[activeStep];

    return (
        <div ref={rootRef} className={`relative mx-auto w-full max-w-[620px] lg:max-w-none${inView ? '' : ' hero-offscreen'}`}>
            <style>{`
                @keyframes heroFrameIn {
                    from { opacity: 0; transform: translateY(12px) scale(.98); }
                    to { opacity: 1; transform: none; }
                }
                @keyframes heroPopIn {
                    from { opacity: 0; transform: translateY(10px) scale(.93); }
                    to { opacity: 1; transform: none; }
                }
                @keyframes heroFadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes heroBarGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
                @keyframes heroRingFill {
                    from { stroke-dashoffset: ${RING_CIRCUMFERENCE}px; }
                    to { stroke-dashoffset: var(--dash); }
                }
                @keyframes heroDrawLine { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
                @keyframes heroTypeLine { from { width: 0; } to { width: var(--w); } }
                @keyframes heroCaret { 0%, 45% { opacity: 1; } 50%, 95% { opacity: 0; } 100% { opacity: 1; } }
                @keyframes heroShine { from { transform: translateX(0); } to { transform: translateX(320%); } }
                /* Các phần tử canh giữa bằng translate cần keyframe riêng để không mất tâm */
                @keyframes heroPopCenter {
                    from { opacity: 0; transform: translate(-50%, -50%) scale(.85); }
                    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                }
                @keyframes heroHubIn {
                    from { opacity: 0; transform: translate(-50%, -50%) scale(.78); }
                    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                }
                @keyframes heroHubGlow {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 26px rgba(238,62,153,.45); }
                    50% { transform: translate(-50%, -50%) scale(1.06); box-shadow: 0 0 42px rgba(238,62,153,.85); }
                }
                @keyframes heroDashFlow { to { stroke-dashoffset: -26; } }
                @keyframes heroOrbit { to { transform: rotate(360deg); } }
                @keyframes heroLiveDot {
                    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(238,62,153,.55); }
                    70% { opacity: .65; box-shadow: 0 0 0 7px rgba(238,62,153,0); }
                }
                @keyframes heroSpin { from { transform: rotate(0); } to { transform: rotate(-360deg); } }

                .hero-frame { animation: heroFrameIn .5s cubic-bezier(.22,1,.36,1) both; }
                .hero-pop { animation: heroPopIn .55s cubic-bezier(.22,1,.36,1) both; animation-delay: var(--delay, 0s); }
                .hero-fade { animation: heroFadeIn .7s ease-out both; animation-delay: var(--delay, 0s); }
                .hero-bar { transform-origin: left; animation: heroBarGrow 1s cubic-bezier(.22,1,.36,1) both; animation-delay: var(--delay, 0s); }
                .hero-ring { animation: heroRingFill 1.1s cubic-bezier(.22,1,.36,1) both; animation-delay: var(--delay, 0s); }
                .hero-draw { stroke-dasharray: 100; animation: heroDrawLine .9s cubic-bezier(.22,1,.36,1) both; animation-delay: var(--delay, 0s); }
                .hero-flow { opacity: 0; animation: heroFadeIn .5s ease-out var(--delay, 0s) forwards, heroDashFlow 1.3s linear var(--delay, 0s) infinite; }
                .hero-type { animation: heroTypeLine .65s cubic-bezier(.22,1,.36,1) both; animation-delay: var(--delay, 0s); }
                .hero-caret { animation: heroCaret 1s steps(1) infinite; }
                .hero-shine { animation: heroShine 2.2s cubic-bezier(.4,0,.2,1) .3s both; }
                .hero-pop-center { animation: heroPopCenter .55s cubic-bezier(.22,1,.36,1) both; animation-delay: var(--delay, 0s); }
                .hero-hub { animation: heroHubIn .5s cubic-bezier(.22,1,.36,1) both, heroHubGlow 2.8s ease-in-out .5s infinite; }
                .hero-orbit { animation: heroOrbit 14s linear infinite; }
                .hero-live-dot { animation: heroLiveDot 2s ease-out infinite; }
                .hero-spin { animation: heroSpin .6s cubic-bezier(.4,0,.2,1); }

                /* Khuất khỏi màn hình: đóng băng mọi animation (kể cả loại chạy vô hạn) */
                .hero-offscreen, .hero-offscreen * { animation-play-state: paused; }

                @media (prefers-reduced-motion: reduce) {
                    .hero-frame, .hero-pop, .hero-pop-center, .hero-fade, .hero-bar, .hero-ring, .hero-draw, .hero-flow,
                    .hero-type, .hero-caret, .hero-shine, .hero-hub, .hero-orbit, .hero-live-dot, .hero-spin {
                        animation: none !important;
                    }
                    .hero-bar { transform: none; }
                    .hero-ring { stroke-dashoffset: var(--dash); }
                    .hero-draw { stroke-dashoffset: 0; }
                    .hero-flow { opacity: 1; }
                    .hero-hub { transform: translate(-50%, -50%); }
                    .hero-type { width: var(--w); }
                    .hero-shine { display: none; }
                }
            `}</style>

            {/* Hào quang nền */}
            <div className="absolute -inset-5 rounded-[2.2rem] bg-[radial-gradient(circle_at_72%_8%,rgba(238,62,153,.32),transparent_38%),radial-gradient(circle_at_18%_78%,rgba(26,68,152,.3),transparent_36%)] blur-3xl" />
            <div className="absolute -inset-px overflow-hidden rounded-[1.5rem] opacity-70">
                <div className="hero-orbit absolute left-1/2 top-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(238,62,153,.5)_50deg,transparent_120deg,transparent_240deg,rgba(26,68,152,.55)_300deg,transparent_360deg)]" />
            </div>

            <div
                className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#06060f] p-2 shadow-[0_30px_80px_-30px_rgba(85,52,187,.7)]"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(238,62,153,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(238,62,153,.05)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40" />

                <div className="relative rounded-[1.2rem] border border-white/10 bg-gradient-to-br from-[#1f0b2a] via-[#0d0f26] to-[#070818] p-4 sm:p-5">
                    {/* Thanh tiêu đề */}
                    <div className="mb-4 flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-2.5">
                            <span className={`h-2 w-2 shrink-0 rounded-full ${paused ? 'bg-[#4f7fe0]' : 'hero-live-dot bg-[#ee3e99]'}`} />
                            <span className="text-[10px] sm:text-[11px] font-archivo font-bold uppercase tracking-[.14em] text-[#c9b0ff]">
                                {paused ? t('servicePages.toolContentAi.hero.preview.paused') : t('servicePages.toolContentAi.hero.preview.running')}
                            </span>
                            <span className="hidden h-3 w-px bg-white/15 sm:block" />
                            <span className="truncate text-[12px] sm:text-[13px] font-semibold text-white">{steps[activeStep]?.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="hidden items-center gap-1.5 rounded-full border border-[#ee3e99]/30 bg-[#ee3e99]/10 px-2.5 py-1 text-[10px] font-bold text-[#f9c3df] sm:inline-flex">
                                <Sparkles className="h-3 w-3" />Auto
                            </span>
                            <button
                                type="button"
                                onClick={restart}
                                aria-label={t('servicePages.toolContentAi.hero.preview.restartAria')}
                                title={t('servicePages.toolContentAi.hero.preview.restartTitle')}
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors duration-200 hover:border-[#ee3e99]/50 hover:bg-[#ee3e99]/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ee3e99]/70"
                            >
                                <RotateCcw key={runId} className="hero-spin h-3.5 w-3.5" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[.92fr_1.08fr]">
                        {/* Cột trái: bấm để xem từng bước */}
                        <div className="space-y-1.5">
                            {steps.map((step, index) => {
                                const isActive = index === activeStep;
                                const isDone = index < activeStep;
                                return (
                                    <button
                                        key={step.title}
                                        type="button"
                                        onClick={() => goToStep(index)}
                                        aria-current={isActive ? 'step' : undefined}
                                        className={`group relative w-full border-white/10 overflow-hidden rounded-xl border px-3 py-2.5 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ee3e99]/70 ${
                                            isActive
                                                ? 'border-[#ee3e99]/55 bg-[#ee3e99]/12 shadow-[0_10px_30px_-12px_rgba(85,52,187,.9)]'
                                                : 'border-white/8 bg-white/[.02] hover:border-[#ee3e99]/35 hover:bg-white/[.06]'
                                        }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div
                                                className={`mt-0.5 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border text-[12px] font-black transition-all duration-300 ${
                                                    isActive
                                                        ? 'border-[#ee3e99]/90 bg-gradient-to-br from-[#ee3e99] to-[#6a4fdb] text-white shadow-[0_0_0_4px_rgba(238,62,153,.14)]'
                                                        : isDone
                                                            ? 'border-[#ee3e99]/35 bg-[#ee3e99]/15 text-[#ee3e99]'
                                                            : 'border-white/10 bg-white/[.06] text-gray-400 group-hover:text-white'
                                                }`}
                                            >
                                                {isDone ? <Check className="h-3.5 w-3.5" /> : index + 1}
                                            </div>
                                            <div className="min-w-0">
                                                <p className={`font-archivo text-[13px] font-bold leading-tight transition-colors duration-300 sm:text-[14px] ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                                                    {step.title}
                                                </p>
                                                <p className="mt-0.5 text-[11px] font-medium leading-snug text-gray-400 sm:text-[12px]">{step.desc}</p>
                                            </div>
                                        </div>

                                        {isActive && (
                                            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white/8">
                                                <span
                                                    className="block h-full rounded-full bg-gradient-to-r from-[#ee3e99] to-[#4f7fe0]"
                                                    style={{width: `${progress * 100}%`}}
                                                />
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Cột phải: màn hình thao tác */}
                        <div className="relative min-h-[318px] overflow-hidden rounded-2xl border border-white/10 bg-[#080a18]/95">
                            <div key={`${activeStep}-${runId}`} className="absolute inset-0 p-4">
                                <ActiveFrame t={t} linkNodes={linkNodes} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Hero = () => {
    const { t } = useI18n();
    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('features');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    const OpenNewSite = (e) => {
        e.preventDefault();
        window.open('https://app.nextgency.vn/login', '_blank');
    };
    return (
        <section className="bg-white py-[60px] lg:py-[90px] relative">
            <div className="relative md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 items-center">
                    {/* Content Column - 60% */}
                    <div className="lg:col-span-2 space-y-4 mb-4 pr-4 lg:mb-0">
                        {/* Badge */}
                        <div className="inline-flex rounded-full border border-black/10 bg-white p-1 neu-shadow-xs">
                            <span className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0d0f26] to-[#1f0b2a] pl-3.5 pr-4 py-2 shadow-[0_10px_24px_-14px_rgba(85,52,187,.9)]">
                                <span className="relative flex h-2 w-2 shrink-0">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ee3e99] opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ee3e99]" />
                                </span>
                                <span className="text-[12px] lg:text-[13px] font-archivo font-bold text-white whitespace-nowrap">
                                    {t('servicePages.toolContentAi.hero.badge')}
                                </span>
                            </span>
                        </div>

                        {/* Title Section */}
                        <div className="">
                            <h1 className="text-[32px] md:text-[40px] lg:text-[50px] font-archivo font-bold bg-black  bg-clip-text text-transparent leading-[1.2] tracking-tight">
                                {t('servicePages.toolContentAi.hero.titleLine1')}
                            </h1>
                            <div className="flex items-center gap-4">
                                <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-archivo font-bold bg-gradient-to-r from-black to-[#ee3e99] bg-clip-text text-transparent leading-[1.4] tracking-tight">
                                    {t('servicePages.toolContentAi.hero.titleLine2')}
                                </h1>
                                {/* SVG Circles */}
                                <div className="flex-shrink-0">
                                    <svg
                                        width="94"
                                        height="51"
                                        viewBox="0 0 94 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12"
                                    >
                                        <circle
                                            cx="25.4404"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#fdeef6"
                                            className="animate-pulse"
                                            style={{ animationDelay: '0s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="40.1005"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#fbd5e8"
                                            className="animate-pulse"
                                            style={{ animationDelay: '0.5s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="53.8994"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#f7b3d6"
                                            className="animate-pulse"
                                            style={{ animationDelay: '1s', animationDuration: '2s' }}
                                        />
                                        <circle
                                            cx="68.5596"
                                            cy="25.4404"
                                            r="25.4404"
                                            fill="#f06aae"
                                            className="animate-pulse"
                                            style={{ animationDelay: '1.5s', animationDuration: '2s' }}
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Divider Line */}
                        <div className="hidden lg:block w-72 h-0.5 bg-black"></div>

                        {/* Description */}
                        <div className="space-y-4">

                            {/* Bullet Points */}
                            <div className="space-y-4">
                                <p className="text-[14px] lg:text-[16px] text-gray-700">
                                    {t('servicePages.toolContentAi.hero.description')}
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-4">
                            <button
                                onClick={OpenNewSite}
                                className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#6a4fdb] via-[#ee3e99] to-[#6a4fdb] text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/20 hover:scale-105 group animate-gradient-shift"
                                style={{
                                    backgroundSize: '200% 200%'
                                }}
                            >
                                <span className="">
                                    {t('servicePages.toolContentAi.hero.ctaTrial')}
                                </span>
                                <div className="w-[2.5rem] h-[2.5rem] bg-black rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-105" strokeWidth={2.5}/>
                                </div>
                            </button>
                            <button
                                onClick={scrollToContact}
                                className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-black text-[15px] sm:text-[16px] text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 group"

                            >
                                <span className="">
                                    {t('servicePages.toolContentAi.hero.ctaFeatures')}
                                </span>
                                <div
                                    className="w-9 h-9 sm:w-[2.5rem] sm:h-[2.5rem] bg-white rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                    <ArrowUpRight
                                        className="w-5 h-5 text-black transition-all duration-300 group-hover:rotate-12 group-hover:scale-105"
                                        strokeWidth={2.5}/>
                                </div>
                            </button>

                        </div>
                        <div className="space-y-4">
                            <p className="text-[14px] lg:text-[16px] text-gray-700">
                                {t('servicePages.toolContentAi.hero.note')}
                            </p>
                        </div>
                    </div>

                    {/* Preview Column - 40% */}
                    <div className="lg:col-span-2 mt-8 lg:mt-0">
                        <HeroAutomationPreview />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
