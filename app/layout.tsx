import { RootHtml } from "@react-md/core/RootHtml";
import { textContainer } from "@react-md/core/typography/textContainerStyles";
import { type Metadata, type Viewport } from "next";
import { Roboto_Flex } from "next/font/google";
import { type ReactElement, type ReactNode } from "react";

import "./app.scss";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  variable: "--roboto",
});

export const metadata: Metadata = {
  title: "Mikkel Laursen",
  description: "A placeholder portfolio website for Mikkel Laursen",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    title: "Mikkel Laursen",
    description: "A placeholder portfolio website for Mikkel Laursen",
    url: "/",
    images: [
      {
        url: "/og.png",
        type: "image/png",
        height: 630,
        width: 1200,
      },
    ],
  },
  metadataBase: new URL("https://mlaursen.com"),
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#000",
  colorScheme: "dark",
};

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <RootHtml className={roboto.variable} bodyClassName={textContainer()}>
      {children}
    </RootHtml>
  );
}
