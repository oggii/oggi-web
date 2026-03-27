'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '@/i18n/TranslationContext';

export default function NarrativeSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray('.highlight-word');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          anticipatePin: 1,
          scrub: 1,
        }
      });

      tl.fromTo(words,
        { opacity: 0.1, filter: "blur(8px)", y: 20, scale: 0.95 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          scale: 1,
          stagger: 0.1,
          color: (i, target) => (target as HTMLElement).classList.contains("text-luxota-accent") ? "#9D4EDD" : "#ffffff",
          duration: 1,
          ease: "power2.out"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pin-spacer">
      <section ref={containerRef} className="min-h-[100svh] flex items-center justify-center bg-luxota-bg relative overflow-hidden z-20" id="narrative-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.05),transparent_60%)] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10" id="narrative-content">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5.25rem] font-medium leading-[1.15] tracking-tight text-white flex flex-wrap justify-center gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-2 lg:gap-y-4 break-words">
            <span className="highlight-word opacity-0 text-white">{t('narrative.w1')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w2')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w3')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w4')}</span>
            <span className="highlight-word opacity-0 text-white font-medium">{t('narrative.w5')}</span>
            <span className="highlight-word opacity-0 text-white font-medium">{t('narrative.w6')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w7')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w8')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w9')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w10')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w11')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w12')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w13')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w14')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w15')}</span>
            <span className="highlight-word opacity-0 text-luxota-accent">{t('narrative.w16')}</span>
            <span className="highlight-word opacity-0 text-luxota-accent">{t('narrative.w17')}</span>
            <span className="highlight-word opacity-0 text-luxota-accent">{t('narrative.w18')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w19')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w20')}</span>
            <span className="highlight-word opacity-0 text-white">{t('narrative.w21')}</span>
            <span className="highlight-word opacity-0 text-luxota-accent italic font-serif">{t('narrative.w22')}</span>
          </p>
        </div>
      </section>
    </div>
  );
}
