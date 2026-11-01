import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const partnerBadges = [
    {
      name: 'Google Partner',
      image: 'https://framerusercontent.com/images/AOV2DTNHK6JgQPDMFMSruGw.jpg',
    },
    {
      name: 'Meta Business Partner',
      image: 'https://framerusercontent.com/images/jZfxvFmbpRDqIBZd8yCfHG8A.png',
    },
    {
      name: 'Keap Certified',
      image: 'https://framerusercontent.com/images/lwc0nMAf1TpEtjhnpXgaHR00P8.png',
    },
  ];

  return (
    <footer className="bg-[#122020] text-white overflow-hidden rounded-t-[30px]">
      {/* Top Section: Newsletter + Nav Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-6">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
              Stay connected
            </h3>
            <p className="text-[#8b8b8b] text-base max-w-md mb-6 leading-relaxed">
              Join our newsletter for tips, updates, and project highlights only the good stuff.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-white/10 border border-[#9efc65]/30 text-[#9efc65] text-sm">
                ✓ Thank you for subscribing! We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/[0.08] border border-white/15 focus:border-[#9efc65] rounded-full px-5 py-3 text-sm text-white placeholder-[#8b8b8b] outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white hover:bg-[#9efc65] text-[#0b0b0c] font-medium text-sm px-7 py-3 transition-colors duration-200 cursor-pointer shadow"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="mt-8 flex items-center gap-4">
              <span className="text-xs text-[#8b8b8b] uppercase tracking-wider font-medium">
                Follow us on:
              </span>
              <div className="flex items-center gap-3">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center p-2 text-white/80 hover:text-white transition-all hover:scale-105"
                  >
                    <img src={social.icon} alt={social.name} className="w-4 h-4 object-contain brightness-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
                Pages
              </h4>
              <ul className="space-y-3">
                {siteConfig.footerLinks.pages.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-[#8b8b8b] hover:text-white transition-colors duration-150 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
                Support
              </h4>
              <ul className="space-y-3">
                {siteConfig.footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-[#8b8b8b] hover:text-white transition-colors duration-150 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
                Stay Connected
              </h4>
              <div className="space-y-3 text-sm text-[#8b8b8b]">
                <p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-white transition-colors block text-white font-medium"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-white transition-colors block"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </p>
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-[#9efc65] font-semibold block mb-1">
                    Studio
                  </span>
                  <p className="text-xs text-[#8b8b8b] leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-10 border-b border-white/10">
          {partnerBadges.map((badge) => (
            <div
              key={badge.name}
              className="w-[140px] h-[60px] rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center p-3"
            >
              <img
                src={badge.image}
                alt={badge.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Massive Overtake Wordmark */}
        <div className="py-12 sm:py-16">
          <img
            src="https://framerusercontent.com/images/ikO8K7AtZod68TvQW6HvEvdhr4.png"
            alt="Overtake®"
            className="w-full max-w-full opacity-80"
          />
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8b8b8b] pb-6">
          <span>{siteConfig.copyright}</span>
          <span>
            Design by{' '}
            <a
              href={siteConfig.credits.designerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              {siteConfig.credits.designer}
            </a>
            , Powered by{' '}
            <a
              href={siteConfig.credits.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              {siteConfig.credits.platform}
            </a>
          </span>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 border-t border-white/5 text-[11px] text-[#606266] leading-relaxed max-w-5xl">
          {siteConfig.disclaimer}
        </div>
      </div>
    </footer>
  );
}
