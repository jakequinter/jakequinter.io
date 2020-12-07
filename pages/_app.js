import { Global, css } from '@emotion/core';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from '../styles/theme';
import { AuthProvider } from '@/lib/auth';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #f7fafc;
          }
          html {
            margin: 0;
            height: 100%;
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
