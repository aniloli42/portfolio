"use client";

import Container from "../ui/Container";
import { CommunityInvolvement as CommunityInvolvementType } from "@/types/portfolio.types";
import { BsPeople } from "react-icons/bs";

interface CommunityInvolvementProps {
  involvement: CommunityInvolvementType[];
}

const CommunityInvolvement = ({ involvement }: CommunityInvolvementProps) => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800" id="community">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <BsPeople className="text-3xl text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Community Involvement
            </h2>
          </div>

          {/* Involvement Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {involvement.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-200 border-l-4 border-blue-600 dark:border-blue-400"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🤝</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {item.organization}
                    </h3>
                    {item.role && (
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {item.role}
                      </p>
                    )}
                    {(item.startDate || item.endDate) && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.startDate} - {item.endDate}
                      </p>
                    )}
                    {item.description && (
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
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
  );
};

export default CommunityInvolvement;
