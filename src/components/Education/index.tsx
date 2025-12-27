'use client'

import Container from '../ui/Container'
import { Education as EducationType } from '@/types/portfolio.types'
import { BsBook } from 'react-icons/bs'

interface EducationProps {
  education: EducationType[]
}

const Education = ({ education }: EducationProps) => {
  return (
    <section className="bg-white py-20 dark:bg-gray-800" id="education">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-12 flex items-center gap-4">
            <BsBook className="text-3xl text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>
          </div>

          {/* Education Items */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="rounded-lg border-l-4 border-blue-600 bg-gray-50 p-6 shadow-lg transition-all duration-200 hover:shadow-xl dark:border-blue-400 dark:bg-gray-900"
              >
                {/* Header */}
                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {edu.field}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.institution}
                    </p>
                    {edu.gpa && (
                      <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 text-right text-gray-600 md:mt-0 dark:text-gray-400">
                    <p className="font-medium">
                      {edu.startDate} - {edu.endDate}
                    </p>
                    <p className="text-sm">{edu.location}</p>
                  </div>
                </div>

                {/* Honors */}
                {edu.honors && edu.honors.length > 0 && (
                  <div className="mt-4">
                    <p className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
                      Honors & Recognition:
                    </p>
                    <ul className="space-y-1">
                      {edu.honors.map((honor, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-2xl">🏆</span>
                          <span>{honor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Education
