import React, { useState } from 'react';
import Badge from '../components/Badge';
import CaseStudyCard from '../components/CaseStudyCard';
import CTABanner from '../components/CTABanner';
import Button from '../components/Button';
import { caseStudies, projectCategories } from '../data/caseStudies';

export default function CaseStudies() {
  const [filter, setFilter] = useState('All');

  const categories = projectCategories;

  const filteredStudies =
    filter === 'All' ? caseStudies : caseStudies.filter((cs) => cs.category === filter);

  return (
    <div className="pt-24 sm:pt-32">
      {/* 1. HERO SECTION */}
      <section className="py-12 sm:py-20 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge text="Our work" className="mb-6" />

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#0b0b0c] leading-[1.08] mb-6">
              Things we've built.
            </h1>

            <p className="text-lg sm:text-xl text-[#6a6e6e] font-normal leading-relaxed">
              Every project here is live. Open any of them and click around: websites, web apps, and tools we designed and coded ourselves.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-[#0b0b0c] text-white shadow-sm'
                    : 'bg-black/5 text-[#6a6e6e] hover:bg-black/10 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CASE STUDIES GRID */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-16 text-[#6a6e6e]">
              No case studies found for this category.
            </div>
          )}
        </div>
      </section>

      {/* 3. CTA BANNER */}
      <CTABanner />
    </div>
  );
}

