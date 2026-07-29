/**
 * @typedef {Object} SkillGroup
 * @property {string} category
 * @property {string[]} items
 */

/** @type {SkillGroup[]} */
export const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'Prisma', 'MongoDB'],
  },
  {
    category: 'Tools & Deployment',
    items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render'],
  },
];