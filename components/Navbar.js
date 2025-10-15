'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'glass shadow-glow' : ''}`}>
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">Manav<span className="text-primary">.</span></Link>
        <div className="space-x-6 text-sm">
          {links.map(l => (
            <a key={l.href} href={l.href} className="opacity-90 hover:opacity-100 hover:text-primary transition">{l.label}</a>
          ))}
          <a href="/Manav_Patel_Resume.pdf" className="ml-4 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20">Resume</a>
        </div>
      </nav>
    </div>
  )
}
