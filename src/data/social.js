// src/data/social.js
/**
 * @typedef {Object} SocialLink
 * @property {string} id
 * @property {string} name - Short display name, e.g. "GitHub"
 * @property {string} label - Accessible label, e.g. "GitHub profile"
 * @property {string} href
 * @property {'github'|'linkedin'|'mail'} icon - lucide-react icon key used in IconLink
 */

/** @type {SocialLink[]} */
export const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    label: 'GitHub profile',
    href: 'https://github.com/anasPalakkal',
    icon: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    label: 'LinkedIn profile',
    href: 'https://www.linkedin.com/in/anaspalakkal/',
    icon: 'linkedin',
  },
  {
    id: 'email',
    name: 'Email',
    label: 'Send an email',
    href: 'mailto:anaspalakkalwork@gmail.com',
    icon: 'mail',
  },
];