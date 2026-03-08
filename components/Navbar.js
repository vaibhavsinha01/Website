/**
 * Navbar.js
 * Responsive navigation bar with mobile hamburger menu.
 */

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/strategies', label: 'Strategies' },
  { href: '/about', label: 'About' },
  { href: '/book-call', label: 'Book a Call' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink-50/90 backdrop-blur-md border-b border-ink-200">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* Small gold mark */}
          <span className="w-5 h-5 border border-gold rotate-45 group-hover:bg-gold transition-colors duration-300" />
          <span className="font-serif font-semibold text-lg text-ink-900 tracking-tight">
            Simurgh Capital
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(href)
                    ? 'text-gold'
                    : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button – desktop */}
        <Link
          href="/book-call"
          className="hidden md:inline-flex items-center gap-2 bg-ink-900 text-ink-50 text-sm font-medium px-5 py-2.5 hover:bg-gold hover:text-ink-900 transition-colors duration-300"
        >
          Book a Call
          <span className="text-xs">→</span>
        </Link>

        {/* Hamburger – mobile */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-px bg-ink-900 block transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}
          />
          <span
            className={`w-5 h-px bg-ink-900 block transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`w-5 h-px bg-ink-900 block transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-ink-50 border-t border-ink-200 px-6 py-4">
          <ul className="space-y-4">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm font-medium py-1 transition-colors ${
                    isActive(href) ? 'text-gold' : 'text-ink-700 hover:text-ink-900'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}