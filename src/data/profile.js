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
  name: 'Mohammed Anas',
  title: 'Full Stack Developer',
  tagline: "Building today's ideas for tomorrow's world.",
  location: 'Malappuram, Kerala, India',
  avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFuZcN4PkuIdPC_fIjBoRDAspRvzN5kxc_ywIscQ_2qvNG4opqY-MEKJJI&s=10', // TODO: add your photo to /public/images/avatar.jpg
  resumeUrl: '/resume.pdf', // TODO: add your resume to /public/resume.pdf
};