import {
  SiReact, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiFastify,
  SiPostgresql, SiPrisma, SiMongodb,
  SiGit, SiGithub, SiDocker, SiPostman, SiVercel, SiRender, SiCloudflare,
} from 'react-icons/si';
import { KeyRound, Plug } from 'lucide-react';

/** Keyed by the exact skill name used in src/data/skills.js. */
export const skillIcons = {
  'React': SiReact,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,

  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'Fastify': SiFastify,
  'REST APIs': Plug,
  'JWT': KeyRound,

  'PostgreSQL': SiPostgresql,
  'Prisma': SiPrisma,
  'MongoDB': SiMongodb,

  'Git': SiGit,
  'GitHub': SiGithub,
  'Docker': SiDocker,
  'Postman': SiPostman,
  'Vercel': SiVercel,
  'Render': SiRender,
  'Cloudflare AI Gateway': SiCloudflare,
};