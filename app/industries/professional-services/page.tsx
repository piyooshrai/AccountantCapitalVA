import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Bookkeeping Virtual Assistant for Professional Services Firms',
  'Expert bookkeeping VA for consultants, accountants, lawyers, architects, engineers. Time tracking, project profitability, client billing, AR management. Starting at $700/mo.',
  'bookkeeping virtual assistant for professional services',
  '/industries/professional-services'
);

const faqs = [
  {
    question: 'How do you handle billable hours and project tracking?',
    answer: 'Your VA reviews time tracking data (from Harvest, Toggl, or manual timesheets), matches hours to clients/projects, and ensures all billable time gets invoiced. No unbilled hours slip through.'
  },
  {
    question: 'Can you track profitability by project or client?',
    answer: 'Yes. We assign revenue and expenses to specific projects or clients. You see which engagements are profitable, which are break-even, and which are losing money. Pricing power comes from this data.'
  },
  {
    question: 'What if our retainer clients have monthly expenses I need to track?',
    answer: 'Your VA logs retainer revenue when earned, matches expenses to the correct client, and produces monthly client P&Ls. You see whether a retainer is profitable or needs repricing.'
  },
  {
    question: 'How do we handle work-in-progress (WIP) accounting?',
    answer: 'For firms that use WIP (unbilled hours), your VA records accrual entries monthly so your financial statements reflect revenue earned even if invoices haven\'t gone out. Clean GAAP accounting.'
  },
  {
    question: 'Do you coordinate with our accounting firm?',
    answer: 'Yes. Your VA can share reports directly with your CPA, provide backup documentation, and answer questions about transaction coding. Clean handoff during tax time.'
  }
];

