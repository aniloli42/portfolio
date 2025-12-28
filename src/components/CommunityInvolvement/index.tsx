'use client'

import Container from '../ui/Container'
import { CommunityInvolvement as CommunityInvolvementType } from '@/types/portfolio.types'
import { BsPeople } from 'react-icons/bs'

interface CommunityInvolvementProps {
  involvement: CommunityInvolvementType[]
}

const CommunityInvolvement = ({ involvement }: CommunityInvolvementProps) => {
  return (
    <section className="bg-gray-800 py-20" id="community">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-12 flex items-center gap-4">
            <BsPeople className="text-3xl text-blue-400" />
            <h2 className="text-4xl font-bold text-white">
              Community Involvement
            </h2>
          </div>

          {/* Involvement Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {involvement.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border-l-4 border-blue-400 bg-gray-900 p-6 shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🤝</span>
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-bold text-white">
                      {item.organization}
                    </h3>
                    {item.role && (
                      <p className="mb-2 text-sm font-medium text-blue-400">
                        {item.role}
                      </p>
                    )}
                    {(item.startDate || item.endDate) && (
                      <p className="text-sm text-gray-400">
                        {item.startDate} - {item.endDate}
                      </p>
                    )}
                    {item.description && (
                      <p className="mt-2 text-sm text-gray-300">
                        {item.description}
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

export default CommunityInvolvement
