import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

const PROJECT_TYPES = ['Website', 'Web app', 'Tool', 'Portfolio', 'Redesign'];

const EMPTY_FORM = { name: '', email: '', projectTypes: ['Website'], message: '' };

const inputClass =
  'w-full bg-[#f5f5f5] border border-black/10 focus:border-[#0b0b0c] rounded-xl px-4 py-3 text-sm text-[#0b0b0c] outline-none transition-colors';

/** Builds a mailto: link so the enquiry lands in our inbox (the site has no backend). */
function buildMailto({ name, email, projectTypes, message }) {
  const subject = `New project enquiry from ${name}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Looking for: ${projectTypes.join(', ') || 'Not specified'}`,
    '',
    message,
  ].join('\n');
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const toggleType = (type) => {
    const selected = formData.projectTypes.includes(type);
    setFormData({
      ...formData,
      projectTypes: selected
        ? formData.projectTypes.filter((t) => t !== type)
        : [...formData.projectTypes, type],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = buildMailto(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-black/10 rounded-[28px] p-8 sm:p-12 text-center shadow-lg">
        <div className="w-16 h-16 rounded-full bg-[#9efc65] text-[#0b0b0c] flex items-center justify-center text-2xl mx-auto mb-6" aria-hidden="true">
          ✓
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#0b0b0c] mb-3">
          Almost done
        </h3>
        <p className="text-[#6a6e6e] text-base max-w-md mx-auto mb-8 leading-relaxed">
          Your email app should have opened with your message ready. Hit send there and we'll get back to you. If nothing opened, email us at{' '}
          <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-[#0b0b0c] underline">
            {siteConfig.contact.email}
          </a>
          .
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData(EMPTY_FORM);
          }}
          className="px-6 py-2.5 rounded-full bg-[#0b0b0c] text-white text-sm font-semibold hover:bg-black/80 transition-colors"
        >
          Start over
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-black/10 rounded-[28px] p-6 sm:p-10 lg:p-12 shadow-sm space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cf-name" className="block text-xs uppercase tracking-wider font-semibold text-[#0b0b0c] mb-2">
            Your name*
          </label>
          <input
            id="cf-name"
            type="text"
            required
            maxLength={100}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="cf-email" className="block text-xs uppercase tracking-wider font-semibold text-[#0b0b0c] mb-2">
            Email address*
          </label>
          <input
            id="cf-email"
            type="email"
            required
            maxLength={200}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <fieldset>
        <legend className="block text-xs uppercase tracking-wider font-semibold text-[#0b0b0c] mb-2">
          What do you need?
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {PROJECT_TYPES.map((type) => {
            const isSelected = formData.projectTypes.includes(type);
            return (
              <button
                key={type}
                type="button"
                aria-pressed={isSelected}
                onClick={() => toggleType(type)}
                className={`py-2 px-4 rounded-full text-xs font-semibold border transition-all ${
                  isSelected
                    ? 'bg-[#9efc65] text-[#0b0b0c] border-[#9efc65] shadow-sm'
                    : 'bg-[#f5f5f5] text-[#6a6e6e] border-black/5 hover:border-black/20'
                }`}
              >
                {isSelected ? '✓ ' : '+ '}
                {type}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="cf-message" className="block text-xs uppercase tracking-wider font-semibold text-[#0b0b0c] mb-2">
          Tell us about the project*
        </label>
        <textarea
          id="cf-message"
          rows={4}
          required
          maxLength={2000}
          placeholder="What do you want built? Any sites you like, and your rough timeline."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-[#101011] hover:bg-[#202022] text-white font-semibold py-4 text-sm transition-all duration-200 cursor-pointer shadow flex items-center justify-center gap-2 group active:scale-[0.99]"
      >
        <span>Send message</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
          <path d="M2.5 9.5L9.5 2.5" />
          <path d="M4 2.5H9.5V8" />
        </svg>
      </button>

      <p className="text-center text-xs text-[#8b8b8b]">
        This opens your email app with the message filled in. We usually reply within a day.
      </p>
    </form>
  );
}
