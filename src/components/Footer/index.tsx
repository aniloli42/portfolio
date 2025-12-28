'use client'

import Container from '../ui/Container'
import { PersonalInfo } from '@/types/portfolio.types'
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa'
import Link from 'next/link'

interface FooterProps {
  data: PersonalInfo
}

const Footer = ({ data }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <FaGithub className="h-5 w-5" />,
    LinkedIn: <FaLinkedin className="h-5 w-5" />,
    Website: <FaGlobe className="h-5 w-5" />
  }

  return (
    <footer className="bg-black py-12 text-white" id="contact">
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Main Footer Content */}
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* About Section */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                {data.name}
              </h3>
              <p className="mb-4 text-gray-400">{data.title}</p>
              <p className="text-sm text-gray-400">{data.location}</p>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-2 text-gray-400 transition-colors duration-150 hover:text-blue-400"
                >
                  <FaEnvelope />
                  <span className="text-sm">{data.email}</span>
                </a>
                <a
                  href={`tel:${data.phone}`}
                  className="flex items-center gap-2 text-gray-400 transition-colors duration-150 hover:text-blue-400"
                >
                  <FaPhone />
                  <span className="text-sm">{data.phone}</span>
                </a>
              </div>
            </div>

            {/* Social Links Section */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Connect</h4>
              <div className="flex gap-4">
                {data.socials.map((social) => (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-800 p-3 transition-colors duration-150 hover:bg-blue-600"
                    aria-label={social.platform}
                  >
                    {socialIcons[social.platform]}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-gray-400">
                © {currentYear} {data.name}. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                Built with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
