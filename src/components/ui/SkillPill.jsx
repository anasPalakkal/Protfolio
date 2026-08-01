import { skillIcons } from '../../lib/skillIcons';

export function SkillPill({ name }) {
  const Icon = skillIcons[name];

  return (
    <div className="group flex items-center gap-2 rounded-lg border border-border bg-surface-alt px-3 py-2 transition-colors duration-200 hover:border-accent hover:bg-accent-soft sm:gap-2.5 sm:rounded-xl sm:px-4 sm:py-2.5">
      {Icon && (
        <Icon
          size={18}
          aria-hidden="true"
          className="shrink-0 text-text-secondary transition-colors duration-200 group-hover:text-accent"
        />
      )}
      <span className="text-xs font-medium text-text-primary sm:text-sm">{name}</span>
    </div>
  );
}