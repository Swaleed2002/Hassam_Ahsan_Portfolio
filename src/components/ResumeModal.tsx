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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Curriculum Vitae • Hassam Ahsan
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print CV</span>
            </button>

            <a
              href={personalInfo.resumeUrl}
              download="Hassam_Ahsan_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 bg-white hover:bg-slate-100 transition-colors border border-slate-200 shadow-xs ml-1 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable CV Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white space-y-8 text-slate-800">
          
          {/* Header section */}
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {personalInfo.name}
              </h1>
              <div className="text-xs font-mono text-amber-700 font-bold">
                {personalInfo.location}
              </div>
            </div>
            <p className="text-base sm:text-lg font-bold text-amber-700 mb-3">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap gap-y-1.5 gap-x-4 text-xs text-slate-600 font-mono">
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
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-700 mb-2">
              Executive Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {personalInfo.summary}
            </p>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <div className="text-xl font-black text-amber-700">+21%</div>
              <div className="text-[11px] text-slate-600">Avg. Annual Revenue Growth</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <div className="text-xl font-black text-emerald-700">11+</div>
              <div className="text-[11px] text-slate-600">Enterprise Clients Retained</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <div className="text-xl font-black text-slate-900">65%</div>
              <div className="text-[11px] text-slate-600">Hyundai Santa Fe Growth</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <div className="text-xl font-black text-amber-700">PKR 23.5M</div>
              <div className="text-[11px] text-slate-600">Future Fest Sales Record</div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-700 mb-4">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-l-2 border-amber-300 pl-4 py-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {exp.role} — <span className="text-amber-700">{exp.company}</span>
                    </h3>
                    <div className="text-xs text-slate-500 font-mono">
                      {exp.period} | {exp.location}
                    </div>
                  </div>
                  {exp.keyClients && (
                    <div className="text-xs text-slate-500 mb-2 font-mono">
                      Accounts: {exp.keyClients.join(', ')}
                    </div>
                  )}
                  <ul className="space-y-1.5 mt-2">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
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
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-700 mb-3">
              Selected Key Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((ach) => (
                <div key={ach.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700">
                  <span className="font-bold text-amber-700 mr-1.5">{ach.metric}:</span>
                  <span>{ach.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-200">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-700 mb-2">
                Education
              </h2>
              <div className="text-xs">
                <div className="font-bold text-slate-900">{education.degree}</div>
                <div className="text-slate-600">{education.institution}, {education.location} ({education.period})</div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-700 mb-2">
                Languages
              </h2>
              <div className="text-xs space-y-1">
                {languages.map((l, i) => (
                  <div key={i} className="text-slate-600">
                    <span className="font-semibold text-slate-900">{l.name}</span> — {l.proficiency}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom footer button */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-slate-500">
            Source PDF: <code className="text-amber-700">/public/Hassam_Ahsan_Resume.pdf</code>
          </span>
          <a
            href={personalInfo.resumeUrl}
            download="Hassam_Ahsan_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official PDF</span>
          </a>
        </div>

      </div>
    </div>
  );
};
