/**
 * @typedef {Object} SkillGroup
 * @property {string} category
 * @property {string[]} items
 */

/** @type {SkillGroup[]} */
export const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript'],
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
    category: 'Tools',
    items: ['Git', 'GitHub'],
  },
];
