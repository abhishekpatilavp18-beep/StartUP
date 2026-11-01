import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ post, featured = false, className = "" }) {
  if (featured) {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className={`group relative flex flex-col justify-end bg-[#0b0b0c] rounded-[22px] sm:rounded-[26px] overflow-hidden transition-all duration-300 hover:shadow-xl min-h-[400px] lg:min-h-[500px] ${className}`}
      >
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="relative z-10 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-xs text-white/80 font-medium mb-3">
            <span className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full font-semibold">
              {post.category}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white group-hover:text-[#9efc65] transition-colors line-clamp-2">
            {post.title}
          </h3>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group flex flex-col justify-between bg-[#f0f0f0] hover:bg-[#eae8e0] border border-black/5 rounded-[22px] sm:rounded-[26px] overflow-hidden transition-all duration-300 hover:shadow-md ${className}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/5">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-2.5 text-xs text-[#6a6e6e] font-medium mb-3">
            <span className="bg-white/80 text-[#0b0b0c] px-2.5 py-0.5 rounded-full border border-black/5 font-semibold">
              {post.category}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0b0b0c] group-hover:text-black transition-colors line-clamp-2">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="mt-2 text-sm text-[#6a6e6e] line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>

        <div className="pt-5 mt-4 border-t border-black/10 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0b0b0c]">
          <span className="group-hover:translate-x-0.5 transition-transform">
            Read article
          </span>
          <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0b0b0c] group-hover:bg-[#0b0b0c] group-hover:text-white transition-all shadow-sm">
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.5 9.5L9.5 2.5" />
              <path d="M4 2.5H9.5V8" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
