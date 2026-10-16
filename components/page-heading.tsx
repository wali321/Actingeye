export function PageHeading({
  index,
  section = "ACTING EYE",
  eyebrow,
  title,
  intro,
  statusLabel = "LEARNING · OPPORTUNITY · COMMUNITY",
}: {
  index: string;
  section?: string;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  statusLabel?: string;
}) {
  return (
    <header className="page-heading">
      <div className="section-kicker"><span>{index} / {section}</span><span>{statusLabel}</span></div>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro">{intro}</p>
    </header>
  );
}
