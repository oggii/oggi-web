'use client';
import { Icon } from '@iconify/react';


import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const loaderBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!preloaderRef.current || !loaderBarRef.current || !counterRef.current) return;

    const preloaderTl = gsap.timeline({
      onComplete: () => onComplete(),
    });

    preloaderTl
      .to(loaderBarRef.current, { scaleX: 1, duration: 1.5, ease: 'power2.inOut' })
      .to(counterRef.current, { innerText: 100, duration: 1.5, snap: { innerText: 1 }, ease: 'power2.inOut' }, '<')
      .to(preloaderRef.current, { yPercent: -100, duration: 1, ease: 'power4.inOut', delay: 0.2 });

    return () => {
      preloaderTl.kill();
    };
  }, [onComplete]);

  return (
    <div id="preloader" ref={preloaderRef} className="fixed inset-0 z-[9999] bg-[#020203] flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-6 text-center z-50">
        <div className="relative">
          <div className="text-[12rem] font-medium leading-none tracking-tighter text-white/5 relative z-10 font-sans">
            <span id="counter" ref={counterRef}>0</span>%
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-luxota-bg via-transparent to-transparent z-20"></div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3 text-xs font-mono text-luxota-accent uppercase tracking-[0.2em]">
            {/* Using iconify through client web component */}
            <Icon icon="solar:refresh-circle-linear" className="animate-spin text-lg"></Icon>
            <span>System Initialization</span>
          </div>
          <div className="w-48 h-[1px] bg-white/10 mt-2 overflow-hidden rounded-full">
            <div
              id="loader-bar"
              ref={loaderBarRef}
              className="w-full h-full bg-gradient-to-r from-luxota-accent to-white origin-left scale-x-0"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
