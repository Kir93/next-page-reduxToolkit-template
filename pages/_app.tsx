import '@styles/global.css';

import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import wrapper from '@configs/configureStore';
import { theme, GlobalFontStyle } from '@styles/theme';

import AppLayout from '@components/Layout/AppLayout';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalFontStyle />
    <Head>
      <title>Tirrilee Next</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <AppLayout>
      <main>
        <Component {...pageProps} />
      </main>
    </AppLayout>
  </ThemeProvider>
);

export default wrapper.withRedux(App);
