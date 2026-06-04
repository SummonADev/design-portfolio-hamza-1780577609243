import { Briefcase } from 'lucide-react';
import type { Experience } from '@/types';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-gray-800 last:pb-0">
      <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 bg-indigo-500/20 border-2 border-indigo-500 rounded-full flex items-center justify-center">
        <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
      </div>
      <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 ml-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
          <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
          <span className="text-xs font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full w-fit">
            {experience.period}
          </span>
        </div>
        <p className="text-sm text-indigo-400/80 font-medium mb-2">{experience.company}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{experience.description}</p>
      </div>
    </div>
  );
}