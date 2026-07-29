import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { about } from '../../data/about';

export function About() {
  return (
    <section id="about" aria-label="About me" className="border-b border-border py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow="About" title="A little about me" />
          <div className="flex flex-col gap-4 text-base leading-relaxed text-text-secondary md:text-lg">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <dl className="flex flex-col gap-4 self-start rounded-2xl border border-border bg-surface p-6">
          {about.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1 border-b border-border pb-4 last:border-b-0 last:pb-0">
              <dt className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                {fact.label}
              </dt>
              <dd className="text-sm font-medium text-text-primary">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
