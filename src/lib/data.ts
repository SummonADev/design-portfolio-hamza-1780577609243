import type { Project, Skill, Experience } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart, and checkout built with React and Node.js.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, drag-and-drop, and team workspaces.',
    tags: ['TypeScript', 'React', 'WebSocket', 'Redis'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with 7-day forecasts, interactive maps, and location-based search.',
    tags: ['React', 'API Integration', 'Chart.js', 'CSS'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'AI Chat Interface',
    description: 'An intelligent chatbot interface with streaming responses, conversation history, and theme customization.',
    tags: ['TypeScript', 'OpenAI', 'React', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness tracking app with workout logging, progress charts, and meal planning.',
    tags: ['React Native', 'TypeScript', 'Firebase', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 6,
    title: 'Portfolio CMS',
    description: 'A headless CMS designed specifically for developer portfolios with markdown support and API access.',
    tags: ['Next.js', 'GraphQL', 'MongoDB', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Backend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'GraphQL', level: 78, category: 'Backend' },
  { name: 'Docker', level: 72, category: 'DevOps' },
  { name: 'AWS', level: 68, category: 'DevOps' },
  { name: 'CI/CD', level: 77, category: 'DevOps' },
  { name: 'Git', level: 93, category: 'DevOps' },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    period: '2022 – Present',
    description: 'Lead frontend architecture for multiple high-traffic web applications. Mentored junior developers and established coding standards and review processes.',
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 – 2022',
    description: 'Built and maintained the core product from MVP to 50k+ users. Implemented real-time features and optimized database performance.',
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'WebAgency Co.',
    period: '2018 – 2020',
    description: 'Developed responsive websites and web applications for various clients. Gained experience in React, Node.js, and modern web technologies.',
  },
];