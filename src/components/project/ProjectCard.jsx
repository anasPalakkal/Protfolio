import { ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

export function ProjectCard({ project, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project.id)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface text-left transition-shadow duration-200 hover:shadow-lg"
      aria-haspopup="dialog"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-surface-alt">
        <img
          src={project.images[0]?.src}
          alt={project.images[0]?.alt ?? ''}
          loading="lazy"
          width="640"
          height="400"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-text-primary">{project.title}</h3>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-text-secondary transition-colors group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
        <p className="text-sm text-text-secondary">{project.tagline}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </button>
  );
}
