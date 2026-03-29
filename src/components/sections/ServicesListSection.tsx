'use client';

import { useTranslation } from '@/i18n/TranslationContext';
import Link from 'next/link';

function getServices(t: (key: string) => string) {
  return [
    {
      num: "01",
      category: t('servicesList.s1Cat'),
      subtitle: t('servicesList.s1Sub'),
      items: [
        { title: t('servicesList.s1i1t'), desc: t('servicesList.s1i1d') },
        { title: t('servicesList.s1i2t'), desc: t('servicesList.s1i2d') },
        { title: t('servicesList.s1i3t'), desc: t('servicesList.s1i3d') }
      ]
    },
    {
      num: "02",
      category: t('servicesList.s2Cat'),
      subtitle: t('servicesList.s2Sub'),
      items: [
        { title: t('servicesList.s2i1t'), desc: t('servicesList.s2i1d') },
        { title: t('servicesList.s2i2t'), desc: t('servicesList.s2i2d') },
        { title: t('servicesList.s2i3t'), desc: t('servicesList.s2i3d') }
      ]
    },
    {
      num: "03",
      category: t('servicesList.s3Cat'),
      subtitle: t('servicesList.s3Sub'),
      items: [
        { title: t('servicesList.s3i1t'), desc: t('servicesList.s3i1d') },
        { title: t('servicesList.s3i2t'), desc: t('servicesList.s3i2d') },
        { title: t('servicesList.s3i3t'), desc: t('servicesList.s3i3d') }
      ]
    }
  ];
}

export default function ServicesListSection() {
  const { t, href } = useTranslation();
  const services = getServices(t);

  return (
    <section className="py-16 lg:py-24 relative z-10 bg-[#020203]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-32">
          {services.map((service, idx) => (
            <div key={idx} className="service-category grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start border-t border-white/10 pt-16 hover:border-luxota-accent transition-colors duration-700 reveal-up">

              {/* Left Column: Number & Subtitle */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 reveal-up">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-luxota-accent font-mono text-sm tracking-widest">{service.num}.</span>
                  <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">{service.category}</h2>
                </div>
                <p className="text-lg text-luxota-dim font-light leading-relaxed max-w-md mb-8">
                  {service.subtitle}
                </p>
                {idx === 2 && (
                  <div className="flex flex-col gap-3">
                    <Link href={href('/openclaw')} className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-luxota-accent transition-colors">
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxota-accent group-hover:bg-luxota-accent/10 transition-all bg-white/5 text-xs">→</div>
                      <span className="border-b border-transparent group-hover:border-luxota-accent/50 transition-all">{t('servicesList.openclawLink')}</span>
                    </Link>
                    <Link href={href('/hermes')} className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-luxota-accent transition-colors">
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxota-accent group-hover:bg-luxota-accent/10 transition-all bg-white/5 text-xs">→</div>
                      <span className="border-b border-transparent group-hover:border-luxota-accent/50 transition-all">{t('servicesList.hermesLink')}</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Right Column: Service Items */}
              <div className="lg:col-span-7 space-y-16">
                {service.items.map((item, i) => (
                  <div key={i} className="group cursor-default reveal-up">
                    <h3 className="text-2xl text-white font-medium mb-4 group-hover:text-luxota-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-luxota-dim font-light leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
