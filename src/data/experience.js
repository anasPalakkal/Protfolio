/**
 * @typedef {Object} ExperienceEntry
 * @property {string} id
 * @property {string} role
 * @property {string} organization
 * @property {string} startDate - e.g. "Jun 2025"
 * @property {string} endDate - e.g. "Aug 2025" or "Present"
 * @property {string} type - e.g. "Internship", "Full-time"
 * @property {string[]} description - Bullet points, real responsibilities/impact only.
 * @property {string[]} [techStack] - Optional. Shown as badges on the card if present.
 */

/** @type {ExperienceEntry[]} */
export const experience = [
  {
    id: 'internship-1',
    role: 'MERN Stack Developer Intern',
    organization: 'Zil Money',
    startDate: 'Jan 2026', // TODO: add start month/year
    endDate: 'Apr 2026', // TODO: add end month/year
    type: '3-Month Internship',
    description: [
      'Built the user authentication and security layer for a MERN stack expense-tracking application.',
      'Designed and built the full admin panel end to end — both frontend and backend.',
      // TODO: add one more specific detail if you have one — e.g. a library/approach you used
      // for auth (JWT, bcrypt, role-based access), or a specific admin-panel feature.
    ],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
];