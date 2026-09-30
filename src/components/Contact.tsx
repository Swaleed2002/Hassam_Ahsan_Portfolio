import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Linkedin, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Download, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles,
  Clock
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    inquiryType: 'Executive Marketing / BD Role',
    message: ''
  });

  const handleCopyAll = () => {
    const text = `HASSAM AHSAN
Marketing | Business Development | Brand & Experiential Marketing
Location: ${personalInfo.location}
Phone: ${personalInfo.phone}
WhatsApp: ${personalInfo.whatsapp}
Email: ${personalInfo.email}
LinkedIn: https://${personalInfo.linkedin}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formState.inquiryType} - ${formState.name} (${formState.company || 'Private'})`);
    const body = encodeURIComponent(
      `Hello Hassam,\n\nName: ${formState.name}\nOrganization: ${formState.company || 'N/A'}\nEmail: ${formState.email}\nInquiry Focus: ${formState.inquiryType}\n\nMessage:\n${formState.message}\n\nTransmitted via Hassam Ahsan Executive Portfolio`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#070A11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#E2C38A] mb-2.5">
            <Mail className="w-3.5 h-3.5" />
            <span>08 / Direct Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Initiate Executive Discussion
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Available for Senior Marketing, Business Development, Experiential Marketing, and Project Management appointments or high-impact corporate consulting across Dubai and the UAE.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Clickable Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Executive Contact Card */}
            <div className="rounded-3xl p-7 sm:p-8 bg-[#0C121E] border border-white/[0.08] shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-xs text-[#E2C38A] font-semibold">{personalInfo.title}</p>
                </div>
                <button
                  onClick={handleCopyAll}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-slate-200 transition-colors border border-white/[0.08]"
                  title="Copy full contact dossier"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Dossier'}</span>
                </button>
              </div>

              {/* Location Badge */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <MapPin className="w-5 h-5 text-[#E2C38A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Current Base</div>
                  <div className="text-sm font-bold text-white">{personalInfo.location}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">United Arab Emirates • Immediate Availability</div>
                </div>
              </div>

              {/* Direct Clickable Channel Strips */}
              <div className="space-y-3">
                {/* WhatsApp */}
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-emerald-500/10 border border-white/[0.06] hover:border-emerald-500/30 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400">WhatsApp Instant</div>
                      <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {personalInfo.whatsapp}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Direct Phone */}
                <a
                  href={personalInfo.phoneUrl}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-blue-500/10 border border-white/[0.06] hover:border-blue-500/30 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400">Direct Mobile Dial</div>
                      <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                        {personalInfo.phone}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Email */}
                <a
                  href={personalInfo.emailUrl}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-[#E2C38A]/10 border border-white/[0.06] hover:border-[#E2C38A]/30 transition-all group"
                >
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-[#E2C38A]/10 border border-[#E2C38A]/25 flex items-center justify-center text-[#E2C38A] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono uppercase text-slate-400">Official Email</div>
                      <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#E2C38A] transition-colors truncate">
                        {personalInfo.email}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#E2C38A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-sky-500/10 border border-white/[0.06] hover:border-sky-500/30 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400">LinkedIn Profile</div>
                      <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                        {personalInfo.linkedin}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* CV Download CTA */}
              <div className="pt-2">
                <a
                  href={personalInfo.resumeUrl}
                  download="Hassam_Ahsan_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#FFF0D4] via-[#E2C38A] to-[#DDB872] hover:brightness-105 shadow-xl shadow-[#DDB872]/20 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Complete Resume (PDF)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Executive Transmission Form */}
          <div className="lg:col-span-7 rounded-3xl p-7 sm:p-10 bg-[#0C121E] border border-white/[0.08] shadow-2xl">
            <div className="mb-8 pb-5 border-b border-white/[0.08]">
              <h3 className="text-2xl font-bold text-white tracking-tight">Direct Message Dispatch</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Completing this form opens your native email application with a pre-configured, structured brief addressed directly to Hassam Ahsan.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Al Mansoori"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.1] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E2C38A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Corporate Group / Enterprise"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.1] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E2C38A] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.1] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E2C38A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Discussion Objective
                  </label>
                  <select
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border border-white/[0.1] rounded-xl text-sm text-white focus:outline-none focus:border-[#E2C38A] transition-colors"
                  >
                    <option value="Executive Marketing / BD Role">Executive Marketing / BD Role</option>
                    <option value="Brand Activation / Experiential Project">Brand Activation / Experiential Project</option>
                    <option value="Event / Exhibition Project Management">Event / Exhibition Project Management</option>
                    <option value="Corporate Consulting">Corporate Consulting</option>
                    <option value="General Professional Discussion">General Professional Discussion</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Message Details *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline key requirements, scope, timelines, or role specifications..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.1] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E2C38A] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct transmission to Hassam Ahsan. Zero intermediaries.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-[#FFF0D4] via-[#E2C38A] to-[#DDB872] hover:brightness-105 shadow-xl shadow-[#DDB872]/20 transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
