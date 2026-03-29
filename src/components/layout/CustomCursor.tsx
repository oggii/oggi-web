'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touch = !window.matchMedia('(pointer:fine)').matches || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const frame = window.requestAnimationFrame(() => {
      setIsTouch(touch);
    });
    if (touch) return () => window.cancelAnimationFrame(frame);

    let mouseX = 0;
    let mouseY = 0;
    let rafId = 0;
    const moveOutlineX = outlineRef.current ? gsap.quickTo(outlineRef.current, 'x', { duration: 0.15, ease: 'power2.out' }) : null;
    const moveOutlineY = outlineRef.current ? gsap.quickTo(outlineRef.current, 'y', { duration: 0.15, ease: 'power2.out' }) : null;

    const updateSpotlight = () => {
      rafId = 0;
      const target = document.elementFromPoint(mouseX, mouseY)?.closest('.spotlight-card') as HTMLElement | null;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      target.style.setProperty('--mouse-x', `${mouseX - rect.left}px`);
      target.style.setProperty('--mouse-y', `${mouseY - rect.top}px`);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
      moveOutlineX?.(mouseX);
      moveOutlineY?.(mouseY);

      if (!rafId) {
        rafId = window.requestAnimationFrame(updateSpotlight);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline">
        <span ref={textRef} className="cursor-text">MEHR</span>
      </div>
    </>
  );
}
