"use client";

import Container from "../ui/Container";
import { SkillCategory } from "@/types/portfolio.types";
import { BsLightningCharge, BsCode, BsDatabase, BsLaptop, BsTools } from "react-icons/bs";

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills = ({ skills }: SkillsProps) => {
  const getCategoryIcon = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('programming') || lower.includes('language')) return <BsCode className="text-xl" />;
    if (lower.includes('database')) return <BsDatabase className="text-xl" />;
    if (lower.includes('operating') || lower.includes('system')) return <BsLaptop className="text-xl" />;
    if (lower.includes('tool') || lower.includes('software')) return <BsTools className="text-xl" />;
    return <BsLightningCharge className="text-xl" />;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="skills">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <BsLightningCharge className="text-3xl text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Technical Skills
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-200 border-l-4 border-blue-600 dark:border-blue-400"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    {getCategoryIcon(category.category)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:shadow-md transition-all duration-150 border border-blue-100 dark:border-blue-800/50"
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
  );
};

export default Skills;
