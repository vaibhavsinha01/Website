/**
 * pages/about.js
 * About page — describes the trading educator and their philosophy.
 */

import Link from 'next/link';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout
      title="About"
      description="Learn about the trading educator behind EdgeTrader — experience, philosophy, and approach."
    >
      {/* Page Header */}
      <div className="bg-ink-900 text-ink-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">
            Vaibhav 
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
            About Simurgh Capital
          </h1>
          <div className="w-10 h-px bg-gold" />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-14">
          {/* Profile column */}
          <div className="md:col-span-1">
            {/* Avatar placeholder */}
            <div className="w-32 h-32 bg-ink-200 border border-ink-300 flex items-center justify-center mb-5">
              <span className="font-serif text-4xl text-ink-400">ET</span>
            </div>
            <h2 className="font-serif text-xl font-semibold text-ink-900 mb-1">
              Vaibhav Sinha
            </h2>
            <p className="text-sm text-gold font-medium mb-4">
              Quant Developer
            </p>
            <div className="w-8 h-px bg-gold mb-5" />
            <p className="text-sm text-ink-500 leading-relaxed">
              2+ years of experience in creating trading system across equity, futures, and forex markets.
            </p>
          </div>

          {/* Bio column */}
          <div className="md:col-span-2 space-y-6 text-ink-700 leading-relaxed">
            <p>
              For the past 2 years I have been creating studying about markets and automating 
              trading strategies for my clients.
            </p>
            <p>
              The strategies here are some of the best that are used by institutional investors 
              across quant firms. Everyone of them has been backtested and tested in the live markets.
            </p>
            <p>
              My philosophy is simple: Discipline and a proper framework beats the market.
            </p>
            <p>
              Through this site you can read the most commonly used strategies that are used 
              by institutions and successfull retail traders . You can also book a call with me in case 
              you wish to book an appointment with me for automating your trading system.
            </p>

            {/* Philosophy highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { title: 'Price Action First', desc: 'Clean charts. No clutter. Read what the market is actually saying.' },
                { title: 'Risk is Everything', desc: 'Protecting capital is the first priority. Growth follows discipline.' },
                { title: 'Repeatable Setups', desc: 'Trade the same patterns consistently, not random opportunities.' },
                { title: 'Continuous Learning', desc: 'Every trade is data. Every loss is a lesson. Stay curious.' },
              ].map(({ title, desc }) => (
                <div key={title} className="border border-ink-200 p-5 bg-white">
                  <h3 className="font-serif font-semibold text-ink-900 mb-2">{title}</h3>
                  <p className="text-sm text-ink-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="w-10 h-px bg-gold mx-auto mb-8" />
          <h3 className="font-serif text-2xl font-semibold text-ink-900 mb-3">
            Let's work together
          </h3>
          <p className="text-ink-600 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            If you're serious about improving your trading, book a free call and let's talk
            about where you are and where you want to go.
          </p>
          <Link
            href="/book-call"
            className="inline-flex items-center gap-2 bg-ink-900 text-ink-50 font-semibold px-8 py-3.5 hover:bg-gold hover:text-ink-900 transition-colors duration-300"
          >
            Book a Free Call →
          </Link>
        </div>
      </div>
    </Layout>
  );
}