import { DefaultSeo } from 'next-seo';

import { AuthProvider } from '@/lib/auth';
import { useAnalytics } from '@/utils/analytics';
import SEO from '../next-seo.config';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  useAnalytics();

  return (
    <AuthProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
