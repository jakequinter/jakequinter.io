import type { AppProps /*, AppContext */ } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { darkTheme } from '../stitches.config';

import { DefaultSeo } from 'next-seo';

import { AuthProvider } from '@/lib/auth';
import { useAnalytics } from '@/utils/analytics';
import SEO from '../next-seo.config';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  useAnalytics();

  return (
    <AuthProvider>
      <DefaultSeo {...SEO} />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{ dark: darkTheme.className, light: 'light' }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
