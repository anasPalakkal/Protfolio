import { Container } from '../ui/Container';
import { IconLink } from '../ui/IconLink';
import { socialLinks } from '../../data/social';
import { profile } from '../../data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-sm text-text-secondary">
          &copy; {year} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <IconLink key={link.id} href={link.href} label={link.label} icon={link.icon} />
          ))}
        </div>
      </Container>
    </footer>
  );
}
