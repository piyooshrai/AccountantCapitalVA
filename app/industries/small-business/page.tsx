import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Bookkeeping Virtual Assistant for Small Business',
  'Expert bookkeeping VA for small businesses. Daily transaction recording, monthly reconciliation, financial reporting. Avoid hiring full-time. Scale as you grow. Starting at $700/mo.',
  'bookkeeping virtual assistant for small business',
  '/industries/small-business'
);

const faqs = [
  {
    question: 'How much does a small business bookkeeper cost?',
    answer: 'Hiring locally costs $45K-$55K annually for a part-time bookkeeper. Accountant Capital VA is $700-$1,300/month ($8.4K-$15.6K annually) with no employment overhead, payroll taxes, or benefits costs. Plus you scale up or down month-to-month.'
  },
  {
    question: 'What if I outgrow the part-time plan?',
    answer: 'Many small businesses start with Part-Time ($700) and scale to Full-Time ($1,300) as revenue grows. Your VA is the same person, so continuity is maintained. No hiring, training, or turnover disruption.'
  },
  {
    question: 'Can a VA handle my multi-location business?',
    answer: 'Yes, if you have 2-3 small locations. Each gets a separate chart of accounts in your accounting software. Your VA reconciles all locations monthly. Large multi-location businesses may need custom pricing.'
  },
  {
    question: 'How quickly do I get financial reports?',
    answer: 'Most small businesses get monthly reports within 5-7 days after month-end (once bank statements arrive). Your VA prioritizes timeliness so you can make decisions fast.'
  },
  {
    question: 'What if I sell my business?',
    answer: 'Clean, organized books are valuable during due diligence. Your VA maintains audit-ready records, making the M&A process smoother. Many small business owners use our service specifically for this.'
  }
];

