import React from 'react';
import { Link } from 'react-router-dom';
import { stats } from '../data/stats';
import MotionReveal from './MotionReveal';

export default function StatsGrid() {
  return (
    <div className="py-12 sm:py-16">
      {/* Centered Header */}
      <MotionReveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-[#6a6e6e] font-semibold mb-3 bg-black/5 px-3 py-1 rounded-full">
            Growth you can point at.
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0b0b0c]">
            Every engagement starts with a target and ends with a number.
          </h2>
          <p className="text-[#6a6e6e] text-base sm:text-lg mt-3">
            Here's the last twelve months.
          </p>
        </div>
      </MotionReveal>

      {/* Two-column top row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Peak ROAS - Yellow Card */}
        <MotionReveal delay={0.1} y={60}>
          <div className="bg-[#fde589] border border-[#f0d060]/30 rounded-[28px] p-8 sm:p-10 flex flex-col justify-between min-h-[300px] shadow-sm">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0b0b0c]/60 mb-6">
              <span>Peak ROAS</span>
            </div>
            <div>
              <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[#0b0b0c] mb-3">
                8.1x
              </div>
              <p className="text-sm text-[#0b0b0c]/60">
                Return on ad spend — DTC skincare, peak quarter
              </p>
            </div>
          </div>
        </MotionReveal>

        {/* Spending efficiency - Gray Card */}
        <MotionReveal delay={0.25} y={60}>
          <div className="bg-[#f0f0f0] border border-black/5 rounded-[28px] p-8 sm:p-10 flex flex-col justify-between min-h-[300px] relative overflow-hidden shadow-sm">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#6a6e6e] mb-6">
              <span>Spending efficiency</span>
              <span className="bg-black/5 px-2 py-0.5 rounded text-[10px]">90-day sprint</span>
            </div>
            
            {/* Mini bar chart visual */}
            <div className="absolute bottom-8 right-8 flex items-end gap-1.5 opacity-20">
              {[40, 55, 35, 65, 50, 70, 45, 60, 75, 55, 80, 50].map((h, i) => (
                <div key={i} className="w-3 bg-[#0b0b0c] rounded-t" style={{ height: `${h}px` }} />
              ))}
            </div>
            
            <div className="relative z-10">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[#0b0b0c] mb-3">
                −41%
              </div>
              <p className="text-sm text-[#6a6e6e]">
                $68 → $40 blended CAC, outdoor ecommerce
              </p>
            </div>
          </div>
        </MotionReveal>
      </div>

      {/* Full-width dark card */}
      <MotionReveal delay={0.2} y={50}>
        <div className="bg-[#122020] text-white rounded-[28px] p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden shadow-xl">
          {/* Woman photo */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white/10">
            <img
              src="https://framerusercontent.com/images/eZ8inPIozwVXbVStRvddal5ZO84.jpg"
              alt="Client"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
              Avg. YoY client revenue growth
            </div>
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-3">
              212<span className="text-[#9efc65]">%</span>
            </div>
            <p className="text-sm text-white/60 mb-4">
              Consolidated spend around high-margin channels
            </p>
            <Link
              to="/case-study/halegrove"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#9efc65] hover:text-[#b5ff90] transition-colors"
            >
              Read the case study
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 9.5L9.5 2.5" />
                <path d="M4 2.5H9.5V8" />
              </svg>
            </Link>
          </div>
        </div>
      </MotionReveal>
    </div>
  );
}
