import React from 'react';

export default function Badge({ text, dot = false, variant = 'light', className = '' }) {
  const isDark = variant === 'dark';
  
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all ${
        isDark
          ? 'bg-white/10 text-white/90 border border-white/15'
          : 'bg-[#0b0b0c]/5 text-[#0b0b0c]/80 border border-[#0b0b0c]/10'
      } ${className}`}
    >
      {dot && (
        <span className="w-2 h-2 rounded-full bg-[#9efc65] animate-pulse" />
      )}
      <span>{text}</span>
    </div>
  );
}

