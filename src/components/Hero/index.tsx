'use client'

import Header from '../ui/Header'
import { BiDownload, BiMailSend } from 'react-icons/bi'
import Container from '../ui/Container'
import MY_PORTRAIT_IMAGE from '@/assets/anil_oli_portrait_photo.png'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { PersonalInfo } from '@/types/portfolio.types'

interface HeroProps {
  data: PersonalInfo
}

const Hero = ({ data }: HeroProps) => {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <BsGithub className="text-2xl" />
      case 'linkedin':
        return <BsLinkedin className="text-2xl" />
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen min-h-dvh flex-col bg-white dark:bg-gray-800">
      <Header />

      {/* CTA */}
      <Container className="flex flex-1 flex-col items-center gap-2 py-4 md:flex-row md:place-content-between">
        <div className="flex flex-col gap-2">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Hello, I&apos;m
          </p>
          <p className="text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            {data.name}
          </p>
          <p className="text-2xl font-light text-gray-600 dark:text-gray-400">
            {data.title}
          </p>
          <p className="max-w-[45ch] text-lg text-gray-600 dark:text-gray-400">
            {data.bio}
          </p>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-4">
            <Link
              href="/anil-oli-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded bg-blue-600 px-6 py-2 text-white transition-all duration-200 hover:bg-blue-700"
            >
              <BiDownload className="text-xl" />
              Get Resume
            </Link>

            <Link
              href={`mailto:${data.email}`}
              className="flex cursor-pointer items-center gap-2 rounded border border-gray-300 px-6 py-2 text-gray-700 transition-all duration-200 hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
            >
              <BiMailSend className="text-xl" />
              Send Email
            </Link>
          </div>

          {/*Social Media Links  */}
          <div className="mt-8 flex gap-2">
            {data.socials.map((social) => (
              <Link
                key={social.platform}
                href={social.url}
                className="rounded p-2 text-gray-700 transition-all duration-200 focus-within:bg-gray-200 hover:bg-gray-200 dark:text-gray-300 dark:focus-within:bg-gray-700 dark:hover:bg-gray-700"
                target="_blank"
                aria-label={`${social.platform} Profile Link`}
                rel="noopener noreferrer"
              >
                {getSocialIcon(social.platform)}
              </Link>
            ))}
          </div>
        </div>

        {/* Photo Section  */}
        <div>
          <Image
            src={MY_PORTRAIT_IMAGE}
            alt={`${data.name} Portrait`}
            priority
            className="h-72 w-72 rounded-xl object-cover"
          />
        </div>
      </Container>
    </div>
  )
}

export default Hero
