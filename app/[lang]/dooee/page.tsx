import { Lang, dooeeText } from '@/lib/i18n'
import LangToggle from '@/components/LangToggle'
import Link from 'next/link'
import Image from 'next/image'

// SVG 아이콘
const CalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="1" y="2" width="12" height="11" rx="1.5"/>
    <line x1="1" y1="5.5" x2="13" y2="5.5"/>
    <line x1="4.5" y1="1" x2="4.5" y2="3.5"/>
    <line x1="9.5" y1="1" x2="9.5" y2="3.5"/>
  </svg>
)
const BagIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="1" y="5" width="12" height="8" rx="1.5"/>
    <path d="M4.5 5V3.5A2.5 2.5 0 0 1 9.5 3.5V5"/>
  </svg>
)
const PinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M7 1a4 4 0 0 1 4 4c0 3-4 8-4 8S3 8 3 5a4 4 0 0 1 4-4z"/>
    <circle cx="7" cy="5" r="1.5"/>
  </svg>
)
const GradIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M1 5l6-3 6 3-6 3-6-3z"/>
    <path d="M4 6.5V10c0 1 1.3 2 3 2s3-1 3-2V6.5"/>
    <line x1="13" y1="5" x2="13" y2="8.5"/>
  </svg>
)

// 프로젝트 로고 매핑
const projectLogos = ['/hb_logo.png', '/stamp_red.png', '/zmj_logo.png', '/bl_logo.png']

