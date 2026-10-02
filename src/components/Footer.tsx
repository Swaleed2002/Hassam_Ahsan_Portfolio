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
    <footer className="bg-white border-t border-slate-200/90 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-10 border-b border-slate-200 gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-100 via-amber-50 to-amber-200 border border-amber-300 flex items-center justify-center font-bold text-amber-800 text-sm shadow-xs">
                HA
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Marketing • Business Development • Brand & Experiential Marketing
            </p>
          </div>

          {/* Social / Contact Icons */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 border border-slate-200 transition-colors shadow-xs"
              title="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.phoneUrl}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-700 border border-slate-200 transition-colors shadow-xs"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.emailUrl}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-amber-50 text-slate-600 hover:text-amber-800 border border-slate-200 transition-colors shadow-xs"
              title="Gmail"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-slate-600 hover:text-sky-700 border border-slate-200 transition-colors shadow-xs"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-amber-400 hover:text-slate-950 text-slate-700 border border-slate-200 transition-all ml-2 cursor-pointer shadow-xs"
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
            <span className="flex items-center gap-1.5 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>International City, Dubai, UAE</span>
            </span>
            <span className="text-slate-300">•</span>
            <a
              href={personalInfo.resumeUrl}
              download="Hassam_Ahsan_Resume.pdf"
              className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-4"
            >
              Download CV (PDF)
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
