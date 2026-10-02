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
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/90 shadow-sm py-3.5'
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 via-amber-50 to-amber-200 border border-amber-300/80 flex items-center justify-center font-bold text-amber-800 group-hover:border-amber-500 transition-all shadow-sm">
                HA
              </div>
              <div className="text-left">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-amber-700 transition-colors block">
                  {personalInfo.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-slate-500 block -mt-0.5">
                  Dubai, UAE • Portfolio
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200 backdrop-blur-md shadow-inner">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 relative ${
                      isActive
                        ? 'text-slate-950 bg-white shadow-sm font-bold border border-slate-200/80'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
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
                className="p-2.5 rounded-full text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-sm"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Hassam_Ahsan_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 rounded-full shadow-md shadow-amber-500/20 transition-all duration-200 active:scale-95"
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 rounded-full shadow-sm"
              >
                <Download className="w-3 h-3" />
                <span>CV</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 focus:outline-none transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Modern Slide-In Fullscreen Mobile Navigation - Light Theme */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-over panel */}
          <div className="relative ml-auto w-full max-w-sm bg-white border-l border-slate-200 h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto z-10">
            
            {/* Header in drawer */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center font-bold text-amber-800 text-sm">
                    HA
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{personalInfo.name}</div>
                    <div className="text-[10px] font-mono text-slate-500">Dubai, UAE</div>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 bg-slate-100 border border-slate-200"
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
                          ? 'bg-amber-50 text-amber-900 font-bold border border-amber-300/80 shadow-sm'
                          : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-slate-400">0{idx + 1}</span>
                        <span>{item.label}</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom contact & actions */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <a
                href={personalInfo.resumeUrl}
                download="Hassam_Ahsan_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl shadow-md shadow-amber-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Executive CV (PDF)</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-xl border border-emerald-200"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={personalInfo.phoneUrl}
                  className="flex items-center justify-center gap-2 p-2.5 text-xs font-semibold text-slate-800 bg-slate-100 rounded-xl border border-slate-200"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Phone</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
