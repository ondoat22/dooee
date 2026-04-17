'use client'
import { useRouter, usePathname } from 'next/navigation'
import { Lang } from '@/lib/i18n'

interface Props {
  lang: Lang
  dark?: boolean
}

export default function LangToggle({ lang, dark = false }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const toggle = () => {
    const next = lang === 'en' ? 'kr' : 'en'
    // 현재 경로에서 lang 세그먼트만 교체
    const newPath = pathname.replace(`/${lang}`, `/${next}`)
    router.push(newPath)
  }

  const activeClass = dark ? 'text-white' : 'text-black'
  const inactiveClass = dark ? 'text-[#555]' : 'text-[#ccc]'
  const dividerClass = dark ? 'text-[#444]' : 'text-[#ddd]'

  return (
    <button
      onClick={toggle}
      className="fixed top-5 right-6 z-50 flex items-center gap-1.5 cursor-pointer"
      aria-label="언어 전환"
    >
      <span className={`text-[11px] font-normal tracking-[0.04em] transition-colors ${lang === 'kr' ? activeClass : inactiveClass}`}>
        KR
      </span>
      <span className={`text-[11px] ${dividerClass}`}>·</span>
      <span className={`text-[11px] font-normal tracking-[0.04em] transition-colors ${lang === 'en' ? activeClass : inactiveClass}`}>
        EN
      </span>
    </button>
  )
}
