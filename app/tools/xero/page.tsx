import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Xero Virtual Assistant | Cloud Bookkeeping VA',
  'A dedicated Xero VA specializes in cloud accounting: invoicing, bank reconciliation, multi-currency, project tracking, and tax compliance. Perfect for growing SaaS, agencies, and ecommerce.',
  'Xero virtual assistant',
  '/tools/xero'
);

const faqs = [
  {
    question: 'What is the difference between Xero and QuickBooks Online?',
    answer: 'Xero is stronger in invoicing, multi-currency, inventory, and international compliance. QBO is stronger in payroll integration and reporting. Both are cloud-based. A dedicated Xero VA will maximize Xero\'s unique features (bulk invoicing, fixed assets, intracompany) that most users don\'t discover on their own.'
  },
  {
    question: 'Can a Xero VA help with multi-currency transactions?',
    answer: 'Yes. Xero is excellent for multi-currency. Your VA will set up currency codes, manage exchange rates, handle foreign bank accounts, and generate reports in multiple currencies. Ideal if you have international customers or vendors.'
  },
  {
    question: 'How does Xero work with inventory tracking?',
    answer: 'Xero has native inventory tracking. Your VA will set up inventory accounts, track COGS, manage stock counts, set reorder levels, and integrate with your ecommerce platform (Shopify, WooCommerce). Essential for product-based businesses.'
  },
  {
    question: 'Can I integrate Xero with payroll?',
    answer: 'Xero works with multiple payroll processors: Xero Payroll, Gusto, ADP, Paychex, OnPay, Rippling. Your VA will set up integration, manage tax submissions, and ensure payroll data syncs correctly back to your P&L.'
  },
  {
    question: 'What if I have multiple Xero files (for different entities)?',
    answer: 'Your VA can manage multiple Xero files, consolidate reporting across entities, handle inter-company transactions, and provide combined financial statements. Perfect for holding companies, franchises, or multi-brand operations.'
  }
];

