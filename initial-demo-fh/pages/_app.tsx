import '@/globals.css.ts';

import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
});

function NextApp(props: AppProps<Record<string, unknown>>): JSX.Element {
  const { Component, pageProps } = props;

  return (
    <div className={inter.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default NextApp;
