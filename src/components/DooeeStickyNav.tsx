'use client';

import { Link } from '@/i18n/navigation';
import HeaderControls from './HeaderControls';

const navClass = [
  'sticky top-0 z-50 backdrop-blur-md',
  'bg-white/80 dark:bg-ondo-bg/80',
  'border-b border-black/5 dark:border-white/5',
].join(' ');

const innerClass = [
  'max-w-[1100px] mx-auto flex items-center justify-between',
  'px-12 py-5 max-[720px]:px-6 max-[720px]:py-4',
].join(' ');

const backLinkClass = [
  'inline-flex items-center gap-1.5',
  'text-[11px] tracking-[0.1em] uppercase',
  'text-neutral-500 dark:text-neutral-600 hover:text-ondo-red transition-colors',
].join(' ');

export default function DooeeStickyNav({ backLabel }: { backLabel: string }) {
  return (
    <nav className={navClass}>
      <div className={innerClass}>
        <Link href="/" className={backLinkClass}>
          ← {backLabel}
        </Link>
        <HeaderControls position="inline" />
      </div>
    </nav>
  );
}
