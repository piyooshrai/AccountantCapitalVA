import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Bill.com Virtual Assistant | AP Automation VA',
  'A dedicated Bill.com VA manages accounts payable, vendor management, bill approvals, and payment workflows. Expert in Bill.com automation, compliance, and accounting integrations.',
  'Bill.com virtual assistant',
  '/tools/bill-com'
);

const faqs = [
  {
    question: 'How does Bill.com save time on accounts payable?',
    answer: 'Bill.com automates invoice capture (scan, email, or API), routes for approval, schedules payments, and syncs to accounting. Your VA ensures proper setup, monitors approvals, and manages the workflow. Time saved: 5-10 hours per week on AP.'
  },
  {
    question: 'Can Bill.com integrate with QuickBooks or Xero?',
    answer: 'Yes. Bill.com has native integrations with QBO and Xero. Your VA sets up the connection, ensures bills sync correctly, and verifies that payments post to the right accounts in your accounting system.'
  },
  {
    question: 'Does Bill.com handle 1099 vendor tracking?',
    answer: 'Yes. Bill.com tracks vendor payments and can generate 1099-NEC reports for non-employee payments. Your VA will ensure vendors are properly classified and 1099 limits are tracked for year-end reporting.'
  },
  {
    question: 'Can multiple team members approve bills in Bill.com?',
    answer: 'Absolutely. Bill.com supports role-based approvals. Your VA can configure approval workflows (manager approval, accounting verification, payment authorization) so bills flow through the right people.'
  },
  {
    question: 'What if we want to take early payment discounts?',
    answer: 'Your VA will monitor bills for early payment discounts, calculate the ROI, and schedule early payments when worthwhile. Bill.com schedules the payment automatically, capturing discounts.'
  }
];

