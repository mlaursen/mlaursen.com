import "./styles.scss";
import type { ReactElement } from "react";
import type { AppProps } from "next/app";
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
