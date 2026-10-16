import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeading } from "@/components/page-heading";

const programSlugs = ["program-one", "program-two"];

export function generateStaticParams() {
  return programSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!programSlugs.includes(slug)) return { title: "Program not found" };
  return { title: "Program details", description: "A placeholder for verified program information." };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!programSlugs.includes(slug)) notFound();
  return <main id="main" className="page-main"><PageHeading index="02" eyebrow="Program profile" title={<>[Program name]<br /><em>Details to come.</em></>} intro="This starter profile is intentionally incomplete. Add confirmed program information before describing services, locations, participants, or results." /><div className="page-content"><ul className="document-list"><li><span>Community priorities</span><span>[Add verified account]</span></li><li><span>Approach and activities</span><span>[Add verified account]</span></li><li><span>Outcomes and evidence</span><span>[Add metric, period, source, and verification date]</span></li><li><span>How to take part</span><span>[Add approved pathway]</span></li></ul><div className="status-callout">This page does not describe an actual program yet. Confirm the program name, active status, and consent for any participant story or image.</div><div className="route-actions"><Link className="route-action" href="/programs">All focus areas ↗</Link><Link className="route-action route-action-secondary" href="/get-involved">Get involved ↗</Link></div></div></main>;
}
