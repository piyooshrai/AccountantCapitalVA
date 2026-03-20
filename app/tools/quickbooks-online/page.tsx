import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'QuickBooks Online Virtual Assistant | VA for QBO Bookkeeping',
  'A dedicated QuickBooks Online virtual assistant who handles bookkeeping, reconciliation, invoicing, and reporting. Expert in QBO workflows, multi-currency, API integrations, and tax prep.',
  'QuickBooks Online virtual assistant',
  '/tools/quickbooks-online'
);

const faqs = [
  {
    question: 'What can a QuickBooks Online VA do that I cannot?',
    answer: 'A QBO VA specializes in workflows you may not have discovered: batch data cleanup, custom report automation, API integrations with third-party apps, multi-location setups, advanced reconciliation techniques, depreciation scheduling, and year-end close prep. They also save you 8-12 hours per week of manual data entry.'
  },
  {
    question: 'Does QuickBooks Online require a dedicated person or can a VA share time?',
    answer: 'With Accountant Capital VA, you get a dedicated person assigned to your QBO. Same person every day, same login, consistent understanding of your books. This is better than a shared VA or using QBO\'s built-in "expert on demand" feature, because there\'s continuity and accountability.'
  },
  {
    question: 'How long does QBO setup and training take?',
    answer: 'Initial setup: 1-2 weeks. We import your historical data (if needed), build your chart of accounts, set up reconciliation workflows, configure tax categories, and integrate third-party apps (payment processors, invoicing, payroll). Training is done through live sessions and documentation. You\'ll be hands-off after week 2.'
  },
  {
    question: 'Can a VA help with QBO\'s advanced features like projects or time tracking?',
    answer: 'Yes. A QBO VA can set up job costing, project profitability tracking, time tracking, and billable expenses. This is especially valuable for construction, professional services, and agencies where project-level visibility is critical. Most QBO users don\'t leverage these features—a VA will.'
  },
  {
    question: 'What if I\'m using QBO Plus or Premium? Does the VA work with those versions?',
    answer: 'Absolutely. The VA works with QBO Pro, Plus, Advanced, and Premium. Premium adds custom fields, advanced reports, and AI automation—a VA knows how to leverage all of it. No limitations based on your QBO subscription tier.'
  }
];

export default function QuickBooksOnlineToolPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Tools', url: '/tools' },
          { name: 'QuickBooks Online', url: '/tools/quickbooks-online' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            QuickBooks Online Virtual Assistant
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            A dedicated QBO expert who manages your books so you don't have to. From daily transaction entry to advanced reconciliation, multi-currency setup, and tax prep—your QuickBooks Online VA handles it all while you focus on growing your business.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Your Dedicated QBO VA
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What is QuickBooks Online Virtual Assistant?</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            A QuickBooks Online virtual assistant is a dedicated bookkeeping professional assigned to your company who manages your QBO account full-time. They handle everything from transaction recording and bank reconciliation to invoicing, expense categorization, reporting, and tax preparation support.
          </p>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            Unlike hiring someone in-house (expensive, training burden) or using Intuit's QBO expert-on-demand service (no continuity), a dedicated VA becomes an extension of your team. Same person every day. They learn your business, your tax strategy, your growth trajectory, and manage your books with that context.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Dedicated Focus</p>
              <p className="text-sm text-text-mid">One person, assigned to your company, working full-time on your books. Not shared across accounts. Not on-demand. Consistent, accountable, and present.</p>
            </div>
            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">QBO Expertise</p>
              <p className="text-sm text-text-mid">Deep knowledge of QBO workflows, features, and best practices. Knows how to use APIs, custom reports, automation, and advanced workflows most users don't discover.</p>
            </div>
            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">No Learning Curve</p>
              <p className="text-sm text-text-mid">Your VA learns your business, your customers, your tax situation, and your goals. Each month gets better. This is the opposite of the QBO interface—which has a permanent learning curve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What Can a QBO Virtual Assistant Do?</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Daily Bookkeeping</p>
              <p className="text-sm text-text-mid">Transaction entry from bank feeds, credit cards, and manual invoices. Expense categorization, receipt matching, and GL reconciliation. Your books stay current, not months behind.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Bank & Credit Card Reconciliation</p>
              <p className="text-sm text-text-mid">Monthly reconciliation, outstanding check tracking, merchant account reconciliation, multi-currency reconciliation, inter-company transfers. All exceptions identified and resolved.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Invoicing & Accounts Receivable</p>
              <p className="text-sm text-text-mid">Invoice creation, payment tracking, aging reports, overdue follow-up, payment plan setup, customer statement generation, and cash application. AR doesn't fall through the cracks.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Accounts Payable & Bill Management</p>
              <p className="text-sm text-text-mid">Bill entry, payment scheduling, 1099 tracking, vendor reconciliation, expense categorization for tax optimization, PO matching, and early payment discount identification.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Advanced QBO Setup</p>
              <p className="text-sm text-text-mid">Multi-location setup, class/cost center tracking, job costing, project profitability, custom fields, automation rules (bill payments, recurring transactions, custom alerts), and third-party app integration.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Month-End & Year-End Close</p>
              <p className="text-sm text-text-mid">Closing procedures, adjusting entries, depreciation scheduling, accrual adjustments, balance sheet cleanup, and preparation of financial statements for your CPA or lender review.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Financial Reporting</p>
              <p className="text-sm text-text-mid">Profit & loss, balance sheet, cash flow, budget vs actual analysis, KPI dashboards, variance analysis, and custom reports. Not just raw data—insights you can act on.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Tax Prep Support</p>
              <p className="text-sm text-text-mid">Year-end reconciliation, 1099 preparation, expense documentation, deduction optimization, estimated tax tracking, prior year comparison, and CPA liaison. Your tax preparer will thank you for organized books.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Historical Data Cleanup</p>
              <p className="text-sm text-text-mid">If your QBO is messy, duplicated, or out of balance—your VA will audit and clean it. Recategorization, journal entry corrections, prior-year adjustments, and documentation rebuilding.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Training & Documentation</p>
              <p className="text-sm text-text-mid">Your VA documents workflows, trains your team on QBO best practices, creates playbooks for recurring tasks, and ensures you can scale without getting bogged down in bookkeeping complexity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">QuickBooks Online Integrations Your VA Manages</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            QBO integrates with 500+ third-party apps. A dedicated VA knows how to set up, optimize, and troubleshoot the ones that matter for your business:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Payment Processing</p>
              <p className="text-sm text-text-mid">Stripe, Square, PayPal, Flywire. Your VA ensures transactions sync correctly, categories are applied, and reconciliation is automatic.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Payroll</p>
              <p className="text-sm text-text-mid">Gusto, ADP, Paychex, OnPay. VA manages integration, expense coding, benefits tracking, and payroll tax compliance reporting.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Invoicing & Billing</p>
              <p className="text-sm text-text-mid">FreshBooks, Zoho Invoicing, Wave, Harvest. VA syncs invoices, payment receipts, and aging reports back to QBO.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Bill Management</p>
              <p className="text-sm text-text-mid">Bill.com, Expensify, Dext. VA ensures vendor bills are captured, coded correctly, and scheduled for payment.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">eCommerce & Marketplaces</p>
              <p className="text-sm text-text-mid">Shopify, Amazon, eBay, Etsy. VA sets up proper sales tracking, tax category application, and reconciliation.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">CRM & Project Management</p>
              <p className="text-sm text-text-mid">HubSpot, Pipedrive, Monday.com, Asana. VA ensures job codes, project tracking, and customer data sync across systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why Not Just Use QBO's Built-In Tools?</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            QuickBooks Online is powerful, but it requires someone to use it. Here's why a dedicated VA is better than self-service or other alternatives:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg border-l-4 border-red-600">
              <p className="font-600 text-red-900 mb-2">QBO Self-Service</p>
              <p className="text-text-mid text-sm"><strong>Problem:</strong> You're busy. Bookkeeping gets pushed down your priority list. Your QBO gets stale, reconciliation falls behind, tax prep becomes a nightmare.</p>
              <p className="text-text-mid text-sm mt-3"><strong>Solution:</strong> Your VA handles it every day. You focus on growth.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-red-600">
              <p className="font-600 text-red-900 mb-2">Intuit Expert-On-Demand</p>
              <p className="text-text-mid text-sm"><strong>Problem:</strong> You pay per interaction, no continuity, no learning curve. Each expert is different. Your books aren't treated as a priority—it's reactive, not proactive.</p>
              <p className="text-text-mid text-sm mt-3"><strong>Solution:</strong> Your dedicated VA knows your books and proactively manages them.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-red-600">
              <p className="font-606 text-red-900 mb-2">Hiring QBO Manager in-House</p>
              <p className="text-text-mid text-sm"><strong>Problem:</strong> $45K-$65K salary + benefits + training + overhead. You're committed long-term. Onboarding takes weeks. Turnover is expensive.</p>
              <p className="text-text-mid text-sm mt-3"><strong>Solution:</strong> Accountant Capital VA at $700-$1,300/month, fully trained, zero onboarding overhead.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-red-600">
              <p className="font-606 text-red-900 mb-2">Freelancer on Upwork/Fiverr</p>
              <p className="text-text-mid text-sm"><strong>Problem:</strong> No vetting, no continuity, no accountability, no insurance. You become their manager. Quality varies wildly.</p>
              <p className="text-text-mid text-sm mt-3"><strong>Solution:</strong> Vetted, dedicated, managed, insured, accountable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">QBO VA Pricing & What's Included</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-mint/10 p-8 rounded-lg border-2 border-mint mb-6">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Part-Time QBO VA: $700/month</h3>
              <p className="text-text-mid mb-6">20 hours per week of dedicated bookkeeping work on your QuickBooks Online account.</p>
              <ul className="space-y-3 text-text-mid mb-6">
                <li>✓ Daily transaction entry and categorization</li>
                <li>✓ Monthly bank & credit card reconciliation</li>
                <li>✓ Invoicing & AR management</li>
                <li>✓ Bill processing & vendor management</li>
                <li>✓ Monthly financial reporting (P&L, balance sheet)</li>
                <li>✓ Tax category setup and optimization</li>
                <li>✓ QBO integration setup (payment processors, payroll, etc.)</li>
                <li>✓ Year-end close support</li>
              </ul>
              <p className="text-forest font-600">Ideal for: Small businesses with $500K-$2M revenue, simple structure, under 50 transactions/month</p>
            </div>

            <div className="bg-mint/10 p-8 rounded-lg border-2 border-mint">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Full-Time QBO VA: $1,300/month</h3>
              <p className="text-text-mid mb-6">40 hours per week of dedicated QBO management, plus advanced services.</p>
              <ul className="space-y-3 text-text-mid mb-6">
                <li>✓ Everything in Part-Time, plus:</li>
                <li>✓ Multi-location QBO setup and management</li>
                <li>✓ Advanced job costing and project profitability</li>
                <li>✓ Historical data cleanup and audit</li>
                <li>✓ Custom report automation</li>
                <li>✓ Weekly financial health check-ins</li>
                <li>✓ Direct communication with your CPA during tax season</li>
                <li>✓ Payroll integration and compliance tracking</li>
                <li>✓ Inventory & COGS management (if applicable)</li>
              </ul>
              <p className="text-forest font-600">Ideal for: Growing companies $2M-$10M, complexity, 500+ transactions/month, multiple users</p>
            </div>

            <p className="text-center text-text-mid mt-8">
              No setup fees. Month-to-month flexibility. Cancel anytime. All VAs are vetted, bonded, and covered by liability insurance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">The QBO VA Onboarding Process</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-forest text-white font-bold">1</div>
              </div>
              <div>
                <p className="font-600 text-forest mb-2">Week 1: Discovery & Access Setup</p>
                <p className="text-text-mid">You introduce your business, financials, and goals. We audit your current QBO setup, identify issues, and prepare access (SSO or dedicated account). Your VA reviews your books and builds an understanding of your accounts, customers, and vendors.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-forest text-white font-bold">2</div>
              </div>
              <div>
                <p className="font-600 text-forest mb-2">Week 2: Configuration & Integration</p>
                <p className="text-text-mid">Your VA builds workflows, configures tax categories, sets up payment processor integration, creates reconciliation schedules, and automates recurring transactions. You're invited to a walkthrough and can provide feedback.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-forest text-white font-bold">3</div>
              </div>
              <div>
                <p className="font-600 text-forest mb-2">Week 3: Go Live & Training</p>
                <p className="text-text-mid">Your VA starts managing your QBO day-to-day. You receive a manual documenting workflows, access instructions, and best practices. We schedule a live training on how to use reports, collaborate on invoicing, and escalate issues.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-forest text-white font-bold">4</div>
              </div>
              <div>
                <p className="font-600 text-forest mb-2">Ongoing: Weekly Check-Ins & Monthly Reviews</p>
                <p className="text-text-mid">Your VA is present and proactive. You get weekly status updates, monthly financial summaries, and quarterly strategy sessions. Issues are escalated immediately. Your VA is your ally in managing cash flow and planning growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready for a Dedicated QuickBooks Online VA?</h2>
          <p className="text-mint mb-6">Get hands-off bookkeeping with expert QBO management. Same person every day.</p>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your QBO Strategy Call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
