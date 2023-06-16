"use client";
import "./app.scss";
import { Roboto } from "next/font/google";
import type { ReactElement, ReactNode } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--roboto",
});

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <title>MIkkel Laursen</title>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#000" />
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
      </head>
      <body>{children}</body>
    </html>
  );
}
