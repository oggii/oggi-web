import { createPageMetadata } from '@/seo/metadata';
import type { Locale } from '@/i18n/config';
import BlogListPage from '@/components/pages/BlogListPage';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createPageMetadata(locale, '/blog');
}

export default function LocalizedBlogPage() {
  return <BlogListPage />;
}
