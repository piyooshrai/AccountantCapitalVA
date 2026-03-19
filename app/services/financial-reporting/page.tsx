import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Financial Reporting Virtual Assistant',
  'Expert financial statements. P&L, balance sheet, cash flow statements, KPI dashboards, variance analysis. Custom reports for better decisions. Starting at $700/mo.',
  'financial reporting virtual assistant',
  '/services/financial-reporting'
);

export default function FinancialReportingPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Services', url: '/services' },
          { name: 'Financial Reporting', url: '/services/financial-reporting' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Financial Reporting Virtual Assistant
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Professional financial statements and custom reports. P&L, balance sheets, cash flow, KPI dashboards, variance analysis. Make better decisions with accurate financials. Starting at $700/month.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What Financial Reporting Includes</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Standard Reports</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Profit & Loss (Income Statement)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Balance Sheet</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Cash Flow Statement</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>General Ledger reports</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Trial Balance</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Account reconciliations</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Custom & Analysis</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Budget vs. actual analysis</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>KPI dashboards & metrics</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Variance analysis</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Departmental reports</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Project profitability</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Custom management reports</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Why Financial Reporting Matters</h2>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Better Decisions</p>
              <p className="text-text-mid">You can't manage what you don't measure. Accurate financials tell you which products/services are profitable, where to invest, where to cut.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Investor/Lender Confidence</p>
              <p className="text-text-mid">If you raise capital or need financing, you need professional financial statements. Your VA prepares them for banks and investors.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Tax Planning</p>
              <p className="text-text-mid">Monthly reporting reveals tax liability trends. Your VA and CPA can plan year-end strategies to minimize taxes.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Growth Tracking</p>
              <p className="text-text-mid">See month-to-month growth trends, seasonal patterns, expense efficiency. Understand your business deeply.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Reporting Tools We Use</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-stone-warm rounded-lg text-center">
              <p className="font-600 text-forest mb-2">Accounting Software</p>
              <p className="text-text-mid text-sm">QuickBooks, Xero, FreshBooks native reporting</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg text-center">
              <p className="font-600 text-forest mb-2">Advanced Analytics</p>
              <p className="text-text-mid text-sm">Fathom, LivePlan for deeper analysis & forecasting</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg text-center">
              <p className="font-600 text-forest mb-2">Visualization</p>
              <p className="text-text-mid text-sm">Excel, Google Sheets, custom dashboards</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8 text-center">Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-stone-warm">
              <h3 className="text-2xl font-bold text-forest mb-4">Part-Time: $700/mo</h3>
              <p className="text-text-mid mb-6">Monthly P&L and balance sheet reports for small businesses.</p>
              <Link href="/contact" className="block w-full bg-forest text-white py-3 rounded-lg text-center font-600 hover:bg-forest-mid transition">Get Started</Link>
            </div>

            <div className="bg-forest text-white p-8 rounded-lg border-2 border-mint">
              <h3 className="text-2xl font-bold mb-4">Full-Time: $1,300/mo</h3>
              <p className="text-mint-light mb-6">Custom reports, dashboards, variance analysis, strategic planning reports.</p>
              <Link href="/contact" className="block w-full bg-mint text-forest py-3 rounded-lg text-center font-600 hover:bg-mint-light transition">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to understand your business financials?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your Strategy Call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
