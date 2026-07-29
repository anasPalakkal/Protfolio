import { Download, ArrowDown } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { IconLink } from '../ui/IconLink';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/social';

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[calc(100vh-var(--nav-height))] items-center border-b border-border"
    >
      <Container className="grid items-center gap-12 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
        <div className="flex animate-fade-in flex-col items-start gap-6">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {profile.name}
          </h1>

          <p className="font-display text-xl italic text-accent md:text-2xl">
            {profile.title}
          </p>

          <p className="max-w-xl text-lg text-text-secondary">{profile.tagline}</p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href={profile.resumeUrl} variant="secondary" icon={Download}>
              Download Resume
            </Button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((link) => (
              <IconLink key={link.id} href={link.href} label={link.label} icon={link.icon} />
            ))}
          </div>
        </div>

        <div className="order-first flex justify-center md:order-last">
          <img
            src={profile.avatarSrc}
            alt={`Portrait of ${profile.name}`}
            width="320"
            height="320"
            className="aspect-square w-56 rounded-2xl border border-border bg-surface object-cover md:w-80"
          />
        </div>
      </Container>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-text-secondary hover:text-accent md:block"
      >
        <ArrowDown size={20} aria-hidden="true" />
      </a>
    </section>
  );
}