export default function PortfolioDetailLoading() {
  return (
    <div className="min-h-screen bg-[#020203] pt-32 px-6">
      <div className="max-w-4xl mx-auto animate-pulse">
        <div className="h-4 w-24 bg-white/5 rounded mb-12" />
        <div className="h-12 w-3/4 bg-white/5 rounded mb-6" />
        <div className="h-4 w-1/2 bg-white/5 rounded mb-10" />
        <div className="aspect-video bg-white/5 rounded-xl mb-12" />
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-4 bg-white/5 rounded" style={{ width: `${70 + Math.random() * 30}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
