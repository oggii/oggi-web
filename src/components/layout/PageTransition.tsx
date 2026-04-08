'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TILE_COUNT = 5;

export default function PageTransition({ pathname }: { pathname: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevPathRef = useRef(pathname);
  const isFirstRender = useRef(true);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (pathname === prevPathRef.current) return;
    prevPathRef.current = pathname;

    const container = containerRef.current;
    if (!container) return;

    const tiles = container.querySelectorAll<HTMLDivElement>('.page-tile');
    if (!tiles.length) return;

    // Kill any running transition
    if (tlRef.current) {
      tlRef.current.kill();
      gsap.set(tiles, { yPercent: -100 });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // Ensure tiles are fully off-screen when done
        gsap.set(tiles, { yPercent: -100 });
      },
    });
    tlRef.current = tl;

    // Tiles enter: slide down to cover
    tl.fromTo(tiles, {
      yPercent: -100,
    }, {
      yPercent: 0,
      duration: 0.35,
      stagger: 0.04,
      ease: 'power4.inOut',
    });

    // Hold briefly while content swaps
    tl.addLabel('hold', '+=0.15');

    // Tiles exit: slide down out of view
    tl.to(tiles, {
      yPercent: 100,
      duration: 0.35,
      stagger: 0.03,
      ease: 'power3.inOut',
    }, 'hold');

    return () => {
      tl.kill();
      // Always reset tiles on cleanup so they never get stuck
      gsap.set(tiles, { yPercent: -100 });
    };
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9998] flex"
      style={{ pointerEvents: 'none' }}
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
