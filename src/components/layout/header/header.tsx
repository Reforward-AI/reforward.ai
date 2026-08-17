'use client';
import { CloseIcon, MenuIcon } from '@/icons/icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DesktopNav from './desktop-nav';
import MainMobileNav from './main-mobile-nav';
import ThemeToggle from './theme-toggle';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-dark-primary border-b border-white/10 sticky top-0 z-50 py-2 lg:py-4">
      <div className="px-4 sm:px-6 lg:px-7">
        <div className="grid grid-cols-2 items-center lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex flex-col items-center gap-0.5"
            >
              <svg
                className="h-11 w-auto sm:h-12"
                viewBox="-40 -40 1239 960"
                role="img"
                aria-label="Reforward.ai"
              >
                <defs>
                  <filter
                    id="logo-outline"
                    x="-10%"
                    y="-10%"
                    width="120%"
                    height="120%"
                  >
                    <feMorphology
                      in="SourceAlpha"
                      operator="dilate"
                      radius="28"
                      result="expanded"
                    />
                    <feFlood floodColor="#7A8798" result="outlineColor" />
                    <feComposite
                      in="outlineColor"
                      in2="expanded"
                      operator="in"
                      result="outline"
                    />
                    <feMerge>
                      <feMergeNode in="outline" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <image
                  href="/images/logo/reforward.ai-logo-transparent.png"
                  width="1159"
                  height="880"
                  filter="url(#logo-outline)"
                />
              </svg>
              <span className="text-sm font-bold text-gray-200">
                Reforward AI
              </span>
            </Link>
          </div>

          <DesktopNav />

          <div className="flex items-center gap-4 justify-self-end">
            <ThemeToggle />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              type="button"
              className="order-last shrink-0 inline-flex items-center justify-center p-2 rounded-md text-white/85 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            <Link
              href="/signin"
              className="text-sm hidden lg:block font-medium text-white/85 hover:text-white"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="lg:inline-flex items-center px-5 py-3 hidden text-sm font-medium text-primary-500 rounded-full bg-white hover:bg-white/90 h-11"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>

      <MainMobileNav isOpen={mobileMenuOpen} />
    </header>
  );
}
