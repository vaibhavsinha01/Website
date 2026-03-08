/**
 * /lib/posts.js
 * Utility functions for reading and parsing markdown strategy posts.
 * All content is loaded from /content/strategies at build time (SSG).
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Directory where all strategy markdown files live
const STRATEGIES_DIR = path.join(process.cwd(), 'content', 'strategies');

/**
 * Read a single markdown file and parse its frontmatter + content.
 * @param {string} filename - e.g. "breakout-strategy.md"
 * @returns {{ slug, title, date, description, content }}
 */
function parsePost(filename) {
  const slug = filename.replace(/\.md$/, '');
  const filePath = path.join(STRATEGIES_DIR, filename);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date ? new Date(data.date).toISOString() : null,
    description: data.description || '',
    content,
  };
}

/**
 * Get all strategy posts, sorted by date descending (newest first).
 * @returns {Array<{ slug, title, date, description }>}
 */
export function getAllPosts() {
  if (!fs.existsSync(STRATEGIES_DIR)) return [];

  const files = fs.readdirSync(STRATEGIES_DIR).filter((f) => f.endsWith('.md'));

  return files
    .map(parsePost)
    .sort((a, b) => {
      // Sort by date descending; posts without dates go last
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date) - new Date(a.date);
    })
    .map(({ slug, title, date, description }) => ({ slug, title, date, description }));
}

/**
 * Get a single post's full content by slug.
 * @param {string} slug - e.g. "breakout-strategy"
 * @returns {{ slug, title, date, description, content }}
 */
export function getPostBySlug(slug) {
  const filename = `${slug}.md`;
  return parsePost(filename);
}

/**
 * Get all slugs — used by Next.js getStaticPaths for dynamic routing.
 * @returns {Array<{ params: { slug: string } }>}
 */
export function getAllSlugs() {
  if (!fs.existsSync(STRATEGIES_DIR)) return [];

  return fs
    .readdirSync(STRATEGIES_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => ({ params: { slug: f.replace(/\.md$/, '') } }));
}

/**
 * Format an ISO date string to a readable format.
 * @param {string|null} isoDate
 * @returns {string}
 */
export function formatDate(isoDate) {
  if (!isoDate) return '';
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}