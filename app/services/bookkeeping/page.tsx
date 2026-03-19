import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Bookkeeping Virtual Assistant Services',
  'Expert bookkeeping VA services. Transaction recording, reconciliation, month-end close, financial data cleanup. Works in QuickBooks, Xero, FreshBooks. Starting at $700/mo.',
  'bookkeeping virtual assistant',
  '/services/bookkeeping'
);

const faqs = [
  {
    question: 'What exactly does a bookkeeping VA do?',
    answer: 'They handle all the daily financial record-keeping: recording transactions, categorizing expenses, reconciling accounts, capturing receipts, maintaining your chart of accounts, and preparing for month-end close. Basically, everything that keeps your books accurate and current.'
  },
  {
    question: 'How do you prevent errors in transaction recording?',
    answer: 'Multiple safeguards: our VAs are trained in accounting principles, they use your existing chart of accounts and transaction history as reference, they flag anything unusual, and your Client Manager audits their work monthly. We target 99%+ accuracy.'
  },
  {
    question: 'Can a VA handle bookkeeping for multiple business entities?',
    answer: 'Yes. Some clients have multiple LLCs, S-corps, or corporate structures. We can manage multiple books, though that typically requires a full-time VA rather than part-time.'
  },
  {
    question: 'What if I have years of behind bookkeeping?',
    answer: 'We offer catch-up services. Your VA can work through prior years, categorize historical transactions, and get your books clean and current. This is often done as a one-time project before ongoing monthly bookkeeping.'
  },
  {
    question: 'How often should my books be reconciled?',
    answer: 'Monthly is standard. Most businesses need to know their financial position monthly for decision-making, tax planning, and investor/lender reporting. We reconcile on a monthly cycle.'
  }
];

