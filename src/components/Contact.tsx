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
    <section id="contact" className="py-24 md:py-32 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-700 mb-2.5">
            <Mail className="w-3.5 h-3.5" />
            <span>08 / Direct Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Initiate Executive Discussion
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Available for Senior Marketing, Business Development, Experiential Marketing, and Project Management appointments or high-impact corporate consulting across Dubai and the UAE.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Clickable Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Executive Contact Card */}
            <div className="rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{personalInfo.name}</h3>
                  <p className="text-xs text-amber-700 font-semibold">{personalInfo.title}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available</span>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 font-medium">Current Base</div>
                  <div className="text-sm font-bold text-slate-900">{personalInfo.location}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">United Arab Emirates • Immediate Availability</div>
                </div>
              </div>

              {/* Direct Clickable Channel Buttons — Simple Service Names Only */}
              <div className="space-y-3">
                {/* WhatsApp */}
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/80 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                        WhatsApp
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Open instant chat
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Direct Phone */}
                <a
                  href={personalInfo.phoneUrl}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/80 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-800 transition-colors">
                        Phone
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Launch mobile dialer
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Gmail */}
                <a
                  href={personalInfo.emailUrl}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/80 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                        Gmail
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Compose email message
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/80 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-[11px] text-slate-500">
                        View executive profile
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* CV Download CTA */}
              <div className="pt-2">
                <a
                  href={personalInfo.resumeUrl}
                  download="Hassam_Ahsan_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-md shadow-amber-400/20 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Complete Resume (PDF)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Executive Transmission Form */}
          <div className="lg:col-span-7 rounded-3xl p-7 sm:p-10 bg-white border border-slate-200/90 shadow-sm">
            <div className="mb-8 pb-5 border-b border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Direct Message Dispatch</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Completing this form opens your native email application with a pre-configured brief addressed directly to Hassam Ahsan.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Al Mansoori"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Corporate Group / Enterprise"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                    Discussion Objective
                  </label>
                  <select
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
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
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                  Message Details *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline key requirements, scope, timelines, or role specifications..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct transmission to Hassam Ahsan. Zero intermediaries.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-md shadow-amber-400/20 transition-all active:scale-95 cursor-pointer"
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
