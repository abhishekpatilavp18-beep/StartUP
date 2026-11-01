import React from 'react';
import { agencyComparison } from '../data/agencyComparison';

export default function ComparisonTable() {
  const { badge, headline, typicalAgency, overtake } = agencyComparison;

  return (
    <div className="py-8 sm:py-12">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="inline-block text-xs uppercase tracking-wider text-[#6a6e6e] font-semibold mb-3 bg-black/5 px-3 py-1 rounded-full">
          {badge}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0b0b0c]">
          {headline}
        </h2>
      </div>

      {/* Comparison Headers with VS */}
      <div className="relative flex items-center gap-4 mb-8">
        {/* Typical Agency Bar */}
        <div className="flex-1 bg-[#f0f0f0] border border-black/10 rounded-full px-6 py-4 flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-red-400 flex-shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-[#0b0b0c] truncate">
            {typicalAgency.title}
          </h3>
        </div>

        {/* VS Circle */}
        <div className="w-12 h-12 rounded-full bg-[#0b0b0c] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 z-10 border-4 border-[#fffdf5] shadow-lg">
          VS
        </div>

        {/* Overtake Bar */}
        <div className="flex-1 bg-[#9efc65] border border-[#8ee854]/50 rounded-full px-6 py-4 flex items-center gap-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#0b0b0c" className="flex-shrink-0">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
          </svg>
          <h3 className="text-base sm:text-lg font-bold text-[#0b0b0c] truncate">
            {overtake.title}
          </h3>
        </div>
      </div>

      {/* Bullet Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {/* Typical Agency Points */}
        <div className="space-y-4 pl-2">
          {typicalAgency.points.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#6a6e6e]">
              <span className="mt-0.5 text-red-500 font-bold flex-shrink-0">✕</span>
              <span>{pt}</span>
            </div>
          ))}
        </div>

        {/* Overtake Points */}
        <div className="space-y-4 pl-2">
          {overtake.points.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm sm:text-base">
              <span className="mt-0.5 text-[#9efc65] font-bold flex-shrink-0">✓</span>
              <span className="text-[#0b0b0c] font-medium">{pt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
