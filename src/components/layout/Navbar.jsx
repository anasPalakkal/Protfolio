import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useIsSectionVisible } from '../../hooks/useIsSectionVisible';
import { NAV_ITEMS } from '../navigation/navItems';
import { FloatingNav } from '../navigation/FloatingNav';

export function Navbar() {
  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const activeId = useScrollSpy(sectionIds);
  const isInHero = useIsSectionVisible('hero');

  return <FloatingNav items={NAV_ITEMS} activeId={activeId} isInHero={isInHero} />;
}