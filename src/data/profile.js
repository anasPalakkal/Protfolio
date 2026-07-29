/**
 * @typedef {Object} Profile
 * @property {string} name
 * @property {string} title
 * @property {string} tagline - Short hero subline, one sentence.
 * @property {string} location
 * @property {string} avatarSrc - Path under /public, e.g. "/images/avatar.jpg"
 * @property {string} resumeUrl - Path to resume PDF under /public, e.g. "/resume.pdf"
 * @property {string} availability - e.g. "Open to full-time roles"
 */

/** @type {Profile} */
export const profile = {
  name: 'Mohammed Anas',
  title: 'Full Stack Developer',
  // TODO: Replace with your real one-line pitch. Keep it concrete, not "passionate about coding".
  tagline: 'I build fast, reliable web applications from database to browser.',
  // TODO
  location: 'Your City, Country',
  avatarSrc: '/images/avatar.jpg', // TODO: add your photo to /public/images/avatar.jpg
  resumeUrl: '/resume.pdf', // TODO: add your resume to /public/resume.pdf
  availability: 'Open to full-time opportunities',
};
