import '@styles/global.css';

import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Noto_Sans_KR } from '@next/font/google';
import { ThemeProvider } from 'styled-components';

import theme from '@styles/theme';
import wrapper from '@configs/configureStore';

import AppLayout from '@components/Layout/AppLayout';

const notoSans = Noto_Sans_KR({ weight: '400', subsets: ['korean'] });

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Tirrilee Next</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <AppLayout>
      <main className={notoSans.className}>
        <Component {...pageProps} />
      </main>
    </AppLayout>
  </ThemeProvider>
);

export default wrapper.withRedux(App);
