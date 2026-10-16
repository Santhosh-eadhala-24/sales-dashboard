import type { ReactNode } from "react";
export default function DashboardTemplate({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="mx-auto min-h-screen max-w-5xl bg-stone-50 px-4 py-8">
      <h1 className="mb-6 text-3xl font-semibold text-stone-900">{title}</h1>
      {children}
    </main>
  );
}
