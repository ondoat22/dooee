'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTransition } from 'react';

const textBase = 'text-[11px] tracking-[0.04em] transition-colors';
const activeClass = 'text-neutral-900 dark:text-white';
const inactiveClass = 'text-neutral-400 dark:text-neutral-500';
const dividerClass = 'text-[11px] text-neutral-300 dark:text-neutral-700';

const FIXED_POSITION_CLASS = 'fixed top-5 right-6 z-[100]';
const INLINE_POSITION_CLASS = 'relative';

export default function LangToggle({
  position = 'fixed',
}: {
  position?: 'fixed' | 'inline';
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition();

  const toggle = () => {
    const next = locale === 'en' ? 'kr' : 'en';
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  const positionClass = position === 'fixed' ? FIXED_POSITION_CLASS : INLINE_POSITION_CLASS;
  const buttonClass = `${positionClass} flex items-center gap-1.5 cursor-pointer select-none bg-transparent border-0 p-0`;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      className={buttonClass}
    >
      <span className={`${textBase} ${locale === 'kr' ? activeClass : inactiveClass}`}>KR</span>
      <span className={dividerClass}>·</span>
      <span className={`${textBase} ${locale === 'en' ? activeClass : inactiveClass}`}>EN</span>
    </button>
  );
}
