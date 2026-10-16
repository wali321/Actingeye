import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Terms", description: "Terms of use placeholder requiring legal review." };

export default function TermsPage() {
  return <main id="main" className="page-main"><PageHeading index="10" eyebrow="Terms of use" title={<>Clear expectations, <em>fairly stated.</em></>} intro="This page is a placeholder and is not legal advice or a complete agreement." /><article className="page-content"><div className="status-callout">LEGAL PLACEHOLDER · Confirm the legal entity, jurisdiction, site functionality, user obligations, intellectual property, donation terms, dispute process, and effective date with counsel.</div><ul className="document-list"><li><span>Legal entity and jurisdiction</span><span>[Confirm]</span></li><li><span>Site use and content</span><span>[Draft and review]</span></li><li><span>Donations and refunds</span><span>[Add only if payments are enabled]</span></li><li><span>Liability and dispute terms</span><span>[Legal review required]</span></li></ul></article></main>;
}