export default function SmallBusinessPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Industries', url: '/industries' },
          { name: 'Small Business', url: '/industries/small-business' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Bookkeeping Virtual Assistant for Small Business
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Professional bookkeeping without the overhead. Daily transaction recording, monthly reconciliation, financial reporting. Your dedicated bookkeeper scales with your growth. Starting at $700/month.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">The Small Business Bookkeeping Challenge</h2>

          <div className="space-y-6">
            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">No Time for Bookkeeping</p>
              <p className="text-text-mid">You're running the business—managing customers, hiring, selling, delivering. Bookkeeping takes 3-5 hours per week you don't have. You either fall behind or don't do it at all.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Hiring Is Risky</p>
              <p className="text-text-mid">You can't afford a full-time bookkeeper ($45K+/year with benefits). A part-time hire creates payroll complexity and turnover risk. Most small bookkeepers leave within 18 months for full-time roles.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Messy Books = Bad Decisions</p>
              <p className="text-text-mid">If you don't know your profit margin by product, your cash position next month, or your tax liability, you're making decisions blind. Growth becomes unpredictable.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">CPA Headaches</p>
              <p className="text-text-mid">Your CPA spends 20+ hours reconstructing your financials for tax time. You're billed for the cleanup. Clean books would save thousands.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Banks & Lenders Won't Wait</p>
              <p className="text-text-mid">If you need a loan or line of credit, lenders want clean financials within 10 days. Messy books mean you don't qualify. Or you wait months getting them ready.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">How Small Businesses Grow with a Bookkeeping VA</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Year 1: Foundation</h3>
              <p className="text-text-mid mb-4">You start with Part-Time ($700/mo). Your VA records daily transactions, reconciles monthly, and delivers reports on the 5th of each month. You finally know your profit.</p>
              <ul className="space-y-2 text-text-mid text-sm">
                <li className="flex gap-2"><span className="text-mint">→</span><span>Clean books for tax time (save $2K on CPA).</span></li>
                <li className="flex gap-2"><span className="text-mint">→</span><span>Cash flow visibility. You can forecast 3 months ahead.</span></li>
                <li className="flex gap-2"><span className="text-mint">→</span><span>Time saved: 12 hours/month on bookkeeping.</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Year 2-3: Scaling</h3>
              <p className="text-text-mid mb-4">Revenue grows 30-50%. You upgrade to Full-Time ($1,300/mo). Your VA now handles invoicing, AR follow-ups, and financial dashboards. You hire your first employee.</p>
              <ul className="space-y-2 text-text-mid text-sm">
                <li className="flex gap-2"><span className="text-mint">→</span><span>Profitability by product/service. You know what to sell more of.</span></li>
                <li className="flex gap-2"><span className="text-mint">→</span><span>Faster cash collection. AR aging reports catch slow-paying customers.</span></li>
                <li className="flex gap-2"><span className="text-mint">→</span><span>Tax planning. CPA can recommend strategies in October, not April.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Services Most Relevant to Small Business</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/bookkeeping" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Bookkeeping</p>
              <p className="text-text-mid text-sm">Core foundation. Daily transactions, monthly reconciliation, financial statements.</p>
            </Link>

            <Link href="/services/invoicing-ar" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Invoicing & AR</p>
              <p className="text-text-mid text-sm">If you invoice customers, your VA ensures they pay on time and follow up on overdue accounts.</p>
            </Link>

            <Link href="/services/bank-reconciliation" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Bank Reconciliation</p>
              <p className="text-text-mid text-sm">Monthly reconciliation catches errors early. Critical for loan qualification.</p>
            </Link>

            <Link href="/services/payroll-support" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Payroll Support</p>
              <p className="text-text-mid text-sm">Once you hire your first employee, payroll is non-negotiable. Your VA ensures accuracy and compliance.</p>
            </Link>

            <Link href="/services/expense-ap" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Expense & AP</p>
              <p className="text-text-mid text-sm">Bill processing and vendor management. Keeps your vendor relationships strong and payments on time.</p>
            </Link>

            <Link href="/services/tax-prep-support" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Tax Prep Support</p>
              <p className="text-text-mid text-sm">Year-end documentation. Work with your CPA for tax planning, not cleanup.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Real Cost Comparison</h2>

          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-mint">
                  <th className="text-left py-3 px-4 font-600 text-forest">Option</th>
                  <th className="text-right py-3 px-4 font-600 text-forest">Annual Cost</th>
                  <th className="text-left py-3 px-4 font-600 text-forest">Commitment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Hire Local Bookkeeper (Part-Time)</td>
                  <td className="text-right py-3 px-4 font-600 text-forest">$45,000 - $55,000</td>
                  <td className="py-3 px-4 text-text-mid text-sm">12 months + payroll taxes, benefits</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Accountant Capital VA (Part-Time)</td>
                  <td className="text-right py-3 px-4 font-600 text-mint">$8,400</td>
                  <td className="py-3 px-4 text-text-mid text-sm">Month-to-month, no overhead</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Bench (Essential)</td>
                  <td className="text-right py-3 px-4 font-600 text-forest">$2,988</td>
                  <td className="py-3 px-4 text-text-mid text-sm">Shared team, limited support</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Accountant Capital VA (Full-Time)</td>
                  <td className="text-right py-3 px-4 font-600 text-mint">$15,600</td>
                  <td className="py-3 px-4 text-text-mid text-sm">Dedicated person, all services</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-text-mid text-sm mt-8">Accountant Capital VA Part-Time is 81% cheaper than hiring locally. Full-Time includes multiple services (invoicing, payroll, tax support) that other services charge extra for.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Typical Small Business Profile</h2>

          <div className="space-y-4 max-w-3xl">
            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">Startup (Year 1)</p>
              <p className="text-text-mid text-sm">Revenue $100K-$250K. Owner does all the work. QuickBooks Online just started. Part-Time VA ($700/mo) gets books clean and organized.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">Growing Business (Year 2-3)</p>
              <p className="text-text-mid text-sm">Revenue $250K-$750K. First employee hired. Multiple customers/invoices. Full-Time VA ($1,300/mo) handles bookkeeping, invoicing, payroll support.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">Established Small Business (Year 3-5)</p>
              <p className="text-text-mid text-sm">Revenue $750K-$2M. 3-5 employees. Considering expansion. Full-Time VA + occasional admin support from Client Manager. Talk about financing, scaling.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-606 text-forest mb-2">Ready to Hire Bookkeeper</p>
              <p className="text-text-mid text-sm">Revenue $2M+. Too complex for a VA. We help transition your clean books to a new in-house hire or accounting firm.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why Small Businesses Choose Accountant Capital VA</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Same Person, Every Day</p>
              <p className="text-text-mid text-sm">Not a rotating team. One dedicated VA who knows your business, your customers, your operations. Continuity you can't get from Bench or QB Live.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Month-to-Month Flexibility</p>
              <p className="text-text-mid text-sm">Scale up or down as your needs change. No 12-month commitment, no buyout, no hiring/firing hassle.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Client Manager Support</p>
              <p className="text-text-mid text-sm">Direct access to a Client Manager if you need anything. Questions? Escalation? Backup coverage? It's built in.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Multiple Services, One Cost</p>
              <p className="text-text-mid text-sm">Full-Time includes bookkeeping + invoicing + payroll support + expense management. Competitors charge extra for each.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Affordable Growth</p>
              <p className="text-text-mid text-sm">$700/month won't break your budget. You save 12+ hours per week. ROI is immediate.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Bank-Ready Books</p>
              <p className="text-text-mid text-sm">Need a loan? Your books are loan-ready within 24 hours. No scrambling, no CPA cleanup.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to stop doing bookkeeping and start running your business?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Book Your Strategy Call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
