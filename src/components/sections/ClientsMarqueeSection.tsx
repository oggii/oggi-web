export default function ClientsMarqueeSection() {
  const technologies = [
    "Next.js", "React", "Tailwind CSS", "GSAP", "n8n", "OpenAI", 
    "Vercel", "Supabase", "Cursor", "TypeScript", "Node.js", "Figma"
  ];

  // We duplicate the array to create a seamless infinite loop
  const duplicatedTech = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-24 relative overflow-hidden bg-[#020203] border-y border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020203] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020203] to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max animate-marquee">
        {duplicatedTech.map((tech, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-8">
            <span className="text-3xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-white-[0.02] uppercase opacity-50 hover:opacity-100 hover:text-white transition-all cursor-default relative">
              {tech}
            </span>
            <div className="w-2 h-2 rounded-full bg-luxota-accent/20"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
