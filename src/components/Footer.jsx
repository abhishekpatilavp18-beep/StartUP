import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

function FooterLinkList({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
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
  );
}

export default function Footer() {
  const { email, phone, studio } = siteConfig.contact;

  return (
    <footer className="bg-[#122020] text-white overflow-hidden rounded-t-[30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Direct contact */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
              Have a project in mind?
            </h3>
            <p className="text-[#8b8b8b] text-base max-w-md mb-6 leading-relaxed">
              Write to us directly. You'll hear back from one of the founders, not a sales team.
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#9efc65] text-[#0b0b0c] font-medium text-sm px-7 py-3 transition-colors duration-200 shadow"
            >
              {email}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 9.5L9.5 2.5" />
                <path d="M4 2.5H9.5V8" />
              </svg>
            </a>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterLinkList title="Pages" links={siteConfig.footerLinks.pages} />
            <FooterLinkList title="Support" links={siteConfig.footerLinks.support} />
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
                Contact
              </h4>
              <div className="space-y-3 text-sm text-[#8b8b8b]">
                <a href={`mailto:${email}`} className="hover:text-white transition-colors block text-white font-medium break-all">
                  {email}
                </a>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors block">
                  {phone}
                </a>
                <p className="text-xs leading-relaxed pt-1">{studio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Large AeroTyne Wordmark */}
        <div className="py-10 sm:py-16 flex items-center justify-center">
          <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 opacity-85 select-none w-full">
            <svg viewBox="0 0 31 36" className="h-10 sm:h-16 md:h-24 lg:h-32 xl:h-36 w-auto flex-shrink-0" fill="none" aria-hidden="true">
              <path fill="#9efc65" d="M0 20c0 7.737 5.885 14.125 13.413 14.925V20.111l-5.32-5.321c-.603-.602-.674-1.582-.112-2.221a1.6 1.6 0 0 1 2.333-.078l3.1 3.1V5.074C5.883 5.875 0 12.263 0 20m11.035 3.347c.63.63.662 1.692.025 2.314a1.594 1.594 0 0 1-2.246-.015l-5.79-5.789c-.601-.602-.673-1.581-.11-2.221a1.6 1.6 0 0 1 2.332-.078zM16.61 5.075V15.59l3.06-3.06c.602-.602 1.582-.674 2.222-.112.7.616.727 1.684.077 2.333l-5.36 5.36v5.614l8.129-8.128c.602-.602 1.582-.673 2.221-.111.701.615.727 1.684.078 2.333L16.61 30.246v4.48c0 .106.093.19.199.177 7.433-.891 13.214-7.234 13.214-14.903 0-7.737-5.885-14.125-13.413-14.925"/>
            </svg>
            <span className="text-4xl sm:text-7xl md:text-8xl lg:text-[130px] xl:text-[160px] font-black tracking-tighter text-[#9efc65] leading-none whitespace-nowrap">
              AeroTyne
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
          </span>
        </div>

        <div className="pt-6 border-t border-white/5 text-[11px] text-[#606266] leading-relaxed max-w-5xl">
          {siteConfig.disclaimer}
        </div>
      </div>
    </footer>
  );
}
