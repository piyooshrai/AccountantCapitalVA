import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Bookkeeping Virtual Assistant New York | NYC VA Accounting Services',
  'Hire a dedicated bookkeeping VA in New York. Expert in NY state tax, NYC business tax, multi-location payroll, and financial compliance for small businesses and startups.',
  'bookkeeping virtual assistant New York',
  '/locations/us/new-york'
);

const faqs = [
  {
    question: 'Do I need a New York-specific bookkeeper or can any VA work?',
    answer: 'New York has complex tax rules (city income tax, state income tax, sales tax, business tax). A NY-specific VA understands these nuances and ensures you\'re optimized for NY taxes. A generic VA might miss deductions or filing requirements.'
  },
  {
    question: 'How much does hiring a local bookkeeper cost in New York?',
    answer: 'A full-time bookkeeper in NYC costs $50K-$80K+ per year (salary + benefits + payroll taxes + training). Accountant Capital VA costs $700-$1,300/month with zero overhead. You save $40K-$60K annually.'
  },
  {
    question: 'Can your VA help with NYC business tax?',
    answer: 'Yes. NYC business tax is unique and often overlooked. Your VA understands gross receipts thresholds, filing requirements, and optimization strategies specific to NYC. Most businesses overpay NYC tax without expert guidance.'
  },
  {
    question: 'What if my NY business has multi-state operations?',
    answer: 'Your VA specializes in multi-state bookkeeping. If you have locations in other states, your VA manages separate P&Ls, consolidates reporting, handles state-specific compliance, and optimizes overall tax.'
  },
  {
    question: 'Does a NY VA work with NYC CPAs and accountants?',
    answer: 'Yes. Your VA is trained to work with NYC CPA firms. They understand NY tax prep timelines, coordinate with your accountant, and prepare books for efficient tax filing.'
  }
];

