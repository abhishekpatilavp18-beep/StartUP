import React from 'react';
import Badge from '../components/Badge';
import Accordion from '../components/Accordion';
import CTABanner from '../components/CTABanner';
import { faqs } from '../data/faqs';

export default function Faqs() {
  return (
    <div className="pt-24 sm:pt-32">
      {/* 1. HERO HEADER */}
      <section className="py-12 sm:py-20 border-b border-black/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge text="Common questions" className="mb-6" />

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#0b0b0c] leading-[1.08] mb-6">
            Frequently asked questions
          </h1>

          <p className="text-lg sm:text-xl text-[#6a6e6e] font-normal leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our sprints, pricing, operating rhythm, and measurement philosophy.
          </p>
        </div>
      </section>

      {/* 2. FAQS ACCORDION */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion items={faqs} allowMultiple={true} />
        </div>
      </section>

      {/* 3. CTA BANNER */}
      <CTABanner />
    </div>
  );
}

