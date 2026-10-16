# Sales Dashboard

A Next.js 15 dashboard showing monthly sales by year (2012-2018) from a SQLite sales dataset, built with TypeScript, Tailwind CSS and Recharts.

## What I did
- Structured components with **atomic design**: `atoms` (Button, Card, NumberInput), `molecules` (StatCard, YearTabs, ChartTypeSwitcher, ThresholdInput), `organisms` (SalesChart, SalesSummary, SalesDashboard), `templates` (DashboardTemplate).
- Created an empty `/dashboard` page, then added the components to it. `/` redirects to `/dashboard`.
- Data comes from `src/data/sales.db` (1,000 transactions). `scripts/export_sales.py` sums **gross sales** (positive transactions only; negative amounts are treated as refunds and excluded) per month into `src/data/sales.json`. 2018 only covers Jan-Apr.
- **API integration:** the data is served by a Next.js route (`/api/sales?year=2024`). The UI reads it through `src/services/salesService.ts` and the `useSales` hook, so replacing it with a real API only means changing the URL in the service.
- **Custom filter:** a threshold input highlights months at or above your value (bar chart colours, line chart reference line, summary count).
- **Multiple chart types:** switch between bar, line and pie using Recharts.
- Loading, error and empty states are handled.

## Setup
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure
```
src/
  app/            pages and the /api/sales route
  components/     atoms, molecules, organisms, templates
  hooks/          useSales
  services/       salesService (data access)
  data/           sales.db, sales.json and the data accessor
  types/          shared types
```

## Push to your own GitHub
```bash
git init && git add . && git commit -m "Sales dashboard"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
"# sales-dashboard" 
