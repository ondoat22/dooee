import type { Metadata } from 'next';
import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ondo.at';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'ONDO Architects',
  description:
    "우리는 공간의 '알맞은 온도'를 설계합니다. / We design spaces with the right temperature for where they belong.",
  openGraph: {
    type: 'website',
    siteName: 'ONDO Architects',
    title: 'ONDO Architects',
    description:
      "We design spaces with the right temperature for where they belong.",
    url: baseUrl,
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'ONDO Architects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ONDO Architects',
    description:
      "We design spaces with the right temperature for where they belong.",
    images: ['/images/og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
