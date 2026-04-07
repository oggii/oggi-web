import Link from 'next/link';
import FooterSection from '@/components/sections/FooterSection';

export const metadata = {
  title: 'Datenschutz | 0ggi.ch',
  description: 'Datenschutzerklärung von 0ggi.ch',
};

export default async function DatenschutzPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#020203] pt-40">
      <div className="max-w-3xl mx-auto px-6 pb-24">
        <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-luxota-dim hover:text-white text-sm mb-12 transition-colors group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Zurück
        </Link>

        <p className="text-luxota-accent text-xs font-mono tracking-widest uppercase mb-4">Legal</p>
        <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-16">Datenschutz&shy;erklärung</h1>

        <div className="space-y-10 text-luxota-dim leading-relaxed">

          <section className="space-y-2">
            <h2 className="text-white font-medium text-lg">1. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
              Oggi Arifi, Basel, Schweiz<br />
              E-Mail: <a href="mailto:kontakt@0ggi.ch" className="text-luxota-accent hover:underline">kontakt@0ggi.ch</a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-white font-medium text-lg">2. Erhebung und Verarbeitung von Daten</h2>
            <p>
              Beim Besuch dieser Website werden durch den Hosting-Anbieter (Vercel Inc.) automatisch Informationen
              in sogenannten Server-Log-Dateien gespeichert. Dazu gehören: Browsertyp, Betriebssystem, Referrer-URL,
              IP-Adresse und Zugriffszeit. Diese Daten werden ausschliesslich zur technischen Bereitstellung der
              Website verwendet und nicht mit anderen Datenquellen zusammengeführt.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-white font-medium text-lg">3. Kontaktformular und E-Mail</h2>
            <p>
              Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden die übermittelten Daten
              (Name, E-Mail-Adresse, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage gespeichert.
              Eine Weitergabe an Dritte findet nicht statt.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-white font-medium text-lg">4. Cookies</h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies. Es können technisch notwendige Cookies
              eingesetzt werden, die für den Betrieb der Website erforderlich sind.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-white font-medium text-lg">5. Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet.
              Beim Besuch der Website können personenbezogene Daten auf den Servern von Vercel verarbeitet werden.
              Weitere Informationen finden Sie in der{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-luxota-accent hover:underline">
                Datenschutzerklärung von Vercel
              </a>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-white font-medium text-lg">6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
              Ihrer personenbezogenen Daten. Bitte wenden Sie sich dazu an:{' '}
              <a href="mailto:kontakt@0ggi.ch" className="text-luxota-accent hover:underline">kontakt@0ggi.ch</a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-white font-medium text-lg">7. Änderungen</h2>
            <p>
              Diese Datenschutzerklärung kann bei Bedarf angepasst werden.
              Massgeblich ist die jeweils aktuelle Version auf dieser Seite.
            </p>
          </section>

        </div>
      </div>
      <FooterSection />
    </main>
  );
}
