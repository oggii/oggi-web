'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function PurposeContentSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      // Smooth Parallax effect bound to scrollbar (scrub: 1)
      gsap.utils.toArray('.parallax-scrub').forEach((el: unknown) => {
        const element = el as HTMLElement;
        const speed = element.dataset.speed ? parseFloat(element.dataset.speed) : 1;
        gsap.fromTo(element, 
          { y: 120 * speed },
          {
            y: -80 * speed,
            scrollTrigger: {
              trigger: element,
              start: "top 95%",
              end: "bottom 10%",
              scrub: 1, // Bound directly to scrollbar
            }
          }
        );
      });

      // Staggered Entrance Animations on Scroll
      gsap.utils.toArray('.stagger-fade-in').forEach((el: unknown) => {
        const element = el as HTMLElement;
        gsap.fromTo(element,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
            },
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "expo.out"
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pb-20 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 mt-6 space-y-32">
        
        {/* Mid-sized Editorial Image Placeholder (Moved Top, Inner Parallax!) */}
        <div className="opacity-0 reveal-hero-fade relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
          <div className="parallax-scrub absolute inset-[-20%] w-[140%] h-[140%] bg-black" data-speed="0.8">
            <Image 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2800&auto=format&fit=crop" 
              alt="Global Intelligence Mission" 
              fill 
              priority 
              quality={90}
              sizes="100vw"
              className="object-cover opacity-60 mix-blend-luminosity brightness-75 grayscale contrast-125" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-luxota-accent/30 via-transparent to-transparent mix-blend-overlay z-10"></div>
          </div>
        </div>

        {/* Primary Mission Info (Triggered immediately on page load behind Hero Title) */}
        <div className="max-w-4xl pt-10">
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-white leading-[1.1] mb-12 opacity-0 reveal-hero-fade">
            Meine Mission ist es, meine kreativen & technischen Fähigkeiten einzusetzen, um <span className="text-luxota-accent italic font-serif">Solopreneuren und KMU</span> durch intelligente Automatisierungen die wertvollste Ressource zurückzugeben:<br/>
            <span className="text-white block mt-6">Zeit.</span>
          </h2>
          <p className="text-xl md:text-2xl text-luxota-dim font-light leading-relaxed max-w-3xl pl-6 border-l-2 border-white/10 opacity-0 reveal-hero-fade">
            Mein Fokus liegt auf der Fusion von <strong className="text-white font-medium">High-End Webentwicklung</strong> und dem Aufbau deiner eigenen digitalen <strong className="text-white font-medium">KI-Belegschaft (OpenClaw & Hermes)</strong> — skalierbare digitale Ökosysteme und autonome Agenten, die als vollwertige Mitarbeiter dein operatives Geschäft entlasten und skalieren.<br/><br/>
            Für die Macher & Visionäre.
          </p>
        </div>

        {/* Dynamic Project/Initiatives Cards bounded to Scroll */}
        <div className="space-y-16">
          <div className="flex items-center gap-4 stagger-fade-in opacity-0">
            <span className="text-xs text-luxota-accent font-mono tracking-widest uppercase">[ INITIATIVEN ]</span>
            <div className="h-px w-24 bg-luxota-accent/30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative pb-20">
            
            {/* Card 1 */}
            <div className="stagger-fade-in opacity-0">
              <div className="parallax-scrub" data-speed="0.8">
                 <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-10 flex flex-col justify-between aspect-[4/3] hover:border-luxota-accent/30 transition-colors duration-500 shadow-2xl relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(157,78,221,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                   <div className="relative z-10">
                     <Icon icon="solar:cpu-bolt-bold-duotone" className="text-5xl text-white mb-8 group-hover:text-luxota-accent transition-colors" />
                     <h3 className="text-3xl font-medium text-white mb-4">Aura KI</h3>
                     <p className="text-luxota-dim text-base leading-relaxed">
                       Eine autonome Lead-Generierungs und Qualifizierungs-Pipeline. Aura arbeitet 24/7 und konvertiert Interessenten ohne menschliches Zutun.
                     </p>
                   </div>
                 </div>
              </div>
            </div>

            {/* Card 2 (Offset by margin and speed) */}
            <div className="stagger-fade-in opacity-0 md:mt-32">
              <div className="parallax-scrub" data-speed="1.2">
                 <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-10 flex flex-col justify-between aspect-[4/3] hover:border-luxota-accent/30 transition-colors duration-500 shadow-2xl relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(157,78,221,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                   <div className="relative z-10">
                     <Icon icon="solar:server-path-bold-duotone" className="text-5xl text-white mb-8 group-hover:text-luxota-accent transition-colors" />
                     <h3 className="text-3xl font-medium text-white mb-4">OpenClaw</h3>
                     <p className="text-luxota-dim text-base leading-relaxed">
                       Dein operatives Backend. Diese Agenten-Workflows automatisieren Buchhaltung, Rechnungen, Verträge und Onboardings komplett im Hintergrund.
                     </p>
                   </div>
                 </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="stagger-fade-in opacity-0 md:-mt-16">
              <div className="parallax-scrub" data-speed="0.9">
                 <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-10 flex flex-col justify-between aspect-[4/3] hover:border-luxota-accent/30 transition-colors duration-500 shadow-2xl relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(157,78,221,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                   <div className="relative z-10">
                     <Icon icon="solar:users-group-two-rounded-bold-duotone" className="text-5xl text-white mb-8 group-hover:text-luxota-accent transition-colors" />
                     <h3 className="text-3xl font-medium text-white mb-4">Hermes KI</h3>
                     <p className="text-luxota-dim text-base leading-relaxed">
                       Dein digitaler Support- und Sales-Assistent. Hermes greift auf das gesamte Wissen deines Unternehmens (RAG) zu und löst Kundenprobleme eigenständig.
                     </p>
                   </div>
                 </div>
              </div>
            </div>

            {/* Card 4 (Offset) */}
            <div className="stagger-fade-in opacity-0 md:mt-16">
              <div className="parallax-scrub" data-speed="1.3">
                 <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-10 flex flex-col justify-between aspect-[4/3] hover:border-luxota-accent/30 transition-colors duration-500 shadow-2xl relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(157,78,221,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                   <div className="relative z-10">
                     <Icon icon="solar:code-scan-bold-duotone" className="text-5xl text-white mb-8 group-hover:text-luxota-accent transition-colors" />
                     <h3 className="text-3xl font-medium text-white mb-4">LuxotaOS</h3>
                     <p className="text-luxota-dim text-base leading-relaxed">
                       Ein maßgeschneidertes Next.js Framework, das als extrem schnelles, skalierbares Fundament für alle deine digitalen Agenten und Kundenportale dient.
                     </p>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </div>

        {/* Collaboration CTA (Also Parallaxed slightly) */}
        <div className="stagger-fade-in opacity-0 pt-10 pb-32 border-t border-white/10">
          <div className="parallax-scrub" data-speed="0.7">
            <p className="text-3xl md:text-4xl text-white font-medium leading-tight mb-12 max-w-3xl">
              Ich bin immer auf der Suche nach Partnern, Gründern und ambitionierten Visionären, um neue Wege gemeinsam in die Realität umzusetzen.
            </p>
            <a href="mailto:contact@0ggi.ch" className="group inline-flex items-center gap-6">
              <span className="text-xl md:text-2xl text-luxota-accent font-medium border-b border-luxota-accent/30 pb-1 group-hover:border-luxota-accent transition-colors">
                Bereit für deine digitale Belegschaft?
              </span>
              <div className="w-12 h-12 rounded-full border border-luxota-accent/30 flex items-center justify-center group-hover:bg-luxota-accent group-hover:text-[#020203] text-luxota-accent transition-colors">
                <Icon icon="solar:arrow-right-linear" className="text-xl" />
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
