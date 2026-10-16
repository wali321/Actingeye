import type { MetadataRoute } from "next";
import { stories } from "@/app/stories/stories";

const routes = [
  "/", "/about", "/programs", "/programs/program-two", "/programs/book-distribution",
  "/stories", ...stories.map(({ slug }) => `/stories/${slug}`),
  "/impact", "/get-involved", "/donate", "/transparency",
  "/contact", "/privacy", "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  return routes.map((route) => ({ url: new URL(route, siteUrl).toString() }));
}
