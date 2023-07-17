import "./app.scss";

import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import type { ReactElement, ReactNode } from "react";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  variable: "--roboto",
});

export const metadata: Metadata = {
  title: "Mikkel Laursen",
  colorScheme: "dark",
  themeColor: "#000",
  description: "A placeholder portfolio website for Mikkel Laursen",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    title: "Mikkel Laursen",
    description: "A placeholder portfolio website for Mikkel Laursen",
    url: "/",
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
  ],
};

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <html lang="en" className={roboto.variable}>
      <body>{children}</body>
    </html>
  );
}
