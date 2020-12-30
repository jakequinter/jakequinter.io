import { DefaultSeo } from 'next-seo';
// import { Global, css } from '@emotion/core';
// import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import '../styles/global.css';
import { AuthProvider } from '@/lib/auth';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    // <ThemeProvider>
    <AuthProvider>
      <DefaultSeo {...SEO} />
      {/* <GlobalStyle /> */}
      <Component {...pageProps} />
    </AuthProvider>
    // </ThemeProvider>
  );
}

export default MyApp;
