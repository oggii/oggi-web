'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!preloaderRef.current || !circleRef.current || !textRef.current) return;

    const preloaderTl = gsap.timeline();

    // Circle stroke draw animation
    preloaderTl
      .fromTo(circleRef.current,
        { strokeDasharray: 300, strokeDashoffset: 300, opacity: 0 },
        { strokeDashoffset: 0, opacity: 1, duration: 1.5, ease: 'power2.inOut' }
      )
      // Pulse and flip
      .to(circleRef.current, { rotationY: 180, duration: 0.8, ease: 'power2.inOut', repeat: 1, yoyo: true })
      // Fade out text
      .to(textRef.current, { y: -10, opacity: 0, duration: 0.5, ease: 'power2.in' }, "-=0.3")
      // Shrink circle
      .to(circleRef.current, { scale: 0, opacity: 0, duration: 0.5, ease: 'power3.in' }, "<")
      // Slide up the entire splash screen
      .to(preloaderRef.current, { 
        yPercent: -100, 
        duration: 1.2, 
        ease: 'power4.inOut',
        onStart: () => {
          // Trigger content reveal 200ms into the slide-up for fluidity
          gsap.delayedCall(0.2, onComplete);
        }
      });

    return () => {
      preloaderTl.kill();
    };
  }, [onComplete]);

  return (
    <div
      id="preloader"
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex flex-col justify-center items-center overflow-hidden"
      style={{ backgroundColor: '#0a0216' }}
    >
      {/* Texture overlay */}
      <div className="absolute inset-0 noise opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="relative flex flex-col items-center justify-center z-50">

        {/* Animated Circle */}
        <div className="relative flex items-center justify-center mb-6">
          <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-16 md:h-16 overflow-visible">
            <circle
              ref={circleRef}
              cx="50" cy="50" r="40"
              className="fill-none stroke-white stroke-[3px]"
              style={{ strokeLinecap: 'round' }}
            />
          </svg>
        </div>

        {/* Sub text underneath */}
        <div ref={textRef} className="flex flex-col items-center">
          <div className="text-[10px] md:text-xs font-mono text-white/50 uppercase tracking-[0.4em] ml-[0.4em]">
            oggi wird geladen
          </div>
        </div>

      </div>
    </div>
  );
}