export default function NewYorkLocationPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Locations', url: '/locations' },
          { name: 'United States', url: '/locations/us' },
          { name: 'New York', url: '/locations/us/new-york' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Bookkeeping Virtual Assistant for New York Businesses
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            New York is one of the most competitive, complex tax environments in the US. Your bookkeeping VA understands NYC business tax, NY state income tax, federal tax, and the unique financial demands of operating in New York. From Manhattan startups to Brooklyn services companies, we've got you covered.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Your NY Bookkeeping VA
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why New York Businesses Need a Dedicated Bookkeeping VA</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            New York has the highest cost of living, most complex tax code, and most competitive business environment in America. Your bookkeeper isn't just processing transactions—they're optimizing your tax, managing compliance, and helping you compete.
          </p>

          <div className="space-y-4">
            <div className="p-6 bg-stone rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">NYC Business Tax (Unincorporated Business Tax)</p>
              <p className="text-text-mid text-sm">NYC has a unique unincorporated business tax (UBT) for partnerships, LLCs, and sole proprietors. If your gross income exceeds $4,000, you owe UBT. Rate: 3.876% of net income (higher than many states). Your VA ensures proper filing and optimization.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">NY State Income Tax (Highest in the Nation)</p>
              <p className="text-text-mid text-sm">NY has the highest state income tax rate in the US: up to 8.82% (on top of federal). Plus, New York City adds local income tax. Your VA optimizes deductions and ensures you're not overpaying.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">Sales Tax Complexity</p>
              <p className="text-text-mid text-sm">NY sales tax is 4%, but NYC adds 4.5% for total 8.875%. If you sell across state lines or online, you may owe tax in other states too. Your VA manages multi-state sales tax compliance.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Payroll Tax Complexity</p>
              <p className="text-text-mid text-sm">Federal payroll tax + NY state + NYC. Plus, depending on industry, you may owe SUI (State Unemployment Insurance), DBE (Disability Benefits), or PFL (Paid Family Leave). Your VA tracks all of it.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Quarterly Estimated Tax</p>
              <p className="text-text-mid text-sm">NY requires quarterly estimated tax payments. Missing them means penalties. Your VA calculates quarterly estimates, schedules payments, and prevents underpayment penalties.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">New York Business Landscape & Your VA's Expertise</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            New York has a diverse economy. Your VA specializes in bookkeeping for industries that thrive here:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Tech Startups & SaaS</p>
              <p className="text-text-mid text-sm">NYC has a booming tech scene. Your VA understands SaaS accounting, subscription revenue, stock option accounting, and venture funding structure.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Financial Services & Trading</p>
              <p className="text-text-mid text-sm">Finance is NYC's backbone. Your VA manages complex trading accounting, fund structures, and compliance specific to financial services.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-606 text-forest mb-3">Creative & Media Agencies</p>
              <p className="text-text-mid text-sm">Advertising, design, video production agencies. Your VA manages project accounting, contractor payments, and income tracking specific to agencies.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-606 text-forest mb-3">Real Estate & Property Management</p>
              <p className="text-text-mid text-sm">NYC real estate is complex. Your VA manages rental income, depreciation, multi-property consolidation, and real estate-specific deductions.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">E-commerce & Retail</p>
              <p className="text-text-mid text-sm">Shopify sellers, brick-and-mortar stores. Your VA manages inventory, COGS, sales tax across channels (online, brick-and-mortar).</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Professional Services</p>
              <p className="text-text-mid text-sm">Law firms, accounting practices, consulting. Your VA manages project billing, contractor payments, and professional-service-specific accounting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">The Real Cost of Bookkeeping in New York</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600 mb-6">
              <p className="font-600 text-red-900 mb-2">Hiring a Local Bookkeeper in NYC</p>
              <ul className="text-text-mid text-sm space-y-2">
                <li>• Salary: $55K-$75K per year (NYC is expensive)</li>
                <li>• Payroll taxes: ~$8K-$10K per year</li>
                <li>• Benefits (health, 401k, etc.): ~$12K-$18K per year</li>
                <li>• Recruitment & onboarding: ~$5K-$10K</li>
                <li>• Turnover cost (when they leave): ~$8K-$15K</li>
                <li className="pt-2 border-t border-red-600 font-600 text-red-900">Total annual cost: $88K-$128K (often more)</li>
              </ul>
            </div>

            <div className="bg-mint/10 p-6 rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Accountant Capital VA (Dedicated Bookkeeper)</p>
              <ul className="text-text-mid text-sm space-y-2">
                <li>• Part-Time: $700/month = $8.4K per year</li>
                <li>• Full-Time: $1,300/month = $15.6K per year</li>
                <li>• No recruitment or onboarding costs</li>
                <li>• No turnover risk (dedicated person)</li>
                <li>• No equipment, benefits, or overhead</li>
                <li className="pt-2 border-t border-mint font-600 text-forest">Total annual cost: $8.4K-$15.6K</li>
              </ul>
            </div>

            <p className="text-center text-text-mid mt-8">
              <strong>You save $70K-$120K per year</strong> by hiring a dedicated VA instead of a local employee. Plus, you get a specialist, not an entry-level generalist.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Services Your New York Bookkeeping VA Provides</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">NY Business Tax & UBT Filing</p>
              <p className="text-sm text-text-mid">Unincorporated Business Tax (UBT) filing, gross income tracking, deduction optimization, and quarterly payment planning.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Sales Tax (Multi-State)</p>
              <p className="text-sm text-text-mid">NY sales tax, NYC sales tax, and multi-state sales tax if you sell online or in other states. Automated reporting and filing.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Quarterly Estimated Tax Planning</p>
              <p className="text-sm text-text-mid">Calculating quarterly estimates, scheduling federal/state payments, and preventing underpayment penalties.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Payroll Processing</p>
              <p className="text-sm text-text-mid">Federal withholding, NY state withholding, NYC withholding, SUI, DBE, PFL. Quarterly and annual filings.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Bank Reconciliation & Cash Management</p>
              <p className="text-sm text-text-mid">Monthly reconciliation, cash flow planning, payment timing optimization.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Tax Prep Coordination</p>
              <p className="text-sm text-text-mid">Organizing books for efficient tax filing, coordinating with your CPA, handling amendments if needed.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Monthly & Quarterly Reporting</p>
              <p className="text-sm text-text-mid">P&L, balance sheet, cash flow, tax liability tracking, and business metric dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why New York Businesses Choose Accountant Capital VA</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">NY Tax Expertise</p>
              <p className="text-sm text-text-mid">We specialize in NY tax complexity. Your VA knows UBT, state income tax, NYC tax, and payroll tax requirements inside and out.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Cost Savings</p>
              <p className="text-sm text-text-mid">Paying $700-$1,300/month instead of $88K-$128K annually for a local hire. That's real money you can reinvest in growth.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-606 text-forest mb-3">Dedicated Person</p>
              <p className="text-sm text-text-mid">Same VA every day, learning your business, your goals, your industry. Continuity, relationships, and understanding.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready for Expert New York Bookkeeping?</h2>
          <p className="text-mint mb-6">Navigate NY taxes. Optimize your business. Focus on growth.</p>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your NY Consultation</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
