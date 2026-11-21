import { caseStudies } from './caseStudies';

// Only facts we can back up. The project count is derived from the portfolio itself.
export const stats = {
  companyStats: [
    {
      value: String(caseStudies.length),
      label: "Live projects you can open right now",
    },
    {
      value: "1:1",
      label: "You talk directly to the people building it",
    },
    {
      value: "100%",
      label: "Code and domain owned by you at handover",
    },
  ],
};
