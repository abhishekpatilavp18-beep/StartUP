import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import Button from '../components/Button';
import DisciplinesTabs from '../components/DisciplinesTabs';
import KeywordTicker from '../components/KeywordTicker';
import CaseStudyCard from '../components/CaseStudyCard';
import OperatingRhythm from '../components/OperatingRhythm';
import ComparisonTable from '../components/ComparisonTable';
import CTABanner from '../components/CTABanner';
import MotionReveal from '../components/MotionReveal';
import HeroShowcase from '../components/HeroShowcase';
import HeroIntentPicker from '../components/HeroIntentPicker';
import { caseStudies } from '../data/caseStudies';
import { stats } from '../data/stats';

function renderStatValue(value) {
  return value.split(/([\+%:])/).map((part, i) => {
    if (part === '+' || part === '%' || part === ':') {
      return <span key={i} className="text-[#ffbcfc]">{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}

const homeTeamAvatars = [
  {
    name: "Abhishek Patil",
    image: "/images/abhishek.jpg",
    fitClass: "object-[center_18%] scale-125 origin-[center_18%]",
  },
  {
    name: "Vedant S Tattimani",
    image: "/images/friend.jpg",
    fitClass: "object-[60%_40%] scale-120 origin-[60%_40%]",
  },
  {
    name: "Aditi Kamath",
    image: "/images/aditi.jpg",
    fitClass: "object-[center_28%] scale-125 origin-[center_28%]",
  },
];

export default function Home() {
  return (
    <div className="pt-24 sm:pt-28">
      {/* 1. HERO SECTION */}
      <section className="px-3 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="w-full max-w-[1780px] mx-auto rounded-[32px] sm:rounded-[42px] bg-[#f0f0f0] pt-14 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 border border-black/[0.04]">
          <MotionReveal delay={0.05} y={50}>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-14">
              <Badge
                text="Web design & development studio"
                twoDots={true}
                variant="white"
                className="mb-8 shadow-sm"
              />

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight text-[#0b0b0c] leading-[1.1] mb-8 text-balance text-center">
                We build websites{' '}
                <span className="inline-flex items-center align-middle mx-1 sm:mx-2">
                  <img
                    src="/images/site/yNPyjuv1mEjpaWjcuU9xcQ1nzU.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-10 sm:h-14 md:h-16 w-auto object-contain inline-block"
                  />
                </span>{' '}
                and web apps
                <br />
                that people actually use.
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#0b0b0c] max-w-2xl mx-auto mb-10 leading-relaxed font-normal text-center">
                <span className="bg-[#ffbcfc] text-[#0b0b0c] px-3 py-1 rounded-xl font-medium inline-block mr-1.5 shadow-sm">
                  Websites,
                </span>
                web apps, and{' '}
                <span className="bg-[#0b0b0c] text-white px-3 py-1 rounded-xl font-medium inline-block mx-1.5 shadow-sm">
                  browser tools
                </span>{' '}
                designed and coded by a small, founder-led team.
              </p>

              <HeroIntentPicker projectCount={caseStudies.length} workAnchorId="work" />
            </div>
          </MotionReveal>

          {/* Hero visual: our own live projects */}
          <MotionReveal delay={0.2} y={60}>
            <HeroShowcase projects={caseStudies} />
          </MotionReveal>
        </div>
      </section>

      {/* 2. OUR POINT OF VIEW (Dark Statement Card) */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal y={55}>
            <div className="bg-[#0b0b0c] text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-14 lg:p-20 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#9efc65]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-4xl">
                <Badge text="Who we are" variant="dark" className="mb-6" />

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-8">
                  We're a young studio that would rather show you than tell you.{' '}
                  <span className="text-[#9efc65]">
                    Every project on this site is live,
                  </span>{' '}
                  so you can open it and judge the work yourself.
                </h2>

                <p className="text-[#b7bcbc] text-base sm:text-xl font-normal max-w-2xl leading-relaxed mb-8">
                  The people you talk to are the people who design and write your code. No hand-offs, no account managers.
                </p>

                {/* Team member avatars */}
                <div className="flex items-center gap-3">
                  {homeTeamAvatars.map((member, idx) => (
                    <div
                      key={idx}
                      className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white/20 hover:border-[#9efc65] transition-colors flex-shrink-0"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full object-cover ${member.fitClass || ''}`}
                      />
                    </div>
                  ))}
                  <Link to="/about" className="text-xs text-white/50 hover:text-white ml-2 transition-colors">
                    Meet the team →
                  </Link>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 3. WHAT WE BUILD */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DisciplinesTabs />
        </div>
      </section>

      {/* 4. KEYWORD TICKER STRIP */}
      <KeywordTicker />

      {/* 5. SELECTED WORK (stacking cards) */}
      <section id="work" className="py-16 sm:py-24 relative overflow-visible scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal y={45}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <span className="inline-block text-xs uppercase tracking-wider text-[#6a6e6e] font-semibold mb-3 bg-black/5 px-3 py-1 rounded-full">
                  Selected work
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0b0b0c]">
                  Live projects you can click through.
                </h2>
              </div>
              <Button to="/case-study" variant="secondary">
                All projects
              </Button>
            </div>
          </MotionReveal>

          <div className="relative pb-16">
            {caseStudies.map((study, idx) => (
              <div
                key={study.slug}
                className="sticky transition-all duration-300"
                style={{
                  top: `${100 + idx * 24}px`,
                  zIndex: idx + 1,
                  marginBottom: idx === caseStudies.length - 1 ? '0' : '90px',
                }}
              >
                <CaseStudyCard study={study} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AT A GLANCE */}
      <section className="py-12 sm:py-16 border-y border-black/5 bg-[#0b0b0c]/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal y={50}>
            <div className="text-center max-w-xl mx-auto mb-10">
              <Badge text="At a glance" className="mb-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.companyStats.map((item) => (
                <div key={item.label} className="p-6">
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

      {/* 7. HOW WE WORK */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OperatingRhythm />
        </div>
      </section>

      {/* 8. WHY WORK WITH US */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonTable />
        </div>
      </section>

      {/* 9. BOTTOM CTA BANNER */}
      <MotionReveal y={50}>
        <CTABanner />
      </MotionReveal>
    </div>
  );
}
