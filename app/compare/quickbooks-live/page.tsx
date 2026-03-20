import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'QuickBooks Live vs Accountant Capital VA: Which Bookkeeping Service Wins?',
  'Compare QB Live ($200-$400/mo, QBO-only, shared bookkeeper) vs Accountant Capital VA ($700-$1,300/mo, all software, dedicated person, full financial admin). See the real differences.',
  'QuickBooks Live alternative',
  '/compare/quickbooks-live'
);

const faqs = [
  {
    question: 'Can Accountant Capital VA work with software other than QuickBooks?',
    answer: 'Yes. QB Live is tied to QuickBooks Online only. Accountant Capital VA works with QuickBooks Online, Desktop, Xero, FreshBooks, Wave, and other accounting platforms. Software flexibility is a major advantage.'
  },
  {
    question: 'Is Accountant Capital VA more expensive than QB Live?',
    answer: 'Yes, upfront ($700 vs $200). But QB Live is QBO-only and bookkeeping-only. If you need invoicing, AR, expense management, or future flexibility, Accountant Capital VA includes all of this. Per-service, you\'re getting more value.'
  },
  {
    question: 'Can I switch from QB Live to Accountant Capital VA?',
    answer: 'Absolutely. Your QBO data stays yours. We import your history and continue from there. Transition is usually 1-2 weeks with zero data loss.'
  },
  {
    question: 'Does QB Live offer invoicing or payroll support?',
    answer: 'No, QB Live is bookkeeping only. Accountant Capital VA includes invoicing/AR (Part-Time) and payroll support (Full-Time). More comprehensive service in one place.'
  },
  {
    question: 'What if I use software other than QuickBooks?',
    answer: 'QB Live won\'t work. Accountant Capital VA does. If you\'re on Xero, Wave, or FreshBooks, QB Live isn\'t an option. Accountant Capital VA covers all major platforms.'
  }
];

export default function QuickBooksLiveComparePage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Compare', url: '/compare' },
          { name: 'QuickBooks Live', url: '/compare/quickbooks-live' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            QuickBooks Live vs Accountant Capital VA
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            QB Live is cheap and QBO-focused. But it's limited to QuickBooks Online, doesn't include invoicing or payroll, and uses a shared team model. Accountant Capital VA offers software flexibility, dedicated continuity, and full financial admin. See which fits your business.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started with Accountant Capital VA
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Quick Comparison: QB Live vs Accountant Capital VA</h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-mint">
                  <th className="text-left py-3 px-4 font-600 text-forest">Feature</th>
                  <th className="text-center py-3 px-4 font-600 text-forest">QB Live</th>
                  <th className="text-center py-3 px-4 font-600 text-mint">Accountant Capital VA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Monthly Cost</td>
                  <td className="text-center py-3 px-4">$200-$400/mo</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">$700-$1,300/mo</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Software Support</td>
                  <td className="text-center py-3 px-4">QBO only</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ All major platforms</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Dedicated Bookkeeper</td>
                  <td className="text-center py-3 px-4">No (shared team)</td>
                  <td className="text-center py-3 px-4 font-606 text-mint">✓ Yes (same person)</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Bookkeeping</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Invoicing & AR</td>
                  <td className="text-center py-3 px-4">No</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Included</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Expense & AP</td>
                  <td className="text-center py-3 px-4">No</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Included</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Payroll Support</td>
                  <td className="text-center py-3 px-4">No</td>
                  <td className="text-center py-3 px-4 font-606 text-mint">✓ Full-Time plan</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Client Manager</td>
                  <td className="text-center py-3 px-4">No (help desk)</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Direct contact</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Flexibility</td>
                  <td className="text-center py-3 px-4">QBO-locked</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Software agnostic</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-forest font-500">Annual Cost</td>
                  <td className="text-center py-3 px-4 font-600">$2,400-$4,800</td>
                  <td className="text-center py-3 px-4 font-606 text-mint">$8,400-$15,600</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">The Core Difference: Software Lock-In vs Flexibility</h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="p-8 bg-white rounded-lg border-l-4 border-red-600">
              <h3 className="font-600 text-forest mb-3 text-lg">QB Live's Limitation</h3>
              <p className="text-text-mid mb-3">QB Live only works with QuickBooks Online. If you ever want to switch to Xero (better for multi-user), FreshBooks (better for service businesses), or Wave (cheaper), you can't use QB Live. You're locked into QBO for the life of your business.</p>
            </div>

            <div className="p-8 bg-white rounded-lg border-l-4 border-mint">
              <h3 className="font-600 text-forest mb-3 text-lg">Accountant Capital VA's Advantage</h3>
              <p className="text-text-mid">Works with any accounting software. Starting on Xero? We support it. Want to move to QuickBooks Desktop? No problem. Using FreshBooks for invoicing + QB Online for bookkeeping? We coordinate both. Software flexibility means you're never locked in.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why People Switch from QB Live to Accountant Capital VA</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">1</span>
              <div>
                <p className="font-606 text-forest mb-1">They Outgrow QBO</p>
                <p className="text-text-mid text-sm">"QB Live was cheap, but then I wanted to switch to Xero because more of my team uses it. QB Live doesn't work with Xero. I couldn't switch without losing my bookkeeper. That was a deal-breaker. Accountant Capital VA works with both."</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">2</span>
              <div>
                <p className="font-600 text-forest mb-1">They Start Invoicing</p>
                <p className="text-text-mid text-sm">"QB Live didn't handle invoicing or AR. I was doing that myself. My VA couldn't help because QB Live scope is limited. I switched to Accountant Capital VA and now they handle invoicing and follow up on overdue accounts."</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">3</span>
              <div>
                <p className="font-606 text-forest mb-1">They Want Continuity</p>
                <p className="text-text-mid text-sm">"Different person every time with QB Live. I never knew who was handling my books. Accountant Capital VA's same-person model is so much better. They know my business inside-out."</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">4</span>
              <div>
                <p className="font-600 text-forest mb-1">They Need Full Financial Admin</p>
                <p className="text-text-mid text-sm">"QB Live is bookkeeping only. My business grew and I needed payroll support, AR management, and tax prep coordination. One VA handling everything made sense. QB Live couldn't scale with me."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">When QB Live Makes Sense</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ QBO Loyalty</p>
              <p className="text-text-mid text-sm">You love QuickBooks Online and plan to never switch. QBO is your forever platform.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ Bookkeeping Only</p>
              <p className="text-text-mid text-sm">You handle invoicing, AR, AP yourself. You just need clean books, nothing else.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">✓ Absolute Budget Constraint</p>
              <p className="text-text-mid text-sm">$200/mo is the only budget you can afford. You can't stretch to $700.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to break free from QBO lock-in?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Start with Accountant Capital VA</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
