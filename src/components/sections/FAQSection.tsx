'use client';
import { Icon } from '@iconify/react';


import { useState } from 'react';
import { gsap } from 'gsap';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  const faqs = [
    {
      question: "Wie genau helfen 0ggi KI Agenten in meinem Unternehmensalltag?",
      answer: "Effizienz ist der Schlüssel. Ich nutze n8n oder spezifische KI-Modelle wie OpenClaw und Hermes. Dadurch werden Prozesse beschleunigt, Fehler reduziert und deine Kundenkommunikation oder interne Abläufe automatisiert. Vom Lead-Management bis zum Newsletter – fast alles ist automatisierbar."
    },
    {
      question: "Arbeitest du nur mit bestehenden Systemen (Webflow, WordPress, etc)?",
      answer: "Ich biete modernste Webentwicklung komplett nach Mass. Ich fokussiere mich auf Headless-Systeme (Next.js/React), welche nicht an träge CMS-Systeme gebunden sind. So garantiere ich schnellste Ladezeiten, absolut individuell skalierbare Architekturen und maximale Sicherheit."
    }
  ];

  return (
    <section className="py-40 bg-luxota-bg border-t border-white/5" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">[ 05 — ANFRAGEN ]</span>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Häufige Fragen</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden ${openIndex === idx ? 'active' : ''}`}>
              <button 
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-lg text-white/90 group-hover:text-white transition-colors font-medium">
                  {faq.question}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
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
