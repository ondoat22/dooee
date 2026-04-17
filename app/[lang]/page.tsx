import { Lang, mainText } from '@/lib/i18n'
import LangToggle from '@/components/LangToggle'
import StampButton from '@/components/StampButton'
import IconStrip from '@/components/IconStrip'

export default function MainPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang
  const t = mainText[lang]
  const isKr = lang === 'kr'
  const fontClass = isKr ? 'font-gowun' : 'font-inter'

  return (
    <main className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden">
      <LangToggle lang={lang} />

      {/* 중앙 텍스트 */}
      <div className={`flex flex-col items-center text-center max-w-lg px-6 pb-44 ${fontClass}`}>
        {/* ONDO 타이틀 */}
        <p className="font-inter font-[500] text-[17px] text-black tracking-[-0.01em] mb-5">
          {t.title}
        </p>

        {/* 본문 텍스트들 */}
        <p className="text-[15px] font-normal text-[#999] tracking-[-0.01em] leading-[1.3] mb-5">
          {t.welcome}
        </p>
        <p className="text-[15px] font-normal text-[#999] tracking-[-0.01em] leading-[1.3] mb-5 whitespace-pre-line">
          {t.tagline}
        </p>
        <p className="text-[15px] font-normal text-[#999] tracking-[-0.01em] leading-[1.3] mb-5">
          {t.sub}
        </p>
        <p className="text-[15px] font-normal text-[#aaa] tracking-[-0.01em] leading-[1.3] mb-9 whitespace-pre-line">
          {t.construction}
        </p>

        {/* 도장 버튼 */}
        <StampButton lang={lang} />
      </div>

      {/* 하단 회색 아이콘 스트립 */}
      <IconStrip />
    </main>
  )
}
