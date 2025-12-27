'use client'

import Container from '../ui/Container'
import { Award } from '@/types/portfolio.types'
import { BsTrophy, BsPatchCheck, BsAward } from 'react-icons/bs'

interface AwardsProps {
  awards: Award[]
}

const Awards = ({ awards }: AwardsProps) => {
  const getAwardIcon = (type?: string) => {
    switch (type) {
      case 'award':
        return <BsAward className="text-3xl text-blue-600 dark:text-blue-400" />
      case 'achievement':
        return (
          <BsTrophy className="text-3xl text-blue-600 dark:text-blue-400" />
        )
      case 'certification':
        return (
          <BsPatchCheck className="text-3xl text-blue-600 dark:text-blue-400" />
        )
      default:
        return (
          <BsTrophy className="text-3xl text-blue-600 dark:text-blue-400" />
        )
    }
  }

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900" id="awards">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-12 flex items-center gap-4">
            <BsTrophy className="text-3xl text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Recognition
            </h2>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {awards.map((award, index) => (
              <div
                key={index}
                className="rounded-lg border-l-4 border-blue-600 bg-white p-6 shadow-lg transition-all duration-200 hover:shadow-xl dark:border-blue-400 dark:bg-gray-800"
              >
                <div className="flex items-start gap-3">
                  {getAwardIcon(award.type)}
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                      {award.title}
                    </h3>
                    {award.year && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {award.year}
                      </p>
                    )}
                    {award.issuer && (
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {award.issuer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Awards
