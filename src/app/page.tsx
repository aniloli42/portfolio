import Awards from '@/components/awards'
import Contact from '@/components/contact'
import Education from '@/components/education'
import Experience from '@/components/experience'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

export default function Home() {
  console.log('hi')
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
