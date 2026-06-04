import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import SkillBar from '@/components/SkillBar';
import { projects, skills } from '@/lib/data';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const topSkills = skills.filter((s) => s.category === 'Frontend');

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-400 tracking-wide uppercase">Available for hire</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Alex
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
              A passionate full-stack developer crafting beautiful, performant web experiences.
              I turn complex problems into elegant digital solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl transition-colors"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium rounded-xl border border-gray-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
              { value: '12+', label: 'Technologies' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work that I'm most proud of."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="bg-gray-900/40 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading
            title="Core Skills"
            subtitle="Technologies I work with on a daily basis."
          />
          <div className="max-w-2xl mx-auto space-y-5">
            {topSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              See All Skills & Experience
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl transition-colors"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}