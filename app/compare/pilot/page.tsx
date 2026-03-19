import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Pilot vs Accountant Capital VA: Best Bookkeeping Service for Your Startup?',
  'Compare Pilot ($499-$699/mo, startup-focused) vs Accountant Capital VA ($700-$1,300/mo, full financial admin). Dedicated bookkeeper, invoicing, AR, AP, payroll support. See which is right.',
  'Pilot alternative',
  '/compare/pilot'
);

const faqs = [
  {
    question: 'Is Pilot cheaper than Accountant Capital VA?',
    answer: 'Pilot Starter is $499 (vs $700 Part-Time). But Pilot scales with your expenses—the more you spend, the more you pay. Accountant Capital VA is flat-rate ($700 or $1,300). If your expenses are high, Pilot can cost more. And Pilot doesn\'t include invoicing, AP, or payroll.'
  },
  {
    question: 'Can I switch from Pilot to Accountant Capital VA?',
    answer: 'Yes. We can import your Pilot reports and QuickBooks history. Transition is typically 1-2 weeks. All your data stays yours, and we ensure no transactions are missed during the switch.'
  },
  {
    question: 'Does Pilot handle invoicing or AR?',
    answer: 'Pilot focuses on bookkeeping. Invoicing, AR follow-ups, and collections are not included. If you need these, Accountant Capital VA includes them in both Part-Time and Full-Time plans.'
  },
  {
    question: 'What if I grow beyond startup phase?',
    answer: 'Many Pilot users outgrow the service as they need invoicing, AR, payroll, or tax coordination. Accountant Capital VA is designed to grow with you—one person handles everything as complexity increases.'
  },
  {
    question: 'Does Pilot do payroll support?',
    answer: 'No, Pilot is bookkeeping-only. Payroll coordination is available only through Accountant Capital VA Full-Time ($1,300/mo).'
  }
];

