export interface SkillItem {
  title: string;
  icon: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  image?: string;
  technology: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface EducationInfo {
  school: string;
  university: string;
  field: string;
  course: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  telegram: string;
  instagram: string;
  whatsapp: string;
  pubg: string;
}

export interface PortfolioData {
  name: string;
  nickname: string;
  status: string;
  location: string;
  age: string;
  education: EducationInfo;
  contact: ContactInfo;
  interests: string[];
  rotatingTags: string[];
  skills: SkillItem[];
  github: string;
  projects: ProjectItem[];
}