export default function DooeePage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang
  const t = dooeeText[lang]
  const isKr = lang === 'kr'
  const fontClass = isKr ? 'font-gowun' : 'font-inter'

  return (
    <div className={`min-h-screen bg-[#141414] text-white ${fontClass}`}>
      <LangToggle lang={lang} dark />

      <div className="max-w-[1100px] mx-auto px-12 py-20 pb-32">
        {/* 뒤로가기 */}
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.1em] uppercase text-[#444] hover:text-[#e8210a] transition-colors mb-12"
        >
          ← ondo.at
        </Link>

        {/* 이름 */}
        <h1 className="text-[48px] font-[500] tracking-[-0.01em] leading-none text-white mb-12">
          {t.name}
        </h1>

        {/* About */}
        <Section>
          <SectionLeft />
          <div>
            <Group noBorder>
              <GroupLabel>{t.aboutLabel}</GroupLabel>
              <ul>
                {t.aboutItems.map(item => (
                  <li key={item} className="text-[15px] text-[#666] leading-[1.5] mb-1">{item}</li>
                ))}
              </ul>
            </Group>
            <p className="text-[15px] text-[#555] leading-[1.6] pt-4 mt-1 border-t border-[#222] max-w-[380px]">
              {t.aboutDesc}
            </p>
          </div>
        </Section>

        {/* Proficiencies */}
        <Section>
          <SectionLeft>
            <SectionTitle>{t.secProf}</SectionTitle>
          </SectionLeft>
          <div>
            {t.prof.map((g, i) => (
              <Group key={g.label} noBorder={i === 0}>
                <GroupLabel>{g.label}</GroupLabel>
                <ul>
                  {g.items.map(item => (
                    <li key={item} className="text-[15px] text-[#666] leading-[1.5] mb-1">{item}</li>
                  ))}
                </ul>
              </Group>
            ))}
          </div>
        </Section>

        {/* Work */}
        <Section>
          <SectionLeft>
            <SectionTitle>{t.secWork}</SectionTitle>
          </SectionLeft>
          <div className="max-w-[380px]">
            {t.jobs.map((job, i) => (
              <div
                key={job.title}
                className={`py-4 ${i > 0 ? 'border-t border-[#222]' : ''}`}
              >
                <p className="text-[15px] text-white font-normal mb-1.5">{job.title}</p>
                <div className="flex flex-wrap gap-3 text-[12px] text-[#444] mb-2.5 items-center">
                  <span className="flex items-center gap-1"><CalIcon />{job.date}</span>
                  <span className="flex items-center gap-1"><BagIcon />{job.company}</span>
                  <span className="flex items-center gap-1"><PinIcon />{job.location}</span>
                </div>
                <p className="text-[13px] text-[#555] leading-[1.45] mb-2">{job.desc}</p>
                {job.desc2 && (
                  <p className="text-[13px] text-[#555] leading-[1.45] mb-2">{job.desc2}</p>
                )}
                <ul className="list-none">
                  {job.bullets.map(b => (
                    <li key={b.text} className="text-[13px] text-[#555] leading-[1.45] pl-3.5 relative mb-1
                      before:content-['•'] before:absolute before:left-0 before:text-[#444]">
                      {b.text}
                      {b.sub.length > 0 && (
                        <ul className="mt-1 mb-2">
                          {b.sub.map(s => (
                            <li key={s} className="text-[13px] text-[#444] leading-[1.45] pl-3.5 relative mb-0.5
                              before:content-['·'] before:absolute before:left-0 before:text-[#333]">
                              {s}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section>
          <SectionLeft>
            <SectionTitle>{t.secEdu}</SectionTitle>
          </SectionLeft>
          <div className="max-w-[380px]">
            <p className="text-[15px] text-white mb-1.5">{t.edu.degree}</p>
            <div className="flex flex-wrap gap-3 text-[12px] text-[#444] mb-2 items-center">
              <span className="flex items-center gap-1"><CalIcon />{t.edu.date}</span>
              <span className="flex items-center gap-1"><GradIcon />{t.edu.school}</span>
              <span className="flex items-center gap-1"><PinIcon />{t.edu.location}</span>
            </div>
            <p className="text-[13px] text-[#555] leading-[1.8]">{t.edu.desc}</p>
          </div>
        </Section>

        {/* Projects */}
        <Section>
          <SectionLeft>
            <SectionTitle>{t.secProj}</SectionTitle>
          </SectionLeft>
          <div className="flex flex-col gap-2 max-w-[380px]">
            {t.projects.map((proj, i) => (
              <a
                key={proj.name}
                href={proj.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#1c1c1c] rounded-[10px] p-4 hover:bg-[#222] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg flex-shrink-0 overflow-hidden bg-[#111] flex items-center justify-center">
                  <Image
                    src={projectLogos[i] || '/hb_logo.png'}
                    alt={proj.sub}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] text-[#bbb] mb-0.5">{proj.name}</p>
                  <p className="text-[10px] text-[#3a3a3a] uppercase tracking-[0.07em]">{proj.sub}</p>
                </div>
                <span className="text-[#333] text-sm group-hover:text-[#666] group-hover:translate-x-0.5 transition-all">→</span>
              </a>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section>
          <SectionLeft>
            <SectionTitle>{t.secContact}</SectionTitle>
          </SectionLeft>
          <div>
            <a
              href="mailto:ondo@ondo.at"
              className="text-[14px] text-[#666] hover:opacity-60 transition-opacity inline-flex items-center gap-1.5"
            >
              Mail →
            </a>
          </div>
        </Section>
      </div>
    </div>
  )
}

// ── 공통 레이아웃 컴포넌트 ──
function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[280px_1fr] gap-0 mb-[120px] items-start">
      {children}
    </div>
  )
}

function SectionLeft({ children }: { children?: React.ReactNode }) {
  return <div className="pt-0">{children}</div>
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[clamp(1.4rem,2.5vw,2rem)] font-[500] text-white leading-[1.2]">
      {children}
    </p>
  )
}

function Group({ children, noBorder }: { children: React.ReactNode; noBorder?: boolean }) {
  return (
    <div className={`grid grid-cols-[160px_1fr] gap-0 gap-x-8 py-4 items-start relative max-w-[380px]
      ${!noBorder ? 'before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-[#222]' : ''}`}
    >
      {children}
    </div>
  )
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] font-normal text-white leading-[1.4] pt-0.5">
      {children}
    </p>
  )
}
