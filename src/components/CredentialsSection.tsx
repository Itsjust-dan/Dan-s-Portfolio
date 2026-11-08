import React from 'react';
import { GraduationCap, Award, FileDown, BookOpen, CheckCircle, ExternalLink, Eye, ShieldCheck } from 'lucide-react';
import { educationList, certifications, personalInfo } from '../data/portfolioData';

interface CredentialsSectionProps {
  isDark: boolean;
  onOpenResume?: () => void;
  onOpenCertificate?: (url: string, title: string) => void;
}

export const CredentialsSection: React.FC<CredentialsSectionProps> = ({ isDark, onOpenResume, onOpenCertificate }) => {
  return (
    <section id="education" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Education */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['JetBrains_Mono'] border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Background</span>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight font-['Outfit'] ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}>
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {educationList.map((edu) => (
                <div
                  key={edu.id}
                  className={`p-6 rounded-2xl border transition-all ${
                    isDark ? 'bg-neutral-900/60 border-neutral-800 shadow-md' : 'bg-white border-neutral-200 shadow-md'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-neutral-800/80">
                    <div>
                      <h3 className="text-lg font-bold font-['Outfit'] text-white">
                        {edu.degree}
                      </h3>
                      <div className="text-xs font-['JetBrains_Mono'] text-emerald-400 mt-0.5">
                        {edu.institution} · {edu.location}
                      </div>
                    </div>
                    <span className="text-xs font-['JetBrains_Mono'] text-neutral-300 bg-neutral-800/80 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 self-start">
                      {edu.period}
                    </span>
                  </div>

                  <div className="mt-3 text-xs font-semibold text-cyan-400 font-['JetBrains_Mono']">
                    Status: {edu.grade}
                  </div>

                  {edu.coursework && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-0.5 rounded text-[11px] font-['JetBrains_Mono'] bg-neutral-800/80 text-neutral-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Training & Official CV */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['JetBrains_Mono'] border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>Certification</span>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight font-['Outfit'] ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}>
                Training & Verified Program
              </h2>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`p-4 rounded-xl border transition-all ${
                    isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] text-neutral-500 mb-1 gap-2">
                    <span className="truncate">{cert.issuer}</span>
                    <span className="text-emerald-400 whitespace-nowrap shrink-0">{cert.date}</span>
                  </div>
                  <div className="font-semibold text-sm font-['Outfit'] text-white">
                    {cert.name}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2 text-[11px] font-['JetBrains_Mono'] text-neutral-400">
                    {cert.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* GMCPN Certificate Document Card */}
              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 via-neutral-900 to-neutral-950 text-white space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-['JetBrains_Mono'] tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>GMCPN Certificate</span>
                  </span>
                  <span className="text-[10px] text-neutral-400 font-['JetBrains_Mono'] bg-neutral-800/80 px-2 py-0.5 rounded">
                    Certificate No: GM/0016625/2026
                  </span>
                </div>
                <div className="text-sm font-bold font-['Outfit'] text-white">
                  Graduate Member – Computer Professionals (Registration Council of Nigeria)
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Duly registered and authorised by Decree No. 49 of 1993 to practice the computing profession within the Federal Republic of Nigeria with post-nominal <strong>GMCPN</strong> (Dated 3rd November 2026).
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => {
                      if (onOpenCertificate) {
                        onOpenCertificate(personalInfo.gmcpnCertificateUrl, 'GMCPN Certificate — Adejinmi Dan Toluwase');
                      } else {
                        window.open(personalInfo.gmcpnCertificateUrl, '_blank');
                      }
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-cyan-500 text-neutral-950 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer font-['JetBrains_Mono']"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={personalInfo.gmcpnCertificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-medium rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white hover:border-cyan-500/50 transition-all"
                    title="Open PDF in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Resume Document Card */}
              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/30 to-neutral-900 text-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-['JetBrains_Mono'] tracking-wider text-emerald-400 font-bold">
                    Resume Document
                  </span>
                  <span className="text-[10px] text-neutral-400 font-['JetBrains_Mono']">PDF / Interactive</span>
                </div>
                <div className="text-sm font-bold font-['Outfit']">
                  Resume Document
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  View the updated CV with verified contact information, Bells University Computer Science education, ProvidusUnity Bank risk experience, GMCPN membership, and PhishGuard project.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={onOpenResume}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-emerald-500 text-neutral-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer font-['JetBrains_Mono']"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Resume</span>
                  </button>

                  <a
                    href={personalInfo.resumePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-medium rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white hover:border-emerald-500/50 transition-all"
                    title="Open PDF directly in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
