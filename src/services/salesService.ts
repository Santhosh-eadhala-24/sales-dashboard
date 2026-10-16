import type { SalesResponse, Year } from "@/types/sales";

// Swap this URL for a real API later; the UI does not change.
export async function fetchSales(year: Year): Promise<SalesResponse> {
  const res = await fetch(`/api/sales?year=${year}`);
  if (!res.ok) throw new Error("Could not load sales data. Try again.");
  return res.json();
}
