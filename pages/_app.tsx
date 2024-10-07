import '@styles/global.css';

import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import wrapper from '@configs/configureStore';
import AppLayout from '@components/Layout/AppLayout';

import { notoSans } from '@configs/bigContents';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <style jsx global>
      {`
        :root {
          --font-noto-sans: ${notoSans.style.fontFamily};
        }
      `}
    </style>
    <Head>
      <title>Next Page ReduxToolkit Template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ChakraProvider theme={theme}>
      <AppLayout>
        <main>
          <Component {...pageProps} />
        </main>
      </AppLayout>
    </ChakraProvider>
  </>
);

export default wrapper.withRedux(App);
