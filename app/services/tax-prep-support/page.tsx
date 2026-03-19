import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Tax Preparation Support Virtual Assistant Services',
  'Expert tax prep VA support. Year-end reconciliation, 1099 prep, expense organization, document collection, tax liability tracking. Works with your CPA. Starting at $700/mo.',
  'tax preparation support virtual assistant',
  '/services/tax-prep-support'
);

export default function TaxPrepSupportPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Services', url: '/services' },
          { name: 'Tax Prep Support', url: '/services/tax-prep-support' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Tax Preparation Support Virtual Assistant
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Expert tax season preparation. Year-end reconciliation, 1099 coordination, expense organization, document collection, tax liability tracking. Your books ready for your CPA. Starting at $700/month.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What Tax Prep VA Includes</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Year-End Preparation</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Account reconciliation (bank, AP, AR, credit cards)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Closing entries and adjusting entries</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Trial balance and balance sheet review</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Expense categorization for tax deduction optimization</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Bad debt analysis and allowance for doubtful accounts</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Inventory valuation (if applicable)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Depreciation schedule review</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Documentation & Compliance</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>1099-NEC/1099-MISC contractor tracking and preparation</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Sales tax by state (multi-state reconciliation)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Payroll tax reconciliation (federal, state, local)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Charitable contribution documentation</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Expense substantiation (home office, vehicle, meals)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>CPA communication and document delivery</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Prior year comparison and variance analysis</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Why Tax Prep Support Matters</h2>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Tax Liability Planning</p>
              <p className="text-text-mid">Your VA prepares year-end documentation so your CPA can plan Q4 tax strategies. Estimated tax payments, entity structure considerations, and deduction optimization happen in November, not April.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Faster Tax Filing</p>
              <p className="text-text-mid">Clean, organized books mean your CPA doesn't spend hours reconstructing your financials. Tax return gets prepared faster, filed on time, and costs less for CPA hours.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Fewer Tax Penalties & Surprises</p>
              <p className="text-text-mid">Errors and missing documentation cost money: amended returns, late penalties, payroll tax issues. Proactive preparation catches errors months in advance when they're still fixable.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Audit Confidence</p>
              <p className="text-text-mid">If audited, organized records and clear documentation are your best defense. Your VA maintains an audit trail: receipts, categorization logic, adjustments, CPA communication.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Estimated Tax Accuracy</p>
              <p className="text-text-mid">Q1-Q3 estimated tax payments are calculated based on accurate, current financials. Your VA tracks year-to-date income and expenses, ensuring estimates are realistic (not overpaid or underpaid).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Tax Prep Timeline</h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">Q3</div>
              <div>
                <h3 className="font-600 text-forest mb-1">July - September: Ongoing Accuracy</h3>
                <p className="text-text-mid">Your VA reconciles accounts monthly, categorizes expenses correctly, and flags any issues. Clean books throughout the year make Q4 work easier.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">Q4</div>
              <div>
                <h3 className="font-600 text-forest mb-1">October: Planning Begins</h3>
                <p className="text-text-mid">Your VA prepares year-to-date financial statements. You and your CPA review them to plan Q4 tax strategies. Time for deduction maximization, entity structure decisions, estimated tax adjustments.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">Nov</div>
              <div>
                <h3 className="font-600 text-forest mb-1">November: Active Prep</h3>
                <p className="text-text-mid">Your VA collects 1099 information from vendors, prepares depreciation schedules, reconciles payroll liabilities, confirms sales tax reporting. CPA may request specific documents.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">Dec</div>
              <div>
                <h3 className="font-600 text-forest mb-1">December: Finalization</h3>
                <p className="text-text-mid">Year-end adjusting entries, final reconciliations, 1099 issuance. Your VA organizes all documentation in a folder for your CPA with a summary of the year's activity.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">Jan</div>
              <div>
                <h3 className="font-600 text-forest mb-1">January - March: Tax Filing</h3>
                <p className="text-text-mid">Your CPA has all prep work done. Tax return filed on time. Your VA responds to any final questions and coordinates estimated tax payment schedules for the new year.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Software & CPA Integration</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg text-center border border-stone-warm">
              <p className="font-600 text-forest mb-2">Accounting Software</p>
              <p className="text-text-mid text-sm">QuickBooks Online, Desktop, Xero, FreshBooks—your VA works in your system</p>
            </div>

            <div className="p-6 bg-white rounded-lg text-center border border-stone-warm">
              <p className="font-600 text-forest mb-2">Tax Software Integration</p>
              <p className="text-text-mid text-sm">Your CPA uses their tax software; your VA prepares clean data for seamless import</p>
            </div>

            <div className="p-6 bg-white rounded-lg text-center border border-stone-warm">
              <p className="font-600 text-forest mb-2">Document Exchange</p>
              <p className="text-text-mid text-sm">Organized cloud folders, email summaries, or direct software connections with your CPA</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Important: What We Don't Do</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">Tax Advice</p>
              <p className="text-text-mid text-sm">Your VA is not a CPA or tax advisor. We prepare documentation; your CPA advises on strategy and files the return.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">Tax Return Filing</p>
              <p className="text-text-mid text-sm">Your CPA files the tax return. We organize documents and prepare supporting schedules.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">Audit Representation</p>
              <p className="text-text-mid text-sm">If audited, your CPA or tax attorney represents you. Your VA provides documentation support.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">Legal Compliance</p>
              <p className="text-text-mid text-sm">We prepare data for compliance; your CPA and attorney ensure legal compliance is correct.</p>
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
              <p className="text-text-mid mb-6">Year-end prep for small businesses (basic reconciliation, 1099 prep, document organization).</p>
              <Link href="/contact" className="block w-full bg-forest text-white py-3 rounded-lg text-center font-600 hover:bg-forest-mid transition">Get Started</Link>
            </div>

            <div className="bg-forest text-white p-8 rounded-lg border-2 border-mint">
              <h3 className="text-2xl font-bold mb-4">Full-Time: $1,300/mo</h3>
              <p className="text-mint-light mb-6">Complete tax prep support (all reconciliations, depreciation schedules, full CPA coordination, strategic planning support).</p>
              <Link href="/contact" className="block w-full bg-mint text-forest py-3 rounded-lg text-center font-600 hover:bg-mint-light transition">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Related Services</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/services/bookkeeping" className="p-6 bg-stone-warm rounded-lg hover:border-mint border-2 border-stone-warm transition">
              <p className="font-600 text-forest">Bookkeeping</p>
              <p className="text-text-mid text-sm">Clean books year-round make tax prep seamless</p>
            </Link>
            <Link href="/services/financial-reporting" className="p-6 bg-stone-warm rounded-lg hover:border-mint border-2 border-stone-warm transition">
              <p className="font-600 text-forest">Financial Reporting</p>
              <p className="text-text-mid text-sm">Year-to-date reporting for planning decisions</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready for stress-free tax season?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your Strategy Call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
