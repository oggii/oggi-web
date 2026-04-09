'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const boxRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const box = boxRef.current;
    const imageWrap = imageWrapRef.current;
    const image = imageRef.current;
    const start = startRef.current;
    const end = endRef.current;
    const letters = lettersRef.current.filter(Boolean) as HTMLSpanElement[];
    if (!el || !box || !imageWrap || !image || !start || !end || letters.length === 0) return;

    const tl = gsap.timeline({
      defaults: { ease: 'expo.inOut' },
    });

    // 1. Letters slide up into view (shortened for faster LCP)
    tl.from(letters, {
      yPercent: 110,
      stagger: 0.02,
      duration: 0.4,
    });

    // 2. Box expands between letter groups, image grows inside
    tl.fromTo(box,
      { width: '0em' },
      { width: '0.9em', duration: 0.4 },
      '<0.3'
    );
    tl.fromTo(imageWrap,
      { width: '0%' },
      { width: '100%', duration: 0.4 },
      '<'
    );

    // 3. Letter groups shift apart slightly
    tl.fromTo(start,
      { x: '0em' },
      { x: '-0.03em', duration: 0.4 },
      '<'
    );
    tl.fromTo(end,
      { x: '0em' },
      { x: '0.03em', duration: 0.4 },
      '<'
    );

    // 4. Image expands to fullscreen
    tl.to(imageWrap, {
      width: '100vw',
      height: '100dvh',
      duration: 0.5,
    }, '<0.35');
    tl.to(box, {
      width: '110vw',
      duration: 0.5,
    }, '<');

    // 5. Fade the expanded image to the site background and complete
    tl.to(image, {
      opacity: 0,
      duration: 0.25,
      ease: 'power2.inOut',
    }, '-=0.2');
    tl.to(el, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete,
    }, '-=0.1');

    return () => { tl.kill(); };
  }, [onComplete]);

  const setLetterRef = (i: number) => (el: HTMLSpanElement | null) => {
    lettersRef.current[i] = el;
  };

  return (
    <div
      id="preloader"
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0a0216' }}
    >
      {/* Noise overlay */}
      <div className="absolute inset-0 noise opacity-[0.04] mix-blend-overlay pointer-events-none" />

      {/* Main heading with growing image box */}
      <div
        className="relative z-10 flex items-center justify-center whitespace-nowrap font-[family-name:var(--font-dongle)] font-medium text-white leading-[0.75]"
        style={{ fontSize: 'clamp(5rem, 14vw, 12rem)', letterSpacing: '-0.05em' }}
      >
        {/* Left letters: "og" */}
        <div ref={startRef} className="flex justify-end overflow-hidden" style={{ width: '1.1em' }}>
          <span ref={setLetterRef(0)} className="block">o</span>
          <span ref={setLetterRef(1)} className="block">g</span>
        </div>

        {/* Growing image box */}
        <div ref={boxRef} className="relative flex items-center justify-center" style={{ width: 0, height: '95%' }}>
          <div
            ref={imageWrapRef}
            className="absolute flex items-center justify-center overflow-hidden"
            style={{ width: '0%', height: '100%' }}
          >
            <div
              ref={imageRef}
              className="absolute w-full h-full flex items-center justify-center"
              style={{
                minWidth: '0.9em',
                background: 'radial-gradient(circle at center, rgba(157,78,221,0.4) 0%, rgba(10,2,22,0.95) 70%)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/oggi-logo.webp"
                alt=""
                className="w-[60%] h-[60%] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Right letters: "gi" */}
        <div ref={endRef} className="flex justify-start overflow-hidden" style={{ width: '0.8em' }}>
          <span ref={setLetterRef(2)} className="block">g</span>
          <span ref={setLetterRef(3)} className="block">i</span>
        </div>
      </div>
    </div>
  );
}
