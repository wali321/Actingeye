import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Transparency", description: "Registration, financial, and policy information to be supplied by the organization." };

export default function TransparencyPage() {
  return <main id="main" className="page-main"><PageHeading index="07" eyebrow="Accountability is visible" title={<>Open information. <em>Clear limits.</em></>} intro="This page reserves space for approved public documents. Legal status, tax benefits, and financial details are hidden until confirmed." /><div className="page-content"><div className="status-callout">No registration, tax-exemption, audit, or financial information was supplied. No registration number, 80G, 12A, FCRA, or other status is claimed.</div><ul className="document-list"><li><span>Legal name and entity type</span><span>[Add verified details]</span></li><li><span>Registration identifiers</span><span>[Add only after review]</span></li><li><span>Tax benefits and eligibility</span><span>[Add approved legal wording]</span></li><li><span>Annual report and audited statements</span><span>[Add accessible approved documents]</span></li><li><span>Safeguarding, privacy, and complaints policies</span><span>[Add current public policies]</span></li></ul><p className="placeholder-note">All legal, financial, tax, and compliance content requires review before publication.</p></div></main>;
}
