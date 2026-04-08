export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020203]">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-2 border-luxota-accent/20 border-t-luxota-accent animate-spin" />
      </div>
      <p className="mt-6 text-xs font-mono uppercase tracking-[0.3em] text-luxota-dim/60 animate-pulse">
        Loading_
      </p>
    </div>
  );
}
