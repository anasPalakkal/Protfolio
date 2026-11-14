/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} tagline - One-line summary shown on the card.
 * @property {string} overview - The problem being solved and what the project does, 2-4 sentences.
 * @property {string} [myContribution] - Optional. What you specifically built/decided.
 *   Omit for solo projects where the overview already makes ownership clear.
 * @property {string[]} techStack
 * @property {string[]} features - Key features, short phrases.
 * @property {string[]} challenges - Real technical challenges and how you solved them.
 * @property {{src: string, alt: string}[]} images - Paths under /public/images/projects/...
 * @property {'phone'} [deviceFrame] - Set to 'phone' for mobile-app screenshots to render
 *   inside a phone bezel instead of a flat landscape image. Omit for web/browser projects.
 * @property {string|null} githubUrl - null if private/unavailable.
 * @property {string|null} liveUrl - null if no live demo.
 * @property {boolean} featured
 */

/** @type {Project[]} */
export const projects = [
  //Project - 1 Foo D Valley
  {
    id: 'foo-d-valley',
    title: 'Foo D Valley',
    tagline: 'A social platform for food lovers to create, share, and discover recipes.',
    overview:
      'Foo D Valley is a full-stack recipe platform that goes beyond simple recipe search — users create accounts, publish their own recipes, follow other users, and engage with content through likes and comments. It\'s built more like a social media app for food content than a static recipe database. I designed and built it single-handedly, end to end — database schema, REST API, authentication, and the full React frontend.',
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
      { src: '/images/projects/Foo-D-Valley/screenshot-1.png', alt: 'Foo D Valley recipe feed' },
      { src: '/images/projects/Foo-D-Valley/screenshot-2.png', alt: 'Foo D Valley recipe detail view' },
      { src: '/images/projects/Foo-D-Valley/screenshot-3.png', alt: 'Foo D Valley user profile view' },
    ],
    githubUrl: null, // TODO: repo is currently private — add URL if you decide to share it, or make it public
    liveUrl: null, // TODO: deployment (Vercel/Render) still pending — add once live
    featured: true,
  },
  //Project - 2 ElaAI
  {
    id: 'ela-ai',
    title: 'ElaAI',
    tagline: 'An AI recipe assistant with a public, metered API.',
    overview:
      'ElaAI is a full-stack AI recipe app. Users chat with an assistant to generate and refine recipes, upload a food photo to identify a dish, and save recipes to a personal library. It also exposes a public /v1 API that other developers can use with their own keys, with per-key rate limits, daily and monthly quotas, and idempotent retries. I designed and built it alone, and deployed it across Vercel, Render, Neon and Upstash. It is a pnpm monorepo with Zod schemas shared between the web app and the API, so the contract is typed end to end.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Fastify',
      'PostgreSQL (Neon)',
      'Prisma',
      'Redis (Upstash)',
      'Zod',
      'Google Gemini',
      'Cloudinary',
      'Pexels',
      'Brevo',
      'Docker',
      'GitHub Actions',
    ],
    features: [
      'Chat-based recipe generation with conversation history and recipe regeneration',
      'Food photo analysis that identifies a dish, estimates nutrition, and can turn it into a recipe',
      'Automatic recipe photos from Pexels, cached in Redis, with uploads stored on Cloudinary',
      'Saved recipe library',
      'Email and password sign-up with OTP verification, Google Sign-In, password reset, and revocable Redis-backed sessions',
      'Public API with key management (hashed keys, up to 3 per user, rotation without downtime), per-minute, daily and monthly limits, Idempotency-Key support, and a usage dashboard',
      'Cost protection for a free AI tier: usage counters that fail closed on Redis errors and release on upstream failures',
    ],
    challenges: [],
    images: [
      { src: '/images/projects/ElaAI/screenshot-1.png', alt: 'ElaAI screenshot 1' },
      { src: '/images/projects/ElaAI/screenshot-2.png', alt: 'ElaAI screenshot 2' },
      { src: '/images/projects/ElaAI/screenshot-3.png', alt: 'ElaAI screenshot 3' },
      { src: '/images/projects/ElaAI/screenshot-4.png', alt: 'ElaAI screenshot 4' },
      { src: '/images/projects/ElaAI/screenshot-5.png', alt: 'ElaAI screenshot 5' },
    ],
    githubUrl: null, // TODO: add repo URL
    liveUrl: 'https://elaai.vercel.app',
    featured: true,
  },
  //Project - 3 Sidenote
  {
    id: 'sidenote',
    title: 'Sidenote',
    tagline: 'Quick notes, screenshots, and to-do lists, without leaving the browser.',
    overview:
      'Sidenote is a Chrome extension that puts notes, to-do lists, and screenshots right where you are browsing. Instead of switching tabs just to write something down, a simple toolbar follows you around the page so you can capture things the moment you think of them.',
    myContribution:
      'I designed and built this extension entirely on my own, from the idea through development to publishing it on the Chrome Web Store.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Manifest V3'],
    features: [
      'Quick notes to write down and come back to later',
      'To-do lists organized into lists, with tasks you can check off',
      'One-click screenshots of the page you are viewing',
      'Draw or highlight directly on any webpage',
      'Dark mode for day or night use',
      'Optional passcode lock to keep notes private',
    ],
    challenges: [],
    images: [
      { src: '/images/projects/Sidenote/screenshot-1.png', alt: 'Sidenote screenshot 1' },
      { src: '/images/projects/Sidenote/screenshot-2.png', alt: 'Sidenote screenshot 2' },
      { src: '/images/projects/Sidenote/screenshot-3.png', alt: 'Sidenote screenshot 3' },
      { src: '/images/projects/Sidenote/screenshot-4.png', alt: 'Sidenote screenshot 4' },
      { src: '/images/projects/Sidenote/screenshot-5.png', alt: 'Sidenote screenshot 5' },
    ],
    githubUrl: null,
    liveUrl: 'https://chromewebstore.google.com/detail/sidenote/ijdfbpccdojjacejebodmkjkagbhcjaa?hl=en',
    featured: true,
  },
  //Project - 4 Green Pouch App
  {
    id: 'green-pouch',
    title: 'Green Pouch',
    tagline: 'A financial goal and expense tracking application.',
    overview:
      'Green Pouch is a full-stack financial goal and expense tracking application that helps users manage money across multiple wallets, log expenses, and save toward financial goals. It uses an immutable ledger system to keep transaction records tamper-proof, paired with an analytics dashboard for visualizing spending and saving patterns.',
    myContribution:
      'I built the authentication and security backend — secure registration and login APIs with OTP-based email verification, and passwords/OTPs hashed with bcrypt. Sessions use JWT access and refresh tokens with rotation, protected routes via middleware authorization, and rate limiting to guard against brute-force attempts.',
    techStack: [
      'Flutter',
      'Dart',
      'Node.js',
      'Express.js',
      'MongoDB',
      'MongoDB Atlas',
      'Firebase FCM',
      'JWT',
      'Socket.IO',
      'Postman',
      'GitHub',
      'Render',
    ],
    features: [
      'Multiple wallet management',
      'Expense tracking',
      'Goal saving & tracking',
      'Immutable ledger system',
      'Analytics dashboard',
      'Secure JWT-based authentication',
    ],
    // TODO: add a real technical challenge here later.
    challenges: [],
    images: [
      { src: '/images/projects/GreenPouch/screenshot-1.jpeg', alt: 'Green Pouch wallet overview' },
      { src: '/images/projects/GreenPouch/screenshot-2.jpeg', alt: 'Green Pouch expense tracking view' },
      { src: '/images/projects/GreenPouch/screenshot-3.jpeg', alt: 'Green Pouch analytics dashboard' },
      { src: '/images/projects/GreenPouch/screenshot-4.jpeg', alt: 'Green Pouch wallet overview' },
      { src: '/images/projects/GreenPouch/screenshot-5.jpeg', alt: 'Green Pouch expense tracking view' },
      { src: '/images/projects/GreenPouch/screenshot-6.jpeg', alt: 'Green Pouch analytics dashboard' },
    ],
    deviceFrame: 'phone',
    githubUrl: null, // TODO: add if you want to share the repo
    liveUrl: null, // TODO: add once deployed on Render
    featured: true,
  },
  //Project - 5 Green Pouch Admin Panel
  {
    id: 'green-pouch-admin',
    title: 'Green Pouch — Admin Panel',
    tagline: 'The admin dashboard for Green Pouch — user analytics, activity monitoring, and platform management.',
    overview:
      'A dedicated admin dashboard built for the Green Pouch application, giving administrators visibility into user activity, account status, and platform-wide analytics. It centralizes user management, activity monitoring, and feedback review in a single interface.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'Context API'],
    features: [
      'Super admin role with permission to create additional admin accounts',
      'Ban or suspend user accounts',
      'User overview with activity and status tracking',
      'Platform analytics — user counts and activity trends',
      'Feedback entry management',
    ],
    // TODO: add a real technical challenge here later.
    challenges: [],
    images: [
      { src: '/images/projects/AdminPanel/screenshot-1.png', alt: 'Green Pouch admin panel user overview' },
      { src: '/images/projects/AdminPanel/screenshot-2.png', alt: 'Green Pouch admin panel analytics view' },
      { src: '/images/projects/AdminPanel/screenshot-3.png', alt: 'Green Pouch admin panel feedback entries' },
    ],
    githubUrl: null, // TODO: add if you want to share the repo
    liveUrl: null, // TODO: add once deployed
    featured: false,
  },
];