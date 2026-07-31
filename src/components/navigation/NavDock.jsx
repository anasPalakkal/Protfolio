export function NavDock({ items, activeId }) {
  return (
    <div className="flex max-w-[92vw] items-center gap-1 rounded-full border border-border bg-surface/95 px-2 py-2 shadow-lg backdrop-blur-sm">
      <ul
        className="flex flex-nowrap items-center gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none' }}
      >
        {items.map((item) => (
          <li key={item.id} className="shrink-0">
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? 'true' : undefined}
              className={`block whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeId === item.id
                  ? 'bg-accent text-text-onaccent'
                  : 'text-text-primary hover:bg-surface-alt hover:text-accent'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}