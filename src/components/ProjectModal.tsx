import React from 'react';
import { ProjectItem } from '../data/portfolioData';
import { 
  X, 
  CheckCircle2, 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  Layers, 
  Sparkles,
  Building,
  Target
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 sm:p-7 border-b border-slate-800 bg-slate-900/60 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                {project.category}
              </span>
              {project.badge && (
                <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-slate-300 mt-1">
              Client / Account: <span className="text-amber-300">{project.client}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors border border-slate-700"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Key Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.duration && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-[11px] text-slate-400 uppercase font-mono">Duration</div>
                <div className="text-sm sm:text-base font-bold text-white mt-0.5">{project.duration}</div>
              </div>
            )}
            {project.budget && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-[11px] text-slate-400 uppercase font-mono">Budget</div>
                <div className="text-sm sm:text-base font-bold text-amber-400 mt-0.5">{project.budget}</div>
              </div>
            )}
            <div className="col-span-2 bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-center">
              <div className="text-[11px] text-slate-400 uppercase font-mono">Primary Result</div>
              <div className="text-sm sm:text-base font-bold text-emerald-400 mt-0.5">{project.results.primary}</div>
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>Verified Commercial Impact & Reach</span>
            </div>
            <div className="text-sm text-slate-200">
              <strong className="text-emerald-300">{project.results.primary}</strong>
              {project.results.secondary && (
                <span className="text-slate-300"> • {project.results.secondary}</span>
              )}
            </div>
            {project.results.details && (
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {project.results.details}
              </p>
            )}
          </div>

          {/* Detailed Narrative */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Case Study Overview</span>
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.narrative}
            </p>
          </div>

          {/* Channels / Scope / Responsibilities */}
          {project.channels && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Integrated Marketing Channels Deployed:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.channels.map((ch, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700">
                    {ch}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.responsibilities && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Key Responsibilities & Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.scope && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Campaign Scope:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.scope.map((s, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Strategic Insight */}
          {project.strategicInsight && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Strategic Insight</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                {project.strategicInsight}
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Hassam Ahsan • Marketing & BD Executive
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
