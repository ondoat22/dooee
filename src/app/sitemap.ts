import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ondo.at';
const PATHS = ['', '/dooee'];

function buildAlternates(path: string): Record<string, string> {
  return Object.fromEntries(
    locales.map((l) => [l === 'kr' ? 'ko' : l, `${BASE_URL}/${l}${path}`]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return PATHS.flatMap((path) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
      alternates: { languages: buildAlternates(path) },
    })),
  );
}
