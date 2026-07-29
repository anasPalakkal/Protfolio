import { useState } from 'react';
import { Send, Download } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { IconLink } from '../ui/IconLink';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/social';

// TODO: Replace with your real Formspree (or similar) endpoint, e.g. "https://formspree.io/f/xxxxxxx"
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const STATUS = {
  IDLE: 'idle',
  SUBMITTING: 'submitting',
  SUCCESS: 'success',
  ERROR: 'error',
};

export function Contact() {
  const [status, setStatus] = useState(STATUS.IDLE);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus(STATUS.SUBMITTING);

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus(STATUS.SUCCESS);
        form.reset();
      } else {
        setStatus(STATUS.ERROR);
      }
    } catch {
      setStatus(STATUS.ERROR);
    }
  }

  return (
    <section id="contact" aria-label="Contact" className="py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together"
            subtitle="Have a role or a project in mind? I'd like to hear about it."
          />

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <IconLink key={link.id} href={link.href} label={link.label} icon={link.icon} />
              ))}
            </div>
            <Button href={profile.resumeUrl} variant="secondary" icon={Download} className="w-fit">
              Download Resume
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-text-primary">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary outline-none focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-text-primary">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary outline-none focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-text-primary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary outline-none focus:border-accent"
            />
          </div>

          <Button type="submit" variant="primary" icon={Send} disabled={status === STATUS.SUBMITTING} className="w-fit">
            {status === STATUS.SUBMITTING ? 'Sending…' : 'Send Message'}
          </Button>

          <div role="status" aria-live="polite">
            {status === STATUS.SUCCESS && (
              <p className="text-sm text-accent">Thanks — your message has been sent.</p>
            )}
            {status === STATUS.ERROR && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </div>
        </form>
      </Container>
    </section>
  );
}