export default function BookkeepingServicePage() {
  return (
    <>
      <Header />

      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Services', url: '/services' },
          { name: 'Bookkeeping', url: '/services/bookkeeping' }
        ]} />
      </section>

      {/* Hero */}
      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Professional Bookkeeping Virtual Assistant Services
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Expert daily bookkeeping management. Transaction recording, expense categorization, bank reconciliation, month-end close. Your dedicated VA keeps your books clean and current. Starting at $700/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
              Get Started
            </Link>
            <Link href="/pricing" className="inline-block border-2 border-forest text-forest px-8 py-3 rounded-lg font-600 hover:bg-forest hover:text-white transition">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* What It Includes */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What Your Bookkeeping VA Handles</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Daily Tasks</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  <span>Transaction recording and categorization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  <span>Expense categorization for tax purposes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  <span>Receipt capture and filing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  <span>Vendor and customer data entry</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  <span>Chart of accounts management</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  <span>Bank feed management and transaction review</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  <span>Duplicate transaction detection</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Monthly/Quarterly Tasks</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  <span>Bank statement reconciliation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  <span>Credit card reconciliation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  <span>Month-end close preparation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  <span>Journal entries and adjusting entries</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  <span>Financial statement generation (P&L, balance sheet)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  <span>Expense report reviews</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">✓</span>
                  <span>Tax category review and optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Software We Support */}
      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8 text-center">Software We Support</h2>
          <p className="text-center text-text-mid text-lg mb-12">Your VA is trained on all major accounting platforms:</p>

          <div className="grid md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {['QuickBooks Online', 'QuickBooks Desktop', 'Xero', 'FreshBooks', 'Wave'].map((soft) => (
              <div key={soft} className="bg-white p-6 rounded-lg text-center border border-stone-warm">
                <p className="font-600 text-forest">{soft}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-text-mid mt-8">
            Not sure which software to use? We can advise during your strategy call.
          </p>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Who Benefits Most from Bookkeeping VA Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-stone-warm rounded-lg">
              <h3 className="text-xl font-600 text-forest mb-4">Small Business Owners</h3>
              <p className="text-text-mid">
                You're spending 5-8 hours/week on bookkeeping. Your bookkeeper should be you (someone who understands your business), but handled by a trained VA. Reclaim your time, keep accurate books.
              </p>
            </div>

            <div className="p-8 bg-stone-warm rounded-lg">
              <h3 className="text-xl font-600 text-forest mb-4">Businesses with Messy Books</h3>
              <p className="text-text-mid">
                Your books are 6 months behind, transactions are miscategorized, receipts are scattered. Your VA can do a catch-up project, get things organized, then maintain cleanliness going forward.
              </p>
            </div>

            <div className="p-8 bg-stone-warm rounded-lg">
              <h3 className="text-xl font-600 text-forest mb-4">Growing Businesses</h3>
              <p className="text-text-mid">
                You're scaling, transaction volume is increasing. Manual bookkeeping becomes impossible. Your VA scales with you, handling higher volume without quality degradation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pain Points */}
      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Problems We Solve</h2>

          <div className="space-y-6 max-w-3xl">
            {[
              {
                problem: 'Books are always behind',
                solution: 'Your VA keeps current, monthly close happens on time every time'
              },
              {
                problem: 'Transactions are miscategorized',
                solution: 'VA uses your chart of accounts, understands your business, categorizes accurately'
              },
              {
                problem: 'Your CPA dreads tax season because your data is messy',
                solution: 'Clean, organized books year-round means smooth tax prep'
              },
              {
                problem: 'You can\'t make decisions because financials are unreliable',
                solution: 'Accurate P&L and balance sheet every month for real business decisions'
              },
              {
                problem: 'Receipts and documentation are everywhere',
                solution: 'VA captures, organizes, and files everything systematically'
              },
              {
                problem: 'You\'ve had multiple bookkeepers and lost continuity',
                solution: 'One dedicated VA who knows your business stays with you long-term'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border-l-4 border-mint">
                <p className="font-600 text-forest mb-2">Problem: {item.problem}</p>
                <p className="text-text-mid">Solution: {item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">How Bookkeeping VA Works</h2>

          <div className="space-y-8 max-w-3xl">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-600 text-forest mb-2">Initial Setup</h3>
                <p className="text-text-mid">Your VA gets access to your accounting software, reviews your account structure, chart of accounts, and recent transaction history. If you have behind bookkeeping, we do a catch-up project first.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-600 text-forest mb-2">Daily Work</h3>
                <p className="text-text-mid">Your VA processes incoming transactions, categorizes expenses, captures receipts, and maintains your books daily or weekly depending on your volume. Communication via email/Slack as needed.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-600 text-forest mb-2">Monthly Close</h3>
                <p className="text-text-mid">At month-end, your VA reconciles all accounts, reviews transactions, makes adjusting entries, and prepares financial statements. You get a complete, accurate picture of your business finances.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-600 text-forest mb-2">Ongoing Support</h3>
                <p className="text-text-mid">Your Client Manager audits the work monthly, your VA answers questions about the books, and adjustments are made as your business evolves. Consistent, reliable bookkeeping month after month.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8 text-center">Bookkeeping Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-stone-warm">
              <h3 className="text-2xl font-bold text-forest mb-2">Part-Time</h3>
              <div className="text-4xl font-bold text-mint mb-4">$700<span className="text-xl text-text-mid">/mo</span></div>
              <p className="text-text-mid mb-6">Up to 20 hours/week. Best for small businesses with 50-200 transactions/month.</p>
              <Link href="/contact" className="block w-full bg-forest text-white py-3 rounded-lg text-center font-600 hover:bg-forest-mid transition">
                Get Started
              </Link>
            </div>

            <div className="bg-forest text-white p-8 rounded-lg border-2 border-mint scale-105">
              <h3 className="text-2xl font-bold mb-2">Full-Time</h3>
              <div className="text-4xl font-bold text-mint mb-4">$1,300<span className="text-lg text-mint-light">/mo</span></div>
              <p className="text-mint-light mb-6">Up to 40 hours/week. For growing businesses or complex accounting (multi-location, high volume).</p>
              <Link href="/contact" className="block w-full bg-mint text-forest py-3 rounded-lg text-center font-600 hover:bg-mint-light transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Services That Complement Bookkeeping</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Bank Reconciliation', desc: 'Monthly statement matching and discrepancy resolution' },
              { title: 'Financial Reporting', desc: 'Custom P&L, balance sheets, KPI dashboards' },
              { title: 'Tax Prep Support', desc: 'Year-end documentation and organization for your CPA' }
            ].map((service) => (
              <div key={service.title} className="p-6 bg-stone-warm rounded-lg border border-stone-warm hover:border-mint transition">
                <h3 className="font-600 text-forest text-lg mb-2">{service.title}</h3>
                <p className="text-text-mid text-sm mb-4">{service.desc}</p>
                <Link href="/services" className="text-mint font-600 text-sm hover:text-forest transition">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} />

      {/* CTA */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready for clean, accurate books?</h2>
          <p className="text-mint-light mb-8">Let's schedule a call and discuss your bookkeeping needs.</p>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">
            Schedule Your Strategy Call
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
