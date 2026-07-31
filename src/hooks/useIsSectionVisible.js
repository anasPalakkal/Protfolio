import { useEffect, useState } from 'react';

/**
 * Tracks whether the element with the given id currently intersects the viewport.
 * Defaults to true so there's no flash of the wrong state before the observer fires.
 * @param {string} sectionId
 * @returns {boolean}
 */
export function useIsSectionVisible(sectionId) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [sectionId]);

  return isVisible;
}