export default function BillComToolPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Tools', url: '/tools' },
          { name: 'Bill.com', url: '/tools/bill-com' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Bill.com Virtual Assistant
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            A dedicated Bill.com expert who manages your accounts payable automation. From vendor management and bill processing to payment approvals and 1099 tracking—your Bill.com VA handles all AP complexity while capturing discounts and maintaining compliance.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Your Bill.com VA
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why Bill.com Needs a Dedicated VA</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            Bill.com is built to automate AP, but it requires careful setup and ongoing management. A dedicated VA configures approval workflows, monitors vendor payments, captures discounts, ensures tax compliance, and integrates with your accounting system. The result: faster cash flow, fewer AP headaches, and better vendor relationships.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Workflow Automation</p>
              <p className="text-sm text-text-mid">Bill.com's power is in automation. Your VA configures approval routes, payment triggers, and integrations so bills flow automatically without manual intervention.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Cash Flow Optimization</p>
              <p className="text-sm text-text-mid">Your VA monitors payments, captures early payment discounts, manages payment timing for optimal cash flow, and negotiates payment terms with vendors.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Tax & Compliance</p>
              <p className="text-sm text-text-mid">1099 tracking, vendor classification, expense categorization for tax deductions, and audit trail maintenance—all critical for tax prep and compliance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What Your Bill.com VA Manages</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Vendor Management</p>
              <p className="text-sm text-text-mid">Creating vendor profiles, managing payment information (ACH, check, wire), tracking W-9s and tax IDs, and maintaining accurate vendor contact information.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Bill Capture & Processing</p>
              <p className="text-sm text-text-mid">Collecting bills (email, scan, API), categorizing by vendor and expense type, extracting invoice details, and routing for approval.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Expense Categorization</p>
              <p className="text-sm text-text-mid">Coding bills to the right GL accounts for your accounting system, applying tax categories (deductible vs non-deductible), and ensuring proper allocation for management reporting.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Approval Workflows</p>
              <p className="text-sm text-text-mid">Configuring multi-level approvals (manager, accounting, payment authorization), monitoring approval status, and escalating exceptions.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Payment Scheduling & Execution</p>
              <p className="text-sm text-text-mid">Scheduling payments (ACH, check, wire), managing payment timing for cash flow, capturing early payment discounts, and monitoring payment status.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">1099 & Tax Compliance</p>
              <p className="text-sm text-text-mid">Classifying vendors as employees vs contractors, tracking 1099-able payments, generating 1099-NEC forms, and organizing records for year-end tax reporting.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Accounting Integration</p>
              <p className="text-sm text-text-mid">Syncing bills and payments to QuickBooks or Xero, verifying GL coding, reconciling Bill.com to accounting system, and resolving sync issues.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Reporting & Analysis</p>
              <p className="text-sm text-text-mid">AP aging reports, vendor spend analysis, discount capture reporting, payment status dashboards, and cash flow projections.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Vendor Communication</p>
              <p className="text-sm text-text-mid">Resolving invoice discrepancies, negotiating payment terms, updating vendor information, and managing vendor relationships on your behalf.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">How Bill.com Saves Money (With Your VA's Help)</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            Bill.com isn't just about efficiency—it's about cash flow and cost savings. Your VA maximizes both:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Early Payment Discounts</p>
              <p className="text-sm text-text-mid">Your VA monitors bills for 2/10 Net 30 type discounts. Bill.com schedules early payment. ROI: typically 2-5% savings on vendor spend.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-606 text-forest mb-3">Time Saved on AP</p>
              <p className="text-sm text-text-mid">Manual bill processing takes 5-10 hours per week. Bill.com + VA reduces it to 2-3 hours. Time value: $10K-$20K per year.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-606 text-forest mb-3">Payment Float Optimization</p>
              <p className="text-sm text-text-mid">Your VA schedules payments for optimal cash flow (paying on due date, not early). Improves cash position without risking vendor relationships.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Error Reduction</p>
              <p className="text-sm text-text-mid">Duplicate invoice prevention, proper GL coding, tax categorization. Prevents accounting errors that cost time and money to fix.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Audit Trail & Compliance</p>
              <p className="text-sm text-text-mid">Bill.com creates a complete audit trail. Your VA ensures records are audit-ready, reducing compliance risk and speeding tax prep.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Better Vendor Terms</p>
              <p className="text-sm text-text-mid">Your VA negotiates better payment terms with vendors by demonstrating reliable, on-time payment history in Bill.com.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Bill.com Integrations Your VA Manages</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Accounting Systems</p>
              <p className="text-sm text-text-mid">QuickBooks Online, Xero, Wave. Your VA ensures bills and payments sync accurately to GL.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Bank Connectivity</p>
              <p className="text-sm text-text-mid">ACH, wire transfer, check printing. Bill.com connects directly to your bank for secure payment processing.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Expense & Receipt Capture</p>
              <p className="text-sm text-text-mid">Dext, Receipt Bank, Expensify. Your VA imports receipts to Bill.com for expense coding and reimbursement.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Payroll Integration</p>
              <p className="text-sm text-text-mid">Gusto, ADP, Paychex. Bill.com can schedule payroll payments alongside vendor payments.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Automation & Workflow</p>
              <p className="text-sm text-text-mid">Zapier, Make, IFTTT. Your VA creates custom workflows to reduce manual bill entry.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Analytics & Reporting</p>
              <p className="text-sm text-text-mid">Bill.com's reporting + custom dashboards. Your VA generates insights on vendor spend, payment trends, and cash flow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Bill.com VA Pricing</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-mint/10 p-8 rounded-lg border-2 border-mint mb-6">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Part-Time Bill.com VA: $700/month</h3>
              <p className="text-text-mid mb-6">20 hours per week of AP management and Bill.com administration.</p>
              <ul className="space-y-3 text-text-mid mb-6">
                <li>✓ Vendor setup & management</li>
                <li>✓ Bill capture & processing</li>
                <li>✓ Expense categorization</li>
                <li>✓ Approval workflow configuration</li>
                <li>✓ Payment scheduling</li>
                <li>✓ Basic 1099 tracking</li>
                <li>✓ Monthly reporting</li>
                <li>✓ QB/Xero sync verification</li>
              </ul>
              <p className="text-forest font-600">Ideal for: Small companies under $2M, 20-50 vendors, simple approval flows</p>
            </div>

            <div className="bg-mint/10 p-8 rounded-lg border-2 border-mint">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Full-Time Bill.com VA: $1,300/month</h3>
              <p className="text-text-mid mb-6">40 hours per week of dedicated AP management and optimization.</p>
              <ul className="space-y-3 text-text-mid mb-6">
                <li>✓ Everything in Part-Time, plus:</li>
                <li>✓ Advanced approval workflow optimization</li>
                <li>✓ Vendor terms negotiation & relationship management</li>
                <li>✓ Early payment discount analysis & capture</li>
                <li>✓ Complex 1099 management</li>
                <li>✓ Cash flow forecasting & payment timing</li>
                <li>✓ Advanced reporting & analytics</li>
                <li>✓ AP process optimization consulting</li>
                <li>✓ Audit preparation & compliance</li>
              </ul>
              <p className="text-forest font-600">Ideal for: Growing companies $2M+, 100+ vendors, complex workflows, high transaction volume</p>
            </div>

            <p className="text-center text-text-mid mt-8">
              Enterprise custom pricing available. All Bill.com VAs are certified and backed by liability insurance.
            </p>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Hands-Off AP Automation</h2>
          <p className="text-mint mb-6">Expert Bill.com management. Save time, capture discounts, stay compliant.</p>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your AP Consultation</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
