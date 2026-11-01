import React from 'react';

export default function Badge({
  text,
  dot = false,
  twoDots = false,
  variant = 'light',
  className = '',
}) {
  const isDark = variant === 'dark';
  const isWhite = variant === 'white';

  const baseStyles = isDark
    ? 'bg-white/10 text-white/90 border border-white/15'
    : isWhite
    ? 'bg-white text-[#0b0b0c] border border-black/10'
    : 'bg-[#0b0b0c]/5 text-[#0b0b0c]/80 border border-[#0b0b0c]/10';

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all ${baseStyles} ${className}`}
    >
      {(dot || twoDots) && (
        <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white' : 'bg-[#0b0b0c]'}`} />
      )}
      <span>{text}</span>
      {twoDots && (
        <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white' : 'bg-[#0b0b0c]'}`} />
      )}
    </div>
  );
}
