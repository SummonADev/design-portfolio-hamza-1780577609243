import { useState, useMemo } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import { Search } from 'lucide-react';

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesTag = activeTag ? p.tags.includes(activeTag) : true;
      return matchesSearch && matchesTag;
    });
  }, [search, activeTag]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading
        title="All Projects"
        subtitle="Browse through my complete portfolio of work."
      />

      {/* Search & Filter */}
      <div className="mb-10 space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
              activeTag === null
                ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
                : 'bg-gray-900 text-gray-400 border-gray-800 hover:border-gray-700'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                activeTag === tag
                  ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
                  : 'bg-gray-900 text-gray-400 border-gray-800 hover:border-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No projects match your search.</p>
          <button
            onClick={() => {
              setSearch('');
              setActiveTag(null);
            }}
            className="mt-4 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}