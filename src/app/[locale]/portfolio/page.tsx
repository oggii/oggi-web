import PortfolioPage from '@/components/pages/PortfolioPage';
import { createPageMetadata } from '@/seo/metadata';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createPageMetadata(locale, '/portfolio');
}

export default function LocalizedPortfolioPage() {
  return <PortfolioPage />;
}