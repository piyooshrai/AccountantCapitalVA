import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Bookkeeping Virtual Assistant Austin Texas | TX VA Services',
  'Hire a dedicated bookkeeping VA in Austin. Expert in Texas tax (no income tax!), federal bookkeeping, and startup accounting for tech companies and growing businesses.',
  'bookkeeping virtual assistant Austin',
  '/locations/us/austin'
);

const faqs = [
  {
    question: 'Is Texas bookkeeping easier since there\'s no state income tax?',
    answer: 'Yes and no. Texas has no state income tax, but you still have federal tax, payroll tax, sales tax, and franchise tax (if applicable). Plus, Austin\'s rapid growth means unique challenges. Your VA optimizes the entire picture, not just state tax.'
  },
  {
    question: 'What is Texas Franchise Tax and do I owe it?',
    answer: 'Texas franchise tax applies to businesses with revenue over $1.23M. Rate: 0.375% (or 0.75% for retailers). Your VA tracks whether you\'re subject to it and ensures proper filing.'
  },
  {
    question: 'Does Austin have any local taxes?',
    answer: 'Austin doesn\'t have a local income tax or business tax, which is part of why it\'s so business-friendly. Sales tax is 8.25%. Your VA handles Austin\'s tax-friendly environment optimally.'
  },
  {
    question: 'Are startups and tech companies common in Austin? Can you handle them?',
    answer: 'Yes. Austin is the #1 tech hub in the US. Your VA specializes in startup accounting: equity compensation, investor reporting, rapid scaling, cash flow management, and tax optimization for fast-growing SaaS and tech companies.'
  },
  {
    question: 'How does Austin\'s no state income tax affect hiring decisions?',
    answer: 'No state income tax is huge for retaining talent and improving profitability. Your VA tracks this benefit in financial modeling and planning, helping you compete for talent and optimize bottom line.'
  }
];

