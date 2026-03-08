/**
 * pages/strategies/[slug].js
 * Dynamic strategy article page.
 * Renders markdown content with frontmatter metadata.
 */

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Layout from '../../components/Layout';
import { getAllSlugs, getPostBySlug, formatDate } from '../../lib/posts';

export default function StrategyArticle({ post }) {
  return (
    <Layout title={post.title} description={post.description}>
      {/* Article Header */}
      <div className="bg-ink-900 text-ink-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-xs font-mono text-ink-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/strategies" className="hover:text-gold transition-colors">Strategies</Link>
            <span>/</span>
            <span className="text-ink-400">{post.title}</span>
          </nav>

          {/* Date */}
          {post.date && (
            <p className="text-xs font-mono text-gold tracking-wide mb-4">
              {formatDate(post.date)}
            </p>
          )}

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-5xl font-semibold leading-tight mb-5">
            {post.title}
          </h1>

          {/* Description / subtitle */}
          {post.description && (
            <p className="text-ink-400 text-lg leading-relaxed max-w-2xl">
              {post.description}
            </p>
          )}

          <div className="w-10 h-px bg-gold mt-6" />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        <div className="prose-trading">
          {/* react-markdown renders the markdown body */}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border-t border-ink-200 pt-12">
          <div className="bg-ink-900 text-ink-50 px-8 py-10 text-center relative overflow-hidden">
            <span className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold" />
            <span className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold" />

            <p className="text-xs font-mono text-gold tracking-widest uppercase mb-3">
              Want to go deeper?
            </p>
            <h3 className="font-serif text-2xl font-semibold mb-3">
              Book a 1-on-1 Strategy Session
            </h3>
            <p className="text-ink-400 text-sm mb-6 max-w-sm mx-auto">
              Let's discuss how to apply this strategy to your own trading and build a personalised plan.
            </p>
            <Link
              href="/book-call"
              className="inline-flex items-center gap-2 bg-gold text-ink-900 font-semibold px-7 py-3 hover:bg-gold-light transition-colors duration-200"
            >
              Book a Free Call →
            </Link>
          </div>

          {/* Back navigation */}
          <div className="mt-8 flex items-center justify-between">
            <Link
              href="/strategies"
              className="text-sm text-ink-600 hover:text-gold transition-colors flex items-center gap-1.5"
            >
              ← Back to Strategies
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Tell Next.js which slugs exist (for static generation)
export async function getStaticPaths() {
  const paths = getAllSlugs();
  return { paths, fallback: false };
}

// Fetch the post content at build time
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return { props: { post } };
}