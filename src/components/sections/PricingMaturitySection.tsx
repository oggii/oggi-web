'use client';
import { Icon } from '@iconify/react';


import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PricingMaturitySection() {
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
    <section className="py-40 bg-[#020203] border-t border-white/5 relative z-20" id="maturity">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="lg:sticky lg:top-32 self-start">
            <span className="text-xs text-luxota-accent font-mono mb-6 block tracking-widest">[ 03 — DIAGNOSE ]</span>
            <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
              Wie ist dein Business <br /> aufgestellt?
            </h2>
            <p className="text-luxota-dim text-lg leading-relaxed mb-12">
              Wachstum ist nicht nur Skalierung, es bedarf reibungsloser Prozesse und Systeme. Ich helfe dir dabei, Ineffizienzen zu überwinden. <br/><br/>
              <span className="text-white/80 border-l-2 border-luxota-accent pl-4 block">Die meisten Unternehmen verlieren wertvolle Zeit bei sich wiederholenden Abläufen.</span>
            </p>

            <a href="#action" className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-luxota-accent transition-colors">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxota-accent group-hover:bg-luxota-accent/10 transition-all bg-white/5">
                
                <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-0.5 transition-transform"></Icon>
              </div>
              <span className="border-b border-transparent group-hover:border-luxota-accent/50 transition-all">Starte deine Analyse</span>
            </a>
          </div>

          <div className="relative pl-12 border-l border-white/10 space-y-16">
            <div className="absolute left-[-1.5px] top-0 bottom-0 w-[3px] bg-white/5">
              <div className="w-full h-0 bg-luxota-accent shadow-[0_0_15px_#9D4EDD]" id="maturity-bar" style={{ height: '0%' }}></div>
            </div>

            <div className="group cursor-pointer transition-all hover:translate-x-2">
              <div className="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors">LEVEL 0</div>
              <h3 className="text-2xl text-white mb-2 font-medium">Manuelle Prozesse</h3>
              <p className="text-base text-luxota-dim/60">Tagesgeschäft wird von Ineffizienz und Streuverlusten dominiert. Keine Automatisierung vorhanden.</p>
            </div>

            <div className="group cursor-pointer transition-all hover:translate-x-2">
              <div className="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors">LEVEL 1</div>
              <h3 className="text-2xl text-white mb-2 font-medium">Digitale Präsenz</h3>
              <p className="text-base text-luxota-dim/60">Die Website steht, aber Integrationen in Prozesse und Systemlandschaften sind limitiert.</p>
            </div>

            <div className="group cursor-pointer transition-all hover:translate-x-2">
              <div className="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors">LEVEL 2</div>
              <h3 className="text-2xl text-white mb-2 font-medium">Verbundenes Business</h3>
              <p className="text-base text-luxota-dim/60">Tools sind miteinander verknüpft. Datenaustausch funktioniert reibungslos über APIs.</p>
            </div>

            <div className="group cursor-pointer transition-all hover:translate-x-2">
              <div className="text-xs font-mono text-luxota-accent mb-2">LEVEL 3</div>
              <h3 className="text-2xl text-white mb-2 font-medium flex items-center gap-3">
                Das Skalierte Business
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-luxota-accent/10 text-luxota-accent border border-luxota-accent/20 font-medium tracking-wide uppercase">Zielstufe</span>
              </h3>
              <p className="text-base text-luxota-dim">
                Betriebsabläufe sind strukturiert. KI Agenten erledigen Tasks und unterstützen massiv beim Wachstum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
