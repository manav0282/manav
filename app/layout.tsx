import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manav Patel — Creative IT Portfolio",
  description: "A creative, 3D, Apple-inspired portfolio for an IT professional: projects, references, and contact.",
  openGraph: {
    title: "Manav Patel — Creative IT Portfolio",
    description: "3D Apple-inspired portfolio (SaaS, Support, AI).",
    images: [{ url: "/og.png", width: 1200, height: 630 }]
  },
  twitter: { card: "summary_large_image", title: "Manav Patel — Creative IT Portfolio", description: "3D Apple-inspired portfolio." }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-display antialiased noise">{children}</body>
    </html>
  );
}
