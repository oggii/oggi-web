'use client';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useTranslation } from '@/i18n/TranslationContext';

export default function ServicesCtaSection() {
  const { t, href } = useTranslation();

  return (
    <section className="relative py-16 lg:py-24 px-6 flex flex-col items-center justify-center text-center bg-luxota-bg border-t border-white/5 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(157,78,221,0.07),transparent)] pointer-events-none" />

      {/* Label */}
      <span className="text-xs text-luxota-accent font-mono mb-6 tracking-widest reveal-up">{t('cta.tag')}</span>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight max-w-2xl reveal-up">
        {t('cta.title')}
      </h2>
      <p className="text-luxota-dim text-base md:text-lg font-light max-w-xl mb-12 leading-relaxed reveal-up">
        {t('cta.desc')}
      </p>

      {/* Shimmer CTA Button */}
          <Link href={href('/services')} className="reveal-up">
        <button className="shimmer-btn inline-flex items-center gap-3">
          <span className="shimmer-text flex items-center gap-3">
            <Icon icon="solar:layers-bold-duotone" className="text-xl" />
            {t('cta.btn')}
            <Icon icon="solar:arrow-right-linear" className="text-lg" />
          </span>
          <span className="shimmer-overlay" />
        </button>
      </Link>

      {/* Secondary ghost link */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 text-sm text-luxota-dim">
        <Link href={href('/hermes')} className="hover:text-white transition-colors flex items-center gap-1.5 group">
          <span className="w-1.5 h-1.5 rounded-full bg-luxota-accent/60 group-hover:bg-luxota-accent transition-colors" />
          {t('cta.link2')}
        </Link>
        <span className="hidden sm:block text-white/10">·</span>
        <Link href={href('/contact')} className="hover:text-white transition-colors flex items-center gap-1.5 group">
          <span className="w-1.5 h-1.5 rounded-full bg-luxota-accent/60 group-hover:bg-luxota-accent transition-colors" />
          {t('cta.link3')}
        </Link>
      </div>
    </section>
  );
}
