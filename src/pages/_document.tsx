import React, { ReactElement } from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  public render(): ReactElement {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta name="theme-color" content="#000000" />
          <meta name="og:title" content="Mikkel Laursen" />
          <meta name="og:url" content="/" />
          <meta
            name="og:description"
            content="A placeholder portfolio website for Mikkel Laursen"
          />
          <meta
            name="description"
            content="A placeholder portfolio website for Mikkel Laursen"
          />
          <link
            key="font"
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
