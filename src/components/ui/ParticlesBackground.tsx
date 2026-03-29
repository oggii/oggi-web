'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

interface Props {
  count?: number;
  heroOnly?: boolean; // limit canvas height to 100vh (hero area)
}

export default function ParticlesBackground({ count = 80, heroOnly = false }: Props) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

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
        style={{ height: '100%' }}
        options={{
          particles: {
            number: { value: count, density: { enable: true, width: 800 }, limit: { value: count + 40 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.2 },
            size: { value: { min: 1, max: 3 } },
            links: { enable: true, distance: 150, color: '#ffffff', opacity: 0.1, width: 1 },
            move: { enable: true, speed: 0.5, direction: 'none', outModes: 'out' },
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
          detectRetina: false, // disable on mobile for perf
          background: { color: 'transparent' }
        }}
      />
    </div>
  );
}
