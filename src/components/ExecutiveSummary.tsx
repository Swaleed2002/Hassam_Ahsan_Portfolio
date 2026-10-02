import React from 'react';
import { 
  CheckCircle2, 
  Award, 
  Compass, 
  BarChart3, 
  Globe2, 
  Users, 
  Layers, 
  ShieldCheck, 
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import { executiveHighlights, sectors, personalInfo } from '../data/portfolioData';

export const ExecutiveSummary: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white border-y border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-700 mb-2.5">
              <Award className="w-3.5 h-3.5" />
              <span>01 / Executive Profile & Strategic Value</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Commercial Growth Driven by Creative Execution
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-500 max-w-sm">
            8+ years cross-border leadership across Pakistan and the United Arab Emirates.
          </div>
        </div>

        {/* Editorial Two-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative Thesis & Operating Model */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                The Intersection of Brand Vision & Bottom-Line Performance
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {personalInfo.summary}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-amber-300 hover:bg-white hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">C-Level Stakeholder Alignment</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Steering boardroom conversations, consultative pitch architecture, commercial negotiations, and multi-year corporate retainers with managing directors and vice presidents.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Multidisciplinary Team Orchestration</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Directing end-to-end workstreams across strategy, creative 3D rendering, technical engineering, procurement, production, logistics, and live on-ground crew management.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">UAE Market Authority</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Extensive delivery experience across Dubai World Trade Centre, Jebel Ali Resorts, Abu Dhabi venues, municipality compliance, and regional industrial conglomerates.
                </p>
              </div>
            </div>

            {/* 8 Sector Cards */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                <span>Sector Experience:</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {sectors.map((sec) => (
                  <div
                    key={sec}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs font-semibold text-slate-800 hover:text-amber-800 hover:border-amber-300 hover:bg-white transition-all shadow-xs"
                  >
                    {sec}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Verified Performance Deliverables & Metrics Matrix */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Stat Duo */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200/90 shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-amber-800 mb-1">
                  +21%
                </div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                  Annual Revenue Performance
                </div>
                <div className="text-xs text-slate-600">
                  Consistently exceeded assigned annual commercial targets over 6+ years.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/90 shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-emerald-700 mb-1">
                  11+
                </div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                  Recurring Major Clients
                </div>
                <div className="text-xs text-slate-600">
                  Onboarded & retained blue-chip accounts across automotive & industrial.
                </div>
              </div>
            </div>

            {/* Performance Highlights Checkpoints */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Important Performance Highlights</h4>
                </div>
                <span className="text-[10px] font-mono uppercase bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-300 font-semibold">
                  Audited
                </span>
              </div>

              <ul className="space-y-3.5">
                {executiveHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-amber-700" />
                    </div>
                    <span className="font-medium leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick CTA to experience */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-600">
                Explore Hassam's full career progression & agency leadership:
              </span>
              <a
                href="#experience"
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline"
              >
                <span>Career Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
