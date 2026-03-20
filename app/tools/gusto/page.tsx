import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Gusto Payroll Virtual Assistant | Payroll & HR VA',
  'A dedicated Gusto VA manages payroll processing, tax compliance, benefits administration, employee onboarding, and payroll tax filing. Expert in Gusto workflows and integrations.',
  'Gusto payroll virtual assistant',
  '/tools/gusto'
);

const faqs = [
  {
    question: 'Can a Gusto VA help with employee benefits setup?',
    answer: 'Yes. Your VA will help configure health insurance, retirement plans (401k), dependent care FSA, and other benefits. They ensure employees are properly enrolled and deductions are calculated correctly.'
  },
  {
    question: 'Does Gusto handle state and federal tax filing?',
    answer: 'Gusto automates tax filing for most states. Your VA ensures setup is correct, files required forms on time, and handles any edge cases or state-specific compliance (PTE filings, quarterly reports, etc.).'
  },
  {
    question: 'How does a Gusto VA integrate with QuickBooks or Xero?',
    answer: 'Gusto integrates natively with QBO and Xero. Your VA sets up the connection, ensures payroll expense posts correctly to your accounting system, and reconciles monthly to confirm accuracy.'
  },
  {
    question: 'Can my employees use Gusto directly while a VA manages it?',
    answer: 'Absolutely. Employees can log time, view pay stubs, and update personal info in Gusto. Your VA manages the payroll processing, tax compliance, and accounting integration on the backend.'
  },
  {
    question: 'What if I have remote employees in multiple states?',
    answer: 'Gusto handles multi-state payroll complexity. Your VA will set up proper tax withholding per state, manage state-specific requirements, and ensure compliance for each location.'
  }
];

