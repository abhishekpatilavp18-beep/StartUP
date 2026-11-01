import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'dark' | 'outline'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = true,
  className = '',
  type = 'button',
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  const variantClasses = {
    primary:
      'bg-[#101011] hover:bg-[#202022] text-white border border-transparent shadow-sm hover:shadow',
    secondary:
      'bg-transparent hover:bg-black/5 text-[#0b0b0c] border border-black/15 hover:border-black/25',
    darkOutline:
      'bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40',
    lime:
      'bg-[#9efc65] hover:bg-[#8ee854] text-[#0b0b0c] font-medium border border-transparent shadow-sm',
  };

  const content = (
    <span className="flex items-center justify-center gap-2.5 font-medium tracking-tight">
      <span>{children}</span>
      {icon && (
        <span className="inline-flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 stroke-current"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.5 9.5L9.5 2.5" />
            <path d="M4 2.5H9.5V8" />
          </svg>
        </span>
      )}
    </span>
  );

  const baseClasses = `group inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer select-none active:scale-[0.98] ${sizeClasses[size]} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}

