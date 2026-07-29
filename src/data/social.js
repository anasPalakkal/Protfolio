/**
 * @typedef {Object} SocialLink
 * @property {string} id
 * @property {string} label - Accessible label, e.g. "GitHub profile"
 * @property {string} href
 * @property {'github'|'linkedin'|'mail'} icon - lucide-react icon key used in IconLink
 */

/** @type {SocialLink[]} */
export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub profile',
    href: 'https://github.com/anasPalakkal',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn profile',
    href: 'https://www.linkedin.com/in/anaspalakkal/',
    icon: 'linkedin',
  },
  {
    id: 'email',
    label: 'Send an email',
    href: 'mailto:anaspalakkalwork@gmail.com',
    icon: 'mail',
  },
];