import React from 'react';
import { Link } from 'react-router-dom';

export default function CTABanner({
  title = "Ready to elevate your online presence?",
  buttonText = "Start a project",
  buttonLink = "/contact",
  className = "",
}) {
  return (
    <section className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="relative overflow-hidden bg-[#122020] text-white rounded-[30px] p-10 sm:p-16 lg:p-24 text-center max-w-7xl mx-auto">
        {/* Subtle green glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#9efc65]/8 rounded-full blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-10 sm:mb-14 text-balance leading-[1.1]">
            {title}
          </h2>

          <Link
            to={buttonLink}
            className="inline-flex items-center gap-2.5 bg-[#9efc65] hover:bg-[#8ee854] text-[#0b0b0c] font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-[0_0_40px_rgba(158,252,101,0.4)] hover:shadow-[0_0_60px_rgba(158,252,101,0.5)] transition-all duration-300 -rotate-[8deg] hover:-rotate-[4deg] hover:scale-105"
          >
            <span>{buttonText}</span>
            <svg
              width="14"
              height="14"
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
          </Link>
        </div>
      </div>
    </section>
  );
}
