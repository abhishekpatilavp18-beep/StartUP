import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import Button from '../components/Button';
import ClientMarquee from '../components/ClientMarquee';
import DisciplinesTabs from '../components/DisciplinesTabs';
import KeywordTicker from '../components/KeywordTicker';
import StatsGrid from '../components/StatsGrid';
import CaseStudyCard from '../components/CaseStudyCard';
import OperatingRhythm from '../components/OperatingRhythm';
import ComparisonTable from '../components/ComparisonTable';
import BlogCard from '../components/BlogCard';
import CTABanner from '../components/CTABanner';
import MotionReveal from '../components/MotionReveal';
import { caseStudies } from '../data/caseStudies';
import { blogPosts } from '../data/blogPosts';
import { stats } from '../data/stats';
import { featuredQuote, testimonials } from '../data/testimonials';
import { teamMembers } from '../data/team';

function renderStatValue(value) {
  return value.split(/([\+%])/).map((part, i) => {
    if (part === '+' || part === '%') {
      return <span key={i} className="text-[#ffbcfc]">{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function Home() {
  const selectedCaseStudies = caseStudies.slice(0, 3);
  const featuredBlogPosts = blogPosts.slice(0, 3);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <div className="pt-24 sm:pt-32">
      {/* 1. HERO SECTION */}
      <section className="relative pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal delay={0.1}>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-14">
              <Badge text="Performance marketing studio" dot={true} className="mb-6" />

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight text-[#0b0b0c] leading-[1.08] mb-6 text-balance">
                What if every dollar knew exactly where to go?
              </h1>

              <p className="text-lg sm:text-xl text-[#6a6e6e] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
                Paid media, performance creative, and analytics under one roof built for compounding growth not vanity metrics.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button to="/contact" size="lg" variant="primary">
                  Book a growth audit
                </Button>
                <Button to="/case-study" size="lg" variant="secondary">
                  See our case studies
                </Button>
              </div>
            </div>
          </MotionReveal>

          {/* Hero Visual & Stat Overlay */}
          <MotionReveal delay={0.25} y={45}>
            <div className="relative max-w-5xl mx-auto">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-black/10 shadow-2xl bg-[#0b0b0c]">
                <img
                  src="https://framerusercontent.com/images/pr5LP28gq8vxR0nW6iM3FW68o.jpg"
                  alt="Growth Dashboard"
                  className="w-full h-auto object-cover max-h-[560px]"
                />
                <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-black/5 shadow-xl">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0b0b0c]">6.4x</div>
                  <div className="text-xs sm:text-sm font-medium text-[#6a6e6e]">Blended ROAS</div>
                </div>
                <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 bg-[#0b0b0c]/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 shadow-xl text-white">
                  <div className="text-xs sm:text-sm font-medium text-[#9efc65] uppercase tracking-wider">CAC in 90 days</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">−41%</div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <div className="flex -space-x-2 overflow-hidden">
                  {stats.heroAvatars.map((av, idx) => (
                    <img
                      key={idx}
                      src={av}
                      alt="Client avatar"
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-[#6a6e6e]">{stats.heroTrust}</p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 2. CLIENT LOGOS MARQUEE */}
      <ClientMarquee />

      {/* 3. OUR POINT OF VIEW (Dark Statement Card) */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="bg-[#0b0b0c] text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-14 lg:p-20 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#9efc65]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-4xl">
                <Badge text="Our point of view" variant="dark" className="mb-6" />

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-8">
                  Most agencies sell activity. We sell outcomes.{' '}
                  <span className="text-[#9efc65]">
                    Every test we run has a number attached,
                  </span>{' '}
                  and every number feeds the next decision, that loop is the entire agency.
                </h2>

                <p className="text-[#b7bcbc] text-base sm:text-xl font-normal max-w-2xl leading-relaxed mb-8">
                  A senior team on every account. No hand-offs, no black boxes, no 40-page decks that say nothing.
                </p>

                {/* Team member avatars */}
                <div className="flex items-center gap-3">
                  {teamMembers.map((member, idx) => (
                    <div key={idx} className="relative group">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white/20 hover:border-[#9efc65] transition-colors"
                      />
                    </div>
                  ))}
                  <span className="text-xs text-white/50 ml-2">Our senior team</span>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 4. FOUR DISCIPLINES TABS */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <DisciplinesTabs />
          </MotionReveal>
        </div>
      </section>

      {/* 4.5. KEYWORD TICKER STRIP */}
      <KeywordTicker />

      {/* 5. GROWTH YOU CAN POINT AT (Stats Grid) */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <StatsGrid />
          </MotionReveal>
        </div>
      </section>

      {/* 6. SELECTED WORK (Case Studies with Overlapping Stacking Cards Animation) */}
      <section className="py-16 sm:py-24 relative overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <span className="inline-block text-xs uppercase tracking-wider text-[#6a6e6e] font-semibold mb-3 bg-black/5 px-3 py-1 rounded-full">
                  Selected work
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0b0b0c]">
                  Proven results in the market.
                </h2>
              </div>
              <Button to="/case-study" variant="secondary">
                All case studies
              </Button>
            </div>
          </MotionReveal>

          {/* Stacking / Overlapping Cards Container */}
          <div className="relative pb-16">
            {selectedCaseStudies.map((study, idx) => (
              <div
                key={study.slug}
                className="sticky transition-all duration-300"
                style={{
                  top: `${100 + idx * 24}px`,
                  zIndex: idx + 1,
                  marginBottom: idx === selectedCaseStudies.length - 1 ? '0' : '90px',
                }}
              >
                <CaseStudyCard study={study} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. THE NUMBERS BEHIND THE NOISE */}
      <section className="py-12 sm:py-16 border-y border-black/5 bg-[#0b0b0c]/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="text-center max-w-xl mx-auto mb-10">
              <Badge text="The numbers behind the noise" className="mb-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.companyStats.map((item, idx) => (
                <div key={idx} className="p-6">
                  <div className="text-5xl sm:text-6xl font-extrabold text-[#0b0b0c] tracking-tight mb-2">
                    {renderStatValue(item.value)}
                  </div>
                  <div className="text-sm sm:text-base font-medium text-[#6a6e6e]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 8. HOW WE COMPOUND (Operating Rhythm) */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <OperatingRhythm />
          </MotionReveal>
        </div>
      </section>

      {/* 9. WHY TEAMS SWITCH TO US (Comparison Table) */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <ComparisonTable />
          </MotionReveal>
        </div>
      </section>

      {/* 10. TESTIMONIALS - Slider Layout */}
      <section className="py-12 sm:py-20 bg-[#0b0b0c] text-white rounded-[32px] sm:rounded-[40px] my-12 mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 lg:px-16 border border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <MotionReveal>
            {/* Main Founder Quote Banner */}
            <div className="py-12 sm:py-16 border-b border-white/10 max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white mb-6 leading-snug">
                &ldquo;{featuredQuote.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <span className="font-semibold text-white">{featuredQuote.author}</span>
                <span className="text-white/40">·</span>
                <span className="text-[#9efc65] text-sm">{featuredQuote.role}</span>
              </div>
            </div>

            {/* Customer Reviews - Slider */}
            <div className="pt-16">
              <div className="text-center max-w-md mx-auto mb-12">
                <span className="text-xs uppercase tracking-wider text-[#9efc65] font-semibold block mb-2">
                  Our customers
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Our success stories
                </h3>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
                {/* Left: Avatar Stack */}
                <div className="flex md:flex-col items-center gap-4">
                  {testimonials.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`relative rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                        activeTestimonial === idx
                          ? 'w-16 h-16 ring-3 ring-[#9efc65] scale-110'
                          : 'w-14 h-14 ring-2 ring-white/20 opacity-50 hover:opacity-80'
                      }`}
                    >
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Right: Testimonial Card */}
                <div className="flex-1 bg-[#161616] border border-white/10 rounded-[22px] p-8 sm:p-10 transition-all duration-500">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#9efc65" className="w-5 h-5">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-8 font-normal">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-white/20"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{currentTestimonial.name}</h4>
                      <p className="text-xs text-[#8b8b8b]">{currentTestimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 11. BLOG & INSIGHTS */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="inline-block text-xs uppercase tracking-wider text-[#6a6e6e] font-semibold mb-3 bg-black/5 px-3 py-1 rounded-full">
                  The growth playbook
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0b0b0c]">
                  Blog & Insights
                </h2>
              </div>
              <Button to="/blog" variant="secondary">
                View all insights
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredBlogPosts[0] && (
                <BlogCard post={featuredBlogPosts[0]} featured={true} className="lg:row-span-2" />
              )}
              <div className="space-y-8">
                {featuredBlogPosts.slice(1).map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 12. BOTTOM CTA BANNER */}
      <MotionReveal>
        <CTABanner />
      </MotionReveal>
    </div>
  );
}
