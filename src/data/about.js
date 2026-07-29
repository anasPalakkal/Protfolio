/**
 * @typedef {Object} AboutContent
 * @property {string} heading
 * @property {string[]} paragraphs
 * @property {{label: string, value: string}[]} facts - Quick-scan facts (e.g. location, focus, availability)
 */

/** @type {AboutContent} */
export const about = {
  heading: 'About',
  // TODO: Replace with real bio — 2-3 short paragraphs. Speak to what you build and how you work,
  // not a list of adjectives. Mention the internship and what it taught you if relevant.
  paragraphs: [
    'Write 2–3 sentences here about your background and what got you into full-stack development.',
    'Write 2–3 sentences here about how you approach building software — e.g. what you care about when writing code, the kind of problems you enjoy solving.',
  ],
  facts: [
    { label: 'Based in', value: 'Your City, Country' }, // TODO
    { label: 'Focus', value: 'Full Stack Web Development' },
    { label: 'Currently', value: 'Open to full-time roles' },
  ],
};
