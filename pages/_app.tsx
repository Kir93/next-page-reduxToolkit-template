import { FC } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import theme from '@styles/theme';

import { notoSans } from '@config/bigContents';
import wrapper from '@config/configureStore';

import { AppLayout } from '@components/layouts';

const App: FC<AppProps> = ({ Component, pageProps }) => (
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
    <ChakraProvider value={theme}>
      <AppLayout>
        <main>
          <Component {...pageProps} />
        </main>
      </AppLayout>
    </ChakraProvider>
  </>
);

export default wrapper.withRedux(App);
