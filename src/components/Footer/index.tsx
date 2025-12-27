"use client";

import Container from "../ui/Container";
import { PersonalInfo } from "@/types/portfolio.types";
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";
import Link from "next/link";

interface FooterProps {
  data: PersonalInfo;
}

const Footer = ({ data }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <FaGithub className="w-5 h-5" />,
    LinkedIn: <FaLinkedin className="w-5 h-5" />,
    Website: <FaGlobe className="w-5 h-5" />,
  };

  return (
    <footer className="py-12 bg-gray-900 dark:bg-black text-white" id="contact">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {data.name}
              </h3>
              <p className="text-gray-400 mb-4">
                {data.title}
              </p>
              <p className="text-gray-400 text-sm">
                {data.location}
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-150"
                >
                  <FaEnvelope />
                  <span className="text-sm">{data.email}</span>
                </a>
                <a
                  href={`tel:${data.phone}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-150"
                >
                  <FaPhone />
                  <span className="text-sm">{data.phone}</span>
                </a>
              </div>
            </div>

            {/* Social Links Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Connect
              </h4>
              <div className="flex gap-4">
                {data.socials.map((social) => (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-150"
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
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} {data.name}. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Built with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
