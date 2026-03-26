import { Icon } from '@iconify/react';
import type { Metadata } from 'next';
import { Outfit, Playfair_Display, Share_Tech_Mono } from 'next/font/google';
import './globals.css';
import { ClientWrapper } from '@/components/layout/ClientWrapper';
import Script from 'next/script';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', style: ['normal', 'italic'], display: 'swap' });
const shareTechMono = Share_Tech_Mono({ weight: '400', subsets: ['latin'], variable: '--font-share-tech-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://0ggi.ch'),
  title: {
    default: "0ggi — High-End Webentwicklung & KI-Agenten für Solopreneure & KMU",
    template: "%s | 0ggi Web & AI"
  },
  description: "Digitale Ökosysteme für Solopreneure und KMU. Ich baue hochperformante Next.js Plattformen & n8n KI-Automatisierungen, die dir 10+ Stunden Routinearbeit pro Woche abnehmen.",
  keywords: ["High-End Webentwicklung", "n8n Automatisierung Schweiz", "Next.js Agentur", "KI Agenten Unternehmen", "Solopreneur Skalierung", "KMU Automatisierung", "OpenClaw"],
  openGraph: {
    title: "0ggi — High-End Webentwicklung & KI-Agenten",
    description: "Digitale Ökosysteme für starkes Wachstum. Next.js Performance & n8n KI-Workflows.",
    url: "https://0ggi.ch",
    siteName: "0ggi Web & AI",
    images: [
      {
        url: "/og-image.jpg", // Needs placeholder path
        width: 1200,
        height: 630,
        alt: "0ggi Webentwicklung und KI Agenten",
      }
    ],
    type: "website",
    locale: "de_CH",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${outfit.variable} ${playfair.variable} ${shareTechMono.variable} antialiased`}>
      <body className="selection:bg-luxota-accent/30 selection:text-luxota-accent text-[#E5E5E5] bg-[#020203] overflow-x-hidden cursor-none">
        
        {/* Ambient Light */}
        <div className="ambient-light">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        {/* Noise Overlay */}
        <div className="noise"></div>

        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
