import raw from "./sales.json";
import type { MonthlySales, Year } from "@/types/sales";

// Generated from sales.db by scripts/export_sales.py
export const getSales = (year: Year): MonthlySales[] =>
  (raw as Record<string, MonthlySales[]>)[String(year)] ?? [];
