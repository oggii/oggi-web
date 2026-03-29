import { de, type Dictionary } from './de';
import { en } from './en';
import { fr } from './fr';
import { it } from './it';
import type { Locale } from '../config';

const dictionaries: Record<Locale, Dictionary> = { de, en, fr, it };

export type { Dictionary };

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale] ?? dictionaries.de;
}

