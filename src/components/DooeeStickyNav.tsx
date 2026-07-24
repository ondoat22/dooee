'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import HeaderControls from './HeaderControls';

const navClass = [
  'sticky top-0 z-50 backdrop-blur-md',
  'bg-white/80 dark:bg-ondo-bg/80',
  'border-b border-black/5 dark:border-white/5',
].join(' ');

const innerClass = [
  'max-w-[1100px] mx-auto flex items-center justify-between gap-6',
  'px-12 py-5 max-[720px]:px-6 max-[720px]:py-4',
].join(' ');

const backLinkClass = [
  'inline-flex items-center gap-1.5 flex-shrink-0',
  'text-[11px] tracking-[0.1em] uppercase',
  'text-neutral-500 dark:text-neutral-600 hover:text-ondo-red dark:hover:text-ondo-red transition-colors',
].join(' ');

const sectionLinkClass = [
  'text-[11px] tracking-[0.04em] whitespace-nowrap',
  'text-neutral-500 dark:text-neutral-500 hover:text-ondo-red dark:hover:text-ondo-red transition-colors',
].join(' ');

export default function DooeeStickyNav({ backLabel }: { backLabel: string }) {
  const t = useTranslations('dooee');

  const sections = [
    { id: 'proficiencies', label: t('secProf') },
    { id: 'work', label: t('secWork') },
    { id: 'recognition', label: t('secRecognition') },
    { id: 'patents', label: t('secIpNav') },
    { id: 'projects', label: t('secProj') },
    { id: 'contact', label: t('secContact') },
  ];

  return (
    <nav className={navClass}>
      <div className={innerClass}>
        <Link href="/" className={backLinkClass}>
          ← {backLabel}
        </Link>

        <div className="hidden lg:flex items-center gap-5">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={sectionLinkClass}>
              {s.label}
            </a>
          ))}
        </div>

        <HeaderControls position="inline" />
      </div>
    </nav>
  );
}
