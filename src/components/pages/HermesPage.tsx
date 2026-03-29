import type { Metadata } from 'next';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import FooterSection from '@/components/sections/FooterSection';

export const metadata: Metadata = {
  title: 'Hermes Agent — Der KI-Agent, der wächst | 0ggi',
  description: 'Hermes ist ein selbstlernender KI-Agent, der sich eigenständig verbessert, Fähigkeiten aufbaut und proaktiv für Sie arbeitet. Für Marketing, Vertrieb, Content, Reporting und mehr.',
  keywords: ['Hermes KI Agent', 'Selbstlernender KI Agent', 'KI Automatisierung Schweiz', 'KI Mitarbeiter', 'Autonomer Agent', 'Content Automatisierung', 'KI für KMU', 'Multi-Agent System'],
  openGraph: {
    title: 'Hermes Agent — Der KI-Agent, der mit Ihnen wächst',
    description: 'Hermes lernt aus jeder Aufgabe, erstellt eigenständig Fähigkeiten und wird mit der Zeit messbar intelligenter für Ihr spezifisches Business.',
    url: 'https://0ggi.ch/hermes',
  },
};

const superPowers = [
  {
    icon: 'solar:brain-bold-duotone',
    title: 'Selbstlernende Fähigkeiten',
    desc: 'Nach jeder erfolgreich abgeschlossenen Aufgabe analysiert Hermes, was funktioniert hat, und speichert diesen Prozess als wiederverwendbare Fähigkeit. Kein manuelles Einrichten — er baut seinen eigenen Werkzeugkasten auf.',
    tags: ['Skill-Erstellung', 'Prozessgedächtnis', 'Selbstoptimierung'],
  },
  {
    icon: 'solar:layers-minimalistic-bold-duotone',
    title: 'Dreistufiges Gedächtnis',
    desc: 'Hermes besitzt gleichzeitig ein dauerhaftes Textgedächtnis, ein prozeduales Skill-Gedächtnis und eine durchsuchbare Sitzungsdatenbank. Er erinnert sich nicht nur ans Ergebnis — sondern auch daran, wie er es erreicht hat.',
    tags: ['Persistente Datei', 'SQLite Datenbank', 'Skill-Dokumente'],
  },
  {
    icon: 'solar:cpu-bolt-bold-duotone',
    title: 'Multi-Agenten-Koordination',
    desc: 'Hermes kann eigenständig Unteragenten starten, um parallele Aufgaben gleichzeitig abzuarbeiten. Er koordiniert komplexe Workflows ohne Ihre Eingabe — der Bot sendet Ergebnisse, wenn sie fertig sind.',
    tags: ['Parallel-Processing', 'Sub-Agenten', 'Autonome Koordination'],
  },
  {
    icon: 'solar:monitor-bold-duotone',
    title: 'Nativer Browser-Zugriff',
    desc: 'Hermes öffnet eigenständig einen Browser, besucht Websites, macht Screenshots und verarbeitet visuelle Daten. Wettbewerbsanalyse, Preisrecherche, Website-Audits — alles auf Befehl.',
    tags: ['Web Research', 'Screenshots', 'Visuelle Analyse'],
  },
  {
    icon: 'solar:clock-circle-bold-duotone',
    title: 'Zuverlässige Cron-Planung',
    desc: 'Tägliche Briefings, wöchentliche Reports, monatliche Analysen — Hermes führt geplante Aufgaben präzise und zuverlässig aus. Automatisierungen, die tatsächlich zu dem Zeitpunkt laufen, zu dem Sie sie eingestellt haben.',
    tags: ['Cron-Jobs', 'Automatisierung', 'Pünktliche Ausführung'],
  },
  {
    icon: 'solar:palette-bold-duotone',
    title: 'Nativ integrierte Bildgenerierung',
    desc: 'Hermes erstellt auf Befehl Bilder nach Ihren Markenrichtlinien, fügt Logos per Python-Skript ein und liefert produktionsreife Creatives — für Social Media, Werbeanzeigen oder Präsentationen.',
    tags: ['Image Gen', 'Brand Guidelines', 'Ads & Social'],
  },
];

