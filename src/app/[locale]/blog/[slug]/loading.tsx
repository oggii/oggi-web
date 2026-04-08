export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-[#020203] pt-32 px-6">
      <div className="max-w-3xl mx-auto animate-pulse">
        {/* Back link */}
        <div className="h-4 w-24 bg-white/5 rounded mb-12" />

        {/* Title */}
        <div className="h-10 w-full bg-white/5 rounded mb-3" />
        <div className="h-10 w-2/3 bg-white/5 rounded mb-8" />

        {/* Meta */}
        <div className="flex gap-4 mb-10">
          <div className="h-4 w-28 bg-white/5 rounded" />
          <div className="h-4 w-20 bg-white/5 rounded" />
        </div>

        {/* Hero image */}
        <div className="aspect-video bg-white/5 rounded-xl mb-12" />

        {/* Content lines */}
        <div className="space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-4 bg-white/5 rounded" style={{ width: `${75 + Math.random() * 25}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
