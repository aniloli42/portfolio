export interface SocialLink {
  platform: string
  url: string
  icon?: string
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  location: string
  email: string
  phone: string
  socials: SocialLink[]
}

export interface Experience {
  position: string
  company: string
  location: string
  startDate: string
  endDate: string
  achievements: string[]
}

export interface Education {
  degree: string
  field: string
  institution: string
  location: string
  startDate: string
  endDate: string
  gpa?: string
  honors?: string[]
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  repositoryUrl?: string
  liveUrl?: string
}

export interface Award {
  title: string
  year?: string
  issuer?: string
  type?: 'award' | 'achievement' | 'certification'
}

export interface CommunityInvolvement {
  organization: string
  role?: string
  startDate?: string
  endDate?: string
  description?: string
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  experiences: Experience[]
  education: Education[]
  skills: SkillCategory[]
  projects: Project[]
  awards: Award[]
  communityInvolvement?: CommunityInvolvement[]
}
