import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Our work" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get involved" },
  { href: "/transparency", label: "Transparency" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="footer-brand" href="/">
          <Image
            className="brand-icon"
            src="/logo.png"
            alt=""
            width={48}
            height={48}
          />
          <span>Acting Eye<small>LEARNING · OPPORTUNITY · COMMUNITY</small></span>
        </Link>
        <p>Education and digital opportunity, shaped with clarity, dignity, and accountability.</p>
        <Link className="footer-cta" href="/get-involved">Find your way in <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="footer-bottom">
        <nav aria-label="Footer navigation">{footerLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
        <div className="footer-legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><span>© 2026 Acting Eye</span></div>
      </div>
      <p className="footer-note">
        CONTACT · <a href="mailto:helpactingeye@organisation.org">helpactingeye@organisation.org</a>
        {" · "}<a href="tel:18001805220">1800-180-5220</a>
      </p>
    </footer>
  );
}
