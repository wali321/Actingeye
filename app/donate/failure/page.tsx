import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Donation issue state", robots: { index: false, follow: false } };

export default function DonationFailurePage() {
  return <main id="main" className="page-main"><PageHeading index="06" eyebrow="Checkout response" title={<>We could not complete the <em>request.</em></>} intro="This is a preview-only payment issue state. No payment system is connected." /><div className="page-content"><div className="status-callout">DEMO STATE · Do not tell visitors a payment failed or succeeded until a configured provider returns a verified result. Provide a reviewed support contact before launch.</div><Link className="arrow-link" href="/donate">Return to giving information <span aria-hidden="true">↗</span></Link></div></main>;
}
