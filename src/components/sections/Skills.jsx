import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { skillGroups } from '../../data/skills';

export function Skills() {
  return (
    <section id="skills" aria-label="Technical skills" className="border-b border-border py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Skills" title="Technologies I work with" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.category} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
