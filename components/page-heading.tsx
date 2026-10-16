export function PageHeading({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
}) {
  return (
    <header className="page-heading">
      <div className="section-kicker"><span>{index} / [SECTION]</span><span>CONTENT PLACEHOLDER</span></div>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro">{intro}</p>
    </header>
  );
}
