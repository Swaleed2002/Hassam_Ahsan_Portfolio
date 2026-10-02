import React, { useState } from 'react';
import { education, languages } from '../data/portfolioData';
import { 
  GraduationCap, 
  Globe, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Workflow 
} from 'lucide-react';

export const EducationLanguages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'languages' | 'technical'>('education');

  const technicalCompetencies = [
    {
      title: "Enterprise MarTech & Commercial CRM",
      description: "Hands-on alignment of CRM pipelines, lead routing, customer lifecycle automations, and commercial deal tracking.",
      tools: ["Salesforce CRM", "HubSpot", "Pipeline Automation", "Lead Attribution"]
    },
    {
      title: "Digital Analytics & Measurement",
      description: "Data-driven performance monitoring, multi-channel KPI attribution, campaign tracking architecture, and executive reporting.",
      tools: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Meta Ads Manager"]
    },
    {
      title: "Agile Project & Workstream Orchestration",
      description: "Milestone management, sprint coordination, cross-departmental creative delivery, and technical vendor procurement.",
      tools: ["Jira Software", "Asana", "Trello", "Slack Enterprise"]
    },
    {
      title: "Experiential & Spatial Production Tech",
      description: "Technical oversight of large-format LED installations, interactive projection, spatial acoustics, and multi-camera broadcast feeds.",
      tools: ["3D Spatial Staging", "LED Video Walls", "DMX Lighting", "Live Broadcast AV"]
    }
  ];

  return (
    <section id="education" className="py-24 md:py-32 bg-white border-y border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-700 mb-2.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>07 / Credentials & Technical Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Education, Languages & Technical Depth
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 max-w-md">
            Computer science foundation bridging technical infrastructure, modern MarTech, and cross-cultural communication.
          </p>
        </div>

        {/* Interactive Tab Controls — Exactly One Tab Active at a Time */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 mb-8 max-w-3xl">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'education'
                ? 'bg-white text-slate-950 font-bold shadow-sm border border-slate-200/90'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <GraduationCap className={`w-4 h-4 ${activeTab === 'education' ? 'text-amber-600' : 'text-slate-400'}`} />
            <span>Academic Degree</span>
          </button>

          <button
            onClick={() => setActiveTab('languages')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'languages'
                ? 'bg-white text-slate-950 font-bold shadow-sm border border-slate-200/90'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Globe className={`w-4 h-4 ${activeTab === 'languages' ? 'text-blue-600' : 'text-slate-400'}`} />
            <span>Languages & Communication</span>
          </button>

          <button
            onClick={() => setActiveTab('technical')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'technical'
                ? 'bg-white text-slate-950 font-bold shadow-sm border border-slate-200/90'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Terminal className={`w-4 h-4 ${activeTab === 'technical' ? 'text-purple-600' : 'text-slate-400'}`} />
            <span>Technical Foundation & MarTech</span>
          </button>
        </div>

        {/* Tab Content Display Area — Only Active Tab Rendered */}
        <div className="w-full">
          
          {/* TAB 1: Academic Degree */}
          {activeTab === 'education' && (
            <div className="rounded-3xl p-7 sm:p-10 bg-slate-50/80 border border-slate-200/90 shadow-sm transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 font-bold block mb-1">
                      Academic Degree Qualification
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {education.degree}
                    </h3>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-mono text-slate-700 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs self-start sm:self-auto font-semibold">
                  {education.period}
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
                  <div className="font-extrabold text-slate-900 text-lg">
                    {education.institution}
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>{education.location}</span>
                  </div>
                </div>

                <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
                  {education.highlight}
                </p>

                {/* Key Curricular Modules */}
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-mono uppercase text-slate-500 font-semibold block mb-3">
                    Curriculum Pillars Applied in Executive Marketing & Operations:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { name: "Software Engineering & Architecture", desc: "Structured project lifecycle management, sprint methodology, and rigorous QA delivery." },
                      { name: "Database Systems & Data Modeling", desc: "Understanding data structures, SQL querying, user segmentation, and clean CRM pipelines." },
                      { name: "Computer Networks & Systems", desc: "Enterprise infrastructure, cloud hosting, client-server communications, and cyber protocols." },
                      { name: "Data Analytics & Algorithmics", desc: "Quantitative measurement, regression modeling, and performance conversion metrics." },
                      { name: "Interactive Human-Computer Interfaces", desc: "User journey mapping, UX principles, conversion-rate optimization, and customer flows." },
                      { name: "Digital Project Governance", desc: "Vendor scoping, milestone validation, technical contract oversight, and deliverables auditing." }
                    ].map((course, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                        <div className="text-xs font-bold text-slate-900 mb-1">{course.name}</div>
                        <div className="text-[11px] text-slate-500 leading-normal">{course.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verification Confirmation */}
                <div className="pt-4 flex items-center gap-2 text-xs text-emerald-700 font-mono font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Four-Year Computer Sciences Degree • University of Sargodha</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Languages & Communication */}
          {activeTab === 'languages' && (
            <div className="rounded-3xl p-7 sm:p-10 bg-slate-50/80 border border-slate-200/90 shadow-sm transition-all duration-300">
              <div className="flex items-center gap-4 pb-6 border-b border-slate-200 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
                  <Globe className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-700 font-bold block mb-1">
                    Global Commercial Communication
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Languages & Regional Fluency
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
                  Enables friction-free executive negotiation, senior client servicing, and on-ground team leadership across multicultural corporate environments in Dubai, the wider United Arab Emirates, and South Asian commercial corridors.
                </p>

                {/* Language Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900">{lang.name}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{lang.proficiency}</p>
                        </div>
                        <span className="w-3 h-3 rounded-full bg-emerald-500 mt-1 shrink-0" />
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="font-mono text-slate-400">Context:</span>
                        <span className="font-semibold text-slate-800">
                          {lang.name === 'English' ? 'Corporate & Executive' : lang.name === 'Urdu' ? 'Native & Commercial' : 'Regional Business'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cultural Diplomatic Range */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-900">Multicultural Commercial Competency</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Extensive experience presenting to international C-suite directors, negotiating with multilingual local UAE suppliers, and leading diverse creative crews spanning 10+ nationalities across Dubai, Abu Dhabi, and Pakistan.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Technical Foundation & MarTech */}
          {activeTab === 'technical' && (
            <div className="rounded-3xl p-7 sm:p-10 bg-slate-50/80 border border-slate-200/90 shadow-sm transition-all duration-300">
              <div className="flex items-center gap-4 pb-6 border-b border-slate-200 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
                  <Terminal className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-700 font-bold block mb-1">
                    Applied Computer Science in Marketing
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Technical Architecture & MarTech Tooling
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
                  A rare dual competency: bridging deep technical computer science principles with commercial marketing strategy, automated revenue funnels, and enterprise-grade event production technology.
                </p>

                {/* 4 Technical Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {technicalCompetencies.map((comp, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 text-xs font-bold">
                          0{idx + 1}
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">{comp.title}</h4>
                      </div>
                      
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {comp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {comp.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-700 font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bridging Technical Engineering, Creative Strategy, and Commercial Execution</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
