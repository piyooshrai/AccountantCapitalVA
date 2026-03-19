import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Restaurant Bookkeeping Virtual Assistant',
  'Expert restaurant and hospitality accounting VA. Daily sales reconciliation, inventory tracking, food cost analysis, payroll management, compliance reporting. Toast, Square, TouchBistro integration. Starting at $1,200/mo.',
  'restaurant bookkeeping virtual assistant',
  '/industries/restaurant-hospitality'
);

const faqs = [
  {
    question: 'How do you track daily sales from our POS system?',
    answer: 'We pull daily sales data from your POS (Toast, Square, TouchBistro), reconcile it to cash/card deposits, and record sales in your accounting software. By day 2, you see yesterday\'s sales recorded accurately.'
  },
  {
    question: 'Can you help with food cost tracking?',
    answer: 'Yes. We track opening inventory, purchases, and ending inventory monthly to calculate food cost percentage. Food cost trends show whether menu pricing is right or waste is increasing.'
  },
  {
    question: 'What about payroll? We have high turnover.',
    answer: 'Your VA manages payroll through Gusto or ADP, tracks hours from your time system, handles tax compliance, and prepares payroll taxes. Turnover doesn\'t disrupt payroll accuracy.'
  },
  {
    question: 'How do you handle multiple locations?',
    answer: 'Each location gets its own set of accounts. Sales, labor, food cost, rent—all tracked separately. You see P&L by location to identify top performers and problem areas.'
  },
  {
    question: 'Can you help with seasonal tax planning?',
    answer: 'Yes. Restaurants have seasonal cash flow (Q4 busy, January slow). Your VA tracks this monthly and works with your CPA to plan tax payments and estimated tax to match seasonal income.'
  }
];

export default function RestaurantHospitalityPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Industries', url: '/industries' },
          { name: 'Restaurant & Hospitality', url: '/industries/restaurant-hospitality' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Restaurant Bookkeeping Virtual Assistant
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Expert accounting for restaurants and hospitality. Daily sales reconciliation, food cost tracking, inventory management, payroll processing, compliance reporting. Know your P&L before the month ends. Starting at $1,200/month.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">The Restaurant Accounting Challenge</h2>

          <div className="space-y-6">
            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Daily Operations Chaos</p>
              <p className="text-text-mid">Cash, credit cards, gift cards, online orders—money comes in from 5 different sources. Your POS shows $8,000 in sales, but your bank has only $6,200 (after credit card fees, payouts). Reconciling daily is madness.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Food Cost Mystery</p>
              <p className="text-text-mid">Food cost should be 28-32% of sales. Yours is running 38%. You don't know why: is it waste? Theft? Pricing misalignment? Menu item analysis is non-existent.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">Labor Cost Blindness</p>
              <p className="text-text-mid">Payroll is 30-35% of sales in most restaurants. You're paying 38%. Who's overstaffed? When is labor expense spiking? You don't track it.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Inventory Leakage</p>
              <p className="text-text-mid">Product walks out the back door, spoils in the cooler, or gets given away. You don't inventory regularly, so you don't see the leakage. It silently eats margin.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Seasonal Cash Flow Whiplash</p>
              <p className="text-text-mid">Q4 is insane. January is dead. Your accountant wants estimated tax payments based on annual income, but your cash position doesn't support it in January.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Lender Skepticism</p>
              <p className="text-text-mid">You want to expand to a second location or refinance. Your current books are a mess. Lender can't tell if you're profitable. Financing gets rejected or delayed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Restaurant Industry Specifics</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="p-6 border border-mint rounded-lg bg-white">
              <p className="font-600 text-forest mb-2">Seasonal Revenue Swings</p>
              <p className="text-text-mid text-sm">Summer patios are packed. January is 40% slower. Your accounting needs to reflect this. Cash flow forecasting is critical for survival.</p>
            </div>

            <div className="p-6 border border-mint rounded-lg bg-white">
              <p className="font-606 text-forest mb-2">Food Cost Variability</p>
              <p className="text-text-mid text-sm">Menu item profitability changes with ingredient costs. Lobster prices spike in summer. Produce costs vary by season. You need to know which items are profitable today, not what was profitable last year.</p>
            </div>

            <div className="p-6 border border-mint rounded-lg bg-white">
              <p className="font-600 text-forest mb-2">High Turnover (Labor)</p>
              <p className="text-text-mid text-sm">Staff turnover is endemic to the industry. Your accounting needs to handle monthly changes to payroll without missing deadlines or making errors.</p>
            </div>

            <div className="p-6 border border-mint rounded-lg bg-white">
              <p className="font-600 text-forest mb-2">Tip Reporting Compliance</p>
              <p className="text-text-mid text-sm">Tip income must be reported to the IRS. Payroll taxes are complex. One mistake and you face penalties.</p>
            </div>

            <div className="p-6 border border-mint rounded-lg bg-white">
              <p className="font-600 text-forest mb-2">Multi-Revenue Streams</p>
              <p className="text-text-mid text-sm">Dine-in, takeout, delivery, gift cards, catering—each stream has different economics. You need to track them separately to understand profitability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Services Most Relevant to Restaurants</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/services/bookkeeping" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Bookkeeping</p>
              <p className="text-text-mid text-sm">Daily sales reconciliation from POS, daily cash deposits, expense categorization by location.</p>
            </Link>

            <Link href="/services/payroll-support" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">Payroll Support</p>
              <p className="text-text-mid text-sm">Weekly payroll processing, tip reporting, tax compliance, high-turnover staffing changes.</p>
            </Link>

            <Link href="/services/financial-reporting" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Financial Reporting</p>
              <p className="text-text-mid text-sm">Weekly P&Ls, food cost reports, labor analysis, location-level performance, cash flow forecasts.</p>
            </Link>

            <Link href="/services/expense-ap" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Expense & AP</p>
              <p className="text-text-mid text-sm">Vendor invoice processing (food, liquor, supplies), payment scheduling, 1099 contractor tracking.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Why Restaurants Choose Accountant Capital VA</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Daily Sales Reconciliation</p>
              <p className="text-text-mid text-sm">Your VA pulls POS data daily, reconciles to deposits, records sales accurately. You know yesterday's results by 9am today.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-606 text-forest mb-2">✓ Food Cost Analysis</p>
              <p className="text-text-mid text-sm">Monthly food cost percentage, by menu item, by category. You see trends immediately. If food cost spikes, you catch it in week 2, not month 5.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Labor Cost Tracking</p>
              <p className="text-text-mid text-sm">Weekly payroll reports show labor cost as percentage of sales. Overstaffing gets identified immediately. You can adjust before it becomes a serious problem.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Weekly P&Ls</p>
              <p className="text-text-mid text-sm">Most restaurants get monthly P&Ls. We provide weekly P&Ls so you can react to problems in real-time, not a month later.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Seasonal Planning</p>
              <p className="text-text-mid text-sm">We track seasonal patterns and work with your CPA to plan tax payments and estimated taxes that match your cash flow.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Multi-Location Ready</p>
              <p className="text-text-mid text-sm">Expanding to a second location? Your VA scales with you. Same person, consistent systems, location-level reporting built in.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to understand your restaurant's real profitability?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Book Your Strategy Call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
