import React from 'react';
import { ArrowUpRight, ExternalLink, Layers, Github } from 'lucide-react';
import { technicalProjects } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectsSectionProps {
  isDark: boolean;
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDark, onSelectProject }) => {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['JetBrains_Mono'] border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Selected Works</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight font-['Outfit'] ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            Projects
          </h2>
        </div>

        {/* 3-Column Side-by-Side Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {technicalProjects.map((project) => {
            const isGoRide = project.id === 'transportation-app-interface';

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (isGoRide && project.figmaUrl) {
                    window.open(project.figmaUrl, '_blank');
                  } else {
                    onSelectProject(project);
                  }
                }}
                className={`group rounded-2xl border p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full ${
                  isGoRide
                    ? isDark
                      ? 'border-emerald-500/40 hover:border-emerald-400 bg-neutral-900/70 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20'
                      : 'border-emerald-500/40 hover:border-emerald-500 bg-white shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20'
                    : isDark
                    ? 'bg-neutral-900/60 border-neutral-800 hover:border-emerald-500/50 shadow-md hover:shadow-xl'
                    : 'bg-white border-neutral-200 hover:border-emerald-500/50 shadow-sm hover:shadow-md'
                } hover:-translate-y-0.5`}
              >
                <div>
                  {/* Card Top Meta */}
                  <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-2 pb-3 border-b border-neutral-800/60 text-xs font-['JetBrains_Mono']">
                    <span className="px-2.5 py-1 rounded-full bg-neutral-800/80 text-neutral-400 text-[10px] sm:whitespace-nowrap">
                      {project.categoryLabel}
                    </span>
                    <span className="text-emerald-400 text-[11px] whitespace-nowrap shrink-0">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-4">
                    <h3 className={`text-lg font-bold font-['Outfit'] tracking-tight leading-snug group-hover:text-emerald-400 transition-colors flex items-start justify-between gap-2 ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}>
                      <span>{project.title}</span>
                      {isGoRide ? (
                        <ExternalLink className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-emerald-400 shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      )}
                    </h3>
                    <p className="text-[11px] font-['JetBrains_Mono'] text-neutral-400 mt-1.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack & Direct Actions */}
                <div className="mt-5 pt-4 border-t border-neutral-800/60 space-y-3 text-xs font-['JetBrains_Mono']">
                  <div className="flex flex-wrap gap-1.5 text-neutral-400">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-neutral-800/80 text-neutral-300 text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-700 transition-all border border-neutral-700 hover:border-emerald-500/50"
                        title="View source on GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {isGoRide ? (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
                      >
                        <span>Open in Figma</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors ml-auto">
                        <span>Inspect Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
