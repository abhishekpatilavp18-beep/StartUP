import React, { useState } from 'react';

export default function Accordion({ items, allowMultiple = false, className = "" }) {
  const [openIndexes, setOpenIndexes] = useState([0]); // default first open

  const toggleIndex = (index) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div
            key={index}
            className={`rounded-2xl transition-all duration-200 border ${
              isOpen
                ? 'bg-white border-black/15 shadow-sm'
                : 'bg-[#f0f0f0]/70 hover:bg-[#eae8e0] border-black/5'
            }`}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-semibold text-[#0b0b0c] tracking-tight">
                {item.question}
              </span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                  isOpen
                    ? 'bg-[#0b0b0c] text-white rotate-45'
                    : 'bg-black/5 text-[#0b0b0c]'
                }`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 1V11" />
                  <path d="M1 6H11" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-[#6a6e6e] text-sm sm:text-base leading-relaxed animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

