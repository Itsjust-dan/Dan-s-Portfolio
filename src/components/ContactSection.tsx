import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, ArrowUpRight, Linkedin, MessageSquare, X, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactSectionProps {
  isDark: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDark }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
    setIsFormOpen(false);
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['JetBrains_Mono'] border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mb-2">
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className={`text-2xl sm:text-4xl font-bold tracking-tight font-['Outfit'] ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}>
                Let's connect & build.
              </h2>
            </div>

            <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Available for cybersecurity analyst roles, front-end web engineering, and UI/UX design opportunities. Reach out via email, phone, or LinkedIn.
            </p>

            <div className="space-y-3 pt-2 text-xs font-['JetBrains_Mono']">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-neutral-900/60 border-neutral-800 text-neutral-200 hover:border-emerald-500/50 hover:text-emerald-400'
                    : 'bg-white border-neutral-200 text-neutral-800 hover:border-emerald-500/50 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Phone from CV */}
              <a
                href={`tel:${personalInfo.phone}`}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-neutral-900/60 border-neutral-800 text-neutral-200 hover:border-emerald-500/50 hover:text-emerald-400'
                    : 'bg-white border-neutral-200 text-neutral-800 hover:border-emerald-500/50 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{personalInfo.phone}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-neutral-900/60 border-neutral-800 text-neutral-200 hover:border-emerald-500/50 hover:text-emerald-400'
                    : 'bg-white border-neutral-200 text-neutral-800 hover:border-emerald-500/50 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>linkedin.com/in/dan-adejinmi</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-neutral-900/60 border-neutral-800 text-neutral-200 hover:border-emerald-500/50 hover:text-emerald-400'
                    : 'bg-white border-neutral-200 text-neutral-800 hover:border-emerald-500/50 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-emerald-400" />
                  <span>github.com/Itsjust-dan</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Location Badge */}
              <div className="p-3 rounded-xl border border-neutral-800/80 bg-neutral-900/30 flex items-center justify-between text-neutral-400 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Based in {personalInfo.location}</span>
                </span>
                <span className="text-emerald-400">Open to Relocation / Remote</span>
              </div>
            </div>
          </div>

          {/* Right Column: Send Message Button & Expandable Form */}
          <div className="lg:col-span-7">
            <div className={`rounded-2xl border transition-all duration-300 ${
              isDark ? 'bg-neutral-900/60 border-neutral-800 shadow-xl' : 'bg-white border-neutral-200 shadow-lg'
            }`}>
              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-['Outfit'] text-white">
                    Message Delivered
                  </h3>
                  <p className="text-xs text-neutral-400 font-['JetBrains_Mono'] max-w-sm mx-auto">
                    Thank you, {formData.name}. I have received your message and will reply to {formData.email} promptly.
                  </p>
                  <div className="pt-2 flex items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="text-xs font-['JetBrains_Mono'] text-emerald-400 hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                    <span className="text-neutral-600">·</span>
                    <button
                      onClick={handleReset}
                      className="text-xs font-['JetBrains_Mono'] text-neutral-400 hover:text-white cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : !isFormOpen ? (
                /* Unclicked State: Only the Send Message Trigger */
                <div className="p-8 text-center space-y-5">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-['Outfit'] text-white">
                      Direct Message
                    </h3>
                    <p className="text-xs text-neutral-400 font-['JetBrains_Mono'] mt-1 max-w-sm mx-auto leading-relaxed">
                      Have an inquiry, role opportunity, or project proposal? Click below to compose and send your message.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-full bg-emerald-500 text-neutral-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer font-['JetBrains_Mono']"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              ) : (
                /* Clicked State: Revealed Form with Name, Email & Message */
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800/60">
                    <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-emerald-400 font-semibold">
                      <Send className="w-3.5 h-3.5" />
                      <span>Compose Message</span>
                    </div>
                    <button
                      onClick={() => setIsFormOpen(false)}
                      className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                      title="Close form"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 text-xs font-['JetBrains_Mono']">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-neutral-400">Your Name *</label>
                        <input
                          type="text"
                          required
                          autoFocus
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className={`w-full px-3.5 py-2.5 rounded-xl border outline-none transition-colors ${
                            isDark
                              ? 'bg-neutral-950 border-neutral-800 text-white focus:border-emerald-500'
                              : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-500'
                          }`}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-neutral-400">Your Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. john@company.com"
                          className={`w-full px-3.5 py-2.5 rounded-xl border outline-none transition-colors ${
                            isDark
                              ? 'bg-neutral-950 border-neutral-800 text-white focus:border-emerald-500'
                              : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-500'
                          }`}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-neutral-400">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share details regarding your opportunity or inquiry..."
                        className={`w-full px-3.5 py-2.5 rounded-xl border outline-none transition-colors resize-none ${
                          isDark
                            ? 'bg-neutral-950 border-neutral-800 text-white focus:border-emerald-500'
                            : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-500'
                        }`}
                      />
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 py-3 text-xs font-semibold rounded-xl bg-emerald-500 text-neutral-950 hover:bg-emerald-400 disabled:opacity-50 transition-all font-['JetBrains_Mono'] flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>{loading ? 'Transmitting...' : 'Send Message'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsFormOpen(false)}
                        className="px-4 py-3 text-xs font-medium rounded-xl border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
