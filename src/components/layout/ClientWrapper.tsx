'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Preloader from './Preloader';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
import PageTransition from './PageTransition';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import { stripLocaleFromPathname } from '@/i18n/routing';

const ParticlesBackground = dynamic(() => import('@/components/ui/ParticlesBackground'), {
  ssr: false,
});

import { TranslationProvider } from '@/i18n/TranslationContext';

type ClientWrapperProps = {
  children: React.ReactNode;
  locale: Locale;
  dictionary: Dictionary;
};

export function ClientWrapper({ children, locale, dictionary }: ClientWrapperProps) {
  const [loading, setLoading] = useState(true);
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  });
  const [hasFinePointer] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }

    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });
  const pathname = usePathname();
  const routePath = stripLocaleFromPathname(pathname ?? '');
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      ScrollTrigger.refresh();

      if (routePath !== '') {
        setLoading(false);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, routePath]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const revealText = gsap.utils.toArray<HTMLElement>('.reveal-text');
      const revealHeroFade = gsap.utils.toArray<HTMLElement>('.reveal-hero-fade');

      // Set initial invisibility via GSAP immediately on mount to avoid flash
      if (revealText.length > 0) {
        gsap.set(revealText, { y: '100%' });
      }
      if (revealHeroFade.length > 0) {
        gsap.set(revealHeroFade, { y: 20, opacity: 0 });
      }

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
      tl.fromTo('.reveal-nav', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });

      if (revealText.length > 0) {
        tl.to(revealText, { y: '0%', duration: 1.2, stagger: 0.05, ease: 'power4.out' }, '-=0.8');
      }

      if (revealHeroFade.length > 0) {
        tl.to(revealHeroFade, { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.8');
      }

      tl.add(() => ScrollTrigger.refresh(), "+=0.1");

      // Global Scroll Reveal for all other pages/sections
      const animateRevealUp = (el: HTMLElement) => {
        if (el.dataset.revealInit) return; // already animated
        el.dataset.revealInit = '1';
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
      };

      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach(animateRevealUp);

      // Watch for new elements added after Suspense resolves
      const observer = new MutationObserver((mutations) => {
        let hasNew = false;
        const newRevealTexts: HTMLElement[] = [];
        const newHeroFades: HTMLElement[] = [];

        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;

            // Collect .reveal-up
            if (node.classList.contains('reveal-up')) {
              animateRevealUp(node);
              hasNew = true;
            }
            node.querySelectorAll<HTMLElement>('.reveal-up').forEach((el) => {
              animateRevealUp(el);
              hasNew = true;
            });

            // Collect .reveal-text
            if (node.classList.contains('reveal-text')) newRevealTexts.push(node);
            node.querySelectorAll<HTMLElement>('.reveal-text').forEach((el) => newRevealTexts.push(el));

            // Collect .reveal-hero-fade
            if (node.classList.contains('reveal-hero-fade')) newHeroFades.push(node);
            node.querySelectorAll<HTMLElement>('.reveal-hero-fade').forEach((el) => newHeroFades.push(el));

            // Parallax text
            const parallaxEls = [
              ...(node.classList.contains('parallax-text') ? [node] : []),
              ...node.querySelectorAll<HTMLElement>('.parallax-text'),
            ];
            parallaxEls.forEach((element) => {
              gsap.fromTo(element, { y: 50 }, {
                y: -50, ease: 'none',
                scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: true },
              });
            });
          }
        }

        // Run hero entrance animation for newly added hero elements
        if (newRevealTexts.length > 0 || newHeroFades.length > 0) {
          hasNew = true;
          const heroTl = gsap.timeline({ delay: 0.1 });
          if (newRevealTexts.length > 0) {
            gsap.set(newRevealTexts, { y: '100%' });
            heroTl.to(newRevealTexts, { y: '0%', duration: 1.2, stagger: 0.05, ease: 'power4.out' });
          }
          if (newHeroFades.length > 0) {
            gsap.set(newHeroFades, { y: 20, opacity: 0 });
            heroTl.to(newHeroFades, { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.8');
          }
        }

        if (hasNew) ScrollTrigger.refresh();
      });
      observer.observe(document.body, { childList: true, subtree: true });

      return () => observer.disconnect();
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
    } as ConstructorParameters<typeof Lenis>[0]);

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
    <TranslationProvider locale={locale} dictionary={dictionary}>
      {loading && routePath === '' && <Preloader onComplete={() => setLoading(false)} />}
      <PageTransition pathname={pathname ?? ''} />

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
          {hasFinePointer && <CustomCursor />}
          <Navbar key={pathname} />
          {/* PAGE CONTENT */}
          {children}
        </div>
      </div>
    </TranslationProvider>
  );
}
