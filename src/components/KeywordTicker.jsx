import React from 'react';

const keywords = [
  'Web Design',
  'Digital Menus',
  'Google Maps',
  'Local SEO',
  'Reservations',
  'Mobile First',
  'Web Design',
  'Digital Menus',
  'Google Maps',
  'Local SEO',
  'Reservations',
  'Mobile First',
];

function LeafIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#0b0b0c] opacity-50 flex-shrink-0">
      <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
    </svg>
  );
}

export default function KeywordTicker() {
  return (
    <section className="bg-[#ffbcfc] py-4 sm:py-5 overflow-hidden">
      <div className="animate-keyword-ticker flex items-center whitespace-nowrap">
        {[...keywords, ...keywords].map((keyword, idx) => (
          <React.Fragment key={idx}>
            <span className="text-[#0b0b0c] text-sm sm:text-base font-bold uppercase tracking-wider mx-4 sm:mx-6">
              {keyword}
            </span>
            <LeafIcon />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
