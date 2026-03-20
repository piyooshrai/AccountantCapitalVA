import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'How Much Does a Bookkeeping Virtual Assistant Cost in 2025?',
  'Pricing breakdown for bookkeeping VAs. Compare Bench ($249-$499), Pilot ($599+), local bookkeepers ($45K-$80K), freelancers, vs Accountant Capital VA ($700-$1,300). Find the best fit for your budget.',
  'bookkeeping virtual assistant cost',
  '/blog/bookkeeping-va-cost'
);

export default function BlogPost() {
  return (
    <>
      <Header />
      <article className="max-w-3xl mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Blog', url: '/blog' },
          { name: 'Bookkeeping VA Cost', url: '/blog/bookkeeping-va-cost' }
        ]} />

        <div className="py-12">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-4">
            How Much Does a Bookkeeping Virtual Assistant Cost in 2025?
          </h1>
          <p className="text-lg text-text-mid mb-12">
            A realistic pricing guide comparing Bench, Pilot, QuickBooks Live, local hires, and dedicated VAs. What you'll pay, what you get, and what actually makes sense for your business.
          </p>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-fraunces font-600 text-forest mb-4">The Short Answer</h2>
            <p className="text-text-mid mb-6">
              Bookkeeping VA costs range from $200/month for AI-powered services to $80K+/year for a full-time in-house employee. Here's the breakdown:
            </p>
            <ul className="space-y-3 text-text-mid mb-8">
              <li><strong>Bench:</strong> $249-$499/month (shared bookkeeper, QBO-only)</li>
              <li><strong>Pilot:</strong> $599-$899/month (dedicated bookkeeper, QBO-only)</li>
              <li><strong>QuickBooks Live:</strong> $200-$400/month (part-time, QBO-only)</li>
              <li><strong>Local bookkeeper hire:</strong> $45K-$80K/year + benefits + turnover costs</li>
              <li><strong>Upwork/Fiverr freelancers:</strong> $15-$50/hour (no continuity, high risk)</li>
              <li><strong>Accountant Capital VA:</strong> $700-$1,300/month (dedicated, all platforms)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-fraunces font-600 text-forest mb-6">1. Bench ($249-$499/month)</h2>
            <div className="p-6 bg-stone rounded-lg mb-6">
              <p className="text-text-mid mb-4">
                <strong>Model:</strong> Software-first, shared bookkeeper model. Essential ($249), Premium ($399), and Plus ($499) tiers.
              </p>
              <p className="text-text-mid">
                <strong>What You Get:</strong> Monthly bank/CC reconciliation, transaction categorization, profit & loss statement, basic tax category setup. All in QuickBooks Online.
              </p>
            </div>
            <h3 className="text-xl font-600 text-forest mb-4">Pros:</h3>
            <ul className="space-y-2 text-text-mid mb-6">
              <li>✓ Lowest entry price ($249/month)</li>
              <li>✓ Beginner-friendly interface</li>
              <li>✓ All-inclusive pricing (no surprises)</li>
              <li>✓ Fast onboarding (1-2 weeks)</li>
            </ul>
            <h3 className="text-xl font-600 text-forest mb-4">Cons:</h3>
            <ul className="space-y-2 text-text-mid mb-6">
              <li>✗ Shared bookkeeper across multiple clients (less continuity)</li>
              <li>✗ QuickBooks Online only (no Xero, FreshBooks, Gusto)</li>
              <li>✗ Limited to basic bookkeeping (no invoicing, AR, payroll support)</li>
              <li>✗ No tax optimization or strategy</li>
              <li>✗ Annual contract required</li>
            </ul>
            <p className="text-text-mid bg-stone p-4 rounded-lg">
              <strong>Best for:</strong> Solopreneurs with simple, QBO-only books, annual revenue under $500K, who want the cheapest option.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-fraunces font-600 text-forest mb-6">2. Pilot ($599-$899/month)</h2>
            <div className="p-6 bg-stone rounded-lg mb-6">
              <p className="text-text-mid mb-4">
                <strong>Model:</strong> Dedicated bookkeeper, but each bookkeeper manages multiple clients. QuickBooks Online only. Starter ($599), Standard ($699), Premium ($899).
              </p>
              <p className="text-text-mid">
                <strong>What You Get:</strong> Monthly bookkeeping, reconciliation, financial statements, tax prep support. More personal than Bench.
              </p>
            </div>
            <h3 className="text-xl font-600 text-forest mb-4">Pros:</h3>
            <ul className="space-y-2 text-text-mid mb-6">
              <li>✓ Dedicated bookkeeper assigned to you</li>
              <li>✓ Slightly more personalized than Bench</li>
              <li>✓ Tax prep support included</li>
              <li>✓ Month-to-month flexibility</li>
            </ul>
            <h3 className="text-xl font-600 text-forest mb-4">Cons:</h3>
            <ul className="space-y-2 text-text-mid mb-6">
              <li>✗ Still not fully dedicated (one VA manages 20+ clients)</li>
              <li>✗ QuickBooks Online only</li>
              <li>✗ Pricing scales with your transaction volume (can get expensive)</li>
              <li>✗ No invoicing, AR, payroll, or advanced services</li>
              <li>✗ Limited to bookkeeping basics</li>
            </ul>
            <p className="text-text-mid bg-stone p-4 rounded-lg">
              <strong>Best for:</strong> Small businesses ($500K-$2M) that want more personal attention than Bench but don't need full-time dedicated service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-fraunces font-600 text-forest mb-6">3. Local Bookkeeper Hire ($45K-$80K+/year)</h2>
            <div className="p-6 bg-stone rounded-lg mb-6">
              <p className="text-text-mid mb-4">
                <strong>Model:</strong> Full-time W-2 employee. You pay salary, benefits, payroll taxes, training, and manage turnover.
              </p>
              <p className="text-text-mid">
                <strong>What You Get:</strong> Dedicated person, full-time availability, all accounting software, strategic input, relationship building.
              </p>
            </div>
            <h3 className="text-xl font-600 text-forest mb-4">True Total Cost Breakdown:</h3>
            <div className="space-y-3 text-text-mid mb-6">
              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                <p>• Salary: $50K-$70K/year</p>
                <p>• Payroll taxes (FICA, FUTA, SUTA): $5K-$8K/year</p>
                <p>• Health insurance, 401k, benefits: $12K-$18K/year</p>
                <p>• Recruitment & onboarding: $3K-$8K (one-time)</p>
                <p>• Training & development: $2K-$5K/year</p>
                <p>• Equipment, software licenses, workspace: $2K-$5K/year</p>
                <p>• Turnover cost when they leave: $8K-$15K (hiring/training replacement)</p>
                <p className="pt-2 border-t border-red-600 font-600 text-red-900">Total Year 1: $82K-$129K</p>
                <p className="font-600 text-red-900">Total Year 2+: $79K-$116K (if no turnover)</p>
              </div>
            </div>
            <h3 className="text-xl font-600 text-forest mb-4">Pros:</h3>
            <ul className="space-y-2 text-text-mid mb-6">
              <li>✓ True dedication and loyalty</li>
              <li>✓ Full-time availability</li>
              <li>✓ Any accounting platform</li>
              <li>✓ Can grow into other roles</li>
            </ul>
            <h3 className="text-xl font-600 text-forest mb-4">Cons:</h3>
            <ul className="space-y-2 text-text-mid mb-6">
              <li>✗ EXPENSIVE total cost ($80K-$130K/year)</li>
              <li>✗ High turnover risk (turnover costs ~$12K-$15K per replacement)</li>
              <li>✗ Recruitment & onboarding burden</li>
              <li>✗ Benefits & payroll admin overhead</li>
              <li>✗ Inflexible (can't reduce if business slows)</li>
              <li>✗ You become a manager</li>
            </ul>
            <p className="text-text-mid bg-stone p-4 rounded-lg">
              <strong>Best for:</strong> Large, mature businesses ($10M+ revenue) that can afford full-time dedicated staff and want long-term stability.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-fraunces font-600 text-forest mb-6">4. Upwork/Fiverr Freelancers ($15-$50/hour)</h2>
            <div className="p-6 bg-stone rounded-lg mb-6">
              <p className="text-text-mid mb-4">
                <strong>Model:</strong> Freelance marketplace. You hire directly and manage the relationship. Cost varies wildly based on skill.
              </p>
              <p className="text-text-mid">
                <strong>What You Get:</strong> Variable quality, no vetting, no continuity, no accountability, no insurance.
              </p>
            </div>
            <h3 className="text-xl font-600 text-forest mb-4">Cost Estimate:</h3>
            <p className="text-text-mid mb-4">
              Assuming you need 15 hours/week @ $25/hour (average):
            </p>
            <p className="text-text-mid mb-4">
              15 hours × $25 × 4.3 weeks = $1,600/month = $19,200/year
            </p>
            <h3 className="text-xl font-600 text-forest mb-4">Pros:</h3>
            <ul className="space-y-2 text-text-mid mb-6">
              <li>✓ Flexible (hire only when needed)</li>
              <li>✓ No employment overhead</li>
              <li>✓ Easy to find</li>
            </ul>
            <h3 className="text-xl font-600 text-forest mb-4">Cons:</h3>
            <ul className="space-y-2 text-text-mid mb-6">
              <li>✗ No vetting or background checks</li>
              <li>✗ High turnover (freelancers disappear)</li>
              <li>✗ Variable quality (risky for tax)</li>
              <li>✗ No continuity or accountability</li>
              <li>✗ No insurance or recourse if they make mistakes</li>
              <li>✗ You become their manager (5-10 hours/week of your time)</li>
              <li>✗ Security risk (they have access to sensitive data)</li>
              <li>✗ Hidden cost: time spent on management = $10K-$20K of your value lost</li>
            </ul>
            <p className="text-text-mid bg-stone p-4 rounded-lg">
              <strong>Best for:</strong> Short-term, non-critical tasks. NOT recommended for ongoing bookkeeping (too risky).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-fraunces font-600 text-forest mb-6">5. Accountant Capital VA ($700-$1,300/month)</h2>
            <div className="p-6 bg-stone rounded-lg mb-6">
              <p className="text-text-mid mb-4">
                <strong>Model:</strong> Dedicated VA assigned to you. Fully vetted, insured, accountable. Works with any software. Part-Time ($700) or Full-Time ($1,300).
              </p>
              <p className="text-text-mid">
                <strong>What You Get:</strong> Dedicated person, full accountability, vetting, insurance, QuickBooks/Xero/FreshBooks/Gusto/Bill.com support, tax optimization, strategic input.
              </p>
            </div>
            <h3 className="text-xl font-600 text-forest mb-4">Pricing:</h3>
            <ul className="space-y-2 text-text-mid mb-6">
              <li>• Part-Time: $700/month (20 hours/week)</li>
              <li>• Full-Time: $1,300/month (40 hours/week)</li>
              <li>• No contracts, month-to-month</li>
              <li>• All-in pricing (no hidden fees)</li>
            </ul>
            <h3 className="text-xl font-600 text-forest mb-4">Pros:</h3>
            <ul className="space-y-2 text-text-mid mb-6">
              <li>✓ True dedication (same person every day)</li>
              <li>✓ Fully vetted with background checks</li>
              <li>✓ Liability insurance (you're protected)</li>
              <li>✓ Works with any accounting software</li>
              <li>✓ Flexible month-to-month (no contracts)</li>
              <li>✓ MUCH cheaper than hiring locally ($60K-$130K savings/year)</li>
              <li>✓ No recruitment, training, or turnover burden</li>
              <li>✓ Strategic input and tax optimization</li>
            </ul>
            <h3 className="text-xl font-600 text-forest mb-4">Cons:</h3>
            <ul className="space-y-2 text-text-mid mb-6">
              <li>✗ More expensive than Bench/Pilot (but much better value)</li>
            </ul>
            <p className="text-text-mid bg-stone p-4 rounded-lg">
              <strong>Best for:</strong> Growing businesses ($500K-$10M) that want dedicated, vetted, accountable bookkeeping without the cost/burden of hiring locally.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-fraunces font-600 text-forest mb-6">Cost Comparison: Annual Breakdown</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm bg-white rounded-lg">
                <thead>
                  <tr className="bg-forest text-white">
                    <th className="p-3 text-left">Service</th>
                    <th className="p-3 text-center">Monthly Cost</th>
                    <th className="p-3 text-center">Annual Cost</th>
                    <th className="p-3 text-center">True Total Cost*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone">
                  <tr>
                    <td className="p-3">Bench</td>
                    <td className="p-3 text-center">$249-$499</td>
                    <td className="p-3 text-center">$3K-$6K</td>
                    <td className="p-3 text-center">$3K-$6K</td>
                  </tr>
                  <tr>
                    <td className="p-3">Pilot</td>
                    <td className="p-3 text-center">$599-$899</td>
                    <td className="p-3 text-center">$7K-$11K</td>
                    <td className="p-3 text-center">$7K-$11K</td>
                  </tr>
                  <tr>
                    <td className="p-3">QuickBooks Live</td>
                    <td className="p-3 text-center">$200-$400</td>
                    <td className="p-3 text-center">$2K-$5K</td>
                    <td className="p-3 text-center">$2K-$5K</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="p-3 font-600">Local Hire</td>
                    <td className="p-3 text-center font-600">$4K-$6.5K</td>
                    <td className="p-3 text-center font-600">$80K-$130K</td>
                    <td className="p-3 text-center font-600">$82K-$129K</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="p-3 font-600">Upwork Freelancer</td>
                    <td className="p-3 text-center font-600">$1.6K</td>
                    <td className="p-3 text-center font-600">$19K</td>
                    <td className="p-3 text-center font-600">$39K** + risk</td>
                  </tr>
                  <tr className="bg-mint/10">
                    <td className="p-3 font-600">Accountant Capital VA</td>
                    <td className="p-3 text-center font-600">$700-$1,300</td>
                    <td className="p-3 text-center font-600">$8K-$16K</td>
                    <td className="p-3 text-center font-600">$8K-$16K</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-text-light">
              *True cost includes all overhead, turnover, benefits, management time<br/>
              **Freelancer true cost includes ~$10K-$20K of your management time value
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-fraunces font-600 text-forest mb-6">Which Is Right for Your Business?</h2>
            <div className="space-y-4">
              <div className="p-4 bg-stone rounded-lg">
                <p className="font-600 text-forest mb-2">Choose Bench if...</p>
                <p className="text-text-mid text-sm">You have <$500K revenue, simple books, QBO only, and price is your #1 concern.</p>
              </div>
              <div className="p-4 bg-stone rounded-lg">
                <p className="font-606 text-forest mb-2">Choose Pilot if...</p>
                <p className="text-text-mid text-sm">You want more personal attention than Bench but don't need full dedication ($500K-$2M revenue).</p>
              </div>
              <div className="p-4 bg-stone rounded-lg">
                <p className="font-606 text-forest mb-2">Choose Local Hire if...</p>
                <p className="text-text-mid text-sm">You're a $10M+ business with budget for $80K-$130K/year and want a long-term strategic hire.</p>
              </div>
              <div className="p-4 bg-stone rounded-lg">
                <p className="font-600 text-forest mb-2">Choose Accountant Capital VA if...</p>
                <p className="text-text-mid text-sm">You want dedicated, vetted, accountable bookkeeping without hiring overhead. Best value for $500K-$10M businesses.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 p-6 bg-mint/10 border-2 border-mint rounded-lg">
            <h2 className="text-2xl font-fraunces font-600 text-forest mb-4">The Bottom Line</h2>
            <p className="text-text-mid mb-4">
              Bookkeeping VA costs are a spectrum. Cheap ($249/month) gets you minimal service. Expensive ($80K+/year) gets you dedicated staff with overhead. Accountant Capital VA ($700-$1,300/month) is the sweet spot: dedicated, vetted, accountable, flexible, and a fraction of the cost of hiring locally.
            </p>
            <p className="text-text-mid font-600">
              Most growing businesses ($500K-$5M revenue) save $50K-$100K annually by switching from local hires to a dedicated VA.
            </p>
          </section>

          <div className="py-12 border-t border-stone">
            <p className="text-center text-text-mid">
              Ready to see how much you could save? <Link href="/contact" className="text-forest font-600 hover:text-forest-mid">Get a free cost analysis</Link>.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
