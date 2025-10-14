import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manav Patel — Technical Support & AI",
  description: "Minimalist 3D portfolio highlighting Manav Patel’s career, projects, and contact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}
