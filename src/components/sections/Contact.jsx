// src/components/sections/Contact.jsx
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

// TODO: replace with your real Web3Forms access key (see setup steps below)
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY';

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
    data.append('access_key', WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();

      if (result.success) {
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
    <section id="contact" aria-label="Contact" className="border-b border-border py-20 md:py-28">
      <Container>
        <div className="rounded-3xl border border-border bg-surface p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-14">
            <div className="flex flex-col gap-4">
              <SectionHeading
                eyebrow="Contact"
                title="Let's work together"
                subtitle="Have a role or a project in mind? I'd like to hear about it."
              />
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
                  className="rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text-primary outline-none focus:border-accent"
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
                  className="rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text-primary outline-none focus:border-accent"
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
                  className="resize-none rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text-primary outline-none focus:border-accent"
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
          </div>
        </div>
      </Container>
    </section>
  );
}