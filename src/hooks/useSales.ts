"use client";
import { useEffect, useState } from "react";
import { fetchSales } from "@/services/salesService";
import type { MonthlySales, Year } from "@/types/sales";

export function useSales(year: Year) {
  const [data, setData] = useState<MonthlySales[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);
    fetchSales(year)
      .then((r) => active && setData(r.data))
      .catch((e: Error) => active && setError(e.message))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [year]);

  return { data, loading, error };
}
