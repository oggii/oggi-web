export default function ClientsMarqueeSection() {
  const row1 = ["Next.js", "React", "Tailwind CSS", "GSAP", "n8n", "TypeScript"];
  const row2 = ["OpenAI", "Vercel", "Supabase", "Node.js", "Figma", "Framer"];

  const dot = <span className="w-1.5 h-1.5 rounded-full bg-luxota-accent/40 shrink-0" />;

  const renderRow = (items: string[], reverse = false) => {
    const doubled = [...items, ...items];
    return (
      <div className="flex overflow-hidden">
        <div
          className="flex w-max gap-0"
          style={{ animation: `${reverse ? 'marquee-reverse' : 'marquee'} 25s linear infinite` }}
        >
          {[...doubled, ...doubled].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-6 mx-6">
              <span className="text-2xl md:text-4xl font-bold tracking-tighter text-white/10 uppercase hover:text-white/60 transition-colors duration-300 cursor-default whitespace-nowrap">
                {tech}
              </span>
              {dot}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-10 lg:py-16 relative overflow-hidden bg-[#020203] border-y border-white/5 space-y-6">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020203] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020203] to-transparent z-10 pointer-events-none" />
      {renderRow(row1, false)}
      {renderRow(row2, true)}
    </section>
  );
}
