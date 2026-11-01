import React, { useState, useEffect } from 'react';
import { processSteps } from '../data/processSteps';
import MotionReveal from './MotionReveal';

const stepColors = ['#9efc65', '#ffbcfc', '#ffffff'];

export default function OperatingRhythm() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = processSteps[activeStep];
  const bgColor = stepColors[activeStep];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      {/* LEFT: Info Card */}
      <MotionReveal delay={0.1} y={50}>
        <div className="bg-[#f0f0f0] rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 flex flex-col justify-between border border-black/5 min-h-[500px] h-full shadow-sm">
          <div>
            <span className="inline-block text-xs uppercase tracking-wider font-semibold mb-4 bg-[#d0f0ff] text-[#0077aa] px-3 py-1 rounded-full">
              How we compound.
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0b0b0c] mb-4 leading-tight">
              A weekly operating rhythm, not a quarterly report.
            </h2>
          </div>

          {/* Photo with blue overlay */}
          <div className="relative rounded-2xl overflow-hidden my-6 aspect-[16/10]">
            <img
              src="https://framerusercontent.com/images/JhMntRZ4YJoZLBup4uG7ZuP460s.jpg"
              alt="Team at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0077aa]/30 mix-blend-multiply" />
          </div>

          {/* 10+ years stat */}
          <div className="flex items-baseline gap-3 mt-auto">
            <span className="text-5xl sm:text-6xl font-extrabold text-[#0b0b0c] tracking-tighter">
              10<span className="text-[#ffbcfc]">+</span>
            </span>
            <span className="text-sm text-[#6a6e6e] max-w-xs leading-snug">
              Years spending and scaling media across every cycle and platform shift.
            </span>
          </div>
        </div>
      </MotionReveal>

      {/* RIGHT: Dark Circle with step card */}
      <MotionReveal delay={0.25} y={60}>
        <div className="flex items-center justify-center h-full">
          <div className="relative w-full aspect-square max-w-[540px] rounded-full bg-[#0b0b0c] border border-white/10 flex items-center justify-center p-8 sm:p-14 shadow-2xl">
            {/* Floating step card */}
            <div
              className="w-full max-w-[320px] rounded-[24px] p-7 sm:p-8 transition-all duration-500 shadow-2xl"
              style={{ backgroundColor: bgColor, color: '#0b0b0c' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-5 shadow-sm"
                style={{
                  backgroundColor: activeStep === 2 ? '#0b0b0c' : 'white',
                  color: activeStep === 2 ? 'white' : '#0b0b0c',
                }}
              >
                {current.step}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base leading-relaxed opacity-80 mb-6">
                {current.description}
              </p>

              {/* Step selector pills */}
              <div className="flex items-center gap-2">
                {processSteps.map((step, idx) => (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      activeStep === idx
                        ? 'bg-[#0b0b0c] text-white shadow'
                        : 'bg-black/10 text-black/60 hover:bg-black/15'
                    }`}
                  >
                    <span>{step.step}</span>
                    <span>{step.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Progress dots at bottom of circle */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {processSteps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeStep === idx
                      ? 'bg-[#9efc65] scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </MotionReveal>
    </div>
  );
}
