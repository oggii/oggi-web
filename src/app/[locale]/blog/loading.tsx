export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-[#020203] pt-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header skeleton */}
        <div className="mb-16 text-center">
          <div className="h-10 w-48 bg-white/5 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-4 w-72 bg-white/5 rounded mx-auto animate-pulse" />
        </div>

        {/* Post grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-white/[0.03] bg-white/[0.015] p-4 animate-pulse">
              <div className="aspect-video bg-white/5 rounded-lg mb-4" />
              <div className="h-5 w-3/4 bg-white/5 rounded mb-3" />
              <div className="h-3 w-full bg-white/5 rounded mb-2" />
              <div className="h-3 w-2/3 bg-white/5 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
