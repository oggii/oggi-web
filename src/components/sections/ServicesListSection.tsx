'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
  {
    num: "01",
    category: "Webentwicklung",
    subtitle: "High-End digitale Erlebnisse, die auf Performance und Konvertierung getrimmt sind.",
    items: [
      {
        title: "Next.js Architekturen",
        desc: "Ultraschnelle, SEO-optimierte Webanwendungen, die moderne Standards setzen und flüssige Interaktionen integrieren."
      },
      {
        title: "UI / UX Design",
        desc: "Ästhetische und logische Nutzerführungen, die deine Marke digital perfekt in Szene setzen und Vertrauen schaffen."
      },
      {
        title: "Branding & Identity",
        desc: "Vom Logo-Design bis zum kompletten visuellen System – wir definieren den Charakter deiner Marke im digitalen Raum."
      }
    ]
  },
  {
    num: "02",
    category: "Automatisierung",
    subtitle: "Intelligente Systeme, die repetitive Aufgaben lösen und dir Zeit zurückgeben.",
    items: [
      {
        title: "n8n Workflows",
        desc: "Maßgeschneiderte Automatisierungen, die deine internen Prozesse verbinden und manuelle Arbeit effizient eliminieren."
      },
      {
        title: "KI Agenten",
        desc: "Integration von OpenAI und maßgeschneiderten Modellen, um Kundenanfragen 24/7 autonom und präzise zu bearbeiten."
      },
      {
        title: "System-Architektur",
        desc: "Strategische Beratung beim Aufbau deines digitalen Ökosystems, sodass alle Tools (CRM, Sales, Web) perfekt synchron arbeiten."
      }
    ]
  },
  {
    num: "03",
    category: "Performance",
    subtitle: "Nachhaltige Skalierung und Sichtbarkeit für messbares Wachstum.",
    items: [
      {
        title: "Search & SEO",
        desc: "Starkes organisches Ranking durch technische Perfektion und semantisches HTML, damit du von den richtigen Usern gefunden wirst."
      },
      {
        title: "Speed Optimierung",
        desc: "Core Web Vitals im 99er-Bereich. Blitzschnelle Ladezeiten minimieren die Absprungrate und maximieren den digitalen Buchungsumsatz."
      },
      {
        title: "Tech-Consulting",
        desc: "Workshops und Hands-on Support, um dir oder deinem Team klare, handlungsorientierte Schritte für die digitale Skalierung aufzuzeigen."
      }
    ]
  }
];

export default function ServicesListSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.service-item').forEach((el: unknown) => {
        const element = el as HTMLElement;
        gsap.fromTo(element,
          { opacity: 0, y: 50 },
          {
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative z-10 bg-[#020203]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-32">
          {services.map((service, idx) => (
            <div key={idx} className="service-category grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start border-t border-white/10 pt-16 hover:border-luxota-accent transition-colors duration-700">
              
              {/* Left Column: Number & Subtitle (Sticky ideally) */}
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-luxota-accent font-mono text-sm tracking-widest">{service.num}.</span>
                  <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">{service.category}</h2>
                </div>
                <p className="text-lg text-luxota-dim font-light leading-relaxed max-w-md">
                  {service.subtitle}
                </p>
              </div>

              {/* Right Column: Service Items */}
              <div className="lg:col-span-7 space-y-16">
                {service.items.map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <h3 className="text-2xl text-white font-medium mb-4 group-hover:text-luxota-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-luxota-dim font-light leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
