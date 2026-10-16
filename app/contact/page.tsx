import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Contact", description: "Contact information to be added after it is confirmed by the organization." };

export default function ContactPage() {
  return <main id="main" className="page-main"><PageHeading index="08" eyebrow="A conversation begins here" title={<>We would love to <em>listen.</em></>} intro="Add the organization's approved contact routes and response expectations. No email, address, or phone number has been invented." /><div className="page-content"><div className="status-callout">CONTACT DETAILS NOT PROVIDED · Add a monitored email address, physical address if appropriate, and any accessibility or language support information. Do not publish personal contact details without consent.</div><ul className="document-list"><li><span>General enquiries</span><span>[Add monitored address]</span></li><li><span>Partnership enquiries</span><span>[Add approved route]</span></li><li><span>Privacy and data requests</span><span>[Add responsible contact]</span></li></ul><p className="placeholder-note">A contact form is not enabled because no secure submission or mail-handling service has been configured.</p></div></main>;
}
