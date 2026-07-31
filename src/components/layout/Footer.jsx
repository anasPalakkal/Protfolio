// src/components/layout/Footer.jsx
import { Container } from '../ui/Container';
import { IconLink } from '../ui/IconLink';
import { socialLinks } from '../../data/social';
import { profile } from '../../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-text-primary">{profile.name}</p>
          <p className="text-sm text-text-secondary">{profile.title}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <IconLink key={link.id} href={link.href} label={link.label} icon={link.icon} name={link.name} />
          ))}
        </div>
      </Container>
    </footer>
  );
}