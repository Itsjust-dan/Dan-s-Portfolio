import React from 'react';
import { ArrowUpRight, MapPin, Mail, Phone, Linkedin, Eye, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  isDark: boolean;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDark, onOpenResume }) => {
  return (
    <section id="about" className="relative pt-16 pb-20 md:pt-24 md:pb-24 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-7">
          {/* Status badge */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-['JetBrains_Mono'] border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Opportunities · Lagos, Nigeria</span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <div className="text-sm sm:text-base font-['JetBrains_Mono'] text-neutral-400 tracking-wide">
              Hi, I'm
            </div>
            <h1 className={`text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight font-['Outfit'] leading-[1.08] ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Dan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Adejinmi
              </span>
            </h1>
            <p className="text-lg sm:text-2xl font-semibold text-emerald-400 font-['Outfit'] pt-1">
              Cybersecurity Analyst · Front-End Developer · UI/UX Designer
            </p>
          </div>

          {/* Spread Bio text */}
          <p className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl ${
            isDark ? 'text-neutral-300 font-light' : 'text-neutral-700'
          }`}>
            {personalInfo.profile}
          </p>

          {/* Action buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-full bg-emerald-500 text-neutral-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className={`inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium rounded-full border transition-all cursor-pointer ${
                isDark
                  ? 'border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-800 hover:border-emerald-500/50'
                  : 'border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100 hover:border-emerald-500/50 shadow-sm'
              } hover:scale-105 active:scale-95`}
            >
              <Eye className="w-4 h-4 text-emerald-400" />
              <span>View Resume</span>
            </button>

            <a
              href="#contact"
              className={`inline-flex items-center gap-1.5 px-5 py-3 text-xs sm:text-sm font-semibold rounded-full border transition-all ${
                isDark
                  ? 'border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 bg-neutral-900/40'
                  : 'border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-500 bg-neutral-50'
              }`}
            >
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Quick contact / social icon links (icon-only until hover, clickable to destinations) */}
          <div className={`pt-4 border-t flex flex-wrap items-center gap-3 text-xs font-['JetBrains_Mono'] ${
            isDark ? 'border-neutral-800/60' : 'border-neutral-200'
          }`}>
            {[
              {
                label: personalInfo.location,
                href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
                external: true,
                icon: <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />,
                ariaLabel: `Location: ${personalInfo.location}`,
                accent: 'hover:border-emerald-500/50 hover:text-emerald-400',
              },
              {
                label: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
                external: false,
                icon: <Mail className="w-4 h-4 text-emerald-400 shrink-0" />,
                ariaLabel: `Email: ${personalInfo.email}`,
                accent: 'hover:border-emerald-500/50 hover:text-emerald-400',
              },
              {
                label: personalInfo.phone,
                href: `tel:${personalInfo.phone}`,
                external: false,
                icon: <Phone className="w-4 h-4 text-emerald-400 shrink-0" />,
                ariaLabel: `Phone: ${personalInfo.phone}`,
                accent: 'hover:border-emerald-500/50 hover:text-emerald-400',
              },
              {
                label: 'LinkedIn',
                href: personalInfo.linkedinUrl,
                external: true,
                icon: <Linkedin className="w-4 h-4 text-cyan-400 shrink-0" />,
                ariaLabel: 'LinkedIn Profile',
                accent: 'hover:border-cyan-500/50 hover:text-cyan-400',
              },
              {
                label: 'GitHub',
                href: personalInfo.githubUrl,
                external: true,
                icon: <Github className="w-4 h-4 text-emerald-400 shrink-0" />,
                ariaLabel: 'GitHub Profile',
                accent: 'hover:border-emerald-500/50 hover:text-emerald-400',
              },
            ].map((item) => (
              <a
                key={item.ariaLabel}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                aria-label={item.ariaLabel}
                className={`group inline-flex items-center h-10 px-3 rounded-full border transition-all duration-300 ${
                  isDark
                    ? 'border-neutral-800 bg-neutral-900/60 text-neutral-300'
                    : 'border-neutral-200 bg-white text-neutral-700 shadow-sm'
                } ${item.accent}`}
              >
                {item.icon}
                <span className="max-w-0 overflow-hidden opacity-0 whitespace-nowrap group-hover:max-w-[220px] group-hover:opacity-100 group-hover:ml-2 group-focus-visible:max-w-[220px] group-focus-visible:opacity-100 group-focus-visible:ml-2 transition-all duration-300">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
