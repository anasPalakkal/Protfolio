import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { experience } from '../../data/experience';
import { education } from '../../data/education';

export function Experience() {
  return (
    <section id="experience" aria-label="Experience and education" className="border-b border-border py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="Experience" title="Where I've worked and studied" />

        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
              Work Experience
            </h3>
            <ol className="flex flex-col gap-8 border-l border-border pl-6">
              {experience.map((entry) => (
                <li key={entry.id} className="relative">
                  <span
                    className="absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">
                    {entry.type}
                    {entry.startDate && entry.endDate && ` · ${entry.startDate} – ${entry.endDate}`}
                  </p>
                  <h4 className="mt-1 text-lg font-semibold text-text-primary">{entry.role}</h4>
                  <p className="text-sm font-medium text-text-secondary">{entry.organization}</p>
                  <ul className="mt-3 flex flex-col gap-1.5 text-sm text-text-secondary">
                    {entry.description.map((point, index) => (
                      <li key={index} className="flex gap-2">
                        <span aria-hidden="true">–</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
              Education
            </h3>
            <ol className="flex flex-col gap-8 border-l border-border pl-6">
              {education.map((entry) => (
                <li key={entry.id} className="relative">
                  <span
                    className="absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">
                    {entry.startDate} – {entry.endDate}
                  </p>
                  <h4 className="mt-1 text-lg font-semibold text-text-primary">{entry.degree}</h4>
                  <p className="text-sm font-medium text-text-secondary">{entry.institution}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}