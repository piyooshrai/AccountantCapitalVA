import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Real Estate Accounting Virtual Assistant',
  'Expert real estate accounting VA. Property-level P&Ls, rental income tracking, expense allocation, depreciation schedules, 1099 coordination. Works with QuickBooks, Xero. Starting at $700/mo.',
  'real estate accounting virtual assistant',
  '/industries/real-estate'
);

const faqs = [
  {
    question: 'How do you handle multiple properties with different expenses?',
    answer: 'Each property gets its own chart of accounts (or cost center in QBO). Rental income, utilities, repairs, mortgage interest, depreciation all go to the correct property. You see P&L by property, not blended across everything.'
  },
  {
    question: 'What about depreciation calculations?',
    answer: 'Your VA maintains depreciation schedules (land, building, appliances, furniture, etc.) and records annual depreciation entries. We coordinate with your CPA so depreciation is correct and compliant.'
  },
  {
    question: 'Do you track 1099 contractor expenses?',
    answer: 'Yes. Handyman, plumber, electrician, property manager—we track vendors who should receive 1099s. At year-end, we prepare 1099 documentation for your CPA to file.'
  },
  {
    question: 'Can you help with mortgage interest vs. principal tracking?',
    answer: 'Yes. We reconcile mortgage statements, separate interest (tax-deductible) from principal, and ensure mortgage interest is categorized correctly for tax purposes.'
  },
  {
    question: 'What about vacancy periods or seasonal properties?',
    answer: 'We track rental periods and adjust income/expense allocation for months when a property was vacant. Accurate P&L even if properties sit empty part of the year.'
  }
];

export default function RealEstatePage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Industries', url: '/industries' },
          { name: 'Real Estate', url: '/industries/real-estate' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Real Estate Accounting Virtual Assistant
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Expert accounting for landlords and property owners. Property-level P&Ls, rental income tracking, expense allocation, depreciation schedules, 1099 coordination. Know each property's profitability. Starting at $700/month.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">The Real Estate Accounting Challenge</h2>

          <div className="space-y-6">
            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Multiple Properties = Multiple Headaches</p>
              <p className="text-text-mid">You have 3 rental properties. Rent comes in, expenses go to various properties. Is Property A actually profitable? You don't know—it all blends together in QuickBooks.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Depreciation Confusion</p>
              <p className="text-text-mid">Depreciation saves you thousands in taxes. But calculating it correctly is complex: land (not depreciable), building, roof, appliances, furniture. One mistake and you're leaving money on the table or triggering IRS questions.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Mortgage Interest Tracking</p>
              <p className="text-text-mid">Only mortgage interest is deductible, not principal. Your bank statement shows one payment. You need to split it: interest (deductible) vs. principal (adds to basis). Most landlords get this wrong.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">1099 Contractor Chaos</p>
              <p className="text-text-mid">Handyman, plumber, electrician—who gets a 1099? Who doesn't? You're not sure. Your CPA asks for 1099 records at tax time and you scramble to find them.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Tax Time Stress</p>
              <p className="text-text-mid">Tax season comes, you're missing documentation, your CPA has to spend extra hours reconstructing your books. You get billed for cleanup instead of strategic planning.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Scaling Frustration</p>
              <p className="text-text-mid">You want to buy a 4th property. But your current books are so messy you can't easily show a lender the profitability of your existing properties. Financing gets delayed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Property Portfolio Growth Timeline</h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">1-2 Props</div>
              <div>
                <h3 className="font-600 text-forest mb-1">First Properties</h3>
                <p className="text-text-mid text-sm">Manual bookkeeping or Excel. You know your total income but not profitability by property. Part-Time VA ($700/mo) sets up QuickBooks with property-level accounts and gets you organized.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">3-5 Props</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Growing Portfolio</h3>
                <p className="text-text-mid text-sm">You want to know which properties are cash-flowing. Full-Time VA ($1,300/mo) produces property-level P&Ls monthly. You can decide whether to refinance, sell, or buy more based on real data.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">5+ Props</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Serious Investor</h3>
                <p className="text-text-mid text-sm">Portfolio is $2M+ in value. Clean accounting is critical for refinancing, selling, or obtaining investment. Full-Time VA maintains audit-ready books, depreciation schedules, and annual tax summaries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Services Most Relevant to Real Estate</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/services/bookkeeping" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Bookkeeping</p>
              <p className="text-text-mid text-sm">Property-level income and expense tracking, rental income reconciliation, monthly reconciliation.</p>
            </Link>

            <Link href="/services/financial-reporting" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">Financial Reporting</p>
              <p className="text-text-mid text-sm">P&Ls by property, portfolio summary, cash flow reports, equity tracking.</p>
            </Link>

            <Link href="/services/expense-ap" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Expense & AP</p>
              <p className="text-text-mid text-sm">Repair and maintenance expense tracking, 1099 contractor management, vendor reconciliation.</p>
            </Link>

            <Link href="/services/tax-prep-support" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Tax Prep Support</p>
              <p className="text-text-mid text-sm">Depreciation schedules, mortgage interest tracking, year-end reconciliations, 1099 coordination.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Real Estate Bookkeeping Best Practices</h2>

          <div className="space-y-4 max-w-3xl">
            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Property-Level Accounts</p>
              <p className="text-text-mid text-sm">Each property has its own set of accounts (or cost center). Income, mortgage interest, repairs, utilities, all tracked separately. You see real profitability per property.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Depreciation Schedules</p>
              <p className="text-text-mid text-sm">Land, building, roof, appliances, fixtures—each depreciated separately with correct useful life. Schedule maintained and updated annually. Coordinated with CPA for tax filing.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-606 text-forest mb-2">✓ Mortgage Accounting</p>
              <p className="text-text-mid text-sm">Monthly mortgage payments split into interest (tax-deductible) and principal (increases basis). Interest categorized correctly for tax deduction. Principal tracks equity buildup.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Vacancy Accounting</p>
              <p className="text-text-mid text-sm">Months when properties are vacant don't show false losses. Income is tracked when earned, expenses when incurred. P&L reflects actual property performance.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ 1099 Documentation</p>
              <p className="text-text-mid text-sm">Contractors tracked, amounts recorded, 1099s issued. Year-end documentation organized for tax filing. No scrambling in April.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Why Real Estate Investors Choose Accountant Capital VA</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Property-Level Expertise</p>
              <p className="text-text-mid text-sm">We specialize in property accounting. Separate accounts, depreciation tracking, mortgage interest/principal splits. You get investment-grade reporting.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Profitability Visibility</p>
              <p className="text-text-mid text-sm">Know which properties are cash-flowing, which are breaking even, which are losing money. Make buy/sell/refinance decisions with real data.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-606 text-forest mb-2">✓ Depreciation Optimization</p>
              <p className="text-text-mid text-sm">Maximize depreciation deductions legally. Proper schedules mean thousands in tax savings annually.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Lender-Ready Books</p>
              <p className="text-text-mid text-sm">Refinancing or getting a loan for a new property? Your books are loan-ready within 24 hours. Clean financials mean faster approval and better rates.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Tax Planning</p>
              <p className="text-text-mid text-sm">Work with your CPA in October to plan year-end strategies. Depreciation, entity structure, 1031 exchanges. Clean data enables better decisions.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Scaling Support</p>
              <p className="text-text-mid text-sm">As your portfolio grows from 1 to 5 to 10 properties, accounting stays organized. Same VA, consistent systems, growing sophistication.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to know which properties are actually profitable?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Book Your Strategy Call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
