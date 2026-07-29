import { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../project/ProjectCard';
import { ProjectOverlay } from '../project/ProjectOverlay';
import { projects } from '../../data/projects';

export function ProjectsGrid() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? null;

  return (
    <section id="projects" aria-label="Projects" className="border-b border-border py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of full-stack projects. Select a card to see the full case study — problem, tech decisions, and links."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelectedProjectId} />
          ))}
        </div>
      </Container>

      <ProjectOverlay project={selectedProject} onClose={() => setSelectedProjectId(null)} />
    </section>
  );
}