export default function PilotComparePage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Compare', url: '/compare' },
          { name: 'Pilot', url: '/compare/pilot' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Pilot vs Accountant Capital VA: Bookkeeping for Growth
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Pilot is startup-focused with variable pricing (scales with expenses). Accountant Capital VA is flat-rate with full financial admin (bookkeeping, invoicing, AP, payroll). See which aligns with your business model and growth plans.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started with Accountant Capital VA
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Quick Comparison: Pilot vs Accountant Capital VA</h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-mint">
                  <th className="text-left py-3 px-4 font-600 text-forest">Feature</th>
                  <th className="text-center py-3 px-4 font-600 text-forest">Pilot Starter</th>
                  <th className="text-center py-3 px-4 font-600 text-mint">Accountant Capital VA (Part-Time)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Base Price</td>
                  <td className="text-center py-3 px-4">$499/mo (+ expenses scaling)</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">$700/mo (flat-rate)</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Pricing Model</td>
                  <td className="text-center py-3 px-4">Variable (scales with expenses)</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">Fixed (no surprises)</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Commitment</td>
                  <td className="text-center py-3 px-4">Month-to-month</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">Month-to-month</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Dedicated Bookkeeper</td>
                  <td className="text-center py-3 px-4">No (Pilot model)</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Yes (same person always)</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Bookkeeping</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Invoicing & AR</td>
                  <td className="text-center py-3 px-4">No</td>
                  <td className="text-center py-3 px-4 font-606 text-mint">✓ Included</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Expense & AP</td>
                  <td className="text-center py-3 px-4">No</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Included</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Payroll Support</td>
                  <td className="text-center py-3 px-4">No</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Full-Time plan</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Tax Coordination</td>
                  <td className="text-center py-3 px-4">Limited</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Full support</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Client Manager</td>
                  <td className="text-center py-3 px-4">No (help desk)</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Direct contact</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-forest font-500">Estimated Annual Cost</td>
                  <td className="text-center py-3 px-4">$5,988 + variable fees</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">$8,400 (all-in)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-text-mid text-sm mt-6">Pilot pricing scales with expenses. Higher expenses = higher fees. Accountant Capital VA is flat-rate, regardless of transaction volume.</p>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Pilot's Strengths (Where It Makes Sense)</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ Startup-Friendly Branding</p>
              <p className="text-text-mid text-sm">Pilot markets directly to startups and early-stage companies. The messaging resonates: "bookkeeping for startups." Community-driven positioning.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ Low-Expense Startups</p>
              <p className="text-text-mid text-sm">If your startup has minimal expenses (maybe $5K/month), Pilot's variable pricing keeps costs down. You only pay for what you use.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">✓ Month-to-Month Flexibility</p>
              <p className="text-text-mid text-sm">Like Accountant Capital VA, you can cancel anytime. No annual commitment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Where Accountant Capital VA Wins</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ Predictable Pricing</p>
              <p className="text-text-mid text-sm">$700/mo. No surprise scaling charges. Especially valuable if your expenses are high or variable month-to-month.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">✓ Invoicing & AR Included</p>
              <p className="text-text-mid text-sm">Pilot doesn't handle invoicing or collections. Accountant Capital VA does. If you invoice customers, this is a huge advantage.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ Expense & AP Included</p>
              <p className="text-text-mid text-sm">Bill processing, vendor management, payment scheduling. Pilot requires you to handle this yourself.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ Dedicated Bookkeeper</p>
              <p className="text-text-mid text-sm">Same person handles your books every day. Continuity and deeper knowledge of your business. Pilot's model is different.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ Direct Client Manager</p>
              <p className="text-text-mid text-sm">You have a dedicated point of contact. Not a ticketed support queue. Issues get resolved faster.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">✓ Payroll Ready</p>
              <p className="text-text-mid text-sm">When you hire your first employee, upgrade to Full-Time ($1,300/mo) and your VA handles payroll support. Pilot requires external payroll solution.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Real Cost Example: B2B SaaS Startup</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-center text-forest font-600">Scenario: $250K annual expenses, invoicing 20 customers</p>

            <div>
              <h3 className="text-lg font-600 text-forest mb-3">Pilot Model</h3>
              <div className="space-y-2 text-text-mid text-sm bg-white p-6 rounded-lg">
                <p>• Base: $499/mo = $5,988/year</p>
                <p>• Expense scaling fee (variable): ~$150-200/mo = $1,800-2,400/year</p>
                <p>• Invoicing handling (you or external tool): $0-300/year</p>
                <p className="pt-2 border-t border-stone"><strong className="text-forest">Year 1 Total: ~$7,788-8,288</strong></p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-600 text-forest mb-3">Accountant Capital VA</h3>
              <div className="space-y-2 text-text-mid text-sm bg-white p-6 rounded-lg border-2 border-mint">
                <p>• Part-Time: $700/mo = $8,400/year</p>
                <p>• Includes: Bookkeeping, invoicing, AR tracking, all built-in</p>
                <p className="pt-2 border-t border-mint"><strong className="text-mint">Year 1 Total: $8,400</strong></p>
              </div>
            </div>

            <p className="text-sm text-center text-text-mid">
              Cost is roughly equivalent. But Accountant Capital VA includes invoicing/AR (saving you time/money), provides a dedicated bookkeeper, and offers direct Client Manager support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why Startups Upgrade to Accountant Capital VA</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">1</span>
              <div>
                <p className="font-600 text-forest mb-1">They Start Invoicing</p>
                <p className="text-text-mid text-sm">"Pilot got us through the MVP phase. But once we started invoicing customers, Pilot didn't handle AR or collections. I was doing that myself or using a separate tool. With Accountant Capital VA, invoicing and collections are integrated. Customers pay faster."</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">2</span>
              <div>
                <p className="font-606 text-forest mb-1">They Want Predictable Costs</p>
                <p className="text-text-mid text-sm">"I hated not knowing what my bookkeeping would cost month-to-month with Pilot. Variable pricing is hard to budget for. Accountant Capital VA is $700—period. Easy to forecast."</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">3</span>
              <div>
                <p className="font-600 text-forest mb-1">They Hire Their First Employee</p>
                <p className="text-text-mid text-sm">"Once I hired my first employee, payroll became critical. Pilot doesn't handle it. I had to use a separate payroll service. Accountant Capital VA Full-Time includes payroll support. One VA handles everything."</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">4</span>
              <div>
                <p className="font-600 text-forest mb-1">They Want a Real Person</p>
                <p className="text-text-mid text-sm">"With Pilot, I didn't have a dedicated person. It felt impersonal. With Accountant Capital VA, my VA knows my business, my customers, my financial goals. Better service, better relationship."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-20 bg-forest text-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-white mb-8">Ready to Grow Beyond Startup Bookkeeping?</h2>

          <div className="space-y-6 text-center">
            <p className="text-lg text-mint-light">
              Pilot works for minimal bookkeeping in early-stage mode. But as your startup grows and you need invoicing, AR, expense management, and payroll—Accountant Capital VA becomes the natural choice.
            </p>

            <div>
              <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition mb-4">
                Switch to Accountant Capital VA
              </Link>
              <p className="text-mint-light text-sm">Month-to-month flexibility. Flat-rate pricing. Full financial admin.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
