'use client';

import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

interface Props {
  count?: number;
  heroOnly?: boolean;
  particleColor?: string;
  linkColor?: string;
}

export default function ParticlesBackground({
  count = 80,
  heroOnly = false,
  particleColor = '#ffffff',
  linkColor = '#ffffff',
}: Props) {
  const [init, setInit] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Honour prefers-reduced-motion: don't bootstrap the canvas / engine at
    // all for users who opted out of motion. Saves the ~30 KB tsparticles
    // chunk parse + the persistent RAF loop. Also reacts live in case the
    // user toggles the setting.
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    // Defer particle engine init until the browser is idle to avoid blocking
    // the main thread during initial page load (reduces TBT significantly).
    const initFn = () => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    };

    const id = window.requestIdleCallback(initFn, { timeout: 3000 });
    return () => window.cancelIdleCallback(id);
  }, [reducedMotion]);

  const options = useMemo(() => ({
    particles: {
      number: { value: count, density: { enable: true, width: 800 }, limit: { value: count + 40 } },
      color: { value: particleColor },
      shape: { type: 'circle' },
      opacity: { value: 0.2 },
      size: { value: { min: 1, max: 3 } },
      links: { enable: true, distance: 150, color: linkColor, opacity: 0.1, width: 1 },
      move: { enable: true, speed: 0.5, direction: 'none' as const, outModes: 'out' as const },
    },
    interactivity: {
      events: {
        onHover: { enable: !heroOnly, mode: 'grab' },
        onClick: { enable: !heroOnly, mode: 'repulse' },
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.3 } },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    detectRetina: false,
    background: { color: 'transparent' },
  }), [count, heroOnly, particleColor, linkColor]);

  if (!init) return null;

  return (
    <div
      style={{
        position: heroOnly ? 'absolute' : undefined,
        top: heroOnly ? 0 : undefined,
        left: heroOnly ? 0 : undefined,
        right: heroOnly ? 0 : undefined,
        height: heroOnly ? '100vh' : '100%',
        overflow: heroOnly ? 'hidden' : undefined,
        pointerEvents: 'none',
      }}
    >
      <Particles
        id="tsparticles"
        key={`${particleColor}-${linkColor}`}
        style={{ height: '100%' }}
        options={options}
      />
    </div>
  );
}
