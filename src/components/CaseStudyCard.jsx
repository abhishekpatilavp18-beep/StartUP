import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudyCard({ study, className = "" }) {
  return (
    <Link
      to={`/case-study/${study.slug}`}
      className={`group flex flex-col md:flex-row bg-[#f0f0f0] hover:bg-[#eae8e0] border border-black/5 rounded-[22px] sm:rounded-[26px] overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}
    >
      {/* Image Container - Left Side */}
      <div className="relative w-full md:w-[55%] aspect-[16/10] md:aspect-auto md:min-h-[340px] overflow-hidden bg-black/5">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info Panel - Right Side */}
      <div className="flex-1 bg-[#0b0b0c] text-white p-6 sm:p-8 flex flex-col justify-between">
        {/* Service Tags */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {study.serviceTags?.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            {study.title}
          </h3>

          <p className="text-white/60 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
            {study.tagline}
          </p>
        </div>

        {/* Primary Metric */}
        {study.primaryMetric && (
          <div className="mb-6">
            <div className="text-4xl sm:text-5xl font-extrabold text-[#9efc65] tracking-tight">
              {study.primaryMetric.value}
            </div>
            <div className="text-xs text-white/50 mt-1 uppercase tracking-wider font-medium">
              {study.primaryMetric.label}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="pt-4 border-t border-white/10">
          <span className="inline-flex items-center gap-2 bg-[#ffbcfc] hover:bg-[#f0a8ef] text-[#0b0b0c] font-semibold text-sm px-5 py-2.5 rounded-full transition-colors">
            View full case study
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.5 9.5L9.5 2.5" />
              <path d="M4 2.5H9.5V8" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
