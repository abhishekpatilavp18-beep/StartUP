import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$25k – $50k',
    growthGoals: ['Paid social'],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const budgetOptions = [
    '$10k – $25k',
    '$25k – $50k',
    '$50k – $100k',
    '$200k+ / month',
  ];

  const growthOptions = [
    'Paid social',
    'Full funnel',
    'Creative',
    'Analytics',
  ];

  const handleGoalToggle = (goal) => {
    if (formData.growthGoals.includes(goal)) {
      setFormData({
        ...formData,
        growthGoals: formData.growthGoals.filter((g) => g !== goal),
      });
    } else {
      setFormData({
        ...formData,
        growthGoals: [...formData.growthGoals, goal],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-black/10 rounded-[28px] p-8 sm:p-12 text-center shadow-lg animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-[#9efc65] text-[#0b0b0c] flex items-center justify-center text-2xl mx-auto mb-6">
          ✓
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#0b0b0c] mb-3">
          Audit request received!
        </h3>
        <p className="text-[#6a6e6e] text-base max-w-md mx-auto mb-8 leading-relaxed">
          Thank you, <span className="font-semibold text-black">{formData.name}</span>. A senior operator will review your brand details and follow up within one working day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              company: '',
              budget: '$25k – $50k',
              growthGoals: ['Paid social'],
              message: '',
            });
          }}
          className="px-6 py-2.5 rounded-full bg-[#0b0b0c] text-white text-sm font-semibold hover:bg-black/80 transition-colors"
        >
          Send another inquiry
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
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#0b0b0c] mb-2">
            Full name*
          </label>
          <input
            type="text"
            required
            placeholder="Jane Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#f5f5f5] border border-black/10 focus:border-[#0b0b0c] rounded-xl px-4 py-3 text-sm text-[#0b0b0c] outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#0b0b0c] mb-2">
            Email address*
          </label>
          <input
            type="email"
            required
            placeholder="jane@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#f5f5f5] border border-black/10 focus:border-[#0b0b0c] rounded-xl px-4 py-3 text-sm text-[#0b0b0c] outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#0b0b0c] mb-2">
          Company*
        </label>
        <input
          type="text"
          required
          placeholder="Acme Inc."
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full bg-[#f5f5f5] border border-black/10 focus:border-[#0b0b0c] rounded-xl px-4 py-3 text-sm text-[#0b0b0c] outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#0b0b0c] mb-2">
          Monthly ad budget
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {budgetOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setFormData({ ...formData, budget: opt })}
              className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium border text-center transition-all ${
                formData.budget === opt
                  ? 'bg-[#0b0b0c] text-white border-[#0b0b0c] shadow-sm'
                  : 'bg-[#f5f5f5] text-[#6a6e6e] border-black/5 hover:border-black/20 hover:text-black'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#0b0b0c] mb-2">
          What are you trying to grow?
        </label>
        <div className="flex flex-wrap gap-2.5">
          {growthOptions.map((opt) => {
            const isSelected = formData.growthGoals.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() => handleGoalToggle(opt)}
                className={`py-2 px-4 rounded-full text-xs font-semibold border transition-all ${
                  isSelected
                    ? 'bg-[#9efc65] text-[#0b0b0c] border-[#9efc65] shadow-sm'
                    : 'bg-[#f5f5f5] text-[#6a6e6e] border-black/5 hover:border-black/20'
                }`}
              >
                {isSelected ? '✓ ' : '+ '}
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#0b0b0c] mb-2">
          Project details (optional)
        </label>
        <textarea
          rows={3}
          placeholder="Tell us about your current channels, bottlenecks, or growth targets..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-[#f5f5f5] border border-black/10 focus:border-[#0b0b0c] rounded-xl px-4 py-3 text-sm text-[#0b0b0c] outline-none transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#101011] hover:bg-[#202022] text-white font-semibold py-4 text-sm transition-all duration-200 cursor-pointer shadow flex items-center justify-center gap-2 group active:scale-[0.99]"
      >
        <span>{loading ? 'Submitting...' : 'Send message'}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <path d="M2.5 9.5L9.5 2.5" />
          <path d="M4 2.5H9.5V8" />
        </svg>
      </button>

      <p className="text-center text-xs text-[#8b8b8b]">
        We reply within one working day. No spam, ever.
      </p>
    </form>
  );
}

