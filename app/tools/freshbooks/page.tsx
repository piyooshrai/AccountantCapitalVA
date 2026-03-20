import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'FreshBooks Virtual Assistant | Invoice & Project Accounting VA',
  'A dedicated FreshBooks VA manages invoicing, time tracking, expense reporting, and project profitability. Perfect for service-based businesses, consultants, and agencies.',
  'FreshBooks virtual assistant',
  '/tools/freshbooks'
);

const faqs = [
  {
    question: 'Can FreshBooks replace QuickBooks or Xero?',
    answer: 'No. FreshBooks is specialized for invoicing and project accounting, not full general ledger bookkeeping. Many businesses use FreshBooks + QuickBooks/Xero together. Your VA can manage that integration, syncing invoice data from FreshBooks to your main accounting system.'
  },
  {
    question: 'How does FreshBooks handle time tracking for billable projects?',
    answer: 'FreshBooks has native time tracking. Your VA will set up projects, track time against them, configure billable vs non-billable rates, and generate invoices based on time logged. Ideal for agencies and consultants that bill hourly.'
  },
  {
    question: 'Can my team use FreshBooks while a VA manages it?',
    answer: 'Yes. FreshBooks supports multiple users with role-based permissions. Your VA can set up user roles, manage access, provide training, and ensure data flows correctly while team members log time and expenses.'
  },
  {
    question: 'Does FreshBooks integrate with QuickBooks or Xero?',
    answer: 'Yes. FreshBooks connects to both QBO and Xero. Your VA will manage the integration, ensuring invoices from FreshBooks sync to your main accounting system for final reconciliation and tax reporting.'
  },
  {
    question: 'Can a FreshBooks VA help with expense management?',
    answer: 'Yes. Your VA will set up expense categorization, manage mileage tracking, process receipt uploads, categorize for tax deduction, and reconcile expenses to projects for accurate profitability calculation.'
  }
];

