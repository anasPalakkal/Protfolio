import { useState } from 'react';
import { Send } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

if (!WEB3FORMS_ACCESS_KEY) {
  console.error(
    'VITE_WEB3FORMS_ACCESS_KEY is missing. Add it to .env (see .env.example) and restart the dev server.'
  );
}

const STATUS = {
  IDLE: 'idle',
  SUBMITTING: 'submitting',
  SUCCESS: 'success',
  ERROR: 'error',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data) {
  const errors = {};

  const name = data.get('name').trim();
  if (!name) errors.name = 'Please enter your name.';

  const email = data.get('email').trim();
  if (!email) errors.email = 'Please enter your email.';
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.';

  const message = data.get('message').trim();
  if (!message) errors.message = 'Please enter a message.';
  else if (message.length < 10) errors.message = 'Message should be at least 10 characters.';

  return errors;
}

export function Contact() {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errors, setErrors] = useState({});

  function clearFieldError(field) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      form.querySelector(`[name="${Object.keys(validationErrors)[0]}"]`)?.focus();
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus(STATUS.ERROR);
      return;
    }

    // Honeypot: real users never fill this hidden field. If it has a value, silently
    // "succeed" without sending anything, so bots can't tell they were blocked.
    if (data.get('botcheck')) {
      setStatus(STATUS.SUCCESS);
      form.reset();
      return;
    }

    setStatus(STATUS.SUBMITTING);
    setErrors({});
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('subject', `New portfolio contact from ${data.get('name')}`);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
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
              <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-text-primary">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  onChange={() => clearFieldError('name')}
                  className={`rounded-lg border bg-bg px-4 py-2.5 text-sm text-text-primary outline-none focus:border-accent ${
                    errors.name ? 'border-red-500' : 'border-border'
                  }`}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-text-primary">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  onChange={() => clearFieldError('email')}
                  className={`rounded-lg border bg-bg px-4 py-2.5 text-sm text-text-primary outline-none focus:border-accent ${
                    errors.email ? 'border-red-500' : 'border-border'
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  onChange={() => clearFieldError('message')}
                  className={`resize-none rounded-lg border bg-bg px-4 py-2.5 text-sm text-text-primary outline-none focus:border-accent ${
                    errors.message ? 'border-red-500' : 'border-border'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
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