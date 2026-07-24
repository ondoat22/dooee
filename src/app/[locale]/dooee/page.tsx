import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import DooeeStickyNav from '@/components/DooeeStickyNav';
import PortfolioLinks from '@/components/PortfolioLinks';
import ContactMail from '@/components/ContactMail';

/* Read portfolio page images from public/portfolio/<folder>, sorted by filename. */
function listPortfolioImages(folder: string): string[] {
  try {
    const dir = path.join(process.cwd(), 'public', 'portfolio', folder);
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => `/portfolio/${folder}/${f}`);
  } catch {
    return [];
  }
}

const dooeeMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Dooee Kim — Architect & Product Owner | ONDO',
    description: 'Architect and Product Owner, turning ideas into spaces and services.',
  },
  kr: {
    title: '김두이 — 건축사 & 프로덕트 오너 | ONDO',
    description: '건축사이자 프로덕트 오너로, 아이디어를 공간과 서비스로 구현합니다.',
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();

  const { title, description } = dooeeMeta[locale as Locale];
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/dooee`,
      languages: {
        en: '/en/dooee',
        ko: '/kr/dooee',
        'x-default': '/kr/dooee',
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/dooee`,
      type: 'profile',
      locale: locale === 'kr' ? 'ko_KR' : 'en_US',
    },
  };
}

type Bullet = { text: string; sub: string[] };
type Job = {
  title: string;
  date: string;
  company: string;
  location: string;
  desc: string;
  desc2: string;
  bullets: Bullet[];
};
type ProfGroup = { label: string; items: string[] };
type Recognition = {
  title: string;
  date: string;
  company: string;
  location: string;
  desc: string;
};
type Project = { name: string; sub: string; href: string; inProgress?: boolean };

const projLogos = [
  '/images/proj-jieumteo.png',
  '/images/proj-archi-here.png',
  '/images/stamp.png',
  '/images/proj-cheongna.png',
  '/images/proj-hakdong.png',
];

/* ── semantic color classes (light default, dark variant) ── */
const C = {
  primary: 'text-neutral-900 dark:text-white',
  secondary: 'text-neutral-600 dark:text-neutral-400',
  muted: 'text-neutral-500 dark:text-neutral-400',
  dim: 'text-neutral-400 dark:text-neutral-500',
  border: 'border-neutral-200 dark:border-neutral-800',
};

function CalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <rect x="1" y="2" width="12" height="11" rx="1.5" />
      <line x1="1" y1="5.5" x2="13" y2="5.5" />
      <line x1="4.5" y1="1" x2="4.5" y2="3.5" />
      <line x1="9.5" y1="1" x2="9.5" y2="3.5" />
    </svg>
  );
}
function BagIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <rect x="1" y="5" width="12" height="8" rx="1.5" />
      <path d="M4.5 5V3.5A2.5 2.5 0 0 1 9.5 3.5V5" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M7 1a4 4 0 0 1 4 4c0 3-4 8-4 8S3 8 3 5a4 4 0 0 1 4-4z" />
      <circle cx="7" cy="5" r="1.5" />
    </svg>
  );
}
function MetaRow({ children }: { children: React.ReactNode }) {
  return (
    <div className={`text-xs ${C.dim} flex gap-x-3 gap-y-2 flex-wrap items-center mb-2.5 max-w-[380px]`}>
      {children}
    </div>
  );
}

