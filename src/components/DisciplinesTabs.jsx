import React, { useState } from 'react';
import { disciplines } from '../data/disciplines';
import MotionReveal from './MotionReveal';

export default function DisciplinesTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDiscipline = disciplines[activeIndex];

  return (
    <div className="bg-[#122020] text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 border border-white/10 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Tabs & Details */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <MotionReveal delay={0.1}>
            <div>
              <span className="inline-block text-xs uppercase tracking-wider text-[#9efc65] font-semibold mb-3">
                Four disciplines, one system growth
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Where should your next dollar work?
              </h2>

              {/* Description Text */}
              <div className="min-h-[72px] mb-8">
                <p className="text-[#b7bcbc] text-base sm:text-lg leading-relaxed">
                  {activeDiscipline.description}
                </p>
              </div>
            </div>
          </MotionReveal>

          {/* Tab Buttons (01 Strategy, 02 Paid media, 03 Creative, 04 Analytics) */}
          <MotionReveal delay={0.25} y={40}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {disciplines.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={item.number}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex flex-col sm:flex-row items-center sm:items-baseline gap-2 px-4 py-3 rounded-xl transition-all duration-200 text-left border cursor-pointer ${
                      isActive
                        ? 'bg-[#171718] border-white/20 shadow-md text-white'
                        : 'bg-transparent hover:bg-white/5 border-transparent text-[#b7bcbc]/60 hover:text-white'
                    }`}
                  >
                    <span className={`text-xs sm:text-sm font-bold ${isActive ? 'text-[#9efc65]' : 'text-inherit'}`}>
                      {item.number}
                    </span>
                    <span className="text-sm font-semibold tracking-tight">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </MotionReveal>
        </div>

        {/* Right Side: Interactive Image Preview */}
        <div className="lg:col-span-5">
          <MotionReveal delay={0.3} y={50}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl">
              <img
                key={activeDiscipline.number}
                src={activeDiscipline.image}
                alt={activeDiscipline.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-[#0b0b0c]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-white border border-white/10">
                {activeDiscipline.number} • {activeDiscipline.title}
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </div>
  );
}
