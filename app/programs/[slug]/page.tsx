import type { Metadata } from "next";
import Image from "next/image";
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
  if (slug === "program-two") {
    return {
      title: "A Computer Laboratory for a School",
      description: "Acting Eye established a computer laboratory at a school in Africa to support access to computers and digital learning.",
    };
  }
  return { title: "Program details", description: "A placeholder for verified program information." };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!programSlugs.includes(slug)) notFound();
  if (slug === "program-two") {
    return (
      <main id="main" className="page-main">
        <PageHeading
          index="02"
          eyebrow="Digital learning · school partnership"
          title={<>A computer laboratory for a <em>school.</em></>}
          intro="Acting Eye established a computer laboratory at a school in Africa, creating a dedicated space for students to access computers and explore digital learning."
          statusLabel="SCHOOL INITIATIVE"
        />
        <article className="page-content program-detail">
          <figure className="program-detail-figure">
            <Image
              src="/lab.jpg"
              alt="Students seated at desktop computers in a school computer laboratory."
              width={736}
              height={491}
              sizes="(max-width: 900px) 100vw, 900px"
            />
            <figcaption>School computer laboratory · Africa. School and country details to be confirmed.</figcaption>
          </figure>
          <div className="program-detail-copy">
            <p className="eyebrow">Access to technology is a starting point</p>
            <h2>A place to explore, practise, and learn.</h2>
            <p>
              A dedicated computer laboratory gives students a place to work directly with
              technology as part of their learning. The school and country have not been identified
              in the information provided, so those details are intentionally left broad.
            </p>
            <p>
              The space can support digital learning and practical computer use. Details about
              equipment, connectivity, lessons, local educators, and ongoing maintenance can be
              added once confirmed with the school community.
            </p>
          </div>
          <ul className="document-list">
            <li><span>Initiative</span><span>School computer laboratory</span></li>
            <li><span>Location</span><span>A school in Africa · country and school name to confirm</span></li>
            <li><span>Learning outcomes</span><span>Not provided · add only with supporting evidence</span></li>
            <li><span>Image permissions</span><span>Confirm participant/guardian consent and image rights before publication</span></li>
          </ul>
          <div className="status-callout">
            This profile reflects the initiative details supplied so far. No student counts, dates,
            device totals, learning outcomes, school name, or country have been assumed.
          </div>
          <div className="route-actions">
            <Link className="route-action" href="/programs">All initiatives ↗</Link>
            <Link className="route-action route-action-secondary" href="/get-involved">Get involved ↗</Link>
          </div>
        </article>
      </main>
    );
  }

  return (
    <main id="main" className="page-main">
      <PageHeading
        index="02"
        eyebrow="Program profile"
        title={<>[Program name]<br /><em>Details to come.</em></>}
        intro="This starter profile is intentionally incomplete. Add confirmed program information before describing services, locations, participants, or results."
      />
      <div className="page-content">
        <ul className="document-list">
          <li><span>Community priorities</span><span>[Add verified account]</span></li>
          <li><span>Approach and activities</span><span>[Add verified account]</span></li>
          <li><span>Outcomes and evidence</span><span>[Add metric, period, source, and verification date]</span></li>
          <li><span>How to take part</span><span>[Add approved pathway]</span></li>
        </ul>
        <div className="status-callout">This page does not describe an actual program yet. Confirm the program name, active status, and consent for any participant story or image.</div>
        <div className="route-actions">
          <Link className="route-action" href="/programs">All focus areas ↗</Link>
          <Link className="route-action route-action-secondary" href="/get-involved">Get involved ↗</Link>
        </div>
      </div>
    </main>
  );
}
