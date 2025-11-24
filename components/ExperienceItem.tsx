import React from 'react';

interface Props {
  title: string;
  subtitle: string;
  period: string;
  details: string[];
  publication?: string;
  video?: string;
  images?: string[];
}

const ExperienceItem: React.FC<Props> = ({ title, subtitle, period, details, publication, video, images }) => {
  const hasMedia = video || (images && images.length > 0);

  return (
    <div className="mb-12 last:mb-0 relative pl-8 border-l-2 border-slate-200">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
        <h4 className="text-xl font-bold text-slate-900">{title}</h4>
        <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded mt-1 sm:mt-0 w-fit">
          {period}
        </span>
      </div>
      
      <p className="text-lg font-medium text-blue-700 mb-3">{subtitle}</p>
      
      {publication && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-100 rounded-md text-sm text-amber-900 italic">
          <strong>Publication:</strong> {publication}
        </div>
      )}

      {/* Main Content Grid: Text on Left, Media on Right (on large screens) */}
      <div className={`grid grid-cols-1 ${hasMedia ? 'xl:grid-cols-2 gap-8' : ''}`}>
        
        {/* Left Column: Text Details */}
        <div className="order-2 xl:order-1">
          <ul className="space-y-3">
            {details.map((detail, index) => (
              <li key={index} className="text-slate-600 text-base leading-relaxed flex items-start">
                <span className="mr-2 mt-2 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                {detail}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Media (Video & Images) */}
        {hasMedia && (
          <div className="order-1 xl:order-2 flex flex-col gap-4">
            {/* Video Player */}
            {video && (
              <div className="w-full">
                <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-900 shadow-sm aspect-video relative group">
                  <video controls className="w-full h-full object-contain">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="mt-1 text-xs text-slate-400 text-center italic">
                  Video Demonstration
                </div>
              </div>
            )}

            {/* Images Gallery - Grid within the column */}
            {images && images.length > 0 && (
              <div className="space-y-2">
                <div className={`grid ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-3`}>
                  {images.map((img, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-sm aspect-video">
                      <img 
                        src={img} 
                        alt={`Project Highlight ${idx + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs text-slate-400 text-center italic">
                  Project Highlights
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;