'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';
import FooterSection from '@/components/sections/FooterSection';

const capabilities = [
  {
    icon: 'solar:chat-round-dots-bold-duotone',
    title: 'Ihr persönlicher KI-Assistent',
    desc: 'Kommunizieren Sie per Text oder Sprache — direkt auf Ihrem bevorzugten Messenger. Der Agent versteht, antwortet und handelt sofort, rund um die Uhr.',
    tags: ['Telegram', 'Discord', 'Voice', 'Text'],
  },
  {
    icon: 'solar:microphone-bold-duotone',
    title: 'Sprache zu Aktion',
    desc: 'Senden Sie einfach eine Sprachnachricht. Der Agent transkribiert, versteht den Kontext und antwortet — auf Wunsch ebenfalls mit einer natürlich klingenden Stimme.',
    tags: ['Sprach-Transkription', 'Voice Reply', 'Mehrsprachig'],
  },
  {
    icon: 'solar:database-bold-duotone',
    title: 'Unbegrenztes Langzeit-Gedächtnis',
    desc: 'Vergessen war gestern. Ein dreistufiges Speichersystem stellt sicher, dass Ihr Agent Präferenzen, Deadlines und Projektkontexte über jedes Gespräch hinaus abrufen kann.',
    tags: ['Semantisches Gedächtnis', 'Pinecone', 'SQL', 'Personalisierung'],
  },
  {
    icon: 'solar:plug-circle-bold-duotone',
    title: 'Verbunden mit Ihren Tools',
    desc: 'E-Mails lesen, Kalender prüfen, CRM-Einträge erstellen — der Agent bedient Ihre bestehende Software-Landschaft über sichere, direkte Verbindungen.',
    tags: ['E-Mail', 'Kalender', 'CRM', 'Notion', 'GitHub'],
  },
  {
    icon: 'solar:heart-pulse-bold-duotone',
    title: 'Proaktiver Heartbeat',
    desc: 'Der Agent meldet sich von sich aus. Tägliche Check-ins, Projektreminder oder Workflow-Analysen — er denkt mit, bevor Sie fragen.',
    tags: ['Tägliche Briefings', 'Accountability', 'Proaktiv'],
  },
  {
    icon: 'solar:shield-check-bold-duotone',
    title: 'Maximale Datensicherheit',
    desc: 'Der Agent läuft in Ihrer kontrollierten Umgebung. Er kommuniziert ausschliesslich mit Ihrem Telegram-Konto. Keine fremden Server, kein Datenleck.',
    tags: ['Lokal / Cloud', 'Whitelisting', 'DSGVO-konform'],
  },
];

const useCases = [
  {
    industry: 'Immobilien',
    icon: 'solar:home-bold-duotone',
    example: 'Agent beantwortet Interessenten-Anfragen 24/7, qualifiziert Leads und trägt Besichtigungstermine direkt in den Kalender ein.',
    saving: '~15 Std./Woche',
  },
  {
    industry: 'E-Commerce',
    icon: 'solar:cart-bold-duotone',
    example: 'Agent überwacht Lagerbestände, informiert über niedrigen Bestand und erstellt automatisch Nachbestellungen im ERP-System.',
    saving: '~10 Std./Woche',
  },
  {
    industry: 'Beratung & Coaching',
    icon: 'solar:users-group-two-rounded-bold-duotone',
    example: 'Agent führt Erstgespräche mit potenziellen Klienten, dokumentiert Anforderungen und bereitet den Coach mit einer strukturierten Zusammenfassung vor.',
    saving: '~12 Std./Woche',
  },
  {
    industry: 'Gastgewerbe',
    icon: 'solar:chef-hat-bold-duotone',
    example: 'Agent nimmt Reservierungen entgegen, beantwortet Fragen zu Speisekarte und Öffnungszeiten und sendet automatisch Buchungsbestätigungen.',
    saving: '~8 Std./Woche',
  },
  {
    industry: 'Handwerk & Services',
    icon: 'solar:tools-bold-duotone',
    example: 'Agent koordiniert Auftragsanfragen, erstellt Offertenentwürfe aus Vorlagen und informiert Kunden proaktiv über den Projektstatus.',
    saving: '~18 Std./Woche',
  },
  {
    industry: 'Marketing & Agenturen',
    icon: 'solar:graph-up-bold-duotone',
    example: 'Agent bereitet automatisch Performance-Reports auf, fasst Meeting-Notizen zusammen und erstellt erste Content-Entwürfe auf Befehl.',
    saving: '~20 Std./Woche',
  },
];

