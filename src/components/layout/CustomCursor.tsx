'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
      if (outlineRef.current) {
        gsap.to(outlineRef.current, { x: mouseX, y: mouseY, duration: 0.15, ease: 'power2.out' });
      }

      // Update CSS variables for spotlight cards globally
      document.querySelectorAll('.spotlight-card').forEach((card) => {
        const rect = card.getBoundingClientRect();
        (card as HTMLElement).style.setProperty('--mouse-x', `${mouseX - rect.left}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${mouseY - rect.top}px`);
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block"></div>
      <div ref={outlineRef} className="cursor-outline hidden lg:flex">
        <span ref={textRef} className="cursor-text">MEHR</span>
      </div>
    </>
  );
}
