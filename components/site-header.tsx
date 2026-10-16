"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Our work" },
  { href: "/impact", label: "Impact" },
  { href: "/stories", label: "Stories" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Organization name — home" onClick={closeMenu}>
        <span className="wordmark-symbol" aria-hidden="true">✳</span>
        <span>[Organization name]<small>COMMUNITY · PLACE · POSSIBILITY</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
      </nav>
      <Link className="header-donate" href="/donate">Donate <span aria-hidden="true">↗</span></Link>
      <div className="mobile-nav">
        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuButton}
        >
          <span /><span /><span />
        </button>
        <nav id="mobile-menu" aria-label="Mobile navigation" hidden={!menuOpen}>
          {navigation.map((item) => <Link href={item.href} key={item.href} onClick={closeMenu}>{item.label}</Link>)}
          <Link href="/get-involved" onClick={closeMenu}>Get involved</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <Link className="mobile-donate" href="/donate" onClick={closeMenu}>Explore giving <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
