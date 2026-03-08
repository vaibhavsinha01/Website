/**
 * pages/404.js
 * Custom 404 page.
 */

import Link from 'next/link';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className="max-w-5xl mx-auto px-6 py-32 text-center">
        <p className="font-mono text-gold text-sm tracking-widest uppercase mb-6">404</p>
        <h1 className="font-serif text-4xl font-semibold text-ink-900 mb-4">
          Page not found
        </h1>
        <div className="w-10 h-px bg-gold mx-auto mb-6" />
        <p className="text-ink-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-ink-900 text-ink-50 font-medium px-6 py-3 hover:bg-gold hover:text-ink-900 transition-colors duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </Layout>
  );
}