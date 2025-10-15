const blocks = [
  `<strong>Shopify — Support Specialist (AI‑Powered Merchant Support)</strong> <em>(Aug 2025 – Present, Remote)</em><br/>
  Resolved complex platform issues across APIs, payments, and integrations. Collaborated with product & engineering to reduce downtime and refine docs.`,
  `<strong>Concentrix — Technical Support Advisor</strong> <em>(Feb 2025 – Aug 2025, Remote)</em><br/>
  Tier 1–2 SaaS support for multi‑product workflows; HTTP analysis and log reviews to diagnose browser/network issues.`,
  `<strong>St. Clair College — IT Help Desk Technician</strong> <em>(Jan 2023 – Apr 2024, Windsor)</em><br/>
  Windows/Linux troubleshooting, VPN and O365/Teams support; wrote KBs that reduced ticket time by 25%.`,
  `<strong>Walmart — Customer Service Representative</strong> <em>(Jan 2023 – Mar 2024, Windsor)</em><br/>
  Frontline customer ops, escalation handling, and service excellence.`
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {blocks.map((html, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl leading-relaxed" dangerouslySetInnerHTML={{__html: html}} />
          ))}
        </div>
      </div>
    </section>
  )
}
