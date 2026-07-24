'use client';

import { useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Desktop TOC */}
        <div className="hidden lg:flex items-center gap-5">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={sectionLinkClass}>
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile / tablet menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Sections"
            aria-expanded={menuOpen}
            className="lg:hidden flex items-center justify-center w-5 h-5 text-neutral-500 dark:text-neutral-400 hover:text-ondo-red dark:hover:text-ondo-red transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          <HeaderControls position="inline" />
        </div>
      </div>

      {/* Mobile / tablet dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-black/5 dark:border-white/5">
          <div className="max-w-[1100px] mx-auto px-6 py-4 flex flex-col gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-ondo-red dark:hover:text-ondo-red transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
