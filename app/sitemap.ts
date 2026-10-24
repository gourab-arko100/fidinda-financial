import type { MetadataRoute } from "next";
import { services, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/about", "/services", "/packages", "/resources", "/request-quotation", "/contact"];
  return [
    ...routes.map((r) => ({ url: `${site.url}${r}`, lastModified: now, changeFrequency: "monthly" as const, priority: r === "" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
  ];
}
