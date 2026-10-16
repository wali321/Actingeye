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
      <div className="page-content contact-content">
        <div className="contact-layout">
          <section className="contact-methods" aria-labelledby="contact-methods-title">
            <p className="eyebrow">Direct contact</p>
            <h2 id="contact-methods-title">Choose how to <em>connect.</em></h2>
            <div className="contact-options">
              <a className="contact-option" href="mailto:helpactingeye@organisation.org">
                <span className="contact-option-label">01 / EMAIL</span>
                <span className="contact-option-value">helpactingeye@organisation.org</span>
                <span className="contact-option-arrow" aria-hidden="true">↗</span>
              </a>
              <a className="contact-option" href="tel:18001805220">
                <span className="contact-option-label">02 / TOLL-FREE</span>
                <span className="contact-option-value">1800-180-5220</span>
                <span className="contact-option-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
          <aside className="contact-headquarters" aria-label="Headquarters location">
            <p className="eyebrow">Headquarters</p>
            <p className="contact-country">Switzerland</p>
            <span className="contact-location-rule" aria-hidden="true" />
            <p className="contact-location-note">
              For enquiries about education, digital opportunity, or ways to work together, get in touch.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
