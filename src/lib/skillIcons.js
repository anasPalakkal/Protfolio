import {
    SiReact, SiJavascript, SiTailwindcss,
    SiNodedotjs, SiExpress,
    SiPostgresql, SiPrisma, SiMongodb,
    SiGit, SiGithub, SiPostman, SiVercel, SiRender,
  } from 'react-icons/si';
  import { KeyRound, Plug } from 'lucide-react';
  
  /** Keyed by the exact skill name used in src/data/skills.js. */
  export const skillIcons = {
    'React': SiReact,
    'JavaScript': SiJavascript,
    'Tailwind CSS': SiTailwindcss,
  
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    'REST APIs': Plug,
    'JWT': KeyRound,
  
    'PostgreSQL': SiPostgresql,
    'Prisma': SiPrisma,
    'MongoDB': SiMongodb,
  
    'Git': SiGit,
    'GitHub': SiGithub,
    'Postman': SiPostman,
    'Vercel': SiVercel,
    'Render': SiRender,
  };