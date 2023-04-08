import type { Metadata } from 'next';
import { Montserrat } from "next/font/google";

import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import classNames from '@/utils/classNames';

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
