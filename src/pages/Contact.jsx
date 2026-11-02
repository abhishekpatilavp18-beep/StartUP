import React from 'react';
import Badge from '../components/Badge';
import ContactForm from '../components/ContactForm';
import Accordion from '../components/Accordion';
import CTABanner from '../components/CTABanner';
import { siteConfig } from '../data/siteConfig';
import { contactFaqs } from '../data/faqs';

export default function Contact() {
  const highlights = [
    'A senior operator reviews your account before the call',
    'You leave with 2–3 clear wins, whether you hire us or not.',
    'Minimum engagement is a 90-day sprint, not a long retainer',
  ];

  return (
    <div className="pt-24 sm:pt-32">
      {/* 1. HERO & FORM SECTION */}
      <section className="py-12 sm:py-20 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Info & Promises */}
            <div className="lg:col-span-5">
              <Badge text="Book a growth audit" className="mb-6" />

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0b0b0c] leading-[1.08] mb-6">
                Find your growth leaking.
              </h1>

              <p className="text-lg text-[#6a6e6e] leading-relaxed mb-8">
                Tell us a little about your business. We'll come back within one working day with a 30-minute audit slot no deck, no pitch, just the numbers.
              </p>

              {/* Highlights Checkmarks */}
              <div className="space-y-4 mb-10">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#9efc65] text-[#0b0b0c] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#0b0b0c]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact Info Pills */}
              <div className="p-6 bg-[#f0f0f0] rounded-2xl border border-black/5 space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8b8b8b] font-medium block mb-0.5">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                    className="text-base font-semibold text-[#0b0b0c] hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8b8b8b] font-medium block mb-0.5">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-base font-semibold text-[#0b0b0c] hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8b8b8b] font-medium block mb-0.5">
                    Studio
                  </span>
                  <span className="text-base font-semibold text-[#0b0b0c]">
                    {siteConfig.contact.studio}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: The Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 2. BEFORE YOU ASK (FAQS) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-wider text-[#6a6e6e] font-semibold mb-3 bg-black/5 px-3 py-1 rounded-full">
              Before you ask.
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b0b0c]">
              Common questions about working with us
            </h2>
          </div>

          <Accordion items={contactFaqs} />
        </div>
      </section>

      {/* 3. CTA BANNER */}
      <CTABanner />
    </div>
  );
}

