'use client';
import { Icon } from '@iconify/react';


import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '@/i18n/TranslationContext';

export default function PricingMaturitySection() {
  const { t } = useTranslation();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#maturity-bar", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: "#maturity",
        start: "top center",
        end: "bottom center",
        scrub: true,
      }
    });
  }, []);

  return (
    <section className="py-16 lg:py-40 bg-[#020203] border-t border-white/5 relative z-20" id="maturity">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="lg:sticky lg:top-32 self-start">
            <span className="text-xs text-luxota-accent font-mono mb-6 block tracking-widest">{t('maturity.tag')}</span>
            <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
              {t('maturity.title')} <br /> {t('maturity.titleBr')}
            </h2>
            <p className="text-luxota-dim text-lg leading-relaxed mb-12">
              {t('maturity.desc1')}<br /><br />
              <span className="text-white/80 border-l-2 border-luxota-accent pl-4 block">{t('maturity.desc2')}</span>
            </p>

            <a href="#action" className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-luxota-accent transition-colors">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxota-accent group-hover:bg-luxota-accent/10 transition-all bg-white/5">

                <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-0.5 transition-transform"></Icon>
              </div>
              <span className="border-b border-transparent group-hover:border-luxota-accent/50 transition-all">{t('maturity.btn')}</span>
            </a>
          </div>

          <div className="relative pl-12 border-l border-white/10 space-y-16">
            <div className="absolute left-[-1.5px] top-0 bottom-0 w-[3px] bg-white/5">
              <div className="w-full h-0 bg-luxota-accent shadow-[0_0_15px_#9D4EDD]" id="maturity-bar" style={{ height: '0%' }}></div>
            </div>

            <div className="group cursor-pointer transition-all hover:translate-x-2">
              <div className="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors">{t('maturity.l0b')}</div>
              <h3 className="text-2xl text-white mb-2 font-medium">{t('maturity.l0t')}</h3>
              <p className="text-base text-luxota-dim/60">{t('maturity.l0d')}</p>
            </div>

            <div className="group cursor-pointer transition-all hover:translate-x-2">
              <div className="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors">{t('maturity.l1b')}</div>
              <h3 className="text-2xl text-white mb-2 font-medium">{t('maturity.l1t')}</h3>
              <p className="text-base text-luxota-dim/60">{t('maturity.l1d')}</p>
            </div>

            <div className="group cursor-pointer transition-all hover:translate-x-2">
              <div className="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors">{t('maturity.l2b')}</div>
              <h3 className="text-2xl text-white mb-2 font-medium">{t('maturity.l2t')}</h3>
              <p className="text-base text-luxota-dim/60">{t('maturity.l2d')}</p>
            </div>

            <div className="group cursor-pointer transition-all hover:translate-x-2">
              <div className="text-xs font-mono text-luxota-accent mb-2">{t('maturity.l3b')}</div>
              <h3 className="text-2xl text-white mb-2 font-medium flex items-center gap-3">
                {t('maturity.l3t')}
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-luxota-accent/10 text-luxota-accent border border-luxota-accent/20 font-medium tracking-wide uppercase">{t('maturity.l3Tag')}</span>
              </h3>
              <p className="text-base text-luxota-dim">
                {t('maturity.l3d')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
