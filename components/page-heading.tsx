export function PageHeading({
  index,
  eyebrow,
  title,
  intro,
  statusLabel = "CONTENT PLACEHOLDER",
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  statusLabel?: string;
}) {
  return (
    <header className="page-heading">
      <div className="section-kicker"><span>{index} / [SECTION]</span><span>{statusLabel}</span></div>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro">{intro}</p>
    </header>
  );
}
