import Script from 'next/script';

type BlogPostSchemaProps = {
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  updatedAt?: string;
  featuredImage?: { url: string } | null;
};

export function BlogPostSchema({ title, slug, excerpt, publishedAt, updatedAt, featuredImage }: BlogPostSchemaProps) {
  const url = `https://0ggi.ch/de/blog/${slug}`;

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Person',
      name: 'Oggi Arifi',
      url: 'https://0ggi.ch',
      jobTitle: 'Web Developer & AI Automation',
    },
    publisher: {
      '@type': 'Organization',
      name: '0ggi Web & AI',
      url: 'https://0ggi.ch',
      logo: {
        '@type': 'ImageObject',
        url: 'https://0ggi.ch/opengraph-image',
      },
    },
    inLanguage: 'de-CH',
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
