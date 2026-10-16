import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Our work", description: "Review the organization's confirmed program areas and approach." };

const programs = [
  { href: "/programs/program-one", title: "[Program name]", place: "[Geography and community to confirm]", text: "Add a verified description of the challenge, community priorities, activities, and intended outcomes." },
  { href: "/programs/program-two", title: "[Program name]", place: "[Geography and community to confirm]", text: "Add a second program only if the organization confirms that it exists and is active." },
];

export default function ProgramsPage() {
  return <main id="main" className="page-main"><PageHeading index="02" eyebrow="The work, in context" title={<>Focus shaped by <em>community.</em></>} intro="Every program shown here is a starter record. Replace it with confirmed work, partner-approved language, and sourced outcomes." /><div className="page-content"><div className="content-grid">{programs.map((program, index) => <article className="content-panel" key={program.href}><span className="eyebrow">FOCUS AREA / 0{index + 1}</span><h2>{program.title}</h2><p className="program-place">{program.place}</p><p>{program.text}</p><Link className="arrow-link" href={program.href}>Explore this focus area <span aria-hidden="true">↗</span></Link></article>)}</div><div className="status-callout">No locations, activities, or outcomes have been assumed. Delete unused starter records when the real program inventory is known.</div></div></main>;
}
