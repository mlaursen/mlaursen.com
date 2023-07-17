import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mlaursen.com",
      lastModified: new Date(),
    },
  ];
}
