import { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ProjectCard } from '../project/ProjectCard';
import { ProjectOverlay } from '../project/ProjectOverlay';
import { projects } from '../../data/projects';

const MOBILE_CAP = 4;

export function ProjectsGrid() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? null;
  const hasOverflow = projects.length > MOBILE_CAP;

  return (
    <section id="projects" aria-label="Projects" className="border-b border-border py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of full-stack projects. Select a card to see the full case study — problem, tech decisions, and links."
        />

        <div
          className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${
            expanded ? '' : '[&>*:nth-child(n+5)]:hidden lg:[&>*:nth-child(n+5)]:block lg:[&>*:nth-child(n+7)]:hidden'
          }`}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelectedProjectId} />
          ))}
        </div>

        {hasOverflow && (
          <div className="flex justify-center">
            <Button variant="secondary" onClick={() => setExpanded((current) => !current)}>
              {expanded ? 'Show less' : 'See all projects'}
            </Button>
          </div>
        )}
      </Container>

      <ProjectOverlay project={selectedProject} onClose={() => setSelectedProjectId(null)} />
    </section>
  );
}