'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = preloaderRef.current;
    const logo = logoRef.current;
    const text = textRef.current;
    const line = lineRef.current;
    const glow = glowRef.current;
    if (!el || !logo || !text || !line || !glow) return;

    // Set initial states
    gsap.set(logo, { scale: 0.6, opacity: 0, filter: 'blur(10px)' });
    gsap.set(text, { opacity: 0, x: -8 });
    gsap.set(line, { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(glow, { scale: 0.5, opacity: 0 });

    const tl = gsap.timeline();

    tl
      // Glow pulse behind logo
      .to(glow, { scale: 1.2, opacity: 0.6, duration: 0.5, ease: 'power2.out' }, 0)
      // Logo snaps in — fast, sharp
      .to(logo, { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.4, ease: 'expo.out' }, 0.05)
      // Brand text slides in
      .to(text, { opacity: 1, x: 0, duration: 0.35, ease: 'power3.out' }, 0.2)
      // Accent line draws across
      .to(line, { scaleX: 1, duration: 0.3, ease: 'power2.out' }, 0.25)
      // Brief hold so it registers
      .addLabel('hold', '+=0.25')
      // Glow fades
      .to(glow, { opacity: 0, scale: 1.5, duration: 0.3, ease: 'power2.in' }, 'hold')
      // Everything scales up and fades as screen wipes
      .to([logo, text, line], { opacity: 0, scale: 1.1, duration: 0.25, ease: 'power2.in' }, 'hold')
      // Screen wipe — clip from bottom to top
      .to(el, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.5,
        ease: 'expo.inOut',
        onStart: () => { gsap.delayedCall(0.15, onComplete); },
      }, 'hold+=0.1');

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div
      id="preloader"
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0a0216', clipPath: 'inset(0 0 0 0)' }}
    >
      {/* Subtle noise */}
      <div className="absolute inset-0 noise opacity-[0.04] mix-blend-overlay pointer-events-none" />

      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(157,78,221,0.3) 0%, transparent 70%)' }}
      />

      {/* Logo + brand */}
      <div className="relative z-10 flex items-center gap-4">
        <div ref={logoRef}>
          <Image
            src="/oggi-logo.webp"
            alt="oggi"
            width={52}
            height={52}
            className="rounded-full"
            priority
          />
        </div>
        <span
          ref={textRef}
          className="font-[family-name:var(--font-dongle)] text-white font-medium text-[2.4rem] leading-none"
          style={{ letterSpacing: '-0.05em' }}
        >
          oggi
        </span>
      </div>

      {/* Accent line */}
      <div
        ref={lineRef}
        className="absolute bottom-[38%] left-[15%] right-[15%] h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(157,78,221,0.5), transparent)' }}
      />
    </div>
  );
}
