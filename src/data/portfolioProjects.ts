export type PortfolioProject = {
  slug: string;
  title: string;
  client: string;
  categoryKey: string;
  filter: string;
  tags: string[];
  url: string;
  image: string;
  year: string;
  descriptionKey: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'yoxy',
    title: 'Yoxy — Web Agency',
    client: 'Yoxy GmbH',
    categoryKey: 'portfolioCards.yoxyCategory',
    filter: 'Webdesign',
    tags: ['Next.js', 'SEO', 'Logo & Branding', 'Web Presence'],
    url: 'https://yoxy.ch',
    image: '/clients/yoxy.webp',
    year: '2026',
    descriptionKey: 'portfolioCards.yoxyDesc',
  },
  {
    slug: 'coiffeuruemit',
    title: 'Coiffeur Ümit',
    client: 'Coiffeur Ümit',
    categoryKey: 'portfolioCards.coiffeurCategory',
    filter: 'Webdesign',
    tags: ['Next.js', 'Local SEO', 'Small Business'],
    url: 'https://coiffeuruemit.ch',
    image: '/clients/coiffeuruemit.webp',
    year: '2026',
    descriptionKey: 'portfolioCards.coiffeurDesc',
  },
  {
    slug: 'fahrlebendig',
    title: 'Fahrlebendig',
    client: 'Fahrlebendig',
    categoryKey: 'portfolioCards.fahrlebendigCategory',
    filter: 'Webdesign',
    tags: ['Next.js', 'Local SEO', 'Fahrschule'],
    url: 'https://fahrlebendig.ch',
    image: '/clients/fahrlebendig.webp',
    year: '2026',
    descriptionKey: 'portfolioCards.fahrlebendigDesc',
  },
  {
    slug: 'huner-musikschule',
    title: 'Hûner Musikschule',
    client: 'Hûner Musikschule',
    categoryKey: 'portfolioCards.hunerCategory',
    filter: 'Webdesign',
    tags: ['Next.js', 'Local SEO', 'Logo & Branding'],
    url: 'https://huner-musikschule.vercel.app/',
    image: '/clients/huner-musikschule.webp',
    year: '2026',
    descriptionKey: 'portfolioCards.hunerDesc',
  },
  {
    slug: 'yoxy-ai-agent',
    title: 'Yoxy AI Agent',
    client: 'Yoxy GmbH',
    categoryKey: 'portfolioCards.yoxyAiCategory',
    filter: 'KI-Agenten',
    tags: ['Hermes Agent', 'Automatisierung', 'n8n'],
    url: 'https://yoxy.ch',
    image: '/clients/yoxy-ai.webp',
    year: '2026',
    descriptionKey: 'portfolioCards.yoxyAiDesc',
  },
];
