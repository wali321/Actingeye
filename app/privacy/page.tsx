import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the Acting Eye demonstration website.",
};

export default function PrivacyPage() {
  return (
    <main id="main" className="page-main">
      <PageHeading
        index="09"
        section="PRIVACY"
        eyebrow="Your information is yours"
        title={<>A thoughtful approach to <em>privacy.</em></>}
        intro="This demonstration site does not provide accounts, newsletter sign-up, or donation checkout."
      />
      <article className="page-content">
        <p className="body-large">
          You can browse without creating an account. General enquiries can be sent to Acting Eye by
          email or phone.
        </p>
        <ul className="document-list">
          <li><span>Contact</span><a className="contact-method" href="mailto:helpactingeye@organisation.org">helpactingeye@organisation.org</a></li>
        </ul>
      </article>
    </main>
  );
}
