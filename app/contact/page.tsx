import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Contact", description: "Contact Acting Eye by email or toll-free phone." };

export default function ContactPage() {
  return (
    <main id="main" className="page-main">
      <PageHeading
        index="08"
        section="CONTACT"
        eyebrow="A conversation begins here"
        title={<>We would love to <em>listen.</em></>}
        intro="For enquiries, contact Acting Eye by email or call our toll-free number."
        statusLabel="DIRECT CONTACT"
      />
      <div className="page-content">
        <ul className="document-list">
          <li>
            <span>Email</span>
            <a className="contact-method" href="mailto:helpactingeye@organisation.org">
              helpactingeye@organisation.org
            </a>
          </li>
          <li>
            <span>Toll-free number</span>
            <a className="contact-method" href="tel:18001805220">1800-180-5220</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
