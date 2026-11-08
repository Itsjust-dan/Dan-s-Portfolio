import React from 'react';
import { Shield, Code, Palette, Users, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

interface SkillsSectionProps {
  isDark: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ isDark }) => {
  const icons = [
    <Shield key="cyber" className="w-4 h-4 text-emerald-400" />,
    <Users key="risk" className="w-4 h-4 text-cyan-400" />,
    <Code key="frontend" className="w-4 h-4 text-teal-400" />,
    <Palette key="uiux" className="w-4 h-4 text-emerald-300" />,
  ];

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['JetBrains_Mono'] border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Key Competencies</span>
          </div>
          <h2 className={`text-2xl sm:text-4xl font-bold tracking-tight font-['Outfit'] ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`p-6 rounded-2xl border space-y-4 transition-all hover:-translate-y-1 ${
                isDark
                  ? 'bg-neutral-900/60 border-neutral-800 hover:border-emerald-500/40 shadow-lg'
                  : 'bg-white border-neutral-200 hover:border-emerald-500/40 shadow-md'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  {icons[idx]}
                </div>
                <h3 className="font-['Outfit'] font-bold text-base text-white">
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-2 text-xs font-['JetBrains_Mono'] text-neutral-300">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold select-none">›</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
