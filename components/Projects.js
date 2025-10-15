const projects = [
  { title: "Incident Insights Dashboard", desc: "Lightweight Next.js dashboard parsing logs (CSV/JSON) to visualize incident trends and MTTR.", link: "https://github.com/new", tags: ["Next.js", "CSV/JSON", "Charts"] },
  { title: "SSO Troubleshooter", desc: "CLI helper that validates SAML/OAuth flows, highlights clock skew, and common misconfigurations.", link: "https://github.com/new", tags: ["Node", "SAML", "OAuth"] },
  { title: "NetDiag Scripts", desc: "Bash & Python snippets to quickly inspect DNS/DHCP/TCP/IP, traceroute, and proxy configs.", link: "https://github.com/new", tags: ["Bash", "Python", "Networking"] },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map(p => (
            <a key={p.title} href={p.link} className="glass p-5 rounded-2xl block hover:shadow-glow transition">
              <div className="h-28 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4" />
              <div className="font-medium">{p.title}</div>
              <p className="text-sm opacity-80 mt-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3 text-xs opacity-80">
                {p.tags.map(t => <span key={t} className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
