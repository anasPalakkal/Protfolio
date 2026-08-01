import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillPill } from '../ui/SkillPill';
import { skillGroups } from '../../data/skills';

export function Skills() {
  return (
    <section id="skills" aria-label="Technical skills" className="border-b border-border py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Skills" title="Technologies I work with" />

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 sm:p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {group.items.map((skill) => (
                  <SkillPill key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}