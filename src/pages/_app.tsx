import "./styles.scss";
import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Mikkel Laursen</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
