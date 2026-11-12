import React from 'react';
import { X, Printer, FileDown } from 'lucide-react';
import { personalInfo, experiences } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, isDark }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md bg-black/85 animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-3xl rounded-2xl border overflow-hidden shadow-2xl my-6 ${
          isDark ? 'bg-neutral-900 border-neutral-800 text-neutral-100' : 'bg-white border-neutral-200 text-neutral-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 print:hidden">
          <div className="text-xs font-['JetBrains_Mono'] text-emerald-400 font-semibold flex items-center gap-2">
            <span>Resume Document</span>
            <span className="text-neutral-500">·</span>
            <span>{personalInfo.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Dan_Adejinmi_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-['JetBrains_Mono'] rounded-full bg-emerald-500 text-neutral-950 font-bold hover:bg-emerald-400 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-['JetBrains_Mono'] rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
            >
              <Printer className="w-3 h-3" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 rounded-full text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto space-y-6 text-xs font-['JetBrains_Mono'] print:max-h-none">
          {/* Header */}
          <div className={`border-b pb-4 space-y-1 ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
            <h1 className={`text-2xl font-bold font-['Outfit'] uppercase ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              {personalInfo.name}
            </h1>
            <div className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
              {personalInfo.location} | {personalInfo.phone} | {personalInfo.email}
            </div>
            <div className="pt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-cyan-400">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn: linkedin.com/in/dan-adejinmi
              </a>
              <span className="text-neutral-500">|</span>
              <a
                href={personalInfo.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Portfolio: {personalInfo.portfolioDisplayUrl}
              </a>
            </div>
          </div>

          {/* Profile */}
          <div>
            <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold mb-1">
              PROFILE
            </div>
            <p className={`leading-relaxed font-sans text-xs ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {personalInfo.resumeProfile}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
              EXPERIENCE
            </div>
            {experiences.map((exp) => (
              <div key={exp.id} className={`space-y-1 pb-3 border-b last:border-b-0 ${isDark ? 'border-neutral-800/60' : 'border-neutral-200'}`}>
                <div className={`font-bold font-['Outfit'] text-sm ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  {exp.company}
                </div>
                <div className="text-neutral-400 italic">
                  {exp.role} | {exp.period}
                </div>
                <ul className={`space-y-1 pt-1 pl-4 list-disc ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  <li>Supported the Risk Management department across market, operational, and IT risk functions.</li>
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
              PROJECTS
            </div>

            <div className="space-y-1.5 pb-2">
              <div className={`font-bold font-['Outfit'] ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                PhishGuard – Phishing Detection Browser Extension
              </div>
              <div className="text-neutral-400 italic">Final Year Project</div>
              <ul className={`space-y-1 pl-4 list-disc ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                <li>Built a browser extension that detects phishing websites in real time using a Random Forest machine learning model combined with a heuristic rule engine.</li>
                <li>Integrated the VirusTotal API to cross-check URL reputation and strengthen detection accuracy.</li>
                <li>Trained and evaluated the detection model on a combined dataset of roughly 236,000 URLs (PhiUSIIL + OpenPhish).</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <div className={`font-bold font-['Outfit'] ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                Transportation App Interface
              </div>
              <div className="text-neutral-400 italic">School Project</div>
              <ul className={`space-y-1 pl-4 list-disc ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                <li>Designed a personal transportation app interface in Figma, focusing on usability and visual design.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
              EDUCATION
            </div>
            <div className="space-y-0.5">
              <div className={`font-bold font-['Outfit'] ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                Bells University of Technology, Ota, Nigeria
              </div>
              <div className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                B.Tech Computer Science | 2021 – 2026
              </div>
            </div>
            <div className="space-y-0.5">
              <div className={`font-bold font-['Outfit'] ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                Faith Foundation Model College
              </div>
              <div className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                Senior Secondary School Certificate | 2017 – 2020
              </div>
            </div>
          </div>

          {/* Training & Certification */}
          <div className="space-y-2">
            <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
              TRAINING AND CERTIFICATION
            </div>
            <div className={`space-y-1 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              <div>GMCPN Member, Computer Professionals Registration Council of Nigeria — November 2026</div>
              <div>Google Prompting Essentials Specialization, Google — October 2026</div>
              <div>New Horizons Certificate, New Horizons — July 2026</div>
              <div>ICT Training Program – Desktop Expert, Datapower Technologies — September 2015</div>
            </div>
          </div>

          {/* Key Competencies */}
          <div className="space-y-2">
            <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
              KEY COMPETENCIES
            </div>
            <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-1 pl-4 list-disc ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              <li>Python & Machine Learning (Random Forest)</li>
              <li>Cybersecurity fundamentals</li>
              <li>HTML & CSS</li>
              <li>UI/UX Design (Figma)</li>
              <li>Risk management fundamentals</li>
              <li>Public speaking & debate</li>
              <li>Teamwork</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className={`px-6 py-3 border-t flex items-center justify-between print:hidden ${isDark ? 'border-neutral-800/80' : 'border-neutral-200'}`}>
          <a
            href={personalInfo.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Dan_Adejinmi_Resume.pdf"
            className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-['JetBrains_Mono']"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Dan_Adejinmi_Resume.pdf</span>
          </a>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-['JetBrains_Mono'] font-semibold rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
