import React, { useState, useEffect } from 'react';
import { processSteps } from '../data/processSteps';
import MotionReveal from './MotionReveal';

const stepColors = ['#9efc65', '#ffbcfc', '#ffffff'];

const promises = [
  'Fixed scope and price agreed before we start',
  'Progress links you can click through as we build',
  'Code, domain, and accounts handed over to you',
];

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
              How we deliver.
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0b0b0c] mb-4 leading-tight">
              A simple process, from first call to live site.
            </h2>
          </div>

          {/* What you can count on */}
          <ul className="mt-8 space-y-3">
            {promises.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white rounded-2xl border border-black/5 px-5 py-4 text-sm sm:text-base font-medium text-[#0b0b0c]"
              >
                <span className="w-5 h-5 rounded-full bg-[#9efc65] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </MotionReveal>

      {/* RIGHT: Dark Circle with step card */}
      <MotionReveal delay={0.25} y={60}>
        <div className="flex items-center justify-center h-full">
          {/* Rounded panel on smaller screens; a true circle only where the step card fits inside it */}
          <div className="relative w-full max-w-[540px] rounded-[32px] xl:rounded-full xl:aspect-square bg-[#0b0b0c] border border-white/10 flex items-center justify-center px-5 pt-6 pb-14 sm:px-10 sm:pt-10 xl:p-14 shadow-2xl">
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
              <div className="flex flex-wrap items-center gap-2">
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
            <div className="absolute bottom-5 xl:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
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
