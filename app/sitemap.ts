import type { MetadataRoute } from "next";

const routes = [
  "/", "/about", "/programs", "/programs/program-two", "/programs/book-distribution",
  "/stories", "/stories/first-step-digital-world", "/stories/when-learning-finds-a-way",
  "/impact", "/get-involved", "/donate", "/transparency",
  "/contact", "/privacy", "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  return routes.map((route) => ({ url: new URL(route, siteUrl).toString() }));
}
