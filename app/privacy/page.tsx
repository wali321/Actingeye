import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Privacy", description: "Privacy policy placeholder requiring legal review." };

export default function PrivacyPage() {
  return <main id="main" className="page-main"><PageHeading index="09" eyebrow="Privacy matters" title={<>Your information is <em>yours.</em></>} intro="This is not a complete privacy policy. The organization must document its actual data practices and obtain legal review before launch." /><article className="page-content"><div className="status-callout">LEGAL PLACEHOLDER · Do not publish as a final policy. No mailing list, contact form, analytics, donation system, or other collection service has been configured by this starter.</div><ul className="document-list"><li><span>Data controller and contact</span><span>[Add legal entity and responsible contact]</span></li><li><span>Information collected and purposes</span><span>[Document actual services]</span></li><li><span>Retention, processors, and transfers</span><span>[Add reviewed details]</span></li><li><span>Rights and complaint route</span><span>[Add applicable legal process]</span></li><li><span>Effective date and updates</span><span>[Add after legal review]</span></li></ul></article></main>;
}
