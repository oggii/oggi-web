'use client';
import { Icon } from '@iconify/react';
import { useTranslation } from '@/i18n/TranslationContext';

export default function BentoGridSection() {
  const { t } = useTranslation();
  return (
    <section className="py-40 relative z-10 px-4 md:px-6" id="trust">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Title Block */}
          <div className="md:col-span-4 flex flex-col justify-center p-6 lg:sticky lg:top-32 self-start">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxota-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-luxota-accent"></span>
              </span>
              <span className="text-xs text-luxota-accent font-mono tracking-[0.2em] uppercase">{t('bento.tag')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
              {t('bento.title1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">{t('bento.title2')}</span>
            </h2>
            <p className="text-luxota-dim text-base mb-10 leading-relaxed border-l border-white/10 pl-6">
              {t('bento.desc')}
            </p>
            <a href="#action" className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-luxota-accent transition-colors">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxota-accent group-hover:bg-luxota-accent/10 transition-all bg-white/5">

                <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-0.5 transition-transform"></Icon>
              </div>
              <span className="border-b border-transparent group-hover:border-luxota-accent/50 transition-all">{t('bento.link')}</span>
            </a>
          </div>

          {/* Bento Grid Content */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1: Experience */}
            <div className="spotlight-card rounded-[2rem] p-10 flex flex-col justify-between group cursor-none h-full min-h-[400px]">
              <div className="absolute right-0 top-0 p-10 opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">

                <Icon icon="solar:rocket-linear" className="text-[12rem] text-white"></Icon>
              </div>
              <div className="relative z-10">
                <div className="flex items-start gap-1">
                  <span className="text-7xl font-medium text-white tracking-tighter">100</span>
                  <span className="text-luxota-accent text-5xl font-light mt-1">%</span>
                </div>
                <div className="text-xl text-white font-medium mt-2 mb-1">{t('bento.c1Title')}</div>
                <p className="text-sm text-luxota-dim">{t('bento.c1Desc')}</p>
              </div>

              <div className="relative w-full h-1.5 bg-white/5 rounded-full mt-10 overflow-hidden">
                <div className="absolute inset-0 bg-luxota-accent/20"></div>
                <div className="h-full bg-luxota-accent w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1.5s] ease-expo"></div>
              </div>
            </div>

            {/* Right Column for Grid */}
            <div className="flex flex-col gap-6">

              {/* Card 2: AI */}
              <div className="spotlight-card rounded-[2rem] p-10 flex flex-col justify-center group cursor-none min-h-[220px]">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl font-medium text-white tracking-tight">24/7</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-luxota-accent animate-pulse"></span>
                    <span className="text-xs font-mono text-luxota-accent uppercase tracking-wider">{t('bento.c2Tag')}</span>
                  </div>
                  <p className="text-sm text-luxota-dim leading-relaxed">
                    {t('bento.c2Desc')}
                  </p>
                </div>
              </div>

              {/* Card 3: Global (Map) */}
              <div className="spotlight-card rounded-[2rem] p-10 flex-1 min-h-[240px] flex flex-col justify-end group cursor-none">
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                  <svg className="w-full h-full object-cover" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                    <path d="M50,100 Q100,50 150,100 T250,100 T350,100" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" className="group-hover:animate-pulse"></path>
                    <path d="M50,120 Q100,170 150,120 T250,120 T350,120" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5"></path>
                    <circle cx="250" cy="100" r="3" fill="#9D4EDD" className="animate-ping"></circle>
                    <circle cx="250" cy="100" r="2" fill="white"></circle>
                  </svg>
                </div>
                <div className="relative z-10 bg-gradient-to-t from-[#08080A] via-[#08080A]/80 to-transparent pt-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-white/5 border border-white/10">

                      <Icon icon="solar:network-linear" className="text-luxota-accent text-lg"></Icon>
                    </div>
                    <span className="text-xl font-medium text-white">{t('bento.c3Title')}</span>
                  </div>
                  <p className="text-sm text-luxota-dim">{t('bento.c3Desc')}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
