/**
 * @typedef {Object} AboutContent
 * @property {string} heading
 * @property {string[]} paragraphs
 * @property {{label: string, value: string}[]} facts - Quick-scan facts (e.g. location, focus, availability)
 */

/** @type {AboutContent} */
export const about = {
  heading: 'About',
  // DRAFT — edit this to sound like you, especially the second paragraph.
  paragraphs: [
    "I'm a Mobile Application Development student at Amal College of Advanced Studies (Calicut University), and along the way I found myself drawn more to building the systems behind an app than the interface on top of it — which pulled me toward full-stack web development. During a 3-month MERN stack internship at Zil Money, I worked on real production code: building the authentication and security layer for an expense-tracking application, and building its admin panel end to end, frontend and backend.",
    "I like understanding a feature completely before I build it — from the database schema up to the UI — rather than gluing pieces together until something works. Security and reliability on the backend matter a lot to me, and I enjoy the kind of problem where getting the data layer right makes everything built on top of it simpler.",
  ],
  facts: [
    { label: 'Based in', value: 'Malappuram, Kerala, India' },
    { label: 'Focus', value: 'Full Stack Web Development (MERN)' },
    { label: 'Studying', value: 'B.Voc Mobile Application Development, Calicut University' },
  ],
};