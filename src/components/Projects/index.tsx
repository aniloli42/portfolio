'use client'

import Container from '../ui/Container'
import { Project } from '@/types/portfolio.types'
import { BsCode, BsGithub, BsBoxArrowUpRight } from 'react-icons/bs'
import Link from 'next/link'

interface ProjectsProps {
  projects: Project[]
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="bg-gray-800 py-20" id="projects">
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12 flex items-center gap-4">
            <BsCode className="text-3xl text-blue-400" />
            <h2 className="text-4xl font-bold text-white">Projects</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-2xl"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />

                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.repositoryUrl && (
                    <Link
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-600"
                    >
                      <BsGithub />
                      <span>Code</span>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
                    >
                      <BsBoxArrowUpRight />
                      <span>Live</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
