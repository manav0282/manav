const skillGroups = [
  { title: "Web & APIs", items: ["HTTP", "REST APIs", "JSON", "Postman", "Browser DevTools"] },
  { title: "Auth & Security", items: ["SAML", "OAuth", "SSO", "VPN", "Proxies"] },
  { title: "Networking", items: ["TCP/IP", "DNS", "DHCP", "Firewalls"] },
  { title: "Tooling", items: ["Salesforce", "Jira", "Zendesk", "SQL", "Wireshark"] },
  { title: "Code", items: ["Python", "JavaScript", "Bash", "Ruby"] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {skillGroups.map(g => (
            <div key={g.title} className="glass p-6 rounded-2xl">
              <div className="font-medium">{g.title}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map(i => <span key={i} className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-sm">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
