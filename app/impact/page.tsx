import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact & Transparency",
  description:
    "Explore an illustrative prototype of education and digital empowerment impact reporting. Figures, financial allocations, and testimonials are dummy data, not verified claims.",
};

const metrics = [
  {
    value: "12,400+",
    label: "Learners Empowered",
    detail: "Sample definition: learners completing at least one digital literacy or coding course.",
    period: "Illustrative reporting period",
    source: "Dummy data · not verified",
    lastVerified: "Not verified",
  },
  {
    value: "68%",
    label: "Scholarship Persistence Rate",
    detail: "Sample definition: recipients remaining enrolled in formal education or graduating.",
    period: "Illustrative reporting period",
    source: "Dummy data · regional comparison omitted",
    lastVerified: "Not verified",
  },
  {
    value: "142",
    label: "Community Learning Hubs",
    detail: "Sample definition: community spaces equipped with learning resources and training.",
    period: "Illustrative reporting period",
    source: "Dummy data · not verified",
    lastVerified: "Not verified",
  },
  {
    value: "89%",
    label: "Resource Accessibility Score",
    detail: "Sample definition: free learning resources reviewed against accessibility criteria.",
    period: "Illustrative reporting period",
    source: "Dummy data · WCAG compliance not verified",
    lastVerified: "Not verified",
  },
] as const;

const allocations = [
  { label: "Programs & Direct Impact", value: 78, detail: "Curriculum, infrastructure, scholarships, and mentor stipends." },
  { label: "Operations & Administration", value: 12, detail: "Staff, accounting, and operational systems." },
  { label: "Fundraising & Communications", value: 7, detail: "Supporter communications and fundraising." },
  { label: "Reserve & Contingency", value: 3, detail: "Illustrative reserve allocation." },
] as const;

const commitments = [
  {
    title: "Independent Audits",
    detail: "Sample commitment: annual third-party audit and a published executive summary.",
  },
  {
    title: "Impact Reports",
    detail: "Sample commitment: an annual report that shares outcomes, learning, and limitations.",
  },
  {
    title: "Open Data Pledge",
    detail: "Sample commitment: responsibly anonymized data sharing with approved partners.",
  },
  {
    title: "Beneficiary Feedback Loop",
    detail: "Sample commitment: collect learner feedback and report improvement areas.",
  },
] as const;

const reports = [
  { title: "2025 Annual Impact Report", size: "4.2 MB" },
  { title: "2025 Audited Financial Statement", size: "1.8 MB" },
  { title: "Program Data Methodology & Limitations", size: "900 KB" },
  { title: "Accessibility Statement", size: "450 KB" },
] as const;

