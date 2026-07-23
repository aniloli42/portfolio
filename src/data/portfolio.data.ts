import { PortfolioData } from "@/types/portfolio.types";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Anil Oli",
    title: "Software Developer  & Computer Science Student",
    bio: "Passionate computer science student specializing in backend development with expertise in TypeScript, Node.js, and modern web technologies. Experienced in building scalable applications and optimizing database performance.",
    location: "San Marcos, TX",
    email: "anil.oli@aniloli42.me",
    socials: [
      {
        platform: "GitHub",
        url: "https://github.com/aniloli42",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/aniloli",
      },
    ],
  },

  experiences: [
    {
      position: "Course Grader",
      company: "Texas State University — Department of Computer Science",
      location: "San Marcos, TX",
      startDate: "Jan 2026",
      endDate: "Present",
      achievements: [
        "Evaluate programming and written assignments for two concurrent courses, CS 3354 (Object-Oriented Design) and CS 2315, applying detailed rubrics to keep grading consistent and fair across all submissions.",
        "Coordinate with faculty on rubric interpretation, deadlines, and edge cases, ensuring accurate and timely feedback that helps students correct misconceptions early.",
        "Maintain the integrity of academic records by cross-checking scores and resolving grading discrepancies before grades are finalized.",
        "Review object-oriented design submissions for correctness and code quality, reinforcing sound software engineering practices in student work.",
      ],
    },
    {
      position: "Backend Developer",
      company: "InternSathi – Sathi Edtech Private Limited",
      location: "Kathmandu, Nepal",
      startDate: "Jan 2023",
      endDate: "July 2023",
      achievements: [
        "Refactored the database schema using Prisma, enhancing data consistency and improving code maintainability, which reduced database-related bugs by 20%.",
        "Collaborated with the team to analyze business requirements and implement new application features using Nest.js and TypeScript, resulting in a 15% increase in development efficiency.",
        "Designed and managed data storage solutions with PostgreSQL, ensuring efficient and structured data handling, which improved query response times by 30%.",
        "Played a pivotal role in implementing business logic and tracking project task logs, optimizing project timelines and accelerating task completion by 25%.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science",
      field: "Computer Science, Minor in Data Analytics",
      institution: "Texas State University",
      location: "San Marcos, TX",
      startDate: "Aug 2024",
      endDate: "May 2028",
      honors: [
        "Dean's List (All terms)",
        "Honors College Student",
      ],
      gpa: "3.84/4.0",
    },
  ],

  skills: [
    {
      category: "Languages, Libraries & Frameworks",
      skills: [
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Node.js",
        "React",
        "Express.js",
        "Nest.js",
        "C++",
        "Java",
      ],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      category: "Operating Systems",
      skills: ["Linux", "Windows", "macOS"],
    },
    {
      category: "Tools & Software",
      skills: ["Visual Studio Code", "Neovim", "Docker", "Git", "GitHub"],
    },
  ],

  projects: [
  {
    title: "Enhanced RAG AI Assistant",
    description:
      "Enhanced a Retrieval-Augmented Generation (RAG) AI assistant as an Honors Contract project — improved retrieval quality with recursive, boundary-aware chunking, expanded ingestion to PDF, DOCX, and Markdown, and built a React chat interface backed by FastAPI with persistent conversation history.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Qdrant",
      "LangChain",
      "Google Gemini",
      "Docker",
    ],
    repositoryUrl:
      "https://bitbucket.org/aniloli_codes/assignment-build-your-own-ai-assistant-main",
    // liveUrl: add if you have a deployed demo
  },
  {
    title: "Institutional Notice Broadcasting Automated System",
    description:
      "Developed and deployed an automated system to streamline the extraction and posting of CTEVT notices, increasing Facebook page user engagement by 25% through timely content delivery.",
    technologies: [
      "Puppeteer.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Facebook Graph API",
    ],
    repositoryUrl:
      "https://github.com/aniloli42/ctevt-notice-to-facebook-post-automation",
    liveUrl: "https://noticeapi.aniloli42.me",
  },
  {
    title: "Donate – Blood Management System",
    description:
      "Developed a full-stack blood donation management system using the MERN stack, self-learning technologies during the project.",
    technologies: [
      "MongoDB",
      "React.js",
      "Node.js",
      "Express.js",
      "Redux",
      "CSS3",
    ],
    repositoryUrl:
      "https://github.com/aniloli42/donate-blood-management-mern",
    liveUrl: "https://donate.aniloli42.me",
  },
],

awards: [
  {
    title: "2nd Place — Business Solutions Using AI",
    year: "2026",
    issuer: "Midwest Collegiate Computing Conference (MWC3)",
    type: "award",
  },
  {
    title: "TXST Dean's List",
    year: "All terms",
    issuer: "Texas State University",
    type: "award",
  },
  {
    title: "Foundations of AI Engineering",
    year: "2026",
    issuer: "CodePath",
    type: "certification",
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    year: "2025",
    issuer: "IBM (via Coursera)",
    type: "certification",
  },
  {
    title: "Bobcat LEAD",
    issuer: "Texas State University - Student Involvement and Engagement",
    type: "certification",
  },
],

  communityInvolvement: [
    {
      organization: "ITSA",
      role: "Member",
      startDate: "Fall 2025",
      endDate: "Present",
      description:
        "Participated in Texas State University's Information Technology Student Association (ITSA), engaging in tech talks, workshops, and networking events to enhance technical skills and industry knowledge.",
    },
    {
      organization: "ECO Club",
      role: "Member",
      startDate: "2014",
      endDate: "2018",
      description:
        "Participated in environmental awareness campaigns and community clean-up initiatives. Organized tree plantation drives and educational workshops on sustainability practices.",
    },
    {
      organization: "Gadhawa Youth Club",
      role: "Member",
      startDate: "2016",
      endDate: "2018",
      description:
        "Engaged in youth empowerment programs and community development projects. Collaborated on organizing cultural events and social awareness activities for local communities.",
    },
  ],
};
