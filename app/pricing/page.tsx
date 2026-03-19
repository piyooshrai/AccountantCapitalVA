import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';
import { PRICING_TIERS } from '@/lib/accounting-data';

export const metadata: Metadata = generatePageMetadata(
  'Pricing - Accountant Capital VA',
  'Transparent pricing for dedicated bookkeeping VAs. Part-time $700/mo, full-time $1,300/mo. Month-to-month, no contracts. Compare to Bench, Pilot, local bookkeepers.',
  'bookkeeping virtual assistant pricing',
  '/pricing'
);

const faqs = [
  {
    question: 'What\'s included in both tiers?',
    answer: 'Both include: dedicated VA assigned only to you, works in YOUR software (QuickBooks, Xero, etc.), Client Manager oversight, background check (Checkr), NDA, backup VA during leave, month-to-month flexibility. The difference is hours: part-time is up to 20/week, full-time is up to 40/week.'
  },
  {
    question: 'Can I upgrade or downgrade mid-month?',
    answer: 'Yes. Increase to full-time? We\'ll adjust your invoice and start next month at the higher tier. Scale back to part-time? No problem. We bill monthly, so changes take effect the next billing cycle.'
  },
  {
    question: 'What if I go over my hours?',
    answer: 'We track hours. If your VA is approaching the limit in a month, we\'ll flag it and discuss next steps: overflow work, increasing to the next tier, or deferring non-urgent tasks. No surprise overage fees.'
  },
  {
    question: 'Is there a long-term contract or lock-in?',
    answer: 'No contracts. Month-to-month. If you\'re unhappy or need to cancel, you can end the relationship with 30 days notice (or 60 if you want a smooth transition). We believe in earning your business every month.'
  },
  {
    question: 'How do you compare to hiring a local bookkeeper?',
    answer: 'Local bookkeeper: $45K-$60K/year, employee overhead, benefits, training, potential turnover. Our full-time tier: $15,600/year, no overhead, dedicated person, backup coverage, Client Manager oversight. You save $30K+ annually and get better service.'
  },
  {
    question: 'What about Bench, Pilot, or QB Live pricing?',
    answer: 'Bench: $249-$399/mo but shared team + proprietary software. Pilot: $499-$699/mo but bookkeeping only + startup-focused. QB Live: $200-$400/mo but QBO-only + shared bookkeeper. We offer: dedicated person + any software + full financial admin + Client Manager.'
  }
];

