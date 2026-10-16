"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  allocationData,
  learningProgress,
  learningProgressPercent,
} from "@/components/impact-data";

const progressData = [
  { status: "Completed", learners: learningProgress.completed },
  {
    status: "In progress",
    learners: learningProgress.total - learningProgress.completed,
  },
];

const progressConfig = {
  learners: {
    label: "Learners",
    color: "var(--forest)",
  },
} satisfies ChartConfig;

const allocationConfig = {
  programs: { label: "Programs & learning resources", color: "var(--forest)" },
  operations: { label: "Operations", color: "#819184" },
  outreach: { label: "Community outreach", color: "var(--clay)" },
  reserve: { label: "Reserve", color: "var(--gold)" },
} satisfies ChartConfig;

type ChartTone = "light" | "dark";

export function LearningProgressChart({ tone = "light" }: { tone?: ChartTone }) {
  return (
    <article className={`impact-chart-card impact-chart-card-${tone}`}>
      <div className="impact-chart-heading">
        <div>
          <p className="eyebrow">Learning pathway</p>
          <h3>Course progress</h3>
        </div>
        <span>{learningProgressPercent}% complete</span>
      </div>
      <ChartContainer
        config={progressConfig}
        className="impact-chart-frame"
        role="img"
        aria-label={`Illustrative course progress: ${learningProgress.completed} learners completed and ${learningProgress.total - learningProgress.completed} are in progress, out of ${learningProgress.total}.`}
      >
        <BarChart
          accessibilityLayer
          data={progressData}
          layout="vertical"
          margin={{ top: 4, right: 12, bottom: 4, left: 0 }}
        >
          <CartesianGrid horizontal={false} stroke="var(--line)" />
          <XAxis type="number" domain={[0, learningProgress.total]} hide />
          <YAxis
            type="category"
            dataKey="status"
            width={86}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted)", fontSize: 11 }}
          />
          <ChartTooltip
            cursor={{ fill: "rgba(47, 93, 80, 0.08)" }}
            content={<ChartTooltipContent labelFormatter={(label) => label} />}
          />
          <Bar
            dataKey="learners"
            fill="var(--color-learners)"
            radius={[0, 4, 4, 0]}
            barSize={18}
          />
        </BarChart>
      </ChartContainer>
      <p className="impact-chart-footnote">
        Illustrative cohort · {learningProgress.total} learners
      </p>
    </article>
  );
}

export function ResourceAllocationChart({ tone = "light" }: { tone?: ChartTone }) {
  return (
    <article className={`impact-chart-card impact-chart-card-${tone}`}>
      <div className="impact-chart-heading">
        <div>
          <p className="eyebrow">Resource allocation</p>
          <h3>Where support goes</h3>
        </div>
        <span>100% total</span>
      </div>
      <div className="impact-chart-donut-wrap">
        <ChartContainer
          config={allocationConfig}
          className="impact-chart-donut"
          role="img"
          aria-label="Illustrative resource allocation: 78 percent programs and learning resources, 12 percent operations, 7 percent community outreach, 3 percent reserve."
        >
          <PieChart accessibilityLayer>
            <ChartTooltip content={<ChartTooltipContent nameKey="bucket" />} />
            <Pie
              data={allocationData}
              dataKey="share"
              nameKey="bucket"
              innerRadius={49}
              outerRadius={72}
              paddingAngle={3}
              stroke="var(--paper)"
              strokeWidth={2}
              isAnimationActive={false}
            >
              {allocationData.map((item) => (
                <Cell
                  key={item.bucket}
                  fill={allocationConfig[item.bucket].color}
                />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="impact-chart-center" aria-hidden="true">
          <strong>100%</strong>
          <span>sample</span>
        </div>
      </div>
      <ul className="impact-chart-legend">
        {allocationData.map((item) => (
          <li key={item.bucket}>
            <span
              className="impact-chart-swatch"
              style={{ backgroundColor: allocationConfig[item.bucket].color }}
              aria-hidden="true"
            />
            <span>{item.label}</span>
            <strong>{item.share}%</strong>
          </li>
        ))}
      </ul>
      <p className="impact-chart-footnote">Illustrative split · not audited spending</p>
    </article>
  );
}

export function ImpactCharts({ tone = "light" }: { tone?: ChartTone }) {
  return (
    <div className="impact-charts-grid">
      <LearningProgressChart tone={tone} />
      <ResourceAllocationChart tone={tone} />
    </div>
  );
}
