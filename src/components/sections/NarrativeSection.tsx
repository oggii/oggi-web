'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function NarrativeSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray('.highlight-word');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          anticipatePin: 1,
          scrub: 1,
        }
      });

      tl.fromTo(words,
        { opacity: 0.1, filter: "blur(8px)", y: 20, scale: 0.95 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          scale: 1,
          stagger: 0.1,
          color: (i, target) => (target as HTMLElement).classList.contains("text-luxota-accent") ? "#9D4EDD" : "#ffffff",
          duration: 1,
          ease: "power2.out"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pin-spacer">
      <section ref={containerRef} className="h-screen flex items-center justify-center bg-luxota-bg relative overflow-hidden z-20" id="narrative-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.05),transparent_60%)] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10" id="narrative-content">
          <p className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-normal leading-tight tracking-tight text-white flex flex-wrap justify-center gap-x-3 md:gap-x-6 gap-y-2 md:gap-y-4 break-words">
            <span className="highlight-word opacity-20 blur-sm text-white">Viele</span>
            <span className="highlight-word opacity-20 blur-sm text-white">Agenturen</span>
            <span className="highlight-word opacity-20 blur-sm text-white">bauen</span>
            <span className="highlight-word opacity-20 blur-sm text-white font-medium">isolierte</span>
            <span className="highlight-word opacity-20 blur-sm text-white font-medium">Tools.</span>
            <span className="highlight-word opacity-20 blur-sm text-white">Ich</span>
            <span className="highlight-word opacity-20 blur-sm text-white">schaffe</span>
            <span className="highlight-word opacity-20 blur-sm text-luxota-accent">Systeme.</span>
            <span className="highlight-word opacity-20 blur-sm text-white">Ich</span>
            <span className="highlight-word opacity-20 blur-sm text-white">löse</span>
            <span className="highlight-word opacity-20 blur-sm text-white">nicht</span>
            <span className="highlight-word opacity-20 blur-sm text-white">nur</span>
            <span className="highlight-word opacity-20 blur-sm text-white">Probleme;</span>
            <span className="highlight-word opacity-20 blur-sm text-white">ich</span>
            <span className="highlight-word opacity-20 blur-sm text-white">automatisiere</span>
            <span className="highlight-word opacity-20 blur-sm text-luxota-accent italic font-serif">Skalierung.</span>
          </p>
        </div>
      </section>
    </div>
  );
}
