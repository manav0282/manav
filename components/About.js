export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="text-slate-300/90">
            I'm an IT professional specializing in SaaS support, network troubleshooting,
            and authentication (SSO/SAML/OAuth). I love improving customer experience through
            smart diagnostics, crisp documentation, and automation.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="glass p-4 rounded-2xl">
              <div className="text-3xl font-semibold">3+ yrs</div>
              <div className="text-xs opacity-70">Technical Support</div>
            </div>
            <div className="glass p-4 rounded-2xl">
              <div className="text-3xl font-semibold">95%+</div>
              <div className="text-xs opacity-70">CSAT Achieved</div>
            </div>
          </div>
        </div>
        <div className="glass p-6 rounded-2xl space-y-3">
          <h3 className="font-medium">Quick Highlights</h3>
          <ul className="list-disc pl-6 text-sm text-slate-300/90 space-y-2">
            <li>Deep comfort with HTTP, APIs, JSON, browser tooling</li>
            <li>Networking: TCP/IP, DNS, DHCP, VPN, proxies</li>
            <li>Auth: SSO, SAML, OAuth; log analysis with DevTools/Wireshark</li>
            <li>Tools: Jira, Zendesk, Salesforce, Postman, SQL</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
