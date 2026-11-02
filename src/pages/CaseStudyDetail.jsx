import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Badge from '../components/Badge';
import Button from '../components/Button';
import CaseStudyCard from '../components/CaseStudyCard';
import CTABanner from '../components/CTABanner';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find((cs) => cs.slug === slug);

  if (!study) {
    return <Navigate to="/case-study" replace />;
  }

  const otherStudies = caseStudies.filter((cs) => cs.slug !== slug).slice(0, 2);

  return (
    <div className="pt-24 sm:pt-32">
      {/* 1. HERO HEADER */}
      <section className="py-12 sm:py-20 border-b border-black/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/case-study"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#6a6e6e] hover:text-[#0b0b0c] uppercase tracking-wider mb-6 transition-colors"
          >
            ← Back to case studies
          </Link>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#0b0b0c] mb-6">
            {study.title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#6a6e6e] leading-relaxed max-w-3xl mb-8 font-normal">
            {study.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button to="/contact" size="md" variant="primary">
              Build with us
            </Button>
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0b0b0c]/5 hover:bg-[#0b0b0c]/10 text-[#0b0b0c] font-semibold text-sm px-6 py-3 rounded-full border border-black/10 transition-colors"
              >
                <span>Visit live project</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 9.5L9.5 2.5" />
                  <path d="M4 2.5H9.5V8" />
                </svg>
              </a>
            )}
          </div>

          {/* Meta Details Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 mt-12 border-t border-black/10">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#8b8b8b] font-medium block mb-1">
                Client
              </span>
              <span className="text-base font-semibold text-[#0b0b0c]">
                {study.client}
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-[#8b8b8b] font-medium block mb-1">
                Industry
              </span>
              <span className="text-base font-semibold text-[#0b0b0c]">
                {study.industry}
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-[#8b8b8b] font-medium block mb-1">
                Timeline
              </span>
              <span className="text-base font-semibold text-[#0b0b0c]">
                {study.timeline}
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-[#8b8b8b] font-medium block mb-1">
                Services
              </span>
              <span className="text-base font-semibold text-[#0b0b0c]">
                {study.services}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HERO IMAGE */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] sm:rounded-[36px] overflow-hidden border border-black/10 shadow-xl bg-black/5 aspect-[16/9]">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY STORY BODY */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Challenge */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b0b0c] mb-6">
              The challenge
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-[#6a6e6e] leading-relaxed">
              {study.challenge.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* What We Did */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b0b0c] mb-6">
              What we did
            </h2>
            <div className="space-y-4 mb-8 text-base sm:text-lg text-[#6a6e6e] leading-relaxed">
              <p>
                We started where every engagement starts: with the numbers. Before touching a single campaign, we rebuilt reporting so every dollar traced back to revenue in one place.
              </p>
            </div>

            <div className="space-y-4">
              {study.whatWeDid.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#f0f0f0] border border-black/5 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4"
                >
                  <span className="font-bold text-[#0b0b0c] text-base whitespace-nowrap">
                    {item.title}
                  </span>
                  <span className="text-[#6a6e6e] text-base leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {study.summaryText && (
              <p className="mt-8 text-base sm:text-lg text-[#6a6e6e] leading-relaxed">
                {study.summaryText}
              </p>
            )}
          </div>

          {/* Detail Image Visual */}
          {study.detailImage && (
            <div className="rounded-3xl overflow-hidden border border-black/10 shadow-lg aspect-[16/9] bg-black/5 my-12">
              <img
                src={study.detailImage}
                alt="Case study execution"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* The Outcome */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b0b0c] mb-6">
              The outcome
            </h2>
            <p className="text-base sm:text-lg text-[#6a6e6e] leading-relaxed mb-10">
              {study.outcome}
            </p>

            {/* Metrics Triad */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {study.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[#0b0b0c] text-white rounded-[22px] p-6 text-center shadow-lg border border-white/10"
                >
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#9efc65] mb-2 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#b7bcbc]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial Box */}
          {study.testimonial && (
            <div className="bg-[#f0f0f0] border border-black/5 rounded-[26px] p-8 sm:p-10 my-12">
              <blockquote className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0b0b0c] mb-6 leading-snug">
                “{study.testimonial.quote}”
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src={study.testimonial.avatar}
                  alt={study.testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border border-black/10"
                />
                <div>
                  <div className="font-bold text-[#0b0b0c]">
                    {study.testimonial.author}
                  </div>
                  <div className="text-xs text-[#6a6e6e]">
                    {study.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. OTHER CASE STUDIES */}
      <section className="py-16 sm:py-24 border-t border-black/5 bg-[#0b0b0c]/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b0b0c]">
              Other case studies
            </h3>
            <Button to="/case-study" variant="secondary" size="sm">
              See all case studies
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherStudies.map((other) => (
              <CaseStudyCard key={other.slug} study={other} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <CTABanner />
    </div>
  );
}

