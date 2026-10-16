import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Sales dashboard", description: "Monthly sales by year" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 font-sans antialiased">{children}</body>
    </html>
  );
}
