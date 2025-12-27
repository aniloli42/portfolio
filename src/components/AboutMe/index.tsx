"use client";

import Container from "../ui/Container";

const AboutMe = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800" id="about">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Main Bio */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg border-l-4 border-blue-600 dark:border-blue-400">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">👨‍💻</span>
                Background
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Computer Science student at Texas State University, specializing in backend development 
                with a minor in Data Analytics. Passionate about building efficient, scalable solutions 
                that solve real-world problems.
              </p>
            </div>

            {/* Experience Highlight */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg border-l-4 border-blue-600 dark:border-blue-400">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Expertise
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Hands-on experience with TypeScript, Node.js, Next.js, and Nest.js. 
                Proven track record in improving development efficiency, optimizing database 
                performance, and delivering measurable results.
              </p>
            </div>

            {/* Passion */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg border-l-4 border-blue-600 dark:border-blue-400">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                What I Do
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Continuously exploring new technologies, automating workflows, 
                and contributing to open-source projects. Love tackling complex problems 
                with clean, maintainable code.
              </p>
            </div>

            {/* Philosophy */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg border-l-4 border-blue-600 dark:border-blue-400">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                My Approach
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Believer in continuous learning and always eager to take on new challenges. 
                Focused on writing efficient code, optimizing performance, and creating 
                meaningful impact through technology.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;

