import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://commercial.sjcarpentryllc.com",
      lastModified: new Date(),
    },
    {
      url: "https://commercial.sjcarpentryllc.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://commercial.sjcarpentryllc.com/contact",
      lastModified: new Date(),
    },
  ];
}