/**
 * StrategyCard.js
 * Card component for displaying a strategy post preview.
 * Used on the home page and strategies listing page.
 */

import Link from 'next/link';
import { formatDate } from '../lib/posts';

export default function StrategyCard({ slug, title, date, description, index = 0 }) {
  return (
    <article
      className="group relative bg-white border border-ink-200 p-7 hover:border-gold transition-colors duration-300 animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
    >
      {/* Corner accent */}
      <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Date */}
      {date && (
        <p className="text-xs text-ink-400 font-mono mb-3 tracking-wide">
          {formatDate(date)}
        </p>
      )}

      {/* Title */}
      <h2 className="font-serif text-xl font-semibold text-ink-900 mb-3 leading-snug group-hover:text-gold-dark transition-colors duration-200">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-sm text-ink-600 leading-relaxed mb-5 line-clamp-3">
          {description}
        </p>
      )}

      {/* Read link */}
      <Link
        href={`/strategies/${slug}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-ink-900 hover:text-gold transition-colors"
      >
        Read Strategy
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </Link>
    </article>
  );
}