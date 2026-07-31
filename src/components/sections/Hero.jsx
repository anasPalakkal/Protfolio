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
      className="relative flex min-h-[calc(100vh-var(--nav-height))] items-center overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle,var(--color-border)_1px,transparent_1px)] bg-[size:28px_28px] opacity-60"
      />

      <Container className="relative">
        <div className="animate-fade-in rounded-3xl border border-border bg-surface p-8 shadow-sm md:p-12">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:gap-10 md:text-left">
            <img
              src={profile.avatarSrc}
              alt={`Portrait of ${profile.name}`}
              width="224"
              height="224"
              className="aspect-square w-40 shrink-0 rounded-2xl border border-border bg-surface-alt object-cover md:w-56"
            />

            <div className="flex flex-col items-center gap-4 md:items-start">
              <span className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Hello, I&apos;m
              </span>

              <div className="flex flex-col gap-1">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  {profile.name}
                </h1>
                <p className="font-display text-xl italic text-accent md:text-2xl">
                  {profile.title}
                </p>
              </div>

              <p className="max-w-xl text-base text-text-secondary md:text-lg">
                {profile.tagline}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2 md:justify-start">
                <Button href="#projects" variant="primary">
                  View Projects
                </Button>
                <Button href={profile.resumeUrl} variant="secondary" icon={Download}>
                  Download Resume
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-1 md:justify-start">
                {socialLinks.map((link) => (
                  <IconLink
                    key={link.id}
                    href={link.href}
                    label={link.label}
                    icon={link.icon}
                    name={link.name}
                  />
                ))}
              </div>
            </div>
          </div>
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