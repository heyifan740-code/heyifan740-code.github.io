import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  const { contact } = RESUME_DATA;

  return (
    <section className="bg-slate-900 text-white py-20 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
          {contact.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-slate-300 mb-8">
          {contact.title}
        </h2>
        
        <div className="flex flex-wrap gap-6 text-sm md:text-base text-slate-300 mb-10">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={18} /> {contact.email}
          </a>
          <div className="flex items-center gap-2">
            <Phone size={18} /> {contact.phone}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} /> New York, NY
          </div>
        </div>

        <div className="flex gap-4">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Contact Me
          </button>
          <button className="px-6 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-lg font-medium transition-colors flex items-center gap-2">
            <Download size={18} /> Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;