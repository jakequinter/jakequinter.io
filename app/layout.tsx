'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from 'next-themes';

import CmdK from './CmdK';
import Footer from './Footer';
import LayoutWrapper from './LayoutWrapper';

import './globals.css';

type Props = {
  children: React.ReactNode;
  maxWidth?: string;
};

export default function RootLayout({
  children,
  maxWidth = 'max-w-screen-sm',
}: Props) {
  const [cmdKOpen, setCmdKOpen] = useState(false);

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body className="bg-gray-50 text-base text-gray-700 dark:bg-gray-900 dark:text-gray-600">
        <LayoutWrapper>
          <div className="navbar z-10">
            <div className="mx-auto flex max-w-screen-sm items-center justify-between px-4 py-6 md:px-0">
              <Link href="/" className="mt-2">
                <Logo />
              </Link>
              <button
                className="rounded-md border border-gray-300 px-2 py-1 text-xl outline-none ring-blue-300 ring-offset-2 focus:ring-2 dark:border-gray-800 dark:border-opacity-40"
                onClick={() => setCmdKOpen(!cmdKOpen)}
              >
                ⌘
              </button>
            </div>
          </div>
          <CmdK open={cmdKOpen} setOpen={setCmdKOpen} />
          <main className={`${maxWidth} mx-auto mt-12 px-4 md:px-0`}>
            <div className="mb-20" style={{ minHeight: 'calc(100vh - 272px)' }}>
              {children}
            </div>
          </main>
        </LayoutWrapper>

        <Footer />
      </body>
    </html>
  );
}

function Logo() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case 'dark':
      src = '/jdq-light.svg';
      break;
    default:
      src = '/jdq-dark.svg';
      break;
  }

  return <Image src={src} alt="jdq logo" width={32} height={32} />;
}
