'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isDesktopCursor, setIsDesktopCursor] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const frame = window.requestAnimationFrame(() => {
      setIsDesktopCursor(hasFinePointer);
    });
    if (!hasFinePointer) return () => window.cancelAnimationFrame(frame);

    let mouseX = 0;
    let mouseY = 0;

    // Cache spotlight cards to avoid querySelectorAll on every mousemove
    let cachedCards: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('.spotlight-card'));

    const observer = new MutationObserver(() => {
      cachedCards = Array.from(document.querySelectorAll<HTMLElement>('.spotlight-card'));
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
      if (outlineRef.current) {
        gsap.to(outlineRef.current, { x: mouseX, y: mouseY, duration: 0.15, ease: 'power2.out' });
      }

      // Update CSS variables for spotlight cards using cached array
      for (const card of cachedCards) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${mouseX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${mouseY - rect.top}px`);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  if (!isDesktopCursor) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline">
        <span ref={textRef} className="cursor-text">MEHR</span>
      </div>
    </>
  );
}
