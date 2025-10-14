'use client';

import Nav from "@/components/Nav";
import ThreeScene from "@/components/ThreeScene";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="relative overflow-x-clip">
      <Nav />
      <header className="relative h-[88vh] flex items-center">
        <ThreeScene />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-white/60 text-sm mb-3">Technical Support • SaaS • AI</p>
            <h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-tight">
              Minimal. Focused. <span className="text-white/70">Me.</span>
            </h1>
            <p className="text-white/80 mt-5 text-lg md:text-xl">
              I resolve complex SaaS and integration issues with a calm, Apple‑like attention to detail—
              blending empathetic communication with hands‑on debugging across HTTP, APIs, auth, and networks.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#projects" className="px-5 py-3 rounded-xl bg-white text-black font-medium">Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 text-white/90">Contact</a>
            </div>
          </motion.div>
        </div>
      </header>

      <Section id="about" title="About">
        <div className="grid md:grid-cols-2 gap-8">
          <p>
            I’m Manav Patel, a Technical Support Specialist in Ottawa with 3+ years across Shopify, Concentrix,
            and St. Clair College. I focus on log analysis, API troubleshooting, authentication flows,
            and modern SaaS integration—while keeping the customer experience genuinely human.
          </p>
          <div className="rounded-xl border border-white/10 p-6">
            <h3 className="font-semibold mb-2">Core Skills</h3>
            <ul className="grid grid-cols-2 list-disc ml-5 gap-y-1 text-white/80">
              <li>HTTP / REST / JSON</li>
              <li>SAML / OAuth / SSO</li>
              <li>TCP/IP, DNS, DHCP</li>
              <li>Wireshark / Fiddler</li>
              <li>Python, Bash, JavaScript</li>
              <li>Postman / SQL / DevTools</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Support Specialist — <span className="text-white/60">Shopify</span></h3>
            <div className="text-white/50 text-sm mb-2">Remote • Aug 2025 — Present</div>
            <ul className="list-disc ml-5 space-y-2 text-white/80">
              <li>Resolved complex SaaS issues across APIs, payments, and integrations; partnered with engineering to escalate bugs.</li>
              <li>Guided merchants adopting AI‑powered tools; contributed knowledge articles for faster answers.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Technical Support Advisor — <span className="text-white/60">Concentrix</span></h3>
            <div className="text-white/50 text-sm mb-2">Remote (Belleville, ON) • Feb 2025 — Aug 2025</div>
            <ul className="list-disc ml-5 space-y-2 text-white/80">
              <li>Tier 1–2 support for APIs/integrations; used DevTools/logs to diagnose browser & network issues.</li>
              <li>Maintained SLAs with clean escalations and cross‑team collaboration.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">IT Help Desk Technician — <span className="text-white/60">St. Clair College</span></h3>
            <div className="text-white/50 text-sm mb-2">Windsor, ON • Jan 2023 — Apr 2024</div>
            <ul className="list-disc ml-5 space-y-2 text-white/80">
              <li>Windows/Linux support, VPN/auth issues, O365/Teams administration.</li>
              <li>Wrote KBs that reduced repeat tickets.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard title="Log Insight CLI" subtitle="Python • CLI • Regex">
            Parse app/system logs, extract patterns, and export CSV summaries—accelerates RCA.
          </ProjectCard>
          <ProjectCard title="Uptime Monitor & Status" subtitle="Python • FastAPI">
            Scheduled URL checks with thresholds; public JSON/HTML status output and basic alerts.
          </ProjectCard>
          <ProjectCard title="Webhook Inspector" subtitle="Python • Flask">
            Validate & replay SaaS webhooks (HMAC, headers, payloads) to speed integration debugging.
          </ProjectCard>
          <ProjectCard title="AI Support Agent" subtitle="Shopify • MCP">
            Agent instructions that generate copy‑ready empathetic responses connected to an MCP server.
          </ProjectCard>
          <ProjectCard title="O365 Playbooks" subtitle="Docs • SOPs">
            Repeatable troubleshooting steps for auth loops, mailflow, and MDM enrollment.
          </ProjectCard>
          <ProjectCard title="CX Metrics Proto" subtitle="Dashboards">
            Track CSAT, AHT, and reopen rate; quick alerts to keep quality high.
          </ProjectCard>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="rounded-xl border border-white/10 p-8">
          <p className="text-white/80 mb-6">
            Email <a className="underline" href="mailto:manav0282@gmail.com">manav0282@gmail.com</a> • Phone <span className="whitespace-nowrap">613‑791‑7154</span><br/>
            LinkedIn <a className="underline" href="https://www.linkedin.com/in/manav0282" target="_blank">linkedin.com/in/manav0282</a>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/resume.pdf" className="px-5 py-3 rounded-xl bg-white text-black font-medium" download>Download Resume (PDF)</a>
            <a href="mailto:manav0282@gmail.com" className="px-5 py-3 rounded-xl border border-white/20 text-white/90">Email</a>
          </div>
        </div>
        <p className="text-white/50 text-sm mt-6">© {new Date().getFullYear()} Manav Patel — Ottawa, Canada</p>
      </Section>
    </main>
  );
}
