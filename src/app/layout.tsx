import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Outfit, Playfair_Display, Share_Tech_Mono } from 'next/font/google';
import './globals.css';
import { createRootMetadata } from '@/seo/metadata';
import { defaultLocale } from '@/i18n/config';
import { isLocale } from '@/i18n/routing';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', style: ['normal', 'italic'], display: 'swap', preload: false });
const shareTechMono = Share_Tech_Mono({ weight: '400', subsets: ['latin'], variable: '--font-share-tech-mono', display: 'swap', preload: false });

export const metadata: Metadata = createRootMetadata();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerStore = await headers();
  const requestLocale = headerStore.get('x-0ggi-locale') ?? defaultLocale;
  const locale = isLocale(requestLocale) ? requestLocale : defaultLocale;

  return (
    <html lang={locale} className={`${outfit.variable} ${playfair.variable} ${shareTechMono.variable} antialiased`}>
      <body className="selection:bg-luxota-accent/30 selection:text-luxota-accent text-[#E5E5E5] bg-[#020203] overflow-x-hidden lg:cursor-none">
        <div className="ambient-light">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        <div className="noise"></div>

        {children}
      </body>
    </html>
  );
}
