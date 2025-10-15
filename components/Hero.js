'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="mx-auto max-w-6xl px-4 relative">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to Support, Cloud & SaaS roles
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Manav Patel
              <span className="block text-xl md:text-2xl mt-3 font-normal text-slate-300">Technical Support & IT Specialist</span>
            </h1>
            <p className="text-slate-300/90 max-w-2xl">
              I solve complex SaaS, networking, and authentication issues with empathy and speed—
              blending deep troubleshooting with customer-first communication to deliver outcomes.
            </p>
            <div className="flex gap-3">
              <a href="#projects" className="px-4 py-2 rounded-xl bg-primary hover:opacity-90">View Projects</a>
              <a href="https://www.linkedin.com/in/manav0282" className="px-4 py-2 rounded-xl glass hover:shadow-glow">LinkedIn</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl blur-2xl bg-primary/20" />
            <img src="/manav.jpg" alt="Manav Patel" className="relative rounded-3xl w-full object-cover border border-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
