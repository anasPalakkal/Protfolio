import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SCROLL_SETTLE_DELAY = 120;

export function MobileNavStrip({ items, activeId }) {
  const containerRef = useRef(null);
  const itemRefs = useRef({});
  const sourceRef = useRef(null); // 'strip' while a strip-initiated navigation is in flight
  const settleTimeoutRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function updateEdgeState() {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }

  // Page scrolled organically -> re-center the strip on the new active item.
  useEffect(() => {
    if (sourceRef.current === 'strip') {
      sourceRef.current = null;
      return;
    }
    itemRefs.current[activeId]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [activeId]);

  // User swiped the strip -> update edge fades live, and once scrolling
  // settles, navigate to whichever item ended up closest to center.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    updateEdgeState();

    function handleScroll() {
      updateEdgeState();
      clearTimeout(settleTimeoutRef.current);
      settleTimeoutRef.current = setTimeout(() => {
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        let closestId = null;
        let closestDistance = Infinity;

        for (const [id, el] of Object.entries(itemRefs.current)) {
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.left + rect.width / 2 - containerCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestId = id;
          }
        }

        if (closestId && closestId !== activeId) {
          sourceRef.current = 'strip';
          document.getElementById(closestId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, SCROLL_SETTLE_DELAY);
    }

    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateEdgeState);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateEdgeState);
      clearTimeout(settleTimeoutRef.current);
    };
  }, [activeId]);

  return (
    <div className="relative w-[min(90vw,18.5rem)] overflow-hidden rounded-full border border-border bg-surface/95 shadow-lg backdrop-blur-sm">
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory items-center overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none' }}
      >
        {/* Spacer width = half container minus half item width (w-28 = 7rem), so edge items can reach true center. */}
        <div className="w-[calc(50%-3.5rem)] shrink-0" aria-hidden="true" />
        {items.map((item) => (
          <a
            key={item.id}
            ref={(el) => {
              itemRefs.current[item.id] = el;
            }}
            href={`#${item.id}`}
            aria-current={activeId === item.id ? 'true' : undefined}
            className={`flex w-28 shrink-0 snap-center items-center justify-center whitespace-nowrap px-3 py-3 text-center text-sm font-medium transition-colors duration-200 ${
              activeId === item.id
                ? 'rounded-full bg-accent text-text-onaccent'
                : 'text-text-secondary'
            }`}
          >
            {item.label}
          </a>
        ))}
        <div className="w-[calc(50%-3.5rem)] shrink-0" aria-hidden="true" />
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 left-0 flex w-8 items-center bg-gradient-to-r from-surface/95 to-transparent pl-1 transition-opacity duration-200 ${
          canScrollLeft ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronLeft size={14} className="text-text-secondary" />
      </div>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 right-0 flex w-8 items-center justify-end bg-gradient-to-l from-surface/95 to-transparent pr-1 transition-opacity duration-200 ${
          canScrollRight ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronRight size={14} className="text-text-secondary" />
      </div>
    </div>
  );
}