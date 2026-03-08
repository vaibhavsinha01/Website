/**
 * Layout.js
 * Shared page layout wrapping Navbar + main content + Footer.
 */

import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  const pageTitle = title ? `${title} — SimurghCapital` : 'SimurghCapital | Trading Strategy & Automation';
  const pageDesc = description || 'Professional trading strategies, and automation for better returns.';

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        {/* Favicon placeholder */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Main content — padded for fixed navbar */}
      <main className="min-h-screen pt-16">
        {children}
      </main>

      <Footer />
    </>
  );
}