export default function OpenClawPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="pt-40 max-w-7xl mx-auto px-6 mb-24 relative z-10 reveal-up">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-luxota-accent/30 bg-luxota-accent/5 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 bg-luxota-accent rounded-full shadow-[0_0_10px_#9D4EDD] animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest text-luxota-accent font-mono font-medium">KI Agent — Massgeschneidert</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.05]">
          OpenClaw:<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxota-accent to-white/40 italic font-serif">Ihr 24/7 KI-Mitarbeiter</span>
        </h1>
        <p className="text-lg md:text-xl text-luxota-dim max-w-3xl font-light leading-relaxed">
          Ein massgeschneiderter KI-Agent, der in Ihrer Sprache kommuniziert, Ihre Tools kennt und Routineaufgaben eigenständig erledigt — für jede Branche, jeden Prozess, jederzeit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link href="../contact" className="group relative px-9 py-4 bg-white text-luxota-bg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] inline-flex">
            <span className="relative z-10 text-sm font-bold flex items-center gap-2">
              Kostenloses Erstgespräch
              <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <Link href="../hermes" className="px-9 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-white font-medium text-sm hover:border-white/30 inline-flex items-center">
            Hermes Agent ansehen
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 mt-20">
          {[{ value: '24/7', label: 'Verfügbarkeit' }, { value: '< 2s', label: 'Antwortzeit' }, { value: '100%', label: 'Datensicherheit' }].map((stat) => (
            <div key={stat.label} className="border-l border-white/10 pl-6">
              <div className="text-3xl font-medium text-white tracking-tight">{stat.value}</div>
              <div className="text-xs text-luxota-dim uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What is it */}
      <section className="py-24 px-6 bg-[#020203] border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-up">
            <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">[ WAS IST OPENCLAW? ]</span>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
              Der KI-Agent, den Sie<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">vollständig besitzen.</span>
            </h2>
            <p className="text-luxota-dim leading-relaxed mb-6">
              Stellen Sie sich vor, Sie hätten einen Mitarbeiter, der niemals schläft, niemals vergisst und jede Aufgabe erledigt, die Sie ihm per Nachricht beschreiben — auf Ihrem Smartphone, während Sie zum Kunden fahren.
            </p>
            <p className="text-luxota-dim leading-relaxed mb-8">
              OpenClaw ist ein vollständig anpassbarer KI-Agent, der in Ihre bestehenden Prozesse eingebettet wird. Er lernt Ihre Arbeitsweise kennen, baut ein semantisches Langzeitgedächtnis auf und agiert proaktiv in Ihrem Namen — sicher, lokal und ohne Abhängigkeit von Drittanbietern.
            </p>
            <div className="border-l-2 border-luxota-accent pl-6">
              <p className="text-white/80 italic text-lg leading-relaxed">
                &ldquo;Kein generischer Chatbot. Ein vollständig kontrollierter KI-Mitarbeiter für Ihr spezifisches Business.&rdquo;
              </p>
            </div>
          </div>

          {/* Visual orbital */}
          <div className="relative aspect-square max-w-md mx-auto reveal-up">
            <div className="absolute inset-0 bg-luxota-accent/5 rounded-3xl border border-white/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-24 h-24">
                <div className="w-24 h-24 rounded-full bg-luxota-accent/10 border border-luxota-accent/30 flex items-center justify-center">
                  <Icon icon="solar:cpu-bolt-bold-duotone" className="text-5xl text-luxota-accent" />
                </div>
                <div className="absolute inset-0 rounded-full border border-luxota-accent/20 animate-[spin_8s_linear_infinite]" />
                <div className="absolute -inset-10 w-44 h-44 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute -inset-20 w-64 h-64 rounded-full border border-white/[0.03] animate-[spin_25s_linear_infinite]" />
                {[
                  { icon: 'solar:chat-round-dots-bold-duotone', label: 'Telegram', deg: 0 },
                  { icon: 'solar:database-bold-duotone', label: 'Gedächtnis', deg: 72 },
                  { icon: 'solar:letter-bold-duotone', label: 'E-Mail', deg: 144 },
                  { icon: 'solar:calendar-bold-duotone', label: 'Kalender', deg: 216 },
                  { icon: 'solar:microphone-bold-duotone', label: 'Sprache', deg: 288 },
                ].map((node) => {
                  const rad = (node.deg * Math.PI) / 180;
                  const r = 100;
                  const x = Math.cos(rad - Math.PI / 2) * r;
                  const y = Math.sin(rad - Math.PI / 2) * r;
                  return (
                    <div key={node.label} className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}>
                      <div className="w-10 h-10 rounded-full bg-[#0A0A0C] border border-white/10 flex items-center justify-center shadow-lg">
                        <Icon icon={node.icon} className="text-luxota-accent text-lg" />
                      </div>
                      <span className="text-[9px] text-white/40 font-mono tracking-widest whitespace-nowrap">{node.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">[ FÄHIGKEITEN ]</span>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">Was OpenClaw für Sie tut</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="reveal-up spotlight-card rounded-3xl p-8 border border-white/10 bg-white/[0.02] group hover:border-luxota-accent/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-luxota-accent/10 border border-luxota-accent/20 flex items-center justify-center mb-6 group-hover:bg-luxota-accent/20 transition-colors">
                  <Icon icon={cap.icon} className="text-2xl text-luxota-accent" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{cap.title}</h3>
                <p className="text-sm text-luxota-dim leading-relaxed mb-6">{cap.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((tag) => (
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
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">Für jede Branche einsetzbar</h2>
            <p className="text-luxota-dim max-w-2xl mx-auto">OpenClaw wird nicht von der Stange geliefert — er wird auf Ihren Betrieb zugeschnitten.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div key={uc.industry} className="reveal-up spotlight-card rounded-3xl p-8 border border-white/10 bg-white/[0.02] group hover:border-luxota-accent/30 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon icon={uc.icon} className="text-2xl text-white/60 group-hover:text-luxota-accent transition-colors duration-300" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-luxota-dim uppercase tracking-widest font-mono">Ersparnis</div>
                    <div className="text-lg font-medium text-luxota-accent">{uc.saving}</div>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{uc.industry}</h3>
                <p className="text-sm text-luxota-dim leading-relaxed">{uc.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
