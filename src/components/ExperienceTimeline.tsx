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
    <section id="experience" className="py-24 md:py-32 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-700 mb-2.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>02 / Career Progression & Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Professional Experience
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 max-w-md">
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
                    ? 'bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 border-amber-300 shadow-lg shadow-amber-500/5'
                    : isLongest
                    ? 'bg-gradient-to-br from-blue-50/60 via-white to-slate-50 border-blue-200 shadow-lg shadow-blue-500/5'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Top Row: Role, Company, Period, Location */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
                  <div>
                    {/* Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[11px] font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                        0{idx + 1}
                      </span>
                      {exp.featuredBadge && (
                        <span
                          className={`text-xs font-semibold px-3 py-0.5 rounded-full inline-flex items-center gap-1.5 ${
                            isFeatured
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : 'bg-blue-100 text-blue-900 border border-blue-300'
                          }`}
                        >
                          {isFeatured && <Flame className="w-3.5 h-3.5 text-amber-600" />}
                          {isLongest && <Star className="w-3.5 h-3.5 text-blue-600" />}
                          <span>{exp.featuredBadge}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-base sm:text-lg font-bold text-amber-700 mt-1">
                      {exp.company}
                    </div>
                  </div>

                  {/* Metadata pills */}
                  <div className="flex flex-wrap lg:flex-col lg:items-end gap-2 text-xs font-mono text-slate-600 shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Accounts Managed if available */}
                {exp.keyClients && exp.keyClients.length > 0 && (
                  <div className="mb-6 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                      Enterprise Accounts Serviced:
                    </span>
                    {exp.keyClients.map((client, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200"
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
                      className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3 hover:bg-white hover:border-slate-300 transition-all"
                    >
                      <div className="mt-1 w-4 h-4 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-amber-700" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>

                {/* DUCAB Crisis Turnaround Callout */}
                {exp.id === 'ducab-rescue' && (
                  <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-amber-100/70 via-amber-50 to-white border border-amber-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-amber-200/80 text-amber-900 shrink-0">
                        <Flame className="w-5 h-5 text-amber-700" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 mb-0.5">
                          High-Stakes Crisis Turnaround • Jebel Ali Resorts
                        </div>
                        <div className="text-xs text-slate-700 leading-relaxed max-w-3xl">
                          Taking ownership with only 7 days remaining, Hassam rapidly mobilized labor, solved severe venue ground slopes, re-engineered stage framing around two mature palm trees, and delivered a benchmark celebration that earned DUCAB's subsequent 3-year contract.
                        </div>
                      </div>
                    </div>
                    <a
                      href="#selected-work"
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 shrink-0 hover:text-amber-900 hover:underline"
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
