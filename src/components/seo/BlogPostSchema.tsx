import Script from 'next/script';
import type { Locale } from '@/i18n/config';

const localeToLanguage: Record<Locale, string> = {
  de: 'de-CH',
  en: 'en',
  fr: 'fr-CH',
  it: 'it-CH',
};

type BlogPostSchemaProps = {
  title: string;
  slug: string;
  locale: Locale;
  excerpt?: string;
  publishedAt?: string;
  updatedAt?: string;
  featuredImage?: { url: string } | null;
};

export function BlogPostSchema({ title, slug, locale, excerpt, publishedAt, updatedAt, featuredImage }: BlogPostSchemaProps) {
  const url = `https://0ggi.ch/${locale}/blog/${slug}`;

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Person',
      name: 'O. Arifi',
      url: 'https://0ggi.ch',
      jobTitle: 'Web Developer & AI Automation',
    },
    publisher: {
      '@type': 'Organization',
      name: '0ggi Web & AI',
      alternateName: ['Oggi Web & AI', 'Oggi'],
      url: 'https://0ggi.ch',
      logo: {
        '@type': 'ImageObject',
        url: 'https://0ggi.ch/opengraph-image',
      },
    },
    inLanguage: localeToLanguage[locale],
  };

  if (excerpt) data.description = excerpt;
  if (publishedAt) data.datePublished = publishedAt;
  if (updatedAt) data.dateModified = updatedAt;
  if (featuredImage?.url) {
    data.image = {
      '@type': 'ImageObject',
      url: featuredImage.url,
    };
  }

  return (
    <Script
      id={`blog-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
