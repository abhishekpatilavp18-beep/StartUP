import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import Button from './Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPagesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/[0.07] transition-all duration-200">
      <div className="max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="AeroTyne Home"
          >
            <div className="flex items-center gap-2 transition-transform duration-200 group-hover:scale-[1.02]">
              <svg viewBox="0 0 31 36" className="h-7 sm:h-8 w-auto flex-shrink-0" fill="none">
                <path fill="#319F7E" d="M0 20c0 7.737 5.885 14.125 13.413 14.925V20.111l-5.32-5.321c-.603-.602-.674-1.582-.112-2.221a1.6 1.6 0 0 1 2.333-.078l3.1 3.1V5.074C5.883 5.875 0 12.263 0 20m11.035 3.347c.63.63.662 1.692.025 2.314a1.594 1.594 0 0 1-2.246-.015l-5.79-5.789c-.601-.602-.673-1.581-.11-2.221a1.6 1.6 0 0 1 2.332-.078zM16.61 5.075V15.59l3.06-3.06c.602-.602 1.582-.674 2.222-.112.7.616.727 1.684.077 2.333l-5.36 5.36v5.614l8.129-8.128c.602-.602 1.582-.673 2.221-.111.701.615.727 1.684.078 2.333L16.61 30.246v4.48c0 .106.093.19.199.177 7.433-.891 13.214-7.234 13.214-14.903 0-7.737-5.885-14.125-13.413-14.925"/>
              </svg>
              <span className="text-[21px] sm:text-[23px] font-bold tracking-tight text-[#0b0b0c] flex items-center leading-none">
                AeroTyne<span className="text-[10px] ml-0.5 -mt-2 font-semibold text-[#0b0b0c]/60">®</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {siteConfig.navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors cursor-pointer ${
                        pagesDropdownOpen ||
                        link.dropdown.some((item) => isActive(item.path))
                          ? 'text-[#0b0b0c] font-semibold'
                          : 'text-[#6a6e6e] hover:text-[#0b0b0c]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 text-[#6a6e6e] ${
                          pagesDropdownOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {pagesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-3 w-48 bg-white border border-black/10 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                              isActive(subItem.path)
                                ? 'text-[#0b0b0c] bg-black/5 font-semibold'
                                : 'text-[#6a6e6e] hover:text-[#0b0b0c] hover:bg-black/[0.03]'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-[#0b0b0c] font-semibold'
                      : 'text-[#6a6e6e] hover:text-[#0b0b0c]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center">
            <Button to="/contact" size="md" variant="primary">
              Start a project
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button to="/contact" size="sm" variant="primary" className="text-xs px-3 py-1.5">
              Audit
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-black/5 text-[#0b0b0c] hover:bg-black/10 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-white border-b border-black/10 shadow-2xl px-6 py-8 transition-all animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className={`text-lg font-medium py-2 border-b border-black/5 ${
                isActive('/') ? 'text-[#0b0b0c] font-bold' : 'text-[#6a6e6e]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/case-study"
              className={`text-lg font-medium py-2 border-b border-black/5 ${
                isActive('/case-study') ? 'text-[#0b0b0c] font-bold' : 'text-[#6a6e6e]'
              }`}
            >
              Case Studies
            </Link>
            <Link
              to="/about"
              className={`text-lg font-medium py-2 border-b border-black/5 ${
                isActive('/about') ? 'text-[#0b0b0c] font-bold' : 'text-[#6a6e6e]'
              }`}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`text-lg font-medium py-2 border-b border-black/5 ${
                isActive('/blog') ? 'text-[#0b0b0c] font-bold' : 'text-[#6a6e6e]'
              }`}
            >
              Blog
            </Link>
            
            {/* Pages Section */}
            <div className="py-2 border-b border-black/5">
              <span className="text-xs uppercase tracking-wider text-black/40 font-semibold block mb-2">
                Pages & Support
              </span>
              <div className="flex flex-col gap-2 pl-3">
                <Link
                  to="/faqs"
                  className={`text-base font-medium ${
                    isActive('/faqs') ? 'text-[#0b0b0c] font-bold' : 'text-[#6a6e6e]'
                  }`}
                >
                  FAQs
                </Link>
                <Link
                  to="/contact"
                  className={`text-base font-medium ${
                    isActive('/contact') ? 'text-[#0b0b0c] font-bold' : 'text-[#6a6e6e]'
                  }`}
                >
                  Contact Us
                </Link>
                <Link
                  to="/legal-pages/privacy-policy"
                  className={`text-base font-medium ${
                    isActive('/legal-pages/privacy-policy') ? 'text-[#0b0b0c] font-bold' : 'text-[#6a6e6e]'
                  }`}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="pt-4">
              <Button to="/contact" size="lg" variant="primary" className="w-full">
                Start a project
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
