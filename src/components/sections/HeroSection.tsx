'use client';

import { useTranslation } from '@/i18n/TranslationContext';
import { track } from '@/lib/analytics';

// Inline SVG to avoid runtime fetch from Iconify CDN (solar:arrow-right-linear)
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
    </svg>
  );
}

export default function HeroSection() {
  const { t, href } = useTranslation();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden" id="os">
      <div className="perspective-grid opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(157,78,221,0.15) 0%, transparent 70%)' }}></div>

      <div className="relative z-10 text-center max-w-7xl px-6">
        <h1 className="text-[12vw] sm:text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tightest text-white leading-[1.1] md:leading-[0.95] mb-10 w-full whitespace-nowrap overflow-hidden text-clip flex flex-col items-center">
          <div className="py-[0.1em]"><span className="block reveal-text drop-shadow-2xl px-2">{t('hero.titleTop')}</span></div>
          <div className="flex justify-center gap-2 md:gap-4 items-center flex-wrap md:flex-nowrap py-[0.1em]">
            <span className="block reveal-text text-white/30 italic font-serif tracking-tight pr-2 md:pr-4 text-[0.8em]">{t('hero.titleMid')}</span>
            <span className="block reveal-text text-gradient-premium">{t('hero.titleBot')}</span>
          </div>
        </h1>

        <p className="text-lg md:text-xl text-luxota-dim max-w-xl mx-auto leading-relaxed mb-14 font-light reveal-hero-fade">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 reveal-hero-fade" style={{ animationDelay: '0.5s' }}>
          <a href="#action" onClick={() => track('CTA: Audit Click', { source: 'hero' })} className="group relative px-9 py-4 bg-white text-luxota-bg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">
            <div className="btn-glow"></div>
            <span className="relative z-10 text-sm font-bold flex items-center gap-2">
              {t('hero.actionAudit')}
              <span className="group-hover:translate-x-1 transition-transform">
                <ArrowRightIcon />
              </span>
            </span>
            <div className="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
          </a>
          <a href={href('/portfolio')} onClick={() => track('CTA: Portfolio Click', { source: 'hero' })} className="px-9 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-white font-medium text-sm hover:border-white/30 hover:shadow-lg">
            {t('hero.actionResults')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 reveal-hero-fade z-20" style={{ animationDelay: '0.8s' }}>
        <span className="text-[9px] text-white/30 tracking-[0.3em] uppercase">{t('hero.scroll')}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      </div>
    </section>
  );
}
