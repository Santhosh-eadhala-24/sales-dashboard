"use client";
import { useState } from "react";
import Card from "../atoms/Card";
import YearTabs from "../molecules/YearTabs";
import ChartTypeSwitcher from "../molecules/ChartTypeSwitcher";
import ThresholdInput from "../molecules/ThresholdInput";
import SalesSummary from "./SalesSummary";
import SalesChart from "./SalesChart";
import { useSales } from "@/hooks/useSales";
import type { ChartType, Year } from "@/types/sales";

export default function SalesDashboard() {
  const [year, setYear] = useState<Year>(2017);
  const [type, setType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState(0);
  const { data, loading, error } = useSales(year);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <YearTabs value={year} onChange={setYear} />
        <ThresholdInput value={threshold} onChange={setThreshold} />
        <ChartTypeSwitcher value={type} onChange={setType} />
      </div>
      {loading && <p role="status">Loading {year} sales…</p>}
      {error && <p role="alert" className="text-rose-700">{error}</p>}
      {!loading && !error && data.length === 0 && <p>No sales recorded for {year}.</p>}
      {!loading && !error && data.length > 0 && (
        <>
          <SalesSummary data={data} threshold={threshold} />
          <Card>
            <h2 className="mb-3 font-medium text-stone-900">Monthly sales, {year} (gross sales)</h2>
            <SalesChart data={data} type={type} threshold={threshold} />
          </Card>
        </>
      )}
    </div>
  );
}
