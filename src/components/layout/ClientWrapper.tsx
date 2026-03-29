'use client';

import { useEffect, useRef, useState } from 'react';
import Preloader from './Preloader';
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import { stripLocaleFromPathname } from '@/i18n/routing';
import { TranslationProvider } from '@/i18n/TranslationContext';

const ParticlesBackground = dynamic(() => import('@/components/ui/ParticlesBackground'), {
  ssr: false,
});
const CustomCursor = dynamic(() => import('./CustomCursor'), {
  ssr: false,
});

type ClientWrapperProps = {
  children: React.ReactNode;
  locale: Locale;
  dictionary: Dictionary;
};

type LenisLike = {
  scrollTo: (target: number, options?: { immediate?: boolean }) => void;
  destroy: () => void;
};

export function ClientWrapper({ children, locale, dictionary }: ClientWrapperProps) {
  const [loading, setLoading] = useState(true);
  const [showDecor, setShowDecor] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  });
  const pathname = usePathname();
  const routePath = stripLocaleFromPathname(pathname ?? '');
  const lenisRef = useRef<LenisLike | null>(null);
  const shouldShowPreloader = routePath === '' && !isTouchDevice && !prefersReducedMotion;
  const shouldRenderDecor = showDecor && !loading && !isTouchDevice && !prefersReducedMotion && routePath === '';

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);

    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      lenisRef.current?.scrollTo(0, { immediate: true });

      if (routePath !== '' || !shouldShowPreloader) {
        setLoading(false);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, routePath, shouldShowPreloader]);

  useEffect(() => {
    if (loading || isTouchDevice || prefersReducedMotion || routePath !== '') {
      return;
    }

    const enableDecor = () => setShowDecor(true);
    let idleCallbackId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if ('requestIdleCallback' in window) {
      idleCallbackId = window.requestIdleCallback(enableDecor, { timeout: 1500 });
    } else {
      timeoutId = globalThis.setTimeout(enableDecor, 900);
    }

    return () => {
      if (idleCallbackId !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleCallbackId);
      }
      if (timeoutId !== undefined) {
        globalThis.clearTimeout(timeoutId);
      }
    };
  }, [loading, isTouchDevice, prefersReducedMotion, routePath]);

  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    const run = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const revealText = gsap.utils.toArray<HTMLElement>('.reveal-text');
        const revealHeroFade = gsap.utils.toArray<HTMLElement>('.reveal-hero-fade');

        if (revealText.length > 0) {
          gsap.set(revealText, { y: '100%' });
        }
        if (revealHeroFade.length > 0) {
          gsap.set(revealHeroFade, { y: 20, opacity: 0 });
        }

        if (loading) return;

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

        tl.add(() => ScrollTrigger.refresh(), '+=0.1');

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
    };

    void run();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [loading, pathname, isTouchDevice, prefersReducedMotion]);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const saveData = connection?.saveData;
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (touch || prefersReducedMotion || saveData) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    const run = async () => {
      const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('@studio-freight/lenis'),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smooth: true,
      } as ConstructorParameters<typeof Lenis>[0]);

      lenisRef.current = lenis;
      lenis.on('scroll', ScrollTrigger.update);

      const onTick = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        lenisRef.current = null;
        lenis.destroy();
        gsap.ticker.remove(onTick);
      };
    };

    void run();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [prefersReducedMotion]);

  return (
    <TranslationProvider locale={locale} dictionary={dictionary}>
      {loading && shouldShowPreloader && <Preloader onComplete={() => setLoading(false)} />}

      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="fixed inset-0 z-0 bg-luxota-bg">
          {shouldRenderDecor && <ParticlesBackground count={50} />}
        </div>

        <div className="noise pointer-events-none opacity-[0.035] mix-blend-overlay fixed inset-0 z-[1]"></div>

        <div className="relative z-10">
          {shouldRenderDecor && <CustomCursor />}
          <Navbar key={pathname} />
          {children}
        </div>
      </div>
    </TranslationProvider>
  );
}
