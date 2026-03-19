import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Construction Bookkeeping Virtual Assistant',
  'Expert construction accounting VA. Job costing, progress billing, retainage tracking, equipment depreciation, prevailing wage compliance, 1099 contractor management. Starting at $1,200/mo.',
  'construction bookkeeping virtual assistant',
  '/industries/construction'
);

const faqs = [
  {
    question: 'How do you handle job costing for multiple projects?',
    answer: 'Each job gets its own cost code or project. Labor, materials, equipment, subcontractors—all assigned to the correct job. You see cost-to-date vs. budget for each project. Overruns get caught immediately.'
  },
  {
    question: 'What about progress billing and retainage?',
    answer: 'We track invoices by job phase, record retainage (typically 5-10% held by customer until project completion), and manage retainage releases. You know when retainage cash actually arrives.'
  },
  {
    question: 'Can you manage subcontractor 1099s and compliance?',
    answer: 'Yes. We track all subcontractors, ensure amounts paid, maintain documentation, and prepare 1099s. No compliance issues, no missing paperwork at year-end.'
  },
  {
    question: 'How do you handle equipment depreciation?',
    answer: 'We track equipment purchases, calculate depreciation correctly (using Section 179 deductions where applicable), and maintain depreciation schedules. Equipment cost becomes a tax benefit.'
  },
  {
    question: 'What about prevailing wage tracking?',
    answer: 'For prevailing wage projects, we track labor by classification, ensure rates are correct, and maintain documentation for audit purposes. Compliance is built into your bookkeeping.'
  }
];

export default function ConstructionPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Industries', url: '/industries' },
          { name: 'Construction', url: '/industries/construction' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Construction Bookkeeping Virtual Assistant
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Expert accounting for contractors and construction firms. Job costing, progress billing, retainage tracking, equipment depreciation, compliance reporting. Know your job profitability in real-time. Starting at $1,200/month.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">The Construction Accounting Challenge</h2>

          <div className="space-y-6">
            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Job Costing Complexity</p>
              <p className="text-text-mid">You have 8 active jobs. Labor, materials, equipment, and subcontractor costs all need to be assigned to the correct job. Most contractors just estimate job profitability and hope they're right.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Progress Billing Confusion</p>
              <p className="text-text-mid">Job A is 60% complete. You invoice for 60%. Customer retains 10% until job is done. Where's that $30,000 in retainage? Is it in cash or accounts receivable? You're not sure.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">Material & Subcontractor Tracking</p>
              <p className="text-text-mid">Materials ordered, delivered, used, or left on-site. Subcontractors paid, but were they paid the right amount? Which jobs haven't been fully paid by customers?</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Equipment Depreciation</p>
              <p className="text-text-mid">You just bought a $80,000 excavator. Can you deduct it entirely this year (Section 179)? Or do you depreciate over 5 years? You don't know and your CPA charges $500 to figure it out.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">1099 Contractor Nightmare</p>
              <p className="text-text-mid">Subcontractors for electrical, plumbing, HVAC. Who got paid over $600 and needs a 1099? You're scrambling in January to reconstruct the list.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Prevailing Wage Compliance</p>
              <p className="text-text-mid">Union jobs require prevailing wage tracking. You're not sure if you're categorizing labor correctly or maintaining the right documentation. One audit and you could face back pay penalties.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">How Construction Firms Grow</h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">Year 1</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Startup Contractor</h3>
                <p className="text-text-mid text-sm">Revenue $300K-$600K. 2-3 jobs in progress. Manual job costing (maybe Excel). Part-Time VA ($1,200/mo) sets up QuickBooks with job codes and starts tracking costs per job.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">Year 2-3</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Growing Contractor</h3>
                <p className="text-text-mid text-sm">Revenue $1M-$2M. 6-10 active jobs. Subcontractor use increasing. Full-Time VA ($1,200-1,500/mo) handles job costing, progress billing, retainage tracking, 1099 documentation.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">Year 4+</div>
              <div>
                <h3 className="font-606 text-forest mb-1">Established Contractor</h3>
                <p className="text-text-mid text-sm">Revenue $2M+. 15+ active jobs. Union work, prevailing wage projects. Full-Time VA plus occasional contract bookkeeper support for complex projects or multi-location operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Services Most Relevant to Construction</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/services/bookkeeping" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Bookkeeping</p>
              <p className="text-text-mid text-sm">Job costing, expense allocation by job, daily labor and material tracking.</p>
            </Link>

            <Link href="/services/invoicing-ar" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">Invoicing & AR</p>
              <p className="text-text-mid text-sm">Progress invoicing by project phase, retainage tracking and release coordination.</p>
            </Link>

            <Link href="/services/expense-ap" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Expense & AP</p>
              <p className="text-text-mid text-sm">Material invoice matching, subcontractor payment coordination, 1099 preparation.</p>
            </Link>

            <Link href="/services/financial-reporting" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Financial Reporting</p>
              <p className="text-text-mid text-sm">Job profitability reports, cost-to-budget variance analysis, equipment asset tracking.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Construction Accounting Best Practices</h2>

          <div className="space-y-4 max-w-3xl">
            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Job Costing by Phase</p>
              <p className="text-text-mid text-sm">Each job broken into phases (materials, labor, subcontractors). You see cost-to-date vs. budget. Overruns get caught before they spiral.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-606 text-forest mb-2">✓ Progress Billing with Retainage</p>
              <p className="text-text-mid text-sm">Invoices issued per project milestone. Retainage tracked separately so you know when it'll actually arrive. Cash flow forecasting becomes possible.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Equipment Depreciation Planning</p>
              <p className="text-text-mid text-sm">Equipment purchases analyzed for Section 179 deduction potential. Depreciation schedules maintained. Tax benefits maximized.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ 1099 Contractor Tracking</p>
              <p className="text-text-mid text-sm">Subcontractors tracked, payments recorded, 1099s prepared. Year-end compliance is automatic, not scrambled.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Prevailing Wage Compliance (if applicable)</p>
              <p className="text-text-mid text-sm">Labor tracked by classification, rates verified, documentation maintained. Compliance built into bookkeeping, not an afterthought.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Why Construction Firms Choose Accountant Capital VA</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Job Costing Expertise</p>
              <p className="text-text-mid text-sm">Not a general bookkeeper. We specialize in construction job costing. Cost-to-budget variance analysis, phase tracking, profitability by job.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-606 text-forest mb-2">✓ Real-Time Job Profitability</p>
              <p className="text-text-mid text-sm">Know if a job is profitable while it's still in progress. Catch cost overruns before they become disasters.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Retainage Management</p>
              <p className="text-text-mid text-sm">Track retainage by job and customer. Know when it'll arrive. No surprise cash shortfalls.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Compliance (1099s, Prevailing Wage)</p>
              <p className="text-text-mid text-sm">1099s prepared automatically. Prevailing wage tracking built-in for union jobs. Audit-ready documentation.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Equipment Depreciation Strategy</p>
              <p className="text-text-mid text-sm">Equipment purchases analyzed for tax optimization. Section 179 deductions captured. Depreciation schedules maintained.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Lender-Ready Books</p>
              <p className="text-text-mid text-sm">Bidding on large projects? Your job costing and balance sheet are loan-ready. Equipment asset documentation supports financing.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to know which jobs are truly profitable?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Book Your Strategy Call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
