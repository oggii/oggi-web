'use client';

import { useEffect, useRef, useState } from 'react';
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

import { TranslationProvider } from '@/i18n/TranslationContext';

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Detect touch device for mobile-specific optimizations
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touch);

    // Always scroll native window to top first (works on mobile & as fallback)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Also reset Lenis if it's running (desktop smooth scroll)
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    // Refresh ScrollTrigger after navigation so pinned sections recalc
    ScrollTrigger.refresh();

    // Wenn man direkt auf einer Unterseite landet, ignoriere den Preloader, damit GSAP startet.
    if (pathname !== '/' && pathname !== '') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
    }
  }, [pathname]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial invisibility via GSAP immediately on mount to avoid flash
      gsap.set('.reveal-text', { y: '100%' });
      gsap.set('.reveal-hero-fade', { y: 20, opacity: 0 });

      if (loading) return;

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

      const tl = gsap.timeline({ delay: 0.1 }); 
      tl.fromTo('.reveal-nav', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
        .to('.reveal-text', { y: '0%', duration: 1.2, stagger: 0.05, ease: 'power4.out' }, '-=0.8')
        .to('.reveal-hero-fade', { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.8')
        .add(() => ScrollTrigger.refresh(), "+=0.1");

      // Global Scroll Reveal for all other pages/sections
      gsap.utils.toArray('.reveal-up').forEach((el: any) => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        });
      });
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

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenisRef.current = null;
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <TranslationProvider>
      {loading && (pathname === '/' || pathname === '') && <Preloader onComplete={() => setLoading(false)} />}

      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="fixed inset-0 z-0 bg-luxota-bg">
          {/* On mobile: show reduced particles hero-only. On desktop: full background. */}
          <ParticlesBackground
            count={isTouchDevice ? 30 : 80}
            heroOnly={isTouchDevice}
          />
        </div>

        <div className="noise pointer-events-none opacity-[0.035] mix-blend-overlay fixed inset-0 z-[1]"></div>

        <div className="relative z-10">
          <CustomCursor />
          <Navbar />
          {/* PAGE CONTENT */}
          {children}
        </div>
      </div>
    </TranslationProvider>
  );
}
