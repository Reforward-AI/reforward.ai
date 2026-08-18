import { ChevronDown2Icon } from '@/icons/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './nav-items';
import { useEffect, useState } from 'react';

interface DesktopNavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onNavigate: (href: string) => void;
}

interface DesktopNavProps {
  activeHref?: string;
  onNavigate?: (href: string) => void;
}

function DesktopNavLink({
  href,
  label,
  isActive,
  onNavigate,
}: DesktopNavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      onClick={() => onNavigate(href)}
      className={cn(
        'text-white/85 text-sm px-4 py-1.5 rounded-full hover:text-white font-medium',
        {
          'bg-white font-medium text-primary-500 shadow-xs': isActive,
        }
      )}
    >
      {label}
    </Link>
  );
}

export default function DesktopNav({
  activeHref,
  onNavigate,
}: DesktopNavProps) {
  const pathname = usePathname();
  const [activeDropdownKey, setActiveDropdownKey] = useState('');
  const [internalActiveHref, setInternalActiveHref] = useState(pathname);

  function toggleActiveDropdown(key: string) {
    setActiveDropdownKey((prevKey) => (prevKey === key ? '' : key));
  }

  useEffect(() => {
    // Hide dropdown on pathname changes
    setActiveDropdownKey('');
    setInternalActiveHref(`${pathname}${window.location.hash}`);
  }, [pathname]);

  useEffect(() => {
    const syncActiveHref = () => {
      setInternalActiveHref(`${window.location.pathname}${window.location.hash}`);
    };

    syncActiveHref();
    window.addEventListener('hashchange', syncActiveHref);

    return () => window.removeEventListener('hashchange', syncActiveHref);
  }, []);

  function handleNavigation(href: string) {
    setInternalActiveHref(href);
    onNavigate?.(href);
  }

  const selectedHref = activeHref ?? internalActiveHref;

  return (
    <nav className="hidden lg:flex lg:items-center bg-white/5 rounded-full p-1 max-h-fit">
      {navItems.map((item) => {
        if (item.type === 'link') {
          return (
            <DesktopNavLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={selectedHref === item.href}
              onNavigate={handleNavigation}
            />
          );
        }

        if (item.type === 'dropdown') {
          const toggleThisDropdown = () => {
            toggleActiveDropdown(item.label);
          };

          const isDropdownActive = activeDropdownKey === item.label;

          return (
            <div key={item.label} className="relative">
              <button
                onClick={toggleThisDropdown}
                onMouseEnter={toggleThisDropdown}
                onMouseLeave={toggleThisDropdown}
                onKeyDown={(e) => {
                  if (isDropdownActive && e.key === 'Escape') {
                    toggleThisDropdown();
                  }
                }}
                className={cn(
                  'text-white/85 hover:text-white group text-sm inline-flex gap-1 items-center px-4 py-1.5 font-medium rounded-full',
                  {
                    'bg-white font-medium text-primary-500 shadow-xs':
                      item.items.some(({ href }) => pathname?.includes(href)),
                  }
                )}
              >
                <span>{item.label}</span>
                <ChevronDown2Icon
                  className={cn('size-4 transition-transform duration-200', {
                    'rotate-180': isDropdownActive,
                  })}
                />
              </button>

              {isDropdownActive && (
                <div
                  onMouseEnter={toggleThisDropdown}
                  onMouseLeave={toggleThisDropdown}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      toggleThisDropdown();
                    }
                  }}
                  className="absolute right-0 w-[266px] bg-white dark:bg-dark-secondary dark:border-gray-800 rounded-2xl shadow-theme-lg border border-gray-100 p-3 z-50"
                >
                  <div className="space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }
      })}
    </nav>
  );
}
