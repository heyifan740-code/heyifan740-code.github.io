export interface Education {
  institution: string;
  location: string;
  degree: string;
  major: string;
  concentration?: string;
  period: string;
  details?: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface Project {
  title: string;
  period: string;
  role?: string;
  details: string[];
  publication?: string;
  company?: string; // For competitions/orgs
  video?: string; // URL to video resource
  images?: string[]; // URLs to project images
}

export interface Publication {
  title: string;
  conference: string;
  date: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ResumeData {
  contact: {
    name: string;
    email: string;
    phone: string;
    title: string;
    location: string;
  };
  education: Education[];
  experience: Experience[];
  research: Project[];
  competitions: Project[];
  publications: Publication[];
  skills: SkillCategory[];
  summary: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}