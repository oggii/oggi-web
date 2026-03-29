'use client';
import { Icon } from '@iconify/react';


import { useState } from 'react';
import { useTranslation } from '@/i18n/TranslationContext';

export default function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 lg:py-40 bg-luxota-bg border-t border-white/5" id="faq">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20 reveal-up">
          <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">{t('faq.tag')}</span>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">{t('faq.title')}</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`reveal-up faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden ${openIndex === idx ? 'active' : ''}`}>
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-lg text-white/90 group-hover:text-white transition-colors font-medium">
                  {faq.question}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10 shrink-0 ml-4">
                  <div style={{ transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                    <Icon icon="solar:alt-arrow-down-linear" className="text-white text-xl"></Icon>
                  </div>
                </div>
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ height: openIndex === idx ? 'auto' : 0, opacity: openIndex === idx ? 1 : 0 }}
              >
                <div className="px-6 pb-8 text-luxota-dim leading-relaxed max-w-2xl">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
