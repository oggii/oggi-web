'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
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
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: { value: 80, density: { enable: true, width: 800 }, limit: { value: 120 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.2 },
          size: { value: { min: 1, max: 3 } },
          links: { enable: true, distance: 150, color: '#ffffff', opacity: 0.1, width: 1 },
          move: { enable: true, speed: 0.5, direction: 'none', outModes: 'out' },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'repulse' },
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.3 } },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        detectRetina: true,
        background: { color: 'transparent' }
      }}
    />
  );
}
