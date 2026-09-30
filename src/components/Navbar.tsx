import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight, MessageSquare, Phone, Mail, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Selected Work', href: '#selected-work', id: 'selected-work' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Clients', href: '#clients', id: 'clients' },
    { label: 'Expertise', href: '#expertise', id: 'expertise' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 220;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070A11]/85 backdrop-blur-xl border-b border-white/[0.07] shadow-2xl py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Executive Monogram & Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3.5 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DDB872]/20 via-[#B38634]/10 to-transparent border border-[#DDB872]/40 flex items-center justify-center font-bold text-[#E2C38A] group-hover:border-[#E2C38A] transition-all shadow-sm">
                HA
              </div>
              <div className="text-left">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-[#E2C38A] transition-colors block">
                  {personalInfo.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-slate-400 block -mt-0.5">
                  Dubai, UAE • Portfolio
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.08] backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 relative ${
                      isActive
                        ? 'text-slate-950 bg-[#E2C38A] shadow-md shadow-[#DDB872]/20 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Hassam_Ahsan_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#FFF0D4] via-[#E2C38A] to-[#DDB872] hover:brightness-105 rounded-full shadow-lg shadow-[#DDB872]/25 transition-all duration-200 active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={personalInfo.resumeUrl}
                download="Hassam_Ahsan_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-950 bg-[#E2C38A] rounded-full"
              >
                <Download className="w-3 h-3" />
                <span>CV</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl text-slate-200 hover:text-white bg-white/[0.04] border border-white/[0.1] focus:outline-none"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Modern Slide-In Fullscreen Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-over panel */}
          <div className="relative ml-auto w-full max-w-sm bg-[#090D17] border-l border-white/[0.1] h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto z-10">
            
            {/* Header in drawer */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E2C38A]/20 border border-[#E2C38A]/40 flex items-center justify-center font-bold text-[#E2C38A] text-sm">
                    HA
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{personalInfo.name}</div>
                    <div className="text-[10px] font-mono text-slate-400">Dubai, UAE</div>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.05] border border-white/[0.1]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation items list */}
              <nav className="mt-6 space-y-1.5">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-[#E2C38A]/15 text-[#E2C38A] font-bold border border-[#E2C38A]/30'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-[11px] font-mono opacity-50">0{idx + 1}</span>
                        <span>{item.label}</span>
                      </span>
                      <ChevronRight className="w-4 h-4 opacity-40" />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom contact & actions */}
            <div className="pt-6 border-t border-white/[0.08] space-y-3">
              <a
                href={personalInfo.resumeUrl}
                download="Hassam_Ahsan_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-[#FFF0D4] via-[#E2C38A] to-[#DDB872] rounded-xl shadow-lg shadow-[#DDB872]/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Executive CV (PDF)</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 rounded-xl border border-emerald-500/20"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={personalInfo.phoneUrl}
                  className="flex items-center justify-center gap-2 p-2.5 text-xs font-semibold text-slate-200 bg-white/[0.05] rounded-xl border border-white/[0.08]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E2C38A]" />
                  <span>Direct Call</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
