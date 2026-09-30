import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowUp, 
  Linkedin, 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#05070C] border-t border-white/[0.08] pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-10 border-b border-white/[0.08] gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#E2C38A]/10 border border-[#E2C38A]/30 flex items-center justify-center font-bold text-[#E2C38A] text-sm">
                HA
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Marketing • Business Development • Brand & Experiential Marketing
            </p>
          </div>

          {/* Social / Contact Icons */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400 border border-white/[0.08] transition-colors"
              title="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.phoneUrl}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-blue-500/20 text-slate-400 hover:text-blue-300 border border-white/[0.08] transition-colors"
              title="Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.emailUrl}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-[#E2C38A]/20 text-slate-400 hover:text-[#E2C38A] border border-white/[0.08] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-sky-500/20 text-slate-400 hover:text-sky-400 border border-white/[0.08] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-[#E2C38A] hover:text-slate-950 text-slate-300 border border-white/[0.1] transition-all ml-2"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 {personalInfo.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#E2C38A]" />
              <span>International City, Dubai, UAE</span>
            </span>
            <span>•</span>
            <a
              href={personalInfo.resumeUrl}
              download="Hassam_Ahsan_Resume.pdf"
              className="text-[#E2C38A] hover:text-[#FFF0D4] underline underline-offset-4"
            >
              Download CV (PDF)
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
