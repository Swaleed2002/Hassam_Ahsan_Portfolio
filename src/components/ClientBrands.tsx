import React, { useState } from 'react';
import { clients, ClientItem } from '../data/portfolioData';
import { Building2, Sparkles, Filter } from 'lucide-react';

export const ClientBrands: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Accounts (13)' },
    { id: 'uae', label: 'UAE Enterprise' },
    { id: 'pakistan', label: 'Pakistan Corporate' },
    { id: 'automotive', label: 'Automotive & Retail' },
    { id: 'industrial', label: 'Industrial & Tech' },
  ];

  const filteredClients = clients.filter((client) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'uae') return client.region === 'UAE';
    if (selectedFilter === 'pakistan') return client.region === 'Pakistan';
    if (selectedFilter === 'automotive') {
      return (
        client.category.includes('Automotive') ||
        client.category.includes('Retail') ||
        client.category.includes('FMCG')
      );
    }
    if (selectedFilter === 'industrial') {
      return (
        client.category.includes('Industrial') ||
        client.category.includes('Technology') ||
        client.category.includes('Defence') ||
        client.category.includes('Security') ||
        client.category.includes('Healthcare')
      );
    }
    return true;
  });

  return (
    <section id="clients" className="py-24 md:py-32 bg-[#090D17] border-y border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#E2C38A] mb-2.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>05 / Enterprise Client Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Selected Clients & Brands
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white/[0.03] rounded-2xl border border-white/[0.08] self-start md:self-end">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-[#E2C38A] text-slate-950 font-bold shadow-md shadow-[#DDB872]/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Wall Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="p-6 rounded-2xl bg-[#0B101B] border border-white/[0.08] hover:border-[#E2C38A]/40 transition-all duration-300 group flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1 min-h-[170px]"
            >
              {/* Top metadata */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                  {client.region}
                </span>

                {client.badge && (
                  <span className="text-[10px] font-semibold text-[#E2C38A] bg-[#E2C38A]/10 px-2 py-0.5 rounded-full border border-[#E2C38A]/25">
                    {client.badge}
                  </span>
                )}
              </div>

              {/* Brand Typography Plate */}
              <div className="my-auto py-3 text-center">
                <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-[#E2C38A] transition-colors tracking-tight">
                  {client.name}
                </h3>
              </div>

              {/* Bottom Sector Info */}
              <div className="pt-3 border-t border-white/[0.06] text-center">
                <p className="text-xs text-slate-400 font-medium">
                  {client.category}
                </p>
                {client.featuredProject && (
                  <p className="text-[11px] text-[#E2C38A]/80 font-mono mt-0.5 truncate">
                    • {client.featuredProject}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Design Note */}
        <div className="mt-10 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#E2C38A]" />
          <span>Monochrome corporate branding insignia — designed for seamless swap with official vector marks.</span>
        </div>

      </div>
    </section>
  );
};
