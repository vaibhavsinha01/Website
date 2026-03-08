/**
 * pages/strategies/index.js
 * Lists all strategy posts — auto-populated from /content/strategies/*.md
 */

import Layout from '../../components/Layout';
import StrategyCard from '../../components/StrategyCard';
import { getAllPosts } from '../../lib/posts';

export default function StrategiesPage({ posts }) {
  return (
    <Layout
      title="Trading Strategies"
      description="Browse all trading strategy articles — price action, breakouts, trend following, and more."
    >
      {/* Page Header */}
      <div className="bg-ink-900 text-ink-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">
            All Strategies
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
            Strategy Playbook
          </h1>
          <div className="w-10 h-px bg-gold" />
          <p className="mt-4 text-ink-400 max-w-lg">
            Every strategy is documented with clear entry rules, risk parameters,
            and real-world context for application.
          </p>
        </div>
      </div>

      {/* Strategies Grid */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {posts.length > 0 ? (
          <>
            <p className="text-xs text-ink-500 font-mono mb-8">
              {posts.length} {posts.length === 1 ? 'strategy' : 'strategies'} published
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, i) => (
                <StrategyCard key={post.slug} {...post} index={i} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-24 border border-dashed border-ink-300">
            <p className="font-serif text-xl text-ink-400 mb-3">No strategies yet</p>
            <p className="text-sm text-ink-500">
              Add a <code className="font-mono text-gold-dark">.md</code> file to{' '}
              <code className="font-mono text-gold-dark">/content/strategies/</code> to get started.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}