import '@styles/global.css';

import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Noto_Sans_KR } from '@next/font/google';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from '@styles/theme';
import wrapper from '@configs/configureStore';

import AppLayout from '@components/Layout/AppLayout';

const notoSans = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['korean'],
  display: 'swap',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Malgun Gothic',
    'sans-serif',
  ],
});

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family:${notoSans.style.fontFamily};
  }
`;

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
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
