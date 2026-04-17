/** @type {import('next').NextConfig} */
const nextConfig = {
  // [lang] 세그먼트로 다국어 라우팅 처리
  // /en → 영문 메인, /kr → 한글 메인
  // /en/dooee → 영문 소개, /kr/dooee → 한글 소개
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
