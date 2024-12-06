import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import "./styles/global.css";
const Header = dynamic(() => import("./components/Headers"), { ssr: true });

export const metadata: Metadata = {
  viewport: "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width",
  title: 'Tên Website của bạn',
  description: 'Mô tả website của bạn ở đây',
  keywords: 'từ khóa 1, từ khóa 2, từ khóa 3',
  openGraph: {
    title: 'Tên Website của bạn',
    description: 'Mô tả website của bạn ở đây',
    url: 'https://your-domain.com',
    siteName: 'Tên Website',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <Header/>
      <main className="main">{children}</main>
      </body>
    </html>
  );
}
