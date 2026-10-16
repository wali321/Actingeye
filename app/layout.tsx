import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.org"),
  title: {
    default: "[Organization name] — community, place, possibility",
    template: "%s | [Organization name]",
  },
  description:
    "A starter website for a mission-driven organization. Add verified details about the organization, its work, and the communities it serves.",
  openGraph: {
    title: "[Organization name] — community, place, possibility",
    description: "A starter website for a mission-driven organization. Add verified details before launch.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "[Organization name] — community, place, possibility",
    description: "A starter website for a mission-driven organization. Add verified details before launch.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}>
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
