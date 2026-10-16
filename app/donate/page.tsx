import type { Metadata } from "next";
import { DonationOptions } from "@/components/donation-options";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Support Acting Eye", description: "Explore sample giving options for Acting Eye." };

export default function DonatePage() {
  return (
    <main id="main" className="page-main">
      <PageHeading
        index="06"
        section="SUPPORT"
        eyebrow="Support learning"
        title={<>Make giving <em>thoughtful.</em></>}
        intro="Choose a sample amount to preview the giving experience and support education and digital opportunity."
      />
      <div className="page-content donate-layout">
        <div><DonationOptions /></div>
        <aside className="donate-aside">
          <p className="eyebrow">Giving with care</p>
          <h2>Learning takes a community.</h2>
          <p>Your support can help widen access to books, digital skills, and learning opportunities.</p>
          <p>For questions, contact Acting Eye at <a href="mailto:helpactingeye@organisation.org">helpactingeye@organisation.org</a>.</p>
        </aside>
      </div>
    </main>
  );
}
