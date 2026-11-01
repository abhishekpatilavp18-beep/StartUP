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

        {/* Massive AeroTyne Wordmark */}
        <div className="py-10 sm:py-16 flex items-center justify-center">
          <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 opacity-85 select-none w-full">
            <svg viewBox="0 0 31 36" className="h-10 sm:h-16 md:h-24 lg:h-32 xl:h-36 w-auto flex-shrink-0" fill="none">
              <path fill="#9efc65" d="M0 20c0 7.737 5.885 14.125 13.413 14.925V20.111l-5.32-5.321c-.603-.602-.674-1.582-.112-2.221a1.6 1.6 0 0 1 2.333-.078l3.1 3.1V5.074C5.883 5.875 0 12.263 0 20m11.035 3.347c.63.63.662 1.692.025 2.314a1.594 1.594 0 0 1-2.246-.015l-5.79-5.789c-.601-.602-.673-1.581-.11-2.221a1.6 1.6 0 0 1 2.332-.078zM16.61 5.075V15.59l3.06-3.06c.602-.602 1.582-.674 2.222-.112.7.616.727 1.684.077 2.333l-5.36 5.36v5.614l8.129-8.128c.602-.602 1.582-.673 2.221-.111.701.615.727 1.684.078 2.333L16.61 30.246v4.48c0 .106.093.19.199.177 7.433-.891 13.214-7.234 13.214-14.903 0-7.737-5.885-14.125-13.413-14.925"/>
            </svg>
            <span className="text-4xl sm:text-7xl md:text-8xl lg:text-[130px] xl:text-[160px] font-black tracking-tighter text-[#9efc65] leading-none whitespace-nowrap">
              AeroTyne<span className="text-lg sm:text-3xl md:text-4xl lg:text-5xl text-[#9efc65]/70 align-top ml-1">®</span>
            </span>
          </div>
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
