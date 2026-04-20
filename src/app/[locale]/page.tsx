import Image from 'next/image';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import HeaderControls from '@/components/HeaderControls';
import IconStrip from '@/components/IconStrip';

export default async function MainPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const t = await getTranslations('main');

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white text-neutral-900 dark:bg-ondo-bg dark:text-white flex flex-col items-center justify-center">
      <HeaderControls position="fixed" />

      <div className="flex flex-1 flex-col items-center justify-center text-center pb-[200px] max-[480px]:pb-[120px]">
        <p className="text-[17px] font-normal -tracking-[0.01em] text-black dark:text-white mb-5">
          {t('title')}
        </p>
        <p className="text-[15px] leading-[1.3em] -tracking-[0.01em] text-neutral-500 dark:text-neutral-500 mb-5">
          {t('welcome')}
        </p>
        <p
          className="text-[15px] leading-[1.3em] -tracking-[0.01em] text-neutral-500 dark:text-neutral-500 mb-5"
          dangerouslySetInnerHTML={{ __html: t.raw('tagline') as string }}
        />
        <p
          className="text-[15px] leading-[1.3em] -tracking-[0.01em] text-neutral-500 dark:text-neutral-500 mb-5"
          dangerouslySetInnerHTML={{ __html: t.raw('sub') as string }}
        />
        <p
          className="text-[15px] leading-[1.3em] -tracking-[0.01em] text-neutral-500 dark:text-neutral-500 mb-9"
          dangerouslySetInnerHTML={{ __html: t.raw('construction') as string }}
        />

        <Link
          href="/dooee"
          aria-label={t('stampAria')}
          className="stamp-wrap cursor-pointer inline-block border-0 bg-transparent p-0"
        >
          <Image
            src="/images/stamp.png"
            alt=""
            width={61}
            height={60}
            className="stamp-icon w-[61px] h-[60px] block max-[700px]:w-[58px] max-[700px]:h-[58px] [filter:drop-shadow(-3px_3px_4px_rgba(180,180,180,0.6))]"
            priority
          />
        </Link>
      </div>

      <IconStrip />
    </main>
  );
}
