import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id, className = "" }) => {
  return (
    <section id={id} className={`mb-20 ${className}`}>
      <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">
        {title}
      </h3>
      {children}
    </section>
  );
};

export default Section;