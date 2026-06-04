export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}