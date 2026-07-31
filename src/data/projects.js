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
      { src: 'https://miro.medium.com/v2/resize:fit:1400/1*X3-g3XJELxYX_D84C7aAPw.webp', alt: 'Expense Tracker admin panel view' }, // TODO: replace with real screenshot(s)
    ],
    githubUrl: null, // internal company project — set a URL only if you have permission to share it
    liveUrl: null, // TODO if there's a demo you can share
    featured: true,
  },
  {
    id: 'foo-d-valley',
    title: 'Foo D Valley',
    tagline: 'A social platform for food lovers to create, share, and discover recipes.',
    overview:
      'Foo D Valley is a full-stack recipe platform that goes beyond simple recipe search — users create accounts, publish their own recipes, follow other users, and engage with content through likes and comments. It\'s built more like a social media app for food content than a static recipe database.',
    myContribution:
      'I designed and built the entire application single-handedly, end to end — database schema, REST API, authentication, and the full React frontend, including the social features (follow system, likes, comments) and image handling.',
    techStack: [
      'React',
      'CSS Modules',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'JWT',
      'bcrypt',
      'Cloudinary',
      'Redis (Upstash)',
    ],
    features: [
      'Authentication with HTTP-only cookies (JWT + bcrypt)',
      'Create and publish original recipes with image uploads via Cloudinary',
      'Follow / unfollow other users',
      'Filter recipes by cuisine',
      'Like and comment on recipes',
    ],
    // TODO: add a real technical challenge here later (e.g. something about the follow/feed
    // logic, Redis rate-limiting decisions, or the auth cookie setup).
    challenges: [],
    images: [
      { src: '/images/projects/foo-d-valley/one.png', alt: 'Foo D Valley recipe feed' },
      { src: '/images/projects/foo-d-valley/two.png', alt: 'Foo D Valley recipe detail view' },
      { src: '/images/projects/foo-d-valley/three.png', alt: 'Foo D Valley user profile view' },
    ],
    githubUrl: null, // TODO: repo is currently private — add URL if you decide to share it, or make it public
    liveUrl: null, // TODO: deployment (Vercel/Render) still pending — add once live
    featured: true,
  },
];