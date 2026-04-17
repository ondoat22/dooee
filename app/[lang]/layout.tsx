import { Lang } from '@/lib/i18n'
import { redirect } from 'next/navigation'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'kr' }]
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const { lang } = params
  if (lang !== 'en' && lang !== 'kr') redirect('/en')

  return <>{children}</>
}
