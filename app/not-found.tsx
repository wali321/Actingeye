import Link from "next/link";

export default function NotFound() {
  return <main id="main" className="error-page"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>This page took another path.</h1><p>The page may have moved, or the address may be incomplete. Let&apos;s get you back to familiar ground.</p><Link className="arrow-link" href="/">Back to the homepage <span aria-hidden="true">↗</span></Link></main>;
}
