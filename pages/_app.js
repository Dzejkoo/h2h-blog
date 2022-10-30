import React from 'react';
import { Layout } from '../components';
import { ModeProvider } from '../providers/ModeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ModeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModeProvider>
    </>
  );
}

export default MyApp;
