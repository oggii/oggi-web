'use client';

import { useState } from 'react';

const MapPinIcon = () => (
  <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
  </svg>
);

export default function ContactMapLoader() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className="relative aspect-[4/3]">
      {mapLoaded ? (
        <iframe
          title="0ggi Standort in Liestal"
          src="https://www.google.com/maps?q=Grienmattweg%204%2C%204410%20Liestal&z=15&output=embed"
          className="h-full w-full grayscale-[0.2] contrast-125"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center gap-4 bg-white/[0.02] border border-white/5">
          <span className="text-luxota-accent/50">
            <MapPinIcon />
          </span>
          <p className="text-sm text-white/40">Grienmattweg 4, 4410 Liestal</p>
          <button
            onClick={() => setMapLoaded(true)}
            className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            Karte laden
          </button>
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020203] to-transparent"></div>
    </div>
  );
}

