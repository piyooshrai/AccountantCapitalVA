import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Accounts Payable Virtual Assistant Services',
  'Expert AP management. Bill processing, expense categorization, payment scheduling, vendor management. Bill.com, Expensify integration. Starting at $700/mo.',
  'accounts payable virtual assistant',
  '/services/expense-ap'
);

export default function ExpenseAPPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Services', url: '/services' },
          { name: 'Expense & AP', url: '/services/expense-ap' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Accounts Payable & Expense Management VA
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Expert bill processing, expense categorization, vendor management, payment scheduling. Your vendor relationships stay strong while your books stay organized. Starting at $700/month.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What AP VA Services Include</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Bill Processing</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Bill capture and data entry</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>PO matching (three-way match)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Invoice verification</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Duplicate detection</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Expense categorization for tax</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Bill date vs. receipt date tracking</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Payment & Vendor Management</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Payment scheduling and execution</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Early payment discount tracking</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>1099 contractor tracking</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Vendor master list maintenance</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Vendor payment history</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Expense policy compliance</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Why AP Management Matters</h2>

          <div className="space-y-4">
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-1">⚡ Optimal Cash Timing</p>
              <p className="text-text-mid text-sm">Pay early for discounts, or hold payment until due date strategically. Your VA tracks all due dates.</p>
            </div>
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-1">📊 Accurate Expense Tracking</p>
              <p className="text-text-mid text-sm">Expenses categorized properly for tax purposes. Your CPA loves accurate, organized expense records.</p>
            </div>
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-1">🔍 Fraud Prevention</p>
              <p className="text-text-mid text-sm">Duplicate detection, invoice verification, and three-way matching prevent unauthorized payments.</p>
            </div>
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-1">🤝 Vendor Relationships</p>
              <p className="text-text-mid text-sm">On-time payments maintain good vendor relationships. Your VA keeps payment schedules consistent.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8 text-center">Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-stone-warm">
              <h3 className="text-2xl font-bold text-forest mb-4">Part-Time: $700/mo</h3>
              <p className="text-text-mid mb-6">Bill processing for small businesses (30-100 bills/month).</p>
              <Link href="/contact" className="block w-full bg-forest text-white py-3 rounded-lg text-center font-600 hover:bg-forest-mid transition">Get Started</Link>
            </div>

            <div className="bg-forest text-white p-8 rounded-lg border-2 border-mint">
              <h3 className="text-2xl font-bold mb-4">Full-Time: $1,300/mo</h3>
              <p className="text-mint-light mb-6">Complete AP & expense management (100+ bills/month with vendor management).</p>
              <Link href="/contact" className="block w-full bg-mint text-forest py-3 rounded-lg text-center font-600 hover:bg-mint-light transition">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to streamline vendor payments?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your Strategy Call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
