import React from 'react';
import { X, ArrowUpRight, ShieldCheck, Layers, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDark }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/85 animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-3xl rounded-2xl border overflow-hidden shadow-2xl my-6 ${
          isDark ? 'bg-neutral-900 border-neutral-800 text-neutral-100' : 'bg-white border-neutral-200 text-neutral-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80">
          <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-emerald-400">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <h2 className="text-2xl font-bold font-['Outfit'] tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs font-medium text-emerald-400 mt-0.5 font-['JetBrains_Mono']">
              {project.subtitle}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl border border-neutral-800 bg-neutral-950/60">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-base sm:text-lg font-bold font-['Outfit'] text-emerald-400">
                  {metric.value}
                </div>
                <div className="text-[11px] text-neutral-400 font-['JetBrains_Mono'] mt-0.5">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className={`p-4 rounded-xl border space-y-1.5 ${
              isDark ? 'bg-neutral-950/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}>
              <span className="font-['JetBrains_Mono'] uppercase tracking-wider text-amber-400 font-semibold block">
                Challenge & Context
              </span>
              <p className="text-neutral-300 leading-relaxed">{project.challenge}</p>
            </div>
            <div className={`p-4 rounded-xl border space-y-1.5 ${
              isDark ? 'bg-neutral-950/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}>
              <span className="font-['JetBrains_Mono'] uppercase tracking-wider text-emerald-400 font-semibold block">
                Engineered Solution
              </span>
              <p className="text-neutral-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Security Controls or Design Highlights */}
          {project.securityControls && (
            <div className="space-y-2">
              <div className="text-xs font-['JetBrains_Mono'] text-neutral-400 uppercase tracking-wider font-semibold">
                Threat Mitigation & Architecture
              </div>
              <div className="space-y-1.5 text-xs">
                {project.securityControls.map((c, i) => (
                  <div key={i} className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-950/50">
                    <span className="font-semibold text-emerald-400 font-['JetBrains_Mono']">
                      {c.framework}:{' '}
                    </span>
                    <span className="text-neutral-300">{c.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 text-xs font-['JetBrains_Mono'] text-neutral-400 pt-2 border-t border-neutral-800">
            <span className="text-neutral-500">Tech Stack:</span>
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-200">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-neutral-800/80 flex items-center justify-between">
          <span className="text-[11px] font-['JetBrains_Mono'] text-neutral-500">
            {project.title}
          </span>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-['JetBrains_Mono'] font-semibold rounded-full bg-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-700 transition-all border border-neutral-700 hover:border-emerald-500/50"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            )}
            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-['JetBrains_Mono'] font-semibold rounded-full bg-purple-600 text-white hover:bg-purple-500 transition-all shadow-md shadow-purple-600/20"
              >
                <span>Open in Figma</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-['JetBrains_Mono'] font-semibold rounded-full bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
