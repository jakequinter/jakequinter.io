import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

import { AuthProvider } from '@/lib/auth';
import { useAnalytics } from '@/utils/analytics';
import SEO from '../next-seo.config';
import '../src/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  useAnalytics();

  return (
    <AuthProvider>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class" defaultTheme="light">
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
