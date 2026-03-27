'use client';

import { useTranslation } from '@/i18n/TranslationContext';

function getSteps(t: (key: string) => string) {
  return [
    { title: t('process.s1t'), desc: t('process.s1d'), num: "01" },
    { title: t('process.s2t'), desc: t('process.s2d'), num: "02" },
    { title: t('process.s3t'), desc: t('process.s3d'), num: "03" },
    { title: t('process.s4t'), desc: t('process.s4d'), num: "04" }
  ];
}

export default function ProcessSection() {
  const { t } = useTranslation();
  const steps = getSteps(t);

  return (
    <section className="py-16 lg:py-32 relative z-10 bg-[#020203]" id="process">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(157,78,221,0.05),transparent_40%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 max-w-4xl mx-auto reveal-up">
          <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">{t('process.tag')}</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">{t('process.title')}</h2>
          <p className="text-xl text-luxota-dim font-light leading-relaxed">
            {t('process.desc')} <strong className="text-white font-medium">{t('process.descBold')}</strong> – vom ersten Kickoff bis zum skalierenden System.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">

          {/* Connecting Line Desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0 border-dashed border-b border-t-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="process-step relative z-10 bg-[#020203] reveal-up">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-xl font-medium tracking-tighter text-luxota-accent mb-8 shadow-[0_0_20px_#9D4EDD30] group-hover:bg-luxota-accent/10 transition-colors">
                {step.num}
              </div>
              <h3 className="text-xl text-white font-medium mb-4">{step.title}</h3>
              <p className="text-sm leading-relaxed text-luxota-dim/80 font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
