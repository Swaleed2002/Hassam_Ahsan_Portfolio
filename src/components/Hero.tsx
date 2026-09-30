import React, { useState, useRef, useEffect } from 'react';
import { 
  MapPin, 
  Download, 
  ArrowRight, 
  Briefcase, 
  FolderKanban, 
  Mail, 
  Phone, 
  Linkedin, 
  MessageSquare, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Camera, 
  RotateCcw,
  Upload
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [photoSrc, setPhotoSrc] = useState<string>('/hassam-ahsan.jpg');
  const [isCustomLoaded, setIsCustomLoaded] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('hassam_official_photo');
      if (savedPhoto) {
        setPhotoSrc(savedPhoto);
        setIsCustomLoaded(true);
      }
    } catch (e) {
      // Ignore localStorage errors
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoSrc(result);
          setIsCustomLoaded(true);
          try {
            localStorage.setItem('hassam_official_photo', result);
          } catch (err) {
            // LocalStorage quota might be exceeded for large files
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem('hassam_official_photo');
    } catch (err) {}
    setPhotoSrc('/hassam-ahsan.jpg');
    setIsCustomLoaded(false);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-executive-mesh">
      {/* Ambient background light spheres */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#DDB872]/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Executive Presentation */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Top Eyebrow Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-semibold text-slate-300 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <MapPin className="w-3.5 h-3.5 text-[#E2C38A]" />
                <span className="text-white font-bold">Dubai, UAE</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">Available for Senior Leadership & Consultations</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E2C38A]/10 border border-[#E2C38A]/25 text-xs font-semibold text-[#E2C38A]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>8+ Yrs UAE & Pakistan</span>
              </div>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-[0.95]">
                <span className="silver-gradient-text block">HASSAM</span>
                <span className="gold-gradient-text block font-black">AHSAN</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-200 tracking-tight leading-snug">
                Marketing <span className="text-[#E2C38A] font-light">|</span> Business Development <span className="text-[#E2C38A] font-light">|</span> Brand & Experiential Marketing
              </p>
            </div>

            {/* Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Marketing and Business Development professional with 8+ years of experience across Pakistan and the UAE, combining integrated marketing, brand activation, experiential marketing, client acquisition, project delivery and commercial growth.
            </p>

            {/* 4 Prominent CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-[#FFF0D4] via-[#E2C38A] to-[#DDB872] hover:brightness-105 shadow-xl shadow-[#DDB872]/20 transition-all duration-200 active:scale-95"
              >
                <Briefcase className="w-4 h-4" />
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#selected-work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] hover:border-white/[0.2] transition-all duration-200 active:scale-95 shadow-sm"
              >
                <FolderKanban className="w-4 h-4 text-[#E2C38A]" />
                <span>Selected Work</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Hassam_Ahsan_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-[#E2C38A] bg-[#E2C38A]/10 hover:bg-[#E2C38A]/20 border border-[#E2C38A]/30 transition-all duration-200 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-200 active:scale-95"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Direct Connect Quick Channels */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="font-mono uppercase text-[11px] text-slate-400 tracking-wider">Direct Access:</span>
              
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-colors font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp ({personalInfo.whatsapp})</span>
              </a>

              <a
                href={personalInfo.phoneUrl}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/[0.08] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#E2C38A]" />
                <span>{personalInfo.phone}</span>
              </a>

              <a
                href={personalInfo.emailUrl}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/[0.08] transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#E2C38A]" />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 transition-colors font-medium"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quantitative Proof Strip */}
            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xl sm:text-2xl font-black text-[#E2C38A]">+21%</div>
                <div className="text-[11px] text-slate-400 font-medium">Avg. Annual Revenue Growth</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xl sm:text-2xl font-black text-white">11+</div>
                <div className="text-[11px] text-slate-400 font-medium">Enterprise Clients Retained</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">65%</div>
                <div className="text-[11px] text-slate-400 font-medium">Santa Fe Sales Surge</div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Layered Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Architectural Ambient Background Cards */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#DDB872]/20 via-blue-500/10 to-transparent rounded-3xl blur-2xl opacity-60 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#E2C38A]/20 rounded-3xl -z-10 hidden sm:block" />

              {/* Main Photo Frame */}
              <div className="relative bg-[#0C121E] p-3 rounded-3xl border border-white/[0.12] shadow-2xl overflow-hidden group">
                
                {/* Photo Container */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/[0.08]">
                  <img
                    src={photoSrc}
                    alt="Hassam Ahsan"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Gradient vignettes on edges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121E] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#070A11]/85 backdrop-blur-md border border-white/[0.1] text-[11px] font-semibold text-slate-200 flex items-center gap-1.5 shadow-lg z-10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Dubai, UAE</span>
                  </div>

                  {/* Top Left: Quick Photo Switcher / Original Photo Selector */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handlePhotoUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-2.5 py-1 rounded-full bg-[#070A11]/85 backdrop-blur-md border border-white/[0.12] hover:border-[#E2C38A] text-[10px] font-medium text-slate-300 hover:text-[#E2C38A] transition-all flex items-center gap-1.5 shadow-lg"
                      title="Select official portrait file from your computer"
                    >
                      <Camera className="w-3 h-3 text-[#E2C38A]" />
                      <span>{isCustomLoaded ? 'Update Photo' : 'Select Photo'}</span>
                    </button>
                    {isCustomLoaded && (
                      <button
                        onClick={handleResetPhoto}
                        className="p-1 rounded-full bg-[#070A11]/85 backdrop-blur-md border border-white/[0.1] text-slate-400 hover:text-white"
                        title="Reset to default portrait"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  {/* Bottom Floating Stats Strip */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-[#070A11]/90 backdrop-blur-md border border-white/[0.1] flex items-center justify-between shadow-xl z-10">
                    <div>
                      <div className="text-xs font-bold text-white">Hassam Ahsan</div>
                      <div className="text-[10px] font-mono text-[#E2C38A]">Senior Marketing & BD Professional</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-emerald-400">8+ Years</div>
                      <div className="text-[10px] text-slate-400 font-mono">UAE & Pakistan</div>
                    </div>
                  </div>
                </div>

                {/* Sub-Card Feature Highlights */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="py-2 px-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-300">
                    <span className="text-[#E2C38A] font-bold block text-sm">C-Level</span>
                    <span className="text-[10px] text-slate-400">Stakeholder Alignment</span>
                  </div>
                  <div className="py-2 px-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-300">
                    <span className="text-emerald-400 font-bold block text-sm">PKR 31.5M</span>
                    <span className="text-[10px] text-slate-400">Automotive Launch</span>
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
