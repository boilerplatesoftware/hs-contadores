import React from 'react';

interface TrustedByProps {
  companies: string[];
  className?: string;
}

const TrustedBy: React.FC<TrustedByProps> = ({ 
  companies, 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8 opacity-60 ${className}`}>
      <span className="font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/50">Trusted by</span>
      <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6">
        {companies.map((company, idx) => (
          <span 
            key={idx} 
            className="text-sm sm:text-base md:text-xl italic font-serif-premium text-white/70"
          >
            {company}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;

