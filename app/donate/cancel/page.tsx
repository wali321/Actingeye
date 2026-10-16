import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Donation cancelled state", robots: { index: false, follow: false } };

export default function DonationCancelPage() {
  return <main id="main" className="page-main"><PageHeading index="06" eyebrow="Checkout response" title={<>No action is <em>required.</em></>} intro="This is a preview-only cancellation state. No checkout has been started and no payment was attempted." /><div className="page-content"><div className="status-callout">DEMO STATE · Once a provider is configured, show this message only after the provider reports that the visitor cancelled checkout.</div><Link className="arrow-link" href="/donate">Return to giving information <span aria-hidden="true">↗</span></Link></div></main>;
}
