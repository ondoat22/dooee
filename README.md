# ONDO - Next.js + Tailwind

## 라우팅 구조

```
/en          → 영문 메인 페이지
/kr          → 한글 메인 페이지
/en/dooee    → 영문 소개 페이지
/kr/dooee    → 한글 소개 페이지
/            → /en으로 자동 리다이렉트
```

## 다국어 동작 방식

- URL의 `[lang]` 세그먼트로 언어 관리 (`en` / `kr`)
- 언어 전환 시 현재 경로의 lang 세그먼트만 교체
- 한글 상태에서 CTA → `/kr/dooee` 이동 (한글 유지)
- 영문 상태에서 CTA → `/en/dooee` 이동 (영문 유지)

## 설치 및 실행

```bash
npm install
npm run dev
```

## 빌드 및 배포 (Vercel)

```bash
npm run build
```

Vercel에서 GitHub 연결 후 자동 배포됩니다.

## 파일 구조

```
app/
  layout.tsx          # 루트 레이아웃 (폰트, 메타데이터)
  page.tsx            # / → /en 리다이렉트
  globals.css         # 전역 스타일
  [lang]/
    layout.tsx        # lang 유효성 검사
    page.tsx          # 메인 페이지
    dooee/
      page.tsx        # 소개 페이지

components/
  LangToggle.tsx      # KR · EN 토글 버튼
  StampButton.tsx     # 빨간 도장 CTA 버튼
  IconStrip.tsx       # 하단 회색 아이콘 순차 회전

lib/
  i18n.ts             # 모든 텍스트 데이터 (EN/KR)

public/
  stamp_red.png       # 빨간 도장 이미지
  stamp_gray.png      # 회색 아이콘 이미지
  hb_logo.png         # HOWBUILD 로고
  zmj_logo.png        # ZMJ 로고
  bl_logo.png         # BOUNDLESS 로고
```