export default function PricingPage() {
  return (
    <>
      <Header />

      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[{ name: 'Pricing', url: '/pricing' }]} />
      </section>

      {/* Hero */}
      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed">
            No hidden fees. No surprise overage charges. No long-term contracts. Just straightforward pricing for dedicated bookkeeping support.
          </p>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-4 text-center">Two Simple Tiers</h2>
          <p className="text-center text-text-mid text-lg mb-12">Month-to-month. No contracts. Cancel anytime.</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Part-Time */}
            <div className="bg-white rounded-lg p-10 border-2 border-stone-warm hover:border-mint hover:shadow-lg transition">
              <h3 className="text-3xl font-fraunces font-600 text-forest mb-2">Part-Time VA</h3>
              <div className="text-5xl font-bold text-mint mb-2">$700</div>
              <div className="text-text-mid mb-8 font-500">/month</div>

              <div className="text-forest font-600 text-lg mb-8 pb-8 border-b border-stone-warm">
                Up to 20 hours per week
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  'Dedicated VA assigned to you only',
                  'Works in YOUR software (QBO, Xero, FreshBooks, Wave)',
                  'Daily bookkeeping tasks',
                  'Monthly bank reconciliation',
                  'Invoice & AR management',
                  'Expense categorization & AP',
                  'Client Manager oversight',
                  'Background checked & NDA signed',
                  'Backup VA during leave',
                  'Month-to-month flexibility'
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-mint font-bold flex-shrink-0">✓</span>
                    <span className="text-text-mid">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full py-3 px-6 rounded-lg font-600 text-center bg-forest text-white hover:bg-forest-mid transition"
              >
                Start with Part-Time
              </Link>
            </div>

            {/* Full-Time */}
            <div className="bg-forest text-white rounded-lg p-10 border-2 border-mint shadow-lg scale-105">
              <div className="inline-block bg-mint text-forest px-4 py-1 rounded-full text-sm font-600 mb-4">
                Most Popular
              </div>
              <h3 className="text-3xl font-fraunces font-600 mb-2">Full-Time VA</h3>
              <div className="text-5xl font-bold text-mint mb-2">$1,300</div>
              <div className="text-mint-light mb-8 font-500">/month</div>

              <div className="text-mint text-lg mb-8 font-600 pb-8 border-b border-forest-light">
                Up to 40 hours per week
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  'Dedicated VA assigned to you only',
                  'Works in YOUR software',
                  'Full bookkeeping & financial admin',
                  'Daily transaction management',
                  'Monthly reconciliation & close',
                  'Complete AR/AP management',
                  'Payroll data entry & tracking',
                  'Financial reporting & dashboards',
                  'Tax prep documentation',
                  'Client Manager + backup VA'
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-mint font-bold flex-shrink-0">✓</span>
                    <span className="text-mint-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full py-3 px-6 rounded-lg font-600 text-center bg-mint text-forest hover:bg-mint-light transition"
              >
                Start with Full-Time
              </Link>
            </div>
          </div>

          {/* Enterprise */}
          <div className="text-center pt-12 border-t border-stone-warm">
            <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Need multiple VAs or custom services?</h3>
            <p className="text-text-mid mb-6">We offer Enterprise packages for multi-location businesses, high-volume accounting, or specialized needs.</p>
            <Link
              href="/contact"
              className="inline-block text-forest font-600 hover:text-mint transition"
            >
              Request Enterprise Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12 text-center">The Real Cost: Accountant Capital VA vs. Alternatives</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-forest">
                  <th className="text-left py-4 px-4 font-600 text-forest">Option</th>
                  <th className="text-right py-4 px-4 font-600 text-forest">Annual Cost</th>
                  <th className="text-right py-4 px-4 font-600 text-forest">Full Financial Admin</th>
                  <th className="text-right py-4 px-4 font-600 text-forest">Dedicated Person</th>
                  <th className="text-right py-4 px-4 font-600 text-forest">Client Manager</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-warm bg-white">
                  <td className="py-4 px-4 font-600 text-forest">Accountant Capital VA (Part-Time)</td>
                  <td className="text-right py-4 px-4 font-bold text-mint">$8,400</td>
                  <td className="text-right py-4 px-4">Core tasks</td>
                  <td className="text-right py-4 px-4 text-mint font-bold">✓</td>
                  <td className="text-right py-4 px-4 text-mint font-bold">✓</td>
                </tr>
                <tr className="border-b border-stone-warm bg-white">
                  <td className="py-4 px-4 font-600 text-forest">Accountant Capital VA (Full-Time)</td>
                  <td className="text-right py-4 px-4 font-bold text-mint">$15,600</td>
                  <td className="text-right py-4 px-4 text-mint font-bold">✓ Complete</td>
                  <td className="text-right py-4 px-4 text-mint font-bold">✓</td>
                  <td className="text-right py-4 px-4 text-mint font-bold">✓</td>
                </tr>
                <tr className="border-b border-stone-warm bg-stone-warm">
                  <td className="py-4 px-4 font-600 text-forest">Bench (Premium)</td>
                  <td className="text-right py-4 px-4 font-bold text-text-dark">$4,788</td>
                  <td className="text-right py-4 px-4 text-text-light">Bookkeeping only</td>
                  <td className="text-right py-4 px-4 text-text-light">Shared team</td>
                  <td className="text-right py-4 px-4 text-text-light">No</td>
                </tr>
                <tr className="border-b border-stone-warm bg-stone-warm">
                  <td className="py-4 px-4 font-600 text-forest">Pilot (Core)</td>
                  <td className="text-right py-4 px-4 font-bold text-text-dark">$8,388</td>
                  <td className="text-right py-4 px-4 text-text-light">Bookkeeping only</td>
                  <td className="text-right py-4 px-4 text-text-light">Shared</td>
                  <td className="text-right py-4 px-4 text-text-light">No</td>
                </tr>
                <tr className="border-b border-stone-warm bg-stone-warm">
                  <td className="py-4 px-4 font-600 text-forest">QB Live</td>
                  <td className="text-right py-4 px-4 font-bold text-text-dark">$3,600</td>
                  <td className="text-right py-4 px-4 text-text-light">Basic</td>
                  <td className="text-right py-4 px-4 text-text-light">Shared</td>
                  <td className="text-right py-4 px-4 text-text-light">No</td>
                </tr>
                <tr className="bg-amber bg-opacity-10">
                  <td className="py-4 px-4 font-600 text-forest">Local Bookkeeper</td>
                  <td className="text-right py-4 px-4 font-bold text-amber">$45,000-$60,000</td>
                  <td className="text-right py-4 px-4 text-amber font-bold">✓</td>
                  <td className="text-right py-4 px-4 text-amber font-bold">✓</td>
                  <td className="text-right py-4 px-4 text-amber font-bold">✓ (you manage)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 p-8 bg-white rounded-lg border-l-4 border-mint">
            <h3 className="text-xl font-600 text-forest mb-4">The Real Breakdown:</h3>
            <div className="space-y-4 text-text-mid">
              <p>
                <strong>Accountant Capital VA Full-Time ($15,600/yr):</strong> You get a dedicated bookkeeper who works exclusively for you, inside your software, handling all financial admin, with Client Manager oversight and backup coverage.
              </p>
              <p>
                <strong>Local bookkeeper ($45K-$60K/yr):</strong> You hire an employee, pay taxes, benefits, provide equipment, manage performance, replace them when they leave. Plus the constant ramp-up time with new hires.
              </p>
              <p>
                <strong>The math:</strong> You save $30K-$45K per year AND get better continuity, specialized expertise, Client Manager oversight, and no employee overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's NOT Included */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">What We Don't Do (Clear Boundaries)</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            <div>
              <h3 className="font-600 text-forest mb-4 text-lg">We are NOT:</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3">
                  <span className="text-amber flex-shrink-0">✗</span>
                  <span>Your CPA or tax advisor (we prepare docs, not advice)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber flex-shrink-0">✗</span>
                  <span>Accountants (we don't file taxes or audit)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber flex-shrink-0">✗</span>
                  <span>Financial advisors (we don't recommend investments)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber flex-shrink-0">✗</span>
                  <span>Legal consultants (we don't advise on legal structure)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-600 text-forest mb-4 text-lg">We ARE:</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3">
                  <span className="text-mint flex-shrink-0">✓</span>
                  <span>Expert bookkeepers & financial administrators</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint flex-shrink-0">✓</span>
                  <span>Professional organizers of financial data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint flex-shrink-0">✓</span>
                  <span>Software specialists (QBO, Xero, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint flex-shrink-0">✓</span>
                  <span>Your financial operations team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} />

      {/* Final CTA */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-4xl font-fraunces font-600 mb-6">Ready to get started?</h2>
          <p className="text-xl text-mint-light mb-8">
            The first step is a 15-minute call. Let's talk about your books and find the right fit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 text-lg hover:bg-mint-light transition"
          >
            Schedule Your Strategy Call
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
