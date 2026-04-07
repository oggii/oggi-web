export default function ClientsMarqueeSection() {
  const items = ["Next.js", "React", "Tailwind CSS", "GSAP", "n8n", "TypeScript", "OpenAI", "Vercel", "Supabase", "Node.js", "Figma", "Framer"];
  const doubled = [...items, ...items];

  return (
    <section className="py-10 lg:py-16 relative overflow-hidden bg-[#020203] border-y border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020203] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020203] to-transparent z-10 pointer-events-none" />
      <div className="flex overflow-hidden">
        <div className="flex w-max" style={{ animation: 'marquee 30s linear infinite' }}>
          {[...doubled, ...doubled].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-6 mx-6">
              <span className="text-2xl md:text-4xl font-bold tracking-tighter text-white/10 uppercase hover:text-white/60 transition-colors duration-300 cursor-default whitespace-nowrap">
                {tech}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-luxota-accent/40 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