export default function ProfessionalServicesPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Industries', url: '/industries' },
          { name: 'Professional Services', url: '/industries/professional-services' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Bookkeeping Virtual Assistant for Professional Services Firms
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Expert bookkeeping for consultants, accountants, lawyers, architects, engineers. Time tracking, project profitability, client billing, AR management. Know which clients are profitable. Starting at $700/month.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">The Professional Services Accounting Challenge</h2>

          <div className="space-y-6">
            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Billable Hours Chaos</p>
              <p className="text-text-mid">Your team is in Harvest, time data is scattered across timesheets, and reconciling hours to invoices is manual. You suspect some hours go unbilled, but you're not sure how much revenue you're leaving on the table.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Profitability Blindness by Client</p>
              <p className="text-text-mid">You have 20 clients. Revenue looks healthy. But which ones are actually profitable after accounting for discounts, revisions, and overhead? You don't know. You might be losing money on your largest clients.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Retainer Accounting Headache</p>
              <p className="text-text-mid">Retainer clients should be predictable. But you're not tracking expenses to retainers, so you don't know if they're actually profitable. A retainer that seems like $5K revenue might only net $1.5K after you account for costs.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Accounts Receivable Leakage</p>
              <p className="text-text-mid">Invoices go out, but follow-ups are irregular. Some clients take 60+ days to pay. Your cash flow is unpredictable. You're funding your clients' operations with slow payment.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">WIP Accounting Confusion</p>
              <p className="text-text-mid">Are you using WIP (work-in-progress)? Or accrual basis? Or cash basis? Your financial statements might not reflect reality. Your balance sheet could be off by thousands.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">Pricing Decisions Based on Guesses</p>
              <p className="text-text-mid">You don't have project-level profitability data, so you can't raise rates on low-margin work. You keep undercharging for high-value services because you think they're less profitable than they are.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">How Professional Services Firms Grow with a Bookkeeping VA</h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Month 1: Hours Get Tracked Properly</h3>
                <p className="text-text-mid text-sm">Your VA reconciles time tracking to invoices. You discover $8,000/month in unbilled hours. You fix this immediately by adjusting processes and invoicing procedures. Instant +$96K annual revenue.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Month 2: Client Profitability Is Visible</h3>
                <p className="text-text-mid text-sm">Your VA produces client-level P&Ls. You see that Client A (your "best client") is actually barely profitable after expenses. Client B (smaller revenue) nets 35%. You start raising rates on Client A and protecting Client B's engagement.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Month 3: AR Gets Managed</h3>
                <p className="text-text-mid text-sm">Your VA follows up on overdue invoices proactively. Average collection time drops from 45 days to 25 days. Your cash position improves immediately. You can forecast cash flow accurately now.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Ongoing: Strategic Pricing</h3>
                <p className="text-text-mid text-sm">With project-level profitability data, you start repricing engagements. Low-margin work gets rate increases. You stop discounting high-value services. Firm margin improves 3-5% year-over-year.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Services Most Relevant to Professional Services</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/services/bookkeeping" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Bookkeeping</p>
              <p className="text-text-mid text-sm">Core foundation. Daily transaction recording, client coding, monthly reconciliation.</p>
            </Link>

            <Link href="/services/invoicing-ar" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">Invoicing & AR</p>
              <p className="text-text-mid text-sm">Invoice creation from time tracking data, collection follow-ups, aging report management.</p>
            </Link>

            <Link href="/services/financial-reporting" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Financial Reporting</p>
              <p className="text-text-mid text-sm">Client-level P&Ls, project profitability dashboards, monthly management reporting.</p>
            </Link>

            <Link href="/services/expense-ap" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Expense & AP</p>
              <p className="text-text-mid text-sm">Expense allocation to clients/projects, vendor management, payment scheduling.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Typical Professional Services Firm Profile</h2>

          <div className="space-y-4 max-w-3xl">
            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">Solo Consultant</p>
              <p className="text-text-mid text-sm">Revenue $150K-$300K. You invoice a handful of clients. Time tracking is manual or Excel-based. Part-Time VA ($700/mo) reconciles invoicing, tracks AR, produces monthly P&Ls. You know your cash position.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">Small Firm (5-10 team members)</p>
              <p className="text-text-mid text-sm">Revenue $600K-$1.5M. 10-15 active clients. Time tracked in Harvest or similar. Part-Time or Full-Time VA ($700-1,300/mo) manages invoicing, AR, client-level profitability, retainer accounting. You can see which clients are truly profitable.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-606 text-forest mb-2">Growing Firm (10-20 team members)</p>
              <p className="text-text-mid text-sm">Revenue $1.5M-$3M. 20-30 clients, maybe some retainers. Full-Time VA ($1,300/mo) handles bookkeeping, invoicing, WIP accounting, client P&Ls, project profitability analysis. Supports pricing strategy and client retention decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Why Professional Services Firms Choose Accountant Capital VA</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Hours-to-Revenue Tracking</p>
              <p className="text-text-mid text-sm">We reconcile time tracking (Harvest, Toggl) to invoices. Every billable hour gets captured. Your first month with us usually uncovers $5K-$10K in missed billing.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Client Profitability Visibility</p>
              <p className="text-text-mid text-sm">Client-level P&Ls show which engagements are actually profitable. You make smarter pricing and resource allocation decisions.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ WIP Accounting Expertise</p>
              <p className="text-text-mid text-sm">If you use accrual basis with WIP, we handle monthly accrual entries. Your financial statements reflect work performed, not just work invoiced.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-606 text-forest mb-2">✓ AR Management</p>
              <p className="text-text-mid text-sm">Proactive follow-up on overdue invoices. Average collection time drops. Cash flow becomes predictable and strong.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Retainer Accounting</p>
              <p className="text-text-mid text-sm">Monthly retainer P&Ls show true profitability. You know if a retainer should be upsold, maintained, or let go.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Growth Support</p>
              <p className="text-text-mid text-sm">As you grow from 5 to 15 to 25 team members, accounting stays organized. Same VA, consistent systems, increasing sophistication.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to know which clients are really profitable?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Book Your Strategy Call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
