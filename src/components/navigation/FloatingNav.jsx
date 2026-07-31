import { useEffect, useState } from 'react';
import { NavDock } from './NavDock';
import { MobileNavStrip } from './MobileNavStrip';

const FADE_DURATION = 200;

export function FloatingNav({ items, activeId, isInHero }) {
  const [displayIsInHero, setDisplayIsInHero] = useState(isInHero);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isInHero === displayIsInHero) return;
    setIsVisible(false);
    const timeout = setTimeout(() => {
      setDisplayIsInHero(isInHero);
      setIsVisible(true);
    }, FADE_DURATION);
    return () => clearTimeout(timeout);
  }, [isInHero, displayIsInHero]);

  return (
    <nav
      aria-label="Primary"
      className={`fixed left-1/2 z-40 -translate-x-1/2 transition-opacity duration-200 ease-out motion-reduce:transition-none ${
        displayIsInHero ? 'top-[calc(100dvh-5.5rem)]' : 'top-6'
      } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="hidden sm:block">
        <NavDock items={items} activeId={activeId} />
      </div>
      <div className="sm:hidden">
        <MobileNavStrip items={items} activeId={activeId} />
      </div>
    </nav>
  );
}