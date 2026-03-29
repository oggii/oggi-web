import Script from 'next/script';

export function LocalBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://0ggi.ch/#organization',
    name: '0ggi Web & AI',
    image: 'https://0ggi.ch/opengraph-image',
    url: 'https://0ggi.ch',
    telephone: '+41 76 229 28 93',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Grienmattweg 4',
      postalCode: '4410',
      addressLocality: 'Liestal',
      addressCountry: 'CH',
    },
    areaServed: [
      { '@type': 'Country', name: 'Switzerland' },
      { '@type': 'AdministrativeArea', name: 'Basel-Landschaft' },
    ],
    sameAs: ['https://github.com/oggii/oggi-web'],
    knowsAbout: [
      'Next.js web development',
      'Technical SEO',
      'AI agents',
      'n8n automation',
      'Conversion-focused web design',
    ],
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