export default function ImpactPage() {
  return (
    <main id="main" className="page-main">
      <header className="impact-page-hero">
        <div className="section-kicker">
          <span>04 / IMPACT &amp; TRANSPARENCY</span>
          <span>PROTOTYPE · SAMPLE DATA</span>
        </div>
        <p className="eyebrow">Evidence, openly shared</p>
        <h1>Measure what matters. <em>Then share it openly.</em></h1>
        <p className="impact-page-intro">
          We believe that real change requires more than good intentions—it requires rigorous
          measurement and radical transparency. Below is a snapshot of our reach, our financial
          stewardship, and the independent voices that hold us accountable. These figures represent
          sample prototype data only; no verified reporting period or source has been supplied.
        </p>
        <p className="prototype-banner" role="note">
          Prototype notice · All numbers, financial allocations, commitments, and the learner quote
          on this page are illustrative dummy content, not verified organizational claims.
        </p>
      </header>

      <section className="impact-module impact-scoreboard page-content" aria-labelledby="scoreboard-title">
        <div className="impact-module-heading">
          <div>
            <p className="eyebrow">01 / Key impact metrics</p>
            <h2 id="scoreboard-title">A snapshot of <em>possibility.</em></h2>
          </div>
          <p>Sample indicators for a future report. Replace each figure with evidence, a defined period, and a review date.</p>
        </div>
        <div className="metric-grid">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <p className="metric-value">{metric.value}</p>
              <h3>{metric.label}</h3>
              <p className="metric-detail">{metric.detail}</p>
              <dl className="metric-provenance">
                <div><dt>Period</dt><dd>{metric.period}</dd></div>
                <div><dt>Source</dt><dd>{metric.source}</dd></div>
                <div><dt>Last verified</dt><dd>{metric.lastVerified}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="impact-finance section-pad" aria-labelledby="finance-title">
        <div className="section-kicker section-kicker-light">
          <span>02 / FINANCIAL TRANSPARENCY</span>
          <span>ILLUSTRATIVE ALLOCATION · NOT AUDITED</span>
        </div>
        <div className="impact-module-heading impact-module-heading-light">
          <div>
            <p className="eyebrow">Where support could go</p>
            <h2 id="finance-title">Financial <em>stewardship.</em></h2>
          </div>
          <p>We treat every contribution as a trust. The percentages below are sample data for the prototype, not actual organizational spending.</p>
        </div>
        <div className="allocation-list" aria-label="Illustrative sample financial allocations">
          {allocations.map((allocation) => (
            <div className="allocation-row" key={allocation.label}>
              <div className="allocation-title">
                <h3>{allocation.label}</h3>
                <span>{allocation.value}%</span>
              </div>
              <div
                className="allocation-track"
                role="img"
                aria-label={`${allocation.label}: illustrative ${allocation.value} percent`}
              >
                <span style={{ width: `${allocation.value}%` }} />
              </div>
              <p>{allocation.detail}</p>
            </div>
          ))}
        </div>
        <p className="finance-footnote">
          ILLUSTRATIVE ONLY · Audited statements were not supplied. Replace [Auditor Name Placeholder]
          and publish approved statements before making any financial disclosure.
        </p>
      </section>

      <section className="impact-ripple section-pad" aria-labelledby="ripple-title">
        <div className="section-kicker">
          <span>03 / QUALITATIVE IMPACT</span>
          <span>ILLUSTRATIVE LEARNER VOICE</span>
        </div>
        <div className="ripple-grid">
          <div className="ripple-copy">
            <p className="eyebrow">The human texture behind the data</p>
            <h2 id="ripple-title">Beyond the <em>numbers.</em></h2>
            <blockquote>
              <p>“Before this program, I had never touched a computer. Now I am building my own website for my tailoring business. I am not just learning—I am earning.”</p>
              <footer>Illustrative quote · not a real learner testimonial · [Region placeholder]</footer>
            </blockquote>
            <p className="ripple-supporting">
              Metrics tell us <em>what</em> is happening. Stories can help explain <em>why</em> it
              matters. The interview and program-learning process described here is a sample
              framework, not a verified organizational practice.
            </p>
          </div>
          <div className="portrait-placeholder" role="img" aria-label="Abstract portrait placeholder; no real learner is depicted.">
            <span className="portrait-orbit portrait-orbit-one" />
            <span className="portrait-orbit portrait-orbit-two" />
            <span className="portrait-sun" />
            <span className="portrait-head" />
            <span className="portrait-shoulders" />
            <span className="portrait-caption">ILLUSTRATION<br />NO REAL PERSON DEPICTED</span>
          </div>
        </div>
      </section>

      <section className="impact-accountability section-pad" aria-labelledby="accountability-title">
        <div className="section-kicker">
          <span>04 / ACCOUNTABILITY &amp; GOVERNANCE</span>
          <span>SAMPLE FRAMEWORK</span>
        </div>
        <div className="impact-module-heading">
          <div>
            <p className="eyebrow">Trust is built through practice</p>
            <h2 id="accountability-title">Our commitment to <em>accountability.</em></h2>
          </div>
          <p>Transparency is not a marketing tactic. It is an operational requirement—and every statement below must be confirmed before publication.</p>
        </div>
        <div className="accountability-grid">
          {commitments.map((commitment) => (
            <article className="accountability-item" key={commitment.title}>
              <span className="accountability-check" aria-hidden="true">✓</span>
              <div>
                <h3>{commitment.title}</h3>
                <p>{commitment.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="impact-reports section-pad" aria-labelledby="reports-title">
        <div className="section-kicker section-kicker-light">
          <span>05 / REPORTS &amp; RESOURCES</span>
          <span>FILES NOT PROVIDED</span>
        </div>
        <div className="impact-module-heading impact-module-heading-light">
          <div>
            <p className="eyebrow">Further reading</p>
            <h2 id="reports-title">Read the full <em>details.</em></h2>
          </div>
          <p>These report names and file sizes are placeholders. No files were supplied, so downloads are not enabled.</p>
        </div>
        <ul className="report-list">
          {reports.map((report) => (
            <li key={report.title}>
              <span className="report-file-icon" aria-hidden="true">PDF</span>
              <span className="report-name">{report.title}<small>Illustrative listing · {report.size} placeholder</small></span>
              <span className="report-unavailable" aria-label={`${report.title} download unavailable`}>Not available</span>
            </li>
          ))}
        </ul>
        <p className="report-language">[Download] · Available in English and [language placeholder] — sample text only.</p>
      </section>

      <section className="impact-final-note section-pad" aria-label="Prototype disclaimer">
        <p className="eyebrow">A note on this prototype</p>
        <p>All figures, financial allocations, commitments, report listings, and testimonials on this page are illustrative placeholders for prototype purposes. Verified data, audited statements, and real beneficiary stories will replace them upon organizational launch.</p>
        <Link className="arrow-link" href="/transparency">Visit transparency <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
