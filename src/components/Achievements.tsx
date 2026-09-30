import React from 'react';
import { achievements } from '../data/portfolioData';
import { Trophy, CheckCircle, Award } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 md:py-32 bg-[#070A11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#E2C38A] mb-2.5">
              <Trophy className="w-3.5 h-3.5" />
              <span>04 / Quantitative Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Key Achievements
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md">
            8 verified commercial accomplishments across revenue outperformance, multi-million budget launches, and crisis rescues.
          </p>
        </div>

        {/* Minimal Horizontal Strips / Large Typography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-3xl bg-[#0C121E] border border-white/[0.08] hover:border-[#E2C38A]/40 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Number & Tag Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400 bg-white/[0.05] px-2.5 py-1 rounded-full border border-white/[0.08]">
                    #0{item.id}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#E2C38A] bg-[#E2C38A]/10 px-2.5 py-0.5 rounded-full border border-[#E2C38A]/25">
                    {item.tag}
                  </span>
                </div>

                {/* Large Metric Display */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white group-hover:text-[#E2C38A] transition-colors tracking-tight mb-3">
                  {item.metric}
                </div>

                {/* Descriptive Statement */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Verified Badge Footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Audited Delivery Milestone</span>
                </span>
                <span className="font-mono text-[11px] text-slate-500">Hassam Ahsan</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
