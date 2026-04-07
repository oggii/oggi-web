export type PortfolioProject = {
  slug: string;
  title: string;
  client: string;
  category: string;
  filter: string;
  tags: string[];
  url: string;
  image: string;
  year: string;
  description: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'yoxy',
    title: 'Yoxy — Web Agency',
    client: 'Yoxy GmbH',
    category: 'Web Design · SEO · Branding',
    filter: 'Webdesign',
    tags: ['Next.js', 'SEO', 'Logo & Branding', 'Web Presence'],
    url: 'https://yoxy.ch',
    image: '/clients/yoxy.jpg.png',
    year: '2026',
    description: 'Komplette digitale Präsenz für eine moderne Schweizer Webagentur — von der Markenidentität bis zur fertigen Website mit SEO-Fundament.',
  },
  {
    slug: 'coiffeuruemit',
    title: 'Coiffeur Ümit',
    client: 'Coiffeur Ümit',
    category: 'Web Design · SEO',
    filter: 'Webdesign',
    tags: ['Next.js', 'Local SEO', 'Small Business'],
    url: 'https://coiffeuruemit.ch',
    image: '/clients/coiffeuruemit.jpg.png',
    year: '2026',
    description: 'Moderne, conversion-optimierte Website für einen lokalen Coiffeursalon mit Fokus auf lokale Sichtbarkeit und Neukundengewinnung.',
  },
  {
    slug: 'fahrlebendig',
    title: 'Fahrlebendig',
    client: 'Fahrlebendig',
    category: 'Web Design · SEO',
    filter: 'Webdesign',
    tags: ['Next.js', 'Local SEO', 'Fahrschule'],
    url: 'https://fahrlebendig.ch',
    image: '/clients/fahrlebendig.jpg.png',
    year: '2026',
    description: 'Professionelle Web-Präsenz für eine Fahrschule — klar strukturiert, lokal auffindbar und auf Conversions ausgerichtet.',
  },
  {
    slug: 'huner-musikschule',
    title: 'Hüner Musikschule',
    client: 'Hüner Musikschule',
    category: 'Web Design · SEO · Branding',
    filter: 'Webdesign',
    tags: ['Next.js', 'Local SEO', 'Logo & Branding'],
    url: 'https://huner-musikschule.ch',
    image: '/clients/huner-musikschule.png',
    year: '2026',
    description: 'Komplette digitale Präsenz für eine Musikschule — mit eigenem Branding, SEO-Optimierung und einer modernen Website zur Schülergewinnung.',
  },
  {
    slug: 'yoxy-ai-agent',
    title: 'Yoxy AI Agent',
    client: 'Yoxy GmbH',
    category: 'KI-Automatisierung',
    filter: 'KI-Agenten',
    tags: ['Hermes Agent', 'Automatisierung', 'n8n'],
    url: 'https://yoxy.ch',
    image: '/clients/yoxy-ai.jpg.png',
    year: '2026',
    description: 'Massgeschneiderter KI-Agent auf Basis von Hermes für die interne Automatisierung einer Webagentur.',
  },
];
