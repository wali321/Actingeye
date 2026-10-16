import type { Metadata } from "next";
import Link from "next/link";
import { LearningProgressChart } from "@/components/impact-charts";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Transparency",
  description: "Acting Eye's approach to clear, responsible impact reporting.",
};

export default function TransparencyPage() {
  return (
    <main id="main" className="page-main">
      <PageHeading
        index="07"
        section="TRANSPARENCY"
        eyebrow="Accountability is visible"
        title={<>Open information. <em>Clear context.</em></>}
        intro="Trust grows when results are shared with the methods, limits, and lived experience behind them."
      />
      <article className="page-content">
        <div className="status-callout">
          Impact figures are pending verification. Audited financial statements and public governance
          documents are not published here.
        </div>
        <section className="transparency-charts" aria-labelledby="transparency-charts-title">
          <div className="transparency-charts-heading">
            <p className="eyebrow">FY 2025–26 · Verification pending</p>
            <h2 id="transparency-charts-title">
              The numbers, <em>in context.</em>
            </h2>
            <p>
              Course completion figures await verification against organizational records.
            </p>
          </div>
          <LearningProgressChart />
        </section>
        <div className="route-actions">
          <Link className="route-action" href="/impact">Explore the impact dashboard ↗</Link>
          <Link className="route-action route-action-secondary" href="/contact">Contact Acting Eye ↗</Link>
        </div>
      </article>
    </main>
  );
}
