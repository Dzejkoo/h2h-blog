import React from 'react';
import GlobalStyle from '../assets/style/globalStyle';
import { Layout } from '../components';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../assets/style/globalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
