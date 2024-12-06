import type { MetadataRoute } from "next";

export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mlaursen.com",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
  ];
}
