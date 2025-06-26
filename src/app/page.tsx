import Awards from '@/components/awards'
import Contact from '@/components/contact'
import Education from '@/components/education'
import Experience from '@/components/experience'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

export default function Home() {
  const anil = 'Anil'
  console.log('Hello, ' + anil + '! Welcome to your portfolio.')
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Awards />
      <Contact />
    </>
  )
}
