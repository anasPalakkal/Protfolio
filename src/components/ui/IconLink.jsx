import { Github, Linkedin, Mail } from 'lucide-react';

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function IconLink({ href, label, icon, className = '' }) {
  const Icon = ICONS[icon];
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary transition-colors duration-200 hover:border-accent hover:text-accent ${className}`}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <Icon size={18} aria-hidden="true" />
    </a>
  );
}
