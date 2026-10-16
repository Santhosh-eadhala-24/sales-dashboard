export type Year = number;
export type ChartType = "bar" | "line" | "pie";
export interface MonthlySales { month: string; sales: number }
export interface SalesResponse { year: Year; data: MonthlySales[] }
export const YEARS: Year[] = [2012, 2013, 2014, 2015, 2016, 2017, 2018];
