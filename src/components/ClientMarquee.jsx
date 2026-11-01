import React from 'react';
import { clientLogos } from '../data/clientLogos';

export default function ClientMarquee({ className = "" }) {
  // Duplicate logos array for continuous infinite scroll
  const repeatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className={`relative w-full overflow-hidden py-10 sm:py-14 select-none ${className}`}>
      {/* Left & Right gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-ticker items-center gap-12 sm:gap-16">
        {repeatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center opacity-65 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="h-7 sm:h-9 w-auto max-w-[140px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
