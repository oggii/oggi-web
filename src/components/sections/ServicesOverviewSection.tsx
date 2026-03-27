'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '@/i18n/TranslationContext';

/* ─── Card data ─────────────────────────────────────────────────────────── */
const getCards = (t: any) => [
  {
    num: '01',
    iconType: 'solar' as const,
    icon: 'solar:laptop-minimalistic-bold-duotone',
    title: t('servicesOverview.c1Title'),
    pillar: t('servicesOverview.c1Pillar'),
    desc: t('servicesOverview.c1Desc'),
    items: [t('servicesOverview.c1Item1'), t('servicesOverview.c1Item2'), t('servicesOverview.c1Item3')],
    link: '/services',
    linkLabel: t('servicesOverview.c1Btn'),
  },
  {
    num: '02',
    iconType: 'solar' as const,
    icon: 'solar:ranking-bold-duotone',
    title: t('servicesOverview.c2Title'),
    pillar: t('servicesOverview.c2Pillar'),
    desc: t('servicesOverview.c2Desc'),
    items: [t('servicesOverview.c2Item1'), t('servicesOverview.c2Item2'), t('servicesOverview.c2Item3')],
    link: '/services',
    linkLabel: t('servicesOverview.c2Btn'),
  },
  {
    num: '03',
    iconType: 'img' as const,
    icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/openclaw.png',
    title: t('servicesOverview.c3Title'),
    pillar: t('servicesOverview.c3Pillar'),
    desc: t('servicesOverview.c3Desc'),
    items: [t('servicesOverview.c3Item1'), t('servicesOverview.c3Item2'), t('servicesOverview.c3Item3')],
    link: '/openclaw',
    linkLabel: t('servicesOverview.c3Btn'),
  },
  {
    num: '04',
    iconType: 'img' as const,
    icon: 'https://hermes-agent.nousresearch.com/nous-logo.png',
    title: t('servicesOverview.c4Title'),
    pillar: t('servicesOverview.c4Pillar'),
    desc: t('servicesOverview.c4Desc'),
    items: [t('servicesOverview.c4Item1'), t('servicesOverview.c4Item2'), t('servicesOverview.c4Item3')],
    link: '/hermes',
    linkLabel: t('servicesOverview.c4Btn'),
  }
];
/* ─── CSS keyframes injected once ────────────────────────────────────────── */
const GRAPHIC_STYLES = `
  @keyframes svc-float {
    0%,100% { transform: rotate(5deg) translateY(0px) translateX(32px); }
    50%      { transform: rotate(3deg) translateY(-14px) translateX(32px); }
  }
  @keyframes svc-shimmer-sweep {
    0%        { left: -80%; }
    60%,100%  { left: 130%; }
  }
  @keyframes svc-bar-1 {
    0%,10%  { width:15%; opacity:.35; }
    40%,65% { width:100%; opacity:1; }
    90%,100%{ width:15%; opacity:.35; }
  }
  @keyframes svc-bar-2 {
    0%,15%  { width:15%; opacity:.35; }
    45%,68% { width:78%; opacity:1; }
    95%,100%{ width:15%; opacity:.35; }
  }
  @keyframes svc-bar-3 {
    0%,20%  { width:15%; opacity:.35; }
    50%,70% { width:52%; opacity:1; }
    100%    { width:15%; opacity:.35; }
  }
  @keyframes svc-dot {
    0%,100% { opacity:.3; transform:scale(0.7); }
    50%     { opacity:1;  transform:scale(1.3); }
  }
  @keyframes svc-flow {
    0%   { width:10%; }
    65%  { width:90%; }
    100% { width:10%; }
  }
  @keyframes svc-badge {
    0%,100% { box-shadow:inset 0 0 0 1px rgba(157,78,221,.15); }
    50%     { box-shadow:inset 0 0 14px 3px rgba(157,78,221,.45),0 0 18px 4px rgba(157,78,221,.15); }
  }
  @keyframes svc-orbit-ping {
    0%,100% { transform:translate(-50%,-50%) scale(1); box-shadow:0 0 0 0 rgba(157,78,221,0); }
    50%     { transform:translate(-50%,-50%) scale(1.18); box-shadow:0 0 14px 5px rgba(157,78,221,.3); }
  }
  @keyframes svc-logo-glow {
    0%,100% { box-shadow:0 0 0 0 rgba(157,78,221,0),0 0 20px rgba(157,78,221,.1); }
    50%     { box-shadow:0 0 0 10px rgba(157,78,221,0),0 0 44px rgba(157,78,221,.45); }
  }
  @keyframes svc-progress {
    0%   { width:12%; }
    70%  { width:96%; }
    100% { width:12%; }
  }
`;

