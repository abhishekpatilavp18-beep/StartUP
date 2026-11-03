import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudyCard({ study, className = "" }) {
  const isContain = study.imageFit === 'contain' || (!['vedant-portfolio', 'abhishek-portfolio'].includes(study.slug));

  return (
    <Link
      to={`/case-study/${study.slug}`}
      className={`group flex flex-col md:flex-row bg-[#0b0b0c] border border-white/10 rounded-[28px] sm:rounded-[36px] overflow-hidden transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] ${className}`}
    >
      {/* Image Container - Left Side */}
      <div
        className={`relative w-full md:w-[54%] ${
          isContain
            ? 'min-h-[260px] sm:min-h-[320px] md:min-h-[400px] p-4 sm:p-6 lg:p-8 flex items-center justify-center bg-gradient-to-br from-[#17171a] via-[#101012] to-[#0a0a0c]'
            : 'aspect-[16/10] md:aspect-auto md:min-h-[380px] bg-black'
        } overflow-hidden`}
      >
        {isContain ? (
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-auto max-h-[340px] object-contain rounded-xl sm:rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.6)] border border-white/10 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
      </div>

      {/* Info Panel - Right Side */}
      <div className="flex-1 bg-[#0b0b0c] text-white p-7 sm:p-10 flex flex-col justify-between">
        {/* Service Tags */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {study.serviceTags?.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-white/80 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            {study.title}
          </h3>

          <p className="text-white/60 text-sm sm:text-base leading-relaxed line-clamp-3 mb-8">
            {study.tagline}
          </p>
        </div>

        {/* Primary Metric & CTA */}
        <div>
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

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
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
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs text-[#9efc65] hover:text-white transition-colors font-medium px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#9efc65]"
              >
                <span>Live Project</span>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 9.5L9.5 2.5" />
                  <path d="M4 2.5H9.5V8" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
