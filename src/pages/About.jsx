import React from 'react';
import Badge from '../components/Badge';
import CTABanner from '../components/CTABanner';
import { aboutStory, values, teamMembers, teamPromise } from '../data/team';
import { stats } from '../data/stats';

export default function About() {
  return (
    <div className="pt-24 sm:pt-32">
      {/* 1. HERO STORY SECTION */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge text={aboutStory.badge} className="mb-6" />

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#0b0b0c] leading-[1.08] mb-8 text-balance">
              {aboutStory.headline}
            </h1>

            <div className="space-y-6 text-lg sm:text-xl text-[#6a6e6e] font-normal leading-relaxed max-w-3xl">
              {aboutStory.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="py-12 sm:py-16 bg-[#0b0b0c] text-white my-8 mx-4 sm:mx-6 lg:mx-8 rounded-[28px] sm:rounded-[36px] border border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.companyStats.map((item, idx) => (
              <div key={idx} className="pt-6 md:pt-0 md:px-6">
                <div className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-2">
                  {item.value}
                </div>
                <div className="text-sm sm:text-base font-medium text-[#b7bcbc]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE STAND ON (VALUES) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block text-xs uppercase tracking-wider text-[#6a6e6e] font-semibold mb-3 bg-black/5 px-3 py-1 rounded-full">
              What we stand on
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0b0b0c]">
              Principles that guide every dollar.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val) => (
              <div
                key={val.number}
                className="bg-[#f0f0f0] border border-black/5 rounded-[26px] p-8 sm:p-10 flex flex-col justify-between hover:bg-[#eae8e0] transition-colors"
              >
                <div>
                  <span className="text-sm font-bold text-[#0b0b0c] bg-white px-3 py-1 rounded-full border border-black/5 inline-block mb-6">
                    {val.number}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-[#0b0b0c] mb-4">
                    {val.title}
                  </h3>
                  <p className="text-[#6a6e6e] text-base leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE SENIOR TEAM PROMISE */}
      <section className="py-16 sm:py-24 bg-[#0b0b0c]/[0.02] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs uppercase tracking-wider text-[#6a6e6e] font-semibold mb-3 bg-black/5 px-3 py-1 rounded-full">
              {teamPromise.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0b0b0c]">
              {teamPromise.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-white border border-black/10 rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-black/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0b0b0c] tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#6a6e6e] font-medium mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <CTABanner />
    </div>
  );
}