const useCases = [
  {
    industry: 'Marketing & Social Media',
    icon: 'solar:graph-up-bold-duotone',
    saving: '~20 Std./Woche',
    tasks: [
      'Wettbewerber-Creatives analysieren und als Inspiration für eigene Ads verwenden',
      'Social-Media-Posts inklusive Bilder nach Markenrichtlinien erstellen',
      'Content-Kalender befüllen und Beiträge automatisch planen',
      'Performance-Reports aufbereiten und ins Slack / E-Mail senden',
    ],
  },
  {
    industry: 'Vertrieb & Lead-Generierung',
    icon: 'solar:users-group-two-rounded-bold-duotone',
    saving: '~15 Std./Woche',
    tasks: [
      'Interessenten-Profile automatisch recherchieren und bewerten',
      'Erst-E-Mails personalisiert verfassen und auf Wunsch versenden',
      'CRM-Einträge nach jedem Gespräch automatisch aktualisieren',
      'Follow-up Sequenzen nach Ihren Regeln eigenständig steuern',
    ],
  },
  {
    industry: 'E-Commerce & Produkte',
    icon: 'solar:cart-bold-duotone',
    saving: '~12 Std./Woche',
    tasks: [
      'Produktbeschreibungen aus Rohdaten generieren und optimieren',
      'Preise der Konkurrenz täglich automatisch monitoren',
      'Bestandsmeldungen und Nachbestellungen auslösen',
      'Produktfoto-Varianten für A/B-Tests erstellen',
    ],
  },
  {
    industry: 'Beratung & Dienstleistung',
    icon: 'solar:case-round-bold-duotone',
    saving: '~10 Std./Woche',
    tasks: [
      'Meeting-Notizen zusammenfassen und strukturiert ablegen',
      'Projektstatusberichte für Kunden automatisch erstellen',
      'Offerten aus Vorlagen und Kundendaten generieren',
      'Wissensartikel und FAQs aus Gesprächsprotokollen aufbauen',
    ],
  },
];

const selfLearningSteps = [
  {
    step: '01',
    title: 'Aufgabe erhalten',
    desc: 'Sie beschreiben eine Aufgabe in natürlicher Sprache — per Text oder Sprache, auf Ihrem Messenger.',
  },
  {
    step: '02',
    title: 'Ausführung & Selbstprüfung',
    desc: 'Hermes führt die Aufgabe aus. Alle 15 Arbeitsschritte prüft er sich selbst: Was hat funktioniert? Was nicht?',
  },
  {
    step: '03',
    title: 'Lernen & Speichern',
    desc: 'Erfolgreiche Abläufe werden als Fähigkeit gespeichert. Das Ergebnis landet in der dauerhaften Datenbank.',
  },
  {
    step: '04',
    title: 'Eigenständige Verbesserung',
    desc: 'Beim nächsten ähnlichen Auftrag greift Hermes auf gespeicherte Fähigkeiten zurück — schneller, präziser, ohne Wiederholung.',
  },
];

