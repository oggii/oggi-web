'use client';
import { Icon } from '@iconify/react';


import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HorizontalArchitectureSection() {
  const pinSectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const matchMedia = gsap.matchMedia();
    matchMedia.add("(min-width: 1024px)", () => {
      if (!pinSectionRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const pinSection = pinSectionRef.current;
      const cardGraphics = document.querySelectorAll(".card-graphic-wrapper > div");

      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        return -(trackWidth - viewportWidth + 100);
      };

      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: pinSection,
          start: "top top",
          end: "+=3000",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      gsap.to(cardGraphics, {
        x: -80,
        ease: "none",
        scrollTrigger: {
          trigger: pinSection,
          start: "top top",
          end: "+=3000",
          scrub: 1
        }
      });
    });

    return () => matchMedia.revert();
  }, []);

  return (
    <>
      {/* Desktop Horizontal System */}
      <div className="relative z-30 bg-luxota-bg hidden lg:block">
        <div className="pin-spacer relative w-full overflow-hidden">
          <section ref={pinSectionRef} className="h-screen relative overflow-hidden bg-luxota-bg flex flex-col justify-center border-t border-white/5">
            <div className="absolute top-12 left-0 w-full px-12 flex justify-between items-end z-20">
              <div>
                <span className="text-xs text-luxota-accent font-mono mb-3 block tracking-widest">[ 02 — DIENSTLEISTUNGEN ]</span>
                <h2 className="text-4xl font-medium text-white tracking-tight">Die Kernbereiche</h2>
              </div>
              <div className="flex items-center gap-3 text-white/30">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                  
                  <Icon icon="solar:mouse-circle-linear" className="animate-bounce text-lg"></Icon>
                </div>
                <span className="text-xs font-mono tracking-widest">SCROLLEN ZUM ENTDECKEN</span>
              </div>
            </div>

            <div ref={trackRef} className="flex gap-16 px-24 pl-[20vw] items-center h-full w-max">
              {/* Card 1: Web Development & Branding */}
              <div className="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]">
                <div className="w-5/12 flex flex-col justify-between relative z-10 h-full">
                  <div>
                    <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-10 shadow-xl backdrop-blur-md">
                      
                      <Icon icon="solar:laptop-minimalistic-linear" className="text-4xl text-luxota-accent"></Icon>
                    </div>
                    <h3 className="text-5xl text-white font-medium mb-6 tracking-tight">Web Development</h3>
                    <p className="text-lg text-luxota-dim leading-relaxed">
                      Massgeschneiderte Front-End Lösungen. Headless-Architekturen erlauben eine unendliche Anpassbarkeit für deine Marke.
                    </p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-sm text-white/90">
                      <div className="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        
                        <Icon icon="solar:check-circle-linear" className="text-luxota-accent"></Icon>
                      </div>
                      Next.js & React
                    </li>
                    <li className="flex items-center gap-4 text-sm text-white/90">
                      <div className="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        
                        <Icon icon="solar:check-circle-linear" className="text-luxota-accent"></Icon>
                      </div>
                      Branding & UI/UX
                    </li>
                  </ul>
                </div>
                <div className="w-7/12 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden card-graphic-wrapper pointer-events-none">
                  <div className="w-80 h-[28rem] border border-white/10 rounded-2xl relative bg-black/40 backdrop-blur-xl rotate-6 translate-x-12 shadow-2xl transition-transform duration-700 hover:rotate-3">
                    <div className="absolute top-6 left-6 right-6 h-4 bg-white/10 rounded-full"></div>
                    <div className="absolute top-16 left-6 w-16 h-16 bg-luxota-accent/20 rounded-full blur-2xl"></div>
                    <div className="absolute top-16 left-6 w-12 h-12 bg-luxota-accent rounded-full shadow-[0_0_20px_#9D4EDD40]"></div>
                    <div className="absolute bottom-6 left-6 right-6 h-40 bg-white/5 rounded-xl border border-white/5"></div>
                  </div>
                </div>
              </div>

              {/* Card 2: Performance */}
              <div className="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]">
                <div className="w-5/12 flex flex-col justify-between relative z-10 h-full">
                  <div>
                    <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-10 shadow-xl backdrop-blur-md">
                      
                      <Icon icon="solar:startup-linear" className="text-4xl text-luxota-accent"></Icon>
                    </div>
                    <h3 className="text-5xl text-white font-medium mb-6 tracking-tight">System Performance</h3>
                    <p className="text-lg text-luxota-dim leading-relaxed">
                      Extreme Ladezeiten und perfekte Core Web Vitals. Ich optimiere jede Metrik für maximale Conversions und Sichtbarkeit (SEO).
                    </p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-sm text-white/90">
                      <div className="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        
                        <Icon icon="solar:check-circle-linear" className="text-luxota-accent"></Icon>
                      </div>
                      Asset Optimization
                    </li>
                    <li className="flex items-center gap-4 text-sm text-white/90">
                      <div className="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        
                        <Icon icon="solar:check-circle-linear" className="text-luxota-accent"></Icon>
                      </div>
                      SEO & Accessibility
                    </li>
                  </ul>
                </div>
                <div className="w-7/12 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden card-graphic-wrapper pointer-events-none">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-64 h-64 border border-luxota-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute w-96 h-96 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="w-4 h-4 bg-luxota-accent rounded-full shadow-[0_0_30px_#9D4EDD]"></div>
                  </div>
                </div>
              </div>

              {/* Card 3: AI Agents */}
              <div className="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]">
                <div className="w-5/12 flex flex-col justify-between relative z-10 h-full">
                  <div>
                    <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-10 shadow-xl backdrop-blur-md">
                      
                      <Icon icon="solar:shield-warning-linear" className="text-4xl text-luxota-accent"></Icon>
                    </div>
                    <h3 className="text-5xl text-white font-medium mb-6 tracking-tight">AI Automation</h3>
                    <p className="text-lg text-luxota-dim leading-relaxed">
                      Integriere intelligente Prozesse. Mit feingetunten Agenten wie OpenClaw und Hermes sowie n8n Workflows automatisiere ich dein Business.
                    </p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-sm text-white/90">
                      <div className="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        
                        <Icon icon="solar:check-circle-linear" className="text-luxota-accent"></Icon>
                      </div>
                      n8n Workflows
                    </li>
                    <li className="flex items-center gap-4 text-sm text-white/90">
                      <div className="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        
                        <Icon icon="solar:check-circle-linear" className="text-luxota-accent"></Icon>
                      </div>
                      Fine-Tuned KI Agenten
                    </li>
                  </ul>
                </div>
                <div className="w-7/12 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden card-graphic-wrapper pointer-events-none">
                  <div className="w-64 h-80 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4 p-6 shadow-2xl backdrop-blur-lg">
                    <div className="h-3 w-full bg-white/10 rounded-full"></div>
                    <div className="h-3 w-2/3 bg-white/10 rounded-full"></div>
                    <div className="mt-auto h-12 w-full bg-luxota-accent/10 border border-luxota-accent/20 rounded-xl flex items-center justify-center gap-2 text-xs text-luxota-accent font-mono tracking-widest">
                      
                      <Icon icon="solar:verified-check-linear" className="text-lg"></Icon>
                      AUTOMATISIERT
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>

      {/* Mobile Vertical Fallback */}
      <section className="block lg:hidden px-6 py-20 space-y-8 bg-luxota-bg border-t border-white/5">
        <span className="text-xs text-luxota-accent font-mono mb-2 block tracking-widest">[ 02 — DIENSTLEISTUNGEN ]</span>
        <div className="spotlight-card rounded-3xl p-8 border border-white/10">
          <h3 className="text-2xl text-white font-medium mb-2">Web Development</h3>
          <p className="text-sm text-luxota-dim">Massgeschneiderte Next.js Lösungen und perfektes Branding.</p>
        </div>
        <div className="spotlight-card rounded-3xl p-8 border border-white/10">
          <h3 className="text-2xl text-white font-medium mb-2">Performance & Speed</h3>
          <p className="text-sm text-luxota-dim">Blitzschnelle Ladezeiten für optimale SEO-Ergebnisse.</p>
        </div>
        <div className="spotlight-card rounded-3xl p-8 border border-white/10">
          <h3 className="text-2xl text-white font-medium mb-2">AI Automation</h3>
          <p className="text-sm text-luxota-dim">Smarte Automatisierung mit n8n Workflows.</p>
        </div>
      </section>
    </>
  );
}
