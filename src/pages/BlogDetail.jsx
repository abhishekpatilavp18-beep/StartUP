import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Badge from '../components/Badge';
import Button from '../components/Button';
import BlogCard from '../components/BlogCard';
import CTABanner from '../components/CTABanner';
import { blogPosts } from '../data/blogPosts';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const recentPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-24 sm:pt-32">
      {/* 1. ARTICLE HEADER */}
      <section className="py-12 sm:py-20 border-b border-black/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#6a6e6e] hover:text-[#0b0b0c] uppercase tracking-wider mb-6 transition-colors"
          >
            ← Back to all insights
          </Link>

          {/* Category & Read Time */}
          <div className="flex items-center gap-2 text-xs text-[#6a6e6e] font-medium mb-4">
            <span className="bg-[#0b0b0c] text-white px-3 py-1 rounded-full font-semibold">
              {post.category}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0b0b0c] leading-[1.12] mb-6">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-lg sm:text-xl text-[#6a6e6e] leading-relaxed max-w-2xl font-normal">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* 2. COVER IMAGE */}
      <section className="py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] sm:rounded-[36px] overflow-hidden border border-black/10 shadow-xl aspect-[16/9] bg-black/5">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. ARTICLE CONTENT */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {post.sectionTitle && (
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b0b0c]">
              {post.sectionTitle}
            </h2>
          )}

          {post.intro && (
            <p className="text-lg sm:text-xl text-[#0b0b0c] leading-relaxed font-medium">
              {post.intro}
            </p>
          )}

          {post.paragraphs?.map((p, idx) => (
            <p key={idx} className="text-base sm:text-lg text-[#6a6e6e] leading-relaxed">
              {p}
            </p>
          ))}

          {/* Key Takeaways */}
          {post.takeaways && post.takeaways.length > 0 && (
            <div className="my-10 p-8 sm:p-10 bg-[#f0f0f0] border border-black/5 rounded-[26px]">
              <h3 className="text-lg font-bold uppercase tracking-wider text-[#0b0b0c] mb-6">
                Key Principles
              </h3>
              <ul className="space-y-4">
                {post.takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-[#0b0b0c]">
                    <span className="w-5 h-5 rounded-full bg-[#9efc65] text-[#0b0b0c] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {post.conclusion?.map((p, idx) => (
            <p key={idx} className="text-base sm:text-lg text-[#6a6e6e] leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* 4. RECENT BLOGS */}
      <section className="py-16 sm:py-24 border-t border-black/5 bg-[#0b0b0c]/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b0b0c]">
              Recent blogs
            </h3>
            <Button to="/blog" variant="secondary" size="sm">
              See all blogs
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((rPost) => (
              <BlogCard key={rPost.slug} post={rPost} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <CTABanner />
    </div>
  );
}

