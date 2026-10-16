import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Support Acting Eye",
  description: "Contact Acting Eye to learn more about supporting education and digital opportunity.",
};

export default function DonatePage() {
  return (
    <main id="main" className="page-main">
      <PageHeading
        index="06"
        section="SUPPORT"
        eyebrow="Support learning"
        title={<>Make room for <em>opportunity.</em></>}
        intro="Education and digital skills grow stronger when more people have the chance to take part."
      />
      <div className="page-content">
        <div className="content-panel">
          <p className="eyebrow">Get in touch</p>
          <h2>Giving is not available online in this demo.</h2>
          <p>Contact Acting Eye to learn more about supporting education and digital opportunity.</p>
          <Link className="arrow-link" href="/contact">Contact Acting Eye <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </main>
  );
}
