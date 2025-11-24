import React from 'react';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import ExperienceItem from './components/ExperienceItem';
import ChatInterface from './components/ChatInterface';
import { RESUME_DATA } from './constants';
import { ScrollText, FlaskConical, Briefcase, Trophy } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col lg:flex-row">
      
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 lg:ml-72 p-0">
        
        {/* Mobile-only Header Spacer */}
        <div className="h-4 bg-white lg:hidden"></div>

        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
          
          {/* Summary / Intro */}
          <div className="mb-16">
             <p className="text-xl leading-relaxed text-slate-600 font-light">
               {RESUME_DATA.summary}
             </p>
          </div>

          {/* 1. Publications */}
          <Section title="Publications" id="publications">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-slate-400">
                <ScrollText size={20} />
              </div>
              <div>
                {RESUME_DATA.publications.map((pub, idx) => (
                  <div key={idx} className="mb-6 last:mb-0">
                    <h4 className="font-semibold text-slate-900 text-lg leading-snug">{pub.title}</h4>
                    <p className="text-slate-500 mt-1 text-base">{pub.conference}</p>
                    <span className="inline-block mt-2 text-sm text-slate-400">
                      {pub.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* 2. Academic Research */}
          <Section title="Research Projects" id="research">
            <div className="flex items-center gap-3 mb-8 text-slate-400">
              <FlaskConical size={20} />
              <span className="uppercase tracking-widest text-xs font-bold">Academic Research</span>
            </div>
            {RESUME_DATA.research.map((proj, idx) => (
              <ExperienceItem
                key={idx}
                title={proj.title}
                subtitle={proj.role || "Researcher"}
                period={proj.period}
                details={proj.details}
                video={proj.video}
                images={proj.images}
              />
            ))}
          </Section>

          {/* 3. Internships */}
          <Section title="Internship Experience" id="experience">
             <div className="flex items-center gap-3 mb-8 text-slate-400">
              <Briefcase size={20} />
              <span className="uppercase tracking-widest text-xs font-bold">Professional Work</span>
            </div>
            {RESUME_DATA.experience.map((exp, idx) => (
              <ExperienceItem
                key={idx}
                title={exp.role}
                subtitle={exp.company}
                period={exp.period}
                details={exp.details}
              />
            ))}
          </Section>

          {/* 4. Competitions (Formula Student) */}
          <Section title="Competitions & Leadership" id="competitions">
            <div className="flex items-center gap-3 mb-8 text-slate-400">
              <Trophy size={20} />
              <span className="uppercase tracking-widest text-xs font-bold">Formula Student</span>
            </div>
            {RESUME_DATA.competitions.map((comp, idx) => (
              <ExperienceItem
                key={idx}
                title={comp.title}
                subtitle={comp.company || ""}
                period={comp.period}
                details={comp.details}
                video={comp.video}
                images={comp.images}
              />
            ))}
          </Section>

          {/* Footer for Main Content */}
          <div className="pt-12 text-left text-slate-300 text-sm mt-12">
            &copy; {new Date().getFullYear()} Yifan He.
          </div>

        </div>
      </main>

      <ChatInterface />
    </div>
  );
};

export default App;