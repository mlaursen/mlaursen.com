import Document, { Head, Html, Main, NextScript } from "next/document";
import type { ReactElement } from "react";

export default class MyDocument extends Document {
  public render(): ReactElement {
    return (
      <Html lang="en" dir="ltr">
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
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
