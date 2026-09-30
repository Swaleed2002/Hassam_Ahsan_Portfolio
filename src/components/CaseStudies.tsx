import React, { useState } from 'react';
import { projects, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  FolderKanban, 
  Sparkles, 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  ArrowRight, 
  Eye, 
  CheckCircle2, 
  Flame, 
  Users, 
  Target,
  Layers,
  Building
} from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="selected-work" className="py-24 md:py-32 bg-[#090D17] border-y border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#E2C38A] mb-2.5">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>03 / Featured Commercial Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Selected Work & Turnarounds
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md">
            Large-scale multi-million budget launches, technology expos, and high-stakes crisis event rescues.
          </p>
        </div>

        {/* Expansive Case Study Sections (Stacked Large Formats) */}
        <div className="space-y-16">
          {projects.map((proj, idx) => {
            const isCenterpiece = proj.isCenterpiece;

            return (
              <div
                key={proj.id}
                className={`relative rounded-3xl p-6 sm:p-10 lg:p-12 transition-all duration-300 border ${
                  isCenterpiece
                    ? 'bg-gradient-to-br from-[#131D2D] via-[#0C121E] to-[#070A11] border-[#E2C38A]/50 shadow-2xl shadow-[#E2C38A]/10'
                    : 'bg-[#0B101B] border-white/[0.08] hover:border-white/[0.15] shadow-xl'
                }`}
              >
                {/* Top Category & Identifier */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-slate-400 bg-white/[0.05] px-3 py-1 rounded-full border border-white/[0.08]">
                      Case Study 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#E2C38A] bg-[#E2C38A]/10 px-3 py-1 rounded-full border border-[#E2C38A]/25">
                      {proj.category}
                    </span>
                    {proj.badge && (
                      <span className="text-xs font-semibold text-slate-200 bg-white/[0.06] px-3 py-1 rounded-full border border-white/[0.1]">
                        {proj.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                    {proj.duration && (
                      <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        Duration: {proj.duration}
                      </span>
                    )}
                    {proj.budget && (
                      <span className="px-3 py-1 rounded-lg bg-[#E2C38A]/10 border border-[#E2C38A]/30 text-[#E2C38A] font-bold">
                        Budget: {proj.budget}
                      </span>
                    )}
                  </div>
                </div>

                {/* Main Spread: 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8">
                  
                  {/* Left Column: Context, Role & Scope */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                        {proj.title}
                      </h3>
                      <p className="text-base sm:text-lg font-bold text-[#E2C38A] mt-1">
                        Client / Partner: {proj.client}
                      </p>
                    </div>

                    {/* Challenge / Context Narrative */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                        Challenge & Context:
                      </h4>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                        {proj.narrative}
                      </p>
                    </div>

                    {/* Channels / Scope / Responsibilities */}
                    {proj.channels && (
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2.5">
                          Integrated Marketing Channels Deployed:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {proj.channels.map((ch, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-xs font-medium px-3 py-1.5 rounded-xl bg-white/[0.03] text-slate-200 border border-white/[0.08]"
                            >
                              {ch}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {proj.responsibilities && (
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2.5">
                          Role & Key Responsibilities:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {proj.responsibilities.map((resp, rIdx) => (
                            <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#E2C38A] shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {proj.scope && (
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2.5">
                          Campaign Scope:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {proj.scope.map((sc, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs font-medium px-3 py-1.5 rounded-xl bg-white/[0.03] text-slate-200 border border-white/[0.08]"
                            >
                              {sc}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Visual Hierarchy for Numbers & Outcomes */}
                  <div className="lg:col-span-5 space-y-4">
                    
                    {/* Primary Highlight Result Card */}
                    <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#101826] to-[#0A0F1A] border-2 border-[#E2C38A]/40 shadow-2xl">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E2C38A] font-bold mb-3">
                        <TrendingUp className="w-4 h-4" />
                        <span>Validated Commercial Deliverables</span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-400 tracking-tight">
                            {proj.results.primary}
                          </div>
                          {proj.results.secondary && (
                            <div className="text-lg sm:text-xl font-bold text-white mt-1">
                              {proj.results.secondary}
                            </div>
                          )}
                        </div>

                        {proj.results.details && (
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-3 border-t border-white/[0.08]">
                            {proj.results.details}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Strategic Insight Box */}
                    {proj.strategicInsight && (
                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E2C38A] font-bold mb-2">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Executive Strategic Insight</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                          "{proj.strategicInsight}"
                        </p>
                      </div>
                    )}

                    {/* Deep-dive Trigger */}
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-900 bg-gradient-to-r from-[#FFF0D4] via-[#E2C38A] to-[#DDB872] hover:brightness-105 shadow-md shadow-[#DDB872]/20 transition-all active:scale-95"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Full Dossier</span>
                    </button>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
