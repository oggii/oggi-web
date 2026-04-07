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
      title: '0ggi | Webdesign, SEO & KI-Automatisierung für Schweizer KMU',
      description: 'Next.js Websites mit PageSpeed 99, technisches SEO und KI-Agenten für Schweizer KMU. Mehr Sichtbarkeit, mehr Anfragen, weniger Routinearbeit — aus Basel.',
    },
    en: {
      title: '0ggi | Web Design, SEO & AI Automation for Swiss SMEs',
      description: 'Next.js websites with PageSpeed 99, technical SEO, and AI agents for Swiss SMEs. More visibility, more leads, less manual work — based in Basel.',
    },
    fr: {
      title: '0ggi | Webdesign, SEO & automatisation IA pour PME suisses',
      description: 'Sites Next.js avec PageSpeed 99, SEO technique et agents IA pour PME suisses. Plus de visibilité, plus de leads, moins de travail manuel — basé à Bâle.',
    },
    it: {
      title: '0ggi | Web design, SEO & automazione AI per PMI svizzere',
      description: 'Siti Next.js con PageSpeed 99, SEO tecnica e agenti AI per PMI svizzere. Più visibilità, più contatti, meno lavoro manuale — con sede a Basilea.',
    },
  },
  '/services': {
    de: {
      title: 'Webdesign, SEO & KI-Agenten für KMU | 0ggi Dienstleistungen',
      description: 'Next.js Webentwicklung, Core Web Vitals Optimierung, Local SEO und KI-Automatisierung für Schweizer KMU. PageSpeed 99 — keine leeren Versprechen.',
    },
    en: {
      title: 'Web Design, SEO & AI Agents for SMEs | 0ggi Services',
      description: 'Next.js development, Core Web Vitals optimization, local SEO, and AI automation for Swiss SMEs. PageSpeed 99 — no empty promises.',
    },
    fr: {
      title: 'Webdesign, SEO & agents IA pour PME | Services 0ggi',
      description: 'Développement Next.js, optimisation Core Web Vitals, SEO local et automatisation IA pour PME suisses. PageSpeed 99 — pas de promesses vides.',
    },
    it: {
      title: 'Web design, SEO & agenti AI per PMI | Servizi 0ggi',
      description: 'Sviluppo Next.js, ottimizzazione Core Web Vitals, SEO locale e automazione AI per PMI svizzere. PageSpeed 99 — nessuna promessa vuota.',
    },
  },
  '/portfolio': {
    de: {
      title: 'Portfolio | Webdesign-Projekte für Schweizer KMU — 0ggi',
      description: 'Referenzprojekte mit PageSpeed 99, Local SEO und modernem Design. Echte Ergebnisse für Schweizer Unternehmen — von Coiffeur bis Musikschule.',
    },
    en: {
      title: 'Portfolio | Web Design Projects for Swiss SMEs — 0ggi',
      description: 'Real projects with PageSpeed 99, local SEO, and modern design. Proven results for Swiss businesses — from salons to music schools.',
    },
    fr: {
      title: 'Portfolio | Projets webdesign pour PME suisses — 0ggi',
      description: 'Projets réels avec PageSpeed 99, SEO local et design moderne. Résultats concrets pour entreprises suisses — du salon au école de musique.',
    },
    it: {
      title: 'Portfolio | Progetti web design per PMI svizzere — 0ggi',
      description: 'Progetti reali con PageSpeed 99, SEO locale e design moderno. Risultati concreti per aziende svizzere — dal salone alla scuola di musica.',
    },
  },
  '/purpose': {
    de: {
      title: 'Mission | Warum ich Websites und KI-Systeme baue — 0ggi',
      description: 'Keine Templates, keine Kompromisse. Ich baue digitale Systeme, die Schweizer KMU messbar mehr Kunden bringen. Erfahre, warum.',
    },
    en: {
      title: 'Mission | Why I Build Websites and AI Systems — 0ggi',
      description: 'No templates, no compromises. I build digital systems that measurably bring Swiss SMEs more customers. Learn why.',
    },
    fr: {
      title: 'Mission | Pourquoi je crée des sites et des systèmes IA — 0ggi',
      description: 'Pas de templates, pas de compromis. Je crée des systèmes digitaux qui apportent des clients aux PME suisses. Découvre pourquoi.',
    },
    it: {
      title: 'Missione | Perché creo siti web e sistemi AI — 0ggi',
      description: 'Nessun template, nessun compromesso. Creo sistemi digitali che portano clienti alle PMI svizzere. Scopri perché.',
    },
  },
  '/contact': {
    de: {
      title: 'Kontakt | Kostenlose Erstberatung für dein Web-Projekt — 0ggi',
      description: 'Projekt anfragen: Website, SEO oder KI-Agent für dein KMU. Kostenlose Erstberatung — ich melde mich innert 24h. Standort Basel/Liestal.',
    },
    en: {
      title: 'Contact | Free Consultation for Your Web Project — 0ggi',
      description: 'Request a project: website, SEO, or AI agent for your SME. Free initial consultation — I respond within 24h. Based in Basel/Liestal.',
    },
    fr: {
      title: 'Contact | Consultation gratuite pour votre projet web — 0ggi',
      description: 'Demandez un projet : site web, SEO ou agent IA pour votre PME. Consultation gratuite — réponse sous 24h. Basé à Bâle/Liestal.',
    },
    it: {
      title: 'Contatto | Consulenza gratuita per il tuo progetto web — 0ggi',
      description: 'Richiedi un progetto: sito web, SEO o agente AI per la tua PMI. Consulenza gratuita — risposta entro 24h. Sede a Basilea/Liestal.',
    },
  },
  '/hermes': {
    de: {
      title: 'Hermes KI-Agent | Automatisiert Marketing, Vertrieb & Support — 0ggi',
      description: 'Hermes ist ein selbstlernender KI-Agent für Schweizer KMU: automatisiert Marketing, qualifiziert Leads und übernimmt Support — 24/7, ohne Pause.',
    },
    en: {
      title: 'Hermes AI Agent | Automates Marketing, Sales & Support — 0ggi',
      description: 'Hermes is a self-learning AI agent for Swiss SMEs: automates marketing, qualifies leads, and handles support — 24/7, no breaks.',
    },
    fr: {
      title: 'Agent IA Hermes | Automatise marketing, ventes & support — 0ggi',
      description: 'Hermes est un agent IA auto-apprenant pour PME suisses : automatise le marketing, qualifie les leads et gère le support — 24/7.',
    },
    it: {
      title: 'Agente AI Hermes | Automatizza marketing, vendite & supporto — 0ggi',
      description: 'Hermes è un agente AI autoapprendente per PMI svizzere: automatizza marketing, qualifica lead e gestisce il supporto — 24/7.',
    },
  },
  '/impressum': {
    de: { title: 'Impressum | 0ggi.ch', description: 'Impressum und rechtliche Angaben zu 0ggi.ch' },
    en: { title: 'Legal Notice | 0ggi.ch', description: 'Legal notice and information for 0ggi.ch' },
    fr: { title: 'Mentions légales | 0ggi.ch', description: 'Mentions légales de 0ggi.ch' },
    it: { title: 'Note legali | 0ggi.ch', description: 'Note legali di 0ggi.ch' },
  },
  '/datenschutz': {
    de: { title: 'Datenschutz | 0ggi.ch', description: 'Datenschutzerklärung von 0ggi.ch' },
    en: { title: 'Privacy Policy | 0ggi.ch', description: 'Privacy policy of 0ggi.ch' },
    fr: { title: 'Politique de confidentialité | 0ggi.ch', description: 'Politique de confidentialité de 0ggi.ch' },
    it: { title: 'Informativa sulla privacy | 0ggi.ch', description: 'Informativa sulla privacy di 0ggi.ch' },
  },
  '/blog': {
    de: { title: 'Blog | SEO-Tipps, Webdesign & KI für Schweizer KMU — 0ggi', description: 'Praxisnahe Beiträge zu SEO-Fehlern, Webdesign-Trends und KI-Automatisierung für Schweizer KMU. Keine Theorie — echte Erfahrungen aus Kundenprojekten.' },
    en: { title: 'Blog | SEO Tips, Web Design & AI for Swiss SMEs — 0ggi', description: 'Practical posts on SEO mistakes, web design trends, and AI automation for Swiss SMEs. No theory — real insights from client projects.' },
    fr: { title: 'Blog | Conseils SEO, webdesign & IA pour PME suisses — 0ggi', description: 'Articles pratiques sur les erreurs SEO, tendances webdesign et automatisation IA pour PME suisses. Pas de théorie — des expériences réelles.' },
    it: { title: 'Blog | Consigli SEO, web design & AI per PMI svizzere — 0ggi', description: 'Articoli pratici su errori SEO, tendenze web design e automazione AI per PMI svizzere. Niente teoria — esperienze reali dai progetti.' },
  },
};

export function getRouteMetadata(locale: Locale, route: RouteKey) {
  return routeMeta[route][locale] ?? routeMeta[route][defaultLocale];
}

export function getLanguageAlternates(route: RouteKey) {
  return Object.fromEntries(locales.map((locale) => [locale, `${SITE_URL}${localizePath(locale, route)}`]));
}
