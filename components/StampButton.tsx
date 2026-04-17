'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Lang } from '@/lib/i18n'

export default function StampButton({ lang }: { lang: Lang }) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(`/${lang}/dooee`)}
      className="group border-none bg-transparent p-0 cursor-pointer outline-none"
      aria-label="소개 페이지로 이동"
    >
      <Image
        src="/stamp_red.png"
        alt="ONDO stamp"
        width={61}
        height={60}
        className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-12"
        style={{
          filter: 'drop-shadow(-2px 3px 4px rgba(100,160,255,0.55)) drop-shadow(0px 2px 4px rgba(0,0,0,0.22))',
        }}
      />
    </button>
  )
}
