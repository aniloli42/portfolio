import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Awards from '@/components/Awards'
import CommunityInvolvement from '@/components/CommunityInvolvement'
import Footer from '@/components/Footer'
import AboutMe from '@/components/AboutMe'
import { portfolioData } from '@/data/portfolio.data'

export default function Home() {
  return (
    <>
      <Hero data={portfolioData.personalInfo} />
      <AboutMe />
      <Experience experiences={portfolioData.experiences} />
      <Education education={portfolioData.education} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Awards awards={portfolioData.awards} />
      {portfolioData.communityInvolvement && (
        <CommunityInvolvement involvement={portfolioData.communityInvolvement} />
      )}
      <Footer data={portfolioData.personalInfo} />
    </>
  )
}
