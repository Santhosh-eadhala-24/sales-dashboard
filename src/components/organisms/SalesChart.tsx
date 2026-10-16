"use client";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { ChartType, MonthlySales } from "@/types/sales";

const HIT = "#115e59";
const MISS = "#a8a29e";
const PIE = ["#115e59","#0f766e","#14b8a6","#5eead4","#b45309","#d97706","#f59e0b","#fcd34d","#9f1239","#be123c","#e11d48","#fda4af"];
const fmt = (v: unknown) => Number(v).toLocaleString();

export default function SalesChart({ data, type, threshold }: { data: MonthlySales[]; type: ChartType; threshold: number }) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        {type === "pie" ? (
          <PieChart>
            <Pie data={data} dataKey="sales" nameKey="month" outerRadius={120} label>
              {data.map((d, i) => <Cell key={d.month} fill={PIE[i]} />)}
            </Pie>
            <Tooltip formatter={fmt} />
          </PieChart>
        ) : type === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" /><YAxis />
            <Tooltip formatter={fmt} />
            {threshold > 0 && <ReferenceLine y={threshold} stroke="#b45309" strokeDasharray="4 4" />}
            <Line dataKey="sales" stroke={HIT} strokeWidth={2} />
          </LineChart>
        ) : (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" /><YAxis />
            <Tooltip formatter={fmt} />
            <Bar dataKey="sales">
              {data.map((d) => <Cell key={d.month} fill={d.sales >= threshold ? HIT : MISS} />)}
            </Bar>
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
