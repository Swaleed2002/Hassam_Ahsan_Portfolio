import React from 'react';
import { 
  MapPin, 
  Download, 
  ArrowRight, 
  Trophy, 
  CalendarCheck, 
  Mail, 
  Phone, 
  Linkedin, 
  MessageSquare, 
  ShieldCheck
} from 'lucide-react';
import { personalInfo, SCHEDULE_MEETING_URL } from '../data/portfolioData';
import hassamPhoto from '../assets/hassam-profile';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const handleScrollToAchievements = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('achievements');
    if (targetElement) {
      const navOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isExternalMeetingUrl = SCHEDULE_MEETING_URL.startsWith('http://') || SCHEDULE_MEETING_URL.startsWith('https://');

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-executive-mesh">
      {/* Ambient background light spheres for soft luxury depth */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-amber-200/[0.25] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-sky-200/[0.2] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Executive Presentation */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Top Eyebrow Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-slate-900 font-bold">Dubai, UAE</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-600">Available for Senior Leadership & Consultations</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>8+ Yrs UAE & Pakistan</span>
              </div>
            </div>

            {/* Main Name Heading - Kept strictly on ONE LINE */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 uppercase leading-none whitespace-nowrap">
                HASSAM AHSAN
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-bold text-slate-700 tracking-tight leading-snug">
                Marketing <span className="text-amber-500 font-normal">|</span> Business Development <span className="text-amber-500 font-normal">|</span> Brand & Experiential Marketing
              </p>
            </div>

            {/* Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Marketing and Business Development professional with 8+ years of experience across Pakistan and the UAE, combining integrated marketing, brand activation, experiential marketing, client acquisition, project delivery and commercial growth.
            </p>

            {/* 3 Prominent CTA Buttons: Achievements, Schedule Meeting, Download CV */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Button 1: Achievements */}
              <a
                href="#achievements"
                onClick={handleScrollToAchievements}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg shadow-amber-400/25 hover:shadow-amber-500/35 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Trophy className="w-4 h-4 text-slate-950" />
                <span>Achievements</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              {/* Button 2: Schedule Meeting */}
              <a
                href={SCHEDULE_MEETING_URL}
                {...(isExternalMeetingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300/90 hover:border-amber-400 shadow-sm transition-all duration-200 active:scale-95"
              >
                <CalendarCheck className="w-4 h-4 text-amber-600" />
                <span>Schedule Meeting</span>
              </a>

              {/* Button 3: Download CV */}
              <a
                href={personalInfo.resumeUrl}
                download="Hassam_Ahsan_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-300/80 transition-all duration-200 active:scale-95 shadow-sm"
              >
                <Download className="w-4 h-4 text-amber-700" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Direct Connect Channels — Simple Service Labels Only */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-2.5 text-xs">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/90 transition-colors font-semibold shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href={personalInfo.phoneUrl}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 transition-colors font-semibold shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Phone</span>
              </a>

              <a
                href={personalInfo.emailUrl}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 transition-colors font-semibold shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-amber-600" />
                <span>Gmail</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 transition-colors font-semibold shadow-xs"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-600" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quantitative Proof Strip */}
            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-amber-600">+21%</div>
                <div className="text-[11px] text-slate-600 font-medium">Avg. Annual Revenue Growth</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-slate-900">11+</div>
                <div className="text-[11px] text-slate-600 font-medium">Enterprise Clients Retained</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-emerald-600">65%</div>
                <div className="text-[11px] text-slate-600 font-medium">Santa Fe Sales Surge</div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Layered Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Architectural Ambient Background Cards */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/40 via-sky-200/30 to-transparent rounded-3xl blur-2xl opacity-70 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-full h-full border border-amber-300/40 rounded-3xl -z-10 hidden sm:block bg-amber-50/50" />

              {/* Main Photo Frame */}
              <div className="relative bg-white p-3 rounded-3xl border border-slate-200 shadow-2xl shadow-slate-300/60 overflow-hidden group">
                
                {/* Photo Container */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80">
                  <img
                    src={hassamPhoto}
                    alt="Hassam Ahsan"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-[11px] font-semibold text-slate-800 flex items-center gap-1.5 shadow-md z-10">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Dubai, UAE</span>
                  </div>

                  {/* Bottom Floating Stats Strip */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 flex items-center justify-between shadow-lg z-10">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Hassam Ahsan</div>
                      <div className="text-[10px] font-mono text-amber-700 font-semibold">Senior Marketing & BD Professional</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-emerald-600">8+ Years</div>
                      <div className="text-[10px] text-slate-500 font-mono">UAE & Pakistan</div>
                    </div>
                  </div>
                </div>

                {/* Sub-Card Feature Highlights */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
                    <span className="text-amber-700 font-bold block text-sm">C-Level</span>
                    <span className="text-[10px] text-slate-500">Stakeholder Alignment</span>
                  </div>
                  <div className="py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
                    <span className="text-emerald-700 font-bold block text-sm">PKR 31.5M</span>
                    <span className="text-[10px] text-slate-500">Automotive Launch</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
