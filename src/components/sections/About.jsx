import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { about } from '../../data/about';

export function About() {
  return (
    <section id="about" aria-label="About me" className="border-b border-border py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="About" title="A little about me" />

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-text-secondary md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}