export default function GustoToolPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Tools', url: '/tools' },
          { name: 'Gusto', url: '/tools/gusto' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Gusto Payroll Virtual Assistant
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            A dedicated Gusto expert who manages your payroll processing, tax compliance, benefits administration, and HR workflows. From employee onboarding to quarterly tax filings—your Gusto VA handles all payroll complexity.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Your Gusto VA
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why Gusto Needs a Dedicated VA</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            Gusto is powerful but complex. Payroll isn't just processing—it's tax compliance, benefits management, HR record-keeping, and integration with accounting. A dedicated VA ensures everything is done correctly and on time, while you focus on your team and business.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Compliance Guarantee</p>
              <p className="text-sm text-text-mid">Payroll tax is non-negotiable. Your VA ensures federal, state, and local taxes are calculated correctly, filed on time, and penalties are avoided.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Time Management</p>
              <p className="text-sm text-text-mid">Payroll processing takes time every pay period. Your VA handles it, freeing you to focus on strategy instead of spreadsheets.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Accuracy & Record-Keeping</p>
              <p className="text-sm text-text-mid">Gusto is sophisticated. Your VA ensures accurate setup, handles edge cases, and maintains audit-ready records for tax season and employee disputes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What Your Gusto VA Manages</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Employee Onboarding</p>
              <p className="text-sm text-text-mid">Setting up new employees in Gusto, collecting W-4 and tax forms, configuring pay rates, benefits elections, and direct deposit information.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Payroll Processing</p>
              <p className="text-sm text-text-mid">Managing pay schedules (weekly, bi-weekly, monthly), processing timesheets or fixed salaries, calculating gross and net pay, and ensuring accuracy before each pay run.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Tax Withholding & Filing</p>
              <p className="text-sm text-text-mid">Calculating federal, state, and local income tax withholding, managing FICA (Social Security/Medicare), and filing quarterly payroll tax returns (941, state equivalents).</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Benefits Administration</p>
              <p className="text-sm text-text-mid">Setting up health insurance, 401k contributions, FSA/HSA, life insurance. Processing changes, deducting premiums, and ensuring COBRA compliance.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Year-End Payroll Compliance</p>
              <p className="text-sm text-text-mid">Preparing W-2 forms, processing year-end reconciliation, handling 1099 contractors, and ensuring all annual filings are submitted on time.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Accounting Integration</p>
              <p className="text-sm text-text-mid">Ensuring payroll expense posts correctly to QuickBooks or Xero, managing accruals, and reconciling payroll amounts monthly.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Contractor & 1099 Management</p>
              <p className="text-sm text-text-mid">Tracking contractor payments, generating 1099-NEC forms, managing contractor tax compliance separate from employees.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Multi-State Payroll</p>
              <p className="text-sm text-text-mid">Managing employees across multiple states, handling state-specific tax withholding, unemployment insurance, and local compliance per jurisdiction.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Employee Support & Reporting</p>
              <p className="text-sm text-text-mid">Answering employee payroll questions, providing pay stub information, troubleshooting direct deposit, and generating payroll reports for management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Gusto Integrations Your VA Manages</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Accounting Systems</p>
              <p className="text-sm text-text-mid">QuickBooks Online, Xero, Wave. Your VA syncs payroll expense automatically and reconciles monthly.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Time Tracking</p>
              <p className="text-sm text-text-mid">Gusto, Harvest, Toggl, Clockify. Your VA imports time data and processes hourly payroll accurately.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Benefits Providers</p>
              <p className="text-sm text-text-mid">Health insurance carriers, 401k providers, FSA administrators. Your VA coordinates benefits deductions and enrollments.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Tax Software</p>
              <p className="text-sm text-text-mid">Gusto handles tax filings. Your VA ensures forms are submitted and records are maintained for your CPA.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Banking & Payment Processing</p>
              <p className="text-sm text-text-mid">ACH, direct deposit, tax payments. Your VA ensures payroll funding is available and all payments clear on time.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Communication Tools</p>
              <p className="text-sm text-text-mid">Slack, email integrations for payroll notifications and employee onboarding workflows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Gusto Payroll Setup with a VA</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            Initial Gusto setup is critical. Your VA will configure everything correctly from day one:
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Company Setup</p>
              <p className="text-sm text-text-mid">Legal entity, tax IDs (EIN), federal/state registration, unemployment insurance setup, industry classification.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Pay Schedule Configuration</p>
              <p className="text-sm text-text-mid">Selecting frequency (weekly, bi-weekly, monthly), pay dates, cut-off dates, and coordinating with accounting cycles.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Tax Setup</p>
              <p className="text-sm text-text-mid">Federal tax configuration, state & local tax setup per employee location, estimated tax calculations, and quarterly filing schedules.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Benefits Configuration</p>
              <p className="text-sm text-text-mid">Health insurance vendor setup, 401k plan setup, dependent care FSA, HSA, and other benefit elections.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Integration Setup</p>
              <p className="text-sm text-text-mid">Connecting Gusto to QuickBooks/Xero, configuring payroll expense accounts, and setting up automatic syncing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Gusto VA Pricing</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-mint/10 p-8 rounded-lg border-2 border-mint mb-6">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Part-Time Gusto VA: $700/month</h3>
              <p className="text-text-mid mb-6">20 hours per week of payroll and benefits administration.</p>
              <ul className="space-y-3 text-text-mid mb-6">
                <li>✓ Employee onboarding & offboarding</li>
                <li>✓ Bi-weekly/monthly payroll processing</li>
                <li>✓ Tax withholding & quarterly filings</li>
                <li>✓ Benefits administration</li>
                <li>✓ Basic accounting integration (QB/Xero)</li>
                <li>✓ Employee payroll inquiries</li>
                <li>✓ Monthly reconciliation</li>
                <li>✓ Year-end W-2 preparation</li>
              </ul>
              <p className="text-forest font-600">Ideal for: Small companies 5-25 employees, simple payroll, single state</p>
            </div>

            <div className="bg-mint/10 p-8 rounded-lg border-2 border-mint">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Full-Time Gusto VA: $1,300/month</h3>
              <p className="text-text-mid mb-6">40 hours per week of dedicated payroll management and HR support.</p>
              <ul className="space-y-3 text-text-mid mb-6">
                <li>✓ Everything in Part-Time, plus:</li>
                <li>✓ Advanced benefits consultation & optimization</li>
                <li>✓ Multi-state payroll & compliance</li>
                <li>✓ 1099 contractor management</li>
                <li>✓ Payroll audit & compliance review</li>
                <li>✓ Advanced accounting reconciliation</li>
                <li>✓ Custom payroll reporting</li>
                <li>✓ HR process documentation</li>
                <li>✓ Tax planning coordination with CPA</li>
              </ul>
              <p className="text-forest font-600">Ideal for: Growing companies 25-100+ employees, multi-state, complex benefits, high compliance needs</p>
            </div>

            <p className="text-center text-text-mid mt-8">
              Custom pricing available for enterprises with 100+ employees. All Gusto VAs are certified and backed by liability insurance.
            </p>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Hands-Off Payroll & Tax Compliance</h2>
          <p className="text-mint mb-6">Expert Gusto management. Never worry about payroll or tax filings again.</p>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your Payroll Consultation</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
