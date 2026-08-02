import { useRef } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ImageCarousel } from './ImageCarousel';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useFocusTrap } from '../../hooks/useFocusTrap';

export function ProjectOverlay({ project, onClose }) {
  const containerRef = useRef(null);
  const isOpen = Boolean(project);

  useLockBodyScroll(isOpen);
  useFocusTrap(containerRef, isOpen, onClose);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-text-primary/40 p-0 backdrop-blur-sm animate-overlay-in md:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-overlay-title"
        className="flex h-full w-full max-w-4xl flex-col overflow-hidden bg-bg animate-overlay-content-in md:h-auto md:max-h-[85vh] md:rounded-3xl md:border md:border-border"
      >
        <div className="flex shrink-0 justify-end border-b border-border bg-bg/95 p-4 backdrop-blur-sm">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary hover:border-accent hover:text-accent"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="flex flex-col gap-8 p-6 pb-10 md:p-10">
            <header className="flex flex-col gap-3">
              <h2 id="project-overlay-title" className="text-3xl font-semibold tracking-tight md:text-4xl">
                {project.title}
              </h2>
              <p className="text-lg text-text-secondary">{project.tagline}</p>
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.liveUrl && (
                    <Button href={project.liveUrl} variant="primary" icon={ExternalLink}>
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button href={project.githubUrl} variant="secondary" icon={Github}>
                      View Code
                    </Button>
                  )}
                </div>
              )}
            </header>

            <ImageCarousel images={project.images} deviceFrame={project.deviceFrame} />

            <Section title="Overview">
              <p className="text-text-secondary">{project.overview}</p>
            </Section>

            {project.myContribution && (
              <Section title="My Contribution">
                <p className="text-text-secondary">{project.myContribution}</p>
              </Section>
            )}

            <Section title="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Section>

            {project.features.length > 0 && (
              <Section title="Key Features">
                <ul className="flex flex-col gap-2 text-text-secondary">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {project.challenges.length > 0 && (
              <Section title="Challenges & Solutions">
                <ul className="flex flex-col gap-2 text-text-secondary">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex gap-2">
                      <span aria-hidden="true">–</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
        {title}
      </h3>
      {children}
    </section>
  );
}