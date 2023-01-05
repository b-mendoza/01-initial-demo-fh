import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

function NextApp(props: AppProps<Record<string, unknown>>): JSX.Element {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default NextApp;