export default async function DooeePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const t = await getTranslations('dooee');

  const aboutCore = t.raw('aboutCore') as string[];
  const aboutAffiliations = t.raw('aboutAffiliations') as string[];
  const prof = t.raw('prof') as ProfGroup[];
  const jobs = t.raw('jobs') as Job[];
  const recognition = t.raw('recognition') as Recognition[];
  const ipGroups = t.raw('ipGroups') as { label: string; items: { title: string; code: string; role: string }[] }[];
  const projects = t.raw('projects') as Project[];
  const portfolios = (t.raw('portfolios') as { name: string; hoverLabel?: string; folder: string }[]).map(
    (p) => ({ name: p.name, hoverLabel: p.hoverLabel, images: listPortfolioImages(p.folder) })
  );
  const projRoles = locale === 'kr'
    ? ['제품 책임자', '제품 책임자', '건축사', '디자인 총괄', '디자인 총괄']
    : ['Product Owner', 'Product Owner', 'Architect', 'Lead Designer', 'Lead Designer'];

  const thumbClass = (i: number) =>
    `w-9 h-9 flex-shrink-0 overflow-hidden flex items-center justify-center ${
      i === 2
        ? 'rounded-[7px] bg-transparent'
        : i === 3
          ? 'rounded-[4px] bg-neutral-200 dark:bg-black'
          : i === 4
            ? 'rounded-full bg-black'
            : 'bg-neutral-200 dark:bg-black'
    }`;

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-ondo-bg dark:text-white">
      <DooeeStickyNav backLabel={t('back')} />

      <div className="max-w-[1100px] mx-auto px-12 pt-14 pb-28 max-[720px]:px-6 max-[720px]:pt-10 max-[720px]:pb-20">
        <h1 className={`text-[27px] font-medium -tracking-[0.01em] leading-none ${C.primary} mb-12 max-[720px]:text-[18px]`}>
          {t('name')}
        </h1>

        {/* About */}
        <section className="grid grid-cols-[280px_1fr] gap-0 mb-[120px] items-start max-[720px]:grid-cols-1 max-[720px]:gap-5 max-[720px]:mb-[60px]">
          <div aria-hidden />
          <div>
            {/* Bio */}
            <div className="pb-4 max-w-[380px]">
              <div className={`text-[15px] font-medium ${C.primary} mb-1.5`}>{t('aboutLabel')}</div>
              <p className={`text-[15px] font-medium ${C.primary} leading-[1.5] break-keep`}>{t('aboutDesc')}</p>
            </div>

            {/* Core info + status */}
            <div className={`grid grid-cols-[160px_1fr] gap-x-8 py-4 items-start max-w-[380px] border-t ${C.border} max-[720px]:grid-cols-1 max-[720px]:gap-2`}>
              <div aria-hidden />
              <div>
                <ul className="list-none">
                  {aboutCore.map((item, i) => (
                    <li key={i} className={`text-[15px] ${C.secondary} leading-[1.5] mb-[3px] break-keep`}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className={`text-[15px] ${C.muted} leading-[1.5] mt-3 break-keep`}>{t('aboutStatus')}</p>
              </div>
            </div>

            {/* Affiliations */}
            <div className={`grid grid-cols-[160px_1fr] gap-x-8 py-4 items-start max-w-[380px] border-t ${C.border} max-[720px]:grid-cols-1 max-[720px]:gap-2`}>
              <div className={`text-[15px] ${C.primary} pt-px`}>{t('aboutAffiliationLabel')}</div>
              <ul className="list-none">
                {aboutAffiliations.map((item, i) => (
                  <li key={i} className={`text-[15px] ${C.secondary} leading-[1.5] mb-[3px] break-keep`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Proficiencies */}
        <section className="grid grid-cols-[280px_1fr] gap-0 mb-[120px] items-start max-[720px]:grid-cols-1 max-[720px]:gap-5 max-[720px]:mb-[60px]">
          <h2 className={`text-[clamp(1.19rem,2.125vw,1.7rem)] font-medium ${C.primary} leading-tight`}>
            {t('secProf')}
          </h2>
          <div>
            {prof.map((g, i) => (
              <div
                key={i}
                className={`grid grid-cols-[160px_1fr] gap-x-8 items-start max-w-[380px] max-[720px]:grid-cols-1 max-[720px]:gap-2 ${
                  i === 0 ? 'pb-4' : `py-4 border-t ${C.border}`
                }`}
              >
                <div className={`text-[15px] ${C.primary} pt-px`}>{g.label}</div>
                <ul className="list-none">
                  {g.items.map((item, j) => (
                    <li key={j} className={`text-[15px] ${C.secondary} leading-[1.5] mb-[3px] break-keep`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section className="grid grid-cols-[280px_1fr] gap-0 mb-[120px] items-start max-[720px]:grid-cols-1 max-[720px]:gap-5 max-[720px]:mb-[60px]">
          <h2 className={`text-[clamp(1.19rem,2.125vw,1.7rem)] font-medium ${C.primary} leading-tight`}>
            {t('secWork')}
          </h2>
          <div>
            {jobs.map((j, idx) => (
              <div
                key={idx}
                className={`max-w-[380px] ${idx === 0 ? 'pb-4' : `py-4 border-t ${C.border}`}`}
              >
                <div className={`text-[15px] font-normal ${C.primary} mb-1.5`}>{j.title}</div>
                <MetaRow>
                  <span className="inline-flex items-center gap-1"><CalIcon /> {j.date}</span>
                  <span className="inline-flex items-center gap-1"><BagIcon /> {j.company}</span>
                  <span className="inline-flex items-center gap-1"><PinIcon /> {j.location}</span>
                </MetaRow>
                <div className={`text-[13px] ${C.muted} leading-[1.45] max-w-[380px]`}>
                  {j.desc && <p className="mb-2.5">{j.desc}</p>}
                  {j.desc2 && <p className="mb-2.5">{j.desc2}</p>}
                  <ul className="list-none">
                    {j.bullets.map((b, bi) => (
                      <li key={bi} className="pl-3 relative mb-1.5 text-[13px] leading-[1.45]">
                        <span className={`absolute left-0 top-[0.725em] -translate-y-1/2 w-[4px] h-[4px] rounded-full bg-current ${C.dim}`} />
                        {b.text}
                        {b.sub.length > 0 && (
                          <ul className="mt-1 mb-2 list-none pl-1">
                            {b.sub.map((s, si) => (
                              <li key={si} className={`mb-[3px] ${C.dim}`}>
                                {s}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recognition */}
        <section className="grid grid-cols-[280px_1fr] gap-0 mb-[120px] items-start max-[720px]:grid-cols-1 max-[720px]:gap-5 max-[720px]:mb-[60px]">
          <h2 className={`text-[clamp(1.19rem,2.125vw,1.7rem)] font-medium ${C.primary} leading-tight`}>
            {t('secRecognition')}
          </h2>
          <div>
            {recognition.map((r, idx) => (
              <div
                key={idx}
                className={`max-w-[380px] ${idx === 0 ? 'pb-4' : `py-4 border-t ${C.border}`}`}
              >
                <div className={`text-[15px] font-normal ${C.primary} mb-1.5`}>{r.title}</div>
                <MetaRow>
                  {r.date && <span className="inline-flex items-center gap-1"><CalIcon /> {r.date}</span>}
                  {r.company && <span className="inline-flex items-center gap-1"><BagIcon /> {r.company}</span>}
                  {r.location && <span className="inline-flex items-center gap-1"><PinIcon /> {r.location}</span>}
                </MetaRow>
                {r.desc && (
                  <div className={`text-[13px] ${C.muted} leading-[1.45] max-w-[380px]`}>
                    <p>{r.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Patents & Software */}
        <section className="grid grid-cols-[280px_1fr] gap-0 mb-[120px] items-start max-[720px]:grid-cols-1 max-[720px]:gap-5 max-[720px]:mb-[60px]">
          <h2 className={`text-[clamp(1.19rem,2.125vw,1.7rem)] font-medium ${C.primary} leading-tight`}>
            {t('secIp')}
          </h2>
          <div>
            {ipGroups.map((g, i) => (
              <div
                key={i}
                className={`max-w-[380px] ${i === 0 ? 'pb-4' : `pt-4 border-t ${C.border}`}`}
              >
                <div className={`text-[15px] ${C.primary} mb-3`}>{g.label}</div>
                <ul className="list-none">
                  {g.items.map((item, j) => (
                    <li key={j} className="mb-3 last:mb-0">
                      <div className="flex items-start gap-2 justify-between">
                        <div className={`text-[13px] ${C.secondary} leading-[1.45] break-keep flex-1 min-w-0`}>
                          {item.title}
                        </div>
                        <span className="text-[10px] text-red-500/80 dark:text-red-400/80 bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/50 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 mt-px">
                          {item.role}
                        </span>
                      </div>
                      <div className={`text-[11px] ${C.dim} mt-0.5 tracking-[0.02em]`}>{item.code}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="grid grid-cols-[280px_1fr] gap-0 mb-[120px] items-start max-[720px]:grid-cols-1 max-[720px]:gap-5 max-[720px]:mb-[60px]">
          <h2 className={`text-[clamp(1.19rem,2.125vw,1.7rem)] font-medium ${C.primary} leading-tight`}>
            {t('secProj')}
          </h2>
          <div>
            <div className="flex flex-col gap-2 max-w-[380px]">
              {projects.map((p, i) => (
                <a
                  key={i}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-neutral-100 dark:bg-ondo-card rounded-lg px-3.5 py-3 transition-colors hover:bg-neutral-200 dark:hover:bg-ondo-card2 group"
                >
                  <div className={thumbClass(i)}>
                    <Image
                      src={projLogos[i]}
                      alt=""
                      width={36}
                      height={36}
                      className={
                        i === 0
                          ? 'w-[72%] h-[72%] object-contain'
                          : i === 2
                            ? 'w-full h-full object-contain'
                            : 'w-full h-full object-cover'
                      }
                    />
                  </div>
                  <div className="flex-1 min-w-0 relative overflow-hidden">
                    <div className="transition-transform duration-200 group-hover:-translate-y-full">
                      <div className={`text-[13px] ${C.secondary} mb-0.5 flex items-center gap-1.5`}>
                        {p.name}
                        {p.inProgress && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-ondo-red bg-ondo-red/10 px-1.5 py-px rounded-full flex-shrink-0">
                            <span className="w-1 h-1 rounded-full bg-ondo-red animate-pulse" />
                            {t('inProgressLabel')}
                          </span>
                        )}
                      </div>
                      <div className={`text-[10px] ${C.dim} uppercase tracking-[0.07em]`}>{p.sub}</div>
                    </div>
                    <div className="absolute inset-0 flex items-center translate-y-full transition-transform duration-200 group-hover:translate-y-0">
                      <div className={`text-[13px] ${C.secondary}`}>{projRoles[i]}</div>
                    </div>
                  </div>
                  <span className={`text-[13px] ${C.dim} transition-all group-hover:text-ondo-red group-hover:translate-x-0.5`}>→</span>
                </a>
              ))}
            </div>

            {/* Portfolios — carousel modal */}
            <PortfolioLinks portfolios={portfolios} />
          </div>
        </section>

        {/* Contact */}
        <section className="grid grid-cols-[280px_1fr] gap-0 items-start max-[720px]:grid-cols-1 max-[720px]:gap-5">
          <h2 className={`text-[clamp(1.19rem,2.125vw,1.7rem)] font-medium ${C.primary} leading-tight`}>
            {t('secContact')}
          </h2>
          <div>
            <div className={`text-[15px] ${C.secondary} mb-2`}>{t('contactStatus')}</div>
            <ContactMail email="ondo@ondo.at" />
          </div>
        </section>
      </div>
    </div>
  );
}
