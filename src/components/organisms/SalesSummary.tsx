import StatCard from "../molecules/StatCard";
import type { MonthlySales } from "@/types/sales";

export default function SalesSummary({ data, threshold }: { data: MonthlySales[]; threshold: number }) {
  const total = data.reduce((s, d) => s + d.sales, 0);
  const best = data.reduce((a, b) => (b.sales > a.sales ? b : a), data[0]);
  const above = data.filter((d) => d.sales >= threshold).length;
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <StatCard label="Total sales" value={total.toLocaleString()} />
      <StatCard label="Best month" value={`${best.month} (${best.sales.toLocaleString()})`} />
      <StatCard label={`Months at or above ${threshold.toLocaleString()}`} value={`${above} of ${data.length}`} />
    </div>
  );
}
