import "./styles.scss";
import React, { ReactElement } from "react";
import NextApp from "next/app";
import Head from "next/head";

export default class App extends NextApp {
  public render(): ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Mikkel Laursen</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
