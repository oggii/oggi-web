'use client';

import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const TILE_COUNT = 5;

export default function PageTransition({ pathname }: { pathname: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevPathRef = useRef(pathname);
  const isFirstRender = useRef(true);

  const animate = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const tiles = container.querySelectorAll<HTMLDivElement>('.page-tile');
    if (!tiles.length) return;

    const tl = gsap.timeline();

    // Tiles slide down to cover the screen
    tl.set(container, { pointerEvents: 'auto' });
    tl.fromTo(tiles, {
      yPercent: -100,
    }, {
      yPercent: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power3.inOut',
    });

    // Brief hold
    tl.addLabel('hold', '+=0.1');

    // Tiles slide down to exit
    tl.to(tiles, {
      yPercent: 100,
      duration: 0.4,
      stagger: 0.03,
      ease: 'power3.inOut',
    }, 'hold');

    tl.set(container, { pointerEvents: 'none' });
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (pathname !== prevPathRef.current) {
      prevPathRef.current = pathname;
      animate();
    }
  }, [pathname, animate]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9998] flex pointer-events-none"
      aria-hidden="true"
    >
      {Array.from({ length: TILE_COUNT }).map((_, i) => (
        <div
          key={i}
          className="page-tile h-full flex-1"
          style={{
            backgroundColor: '#0a0216',
            transform: 'translateY(-100%)',
          }}
        />
      ))}
    </div>
  );
}
