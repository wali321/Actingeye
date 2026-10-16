import type { Metadata } from "next";
import Image from "next/image";
import { LearningProgressChart } from "@/components/impact-charts";
import {
  impactHighlights,
  learningProgress,
  learningProgressPercent,
} from "@/components/impact-data";

export const metadata: Metadata = {
  title: "Impact",
  description: "Explore Acting Eye's impact reporting and approach to verification.",
};

const metrics = [
  ...impactHighlights,
  {
    value: `${learningProgressPercent}%`,
    label: "Learning pathway completion",
    detail: `${learningProgress.completed} of ${learningProgress.total} learners; figures are pending verification.`,
  },
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
          <span>FY 2025–26 · VERIFICATION PENDING</span>
        </div>
        <p className="eyebrow">Evidence, openly shared</p>
        <h1>The difference we <em>make.</em></h1>
        <p className="impact-page-intro">
          Every opportunity opens a door. Explore our efforts to make education more accessible
          through books, digital learning resources, and practical support for learners.
        </p>
        <p className="prototype-banner" role="note">
          Impact figures are pending verification against organizational records.
        </p>
      </header>

      <section className="impact-module impact-scoreboard page-content" aria-labelledby="scoreboard-title">
        <div className="impact-module-heading">
          <div>
            <p className="eyebrow">01 / Learning resources</p>
            <h2 id="scoreboard-title">Every effort opens a <em>door.</em></h2>
          </div>
          <p>Counts for books distributed, laptops supported, and learners supported; verification is pending.</p>
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
        <div className="impact-progress-chart">
          <LearningProgressChart />
        </div>
      </section>

      <section className="impact-ripple section-pad" aria-labelledby="ripple-title">
        <div className="section-kicker">
          <span>02 / BEYOND THE NUMBERS</span>
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
          <figure className="impact-illustration">
            <Image
              src="/writing.jpg"
              alt="A person writing notes on a document at a desk."
              fill
              sizes="(max-width: 680px) 100vw, 35vw"
              className="impact-writing-image"
            />
            <figcaption className="impact-image-caption">
              REFLECTION · LEARNING · WHAT COMES NEXT
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="impact-accountability section-pad" aria-labelledby="accountability-title">
        <div className="section-kicker">
          <span>03 / ACCOUNTABILITY</span>
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
