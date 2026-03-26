'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Preloader from './Preloader';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(() => import('@/components/ui/ParticlesBackground'), {
  ssr: false,
});

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Verhindert, dass man mitten in der Seite landet (Next.js Lenis Scroll Memory Fix)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Wenn man direkt auf einer Unterseite landet, ignoriere den Preloader, damit GSAP startet.
    if (pathname !== '/' && pathname !== '') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      gsap.set('.reveal-text', { y: '100%' });

      // Parallax text
      gsap.utils.toArray('.parallax-text').forEach((el: unknown) => {
        const element = el as HTMLElement;
        gsap.fromTo(element,
          { y: 50 },
          {
            y: -50,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      });
      
      const tl = gsap.timeline();
      tl.fromTo('.reveal-nav', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
        .to('.reveal-text', { y: '0%', duration: 1.2, stagger: 0.05, ease: 'power4.out' }, '-=0.8')
        .fromTo('.reveal-hero-fade', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.8')
        .add(() => ScrollTrigger.refresh(), "+=0.1"); // Refresh after DOM is stable
    });

    return () => ctx.revert();
  }, [loading, pathname]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Skip Lenis on touch/mobile — native scroll is faster and more fluid
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Lenis Smooth Scroll Setup (Desktop only)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <>
      {loading && (pathname === '/' || pathname === '') && <Preloader onComplete={() => setLoading(false)} />}
      
      <div className="fixed inset-0 z-0 bg-[#020203]">
        {/* Particles are desktop-only — too heavy for mobile GPU */}
        <div className="hidden lg:block w-full h-full">
          <ParticlesBackground />
        </div>
      </div>

      <div className="relative z-10">
        <CustomCursor />
        <Navbar />
        {/* PAGE CONTENT */}
        {children}
      </div>
    </>
  );
}
