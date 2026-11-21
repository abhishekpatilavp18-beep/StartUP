import React from 'react';
import { Link } from 'react-router-dom';

// Kept in sync with PROJECT_TYPES in ContactForm so the choice can be preselected there.
const OPTIONS = ['Website', 'Web app', 'Tool', 'Portfolio'];

/**
 * Hero call to action written as a sentence the visitor finishes: "I need a ___".
 * Each option opens the contact form with that project type already selected.
 * @param {{ projectCount: number, workAnchorId: string }} props
 */
export default function HeroIntentPicker({ projectCount, workAnchorId }) {
  const scrollToWork = (e) => {
    e.preventDefault();
    document.getElementById(workAnchorId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        <span className="text-lg sm:text-2xl font-semibold tracking-tight text-[#0b0b0c] mr-1">
          I need a
        </span>
        {OPTIONS.map((option) => (
          <Link
            key={option}
            to={`/contact?type=${encodeURIComponent(option)}`}
            className="group relative inline-flex items-center gap-2 rounded-xl border-2 border-dashed border-black/25 bg-white/60 px-4 py-2 sm:px-5 sm:py-2.5 text-base sm:text-xl font-semibold tracking-tight text-[#0b0b0c] transition-all duration-200 hover:border-solid hover:border-[#0b0b0c] hover:bg-[#9efc65] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:border-solid focus-visible:border-[#0b0b0c] focus-visible:bg-[#9efc65]"
          >
            {option}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="w-0 opacity-0 -ml-2 transition-all duration-200 group-hover:w-3 group-hover:opacity-100 group-hover:ml-0 group-focus-visible:w-3 group-focus-visible:opacity-100 group-focus-visible:ml-0"
            >
              <path d="M2.5 9.5L9.5 2.5" />
              <path d="M4 2.5H9.5V8" />
            </svg>
          </Link>
        ))}
      </div>

      <a
        href={`#${workAnchorId}`}
        onClick={scrollToWork}
        className="group inline-flex items-center gap-2 text-sm text-[#6a6e6e] hover:text-[#0b0b0c] transition-colors"
      >
        <span>or scroll through our {projectCount} live projects</span>
        <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true">↓</span>
      </a>
    </div>
  );
}
