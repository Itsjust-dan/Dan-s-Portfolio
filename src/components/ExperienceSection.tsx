import React from 'react';
import { Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

interface ExperienceSectionProps {
  isDark: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isDark }) => {
  const exp = experiences[0];

  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['JetBrains_Mono'] border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Work Experience</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight font-['Outfit'] ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Experience
            </h2>
          </div>
          <div className="text-xs font-['JetBrains_Mono'] text-emerald-400 font-medium px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 self-start sm:self-auto">
            March 2025 – September 2025 · Lagos, NG
          </div>
        </div>

        {/* Clean Experience Card */}
        <div className={`group rounded-2xl border p-6 sm:p-8 transition-all hover:-translate-y-1 ${
          isDark
            ? 'bg-neutral-900/60 border-neutral-800 hover:border-emerald-500/40 shadow-xl'
            : 'bg-white border-neutral-200 hover:border-emerald-500/40 shadow-md'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-800/60 gap-2">
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold font-['Outfit'] group-hover:text-emerald-400 transition-colors ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}>
                {exp.role}
              </h3>
              <p className="text-xs text-emerald-400 font-['JetBrains_Mono'] mt-0.5">
                {exp.company} · {exp.department}
              </p>
            </div>
            <span className="text-xs font-['JetBrains_Mono'] text-neutral-400 bg-neutral-800/80 px-2.5 py-1 rounded-full self-start sm:self-auto">
              {exp.type}
            </span>
          </div>

          <p className={`mt-4 text-sm leading-relaxed ${
            isDark ? 'text-neutral-300' : 'text-neutral-700'
          }`}>
            Supported the Enterprise Risk Management (ERM) team in evaluating, documenting, and monitoring operational, IT, and market risk baselines across commercial banking operations.
          </p>

          {/* Key Bullet Highlights */}
          <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-neutral-400 font-['JetBrains_Mono']">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">▹</span>
              <span><strong>Market Risk:</strong> Monitored liquidity indicators, asset exposures, and transaction parameters.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">▹</span>
              <span><strong>Operational Risk:</strong> Maintained branch risk registers, exception documentation, and internal control checklists.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">▹</span>
              <span><strong>IT Risk:</strong> Supported reviews of system authorization controls, incident tracking, and security safeguards.</span>
            </li>
          </ul>

          {/* Competency Pills */}
          <div className="mt-6 pt-4 border-t border-neutral-800/60 flex flex-wrap items-center gap-2 text-xs font-['JetBrains_Mono']">
            <span className="text-neutral-500 text-[11px]">Domains:</span>
            {['Market Risk', 'Operational Risk', 'IT Security Safeguards', 'Incident Tracking', 'Risk Assessment'].map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 rounded-md bg-neutral-800/80 text-neutral-300 text-[11px]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
