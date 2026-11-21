import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Hero visual built from our own project screenshots: one featured project
 * in a browser frame, with two others layered behind it on wide screens.
 * @param {{ projects: Array<{ slug: string, title: string, image: string, category: string }> }} props
 */
export default function HeroShowcase({ projects }) {
  const [featured, left, right] = projects;
  if (!featured) return null;

  return (
    <div className="relative max-w-5xl mx-auto mt-12 sm:mt-16">
      {/* Background cards (desktop only) */}
      {left && (
        <img
          src={left.image}
          alt=""
          aria-hidden="true"
          className="hidden xl:block absolute -left-16 top-16 w-[42%] rounded-2xl border border-black/10 shadow-xl -rotate-6 opacity-90"
        />
      )}
      {right && (
        <img
          src={right.image}
          alt=""
          aria-hidden="true"
          className="hidden xl:block absolute -right-16 top-16 w-[42%] rounded-2xl border border-black/10 shadow-xl rotate-6 opacity-90"
        />
      )}

      {/* Featured project in a browser frame */}
      <Link
        to={`/case-study/${featured.slug}`}
        className="group relative block rounded-[22px] sm:rounded-[28px] overflow-hidden border border-black/10 shadow-2xl bg-white"
      >
        <div className="flex items-center gap-1.5 px-4 py-3 bg-[#f7f7f7] border-b border-black/5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <img
          src={featured.image}
          alt={`${featured.title} home page`}
          className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        {/* Overlay label on larger screens; on phones it sits under the image so it doesn't cover it */}
        <div className="hidden sm:block absolute bottom-6 left-6 bg-[#0b0b0c]/90 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 shadow-xl text-white">
          <div className="text-xs font-semibold text-[#9efc65] uppercase tracking-wider">
            Latest project · {featured.category}
          </div>
          <div className="text-xl font-bold">{featured.title}</div>
        </div>
        <div className="sm:hidden flex items-center justify-between gap-3 px-4 py-3 bg-[#0b0b0c] text-white">
          <div className="min-w-0">
            <div className="text-[10px] font-semibold text-[#9efc65] uppercase tracking-wider">
              Latest project · {featured.category}
            </div>
            <div className="text-sm font-bold truncate">{featured.title}</div>
          </div>
          <span className="text-[#9efc65] flex-shrink-0" aria-hidden="true">↗</span>
        </div>
      </Link>

      <p className="mt-8 text-center text-sm font-medium text-[#6a6e6e]">
        {projects.length} live projects so far. Every one of them is linked below.
      </p>
    </div>
  );
}
