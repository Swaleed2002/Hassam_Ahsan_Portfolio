import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CaseStudies } from './components/CaseStudies';
import { Achievements } from './components/Achievements';
import { ClientBrands } from './components/ClientBrands';
import { Expertise } from './components/Expertise';
import { EducationLanguages } from './components/EducationLanguages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      {/* Sticky Modern Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Flow strictly matching requested 2026 executive architecture */}
      <main className="flex-grow">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <ExecutiveSummary />
        <ExperienceTimeline />
        <CaseStudies />
        <Achievements />
        <ClientBrands />
        <Expertise />
        <EducationLanguages />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Executive Resume Inspection & Print Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
