import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { BackToTop } from './components/BackToTop';
import { CyberLoadingScreen } from './components/CyberLoadingScreen';
import { SectionDivider } from './components/SectionDivider';
import { Project } from './types/portfolio';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light-theme');
      document.body.className = 'bg-[#0a0a0a] text-neutral-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300 min-h-screen';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light-theme');
      document.body.className = 'bg-neutral-50 text-neutral-900 antialiased selection:bg-emerald-500/20 selection:text-emerald-700 min-h-screen';
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen font-['Plus_Jakarta_Sans'] ${isDark ? 'bg-[#0a0a0a] text-neutral-100' : 'bg-neutral-50 text-neutral-950'}`}>
      {/* Cybersecurity Loading Screen */}
      {isLoading && (
        <CyberLoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      {/* Modern Floating Pill Navbar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero
          isDark={isDark}
          onOpenResume={() => setResumeOpen(true)}
        />

        <SectionDivider isDark={isDark} />

        {/* Experience Section (ProvidusUnity Bank: Market, Operational & IT Risk) */}
        <ExperienceSection isDark={isDark} />

        <SectionDivider isDark={isDark} />

        {/* Featured Technical Projects */}
        <ProjectsSection
          isDark={isDark}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <SectionDivider isDark={isDark} />

        {/* Education, Certifications & Resume */}
        <CredentialsSection
          isDark={isDark}
          onOpenResume={() => setResumeOpen(true)}
        />

        <SectionDivider isDark={isDark} />

        {/* Core Competencies Stack */}
        <SkillsSection isDark={isDark} />

        <SectionDivider isDark={isDark} />

        {/* Contact Section */}
        <ContactSection isDark={isDark} />
      </main>

      <SectionDivider isDark={isDark} />

      {/* Modern Footer */}
      <Footer isDark={isDark} />

      {/* Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />

      {/* Official Resume Preview Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        isDark={isDark}
      />

      {/* Scroll-Triggered Floating Back to Top Button */}
      <BackToTop isDark={isDark} />
    </div>
  );
}
