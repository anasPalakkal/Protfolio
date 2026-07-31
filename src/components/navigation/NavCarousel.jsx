import { useEffect, useRef } from 'react';

const RECENTER_SETTLE_MS = 500;
const SCROLL_END_DEBOUNCE_MS = 120;

export function NavCarousel({ items, activeId }) {
  const containerRef = useRef(null);
  const itemRefs = useRef({});
  const isProgrammaticScroll = useRef(false);
  const scrollEndTimeout = useRef(null);

  // Page scroll changed the active section -> recenter the carousel on it.
  useEffect(() => {
    const container = containerRef.current;
    const target = itemRefs.current[activeId];
    if (!container || !target) return;

    isProgrammaticScroll.current = true;
    target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

    const settleTimeout = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, RECENTER_SETTLE_MS);

    return () => clearTimeout(settleTimeout);
  }, [activeId]);

  useEffect(() => () => clearTimeout(scrollEndTimeout.current), []);

  // User swiped the carousel -> once it settles, navigate the page to whichever item is centered.
  function handleScroll() {
    if (isProgrammaticScroll.current) return;

    clearTimeout(scrollEndTimeout.current);
    scrollEndTimeout.current = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closestId = null;
      let closestDistance = Infinity;

      items.forEach((item) => {
        const el = itemRefs.current[item.id];
        if (!el) return;
        const itemCenter = el.offsetLeft + el.offsetWidth / 2;
        const distance = Math.abs(itemCenter - containerCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = item.id;
        }
      });

      if (closestId && closestId !== activeId) {
        document.getElementById(closestId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, SCROLL_END_DEBOUNCE_MS);
  }

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="flex w-32 snap-x snap-mandatory items-center overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: 'none' }}
    >
      {items.map((item) => (
        <a
          key={item.id}
          ref={(el) => {
            itemRefs.current[item.id] = el;
          }}
          href={`#${item.id}`}
          aria-current={activeId === item.id ? 'true' : undefined}
          className={`flex w-32 shrink-0 snap-center items-center justify-center py-3 text-sm font-medium transition-colors duration-200 ${
            activeId === item.id ? 'text-accent' : 'text-text-secondary'
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}