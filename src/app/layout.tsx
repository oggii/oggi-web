import type { Metadata } from 'next';
import Script from 'next/script';
import { Outfit, Playfair_Display, Share_Tech_Mono, Dongle } from 'next/font/google';
import './globals.css';
import { createRootMetadata } from '@/seo/metadata';
import { defaultLocale } from '@/i18n/config';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
// Playfair (font-serif) is used in the hero title, Dongle in the navbar wordmark,
// Share Tech Mono in blog card metadata. All sit above the fold on desktop, so
// preloading them prevents the late font swap that drove desktop CLS up to 0.253.
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', style: ['normal', 'italic'], display: 'swap' });
const shareTechMono = Share_Tech_Mono({ weight: '400', subsets: ['latin'], variable: '--font-share-tech-mono', display: 'swap' });
const dongle = Dongle({ weight: '400', subsets: ['latin'], variable: '--font-dongle', display: 'swap' });

export const metadata: Metadata = createRootMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Hardcoded to defaultLocale ('de') so this layout stays statically rendered.
  // Per-route hreflang alternates in createPageMetadata() handle locale signaling
  // for search engines — that's the standard, not <html lang>.
  return (
    <html lang={defaultLocale} className={`${outfit.variable} ${playfair.variable} ${shareTechMono.variable} ${dongle.variable} antialiased`}>
      <head>
        {/* Iconify icons are fetched at runtime by <Icon> components from
            @iconify/react. The fetches are made WITHOUT credentials, so the
            preconnect must NOT carry crossOrigin="" — otherwise the browser
            opens a separate anonymous connection that the actual XHR cannot
            reuse, and Lighthouse correctly reports the preconnect as unused. */}
        <link rel="preconnect" href="https://api.iconify.design" />
      </head>
      <body className="selection:bg-luxota-accent/30 selection:text-luxota-accent text-[#E5E5E5] bg-[#020203] overflow-x-hidden lg:cursor-none">
        <div className="ambient-light">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        <div className="noise"></div>

        {children}
        <Script
          src="https://analytics.yoxy.ch/js/pa-zfbh7g_qpNTvm9F4Rxu__.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </body>
    </html>
  );
}