export default function XeroToolPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Tools', url: '/tools' },
          { name: 'Xero', url: '/tools/xero' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Xero Virtual Assistant
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            A dedicated Xero expert who manages your cloud accounting platform. From daily invoicing and reconciliation to multi-currency handling, inventory management, and tax compliance—your Xero VA handles everything.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Your Xero VA
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why Your Xero Needs a Dedicated VA</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            Xero is powerful, but it's complex. Most businesses use only 20% of Xero's capabilities. A dedicated VA unlocks the other 80%: advanced invoicing, multi-currency optimization, inventory management, project costing, and automated compliance reporting.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Cloud-First Architecture</p>
              <p className="text-sm text-text-mid">Xero is built for cloud. Your VA takes full advantage: APIs, automations, integrations, and mobile workflows that desktop systems can't match.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">International Compliance</p>
              <p className="text-sm text-text-mid">Xero is built for global businesses. Multi-currency, multi-region tax compliance, automated tax submissions (for UK, AU, NZ, US). Your VA ensures you stay compliant.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Inventory & COGS</p>
              <p className="text-sm text-text-mid">Xero's inventory module is sophisticated. Your VA will track inventory valuation, automate COGS calculations, and reconcile with your ecommerce platform.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What Your Xero VA Manages Daily</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Invoicing & Billing</p>
              <p className="text-sm text-text-mid">Creating invoices, tracking payment status, setting up recurring invoices, managing deposits, handling credit notes, and aged debt follow-up. Xero's invoicing is superior—your VA leverages it fully.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Bank & Multi-Currency Reconciliation</p>
              <p className="text-sm text-text-mid">Monthly reconciliation in your primary currency and any foreign accounts. Managing exchange rates, handling currency gains/losses, clearing discrepancies.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Bill Payment & AP Management</p>
              <p className="text-sm text-text-mid">Processing bills, scheduling payments, managing payment terms, tracking 1099s, vendor reconciliation, and expense categorization.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Inventory & COGS</p>
              <p className="text-sm text-text-mid">Tracking inventory levels, adjusting for stock counts, calculating COGS using FIFO/weighted average, syncing with ecommerce platforms (Shopify, WooCommerce, Amazon).</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Project & Job Costing</p>
              <p className="text-sm text-text-mid">Setting up tracking categories, assigning costs to projects, generating project profitability reports, and billing clients based on project actuals.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Tax Compliance & Submissions</p>
              <p className="text-sm text-text-mid">Preparing GST/VAT reports, organizing sales tax data, generating tax compliance reports for your accountant, and ensuring proper categorization for local tax filings.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Financial Reporting</p>
              <p className="text-sm text-text-mid">P&L, balance sheet, cash flow, budget vs actual, and KPI dashboards. Xero's reporting is powerful—your VA creates insights you can act on.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Integration Management</p>
              <p className="text-sm text-text-mid">Xero connects to 800+ apps. Your VA sets up integrations with your stack (Zapier, Stripe, Shopify, Gusto, etc.), troubleshoots sync issues, and ensures data flows accurately.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Xero Integrations Your VA Manages</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            Xero's ecosystem is massive. Your VA will integrate your tech stack with Xero and ensure data flows correctly:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Payment Processing</p>
              <p className="text-sm text-text-mid">Stripe, Square, PayPal, Flywire. Transactions auto-sync to Xero with proper categorization.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">eCommerce</p>
              <p className="text-sm text-text-mid">Shopify, WooCommerce, Magento, BigCommerce. Sales, inventory, and refunds sync automatically.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Payroll</p>
              <p className="text-sm text-text-mid">Xero Payroll, Gusto, ADP, Paychex. Payroll expense posts directly to Xero.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">CRM & Marketing</p>
              <p className="text-sm text-text-mid">HubSpot, Pipedrive, Mailchimp. Customer data syncs, enabling better financial segmentation.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Expense Tracking</p>
              <p className="text-sm text-text-mid">Expensify, Dext, Receipt Bank. Receipts auto-categorized and imported to Xero.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Automation</p>
              <p className="text-sm text-text-mid">Zapier, Make, IFTTT. Custom workflows to reduce manual data entry.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Xero VA Pricing</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-mint/10 p-8 rounded-lg border-2 border-mint mb-6">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Part-Time Xero VA: $700/month</h3>
              <p className="text-text-mid mb-6">20 hours per week of Xero management and bookkeeping.</p>
              <ul className="space-y-3 text-text-mid mb-6">
                <li>✓ Daily transaction entry & categorization</li>
                <li>✓ Monthly bank reconciliation (multi-currency)</li>
                <li>✓ Invoicing & payment tracking</li>
                <li>✓ Bill processing & AP management</li>
                <li>✓ Basic inventory management</li>
                <li>✓ Monthly reporting</li>
                <li>✓ Xero integration setup (basic)</li>
                <li>✓ Tax compliance support</li>
              </ul>
              <p className="text-forest font-600">Ideal for: Small businesses under $2M, simple structure, single-currency or basic multi-currency</p>
            </div>

            <div className="bg-mint/10 p-8 rounded-lg border-2 border-mint">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Full-Time Xero VA: $1,300/month</h3>
              <p className="text-text-mid mb-6">40 hours per week of dedicated Xero management, plus advanced services.</p>
              <ul className="space-y-3 text-text-mid mb-6">
                <li>✓ Everything in Part-Time, plus:</li>
                <li>✓ Advanced multi-currency & multi-location</li>
                <li>✓ Complex inventory & COGS management</li>
                <li>✓ Project costing & profitability</li>
                <li>✓ Custom report automation</li>
                <li>✓ Advanced integration management</li>
                <li>✓ Weekly financial reviews</li>
                <li>✓ Xero optimization consulting</li>
              </ul>
              <p className="text-forest font-600">Ideal for: Growing companies $2M-$10M+, ecommerce, international, complex operations</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Get Expert Xero Management</h2>
          <p className="text-mint mb-6">A dedicated VA for your cloud accounting. Unlocking Xero's full potential.</p>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your Xero Strategy Call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
