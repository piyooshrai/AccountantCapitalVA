import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'QuickBooks Desktop Virtual Assistant | QBD Bookkeeping VA',
  'A dedicated QuickBooks Desktop VA specializes in QBD bookkeeping, payroll setup, multi-user management, data backup, and migration to QBO. Expert in both Premier and Enterprise editions.',
  'QuickBooks Desktop virtual assistant',
  '/tools/quickbooks-desktop'
);

const faqs = [
  {
    question: 'Should I migrate from QuickBooks Desktop to QuickBooks Online?',
    answer: 'That depends on your business. If you have 5+ users, frequent data issues, or need mobile access, QBO is better. If you have complex job costing, multi-location with centralized reporting, or older integrations, QBD might be the right choice. Your VA can assess your specific situation and make a recommendation.'
  },
  {
    question: 'Can a QuickBooks Desktop VA handle both QBD and QBO?',
    answer: 'Yes. Most modern VAs are trained in both. At Accountant Capital VA, our bookkeepers can manage QuickBooks Desktop or Online depending on your preference. We also manage migrations between the two if you decide to upgrade.'
  },
  {
    question: 'What happens if QuickBooks discontinues Desktop support?',
    answer: 'Intuit has already extended Desktop support through 2025, with a potential extension. If you decide to migrate before then, your VA will manage the entire process. They'll map your chart of accounts, validate data, set up integrations in QBO, and ensure zero loss of historical records.'
  },
  {
    question: 'Can a VA access my QuickBooks Desktop file remotely?',
    answer: 'Yes, if you\'re using QBD Cloud (Hosted on Intuit\'s servers) or if we set up a secure remote access solution. Your VA has role-based permissions, audit logs show who accessed what and when, and data is encrypted. Your security is prioritized.'
  },
  {
    question: 'How does payroll work in QuickBooks Desktop with a VA?',
    answer: 'Your VA can set up payroll in QBD, enter hours/salaries, generate payroll, and integrate with a third-party processor (Intuit Payroll, ADP, Paychex). Or they can manage payroll entirely through a separate platform and reconcile it back to QBD—whatever works best for your cash flow.'
  }
];

export default function QuickBooksDesktopToolPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Tools', url: '/tools' },
          { name: 'QuickBooks Desktop', url: '/tools/quickbooks-desktop' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            QuickBooks Desktop Virtual Assistant
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            A specialized QBD bookkeeper for your QuickBooks Desktop setup. Expert in multiple-user management, data backup, complex job costing, multi-location reporting, and smooth transitions to QuickBooks Online if you ever need to upgrade.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Hire Your QBD VA
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Who Needs a QuickBooks Desktop VA?</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            QuickBooks Desktop is still widely used, especially by businesses that value local data storage, don't need mobile access, or have invested heavily in desktop-specific workflows. A dedicated QBD VA is crucial for:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Complex Job Costing</p>
              <p className="text-sm text-text-mid">Construction, professional services, and manufacturing companies that need detailed job costing, progress billing, and subcontractor management. QBD's job costing engine is superior to QBO's for these use cases.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Multi-Location Reporting</p>
              <p className="text-sm text-text-mid">Companies with multiple locations, franchises, or divisions that need consolidated reporting. QBD makes it easier to track profitability per location without API complexity.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Legacy Integrations</p>
              <p className="text-sm text-text-mid">Older accounting workflows, custom QB integrations, or specialized industry software that works better with QBD than QBO. Migration would break those integrations.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Data Sensitivity</p>
              <p className="text-sm text-text-mid">Businesses that prefer local server data storage over cloud-based (compliant, privacy-focused, or regulatory reasons). QBD keeps data on your hardware.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-606 text-forest mb-3">5+ Users</p>
              <p className="text-sm text-text-mid">QBD Enterprise handles unlimited users better than QBO Plus/Premium (which caps users). Larger teams benefit from QBD's multi-user infrastructure.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-606 text-forest mb-3">Budget Conscious</p>
              <p className="text-sm text-text-mid">QBD is a one-time purchase with optional annual support. No subscription fees. Lower cost of ownership for stable, mature businesses.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What Does a QuickBooks Desktop VA Handle?</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Daily Transaction Entry</p>
              <p className="text-sm text-text-mid">Entering invoices, checks, purchases, payroll, and bank deposits. Categorizing transactions correctly for tax preparation. Reconciling accounts daily.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Multi-User Account Management</p>
              <p className="text-sm text-text-mid">Setting up user roles and permissions, managing access for accountants/staff/owners, audit trails, backup coordination, and troubleshooting access conflicts.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Bank & Credit Card Reconciliation</p>
              <p className="text-sm text-text-mid">Monthly reconciliation for all accounts, identifying timing differences, matching deposits and checks, clearing exceptions.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Job Costing & Project Profitability</p>
              <p className="text-sm text-text-mid">Setting up jobs, tracking costs per job, progress billing, identifying profitable vs unprofitable projects, generating job profitability reports.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Multi-Location Consolidation</p>
              <p className="text-sm text-text-mid">Tracking separate P&Ls per location, consolidating for corporate reporting, managing inter-company transactions, location-level profitability analysis.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Payroll Setup & Management</p>
              <p className="text-sm text-text-mid">Setting up payroll in QBD, entering hours/salaries, generating payroll, coordinating with external payroll processor if used, tracking payroll taxes.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Backup & Data Integrity</p>
              <p className="text-sm text-text-mid">Daily/weekly backups, verifying backup integrity, disaster recovery planning, and audit trail maintenance. Your QBD file is never at risk.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Month-End & Year-End Close</p>
              <p className="text-sm text-text-mid">Reconciliation, closing procedures, adjusting entries, depreciation, preparing financial statements for CPA or lender, tax return support.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">QBD to QBO Migration (Optional)</p>
              <p className="text-sm text-text-mid">If you decide to upgrade to QuickBooks Online, your VA manages the entire migration: data conversion, mapping, validation, integration setup, and parallel testing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">QBD Editions Your VA Supports</h2>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6 mb-8">
              <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
                <p className="font-600 text-forest mb-3">QuickBooks Desktop Premier</p>
                <p className="text-sm text-text-mid">Single or multi-user. Good for job costing and service businesses. Your VA manages charts of accounts, classes, and job tracking.</p>
              </div>

              <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
                <p className="font-600 text-forest mb-3">QuickBooks Desktop Enterprise</p>
                <p className="text-sm text-text-mid">Unlimited users, more complex reporting, advanced customization. Your VA ensures data integrity, user management, and backup protocols across your entire team.</p>
              </div>

              <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
                <p className="font-600 text-forest mb-3">QuickBooks Desktop Cloud (Hosted)</p>
                <p className="text-sm text-text-mid">QBD hosted on Intuit's servers. Your VA accesses securely, works with you remotely, and manages the hosted environment seamlessly.</p>
              </div>
            </div>

            <p className="text-center text-text-mid italic">
              Regardless of edition, your VA will be trained and certified to maximize your QBD investment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">QuickBooks Desktop vs QuickBooks Online: A VA Perspective</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg">
              <thead>
                <tr className="bg-forest text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left">QBD</th>
                  <th className="p-4 text-left">QBO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone">
                  <td className="p-4 font-600 text-forest">Job Costing</td>
                  <td className="p-4">Excellent, advanced</td>
                  <td className="p-4">Basic, limited</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="p-4 font-600 text-forest">Multi-Location Reporting</td>
                  <td className="p-4">Native, centralized</td>
                  <td className="p-4">Requires workarounds</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="p-4 font-600 text-forest">Users (Unlimited)</td>
                  <td className="p-4">Enterprise Edition</td>
                  <td className="p-4">Plus/Premium capped</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="p-4 font-600 text-forest">Integrations</td>
                  <td className="p-4">Older/legacy tools</td>
                  <td className="p-4">500+ modern integrations</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="p-4 font-600 text-forest">Mobile Access</td>
                  <td className="p-4">Limited (Cloud option)</td>
                  <td className="p-4">Native, full-featured</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="p-4 font-600 text-forest">Cloud/Local Storage</td>
                  <td className="p-4">Local (more privacy)</td>
                  <td className="p-4">Cloud-only</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="p-4 font-600 text-forest">Cost</td>
                  <td className="p-4">One-time, cheaper</td>
                  <td className="p-4">Monthly subscription</td>
                </tr>
                <tr>
                  <td className="p-4 font-600 text-forest">VA Accessibility</td>
                  <td className="p-4">Via remote access</td>
                  <td className="p-4">Native, easier</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-text-mid mt-8 max-w-3xl mx-auto">
            Bottom line: QBD is better if you have complex job costing, multiple locations, or many users. QBO is better if you want modern integrations, mobile access, or cloud-only preference. Your VA can manage either—choose based on your business needs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">QBD VA Pricing & Service Levels</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-mint/10 p-8 rounded-lg border-2 border-mint mb-6">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Part-Time QBD VA: $700/month</h3>
              <p className="text-text-mid mb-6">20 hours per week of QuickBooks Desktop management.</p>
              <ul className="space-y-3 text-text-mid mb-6">
                <li>✓ Daily transaction entry</li>
                <li>✓ Monthly reconciliation (all accounts)</li>
                <li>✓ Basic job tracking</li>
                <li>✓ Multi-user access management</li>
                <li>✓ Monthly reporting</li>
                <li>✓ Backup supervision</li>
                <li>✓ Tax preparation support</li>
                <li>✓ QBD troubleshooting</li>
              </ul>
              <p className="text-forest font-600">Ideal for: Small businesses with 1-3 users, simple job structure, $500K-$2M revenue</p>
            </div>

            <div className="bg-mint/10 p-8 rounded-lg border-2 border-mint">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Full-Time QBD VA: $1,300/month</h3>
              <p className="text-text-mid mb-6">40 hours per week of dedicated QBD management, plus advanced services.</p>
              <ul className="space-y-3 text-text-mid mb-6">
                <li>✓ Everything in Part-Time, plus:</li>
                <li>✓ Advanced job costing & profitability analysis</li>
                <li>✓ Multi-location consolidation</li>
                <li>✓ Complex payroll setup & integration</li>
                <li>✓ Historical data cleanup & audit</li>
                <li>✓ Weekly check-ins and health reports</li>
                <li>✓ QBD to QBO migration planning (if needed)</li>
                <li>✓ Direct CPA communication during tax season</li>
              </ul>
              <p className="text-forest font-600">Ideal for: Growing companies with 5+ users, complex jobs, $2M+ revenue, multiple locations</p>
            </div>

            <p className="text-center text-text-mid mt-8">
              Enterprise custom pricing available. All QBD VAs are certified, experienced, and backed by liability insurance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Your QBD VA Onboarding Timeline</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-forest text-white font-bold">1</div>
              </div>
              <div>
                <p className="font-600 text-forest mb-2">Days 1-2: Discovery & Access</p>
                <p className="text-text-mid">You brief your VA on your business, financials, and any outstanding issues. We arrange secure access to your QBD file (local, cloud, or remote access).</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-forest text-white font-bold">2</div>
              </div>
              <div>
                <p className="font-600 text-forest mb-2">Days 3-5: Audit & Planning</p>
                <p className="text-text-mid">Your VA audits your QBD setup: chart of accounts, class structure, job setup, user roles, backup status. Identifies any issues or cleanup needed.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-forest text-white font-bold">3</div>
              </div>
              <div>
                <p className="font-600 text-forest mb-2">Week 2: Configuration & Training</p>
                <p className="text-text-mid">Your VA optimizes user permissions, sets up backup protocols, creates workflows documentation, and trains your team on best practices.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-forest text-white font-bold">4</div>
              </div>
              <div>
                <p className="font-600 text-forest mb-2">Week 3 Onward: Active Management</p>
                <p className="text-text-mid">Your VA manages your QBD daily, handles reconciliation, processes payroll, manages job costing, and provides weekly updates. You're hands-off.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Get Expert QuickBooks Desktop Management</h2>
          <p className="text-mint mb-6">A dedicated VA for your QBD setup. Hands-off bookkeeping, expert management.</p>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your QBD Consultation</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
