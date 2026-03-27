'use client';
import { Icon } from '@iconify/react';


import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '@/i18n/TranslationContext';

export default function CommercialModelSection() {
  const { t } = useTranslation();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Staggered Entrance Animations on Scroll
      gsap.utils.toArray('.reveal-commercial').forEach((el: unknown, i) => {
        const element = el as HTMLElement;
        gsap.to(element, {
          scrollTrigger: {
            trigger: "#commercial",
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out"
        });
      });

      gsap.to('.reveal-visual', {
        scrollTrigger: {
          trigger: "#commercial",
          start: "top 80%",
        },
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      });
    });

    gsap.to('.reveal-visual', {
      scrollTrigger: {
        trigger: "#commercial",
        start: "top 80%",
      },
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <section className="py-32 relative z-10 px-4 md:px-6 bg-[#020203]" id="commercial">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(157,78,221,0.05),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="lg:col-span-5 space-y-10" id="commercial-text">
            <div>
              <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest reveal-commercial opacity-0 translate-y-4">{t('commercial.tag')}</span>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] reveal-commercial opacity-0 translate-y-4">
                {t('commercial.title1')}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">{t('commercial.title2')}</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 reveal-commercial opacity-0 translate-y-4 border-l border-white/10">
                <h3 className="text-xl text-white font-medium mb-2">{t('commercial.s1t')}</h3>
                <p className="text-luxota-dim font-light leading-relaxed">
                  {t('commercial.s1d')}
                </p>
              </div>
              <div className="relative pl-8 reveal-commercial opacity-0 translate-y-4 border-l border-luxota-accent">
                <h3 className="text-xl text-white font-medium mb-2">{t('commercial.s2t')}</h3>
                <p className="text-luxota-dim font-light leading-relaxed">
                  {t('commercial.s2d')}
                </p>
              </div>
            </div>

            <div className="pt-4 reveal-commercial opacity-0 translate-y-4">
              <a href="#action" className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-luxota-accent transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxota-accent group-hover:bg-luxota-accent/10 transition-all bg-white/5">

                  <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-0.5 transition-transform"></Icon>
                </div>
                <span className="border-b border-transparent group-hover:border-luxota-accent/50 transition-all">{t('commercial.btn')}</span>
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-7 relative reveal-visual opacity-0 scale-95">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(157,78,221,0.1),transparent_60%)]"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative z-20 w-32 h-32 rounded-full bg-[#0A0A0C] border border-white/10 flex items-center justify-center shadow-2xl">

                  <Icon icon="solar:layers-minimalistic-bold-duotone" className="text-5xl text-white"></Icon>
                </div>

                <div className="absolute z-10 w-64 h-64 rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite]"></div>

                <div className="absolute z-10 w-96 h-96 rounded-full border border-white/5 animate-[spin_30s_linear_infinite_reverse]">
                  <div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#0A0A0C] border border-luxota-accent rounded-full flex items-center justify-center shadow-[0_0_15px_#9D4EDD]">
                    <div className="w-2 h-2 bg-luxota-accent rounded-full"></div>
                  </div>
                </div>

                <div className="absolute top-1/4 right-[10%] p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">

                      <Icon icon="solar:graph-up-bold"></Icon>
                    </div>
                    <div>
                      <div className="text-[10px] text-luxota-dim uppercase tracking-wider">{t('commercial.badge1')}</div>
                      <div className="text-sm font-bold text-white">{t('commercial.badge1Val')}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1/4 left-[10%] p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-float" style={{ animationDelay: '-2s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-luxota-accent/20 text-luxota-accent flex items-center justify-center">

                      <Icon icon="solar:global-bold"></Icon>
                    </div>
                    <div>
                      <div className="text-[10px] text-luxota-dim uppercase tracking-wider">{t('commercial.badge2')}</div>
                      <div className="text-sm font-bold text-white">{t('commercial.badge2Val')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
