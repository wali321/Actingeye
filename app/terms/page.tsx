import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Site information",
  description: "Information about the Acting Eye hackathon demo.",
};

export default function TermsPage() {
  return (
    <main id="main" className="page-main">
      <PageHeading
        index="10"
        section="SITE INFORMATION"
        eyebrow="About this website"
        title={<>A space for learning and <em>possibility.</em></>}
        intro="This website shares information about Acting Eye's education and digital opportunity work."
      />
      <article className="page-content">
        <p className="body-large">
          The impact dashboard demonstrates how program information can be shared. This site does
          not process donations, enrollments, or service agreements.
        </p>
      </article>
    </main>
  );
}
