import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id));

  function handleNavClick() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
      <Container className="flex h-[var(--nav-height)] items-center justify-between">
        <a
          href="#hero"
          className="font-display text-lg font-semibold text-text-primary"
        >
          Mohammed Anas
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeId === item.id
                      ? 'text-accent'
                      : 'text-text-primary hover:text-accent'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-text-primary md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {isMenuOpen && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-border md:hidden">
          <ul className="flex flex-col px-5 py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                  aria-current={activeId === item.id ? 'true' : undefined}
                  className={`block py-3 text-sm font-medium ${
                    activeId === item.id ? 'text-accent' : 'text-text-primary'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
