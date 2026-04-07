'use client';

import { useEffect, useRef, useState } from 'react';
import Preloader from './Preloader';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
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
  const isHome = routePath === '' || routePath === '/';
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.refresh();
      });

      if (routePath !== '') {
        setLoading(false);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, routePath]);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      gsap.registerPlugin(ScrollTrigger);

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
        gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((el) => {
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

      cleanup = () => ctx.revert();
    })();

    return () => cleanup?.();
  }, [loading, pathname]);

  useEffect(() => {
    let lenis: any;

    (async () => {
      const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('@studio-freight/lenis'),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      // Skip Lenis on touch/mobile — native scroll is faster and more fluid
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (isTouchDevice) return;

      // Lenis Smooth Scroll Setup (Desktop only)
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smooth: true,
      } as ConstructorParameters<typeof Lenis>[0]);

      lenisRef.current = lenis;

      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    })();

    return () => {
      if (lenis) {
        lenisRef.current = null;
        lenis.destroy();
      }
    };
  }, []);

  return (
    <TranslationProvider locale={locale} dictionary={dictionary}>
      {loading && routePath === '' && <Preloader onComplete={() => setLoading(false)} />}

      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="fixed inset-0 z-0 bg-luxota-bg">
          {/* On mobile: show reduced particles hero-only. On desktop: full background. */}
          {isHome && (
            <ParticlesBackground
              count={isTouchDevice ? 30 : 80}
              heroOnly={isTouchDevice}
            />
          )}
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
