'use client';

import Nav from "@/components/Nav";
import ThreeCreative from "@/components/ThreeCreative";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="relative overflow-x-clip">
      <Nav />
      <header className="relative h-[92vh] flex items-center">
        <ThreeCreative />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="badge">IT Professional - SaaS - AI</span>
            <h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-tight mt-4">
              Creative support engineering with Apple-level polish.
            </h1>
            <p className="text-white/80 mt-5 text-lg md:text-xl">
              I solve tough integration and platform issues across HTTP, APIs, and auth while
              keeping the experience human. Minimal design, delightful motion, clear outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-3 rounded-xl bg-white text-black font-medium">See Work</a>
              <a href="/resume.pdf" className="px-5 py-3 rounded-xl border border-white/20 text-white/90" download>Resume (PDF)</a>
            </div>
          </motion.div>
        </div>
      </header>

      <Section id="about" title="About" kicker="Profile">
        <div className="grid md:grid-cols-2 gap-8">
          <p>
            I am Manav Patel from Ottawa. With 3+ years across Shopify, Concentrix, and St. Clair College,
            I combine empathetic communication with hands-on debugging of real-world SaaS problems.
            My toolkit spans log analysis, network debugging, authentication flows, and modern automation.
          </p>
          <Card>
            <h3 className="font-semibold mb-2">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="tag">HTTP / REST / JSON</span>
              <span className="tag">SAML / OAuth / SSO</span>
              <span className="tag">TCP/IP - DNS - DHCP</span>
              <span className="tag">Wireshark - Fiddler</span>
              <span className="tag">Python - Bash - JS</span>
              <span className="tag">Postman - SQL - DevTools</span>
              <span className="tag">Zendesk - ServiceNow</span>
            </div>
          </Card>
        </div>
      </Section>

      <Section id="experience" title="Experience" kicker="Career">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="text-sm text-white/60">Aug 2025 - Present</div>
            <h3 className="text-xl font-semibold">Support Specialist - Shopify</h3>
            <ul className="list-disc ml-5 mt-2 space-y-2 text-white/80">
              <li>Resolved complex SaaS issues across APIs, payments, integrations; partnered with engineering.</li>
              <li>Guided merchants adopting AI tools; contributed knowledge content.</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm text-white/60">Feb 2025 - Aug 2025</div>
            <h3 className="text-xl font-semibold">Technical Support Advisor - Concentrix</h3>
            <ul className="list-disc ml-5 mt-2 space-y-2 text-white/80">
              <li>Tier 1-2 support for APIs/integrations; used DevTools and logs for diagnostics.</li>
              <li>Maintained SLAs with clean escalations.</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm text-white/60">Jan 2023 - Apr 2024</div>
            <h3 className="text-xl font-semibold">IT Help Desk Technician - St. Clair College</h3>
            <ul className="list-disc ml-5 mt-2 space-y-2 text-white/80">
              <li>Windows/Linux support, VPN/auth, Office 365 admin.</li>
              <li>KBs that reduced repeat tickets.</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="projects" title="Projects" kicker="Selected Work">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="text-sm text-white/60 mb-1">Python - CLI - Regex</div>
            <h3 className="text-xl font-semibold">Log Insight CLI</h3>
            <p className="text-white/80 mt-2">Parse logs, extract patterns, and export CSV summaries to accelerate RCA.</p>
          </Card>
          <Card>
            <div className="text-sm text-white/60 mb-1">Python - FastAPI</div>
            <h3 className="text-xl font-semibold">Uptime Monitor and Status</h3>
            <p className="text-white/80 mt-2">Scheduled checks, thresholds, public JSON/HTML status, basic alerts.</p>
          </Card>
          <Card>
            <div className="text-sm text-white/60 mb-1">Python - Flask</div>
            <h3 className="text-xl font-semibold">Webhook Inspector</h3>
            <p className="text-white/80 mt-2">Validate and replay SaaS webhooks for faster integration debugging.</p>
          </Card>
          <Card>
            <div className="text-sm text-white/60 mb-1">AI - Agent - Shopify</div>
            <h3 className="text-xl font-semibold">AI Support Agent</h3>
            <p className="text-white/80 mt-2">Instructions connected to an MCP server to generate copy-ready, empathetic replies.</p>
          </Card>
          <Card>
            <div className="text-sm text-white/60 mb-1">Docs - SOPs</div>
            <h3 className="text-xl font-semibold">O365 Playbooks</h3>
            <p className="text-white/80 mt-2">Repeatable troubleshooting for auth loops, mailflow, and MDM enrollment.</p>
          </Card>
          <Card>
            <div className="text-sm text-white/60 mb-1">Dashboards</div>
            <h3 className="text-xl font-semibold">CX Metrics Prototype</h3>
            <p className="text-white/80 mt-2">Track CSAT, AHT, reopen rate; quick alerts to keep quality high.</p>
          </Card>
        </div>
      </Section>

      <Section id="references" title="References" kicker="People who have worked with me">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-xl font-semibold">Reference #1</h3>
            <p className="text-white/80 mt-2">Title, Company</p>
            <p className="text-white/60 text-sm mt-2">"Concise testimonial about Manav's calm, precise troubleshooting and communication."</p>
            <p className="text-white/60 text-sm mt-3">Email/LinkedIn available upon request.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Reference #2</h3>
            <p className="text-white/80 mt-2">Title, Company</p>
            <p className="text-white/60 text-sm mt-2">"Notes on impact: faster resolution, empathy, collaboration with engineering."</p>
            <p className="text-white/60 text-sm mt-3">Email/LinkedIn available upon request.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Reference #3</h3>
            <p className="text-white/80 mt-2">Title, Company</p>
            <p className="text-white/60 text-sm mt-2">"Specific example: complex incident handled end-to-end with great results."</p>
            <p className="text-white/60 text-sm mt-3">Email/LinkedIn available upon request.</p>
          </Card>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <Card>
          <p className="text-white/80">
            Email <a className="underline" href="mailto:manav0282@gmail.com">manav0282@gmail.com</a> -
            Phone <span className="whitespace-nowrap">613-791-7154</span> -
            LinkedIn <a className="underline" href="https://www.linkedin.com/in/manav0282" target="_blank">linkedin.com/in/manav0282</a>
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a href="/resume.pdf" className="px-5 py-3 rounded-xl bg-white text-black font-medium" download>Download Resume (PDF)</a>
            <a href="mailto:manav0282@gmail.com" className="px-5 py-3 rounded-xl border border-white/20 text-white/90">Email</a>
          </div>
        </Card>
        <p className="text-white/50 text-sm mt-6">© {new Date().getFullYear()} Manav Patel — Ottawa, Canada</p>
      </Section>
    </main>
  );
}
