import React from 'react';
import { education, languages } from '../data/portfolioData';
import { GraduationCap, Globe, MapPin, Calendar, CheckCircle2, Terminal } from 'lucide-react';

export const EducationLanguages: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-[#090D17] border-y border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#E2C38A] mb-2.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>07 / Credentials & Communication</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Academic Background & Languages
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md">
            Computer science foundation bridging technical infrastructure, modern MarTech, and cross-cultural communication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Card */}
          <div className="lg:col-span-7 rounded-3xl p-7 sm:p-9 bg-[#0C121E] border border-white/[0.08] shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#E2C38A]/10 border border-[#E2C38A]/25 flex items-center justify-center text-[#E2C38A]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E2C38A] block">
                    Degree Qualification
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {education.degree}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-300 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/[0.08] self-start sm:self-auto">
                {education.period}
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
                <div className="font-semibold text-white">
                  {education.institution}
                </div>
                <span className="text-slate-600">•</span>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[#E2C38A]" />
                  <span>{education.location}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-3 border-t border-white/[0.06]">
                {education.highlight}
              </p>

              {/* Technical Synergies */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <div className="text-xs font-bold text-[#E2C38A]">MarTech & Analytics</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Google Analytics & Zoho</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <div className="text-xs font-bold text-blue-400">Software Workflows</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Jira & YouTrack</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <div className="text-xs font-bold text-emerald-400">Web Infrastructure</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">SEO & Systems Architecture</div>
                </div>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="lg:col-span-5 rounded-3xl p-7 sm:p-9 bg-[#0C121E] border border-white/[0.08] shadow-xl">
            <div className="flex items-center gap-3.5 pb-6 border-b border-white/[0.08] mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 block">
                  Communication
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Languages
                </h3>
              </div>
            </div>

            <div className="space-y-3.5">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{lang.name}</h4>
                      <p className="text-xs text-slate-400">{lang.proficiency}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#E2C38A] bg-[#E2C38A]/10 px-2.5 py-1 rounded-full border border-[#E2C38A]/20">
                    Fluent
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300 leading-relaxed">
              Provides seamless verbal and written stakeholder navigation across UAE multicultural corporate settings and South Asian commercial networks.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
