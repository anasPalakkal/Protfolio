/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} tagline - One-line summary shown on the card.
 * @property {string} overview - The problem being solved and what the project does, 2-4 sentences.
 * @property {string} myContribution - What you specifically built/decided, especially if it was a team project.
 * @property {string[]} techStack
 * @property {string[]} features - Key features, short phrases.
 * @property {string[]} challenges - Real technical challenges and how you solved them.
 * @property {{src: string, alt: string}[]} images - Paths under /public/images/projects/...
 * @property {string|null} githubUrl - null if private/unavailable.
 * @property {string|null} liveUrl - null if no live demo.
 * @property {boolean} featured
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 'project-one',
    title: 'Project One', // TODO
    tagline: 'One-sentence summary of what this project does.', // TODO
    overview:
      'Describe the real problem this project solves and who it is for. 2-4 sentences, no filler.', // TODO
    myContribution:
      'Describe what you specifically built — e.g. the API, the auth flow, the database schema, the UI.', // TODO
    techStack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma'], // TODO: adjust per project
    features: [
      'Real feature one',
      'Real feature two',
      'Real feature three',
    ], // TODO
    challenges: [
      'A real technical challenge you faced and how you approached it.',
    ], // TODO
    images: [
      { src: '/images/projects/project-one-01.jpg', alt: 'Project One dashboard view' }, // TODO
    ],
    githubUrl: 'https://github.com/your-username/project-one', // TODO or null
    liveUrl: 'https://project-one-demo.example.com', // TODO or null
    featured: true,
  },
  {
    id: 'project-two',
    title: 'Project Two',
    tagline: 'One-sentence summary of what this project does.',
    overview: 'Describe the real problem this project solves and who it is for.',
    myContribution: 'Describe what you specifically built.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    features: ['Real feature one', 'Real feature two'],
    challenges: ['A real technical challenge you faced.'],
    images: [
      { src: '/images/projects/project-two-01.jpg', alt: 'Project Two main view' },
    ],
    githubUrl: 'https://github.com/your-username/project-two',
    liveUrl: null,
    featured: true,
  },
];
