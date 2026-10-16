import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { ContentPanel } from "@/components/content-panel";

export const metadata: Metadata = { title: "About", description: "Add verified information about the organization's mission, people, and governance." };

export default function AboutPage() {
  return <main id="main" className="page-main"><PageHeading index="01" eyebrow="Start with the people" title={<>The story starts with <em>listening.</em></>} intro="Use this page to explain why the organization exists, what it believes, and how communities shape its work. Details below are content prompts—not claims." /><div className="page-content"><div className="content-grid"><ContentPanel label="OUR MISSION" title="[Add the mission]" text="Write one plain-language sentence about the change the organization works toward, validated by its team and community partners." /><ContentPanel label="OUR STORY" title="[Add the origin story]" text="Share the organization’s history with dates and names checked. Credit community leadership, not a single heroic founder." /><ContentPanel label="OUR PEOPLE" title="[Add the team]" text="Add names, roles, and biographies only after each person has approved the details and photograph." /><ContentPanel label="GOVERNANCE" title="[Add governance details]" text="List the board and governance practices using current, approved information." href="/transparency" linkText="See transparency" /></div><div className="status-callout">CONTENT STATUS · Organization name, mission, history, geography, leadership, and governance have not been supplied. Confirm each before publication.</div><div className="route-actions"><Link className="route-action" href="/programs">Explore focus areas ↗</Link><Link className="route-action route-action-secondary" href="/get-involved">Get involved ↗</Link></div></div></main>;
}
