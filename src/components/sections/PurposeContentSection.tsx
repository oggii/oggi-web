'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useTranslation } from '@/i18n/TranslationContext';

export default function PurposeContentSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.parallax-scrub').forEach((el: unknown) => {
        const element = el as HTMLElement;
        const speed = element.dataset.speed ? parseFloat(element.dataset.speed) : 1;
        gsap.fromTo(element,
          { y: 120 * speed },
          {
            y: -80 * speed,
            scrollTrigger: {
              trigger: element,
              start: "top 95%",
              end: "bottom 10%",
              scrub: 1,
            }
          }
        );
      });

      gsap.utils.toArray('.card-stop').forEach((el: unknown) => {
        const element = el as HTMLElement;
        const animationType = element.dataset.animation || 'fade-up';

        let fromParams: gsap.TweenVars = {};

        switch (animationType) {
          case 'slide-left':
            fromParams = { x: -80, opacity: 0 };
            break;
          case 'slide-right':
            fromParams = { x: 80, opacity: 0 };
            break;
          case 'scale-up':
            fromParams = { scale: 0.85, opacity: 0 };
            break;
          case 'clip-reveal':
            fromParams = { clipPath: "inset(100% 0 0 0)", opacity: 0 };
            break;
          default:
            fromParams = { y: 60, opacity: 0 };
            break;
        }

        gsap.fromTo(element,
          fromParams,
          {
            scrollTrigger: {
              trigger: element,
              start: "top 75%",
              toggleActions: "play reverse play reverse",
            },
            ...Object.fromEntries(Object.keys(fromParams).map(k => [k, k === 'scale' ? 1 : k === 'opacity' ? 1 : k === 'clipPath' ? "inset(0% 0 0 0)" : 0])),
            duration: 1.2,
            ease: "expo.out"
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pb-20 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 mt-6 space-y-32">

        {/* Mid-sized Editorial Image Placeholder */}
        <div className="opacity-0 reveal-hero-fade relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
          <div className="parallax-scrub absolute inset-[-20%] w-[140%] h-[140%] bg-black" data-speed="0.8">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2800&auto=format&fit=crop"
              alt="Global Intelligence Mission"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover opacity-60 mix-blend-luminosity brightness-75 grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-luxota-accent/30 via-transparent to-transparent mix-blend-overlay z-10"></div>
          </div>
        </div>

        {/* Primary Mission Info */}
        <div className="max-w-4xl pt-10">
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-white leading-[1.1] mb-12 opacity-0 reveal-hero-fade">
            {t('purpose.missionTitle')} <span className="text-luxota-accent italic font-serif">{t('purpose.missionHighlight')}</span> {t('purpose.missionEnd')}<br />
            <span className="text-white block mt-6">{t('purpose.missionTime')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-luxota-dim font-light leading-relaxed max-w-3xl pl-6 border-l-2 border-white/10 opacity-0 reveal-hero-fade">
            {t('purpose.missionDesc')} <strong className="text-white font-medium">{t('purpose.missionDescBold1')}</strong> {t('purpose.missionDescMid')} <strong className="text-white font-medium">{t('purpose.missionDescBold2')}</strong> {t('purpose.missionDescEnd')}<br /><br />
            {t('purpose.missionDescFinal')}
          </p>
        </div>

        {/* Dynamic Project/Initiatives Cards */}
        <div className="space-y-16">
          <div className="flex items-center gap-4 stagger-fade-in opacity-0">
            <span className="text-xs text-luxota-accent font-mono tracking-widest uppercase">{t('purpose.initiativesTag')}</span>
            <div className="h-px w-24 bg-luxota-accent/30"></div>
          </div>

          <div className="flex flex-col gap-32 relative pb-20">

            {/* Card 1: Slide Left */}
            <div className="card-stop align-left" data-animation="slide-left">
              <div className="max-w-xl group">
                <Icon icon="solar:cpu-bolt-bold-duotone" className="text-6xl text-luxota-accent mb-6 transition-colors" />
                <h3 className="text-4xl font-sans font-bold text-white mb-6 uppercase tracking-tight">{t('purpose.i1t')}</h3>
                <p className="text-luxota-dim text-lg leading-relaxed">
                  {t('purpose.i1d')}
                </p>
              </div>
            </div>

            {/* Card 2: Slide Right */}
            <div className="card-stop align-right flex justify-end" data-animation="slide-right">
              <div className="max-w-xl group text-right">
                <div className="flex justify-end mb-6">
                  <Icon icon="solar:server-path-bold-duotone" className="text-6xl text-white group-hover:text-luxota-accent transition-colors" />
                </div>
                <h3 className="text-4xl font-sans font-bold text-white mb-6 uppercase tracking-tight">{t('purpose.i2t')}</h3>
                <p className="text-luxota-dim text-lg leading-relaxed">
                  {t('purpose.i2d')}
                </p>
              </div>
            </div>

            {/* Card 3: Clip Reveal */}
            <div className="card-stop align-left" data-animation="clip-reveal">
              <div className="max-w-xl group">
                <Icon icon="solar:users-group-two-rounded-bold-duotone" className="text-6xl text-white group-hover:text-luxota-accent transition-colors mb-6" />
                <h3 className="text-4xl font-sans font-bold text-white mb-6 uppercase tracking-tight">{t('purpose.i3t')}</h3>
                <p className="text-luxota-dim text-lg leading-relaxed">
                  {t('purpose.i3d')}
                </p>
              </div>
            </div>

            {/* Card 4: Scale Up */}
            <div className="card-stop align-right flex justify-end" data-animation="scale-up">
              <div className="max-w-xl group text-right">
                <div className="flex justify-end mb-6">
                  <Icon icon="solar:code-scan-bold-duotone" className="text-6xl text-white group-hover:text-luxota-accent transition-colors" />
                </div>
                <h3 className="text-4xl font-sans font-bold text-white mb-6 uppercase tracking-tight">{t('purpose.i4t')}</h3>
                <p className="text-luxota-dim text-lg leading-relaxed">
                  {t('purpose.i4d')}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Collaboration CTA */}
        <div className="stagger-fade-in opacity-0 pt-10 pb-32 border-t border-white/10">
          <div className="parallax-scrub" data-speed="0.7">
            <p className="text-3xl md:text-4xl text-white font-medium leading-tight mb-12 max-w-3xl">
              {t('purpose.collab')}
            </p>
            <a href="mailto:contact@0ggi.ch" className="group inline-flex items-center gap-6">
              <span className="text-xl md:text-2xl text-luxota-accent font-medium border-b border-luxota-accent/30 pb-1 group-hover:border-luxota-accent transition-colors">
                {t('purpose.collabCta')}
              </span>
              <div className="w-12 h-12 rounded-full border border-luxota-accent/30 flex items-center justify-center group-hover:bg-luxota-accent group-hover:text-[#020203] text-luxota-accent transition-colors">
                <Icon icon="solar:arrow-right-linear" className="text-xl" />
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
