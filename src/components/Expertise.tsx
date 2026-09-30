import React, { useState } from 'react';
import { expertiseCategories } from '../data/portfolioData';
import { 
  Megaphone, 
  TrendingUp, 
  Wrench, 
  Cpu, 
  Layers, 
  Search, 
  CheckCircle2 
} from 'lucide-react';

export const Expertise: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'marketing-brand':
        return <Megaphone className="w-5 h-5 text-[#E2C38A]" />;
      case 'business-development':
        return <TrendingUp className="w-5 h-5 text-blue-400" />;
      case 'projects-operations':
        return <Wrench className="w-5 h-5 text-emerald-400" />;
      case 'digital-tools':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-[#E2C38A]" />;
    }
  };

  return (
    <section id="expertise" className="py-24 md:py-32 bg-[#070A11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#E2C38A] mb-2.5">
              <Layers className="w-3.5 h-3.5" />
              <span>06 / Functional Capabilities Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Core Competencies & Tooling
            </h2>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skill (e.g. TVC, Jira, OOH)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/[0.03] border border-white/[0.1] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E2C38A] transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 4 Grouped Modern Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseCategories.map((category) => {
            const matchesSearch = (skill: string) =>
              skill.toLowerCase().includes(searchTerm.toLowerCase());

            const hasMatchingSkills = category.skills.some(matchesSearch);

            if (searchTerm && !hasMatchingSkills && !category.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return null;
            }

            return (
              <div
                key={category.id}
                className="rounded-3xl p-7 sm:p-9 bg-[#0C121E] border border-white/[0.08] hover:border-white/[0.16] shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-white/[0.06] mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                        {getCategoryIcon(category.id)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#E2C38A] block">
                          {category.categoryNum}
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/[0.06]">
                      {category.skills.length} Focus Areas
                    </span>
                  </div>

                  {/* Category Narrative */}
                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {category.skills.map((skill, sIdx) => {
                      const isHighlighted = searchTerm && matchesSearch(skill);
                      return (
                        <div
                          key={sIdx}
                          className={`p-2.5 rounded-xl border transition-all text-xs font-medium flex items-center gap-2 ${
                            isHighlighted
                              ? 'bg-[#E2C38A] text-slate-950 font-bold border-[#E2C38A]'
                              : 'bg-white/[0.02] text-slate-200 border-white/[0.06] hover:border-white/[0.15]'
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${isHighlighted ? 'bg-slate-950' : 'bg-[#E2C38A]'}`} />
                          <span className="truncate">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Subfooter */}
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Senior Practitioner Level</span>
                  </span>
                  <span className="font-mono">UAE & Pakistan Experience</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
