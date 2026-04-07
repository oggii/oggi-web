import Link from 'next/link';
import FooterSection from '@/components/sections/FooterSection';

export const metadata = {
  title: 'Impressum | 0ggi.ch',
  description: 'Impressum und rechtliche Angaben zu 0ggi.ch',
};

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#020203] pt-40">
      <div className="max-w-3xl mx-auto px-6 pb-24">
        <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-luxota-dim hover:text-white text-sm mb-12 transition-colors group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Zurück
        </Link>

        <p className="text-luxota-accent text-xs font-mono tracking-widest uppercase mb-4">Legal</p>
        <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-16">Impressum</h1>

        <div className="space-y-10 text-luxota-dim leading-relaxed">

          <section className="space-y-2">
            <h2 className="text-white font-medium text-lg">Verantwortlich für den Inhalt</h2>
            <p>Oggi Arifi<br />
            Basel, Schweiz<br />
            E-Mail: <a href="mailto:kontakt@0ggi.ch" className="text-luxota-accent hover:underline">kontakt@0ggi.ch</a><br />
            Web: <a href="https://0ggi.ch" className="text-luxota-accent hover:underline">0ggi.ch</a></p>
          </section>

          <section className="space-y-2">
            <h2 className="text-white font-medium text-lg">Unternehmensform</h2>
            <p>Einzelunternehmen (Selbstständig erwerbend)</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-white font-medium text-lg">Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
              und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter bin ich
              gemäss den geltenden Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-white font-medium text-lg">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb
              der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-white font-medium text-lg">Externe Links</h2>
            <p>
              Diese Website enthält Links zu externen Websites Dritter. Auf deren Inhalte habe ich keinen Einfluss
              und kann daher keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter verantwortlich.
            </p>
          </section>

        </div>
      </div>
      <FooterSection />
    </main>
  );
}
