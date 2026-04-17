'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const INIT_ANGLES = [0, 90, 180, 270, 0, 90, 180, 270, 0, 90, 180, 270]
const COUNT = 12

export default function IconStrip() {
  const refs = useRef<(HTMLImageElement | null)[]>([])
  const rots = useRef(INIT_ANGLES.slice())
  const idx  = useRef(0)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    // 초기 각도 적용
    refs.current.forEach((el, i) => {
      if (el) el.style.transform = `rotate(${INIT_ANGLES[i]}deg)`
    })

    function spin() {
      const i = idx.current
      rots.current[i] += 90
      const el = refs.current[i]
      if (el) el.style.transform = `rotate(${rots.current[i]}deg)`
      idx.current = (i + 1) % COUNT
      timer.current = setTimeout(spin, 600)
    }

    timer.current = setTimeout(spin, 800)
    return () => { if (timer.current) clearTimeout(timer.current) }
  }, [])

  return (
    <div className="absolute bottom-[60px] left-0 right-0 flex items-center justify-center gap-[11px] px-5 overflow-hidden">
      {Array.from({ length: COUNT }).map((_, i) => (
        <div key={i} className="w-[61px] h-[60px] flex-shrink-0">
          <Image
            ref={el => { refs.current[i] = el }}
            src="/stamp_gray.png"
            alt=""
            width={61}
            height={60}
            className="w-full h-full object-contain opacity-25"
            style={{ transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)' }}
          />
        </div>
      ))}
    </div>
  )
}
