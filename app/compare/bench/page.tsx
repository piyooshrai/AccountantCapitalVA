import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Bench vs Accountant Capital VA: Which Bookkeeping Service Is Right?',
  'Honest comparison: Bench ($249-$399/mo) vs Accountant Capital VA ($700-$1,300/mo). Dedicated bookkeeper, full financial admin, month-to-month flexibility. See the real differences.',
  'Bench alternative',
  '/compare/bench'
);

const faqs = [
  {
    question: 'Is Accountant Capital VA expensive compared to Bench?',
    answer: 'Bench is cheaper upfront ($249 Essential vs $700 Part-Time). But Bench is bookkeeping-only. Accountant Capital VA includes bookkeeping + invoicing + AP + payroll support + tax prep. Per-service, you\'re getting 5 services for less than you\'d pay separately.'
  },
  {
    question: 'Can I switch from Bench to Accountant Capital VA easily?',
    answer: 'Yes. Your books stay with you. We can import your Bench reports and QuickBooks history. Transition usually takes 1-2 weeks. We coordinate with your Bench account to ensure nothing is missed.'
  },
  {
    question: 'Does Bench do invoicing or AR management?',
    answer: 'No, Bench is bookkeeping-only. If you need invoicing, AR follow-ups, or expense management, you\'d need to handle those yourself or hire additional services. Accountant Capital VA includes these.'
  },
  {
    question: 'What if I outgrow bookkeeping-only service?',
    answer: 'Many Bench users expand to Accountant Capital VA when they need invoicing, AR, payroll support, or tax prep coordination. You get a dedicated person who handles everything instead of managing multiple services.'
  },
  {
    question: 'Is there a long-term contract with Accountant Capital VA?',
    answer: 'No. Month-to-month. You can upgrade, downgrade, or cancel anytime. Bench is annual commitment. If your needs change, flexibility with Accountant Capital VA is built-in.'
  }
];