export default function HermesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="pt-40 max-w-7xl mx-auto px-6 mb-24 relative z-10 reveal-up">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-luxota-accent/30 bg-luxota-accent/5 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 bg-luxota-accent rounded-full shadow-[0_0_10px_#9D4EDD] animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest text-luxota-accent font-mono font-medium">KI Agent — Selbstlernend</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.05]">
          Hermes Agent:<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxota-accent to-white/40 italic font-serif">Der Agent, der wächst.</span>
        </h1>
        <p className="text-lg md:text-xl text-luxota-dim max-w-3xl font-light leading-relaxed">
          Hermes lernt eigenständig aus jeder Aufgabe, erstellt eigene Fähigkeiten und wird mit der Zeit messbar intelligenter — für Ihr spezifisches Business, Ihre Prozesse, Ihre Sprache.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
        <Link href="../contact" className="group relative px-9 py-4 bg-white text-luxota-bg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] inline-flex">
            <span className="relative z-10 text-sm font-bold flex items-center gap-2">
              Kostenloses Erstgespräch
              <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <Link href="../openclaw" className="px-9 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-white font-medium text-sm hover:border-white/30 inline-flex items-center">
            OpenClaw Agent ansehen
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 mt-20">
          {[
            { value: '40+', label: 'Eingebaute Fähigkeiten' },
            { value: '3x', label: 'Gedächtnisschichten' },
            { value: '∞', label: 'Branchen' },
          ].map((stat) => (
            <div key={stat.label} className="border-l border-white/10 pl-6">
              <div className="text-3xl font-medium text-white tracking-tight">{stat.value}</div>
              <div className="text-xs text-luxota-dim uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Self-learning loop */}
      <section className="py-24 px-6 bg-[#020203] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">[ DAS ALLEINSTELLUNGSMERKMAL ]</span>
              <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                Ein Agent, der sich<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">selbst verbessert.</span>
              </h2>
              <p className="text-luxota-dim leading-relaxed mb-6">
                Die meisten KI-Assistenten vergessen alles nach jedem Gespräch. Sie erklären dieselben Dinge immer wieder — und der Agent macht dieselben Fehler erneut.
              </p>
              <p className="text-luxota-dim leading-relaxed mb-8">
                Hermes funktioniert anders: Nach jeder abgeschlossenen Aufgabe analysiert er automatisch, was funktioniert hat. Erfolgreiche Abläufe werden als wiederverwendbare Fähigkeiten gespeichert. Der Agent in Monat 3 ist messbar leistungsfähiger als der in Monat 1 — ohne dass Sie etwas dafür tun müssen.
              </p>
              <div className="border-l-2 border-luxota-accent pl-6">
                <p className="text-white/80 italic text-lg leading-relaxed">
                  &ldquo;Repeating Winning Behaviour — Hermes merkt sich, was funktioniert, und wiederholt es.&rdquo;
                </p>
              </div>
            </div>

            {/* Self-learning steps */}
            <div className="relative pl-8 border-l border-white/10 space-y-12">
              <div className="absolute left-[-1.5px] top-0 bottom-0 w-[2px] bg-white/5">
                <div className="w-full h-full bg-gradient-to-b from-luxota-accent to-transparent" />
              </div>
              {selfLearningSteps.map((step, i) => (
                <div key={step.step} className="group cursor-default hover:translate-x-2 transition-transform reveal-up">
                  <div className="text-[10px] font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors tracking-widest">SCHRITT {step.step}</div>
                  <h3 className="text-2xl text-white mb-2 font-medium">{step.title}</h3>
                  <p className="text-base text-luxota-dim/70 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Superpowers */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">[ FÄHIGKEITEN ]</span>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
              Was Hermes nativ kann
            </h2>
            <p className="text-luxota-dim max-w-2xl mx-auto">
              Über 40 eingebaute Werkzeuge, die sofort funktionieren — kein stundenlanges Konfigurieren.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {superPowers.map((sp) => (
              <div key={sp.title} className="spotlight-card rounded-3xl p-8 border border-white/10 bg-white/[0.02] group hover:border-luxota-accent/30 transition-all duration-500 reveal-up">
                <div className="w-12 h-12 rounded-2xl bg-luxota-accent/10 border border-luxota-accent/20 flex items-center justify-center mb-6 group-hover:bg-luxota-accent/20 transition-colors">
                  <Icon icon={sp.icon} className="text-2xl text-luxota-accent" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{sp.title}</h3>
                <p className="text-sm text-luxota-dim leading-relaxed mb-6">{sp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {sp.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 font-mono tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-[#020203] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">[ ANWENDUNGSFÄLLE ]</span>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
              Für jede Branche konfigurierbar
            </h2>
            <p className="text-luxota-dim max-w-2xl mx-auto">
              Hermes wird auf Ihr spezifisches Business eingestellt — mit konkreten Aufgaben, Ihrer Sprache und Ihren Tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div key={uc.industry} className="reveal-up spotlight-card rounded-3xl p-8 border border-white/10 bg-white/[0.02] group hover:border-luxota-accent/30 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon icon={uc.icon} className="text-2xl text-white/60 group-hover:text-luxota-accent transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-medium text-white">{uc.industry}</h3>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-[10px] text-luxota-dim uppercase tracking-widest font-mono">Ersparnis</div>
                    <div className="text-base font-medium text-luxota-accent">{uc.saving}</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {uc.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-3 text-sm text-luxota-dim">
                      <div className="w-5 h-5 rounded-full bg-luxota-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon icon="solar:check-circle-linear" className="text-luxota-accent text-xs" />
                      </div>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center border-t border-white/5 relative overflow-hidden bg-[#020203] reveal-up">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(157,78,221,0.08),transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs text-luxota-accent font-mono mb-6 block tracking-widest">[ NÄCHSTER SCHRITT ]</span>
          <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
            Bereit für einen Agenten,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 italic font-serif">der mit Ihnen wächst?</span>
          </h2>
          <p className="text-luxota-dim text-lg mb-12 leading-relaxed">
            In einem kostenlosen 30-minütigen Gespräch analysieren wir, welche Prozesse Hermes in Ihrem Unternehmen sofort übernehmen kann — und was das für Ihre konkrete Zeitersparnis bedeutet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="../contact" className="group relative inline-flex px-12 py-5 bg-white text-luxota-bg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">
              <span className="relative z-10 text-sm font-bold flex items-center gap-2">
                Jetzt kostenlos beraten lassen
                <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link href="../openclaw" className="inline-flex px-9 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white font-medium text-sm hover:border-white/30 items-center justify-center">
              OpenClaw Agent entdecken
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
