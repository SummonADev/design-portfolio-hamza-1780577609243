import SectionHeading from '@/components/SectionHeading';
import SkillBar from '@/components/SkillBar';
import ExperienceCard from '@/components/ExperienceCard';
import { skills, experiences } from '@/lib/data';
import { User, MapPin, Calendar, Coffee } from 'lucide-react';

export default function AboutPage() {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Me</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a full-stack developer with over 5 years of experience building web applications.
              I specialize in React, TypeScript, and Node.js, and I'm passionate about creating
              intuitive, performant, and accessible digital experiences.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or enjoying a good cup of coffee while reading about design
              patterns and software architecture.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: User, label: 'Alex Developer' },
                { icon: MapPin, label: 'San Francisco, CA' },
                { icon: Calendar, label: '5+ Years Experience' },
                { icon: Coffee, label: 'Coffee Enthusiast' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg border border-gray-800"
                >
                  <item.icon className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-sm text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
                  <span className="text-5xl font-bold text-white">A</span>
                </div>
                <p className="text-xl font-semibold text-white">Alex Developer</p>
                <p className="text-indigo-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-900/40 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading
            title="Skills & Technologies"
            subtitle="A comprehensive overview of my technical capabilities."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-indigo-400 mb-5">{category}</h3>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey so far."
        />
        <div className="max-w-2xl mx-auto">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </section>
    </div>
  );
}