export default function BenchComparePage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Compare', url: '/compare' },
          { name: 'Bench', url: '/compare/bench' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Bench vs Accountant Capital VA: Honest Comparison
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Bench is bookkeeping. Accountant Capital VA is your full financial partner: bookkeeping, invoicing, AP, payroll support, tax coordination. Same price tier, very different scope. See the real differences and decide what's right for your business.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started with Accountant Capital VA
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Quick Comparison: Bench vs Accountant Capital VA</h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-mint">
                  <th className="text-left py-3 px-4 font-600 text-forest">Feature</th>
                  <th className="text-center py-3 px-4 font-600 text-forest">Bench Essential</th>
                  <th className="text-center py-3 px-4 font-600 text-mint">Accountant Capital VA (Part-Time)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Monthly Cost</td>
                  <td className="text-center py-3 px-4">$249/mo</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">$700/mo</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Commitment</td>
                  <td className="text-center py-3 px-4">Annual (must commit 12 months)</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">Month-to-month (cancel anytime)</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Dedicated Bookkeeper</td>
                  <td className="text-center py-3 px-4">No (shared team)</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Yes (same person, always)</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Bookkeeping</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Bank Reconciliation</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Invoicing & AR</td>
                  <td className="text-center py-3 px-4">No (separate service: +$99/mo)</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Included</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Expense & AP Management</td>
                  <td className="text-center py-3 px-4">No (separate service: +$99/mo)</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Included</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Payroll Support</td>
                  <td className="text-center py-3 px-4">No</td>
                  <td className="text-center py-3 px-4 font-606 text-mint">✓ Included (Full-Time)</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Monthly Reports</td>
                  <td className="text-center py-3 px-4">✓ (often 2+ weeks late)</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ 5-7 days (faster)</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Client Manager Support</td>
                  <td className="text-center py-3 px-4">No (ticket-based support)</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Yes (direct contact)</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Tax Prep Coordination</td>
                  <td className="text-center py-3 px-4">Limited</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Full support</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-forest font-500">Annual Cost (12 months)</td>
                  <td className="text-center py-3 px-4 font-600">$2,988 + add-ons</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">$8,400 (all-in)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-text-mid text-sm mt-6">Bench prices accurate as of 2025. Add-ons include Invoicing ($99/mo), Expense Management ($99/mo). Accountant Capital VA includes all services in one price.</p>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">When Bench Makes Sense</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ Minimal Budget</p>
              <p className="text-text-mid text-sm">Your business barely generates bookkeeping work. You want the cheapest solution. $249/mo is the absolute floor.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ Bookkeeping Only</p>
              <p className="text-text-mid text-sm">You handle invoicing, AR, AP yourself. You just need transaction recording and reconciliation. Bench covers this.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">✓ Happy with Shared Team</p>
              <p className="text-text-mid text-sm">You don't mind that a rotating team handles your books. No continuity issues for you.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ Okay with Annual Commitment</p>
              <p className="text-text-mid text-sm">You're confident in your choice and willing to lock in for 12 months.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">When Accountant Capital VA Is Better</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ You Need More Than Bookkeeping</p>
              <p className="text-text-mid text-sm">Invoicing, AR follow-ups, expense management, or payroll. Bench requires add-ons ($99/mo each). Accountant Capital VA includes everything in one price.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">✓ You Want Continuity</p>
              <p className="text-text-mid text-sm">Same bookkeeper every day. They learn your business, your quirks, your patterns. Better accuracy and faster service.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ You Want Flexibility</p>
              <p className="text-text-mid text-sm">Month-to-month with Accountant Capital VA. If your needs change, you can scale up/down or cancel anytime. No annual lock-in.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ You Want Direct Support</p>
              <p className="text-text-mid text-sm">Client Manager you can call. Not ticket-based support. Direct relationship, not a help desk.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ You're Planning to Scale</p>
              <p className="text-text-mid text-sm">Your business is growing. You'll need invoicing, AR, payroll, tax coordination. One VA who grows with you is easier than managing multiple services.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ You Want Faster Reporting</p>
              <p className="text-text-mid text-sm">Bench often delivers reports 2+ weeks after month-end. Accountant Capital VA delivers within 5-7 days. Faster decisions with cleaner data.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Real Cost Analysis: First Year</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-lg font-600 text-forest mb-3">Bench (Essential)</h3>
              <div className="space-y-2 text-text-mid text-sm">
                <p>• Monthly: $249</p>
                <p>• Invoicing add-on: $99/mo = $1,188/year</p>
                <p>• Expense Management add-on: $99/mo = $1,188/year</p>
                <p className="pt-2 border-t border-stone">Year 1 Total: $2,988 + $2,376 = <strong className="text-forest">$5,364</strong></p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-lg font-600 text-forest mb-3">Accountant Capital VA (Part-Time)</h3>
              <div className="space-y-2 text-text-mid text-sm">
                <p>• Monthly: $700</p>
                <p>• Includes: Bookkeeping, invoicing, AR, AP, bank reconciliation</p>
                <p className="pt-2 border-t border-stone">Year 1 Total: <strong className="text-mint">$8,400</strong></p>
              </div>
            </div>

            <p className="text-sm text-text-mid text-center pt-4">
              Difference: $3,036 more for Accountant Capital VA, but you get a dedicated bookkeeper, invoicing/AR included, faster reporting, direct client manager, month-to-month flexibility, and tax prep support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why People Switch from Bench to Accountant Capital VA</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">1</span>
              <div>
                <p className="font-600 text-forest mb-1">Continuity Matters</p>
                <p className="text-text-mid text-sm">"I had a different Bench bookkeeper every month. Nobody knew my business. Errors kept happening because there was no continuity. With Accountant Capital VA, same person handles everything. Quality improved immediately."</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">2</span>
              <div>
                <p className="font-600 text-forest mb-1">Invoicing Became Easier</p>
                <p className="text-text-mid text-sm">"With Bench, I was handling invoicing myself. That meant AR follow-ups were my job. Bench didn't track overdue invoices or send reminders. With Accountant Capital VA, my VA handles invoicing AND collections. Customers pay faster."</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">3</span>
              <div>
                <p className="font-606 text-forest mb-1">Flexibility Wins</p>
                <p className="text-text-mid text-sm">"I'm on a 12-month contract with Bench. My needs changed and I wanted to pause for a month. Bench wouldn't let me. Accountant Capital VA is month-to-month. Total freedom."</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">4</span>
              <div>
                <p className="font-600 text-forest mb-1">Support Is Faster</p>
                <p className="text-text-mid text-sm">"Bench support is ticket-based. You submit a question and wait. I have a Client Manager with Accountant Capital VA. I can email or call directly. Issues get resolved same day instead of 3-5 business days."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-20 bg-forest text-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-white mb-8">Ready to Upgrade?</h2>

          <div className="space-y-6 text-center">
            <p className="text-lg text-mint-light">
              Bench works for minimal bookkeeping needs. But if you want a dedicated bookkeeper, invoicing support, AR management, and direct Client Manager access—Accountant Capital VA is the upgrade your business needs.
            </p>

            <div>
              <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition mb-4">
                Start With Accountant Capital VA
              </Link>
              <p className="text-mint-light text-sm">Month-to-month. 1-2 week trial period. No risk.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
