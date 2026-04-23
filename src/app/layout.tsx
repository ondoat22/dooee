import type { Metadata } from 'next';
import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ondo.at';

const TITLE = 'ONDO Architects';
const DESCRIPTION =
  "우리는 공간의 '알맞은 온도'를 설계합니다. / We design spaces with the right temperature for where they belong.";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
