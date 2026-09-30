import React from 'react';
import { experiences } from '../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  Flame, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#070A11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#E2C38A] mb-2.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>02 / Career Progression & Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Professional Experience
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md">
            8+ years spanning Dubai corporate accounts, high-stakes crisis event turnarounds, and 6+ years as Head of Marketing & BD.
          </p>
        </div>

        {/* Stacked Editorial Timeline */}
        <div className="space-y-10">
          {experiences.map((exp, idx) => {
            const isFeatured = exp.isFeatured;
            const isLongest = exp.isLongestTenure;

            return (
              <div
                key={exp.id}
                className={`relative rounded-3xl p-6 sm:p-10 transition-all duration-300 border ${
                  isFeatured
                    ? 'bg-gradient-to-br from-[#131D2D] via-[#0C121E] to-[#070A11] border-[#E2C38A]/40 shadow-2xl shadow-[#E2C38A]/5'
                    : isLongest
                    ? 'bg-gradient-to-br from-[#0F1626] to-[#080C15] border-blue-500/30 shadow-2xl shadow-blue-500/5'
                    : 'bg-[#0B101B] border-white/[0.08] hover:border-white/[0.15] shadow-xl'
                }`}
              >
                {/* Top Row: Role, Company, Period, Location */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
                  <div>
                    {/* Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[11px] font-mono font-bold text-slate-400 bg-white/[0.04] px-2.5 py-0.5 rounded border border-white/[0.08]">
                        0{idx + 1}
                      </span>
                      {exp.featuredBadge && (
                        <span
                          className={`text-xs font-semibold px-3 py-0.5 rounded-full inline-flex items-center gap-1.5 ${
                            isFeatured
                              ? 'bg-[#E2C38A]/15 text-[#E2C38A] border border-[#E2C38A]/35'
                              : 'bg-blue-500/15 text-blue-300 border border-blue-500/35'
                          }`}
                        >
                          {isFeatured && <Flame className="w-3.5 h-3.5" />}
                          {isLongest && <Star className="w-3.5 h-3.5" />}
                          <span>{exp.featuredBadge}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-base sm:text-lg font-bold text-[#E2C38A] mt-1">
                      {exp.company}
                    </div>
                  </div>

                  {/* Metadata pills */}
                  <div className="flex flex-wrap lg:flex-col lg:items-end gap-2 text-xs font-mono text-slate-300 shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                      <Calendar className="w-3.5 h-3.5 text-[#E2C38A]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                      <MapPin className="w-3.5 h-3.5 text-[#E2C38A]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Accounts Managed if available */}
                {exp.keyClients && exp.keyClients.length > 0 && (
                  <div className="mb-6 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Enterprise Accounts Serviced:
                    </span>
                    {exp.keyClients.map((client, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/[0.04] text-slate-200 border border-white/[0.08]"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                )}

                {/* Responsibilities Editorial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-3 hover:border-white/[0.1] transition-colors"
                    >
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#E2C38A]/10 border border-[#E2C38A]/30 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-[#E2C38A]" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>

                {/* DUCAB Crisis Turnaround Callout */}
                {exp.id === 'ducab-rescue' && (
                  <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#E2C38A]/10 via-[#E2C38A]/5 to-transparent border border-[#E2C38A]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-[#E2C38A]/20 text-[#E2C38A] shrink-0">
                        <Flame className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white mb-0.5">
                          High-Stakes Crisis Turnaround • Jebel Ali Resorts
                        </div>
                        <div className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                          Taking ownership with only 7 days remaining, Hassam rapidly mobilized labor, solved severe venue ground slopes, re-engineered stage framing around two mature palm trees, and delivered a benchmark celebration that earned DUCAB's subsequent 3-year contract.
                        </div>
                      </div>
                    </div>
                    <a
                      href="#selected-work"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#E2C38A] shrink-0 hover:underline"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
