'use client'

import Container from '../ui/Container'
import { SkillCategory } from '@/types/portfolio.types'
import {
  BsLightningCharge,
  BsCode,
  BsDatabase,
  BsLaptop,
  BsTools
} from 'react-icons/bs'

interface SkillsProps {
  skills: SkillCategory[]
}

const Skills = ({ skills }: SkillsProps) => {
  const getCategoryIcon = (category: string) => {
    const lower = category.toLowerCase()
    if (lower.includes('programming') || lower.includes('language'))
      return <BsCode className="text-xl" />
    if (lower.includes('database')) return <BsDatabase className="text-xl" />
    if (lower.includes('operating') || lower.includes('system'))
      return <BsLaptop className="text-xl" />
    if (lower.includes('tool') || lower.includes('software'))
      return <BsTools className="text-xl" />
    return <BsLightningCharge className="text-xl" />
  }

  return (
    <section className="bg-gray-900 py-20" id="skills">
      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="mb-12 flex items-center gap-4">
            <BsLightningCharge className="text-3xl text-blue-400" />
            <h2 className="text-4xl font-bold text-white">Technical Skills</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {skills.map((category, index) => (
              <div
                key={index}
                className="rounded-lg border-l-4 border-blue-400 bg-gray-800 p-6 shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-900/30 p-2 text-blue-400">
                    {getCategoryIcon(category.category)}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="rounded-lg border border-blue-800/50 bg-blue-900/20 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-150 hover:bg-blue-900/30 hover:shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills
