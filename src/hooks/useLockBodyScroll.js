import { useEffect } from 'react';

/**
 * Locks body scroll while `locked` is true. Used by ProjectOverlay so the
 * page behind a full-screen overlay doesn't scroll.
 * @param {boolean} locked
 */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);
}
