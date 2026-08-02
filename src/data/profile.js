/**
 * @typedef {Object} Profile
 * @property {string} name
 * @property {string} title
 * @property {string} tagline - Short hero subline, one sentence.
 * @property {string} location
 * @property {string} avatarSrc - Path under /public, e.g. "/images/avatar.jpg"
 * @property {string} resumeUrl - Path to resume PDF under /public, e.g. "/resume.pdf"
 */

/** @type {Profile} */
export const profile = {
  name: 'Anas Palakkal',
  title: 'Full Stack Developer',
  tagline: "Building today's ideas for tomorrow's world.",
  location: 'Malappuram, Kerala, India',
  avatarSrc: '/images/Anas.jpeg', // TODO: add your photo to /public/images/avatar.jpg
  resumeUrl: '/resume.pdf', // TODO: add your resume to /public/resume.pdf
};