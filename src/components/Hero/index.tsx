import Header from '../ui/Header'
import { BiDownload, BiMailSend } from 'react-icons/bi'
import Container from '../ui/Container'
import MY_PORTRAIT_IMAGE from '@/assets/anil-oli-portrait.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="flex h-screen min-h-dvh flex-col">
      <Header />

      {/* CTA */}
      <Container className="flex flex-1 flex-col items-center gap-2 py-4 md:flex-row md:place-content-between">
        <div className="flex flex-col gap-2">
          <p className="text-lg text-gray-400">Hello, I&apos;m</p>
          <p className="text-4xl font-bold text-sky-500 md:text-6xl">
            Anil Oli
          </p>
          <p className="text-2xl font-light">Software Engineer</p>
          <p className="max-w-[45ch] text-lg text-gray-400">
            Passionate full-stack developer specializing in modern web
            technologies, automation, and creating scalable solutions that make
            a difference.
          </p>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-4">
            <button className="flex items-center gap-2 rounded bg-sky-500 px-6 py-2 text-white">
              <BiDownload className="text-xl" />
              Get Resume
            </button>

            <button className="flex items-center gap-2 rounded border border-gray-600 px-6 py-2 text-white">
              <BiMailSend className="text-xl" />
              Send Email
            </button>
          </div>

          {/*Social Media Links  */}
          <div className="mt-8 flex gap-2">
            <Link
              href="https://github.com/aniloli42"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="text-2xl" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/aniloli"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <BsLinkedin className="text-2xl" />
            </Link>
          </div>
        </div>

        {/* Photo Section  */}
        <div>
          <Image
            src={MY_PORTRAIT_IMAGE}
            alt="Anil Oli Portrait"
            priority
            className="h-72 w-72 rounded-xl object-cover"
          />
        </div>
      </Container>
    </div>
  )
}

export default Hero
