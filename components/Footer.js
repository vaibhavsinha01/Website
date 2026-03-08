/**
 * Footer.js
 * Site-wide footer with nav links and disclaimer.
 */

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 bg-ink-50 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-4 h-4 border border-gold rotate-45" />
              <span className="font-serif font-semibold text-ink-900">Simurgh Capital</span>
            </div>
            <p className="text-sm text-ink-500 leading-relaxed">
              Trading Strategy insights for serious market participants.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium text-ink-400 uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/strategies', label: 'Strategies' },
                { href: '/about', label: 'About' },
                { href: '/book-call', label: 'Book a Call' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-ink-600 hover:text-gold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-xs font-medium text-ink-400 uppercase tracking-widest mb-4">
              Disclaimer
            </h3>
            <p className="text-xs text-ink-500 leading-relaxed">
              All content is for educational purposes only. Nothing here constitutes
              financial advice. Trading involves significant risk of loss.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-ink-100 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-400">
            © {year} Simurgh Capital. All rights reserved.
          </p>
          <div className="w-8 h-px bg-gold" />
        </div>
      </div>
    </footer>
  );
}