import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Achievement from '@/components/Achievement'
import Experience from '@/components/Experience'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievement />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}
