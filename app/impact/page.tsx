import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Impact",
  description: "Explore Acting Eye's illustrative impact dashboard and reporting approach.",
};

const metrics = [
  {
    value: "1,250",
    label: "Learners reached",
    detail: "Learners engaging with education, digital literacy, and learning resources.",
  },
  {
    value: "12",
    label: "Learning communities",
    detail: "Schools and community spaces connected through learning initiatives.",
  },
  {
    value: "180",
    label: "Course completions",
    detail: "Learners completing an introductory digital skills or coding pathway.",
  },
  {
    value: "68%",
    label: "Learning pathway completion",
    detail: "180 of 265 learners complete a structured course in this sample dataset.",
  },
] as const;

const allocations = [
  { label: "Programs & learning resources", value: 78, detail: "Curriculum, learning spaces, books, and mentor support." },
  { label: "Operations", value: 12, detail: "People and systems supporting program delivery." },
  { label: "Community outreach", value: 7, detail: "Connecting learners, educators, and partners." },
  { label: "Reserve", value: 3, detail: "Planning for continuity and unexpected needs." },
] as const;

const principles = [
  {
    title: "Clear measures",
    detail: "Define what each number counts and who it represents.",
  },
  {
    title: "Honest context",
    detail: "Share reporting periods, methods, and limitations alongside results.",
  },
  {
    title: "Respectful stories",
    detail: "Center learners' perspectives, privacy, and informed consent.",
  },
  {
    title: "Open learning",
    detail: "Use feedback and evidence to understand what can improve.",
  },
] as const;

export default function ImpactPage() {
  return (
    <main id="main" className="page-main">
      <header className="impact-page-hero">
        <div className="section-kicker">
          <span>04 / IMPACT &amp; TRANSPARENCY</span>
          <span>HACKATHON DEMO · SAMPLE DATA</span>
        </div>
        <p className="eyebrow">Evidence, openly shared</p>
        <h1>Measure what matters. <em>Then share it openly.</em></h1>
        <p className="impact-page-intro">
          Good reporting makes learning visible. This sample dashboard shows how learner reach,
          course progress, and resource planning could be presented.
        </p>
        <p className="prototype-banner" role="note">
          Illustrative dataset · FY 2025–26 · Figures and budget split are fictional examples, not
          verified Acting Eye results.
        </p>
      </header>

      <section className="impact-module impact-scoreboard page-content" aria-labelledby="scoreboard-title">
        <div className="impact-module-heading">
          <div>
            <p className="eyebrow">01 / Learning outcomes</p>
            <h2 id="scoreboard-title">Progress, made <em>visible.</em></h2>
          </div>
          <p>Sample indicators for digital learning and community access.</p>
        </div>
        <div className="metric-grid">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <p className="metric-value">{metric.value}</p>
              <h3>{metric.label}</h3>
              <p className="metric-detail">{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="impact-finance section-pad" aria-labelledby="finance-title">
        <div className="section-kicker section-kicker-light">
          <span>02 / FINANCIAL STEWARDSHIP</span>
          <span>ILLUSTRATIVE BUDGET SPLIT</span>
        </div>
        <div className="impact-module-heading impact-module-heading-light">
          <div>
            <p className="eyebrow">A model for clear reporting</p>
            <h2 id="finance-title">Resources with <em>purpose.</em></h2>
          </div>
          <p>A sample allocation showing how a future financial summary might communicate spending priorities.</p>
        </div>
        <div className="allocation-list" aria-label="Illustrative sample budget allocation">
          {allocations.map((allocation) => (
            <div className="allocation-row" key={allocation.label}>
              <div className="allocation-title">
                <h3>{allocation.label}</h3>
                <span>{allocation.value}%</span>
              </div>
              <div
                className="allocation-track"
                role="img"
                aria-label={`${allocation.label}: sample allocation of ${allocation.value} percent`}
              >
                <span style={{ width: `${allocation.value}%` }} />
              </div>
              <p>{allocation.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="impact-ripple section-pad" aria-labelledby="ripple-title">
        <div className="section-kicker">
          <span>03 / BEYOND THE NUMBERS</span>
          <span>LEARNING IN PRACTICE</span>
        </div>
        <div className="ripple-grid">
          <div className="ripple-copy">
            <p className="eyebrow">The human side of learning</p>
            <h2 id="ripple-title">Access opens the <em>door.</em></h2>
            <blockquote>
              <p>A first computer can become a place to practise, make, and discover what comes next.</p>
              <footer>Illustrative reflection · not a learner testimonial</footer>
            </blockquote>
            <p className="ripple-supporting">
              Numbers can describe participation and progress. Listening to learners helps explain
              which resources, teaching approaches, and opportunities make learning meaningful.
            </p>
          </div>
          <div className="portrait-placeholder" role="img" aria-label="Abstract illustration representing learning and growth.">
            <span className="portrait-orbit portrait-orbit-one" />
            <span className="portrait-orbit portrait-orbit-two" />
            <span className="portrait-sun" />
            <span className="portrait-head" />
            <span className="portrait-shoulders" />
            <span className="portrait-caption">LEARNING<br />GROWS WITH OPPORTUNITY</span>
          </div>
        </div>
      </section>

      <section className="impact-accountability section-pad" aria-labelledby="accountability-title">
        <div className="section-kicker">
          <span>04 / ACCOUNTABILITY</span>
          <span>OUR PRINCIPLES</span>
        </div>
        <div className="impact-module-heading">
          <div>
            <p className="eyebrow">Trust is built through practice</p>
            <h2 id="accountability-title">Care in every <em>detail.</em></h2>
          </div>
          <p>Good reporting is specific, respectful, and clear about what the evidence can show.</p>
        </div>
        <div className="accountability-grid">
          {principles.map((principle) => (
            <article className="accountability-item" key={principle.title}>
              <span className="accountability-check" aria-hidden="true">✓</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
