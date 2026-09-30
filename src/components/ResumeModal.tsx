import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';
import { 
  personalInfo, 
  experiences, 
  education, 
  languages, 
  keyMetrics, 
  achievements 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#090D17] border border-white/[0.12] rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 bg-[#0C121E] border-b border-white/[0.08] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <h3 className="text-sm sm:text-base font-bold text-white">
              Curriculum Vitae • Hassam Ahsan
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print CV</span>
            </button>

            <a
              href={personalInfo.resumeUrl}
              download="Hassam_Ahsan_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#FFF0D4] via-[#E2C38A] to-[#DDB872] hover:brightness-105 shadow-md shadow-[#DDB872]/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors border border-white/[0.08] ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable CV Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#070A11]/90 space-y-8 text-slate-200">
          
          {/* Header section */}
          <div className="border-b border-white/[0.08] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <div className="text-xs font-mono text-[#E2C38A] font-bold">
                {personalInfo.location}
              </div>
            </div>
            <p className="text-base sm:text-lg font-bold text-[#E2C38A] mb-3">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap gap-y-1.5 gap-x-4 text-xs text-slate-400 font-mono">
              <span>Mobile: {personalInfo.phone}</span>
              <span>•</span>
              <span>WhatsApp: {personalInfo.whatsapp}</span>
              <span>•</span>
              <span>Email: {personalInfo.email}</span>
              <span>•</span>
              <span>LinkedIn: {personalInfo.linkedin}</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E2C38A] mb-2">
              Executive Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {personalInfo.summary}
            </p>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
            <div className="bg-[#0C121E] border border-white/[0.08] p-3.5 rounded-2xl text-center">
              <div className="text-xl font-black text-[#E2C38A]">+21%</div>
              <div className="text-[11px] text-slate-400">Avg. Annual Revenue Growth</div>
            </div>
            <div className="bg-[#0C121E] border border-white/[0.08] p-3.5 rounded-2xl text-center">
              <div className="text-xl font-black text-emerald-400">11+</div>
              <div className="text-[11px] text-slate-400">Enterprise Clients Retained</div>
            </div>
            <div className="bg-[#0C121E] border border-white/[0.08] p-3.5 rounded-2xl text-center">
              <div className="text-xl font-black text-white">65%</div>
              <div className="text-[11px] text-slate-400">Hyundai Santa Fe Growth</div>
            </div>
            <div className="bg-[#0C121E] border border-white/[0.08] p-3.5 rounded-2xl text-center">
              <div className="text-xl font-black text-[#E2C38A]">PKR 23.5M</div>
              <div className="text-[11px] text-slate-400">Future Fest Sales Record</div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E2C38A] mb-4">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-l-2 border-[#E2C38A]/30 pl-4 py-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {exp.role} — <span className="text-[#E2C38A]">{exp.company}</span>
                    </h3>
                    <div className="text-xs text-slate-400 font-mono">
                      {exp.period} | {exp.location}
                    </div>
                  </div>
                  {exp.keyClients && (
                    <div className="text-xs text-slate-400 mb-2 font-mono">
                      Accounts: {exp.keyClients.join(', ')}
                    </div>
                  )}
                  <ul className="space-y-1.5 mt-2">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-[#E2C38A] mt-1">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E2C38A] mb-3">
              Selected Key Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((ach) => (
                <div key={ach.id} className="p-3.5 bg-[#0C121E] rounded-2xl border border-white/[0.06] text-xs text-slate-300">
                  <span className="font-bold text-[#E2C38A] mr-1.5">{ach.metric}:</span>
                  <span>{ach.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-white/[0.08]">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E2C38A] mb-2">
                Education
              </h2>
              <div className="text-xs">
                <div className="font-bold text-white">{education.degree}</div>
                <div className="text-slate-400">{education.institution}, {education.location} ({education.period})</div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E2C38A] mb-2">
                Languages
              </h2>
              <div className="text-xs space-y-1">
                {languages.map((l, i) => (
                  <div key={i} className="text-slate-300">
                    <span className="font-semibold text-white">{l.name}</span> — {l.proficiency}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom footer button */}
        <div className="p-4 bg-[#0C121E] border-t border-white/[0.08] flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-slate-400">
            Source PDF: <code className="text-[#E2C38A]">/public/Hassam_Ahsan_Resume.pdf</code>
          </span>
          <a
            href={personalInfo.resumeUrl}
            download="Hassam_Ahsan_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#FFF0D4] via-[#E2C38A] to-[#DDB872] hover:brightness-105 transition-all shadow-md shadow-[#DDB872]/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official PDF</span>
          </a>
        </div>

      </div>
    </div>
  );
};
