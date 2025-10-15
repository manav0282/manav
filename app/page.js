import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import WavyBackground from "@/components/WavyBackground"

export default function Page() {
  const year = new Date().getFullYear()
  return (
    <main className="relative">
      <WavyBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-10 text-center text-xs opacity-60">
        © {year} Manav Patel. Built with Next.js.
      </footer>
    </main>
  )
}
