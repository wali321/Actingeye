import type { Metadata } from "next";
import { ContentPanel } from "@/components/content-panel";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Get involved", description: "Ways to contribute time, skills, partnership, and support." };

export default function GetInvolvedPage() {
  return (
    <main id="main" className="page-main">
      <PageHeading
        index="05"
        section="GET INVOLVED"
        eyebrow="Learning is shared work"
        title={<>Make room for <em>possibility.</em></>}
        intro="Education grows stronger when learners, educators, mentors, and communities shape it together."
      />
      <div className="page-content">
        <div className="content-grid">
          <ContentPanel label="LEARN" title="Explore the work" text="Discover education and digital learning initiatives from Acting Eye." href="/programs" linkText="Explore initiatives" />
          <ContentPanel label="VOLUNTEER" title="Share your skills" text="Bring your experience in teaching, technology, mentoring, or community work." href="/contact" linkText="Contact the team" />
          <ContentPanel label="PARTNER" title="Build together" text="Connect with Acting Eye about expanding access to learning and digital opportunity." href="/contact" linkText="Start a conversation" />
          <ContentPanel label="SUPPORT" title="Stay connected" text="Reach the team by email or call the toll-free number." href="/contact" linkText="Get in touch" />
        </div>
      </div>
    </main>
  );
}
