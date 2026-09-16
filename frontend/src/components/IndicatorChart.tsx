import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { Indicator } from "../types/Indicator";

interface IndicatorChartProps {
  indicator: Indicator;
}

export function IndicatorChart({
  indicator,
}: IndicatorChartProps) {
  return (
    <section className="chart-section">
      <div className="section-title">
        <div>
          <span className="category">
            Evolução
          </span>

          <h2>{indicator.title}</h2>
        </div>
      </div>

      <div className="chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={indicator.history}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="year" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}