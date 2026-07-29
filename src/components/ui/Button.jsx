const VARIANT_STYLES = {
  primary:
    'bg-accent text-text-onaccent hover:bg-accent-hover',
  secondary:
    'bg-transparent text-text-primary border border-border hover:border-accent hover:text-accent',
};

/**
 * Renders as <a> when `href` is provided, otherwise <button>.
 */
export function Button({
  href,
  variant = 'primary',
  icon: Icon,
  className = '',
  children,
  ...rest
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200';
  const classes = `${baseStyles} ${VARIANT_STYLES[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...rest}
      >
        {children}
        {Icon && <Icon size={16} aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
      {Icon && <Icon size={16} aria-hidden="true" />}
    </button>
  );
}
