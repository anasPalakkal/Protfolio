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
    id: 'expense-tracker',
    title: 'Expense Tracker — Zil Money',
    tagline: 'A MERN stack expense tracking app — I built the auth/security layer and the full admin panel.',
    overview:
      // TODO: add 1-2 more sentences if you can share who the app was for / what problem it solved for users.
      'An expense-tracking application built during my internship at Zil Money, built on the MERN stack. Users log and manage their expenses through the app, with an internal admin panel for managing users and data.',
    myContribution:
      'I built the user authentication and security layer, including the login flow and JWT-based session handling. I also designed and built the complete admin panel end to end — both the backend API and the frontend interface used to manage users and application data.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    // TODO: list 3-5 concrete features of the auth system / admin panel specifically —
    // e.g. "Role-based access control for admin vs. regular users", "Password reset flow", etc.
    features: [],
    // TODO: describe a real challenge — e.g. something tricky about securing the auth flow,
    // or a decision you made building the admin panel.
    challenges: [],
    images: [
      { src: '/images/projects/expense-tracker-01.jpg', alt: 'Expense Tracker admin panel view' }, // TODO
    ],
    githubUrl: null, // internal company project — set a URL only if you have permission to share it
    liveUrl: null, // TODO if there's a demo you can share
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