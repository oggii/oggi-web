'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const steps = [
  {
    title: "Analyse & Strategie",
    desc: "Tiefes Verständnis für dein Setup. Wir evaluieren aktuelle Engpässe und definieren eine exakte Architektur für Web & Automatisierung.",
    num: "01"
  },
  {
    title: "Konzept & Design",
    desc: "Ästhetik trifft auf Konversion. Ich entwickle visuelle Identitäten und User Journeys, die Vertrauen schaffen und glatt bedienbar sind.",
    num: "02"
  },
  {
    title: "Entwicklung & Integration",
    desc: "Code, der performt. Von der Next.js Frontend-Architektur bis hin zur nahtlosen Anbindung von n8n, OpenAI und Headless CMS.",
    num: "03"
  },
  {
    title: "Launch & Skalierung",
    desc: "Rigoses Testing, 99er Core Web Vitals, und ein sauberer Go-Live – gepaart mit laufenden Optimierungen deiner neuen Tech-Infrastruktur.",
    num: "04"
  }
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const stepItems = gsap.utils.toArray('.process-step');
      
      gsap.fromTo(stepItems, 
        { opacity: 0, x: -30 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 relative z-10 bg-[#020203]" id="process">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(157,78,221,0.05),transparent_40%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">[ METHODIK ]</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">Der Prozess</h2>
          <p className="text-xl text-luxota-dim font-light leading-relaxed">
            Ich habe diesen Ablauf über Jahre perfektioniert, um dir als Solopreneur einen <strong className="text-white font-medium">absolut reibungslosen Ablauf</strong> zu garantieren – vom ersten Kickoff bis zum skalierenden System.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          
          {/* Connecting Line Desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0 border-dashed border-b border-t-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="process-step relative z-10 bg-[#020203]">
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
