import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Donation success state", robots: { index: false, follow: false } };

export default function DonationSuccessPage() {
  return <main id="main" className="page-main"><PageHeading index="06" eyebrow="Checkout response" title={<>Thank you for being <em>here.</em></>} intro="This is a preview-only success state. It does not confirm or represent a real donation." /><div className="page-content"><div className="status-callout">DEMO STATE · Connect a verified hosted checkout and validate its signed result before showing any receipt or donation confirmation.</div><Link className="arrow-link" href="/donate">Return to giving information <span aria-hidden="true">↗</span></Link></div></main>;
}
