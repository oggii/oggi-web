export default function PortfolioLoading() {
  return (
    <div className="min-h-screen bg-[#020203] pt-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header skeleton */}
        <div className="mb-16 text-center">
          <div className="h-10 w-52 bg-white/5 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-4 w-64 bg-white/5 rounded mx-auto animate-pulse" />
        </div>

        {/* Project grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-white/[0.03] bg-white/[0.015] overflow-hidden animate-pulse">
              <div className="aspect-video bg-white/5" />
              <div className="p-6">
                <div className="h-6 w-1/2 bg-white/5 rounded mb-3" />
                <div className="h-3 w-full bg-white/5 rounded mb-2" />
                <div className="h-3 w-3/4 bg-white/5 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