/* ─── Animated graphics ───────────────────────────────────────────────────── */

function WebdesignGraphic() {
  return (
    <div style={{ position: 'relative', width: '260px', height: '320px' }}>
      {/* Floating tilted browser mockup */}
      <div style={{
        width: '100%', height: '100%',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '20px',
        background: 'rgba(8,8,12,0.8)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
        animation: 'svc-float 5s ease-in-out infinite',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Shimmer sweep */}
        <div style={{
          position: 'absolute', top: 0, bottom: 0, width: '35%',
          background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.035),transparent)',
          animation: 'svc-shimmer-sweep 4s ease-in-out infinite',
          pointerEvents: 'none', zIndex: 10,
        }} />
        {/* Nav bar */}
        <div style={{ position: 'absolute', top: '16px', left: '16px', right: '16px', height: '10px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px' }} />
        {/* Hero blob */}
        <div style={{ position: 'absolute', top: '44px', left: '16px', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(157,78,221,0.65)', boxShadow: '0 0 22px rgba(157,78,221,0.45)' }} />
        {/* Text lines */}
        <div style={{ position: 'absolute', top: '48px', left: '64px', right: '16px', height: '9px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px' }} />
        <div style={{ position: 'absolute', top: '64px', left: '64px', width: '55%', height: '7px', background: 'rgba(255,255,255,0.06)', borderRadius: '999px' }} />
        {/* Content card */}
        <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', height: '128px', background: 'rgba(255,255,255,0.04)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ position: 'absolute', top: '14px', left: '14px', right: '14px', height: '7px', background: 'rgba(255,255,255,0.09)', borderRadius: '4px' }} />
          <div style={{ position: 'absolute', top: '28px', left: '14px', width: '65%', height: '5px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
          <div style={{ position: 'absolute', top: '42px', left: '14px', width: '80%', height: '5px', background: 'rgba(255,255,255,0.04)', borderRadius: '4px' }} />
          <div style={{ position: 'absolute', bottom: '14px', left: '14px', width: '72px', height: '22px', background: 'rgba(157,78,221,0.28)', borderRadius: '999px', border: '1px solid rgba(157,78,221,0.38)' }} />
        </div>
      </div>
    </div>
  );
}

function SeoGraphic() {
  const bars = [
    { label: '#1', anim: 'svc-bar-1 3.2s ease-in-out infinite', delay: '0s' },
    { label: '#2', anim: 'svc-bar-2 3.2s ease-in-out infinite', delay: '0.35s' },
    { label: '#3', anim: 'svc-bar-3 3.2s ease-in-out infinite', delay: '0.7s' },
  ];
  return (
    <div style={{ position: 'relative', width: '280px', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', width: '210px', height: '210px', borderRadius: '50%', border: '1px solid rgba(157,78,221,0.18)', animation: 'spin 10s linear infinite' }} />
      <div style={{ position: 'absolute', width: '290px', height: '290px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', animation: 'spin 16s linear infinite reverse' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', zIndex: 10 }}>
        {bars.map((b) => (
          <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(157,78,221,0.7)', width: '18px', flexShrink: 0 }}>{b.label}</span>
            <div style={{ width: '130px', height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: 'linear-gradient(90deg,rgba(157,78,221,0.45),rgba(157,78,221,0.9))', borderRadius: '999px', animation: b.anim, animationDelay: b.delay }} />
            </div>
          </div>
        ))}
      </div>
      {/* Centre pulse dot */}
      <div style={{ position: 'absolute', width: '8px', height: '8px', borderRadius: '50%', background: '#9D4EDD', boxShadow: '0 0 18px rgba(157,78,221,0.8)', animation: 'svc-dot 2s ease-in-out infinite' }} />
    </div>
  );
}

function N8nGraphic() {
  const rows = [0.9, 0.55, 0.7];
  return (
    <div style={{ width: '224px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '22px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '12px', backdropFilter: 'blur(12px)', boxShadow: '0 24px 40px rgba(0,0,0,0.45)' }}>
      {rows.map((op, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: `rgba(157,78,221,${op})`, animation: `svc-dot 1.8s ease-in-out infinite`, animationDelay: `${i * 0.3}s`, flexShrink: 0 }} />
          <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ height: '100%', background: `rgba(157,78,221,${op * 0.7})`, borderRadius: '2px', animation: `svc-flow 2.6s ease-in-out infinite`, animationDelay: `${i * 0.45}s` }} />
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
        <div style={{ height: '34px', background: 'rgba(157,78,221,0.1)', border: '1px solid rgba(157,78,221,0.22)', borderRadius: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'rgba(157,78,221,0.9)', fontFamily: 'monospace', letterSpacing: '0.1em', animation: 'svc-badge 2.8s ease-in-out infinite' }}>
          ✓ AUTOMATISIERT
        </div>
        <div style={{ height: '30px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'rgba(255,255,255,0.28)', fontFamily: 'monospace', letterSpacing: '0.1em' }}>
          ↺ WORKFLOW AKTIV
        </div>
      </div>
    </div>
  );
}

function OpenClawGraphic() {
  const orbit = [
    { icon: '💬', deg: 0 },
    { icon: '🗄️', deg: 72 },
    { icon: '✉️', deg: 144 },
    { icon: '📅', deg: 216 },
    { icon: '🎤', deg: 288 },
  ];
  return (
    <div style={{ position: 'relative', width: '280px', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Rings */}
      <div style={{ position: 'absolute', width: '140px', height: '140px', borderRadius: '50%', border: '1px solid rgba(157,78,221,0.15)', animation: 'spin 8s linear infinite reverse' }} />
      <div style={{ position: 'absolute', width: '210px', height: '210px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', animation: 'spin 13s linear infinite' }} />
      {/* Logo */}
      <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#0A0A0C', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, animation: 'svc-logo-glow 3s ease-in-out infinite', overflow: 'hidden' }}>
        <Image src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/openclaw.png" alt="OpenClaw" width={40} height={40} className="object-contain" unoptimized />
      </div>
      {/* Orbit nodes — sequential glow ping */}
      {orbit.map((n, i) => {
        const rad = (n.deg * Math.PI) / 180;
        const r = 100;
        const x = Math.cos(rad - Math.PI / 2) * r;
        const y = Math.sin(rad - Math.PI / 2) * r;
        return (
          <div key={n.deg} style={{
            position: 'absolute',
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: 'translate(-50%,-50%)',
            width: '34px', height: '34px',
            borderRadius: '50%',
            background: '#0A0A0C',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px',
            animation: `svc-orbit-ping 2.6s ease-in-out infinite`,
            animationDelay: `${i * 0.52}s`,
          }}>
            {n.icon}
          </div>
        );
      })}
    </div>
  );
}

function HermesGraphic() {
  const steps = [
    { label: 'Task erhalten', delay: '0s', accent: false },
    { label: 'Evaluierung', delay: '0.55s', accent: true },
    { label: 'Skill gespeichert', delay: '1.1s', accent: false },
    { label: 'Verbessert', delay: '1.65s', accent: true },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      {/* Logo with outer ping ring */}
      <div style={{ position: 'relative', width: '72px', height: '72px' }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#12121A', border: '1px solid rgba(157,78,221,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'svc-logo-glow 2.8s ease-in-out infinite', overflow: 'hidden' }}>
          <Image src="https://hermes-agent.nousresearch.com/nous-logo.png" alt="Hermes" width={44} height={44} className="object-contain" unoptimized />
        </div>
        <div style={{ position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1px solid rgba(157,78,221,0.18)', animation: 'svc-orbit-ping 2.8s ease-in-out infinite' }} />
      </div>
      {/* Self-learning steps */}
      <div style={{ width: '196px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {steps.map((s, i) => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(157,78,221,0.14)', border: '1px solid rgba(157,78,221,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', color: 'rgba(157,78,221,0.8)', fontFamily: 'monospace', flexShrink: 0 }}>{i + 1}</div>
            <div style={{ flex: 1, height: '5px', background: 'rgba(255,255,255,0.06)', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: s.accent ? 'rgba(157,78,221,0.7)' : 'rgba(255,255,255,0.14)', borderRadius: '999px', animation: `svc-progress 3.2s ease-in-out infinite`, animationDelay: s.delay }} />
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'center', fontSize: '8px', fontFamily: 'monospace', color: 'rgba(157,78,221,0.5)', letterSpacing: '0.15em', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '8px' }}>
          LERNZYKLUS AKTIV
        </div>
      </div>
    </div>
  );
}

const graphics = [WebdesignGraphic, SeoGraphic, OpenClawGraphic, HermesGraphic, N8nGraphic];

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function ServicesOverviewSection() {
  const pinSectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const cards = getCards(t);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!pinSectionRef.current || !trackRef.current) return;

    const track = trackRef.current;
    const pinSection = pinSectionRef.current;
    const cardGraphics = document.querySelectorAll('.svc-card-graphic > *');
    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 80);

    const matchMedia = gsap.matchMedia();

    matchMedia.add('(min-width: 1024px)', () => {
      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: pinSection,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth + 80}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Parallax on desktop graphic columns only
      gsap.to(cardGraphics, {
        x: -70,
        ease: 'none',
        scrollTrigger: {
          trigger: pinSection,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth + 80}`,
          scrub: 1,
        },
      });

      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    });

    return () => matchMedia.revert();
  }, []);

  return (
    <>
      {/* Inject keyframes once */}
      <style dangerouslySetInnerHTML={{ __html: GRAPHIC_STYLES }} />

      <div className="relative z-30 bg-luxota-bg border-t border-white/5">
        <div className="pin-spacer relative w-full">
          <section ref={pinSectionRef} className="h-[100svh] min-h-[600px] lg:h-[100svh] relative bg-luxota-bg flex flex-col">
            {/* ── Pinned header ── */}
            <div className="absolute lg:top-0 top-2 lg:top-6 left-0 right-0 z-20 px-5 md:px-12 pt-14 md:pt-32 lg:pt-14 flex justify-between lg:items-start items-center pointer-events-none">
              <div>
                <span className="text-[9px] md:text-[10px] text-luxota-accent font-mono mb-1 md:mb-2 block tracking-widest">{t('servicesOverview.tag')}</span>
                <h2 className="text-lg md:text-3xl lg:text-4xl font-medium text-white tracking-tight leading-snug">
                  {t('servicesOverview.title1')}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxota-accent to-white/30 block lg:inline">{t('servicesOverview.title2')}</span>
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-white/30 lg:mt-1">
                <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center">
                  <Icon icon="solar:mouse-circle-linear" className="animate-bounce text-base" />
                </div>
                <span className="text-[10px] font-mono tracking-widest">{t('servicesOverview.scrollHint')}</span>
              </div>
            </div>

            {/* ── Horizontal track ── */}
            <div
              ref={trackRef}
              className="flex w-full lg:w-max h-full lg:h-full items-center overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none hide-scrollbar lg:pl-[clamp(1.25rem,8vw,12rem)] pt-[160px] pb-[60px] lg:pt-[180px] lg:pb-[30px]"
              style={{
                paddingRight: 'clamp(1.25rem, 4vw, 6rem)',
                gap: 'clamp(1.25rem, 2vw, 2.5rem)',
              }}
            >
              {cards.map((card, idx) => {
                const Graphic = graphics[idx];
                return (
                  <div
                    key={card.num}
                    className="
                      w-[85vw] max-w-[340px]
                      lg:w-[60vw] lg:max-w-[700px]
                      h-[calc(100svh-250px)] min-h-[440px] max-h-[520px] lg:h-full lg:max-h-[600px]
                      spotlight-card rounded-[1.75rem] lg:rounded-[2rem]
                      p-5 pb-6 lg:p-10
                      shrink-0 relative flex first:ml-5 lg:first:ml-0 snap-center
                      border border-white/10 bg-[#050507] group
                    "
                  >
                    {/* Left content col */}
                    <div className="w-full lg:w-[45%] flex flex-col justify-between relative z-10 h-full">
                      <div>
                        {/* Icon badge */}
                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 lg:mb-7 shadow-xl overflow-hidden">
                          {card.iconType === 'img' ? (
                            <Image src={card.icon} alt={card.title} width={32} height={32} className="object-contain" unoptimized />
                          ) : (
                            <Icon icon={card.icon} className="text-2xl lg:text-3xl text-luxota-accent" />
                          )}
                        </div>

                        <div className="text-[9px] font-mono text-white/30 tracking-[0.2em] uppercase mb-1.5">{card.pillar}</div>
                        <h3 className="text-2xl lg:text-4xl text-white font-medium mb-3 lg:mb-4 tracking-tight leading-tight">{card.title}</h3>
                        <p className="text-xs lg:text-sm text-luxota-dim leading-relaxed line-clamp-3 lg:line-clamp-none">{card.desc}</p>
                      </div>

                      {/* Mobile-only graphic — shown inline between desc and bullets */}
                      <div className="block lg:hidden w-full flex items-center justify-center overflow-hidden flex-1 py-1" style={{ maxHeight: '140px' }}>
                        <div className="scale-[0.45] xs:scale-[0.52] origin-center">
                          <Graphic />
                        </div>
                      </div>

                      <div>
                        <ul className="space-y-2 lg:space-y-2.5 mb-5 lg:mb-6">
                          {card.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2.5 text-xs lg:text-sm text-white/75">
                              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-luxota-accent/10 flex items-center justify-center shrink-0">
                                <Icon icon="solar:check-circle-linear" className="text-luxota-accent text-[10px] lg:text-xs" />
                              </div>
                              {item}
                            </li>
                          ))}
                        </ul>

                        <Link href={card.link}>
                          <button className="svc-discover-btn w-full lg:w-auto justify-center py-2.5 lg:py-3 font-bold">
                            <span>{card.linkLabel}</span>
                            <Icon icon="solar:arrow-right-linear" className="text-luxota-accent text-sm" />
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Right graphic — desktop only, parallax target */}
                    <div className="hidden lg:flex w-[55%] absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white/[0.02] to-transparent items-center justify-center overflow-hidden svc-card-graphic pointer-events-none">
                      <Graphic />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile scroll hint */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center sm:hidden pointer-events-none">
              <div className="flex items-center gap-2 text-white/20">
                <Icon icon="solar:hand-swipe-right-linear" className="text-lg" />
                <span className="text-[9px] font-mono tracking-widest">{t('servicesOverview.scrollHint').replace('SCROLLEN', 'SWIPEN')}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
