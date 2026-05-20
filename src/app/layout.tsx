import type { Metadata } from 'next';
import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ondo.at';

const TITLE = '온도 건축 | ONDO Architects';
const DESCRIPTION =
  '온도 건축사사무소, 모든 것에 가장 알맞은 온도를 설계합니다. (서울 / 제주)';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    url: baseUrl,
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: '7JM3JXLpSTIDRQfus8DifK2yUjhAUOu3fl-aPgM8Vto',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
