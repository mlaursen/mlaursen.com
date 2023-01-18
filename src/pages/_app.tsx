import type { AppProps } from "next/app";
import Head from "next/head";
import type { ReactElement } from "react";
import "./styles.scss";

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
