import type { Metadata } from "next";
import { DonationOptions } from "@/components/donation-options";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Donate", description: "Giving options and the current status of secure payment setup." };

export default function DonatePage() {
  return <main id="main" className="page-main"><PageHeading index="06" eyebrow="Giving with confidence" title={<>Make giving <em>thoughtful.</em></>} intro="Choose a sample amount to explore the interface. No payment is taken, no card details are collected, and no tax benefit or donation outcome is promised." /><div className="page-content donate-layout"><div><DonationOptions /></div><aside className="donate-aside"><p className="eyebrow">Before you give</p><h2>Trust, before transaction.</h2><p>Payment provider: not configured.</p><p>Registration and tax eligibility: not supplied.</p><p>Receipt, refund, and privacy terms: require organizational and legal review.</p><p>For now, this page is a prototype only. Donation amounts and examples must be checked against approved policies before launch.</p></aside></div></main>;
}
