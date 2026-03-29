'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

interface Props {
  count?: number;
}

export default function ParticlesBackground({ count = 36 }: Props) {
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
    <div style={{ pointerEvents: 'none', height: '100%' }}>
      <Particles
        id="tsparticles"
        style={{ height: '100%' }}
        options={{
          particles: {
            number: { value: count, density: { enable: true, width: 1200 }, limit: { value: count + 12 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.12 },
            size: { value: { min: 1, max: 2.4 } },
            links: { enable: true, distance: 130, color: '#ffffff', opacity: 0.06, width: 1 },
            move: { enable: true, speed: 0.25, direction: 'none', outModes: 'out' },
          },
          interactivity: {
            events: {
              onHover: { enable: false, mode: 'grab' },
              onClick: { enable: false, mode: 'repulse' },
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
