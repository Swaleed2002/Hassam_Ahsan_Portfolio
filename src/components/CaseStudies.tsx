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
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0];

  return (
    <section id="selected-work" className="py-24 md:py-32 bg-white border-y border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-700 mb-2.5">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>03 / Featured Commercial Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Selected Work & Turnarounds
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 max-w-md">
            Large-scale multi-million budget launches, technology expos, and high-stakes crisis event rescues.
          </p>
        </div>

        {/* Interactive Case Study Tabs — Exactly One Active at a Time */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 mb-8 max-w-full overflow-x-auto">
          {projects.map((proj, idx) => {
            const isActive = proj.id === activeProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProjectId(proj.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-slate-950 font-bold shadow-sm border border-slate-200/90'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-amber-100 text-amber-900 font-bold' : 'bg-slate-200/70 text-slate-500'}`}>
                  0{idx + 1}
                </span>
                <span>{proj.title.split('–')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Display Area: ONLY the Selected Case Study appears */}
        <div className="w-full">
          <div
            key={activeProject.id}
            className={`relative rounded-3xl p-6 sm:p-10 lg:p-12 transition-all duration-300 border ${
              activeProject.isCenterpiece
                ? 'bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 border-amber-300 shadow-xl shadow-amber-500/5'
                : 'bg-slate-50/80 border-slate-200/90 shadow-sm'
            }`}
          >
            {/* Top Category & Identifier */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                  Case Study 0{projects.findIndex(p => p.id === activeProject.id) + 1}
                </span>
                <span className="text-xs font-mono font-semibold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                  {activeProject.category}
                </span>
                {activeProject.badge && (
                  <span className="text-xs font-semibold text-slate-800 bg-slate-200/70 px-3 py-1 rounded-full border border-slate-300/80">
                    {activeProject.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-600">
                {activeProject.duration && (
                  <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-xs">
                    Duration: {activeProject.duration}
                  </span>
                )}
                {activeProject.budget && (
                  <span className="px-3 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-900 font-bold">
                    Budget: {activeProject.budget}
                  </span>
                )}
              </div>
            </div>

            {/* Main Spread: 2 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8">
              
              {/* Left Column: Context, Role & Scope */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-amber-700 mt-1">
                    Client / Partner: {activeProject.client}
                  </p>
                </div>

                {/* Challenge / Context Narrative */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">
                    Challenge & Context:
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {activeProject.narrative}
                  </p>
                </div>

                {/* Channels / Scope / Responsibilities */}
                {activeProject.channels && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2.5">
                      Integrated Marketing Channels Deployed:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.channels.map((ch, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-xs font-medium px-3 py-1.5 rounded-xl bg-white text-slate-800 border border-slate-200 shadow-xs"
                        >
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeProject.responsibilities && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2.5">
                      Role & Key Responsibilities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeProject.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeProject.scope && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2.5">
                      Campaign Scope:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.scope.map((sc, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-medium px-3 py-1.5 rounded-xl bg-white text-slate-800 border border-slate-200 shadow-xs"
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
                <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-amber-300 shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-800 font-bold mb-3">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    <span>Validated Commercial Deliverables</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-700 tracking-tight">
                        {activeProject.results.primary}
                      </div>
                      {activeProject.results.secondary && (
                        <div className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                          {activeProject.results.secondary}
                        </div>
                      )}
                    </div>

                    {activeProject.results.details && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-200">
                        {activeProject.results.details}
                      </p>
                    )}
                  </div>
                </div>

                {/* Strategic Insight Box */}
                {activeProject.strategicInsight && (
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-800 font-bold mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>Executive Strategic Insight</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      "{activeProject.strategicInsight}"
                    </p>
                  </div>
                )}

                {/* Deep-dive Trigger */}
                <button
                  onClick={() => setSelectedProject(activeProject)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-md shadow-amber-500/20 transition-all active:scale-95 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect Full Dossier</span>
                </button>

              </div>

            </div>

          </div>
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
