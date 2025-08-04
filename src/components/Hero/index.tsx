import Header from '../ui/Header'
import { BiDownload } from 'react-icons/bi'
import Container from '../ui/Container'
import MY_PORTRAIT_IMAGE from '@/assets/anil-oli-portrait.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="flex flex-col h-screen min-h-dvh">
      <Header />

      {/* CTA */}
      <Container className="py-4 flex md:place-content-between items-center flex-col md:flex-row gap-2 flex-1">
        <div className="flex flex-col gap-2">
          <p className="text-lg text-gray-400">Hello, I&apos;m</p>
          <p className="text-4xl font-bold md:text-6xl text-sky-500">
            Anil Oli
          </p>
          <p className="text-2xl font-light">Software Engineer</p>
          <p className="max-w-[45ch] text-lg text-gray-400">
            Passionate full-stack developer specializing in modern web
            technologies, automation, and creating scalable solutions that make
            a difference.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="flex gap-2 items-center bg-sky-500 text-white px-6 py-2 rounded">
              <BiDownload />
              Get Resume
            </button>

            <button className="text-white border border-gray-400 px-6 py-2 rounded">
              Send Email
            </button>
          </div>

          {/*Social Media Links  */}
          <div>
            <Link
              href="https://github.com/aniloli42"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/aniloli"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <BsLinkedin />
            </Link>
          </div>
        </div>

        {/* Photo Section  */}
        <div>
          <Image
            src={MY_PORTRAIT_IMAGE}
            alt="Anil Oli Portrait"
            priority
            className="w-64 h-64 rounded-xl object-cover"
          />
        </div>
      </Container>
    </div>
  )
}

export default Hero
