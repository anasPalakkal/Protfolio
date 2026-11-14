/**
 * @typedef {Object} SkillGroup
 * @property {string} category
 * @property {string[]} items
 */

/** @type {SkillGroup[]} */
export const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Fastify', 'REST APIs', 'JWT'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'Prisma', 'MongoDB'],
  },
  {
    category: 'Tools & Deployment',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Vercel', 'Render', 'Cloudflare AI Gateway'],
  },
];