import Link from "next/link";

export function ContentPanel({
  label,
  title,
  text,
  href = "/contact",
  linkText = "Ask us about this",
}: {
  label: string;
  title: string;
  text: string;
  href?: string;
  linkText?: string;
}) {
  return (
    <article className="content-panel">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      <p>{text}</p>
      <Link className="arrow-link" href={href}>{linkText} <span aria-hidden="true">↗</span></Link>
    </article>
  );
}
