export type PortfolioProject = {
  slug: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  url: string;
  image: string;
  color: string;
  year: string;
  description: string;
  deliverables: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'yoxy',
    title: 'Yoxy — Web Agency',
    client: 'Yoxy GmbH',
    category: 'Web Design · SEO · Branding',
    tags: ['Next.js', 'SEO', 'Logo & Branding', 'Web Presence'],
    url: 'https://yoxy.ch',
    image: 'https://image.thum.io/get/width/1200/crop/630/https://yoxy.ch',
    color: 'from-[#9D4EDD]/20 to-black',
    year: '2024',
    description: 'Komplette digitale Präsenz für eine moderne Schweizer Webagentur — von der Markenidentität bis zur fertigen Website mit SEO-Fundament.',
    deliverables: [
      'Design & Entwicklung der gesamten Web-Präsenz',
      'Logodesign & Corporate Identity',
      'On-Page SEO Optimierung',
      'Mobile-optimiertes Responsive Design',
      'Performance-Optimierung & Core Web Vitals',
    ],
  },
  {
    slug: 'coiffeuruemit',
    title: 'Coiffeur Ümit',
    client: 'Coiffeur Ümit',
    category: 'Web Design · SEO',
    tags: ['Next.js', 'Local SEO', 'Small Business'],
    url: 'https://coiffeuruemit.ch',
    image: 'https://image.thum.io/get/width/1200/crop/630/https://coiffeuruemit.ch',
    color: 'from-amber-900/20 to-black',
    year: '2024',
    description: 'Moderne, conversion-optimierte Website für einen lokalen Coiffeursalon — mit Fokus auf lokale Sichtbarkeit und Neukundengewinnung.',
    deliverables: [
      'Design & Entwicklung der Website',
      'Local SEO & Google Business Optimierung',
      'Mobile-first Responsive Design',
      'Schnelle Ladezeiten & Performance',
      'Kontaktformular & Terminanfrage Integration',
    ],
  },
  {
    slug: 'fahrlebendig',
    title: 'Fahrlebendig',
    client: 'Fahrlebendig',
    category: 'Web Design · SEO',
    tags: ['Next.js', 'Local SEO', 'Fahrschule'],
    url: 'https://fahrlebendig.ch',
    image: 'https://image.thum.io/get/width/1200/crop/630/https://fahrlebendig.ch',
    color: 'from-blue-900/20 to-black',
    year: '2024',
    description: 'Professionelle Web-Präsenz für eine Fahrschule — klar strukturiert, lokal auffindbar und auf Conversions ausgerichtet.',
    deliverables: [
      'Design & Entwicklung der Website',
      'On-Page & Local SEO',
      'Conversion-optimiertes Layout',
      'Mobile-first Design',
      'Strukturierte Daten & Schema Markup',
    ],
  },
  {
    slug: 'yoxy-ai-agent',
    title: 'Yoxy AI Agent',
    client: 'Yoxy GmbH',
    category: 'KI-Automatisierung · Hermes Agent',
    tags: ['Hermes Agent', 'KI-Automatisierung', 'n8n', 'Webagentur'],
    url: 'https://yoxy.ch',
    image: '',
    color: 'from-violet-950/40 to-black',
    year: '2025',
    description: 'Massgeschneiderter KI-Agent auf Basis von Hermes für die interne Automatisierung einer Webagentur — von Lead-Qualifizierung bis Content-Produktion.',
    deliverables: [
      'Hermes Agent Setup & individuelle Konfiguration',
      'Automatisierte Lead-Qualifizierung & CRM-Pflege',
      'KI-gestützte Content-Erstellung nach Markenrichtlinien',
      'Wöchentliche Performance-Reports via Telegram',
      'Integration mit bestehenden Agentur-Tools',
    ],
  },
];
