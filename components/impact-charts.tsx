"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
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

export function LearningProgressChart() {
  return (
    <article className="impact-chart-card">
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
        aria-label={`Course progress figures pending verification: ${learningProgress.completed} learners completed and ${learningProgress.total - learningProgress.completed} are in progress, out of ${learningProgress.total}.`}
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
        Reporting cohort · {learningProgress.total} learners · verification pending
      </p>
    </article>
  );
}
