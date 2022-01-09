import React from 'react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

import { useAnalytics } from '@/utils/analytics';
import SEO from '../next-seo.config';
import '../src/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  useAnalytics();

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <DefaultSeo {...SEO} />
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
