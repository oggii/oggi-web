'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020203] text-center px-6" id="error-boundary">
      <h2 className="text-3xl md:text-5xl text-white tracking-tight mb-4 font-medium uppercase font-mono">
        System <span className="text-red-500">Error_</span>
      </h2>
      <p className="text-luxota-dim/60 mb-10 max-w-md mx-auto text-sm md:text-base">
        Ein unerwarteter Fehler im Mainframe ist aufgetreten. Der Prozess wurde sicherheitshalber abgebrochen.
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 border border-red-500/50 text-red-400 text-sm font-mono tracking-widest rounded-full hover:bg-red-500/10 hover:border-red-500 transition-all focus:outline-none focus:ring-2 focus:ring-red-500/30"
      >
        REBOOT SYSTEM
      </button>
    </div>
  );
}
