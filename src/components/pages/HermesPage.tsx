'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';
import FooterSection from '@/components/sections/FooterSection';
import { useTranslation } from '@/i18n/TranslationContext';

export default function HermesPage() {
  const { t, href } = useTranslation();

  const superPowers = [
    {
      icon: 'solar:diploma-bold-duotone',
      title: t('hermesPage.sp1Title'),
      desc: t('hermesPage.sp1Desc'),
      tags: [t('hermesPage.sp1Tag1'), t('hermesPage.sp1Tag2'), t('hermesPage.sp1Tag3')],
    },
    {
      icon: 'solar:layers-minimalistic-bold-duotone',
      title: t('hermesPage.sp2Title'),
      desc: t('hermesPage.sp2Desc'),
      tags: [t('hermesPage.sp2Tag1'), t('hermesPage.sp2Tag2'), t('hermesPage.sp2Tag3')],
    },
    {
      icon: 'solar:cpu-bolt-bold-duotone',
      title: t('hermesPage.sp3Title'),
      desc: t('hermesPage.sp3Desc'),
      tags: [t('hermesPage.sp3Tag1'), t('hermesPage.sp3Tag2'), t('hermesPage.sp3Tag3')],
    },
    {
      icon: 'solar:monitor-bold-duotone',
      title: t('hermesPage.sp4Title'),
      desc: t('hermesPage.sp4Desc'),
      tags: [t('hermesPage.sp4Tag1'), t('hermesPage.sp4Tag2'), t('hermesPage.sp4Tag3')],
    },
    {
      icon: 'solar:clock-circle-bold-duotone',
      title: t('hermesPage.sp5Title'),
      desc: t('hermesPage.sp5Desc'),
      tags: [t('hermesPage.sp5Tag1'), t('hermesPage.sp5Tag2'), t('hermesPage.sp5Tag3')],
    },
    {
      icon: 'solar:palette-bold-duotone',
      title: t('hermesPage.sp6Title'),
      desc: t('hermesPage.sp6Desc'),
      tags: [t('hermesPage.sp6Tag1'), t('hermesPage.sp6Tag2'), t('hermesPage.sp6Tag3')],
    },
  ];

  const useCases = [
    {
      industry: t('hermesPage.uc1Title'),
      icon: 'solar:graph-up-bold-duotone',
      saving: t('hermesPage.uc1Saving'),
      tasks: [t('hermesPage.uc1Task1'), t('hermesPage.uc1Task2'), t('hermesPage.uc1Task3'), t('hermesPage.uc1Task4')],
    },
    {
      industry: t('hermesPage.uc2Title'),
      icon: 'solar:users-group-two-rounded-bold-duotone',
      saving: t('hermesPage.uc2Saving'),
      tasks: [t('hermesPage.uc2Task1'), t('hermesPage.uc2Task2'), t('hermesPage.uc2Task3'), t('hermesPage.uc2Task4')],
    },
    {
      industry: t('hermesPage.uc3Title'),
      icon: 'solar:cart-bold-duotone',
      saving: t('hermesPage.uc3Saving'),
      tasks: [t('hermesPage.uc3Task1'), t('hermesPage.uc3Task2'), t('hermesPage.uc3Task3'), t('hermesPage.uc3Task4')],
    },
    {
      industry: t('hermesPage.uc4Title'),
      icon: 'solar:case-round-bold-duotone',
      saving: t('hermesPage.uc4Saving'),
      tasks: [t('hermesPage.uc4Task1'), t('hermesPage.uc4Task2'), t('hermesPage.uc4Task3'), t('hermesPage.uc4Task4')],
    },
  ];

  const selfLearningSteps = [
    { step: '01', title: t('hermesPage.step1Title'), desc: t('hermesPage.step1Desc') },
    { step: '02', title: t('hermesPage.step2Title'), desc: t('hermesPage.step2Desc') },
    { step: '03', title: t('hermesPage.step3Title'), desc: t('hermesPage.step3Desc') },
    { step: '04', title: t('hermesPage.step4Title'), desc: t('hermesPage.step4Desc') },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="pt-40 max-w-7xl mx-auto px-6 mb-24 relative z-10 reveal-up">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-luxota-accent/30 bg-luxota-accent/5 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 bg-luxota-accent rounded-full shadow-[0_0_10px_#9D4EDD] animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest text-luxota-accent font-mono font-medium">{t('hermesPage.heroTag')}</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.05]">
          {t('hermesPage.heroTitle1')}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxota-accent to-white/40 italic font-serif">{t('hermesPage.heroTitle2')}</span>
        </h1>
        <p className="text-lg md:text-xl text-luxota-dim max-w-3xl font-light leading-relaxed">
          {t('hermesPage.heroDesc')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
        <Link href={href('/contact')} className="group relative px-9 py-4 bg-white text-luxota-bg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] inline-flex">
            <span className="relative z-10 text-sm font-bold flex items-center gap-2">
              {t('hermesPage.heroCta1')}
              <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <Link href={href('/contact')} className="px-9 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-white font-medium text-sm hover:border-white/30 inline-flex items-center">
            {t('hermesPage.heroCta2')}
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 mt-20">
          {[
            { value: '40+', label: t('hermesPage.stat1Label') },
            { value: '3x', label: t('hermesPage.stat2Label') },
            { value: '∞', label: t('hermesPage.stat3Label') },
          ].map((stat) => (
            <div key={stat.label} className="border-l border-white/10 pl-6">
              <div className="text-3xl font-medium text-white tracking-tight">{stat.value}</div>
              <div className="text-xs text-luxota-dim uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Self-learning loop */}
      <section className="py-24 px-6 bg-[#020203] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">{t('hermesPage.learnTag')}</span>
              <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                {t('hermesPage.learnTitle1')}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">{t('hermesPage.learnTitle2')}</span>
              </h2>
              <p className="text-luxota-dim leading-relaxed mb-6">
                {t('hermesPage.learnDesc1')}
              </p>
              <p className="text-luxota-dim leading-relaxed mb-8">
                {t('hermesPage.learnDesc2')}
              </p>
              <div className="border-l-2 border-luxota-accent pl-6">
                <p className="text-white/80 italic text-lg leading-relaxed">
                  &ldquo;{t('hermesPage.learnQuote')}&rdquo;
                </p>
              </div>
            </div>

            {/* Self-learning steps */}
            <div className="relative pl-8 border-l border-white/10 space-y-12">
              <div className="absolute left-[-1.5px] top-0 bottom-0 w-[2px] bg-white/5">
                <div className="w-full h-full bg-gradient-to-b from-luxota-accent to-transparent" />
              </div>
              {selfLearningSteps.map((step) => (
                <div key={step.step} className="group cursor-default hover:translate-x-2 transition-transform reveal-up">
                  <div className="text-[10px] font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors tracking-widest">{t('hermesPage.stepLabel')} {step.step}</div>
                  <h3 className="text-2xl text-white mb-2 font-medium">{step.title}</h3>
                  <p className="text-base text-luxota-dim/70 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Superpowers */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">{t('hermesPage.powersTag')}</span>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
              {t('hermesPage.powersTitle')}
            </h2>
            <p className="text-luxota-dim max-w-2xl mx-auto">
              {t('hermesPage.powersDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {superPowers.map((sp) => (
              <div key={sp.title} className="spotlight-card rounded-3xl p-8 border border-white/10 bg-white/[0.02] group hover:border-luxota-accent/30 transition-all duration-500 reveal-up">
                <div className="w-12 h-12 rounded-2xl bg-luxota-accent/10 border border-luxota-accent/20 flex items-center justify-center mb-6 group-hover:bg-luxota-accent/20 transition-colors">
                  <Icon icon={sp.icon} className="text-2xl text-luxota-accent" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{sp.title}</h3>
                <p className="text-sm text-luxota-dim leading-relaxed mb-6">{sp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {sp.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 font-mono tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-[#020203] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">{t('hermesPage.useCasesTag')}</span>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
              {t('hermesPage.useCasesTitle')}
            </h2>
            <p className="text-luxota-dim max-w-2xl mx-auto">
              {t('hermesPage.useCasesDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div key={uc.industry} className="reveal-up spotlight-card rounded-3xl p-8 border border-white/10 bg-white/[0.02] group hover:border-luxota-accent/30 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-luxota-accent/20 bg-luxota-accent/10 transition-colors duration-300 group-hover:bg-luxota-accent/20">
                      <Icon icon={uc.icon} className="text-2xl text-luxota-accent" />
                    </div>
                    <h3 className="text-xl font-medium text-white">{uc.industry}</h3>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-[10px] text-luxota-dim uppercase tracking-widest font-mono">{t('hermesPage.savingLabel')}</div>
                    <div className="text-base font-medium text-luxota-accent">{uc.saving}</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {uc.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-3 text-sm text-luxota-dim">
                      <div className="w-5 h-5 rounded-full bg-luxota-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon icon="solar:check-circle-linear" className="text-luxota-accent text-xs" />
                      </div>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center border-t border-white/5 relative overflow-hidden bg-[#020203] reveal-up">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(157,78,221,0.08),transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs text-luxota-accent font-mono mb-6 block tracking-widest">{t('hermesPage.ctaTag')}</span>
          <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
            {t('hermesPage.ctaTitle1')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 italic font-serif">{t('hermesPage.ctaTitle2')}</span>
          </h2>
          <p className="text-luxota-dim text-lg mb-12 leading-relaxed">
            {t('hermesPage.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={href('/contact')} className="group relative inline-flex px-12 py-5 bg-white text-luxota-bg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">
              <span className="relative z-10 text-sm font-bold flex items-center gap-2">
                {t('hermesPage.ctaCta1')}
                <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link href={href('/contact')} className="inline-flex px-9 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white font-medium text-sm hover:border-white/30 items-center justify-center">
              {t('hermesPage.ctaCta2')}
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
