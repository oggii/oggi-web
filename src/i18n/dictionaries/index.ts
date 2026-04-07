import type { Locale } from '../config';
export type { Dictionary } from './de';

const loaders: Record<string, () => Promise<any>> = {
  de: () => import('./de').then(m => m.de),
  en: () => import('./en').then(m => m.en),
  fr: () => import('./fr').then(m => m.fr),
  it: () => import('./it').then(m => m.it),
};

export async function getDictionary(locale: Locale) {
  const load = loaders[locale] ?? loaders.de;
  return (await load()) as import('./de').Dictionary;
}
