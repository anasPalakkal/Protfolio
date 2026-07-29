/**
 * @typedef {Object} ExperienceEntry
 * @property {string} id
 * @property {string} role
 * @property {string} organization
 * @property {string} startDate - e.g. "Jun 2025"
 * @property {string} endDate - e.g. "Aug 2025" or "Present"
 * @property {string} type - e.g. "Internship", "Full-time"
 * @property {string[]} description - Bullet points, real responsibilities/impact only.
 */

/** @type {ExperienceEntry[]} */
export const experience = [
  {
    id: 'internship-1',
    role: 'Software Development Intern', // TODO: confirm exact title
    organization: 'Company Name', // TODO
    startDate: 'Month Year', // TODO
    endDate: 'Month Year', // TODO
    type: 'Internship',
    // TODO: Replace with real responsibilities/contributions from the internship. Keep specific and honest.
    description: [
      'Describe a real task or responsibility you had.',
      'Describe a technology or workflow you used day-to-day.',
      'Describe something you learned or contributed to.',
    ],
  },
];
