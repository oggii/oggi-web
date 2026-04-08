export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-[#020203] pt-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div className="h-10 w-48 bg-white/5 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-4 w-80 bg-white/5 rounded mx-auto animate-pulse" />
        </div>

        <div className="space-y-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-white/[0.03] bg-white/[0.015] p-8 animate-pulse">
              <div className="h-7 w-1/3 bg-white/5 rounded mb-4" />
              <div className="h-4 w-full bg-white/5 rounded mb-2" />
              <div className="h-4 w-2/3 bg-white/5 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
