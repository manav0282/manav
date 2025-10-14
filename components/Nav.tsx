'use client';
import Logo from './Logo';

export default function Nav(){
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="container h-14 flex items-center justify-between">
        <Logo/>
        <div className="flex items-center gap-6 text-sm text-white/80">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="https://www.linkedin.com/in/manav0282" target="_blank" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </nav>
  )
}