export default function FreshBooksToolPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Tools', url: '/tools' },
          { name: 'FreshBooks', url: '/tools/freshbooks' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            FreshBooks Virtual Assistant
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            A dedicated FreshBooks expert who manages your invoicing, time tracking, project accounting, and expense reporting. Perfect for service businesses, consultants, and agencies that need accurate project profitability.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Your FreshBooks VA
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Who Needs a FreshBooks VA?</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            FreshBooks is specifically designed for service-based businesses: consultants, agencies, freelancers, professional services firms, and contractors. It excels at invoicing, time tracking, and project-level profitability. A dedicated VA ensures you're getting full value from FreshBooks while managing integrations with your main accounting system.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Agencies & Consultancies</p>
              <p className="text-sm text-text-mid">Bill clients by project or time. Track profitability per project. Multiple team members logging time and expenses. FreshBooks + VA = total project accounting visibility.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Freelancers & Contractors</p>
              <p className="text-sm text-text-mid">Invoice clients, track expenses, manage multiple projects. A VA handles administrative work (invoicing, follow-up) so you can focus on delivery.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Professional Services</p>
              <p className="text-sm text-text-mid">Law, accounting, architecture, engineering firms billing by time. FreshBooks + VA creates transparent project economics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What Your FreshBooks VA Manages</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Project Setup & Management</p>
              <p className="text-sm text-text-mid">Creating projects, setting project budgets, assigning team members, configuring project billing rates, and monitoring project status and profitability.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Time Tracking Administration</p>
              <p className="text-sm text-text-mid">Setting up time tracking categories, configuring billable vs non-billable rates, reviewing team time entries, and ensuring accurate time logging for invoicing.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Expense Management</p>
              <p className="text-sm text-text-mid">Processing expense submissions, categorizing expenses per project, managing mileage tracking, and allocating expenses to correct cost centers for profitability calculation.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Invoice Creation & Customization</p>
              <p className="text-sm text-text-mid">Generating invoices from time and expenses, customizing invoice templates, setting payment terms, adding custom fields, and managing invoice branding.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Payment Processing & Tracking</p>
              <p className="text-sm text-text-mid">Setting up payment methods (credit card, ACH, PayPal), processing payments, tracking payment status, and following up on overdue invoices.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Client & Vendor Management</p>
              <p className="text-sm text-text-mid">Maintaining client information, managing rates per client, organizing vendor contacts, and ensuring accurate billing for each relationship.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Reporting & Analysis</p>
              <p className="text-sm text-text-mid">Generating profitability reports by project, time & expense analysis, project budget vs actual, client profitability analysis, and team utilization reports.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Integration Management</p>
              <p className="text-sm text-text-mid">Syncing data with your accounting system (QB or Xero), managing payment processor integrations, and ensuring data flows correctly for reconciliation.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Team Support & Training</p>
              <p className="text-sm text-text-mid">Training team members on time entry, explaining project assignments, troubleshooting issues, and ensuring consistent data entry quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">FreshBooks + QuickBooks/Xero Integration</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            Many service businesses use FreshBooks for invoicing and project management, then sync to QuickBooks or Xero for full bookkeeping and tax reporting. Your VA manages both:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">FreshBooks Side</p>
              <ul className="text-sm text-text-mid space-y-2">
                <li>✓ Client management</li>
                <li>✓ Project setup</li>
                <li>✓ Time & expense tracking</li>
                <li>✓ Invoice generation</li>
                <li>✓ Payment collection</li>
                <li>✓ Project profitability</li>
              </ul>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">QB/Xero Side</p>
              <ul className="text-sm text-text-mid space-y-2">
                <li>✓ Income recording</li>
                <li>✓ AR aging & follow-up</li>
                <li>✓ General ledger</li>
                <li>✓ Bank reconciliation</li>
                <li>✓ Expense tracking</li>
                <li>✓ Tax reporting</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-text-mid mt-8 max-w-3xl mx-auto">
            Your VA synchronizes both systems, ensuring billing, project costs, and financial reporting all align. You get project visibility in FreshBooks and financial compliance in QuickBooks/Xero.
          </p>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">FreshBooks Integrations Your VA Manages</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Accounting Platforms</p>
              <p className="text-sm text-text-mid">QuickBooks Online, Xero. Your VA ensures invoice data syncs to your accounting system.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Payment Processing</p>
              <p className="text-sm text-text-mid">Stripe, PayPal, Square. Customers pay invoices directly in FreshBooks.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Expense Tracking</p>
              <p className="text-sm text-text-mid">Receipt Bank, Expensify. Expenses auto-import to FreshBooks for allocation.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">CRM & Project Tools</p>
              <p className="text-sm text-text-mid">HubSpot, Pipedrive, Asana, Monday.com. Client data and projects sync seamlessly.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Payroll</p>
              <p className="text-sm text-text-mid">Gusto, ADP, Paychex. Payroll costs can be allocated to projects.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Slack & Email</p>
              <p className="text-sm text-text-mid">Automated notifications for invoice reminders, payment received, project milestones.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">FreshBooks VA Pricing & Services</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-mint/10 p-8 rounded-lg border-2 border-mint mb-6">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Part-Time FreshBooks VA: $700/month</h3>
              <p className="text-text-mid mb-6">20 hours per week of FreshBooks and invoicing management.</p>
              <ul className="space-y-3 text-text-mid mb-6">
                <li>✓ Project setup & management</li>
                <li>✓ Invoice generation & customization</li>
                <li>✓ Time entry review & approval</li>
                <li>✓ Expense processing & categorization</li>
                <li>✓ Payment tracking & follow-up</li>
                <li>✓ Basic FreshBooks reporting</li>
                <li>✓ Team support & training</li>
                <li>✓ QB/Xero sync management (basic)</li>
              </ul>
              <p className="text-forest font-600">Ideal for: Small service businesses, 1-5 team members, under $1M revenue</p>
            </div>

            <div className="bg-mint/10 p-8 rounded-lg border-2 border-mint">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Full-Time FreshBooks VA: $1,300/month</h3>
              <p className="text-text-mid mb-6">40 hours per week of dedicated FreshBooks management plus advanced services.</p>
              <ul className="space-y-3 text-text-mid mb-6">
                <li>✓ Everything in Part-Time, plus:</li>
                <li>✓ Advanced project costing & profitability</li>
                <li>✓ Custom report automation</li>
                <li>✓ Client profitability analysis</li>
                <li>✓ Team utilization reporting</li>
                <li>✓ Budget vs actual tracking</li>
                <li>✓ Advanced integration management</li>
                <li>✓ Weekly financial reviews</li>
                <li>✓ FreshBooks optimization consulting</li>
              </ul>
              <p className="text-forest font-600">Ideal for: Growing agencies, 10+ team members, $1M-$5M+ revenue, complex projects</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Hands-Off FreshBooks Management</h2>
          <p className="text-mint mb-6">Expert invoicing, time tracking, and project accounting. Dedicated VA for your growing agency.</p>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your FreshBooks Consultation</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
