import type { Metadata } from "next";
import { ContentPanel } from "@/components/content-panel";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Get involved", description: "Ways to contribute time, skills, partnership, and support." };

export default function GetInvolvedPage() {
  return <main id="main" className="page-main"><PageHeading index="05" eyebrow="Many ways to take part" title={<>Make a little room for <em>change.</em></>} intro="Choose a pathway that fits. The details below are intentionally open until the organization confirms capacity, eligibility, and how it wants to work with people." /><div className="page-content"><div className="content-grid"><ContentPanel label="GIVE" title="Support the work" text="A payment provider and approved donation terms are not yet configured. Do not accept or collect payment details through this starter site." href="/donate" linkText="View giving status" /><ContentPanel label="VOLUNTEER" title="Offer your time" text="Add confirmed roles, eligibility, safeguarding requirements, and a reviewed point of contact." /><ContentPanel label="PARTNER" title="Build a partnership" text="Describe partnership criteria and the best contact route once the organization has approved them." /><ContentPanel label="FUNDRAISE" title="Invite others in" text="Add any fundraising guidance only after financial controls and approved messaging are in place." /></div><div className="status-callout">Volunteer onboarding, safeguarding, payment, and partnership processes have not been supplied. Do not collect personal data until a secure, reviewed process exists.</div></div></main>;
}