export default function AustinLocationPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Locations', url: '/locations' },
          { name: 'United States', url: '/locations/us' },
          { name: 'Austin', url: '/locations/us/austin' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Bookkeeping Virtual Assistant for Austin Businesses
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Austin is America's fastest-growing tech hub. Your bookkeeper understands the tax advantages of Texas (no state income tax), the unique challenges of rapid scaling, startup accounting, and how to manage growth profitably. From first-time entrepreneurs to Series A startups, we've got you covered.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Your Austin Bookkeeping VA
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why Austin Businesses Need a Dedicated Bookkeeping VA</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            Austin's economy is booming. Tech companies, startups, and service businesses are growing fast. Your bookkeeper isn't just processing transactions—they're enabling growth, managing cash flow, and preparing you for investment or exit.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Zero State Income Tax</p>
              <p className="text-sm text-text-mid">Texas has no state income tax. This is a huge advantage for profitability. Your VA ensures you capture this benefit in planning and decision-making.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Startup & Scaling Focus</p>
              <p className="text-sm text-text-mid">Austin is startup central. Your VA understands equity compensation, investor reporting, venture funding structures, and rapid scaling accounting.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Cash Flow for Growth</p>
              <p className="text-sm text-text-mid">Growing fast means managing working capital, managing customer/vendor payment terms, and forecasting cash needs for hiring and expansion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Austin Tax Landscape (The Good & The Nuanced)</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            Texas is known for business-friendly taxes, but there are still important rules for Austin and Texas businesses:
          </p>

          <div className="space-y-4">
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">No State Income Tax (The Big Win)</p>
              <p className="text-text-mid text-sm">Texas has zero state income tax. None. This alone makes Texas #1 for business profitability. Your VA helps you leverage this advantage in financial planning.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">Texas Franchise Tax (For High-Revenue Businesses)</p>
              <p className="text-text-mid text-sm">If your business revenue exceeds $1.23M, you owe Texas Franchise Tax: 0.375% (or 0.75% for retailers). Your VA tracks this threshold and ensures proper filing to avoid penalties.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">Sales Tax (8.25% in Austin)</p>
              <p className="text-text-mid text-sm">Austin sales tax is 8.25% (state 6.25% + local 2%). If you sell online or in other states, multi-state sales tax is your responsibility. Your VA manages it.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Federal Payroll Tax & Quarterly Estimates</p>
              <p className="text-text-mid text-sm">Despite no state income tax, federal tax is still substantial. Self-employed? You owe quarterly estimates. Have employees? You owe FICA, federal withholding, FUTA, SUTA. Your VA handles all of it.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">No Austin City Income Tax</p>
              <p className="text-text-mid text-sm">Austin doesn't have a city income tax or business tax. Another win for Austin businesses. Combined with zero state tax, your profitability is significantly higher than California or New York.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Austin Business Profile (Why We Specialize Here)</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            Austin's economy is unique. Your VA specializes in industries and business models that thrive here:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Tech Startups & SaaS</p>
              <p className="text-text-mid text-sm">Austin is the #1 tech hub (faster growth than Silicon Valley). Your VA manages SaaS accounting: MRR/ARR tracking, investor reporting, venture funding structures, equity compensation.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Software & IT Services</p>
              <p className="text-text-mid text-sm">Custom software, IT consulting, managed IT services. Your VA understands project accounting, billable hours, and professional services accounting.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-606 text-forest mb-3">Creative & Digital Agencies</p>
              <p className="text-text-mid text-sm">Digital marketing, web design, content agencies. Your VA manages project accounting, contractor payments, retainer vs. project billing models.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-606 text-forest mb-3">E-commerce & Online Retail</p>
              <p className="text-text-mid text-sm">Shopify sellers, online businesses, Amazon FBA sellers. Your VA manages inventory, COGS, multi-channel sales tracking, and sales tax across states.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Food & Beverage (Hot Market)</p>
              <p className="text-text-mid text-sm">Austin's food scene is booming. Your VA manages restaurant/food service accounting: inventory, COGS, labor cost tracking, and food-specific compliance.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <p className="font-600 text-forest mb-3">Professional Services</p>
              <p className="text-text-mid text-sm">Consulting, coaching, professional services. Your VA manages project billing, contractor payments, and client profitability tracking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Austin Cost Advantage: No State Income Tax</h2>

          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-text-mid mb-6">
              Texas's lack of state income tax creates a huge competitive advantage. Let's compare:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg">
                <p className="font-600 text-forest mb-3">Austin/Texas</p>
                <ul className="text-sm text-text-mid space-y-2">
                  <li>Federal tax: 20-37%*</li>
                  <li>State tax: 0%</li>
                  <li>Local tax: 0%</li>
                  <li className="pt-2 border-t border-stone font-600 text-forest">Effective rate: 20-37%</li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-lg">
                <p className="font-600 text-forest mb-3">California</p>
                <ul className="text-sm text-text-mid space-y-2">
                  <li>Federal tax: 20-37%*</li>
                  <li>State tax: 3.8-13.3%</li>
                  <li>Local tax: 0-2%</li>
                  <li className="pt-2 border-t border-stone font-600 text-forest">Effective rate: 25-50%+</li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-lg">
                <p className="font-600 text-forest mb-3">New York</p>
                <ul className="text-sm text-text-mid space-y-2">
                  <li>Federal tax: 20-37%*</li>
                  <li>State tax: 3.9-8.82%</li>
                  <li>Local tax: 3.876%</li>
                  <li className="pt-2 border-t border-stone font-600 text-forest">Effective rate: 28-50%+</li>
                </ul>
              </div>
            </div>

            <p className="text-center text-sm text-text-light mt-6">*Depending on business structure and income level</p>
          </div>

          <div className="bg-mint/10 p-6 rounded-lg border-2 border-mint">
            <p className="font-600 text-forest mb-3">Real Example: $500K Profit</p>
            <div className="space-y-2 text-text-mid text-sm">
              <p>Austin: $500K × 25% effective tax = $125K tax owed (Net: $375K)</p>
              <p>California: $500K × 40% effective tax = $200K tax owed (Net: $300K)</p>
              <p><strong>Austin advantage: $75K more in your pocket.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Services Your Austin Bookkeeping VA Provides</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-6 bg-stone rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Federal Tax & Quarterly Estimates</p>
              <p className="text-sm text-text-mid">Since there's no state income tax, federal becomes even more important. Your VA optimizes federal deductions and manages quarterly estimates precisely.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Texas Franchise Tax (If Applicable)</p>
              <p className="text-sm text-text-mid">If your revenue exceeds $1.23M, your VA tracks and manages franchise tax efficiently.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Startup & Scale-Up Accounting</p>
              <p className="text-sm text-text-mid">Equity compensation tracking, venture funding structures, investor reporting, rapid scaling financial management.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Cash Flow Forecasting & Management</p>
              <p className="text-sm text-text-mid">Growing fast requires careful cash management. Your VA projects cash needs, manages payment terms, and supports hiring/expansion planning.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Multi-State Sales Tax</p>
              <p className="text-sm text-text-mid">If you sell in other states, your VA manages multi-state sales tax compliance and reporting.</p>
            </div>

            <div className="p-6 bg-stone rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Monthly & Investor Reporting</p>
              <p className="text-sm text-text-mid">P&L, balance sheet, cash flow, KPI dashboards, SaaS metrics (MRR, ARR, churn), investor reports.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready for Expert Austin Bookkeeping?</h2>
          <p className="text-mint mb-6">Maximize your Texas tax advantage. Scale profitably. Focus on growth.</p>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your Austin Consultation</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
