'use client'

import Container from '../ui/Container'
import { Experience as ExperienceType } from '@/types/portfolio.types'
import { BsBriefcase } from 'react-icons/bs'

interface ExperienceProps {
  experiences: ExperienceType[]
}

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900" id="experience">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-12 flex items-center gap-4">
            <BsBriefcase className="text-3xl text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Experience
            </h2>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative border-l-2 border-blue-200 pl-8 dark:border-blue-800"
              >
                {/* Timeline dot */}
                <div className="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400" />

                {/* Content */}
                <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800">
                  {/* Header */}
                  <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 text-gray-600 md:mt-0 dark:text-gray-400">
                      <p className="font-medium">
                        {exp.startDate} - {exp.endDate}
                      </p>
                      <p className="text-sm">{exp.location}</p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="mt-1.5 text-blue-600 dark:text-blue-400">
                          •
                        </span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Experience
