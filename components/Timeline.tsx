type Item = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

const items: Item[] = [
  {
    role: "Merchant Support Advisor",
    company: "Shopify",
    period: "Aug 2025 — Present",
    bullets: [
      "Resolve complex merchant issues across payments, orders, and integrations; consistently above 95% CSAT.",
      "Build AI‑assisted workflows (MCP server lookups) to accelerate time‑to‑resolution and maintain empathetic tone."
    ]
  },
  {
    role: "Technical Support Advisor",
    company: "Concentrix",
    period: "2024 — 2025",
    bullets: [
      "Handled 50+ tickets/day across O365/Azure/Windows; triaged incidents with clear RCA notes.",
      "Automated common fixes with scripts and knowledge base snippets to reduce AHT by ~20%."
    ]
  },
  {
    role: "IT Help Desk (Student)",
    company: "St. Clair College",
    period: "2023 — 2024",
    bullets: [
      "First‑line support for faculty/students; AD account provisioning, MDM enrollments, classroom A/V.",
      "Documented SOPs and playbooks improving new‑hire ramp by 30%."
    ]
  },
];

export default function Timeline() {
  return (
    <ol className="relative border-s border-white/10 pl-6 space-y-10">
      {items.map((it, i) => (
        <li key={i}>
          <div className="absolute -left-[9px] top-1 size-4 rounded-full bg-brand-accent shadow-xl"></div>
          <h3 className="text-xl md:text-2xl font-semibold">
            {it.role} <span className="text-white/60">• {it.company}</span>
          </h3>
          <div className="text-white/50 text-sm mb-2">{it.period}</div>
          <ul className="list-disc ml-5 space-y-2 text-white/80">
            {it.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  );
}
