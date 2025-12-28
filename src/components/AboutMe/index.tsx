'use client'

import Container from '../ui/Container'

const AboutMe = () => {
  return (
    <section className="bg-gray-800 py-20" id="about">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            About Me
          </h2>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            {/* Main Bio */}
            <div className="rounded-lg border-l-4 border-blue-400 bg-gray-900 p-6 shadow-lg">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
                <span className="text-2xl">👨‍💻</span>
                Background
              </h3>
              <p className="leading-relaxed text-gray-300">
                Computer Science student at Texas State University, specializing
                in backend development with a minor in Data Analytics.
                Passionate about building efficient, scalable solutions that
                solve real-world problems.
              </p>
            </div>

            {/* Experience Highlight */}
            <div className="rounded-lg border-l-4 border-blue-400 bg-gray-900 p-6 shadow-lg">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
                <span className="text-2xl">🚀</span>
                Expertise
              </h3>
              <p className="leading-relaxed text-gray-300">
                Hands-on experience with TypeScript, Node.js, Next.js, and
                Nest.js. Proven track record in improving development
                efficiency, optimizing database performance, and delivering
                measurable results.
              </p>
            </div>

            {/* Passion */}
            <div className="rounded-lg border-l-4 border-blue-400 bg-gray-900 p-6 shadow-lg">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
                <span className="text-2xl">💡</span>
                What I Do
              </h3>
              <p className="leading-relaxed text-gray-300">
                Continuously exploring new technologies, automating workflows,
                and contributing to open-source projects. Love tackling complex
                problems with clean, maintainable code.
              </p>
            </div>

            {/* Philosophy */}
            <div className="rounded-lg border-l-4 border-blue-400 bg-gray-900 p-6 shadow-lg">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
                <span className="text-2xl">🎯</span>
                My Approach
              </h3>
              <p className="leading-relaxed text-gray-300">
                Believer in continuous learning and always eager to take on new
                challenges. Focused on writing efficient code, optimizing
                performance, and creating meaningful impact through technology.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutMe
