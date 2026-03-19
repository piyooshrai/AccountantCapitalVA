import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Bank Reconciliation Virtual Assistant Services',
  'Expert bank reconciliation VA. Monthly statement matching, discrepancy identification, outstanding check tracking. QuickBooks, Xero. Starting at $700/mo.',
  'bank reconciliation virtual assistant',
  '/services/bank-reconciliation'
);

const faqs = [
  {
    question: 'How often should I reconcile my bank accounts?',
    answer: 'Monthly is standard, matching your bank statements. High-volume businesses sometimes do weekly reconciliations for tighter cash management. Your VA can customize the frequency based on your needs.'
  },
  {
    question: 'What if reconciliations reveal discrepancies?',
    answer: 'Your VA investigates: outstanding checks, deposits in transit, timing differences, bank errors, or transaction posting issues. They document findings and present recommendations. Most issues are resolved within days.'
  },
  {
    question: 'Can a VA reconcile multiple bank accounts?',
    answer: 'Absolutely. Many clients have 2-5 business accounts, credit cards, and merchant processor accounts. Your VA can manage all of them, reconciling on a monthly or transaction-by-transaction basis as needed.'
  },
  {
    question: 'What about merchant account and payment processor reconciliation?',
    answer: 'Yes, we handle those too. Stripe, Square, PayPal, etc. Your VA matches processor deposits to bank deposits, checks fees, and flags any issues.'
  },
  {
    question: 'How does this prevent fraud or theft?',
    answer: 'Reconciliation is your control mechanism. By matching transactions to bank statements monthly, unauthorized activity gets flagged immediately. Regular reconciliation by someone other than who processes transactions is a key fraud prevention control.'
  }
];

export default function BankReconciliationPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Services', url: '/services' },
          { name: 'Bank Reconciliation', url: '/services/bank-reconciliation' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Bank Reconciliation Virtual Assistant Services
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Expert monthly bank reconciliation. Discrepancy identification, outstanding check tracking, multi-account management. Your books match your bank statements. Starting at $700/month.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What Bank Reconciliation Includes</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Core Reconciliation Tasks</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Monthly statement matching</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Outstanding check tracking</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Deposits in transit identification</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Cleared transaction verification</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Discrepancy investigation</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Bank error identification</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Reconciliation documentation</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Account Types</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Checking accounts</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Savings accounts</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Money market accounts</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Credit card accounts</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Merchant processor accounts (Stripe, Square, PayPal)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Loan payment accounts</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Multi-account reconciliation</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Why Bank Reconciliation Matters</h2>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Financial Accuracy</h3>
                <p className="text-text-mid leading-relaxed">
                  If your books don't match your bank statement, you don't know your true cash position. Reconciliation ensures your financial records are accurate, which is critical for decision-making, loan applications, and investor reporting.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border-l-4 border-mint">
                <p className="font-600 text-forest mb-2">Real Impact</p>
                <p className="text-text-mid text-sm">One client discovered a $5,000 bank error during monthly reconciliation. Their VA caught it immediately. Without reconciliation, it would have gone unnoticed for months.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Fraud Prevention & Detection</h3>
                <p className="text-text-mid leading-relaxed">
                  Reconciliation is your control mechanism. Unauthorized transactions, embezzlement, or account errors get flagged immediately. Monthly reconciliation by someone independent of transaction processing is a key fraud prevention control.
                </p>
              </div>
              <div className="order-1 md:order-2 bg-white p-8 rounded-lg border-l-4 border-mint">
                <p className="font-600 text-forest mb-2">Control Principle</p>
                <p className="text-text-mid text-sm">CPAs and auditors require evidence that accounts are reconciled monthly. It's a standard audit control that demonstrates financial integrity.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Operational Efficiency</h3>
                <p className="text-text-mid leading-relaxed">
                  You don't have to spend time chasing outstanding items or investigating why your books don't match. Your VA handles all of that systematically. You just review the summary report.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border-l-4 border-mint">
                <p className="font-600 text-forest mb-2">Time Savings</p>
                <p className="text-text-mid text-sm">A business owner typically spends 2-4 hours monthly on reconciliation. Your VA does it in less time, with better accuracy, every month.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">The Reconciliation Process</h2>

          <div className="space-y-6 max-w-3xl">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Download Bank Statement</h3>
                <p className="text-text-mid">Your VA pulls the monthly bank statement and imports it into your accounting software (QuickBooks, Xero, etc.)</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Match Transactions</h3>
                <p className="text-text-mid">Compare recorded transactions in your software to cleared transactions on the bank statement</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Identify Uncleared Items</h3>
                <p className="text-text-mid">Determine which items haven't cleared yet (outstanding checks, deposits in transit, pending transactions)</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Investigate Discrepancies</h3>
                <p className="text-text-mid">If something doesn't match, your VA digs into the details: timing difference, bank error, duplicate charge, or data entry mistake</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Mark as Reconciled</h3>
                <p className="text-text-mid">Once everything matches, your VA marks the account as reconciled and documents the process</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">6</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Report Summary</h3>
                <p className="text-text-mid">You receive a summary showing account balance, cleared items, outstanding items, and any notes about discrepancies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12 text-center">Bank Reconciliation Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-stone-warm">
              <h3 className="text-2xl font-bold text-forest mb-2">Part-Time</h3>
              <div className="text-4xl font-bold text-mint mb-4">$700<span className="text-xl text-text-mid">/mo</span></div>
              <p className="text-text-mid mb-6">Monthly reconciliation for 2-5 accounts. Best for small businesses.</p>
              <Link href="/contact" className="block w-full bg-forest text-white py-3 rounded-lg text-center font-600 hover:bg-forest-mid transition">
                Get Started
              </Link>
            </div>

            <div className="bg-forest text-white p-8 rounded-lg border-2 border-mint scale-105">
              <h3 className="text-2xl font-bold mb-2">Full-Time</h3>
              <div className="text-4xl font-bold text-mint mb-4">$1,300<span className="text-lg text-mint-light">/mo</span></div>
              <p className="text-mint-light mb-6">Multi-account + credit card + payment processor reconciliation. Growing businesses.</p>
              <Link href="/contact" className="block w-full bg-mint text-forest py-3 rounded-lg text-center font-600 hover:bg-mint-light transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to know your true cash position?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">
            Schedule Your Strategy Call
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
