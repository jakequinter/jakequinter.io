import Script from 'next/script';
import type { Metadata } from 'next';
import { Montserrat } from "next/font/google";

import classNames from '@/utils/classNames';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jake Quinter',
  description: 'Engineer, enthusiast, creator, and web lover.',
  openGraph: {
    title: 'Jake Quinter',
    description: 'Engineer, enthusiast, creator, and web lover.',
    url: 'https://jakequinter.io',
    siteName: 'Jake Quinter',
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(
        montserrat.className,
        'bg-gray-100 text-base text-gray-700'
      )}
    >
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
        </Script>
      </head>
      <body>
        <Nav />
        <main className="mx-auto mt-40 max-w-screen-sm px-4 sm:px-0">
          <div className="mb-20" style={{ minHeight: 'calc(100vh - 289px)' }}>
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
