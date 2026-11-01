import React from 'react';
import Badge from '../components/Badge';
import CTABanner from '../components/CTABanner';
import { privacyPolicy } from '../data/legalPages';

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 sm:pt-32">
      {/* 1. HEADER */}
      <section className="py-12 sm:py-20 border-b border-black/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge text="Legal" className="mb-6" />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0b0b0c] mb-4">
            {privacyPolicy.title}
          </h1>

          <p className="text-sm font-medium text-[#8b8b8b]">
            Last updated: {privacyPolicy.lastUpdated}
          </p>
        </div>
      </section>

      {/* 2. BODY CONTENT */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <p className="text-lg sm:text-xl text-[#0b0b0c] leading-relaxed font-medium">
            {privacyPolicy.intro}
          </p>

          {privacyPolicy.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 pt-6 border-t border-black/5">
              <h2 className="text-2xl font-bold tracking-tight text-[#0b0b0c]">
                {section.heading}
              </h2>

              {section.intro && (
                <p className="text-base text-[#6a6e6e] leading-relaxed">
                  {section.intro}
                </p>
              )}

              {section.paragraphs?.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-[#6a6e6e] leading-relaxed">
                  {p}
                </p>
              ))}

              {section.bullets && (
                <ul className="space-y-2.5 my-4 pl-5 list-disc text-base text-[#6a6e6e]">
                  {section.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {section.outro && (
                <p className="text-base text-[#6a6e6e] leading-relaxed">
                  {section.outro}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA BANNER */}
      <CTABanner />
    </div>
  );
}

