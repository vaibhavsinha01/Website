/**
 * pages/book-call.js
 * Booking page with embedded Calendly widget.
 *
 * TO CONFIGURE: Replace 'YOUR_USERNAME' in the CALENDLY_URL constant
 * with your actual Calendly username/link.
 */

import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

// ── Change this to your Calendly URL ──────────────────────
const CALENDLY_URL = 'https://calendly.com/vaibhavofficial099/30min';
// ──────────────────────────────────────────────────────────

export default function BookCall() {
  // Inject the Calendly widget script once the component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout
      title="Book a Call"
      description="Schedule a free 30-minute strategy call with our trading educator."
    >
      {/* Calendly also needs its stylesheet */}
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>

      {/* Page Header */}
      <div className="bg-ink-900 text-ink-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-4">
            Free Session
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
            Book a Strategy Call
          </h1>
          <div className="w-10 h-px bg-gold" />
          <p className="mt-4 text-ink-400 max-w-lg">
            Select a time that works for you. This is a free, no-obligation 30-minute
            session to discuss your trading goals.
          </p>
        </div>
      </div>

      {/* What to expect */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-4">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              title: 'Pick a time',
              desc: 'Choose any available slot — sessions are 30 minutes.',
            },
            {
              step: '02',
              title: 'Prepare your questions',
              desc: 'Think about your current challenges or strategies you want to improve.',
            },
            {
              step: '03',
              title: 'Join the call',
              desc: 'You will get a confirmation email with the meeting link.',
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-5">
              <span className="font-mono text-gold text-sm font-medium mt-0.5">{step}</span>
              <div>
                <h3 className="font-serif text-lg font-semibold text-ink-900 mb-1">{title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-ink-200 my-10" />
      </div>

      {/* Calendly Inline Widget */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div
          className="calendly-inline-widget w-full"
          data-url={CALENDLY_URL}
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </Layout>
  );
}