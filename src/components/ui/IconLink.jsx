import { Github, Linkedin, Mail } from 'lucide-react';

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function IconLink({
  href,
  label,
  icon,
  name,
  className = '',
}) {
  const Icon = ICONS[icon];

  if (!Icon) {
    console.warn(`IconLink: unsupported icon "${icon}"`);
    return null;
  }

  const isExternal = href.startsWith('http');
  const showLabel = Boolean(name);

  return (
    <a
      href={href}
      aria-label={showLabel ? undefined : label}
      title={label}
      className={`inline-flex items-center gap-2 rounded-full border border-border text-text-primary transition-colors duration-200 hover:border-accent hover:text-accent ${
        showLabel
          ? 'px-4 py-2 text-sm font-medium'
          : 'h-10 w-10 justify-center'
      } ${className}`}
      {...(isExternal
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
          }
        : {})}
    >
      <Icon size={18} aria-hidden="true" />
      {showLabel && <span>{name}</span>}
    </a>
  );
}