import type { Metadata } from "next";
import Link from "next/link";
import { ImpactCharts } from "@/components/impact-charts";
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
          This demonstration includes illustrative impact figures. Verified results, audited
          financial statements, and public governance documents are not part of this site.
        </div>
        <section className="transparency-charts" aria-labelledby="transparency-charts-title">
          <div className="transparency-charts-heading">
            <p className="eyebrow">Illustrative demo data · FY 2025–26</p>
            <h2 id="transparency-charts-title">
              The numbers, <em>in context.</em>
            </h2>
            <p>
              Sample course progress and a fictional resource allocation are shown for demonstration
              only; neither represents verified outcomes or audited spending.
            </p>
          </div>
          <ImpactCharts />
        </section>
        <div className="route-actions">
          <Link className="route-action" href="/impact">Explore the impact dashboard ↗</Link>
          <Link className="route-action route-action-secondary" href="/contact">Contact Acting Eye ↗</Link>
        </div>
      </article>
    </main>
  );
}
