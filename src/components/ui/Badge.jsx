export function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-hover ${className}`}
    >
      {children}
    </span>
  );
}
