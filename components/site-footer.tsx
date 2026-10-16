import Link from "next/link";

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
        <Link className="footer-brand" href="/"><span aria-hidden="true">✳</span><span>[Organization name]<small>COMMUNITY · PLACE · POSSIBILITY</small></span></Link>
        <p>A space for your mission, built on clarity, dignity, and accountability.</p>
        <Link className="footer-cta" href="/get-involved">Find your way in <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="footer-bottom">
        <nav aria-label="Footer navigation">{footerLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
        <div className="footer-legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><span>© [Organization name]</span></div>
      </div>
      <p className="footer-note">STARTER TEMPLATE · Organization details, legal information, and contact channels require confirmation.</p>
    </footer>
  );
}
