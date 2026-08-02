import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { experience } from '../../data/experience';
import { education } from '../../data/education';

export function Experience() {
  return (
    <section id="experience" aria-label="Experience and education" className="border-b border-border py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="Experience" title="Where I've worked and studied" />

        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
              Work Experience
            </h3>
            <div className="flex flex-col gap-6">
              {experience.map((entry) => (
                <ExperienceCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
              Education
            </h3>
            <div className="flex flex-col gap-6">
              {education.map((entry) => (
                <EducationCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ExperienceCard({ entry }) {
  const hasDates = entry.startDate && entry.endDate;

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
          <Briefcase size={20} aria-hidden="true" />
        </span>
        {/* <Badge>{entry.type}</Badge> */}
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="text-lg font-semibold text-text-primary">{entry.role}</h4>
        <p className="text-sm font-medium text-accent">{entry.organization}</p>
        {hasDates && (
          <p className="mt-1 flex items-center gap-1.5 text-xs text-text-secondary">
            <Calendar size={14} aria-hidden="true" />
            {entry.startDate} – {entry.endDate}
          </p>
        )}
      </div>

      <ul className="flex flex-col gap-2 text-sm text-text-secondary">
        {entry.description.map((point, index) => (
          <li key={index} className="flex gap-2">
            <span aria-hidden="true">–</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {entry.techStack?.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1.5 border-t border-border pt-4">
          {entry.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      )}
    </article>
  );
}

function EducationCard({ entry }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
        <GraduationCap size={20} aria-hidden="true" />
      </span>

      <div className="flex flex-col gap-1">
        <h4 className="text-lg font-semibold text-text-primary">{entry.degree}</h4>
        <p className="text-sm font-medium text-accent">{entry.institution}</p>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-text-secondary">
          <Calendar size={14} aria-hidden="true" />
          {entry.startDate} – {entry.endDate}
        </p>
      </div>
    </article>
  );
}