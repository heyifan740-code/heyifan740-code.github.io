import React from 'react';
import { Mail, Phone, Download, MapPin, Hash, Cpu } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Sidebar: React.FC = () => {
  const { contact, education, skills } = RESUME_DATA;

  const navItems = [
    { id: 'publications', label: 'Publications' },
    { id: 'research', label: 'Research Projects' },
    { id: 'experience', label: 'Internships' },
    { id: 'competitions', label: 'Competitions' },
  ];

  return (
    <aside className="w-full lg:w-72 lg:fixed lg:h-screen bg-white lg:border-r border-slate-200 text-slate-800 p-8 overflow-y-auto scrollbar-hide">
      {/* Header / Identity */}
      <div className="mb-10">
        <div className="w-20 h-20 bg-slate-900 rounded-full mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-sm">
          {contact.name.split(' ').map(n => n[0]).join('')}
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-2 text-slate-900">{contact.name}</h1>
        <h2 className="text-base text-slate-500 font-medium leading-snug">{contact.title}</h2>
        
        {/* Robotics Badge */}
        <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-semibold">
          <Cpu size={12} />
          <span>Robotics & Control</span>
        </div>

        <div className="flex items-center gap-2 text-slate-400 text-sm mt-4">
          <MapPin size={14} /> {contact.location}
        </div>
      </div>

      {/* Navigation (Table of Contents) */}
      <nav className="mb-10 hidden lg:block">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Contents</h3>
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className="flex items-center gap-3 text-sm font-medium text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact */}
      <div className="space-y-3 mb-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Contact</h3>
        <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors text-sm">
          <Mail size={16} />
          <span className="truncate">{contact.email}</span>
        </a>
        <div className="flex items-center gap-3 text-slate-600 text-sm">
          <Phone size={16} />
          <span>{contact.phone}</span>
        </div>
        <button className="w-full mt-4 py-2 border border-slate-200 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
          <Download size={16} /> Download CV
        </button>
      </div>

      {/* Education - Brief View */}
      <div className="mb-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Education</h3>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx}>
              <div className="text-slate-900 font-semibold text-sm">{edu.institution}</div>
              <div className="text-blue-600 text-xs font-medium">{edu.degree}</div>
              <div className="text-slate-400 text-xs mt-0.5">{edu.period}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills - Brief View */}
      <div className="mb-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Technical Skills</h3>
        <div className="space-y-4">
          {skills.map((group, idx) => (
            <div key={idx}>
              <div className="text-slate-500 text-xs font-medium mb-2">{group.category}</div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.slice(0, 6).map((skill, sIdx) => (
                  <span key={sIdx} className="px-2 py-0.5 bg-slate-100 rounded text-[10px] text-slate-600 border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;