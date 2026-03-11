/**
 * pages/index.js
 * Home page — hero, intro, latest strategies, CTA.
 * Uses getStaticProps for static site generation.
 */

import Link from 'next/link';
import Layout from '../components/Layout';
import StrategyCard from '../components/StrategyCard';
import { getAllPosts } from '../lib/posts';

export default function Home({ posts }) {
  return (
    <Layout>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative bg-ink-900 text-ink-50 overflow-hidden">
        {/* Decorative grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #C9A84C 1px, transparent 1px),
              linear-gradient(to bottom, #C9A84C 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-28 md:py-36">
          {/* Eyebrow */}
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6 animate-fade-up">
            Trading Automation 
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight max-w-2xl mb-6 animate-fade-up animate-delay-100">
            Trade with{' '}
            <em className="text-gold not-italic">precision.</em>
            <br />
            Think with clarity.
          </h1>

          {/* Sub-headline */}
          <p className="text-ink-400 text-lg leading-relaxed max-w-xl mb-10 animate-fade-up animate-delay-200">
            Proven trading strategies, rigorous market analysis, so you can 
            develop a consistent edge in any market condition.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
            <Link
              href="/strategies"
              className="inline-flex items-center justify-center gap-2 bg-gold text-ink-900 font-semibold px-7 py-3.5 hover:bg-gold-light transition-colors duration-200"
            >
              Read Strategies
              <span>→</span>
            </Link>
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center gap-2 border border-ink-600 text-ink-300 font-medium px-7 py-3.5 hover:border-gold hover:text-gold transition-colors duration-200"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── Introduction ──────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">
              About the Approach
            </p>
            <h2 className="font-serif text-3xl font-semibold text-ink-900 mb-5 leading-snug">
              Strategy over impulse.
              <br />Process over luck.
            </h2>
            <div className="w-10 h-px bg-gold mb-6" />
            <p className="text-ink-600 leading-relaxed mb-4">
              Every strategy on this site is grounded in price action, market structure, and
              disciplined risk management. No indicators, no noise — just clean, repeatable setups.
            </p>
            <p className="text-ink-600 leading-relaxed">
              Whether you're a beginner finding your footing or an experienced trader looking
              to automate your strategy, the content here will improve your trading.
            </p>
          </div>

          {/* Stats block */}
          <div className="grid grid-cols-2 gap-px bg-ink-200">
            {[
              { value: '10+', label: 'Years Trading' },
              { value: '50+', label: 'Strategies Documented' },
              { value: '200+', label: 'Students Coached' },
              { value: '∞', label: 'Market Curiosity' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white p-8 text-center">
                <p className="font-serif text-3xl font-semibold text-gold mb-1">{value}</p>
                <p className="text-xs text-ink-500 uppercase tracking-wide font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Strategies ─────────────────────────────── */}
      <section className="bg-ink-100/60 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-mono text-gold tracking-widest uppercase mb-3">
                Latest
              </p>
              <h2 className="font-serif text-3xl font-semibold text-ink-900">
                Strategy Playbook
              </h2>
            </div>
            <Link
              href="/strategies"
              className="text-sm text-ink-600 hover:text-gold transition-colors hidden md:flex items-center gap-1.5"
            >
              View all <span>→</span>
            </Link>
          </div>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.slice(0, 3).map((post, i) => (
                <StrategyCard key={post.slug} {...post} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-ink-300">
              <p className="text-ink-500 text-sm">
                No strategies yet — add a{' '}
                <code className="font-mono text-gold-dark">.md</code> file to{' '}
                <code className="font-mono text-gold-dark">/content/strategies/</code>
              </p>
            </div>
          )}

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/strategies"
              className="text-sm text-ink-600 hover:text-gold transition-colors"
            >
              View all strategies →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Book a Call CTA ───────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="relative bg-ink-900 text-ink-50 px-8 py-14 md:px-16 text-center overflow-hidden">
          {/* Gold corner accents */}
          <span className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold" />
          <span className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold" />
          <span className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold" />
          <span className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold" />

          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">
            1-on-1 Call
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 max-w-xl mx-auto leading-snug">
            Ready to accelerate your trading using automation?
          </h2>
          <p className="text-ink-400 mb-8 max-w-md mx-auto">
            Book a free 30-minute strategy call to discuss your trading goals and how I can help.
          </p>
          <Link
            href="/book-call"
            className="inline-flex items-center gap-2 bg-gold text-ink-900 font-semibold px-8 py-3.5 hover:bg-gold-light transition-colors duration-200"
          >
            Book a Free Call
            <span>→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

// Static generation — fetch posts at build time
export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}