import { DefaultSeo } from 'next-seo';

import { AuthProvider } from '@/lib/auth';
import SEO from '../next-seo.config';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
