import { NextResponse } from "next/server";
import { getSales } from "@/data/sales";
import { YEARS, type Year } from "@/types/sales";

export async function GET(req: Request) {
  const year = Number(new URL(req.url).searchParams.get("year"));
  if (!YEARS.includes(year as Year)) {
    return NextResponse.json({ error: "Year must be between 2012 and 2018" }, { status: 400 });
  }
  return NextResponse.json({ year, data: getSales(year as Year) });
}
