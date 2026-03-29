import type { Locale } from '@/i18n/config';
import { defaultLocale, locales } from '@/i18n/config';
import { localizePath, type PUBLIC_ROUTES } from '@/i18n/routing';

export const SITE_URL = 'https://0ggi.ch';
export const SITE_NAME = '0ggi Web & AI';

type RouteKey = (typeof PUBLIC_ROUTES)[number];

type LocalizedMeta = {
  title: string;
  description: string;
};

const routeMeta: Record<RouteKey, Record<Locale, LocalizedMeta>> = {
  '': {
    de: {
      title: '0ggi | High-End Webentwicklung & KI-Agenten fuer Solopreneure und KMU',
      description: 'Ich entwickle hochperformante Next.js Websites, technische SEO-Systeme und KI-Agenten, die Schweizer Unternehmen sichtbar machen und Routinearbeit reduzieren.',
    },
    en: {
      title: '0ggi | High-end web development and AI agents for growing businesses',
      description: 'I build high-performance Next.js websites, technical SEO systems, and AI agents that help companies get found online and automate repetitive work.',
    },
    fr: {
      title: '0ggi | Web haut de gamme et agents IA pour entreprises ambitieuses',
      description: "Je conçois des sites Next.js ultra performants, une base SEO technique solide et des agents IA qui rendent les entreprises plus visibles et plus efficaces.",
    },
    it: {
      title: '0ggi | Sviluppo web di alto livello e agenti AI per aziende moderne',
      description: 'Realizzo siti Next.js ad alte prestazioni, SEO tecnica e agenti AI che aumentano la visibilita online e riducono il lavoro manuale.',
    },
  },
  '/services': {
    de: {
      title: 'Dienstleistungen | Webdesign, SEO und KI-Automatisierung',
      description: 'Entdecke meine Dienstleistungen fuer Next.js Webentwicklung, Core Web Vitals Optimierung, SEO und KI-Agenten fuer Solopreneure und KMU.',
    },
    en: {
      title: 'Services | Web design, SEO, and AI automation',
      description: 'Explore my services for Next.js websites, Core Web Vitals optimization, SEO, and AI automation for modern businesses.',
    },
    fr: {
      title: 'Services | Webdesign, SEO et automatisation IA',
      description: 'Decouvre mes services en sites Next.js, optimisation Core Web Vitals, SEO et automatisation IA pour PME et independants.',
    },
    it: {
      title: 'Servizi | Web design, SEO e automazione AI',
      description: 'Scopri i miei servizi di sviluppo Next.js, ottimizzazione Core Web Vitals, SEO e agenti AI per aziende e professionisti.',
    },
  },
  '/portfolio': {
    de: {
      title: 'Portfolio | Digitale Oekosysteme und Referenzen',
      description: 'Einblick in Projekte, digitale Systeme und KI-gestuetzte Plattformen, die Performance, Sichtbarkeit und Conversion verbinden.',
    },
    en: {
      title: 'Portfolio | Digital systems and selected work',
      description: 'A look at projects, digital systems, and AI-enabled platforms built for speed, visibility, and conversion.',
    },
    fr: {
      title: 'Portfolio | Ecosystemes digitaux et references',
      description: 'Un apercu de projets, de systemes digitaux et de plateformes IA concus pour la performance, la visibilite et la conversion.',
    },
    it: {
      title: 'Portfolio | Ecosistemi digitali e progetti',
      description: 'Una selezione di progetti, sistemi digitali e piattaforme con AI pensati per performance, visibilita e conversione.',
    },
  },
  '/purpose': {
    de: {
      title: 'Mission | Die Philosophie hinter 0ggi',
      description: 'Erfahre mehr ueber meine Haltung, meine Mission und warum ich Websites und KI-Systeme fuer nachhaltiges Wachstum baue.',
    },
    en: {
      title: 'Mission | The thinking behind 0ggi',
      description: 'Learn more about my philosophy, mission, and approach to building websites and AI systems for sustainable growth.',
    },
    fr: {
      title: 'Mission | La philosophie derriere 0ggi',
      description: 'Decouvre ma vision, ma mission et ma maniere de creer des sites et systemes IA pensés pour une croissance durable.',
    },
    it: {
      title: 'Missione | La filosofia dietro 0ggi',
      description: 'Scopri la mia visione, la mia missione e il mio approccio nella creazione di siti e sistemi AI per una crescita sostenibile.',
    },
  },
  '/contact': {
    de: {
      title: 'Kontakt | Projektanfrage fuer Website, Marketing oder KI-Agenten',
      description: 'Lass uns ueber dein Projekt sprechen. Nutze das Kontaktformular fuer Website, Online-Marketing oder KI-Agenten.',
    },
    en: {
      title: 'Contact | Project inquiry for website, marketing, or AI agents',
      description: 'Let us talk about your project. Use the contact form for websites, online marketing, or AI agents.',
    },
    fr: {
      title: 'Contact | Demande de projet pour site, marketing ou agents IA',
      description: 'Parlons de ton projet. Utilise le formulaire pour un site web, du marketing en ligne ou des agents IA.',
    },
    it: {
      title: 'Contatto | Richiesta progetto per sito, marketing o agenti AI',
      description: 'Parliamo del tuo progetto. Usa il modulo per sito web, online marketing o agenti AI.',
    },
  },
  '/openclaw': {
    de: {
      title: 'OpenClaw | Dein 24/7 KI-Mitarbeiter',
      description: 'OpenClaw ist ein massgeschneiderter KI-Agent, der per Text und Sprache kommuniziert, deine Tools integriert und Routineaufgaben eigenstaendig erledigt.',
    },
    en: {
      title: 'OpenClaw | Your 24/7 AI teammate',
      description: 'OpenClaw is a custom AI agent that communicates by text and voice, integrates your tools, and handles routine work autonomously.',
    },
    fr: {
      title: 'OpenClaw | Votre collaborateur IA 24/7',
      description: 'OpenClaw est un agent IA sur mesure qui communique par texte et voix, integre vos outils et gere les taches recurrentes de facon autonome.',
    },
    it: {
      title: 'OpenClaw | Il tuo collaboratore AI 24/7',
      description: 'OpenClaw e un agente AI su misura che comunica via testo e voce, integra i tuoi strumenti e gestisce in autonomia le attivita ripetitive.',
    },
  },
  '/hermes': {
    de: {
      title: 'Hermes | Der KI-Agent, der mit deinem Unternehmen waechst',
      description: 'Hermes ist ein selbstlernender KI-Agent fuer Marketing, Vertrieb, Content und Reporting, der seine Faehigkeiten fortlaufend erweitert.',
    },
    en: {
      title: 'Hermes | The AI agent that grows with your business',
      description: 'Hermes is a self-improving AI agent for marketing, sales, content, and reporting that expands its capabilities over time.',
    },
    fr: {
      title: 'Hermes | L agent IA qui evolue avec votre entreprise',
      description: 'Hermes est un agent IA auto-apprenant pour le marketing, la vente, le contenu et le reporting, qui developpe continuellement ses capacites.',
    },
    it: {
      title: 'Hermes | L agente AI che cresce con la tua azienda',
      description: 'Hermes e un agente AI autoapprendente per marketing, vendite, contenuti e reporting che amplia continuamente le proprie capacita.',
    },
  },
};

export function getRouteMetadata(locale: Locale, route: RouteKey) {
  return routeMeta[route][locale] ?? routeMeta[route][defaultLocale];
}

export function getLanguageAlternates(route: RouteKey) {
  return Object.fromEntries(locales.map((locale) => [locale, `${SITE_URL}${localizePath(locale, route)}`]));
}
