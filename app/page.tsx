import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateOrganizationSchema, generateFAQSchema } from '@/lib/schema';
import { PRICING_TIERS, COMPANY_INFO } from '@/lib/accounting-data';

export const metadata: Metadata = {
  title: 'Accountant Capital VA | Dedicated Bookkeeping & Financial Virtual Assistant',
  description: 'Dedicated bookkeeping virtual assistant services starting at $700/mo. Same VA every day. Works in QuickBooks, Xero, FreshBooks. 97% client retention rate.',
  keywords: ['bookkeeping virtual assistant', 'QuickBooks VA', 'accounting VA', 'financial virtual assistant', 'bookkeeper VA'],
};

const faqs = [
  {
    question: 'How is Accountant Capital VA different from Bench or Pilot?',
    answer: 'We provide a dedicated person—the same VA every day—who works inside YOUR QuickBooks, Xero, or other accounting software. Bench and Pilot use proprietary software and shared teams. We also handle way more than just bookkeeping: invoicing, accounts receivable, accounts payable, and payroll support. You get a real human, not a platform.',
  },
  {
    question: 'What kind of businesses do you work with?',
    answer: 'We work with small businesses across every industry: eCommerce sellers, professional services, restaurants, construction companies, real estate investors, and more. If your business generates financial transactions, we can help manage them.',
  },
  {
    question: 'Do your VAs know QuickBooks?',
    answer: 'Yes. We train on QuickBooks Online, QuickBooks Desktop, Xero, FreshBooks, Wave, Gusto, and more. If you\'re not using accounting software yet, we can help you set it up. Our team is certified and constantly learning new platforms and best practices.',
  },
  {
    question: 'Is my financial data safe?',
    answer: 'Absolutely. Every VA signs an NDA and passes a Checkr background check before touching any financial data. We use encrypted file sharing, role-based access controls (no shared passwords), and maintain audit trails. Your CPA will feel confident with our approach.',
  },
  {
    question: 'What if my VA gets sick or takes time off?',
    answer: 'You have a backup VA assigned from day one. If your primary VA is unavailable, the backup steps in seamlessly. There\'s no disruption to your financial operations. You always have coverage.',
  },
];

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema();
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-b from-stone to-stone-warm">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-600 text-forest mb-6 leading-tight">
              Your Dedicated Bookkeeping Virtual Assistant
            </h1>
            <p className="text-xl text-text-mid mb-8 leading-relaxed">
              Stop juggling spreadsheets and late-night bookkeeping. Get a dedicated financial VA who knows your books inside and out. Same person every day. Works in your software. Starting at $700/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-forest text-white px-8 py-4 rounded-lg font-600 text-lg hover:bg-forest-mid transition text-center"
              >
                Schedule Your Strategy Call
              </Link>
              <Link
                href="/pricing"
                className="inline-block border-2 border-forest text-forest px-8 py-4 rounded-lg font-600 text-lg hover:bg-forest hover:text-white transition text-center"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y border-stone-warm">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-mint mb-2">6</div>
              <p className="text-text-mid text-sm">Years in business</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-mint mb-2">97%</div>
              <p className="text-text-mid text-sm">Client retention</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-mint mb-2">1000+</div>
              <p className="text-text-mid text-sm">Active clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-mint mb-2">Top 3%</div>
              <p className="text-text-mid text-sm">VAs vetted</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What Your Dedicated VA Handles</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Daily Bookkeeping</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3">
                  <span className="text-mint font-bold">✓</span>
                  <span>Transaction recording and categorization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold">✓</span>
                  <span>Receipt capture and filing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold">✓</span>
                  <span>Bank and credit card reconciliation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold">✓</span>
                  <span>Month-end close and financial statements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold">✓</span>
                  <span>General ledger maintenance</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Financial Admin</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3">
                  <span className="text-mint font-bold">✓</span>
                  <span>Invoice creation and payment tracking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold">✓</span>
                  <span>Accounts payable and bill processing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold">✓</span>
                  <span>Payroll data entry and tax tracking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold">✓</span>
                  <span>Financial reporting and KPI dashboards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold">✓</span>
                  <span>Tax prep documentation and organization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Core Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Bookkeeping', desc: 'Daily transaction management, reconciliation, and financial record keeping' },
              { title: 'Bank Reconciliation', desc: 'Monthly statement matching, discrepancy resolution, and exception reporting' },
              { title: 'Invoicing & AR', desc: 'Invoice creation, payment tracking, collections, and aging management' },
              { title: 'Expense & AP', desc: 'Bill processing, vendor management, and payment scheduling' },
              { title: 'Payroll Support', desc: 'Data entry, hours tracking, tax deposits, and W-2 coordination' },
              { title: 'Financial Reporting', desc: 'P&L, balance sheets, cash flow, and custom management reports' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-stone-warm hover:shadow-lg transition">
                <div className="text-5xl font-light text-mint-light mb-4">{String(idx + 1).padStart(2, '0')}</div>
                <h3 className="text-xl font-fraunces font-600 text-forest mb-3">{service.title}</h3>
                <p className="text-text-mid text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-text-mid mb-12">Month-to-month. No contracts. Cancel anytime.</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
            {PRICING_TIERS.map((tier, idx) => (
              <div key={idx} className={`rounded-lg p-8 border-2 transition ${idx === 1 ? 'bg-forest text-white border-mint scale-105' : 'bg-white border-stone-warm text-text-dark hover:border-mint'}`}>
                <h3 className={`text-2xl font-fraunces font-600 mb-2 ${idx === 1 ? 'text-white' : 'text-forest'}`}>
                  {tier.name}
                </h3>
                <div className="text-4xl font-bold mb-2">{tier.price}</div>
                <div className={`text-sm mb-6 ${idx === 1 ? 'text-mint-light' : 'text-text-mid'}`}>{tier.period}</div>
                <div className={`text-sm mb-8 font-500 ${idx === 1 ? 'text-mint-light' : 'text-forest'}`}>{tier.hours}</div>

                <ul className={`space-y-3 mb-8 text-sm ${idx === 1 ? 'text-mint-light' : 'text-text-mid'}`}>
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className="flex gap-2">
                      <span className={idx === 1 ? 'text-mint' : 'text-mint'}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-3 rounded-lg font-600 text-center transition ${
                    idx === 1 ? 'bg-mint text-forest hover:bg-mint-light' : 'bg-forest text-white hover:bg-forest-mid'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-stone rounded-lg">
            <h3 className="text-lg font-600 text-forest mb-4">How much do you really save?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm text-text-mid mb-2">Hiring a local bookkeeper</div>
                <div className="text-3xl font-bold text-amber">$45,000-60,000/yr</div>
              </div>
              <div>
                <div className="text-sm text-text-mid mb-2">Accountant Capital VA (full-time)</div>
                <div className="text-3xl font-bold text-mint">$15,600/yr</div>
              </div>
              <div>
                <div className="text-sm text-text-mid mb-2">Annual savings</div>
                <div className="text-3xl font-bold text-forest">$30,000+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Real Results from Real Clients</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-fraunces font-600 text-forest mb-4">Multi-Location Cannabis Retailer</h3>
              <p className="text-text-mid mb-6 leading-relaxed">
                Started with one bookkeeping VA handling inventory across 3 locations. As they scaled, we expanded to a team: one VA per location handling bookkeeping, invoicing, and inventory accounting. Now 7 locations, 5 dedicated VAs, 97% accuracy on monthly books.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-forest font-600">Challenge</div>
                  <p className="text-text-mid">Multi-location complexity, inventory accounting, compliance tracking</p>
                </div>
                <div>
                  <div className="text-sm text-forest font-600">Solution</div>
                  <p className="text-text-mid">Dedicated VA per location + centralized Client Manager oversight</p>
                </div>
                <div>
                  <div className="text-sm text-forest font-600">Result</div>
                  <p className="text-text-mid">Clean books every month, accurate tax prep, audit-ready documentation</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 border border-stone-warm">
              <p className="text-lg italic text-text-dark mb-6">
                "We tried 3 different bookkeepers over 2 years. The turnover, the rework, the confusion. When we switched to Accountant Capital VA, we finally had stability. Same person who knows our business. Our CPA actually complimented our books for the first time."
              </p>
              <p className="font-600 text-forest">Sarah M., Operations Manager</p>
              <p className="text-text-mid text-sm">Multi-location retail, 150+ transactions/day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Accountant Capital VA vs. Competitors</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-forest">
                  <th className="text-left py-3 px-4 font-600 text-forest">Feature</th>
                  <th className="text-center py-3 px-4 font-600 text-forest">Accountant Capital VA</th>
                  <th className="text-center py-3 px-4 font-600 text-text-mid">Bench</th>
                  <th className="text-center py-3 px-4 font-600 text-text-mid">Pilot</th>
                  <th className="text-center py-3 px-4 font-600 text-text-mid">QB Live</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-warm">
                  <td className="py-3 px-4">Dedicated Person</td>
                  <td className="text-center py-3 px-4 text-mint font-bold">✓</td>
                  <td className="text-center py-3 px-4 text-text-light">Shared team</td>
                  <td className="text-center py-3 px-4 text-text-light">Shared</td>
                  <td className="text-center py-3 px-4 text-text-light">Shared</td>
                </tr>
                <tr className="border-b border-stone-warm">
                  <td className="py-3 px-4">Works in YOUR Software</td>
                  <td className="text-center py-3 px-4 text-mint font-bold">✓</td>
                  <td className="text-center py-3 px-4 text-text-light">Own software</td>
                  <td className="text-center py-3 px-4 text-mint font-bold">✓ QBO only</td>
                  <td className="text-center py-3 px-4 text-text-light">QBO only</td>
                </tr>
                <tr className="border-b border-stone-warm">
                  <td className="py-3 px-4">Full Financial Admin</td>
                  <td className="text-center py-3 px-4 text-mint font-bold">✓</td>
                  <td className="text-center py-3 px-4 text-text-light">Bookkeeping only</td>
                  <td className="text-center py-3 px-4 text-text-light">Bookkeeping only</td>
                  <td className="text-center py-3 px-4 text-text-light">Bookkeeping</td>
                </tr>
                <tr className="border-b border-stone-warm">
                  <td className="py-3 px-4">Client Manager</td>
                  <td className="text-center py-3 px-4 text-mint font-bold">✓</td>
                  <td className="text-center py-3 px-4 text-text-light">No</td>
                  <td className="text-center py-3 px-4 text-text-light">No</td>
                  <td className="text-center py-3 px-4 text-text-light">No</td>
                </tr>
                <tr className="border-b border-stone-warm">
                  <td className="py-3 px-4">Month-to-Month</td>
                  <td className="text-center py-3 px-4 text-mint font-bold">✓</td>
                  <td className="text-center py-3 px-4 text-text-light">Annual</td>
                  <td className="text-center py-3 px-4 text-text-light">Variable</td>
                  <td className="text-center py-3 px-4 text-text-light">Variable</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-600">Pricing (Full-Time)</td>
                  <td className="text-center py-3 px-4 text-forest font-bold">$1,300/mo</td>
                  <td className="text-center py-3 px-4 text-text-mid">$399/mo</td>
                  <td className="text-center py-3 px-4 text-text-mid">$699/mo</td>
                  <td className="text-center py-3 px-4 text-text-mid">$400/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-amber bg-opacity-10 rounded-lg border border-amber border-opacity-30">
            <p className="text-text-dark">
              <strong>The key difference:</strong> We're not a bookkeeping service. We're a dedicated person on your team. Same VA every day who knows your business, your preferences, your workflows. You get continuity, reliability, and someone who actually cares about your success.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">How It Works</h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { num: '1', title: 'Book Your Call', desc: 'Schedule 15 mins to discuss your needs' },
              { num: '2', title: 'We Assess', desc: 'Understand your books and requirements' },
              { num: '3', title: 'Perfect Match', desc: 'We match you within 48 hours' },
              { num: '4', title: 'Onboarding', desc: 'Your VA learns your setup and workflows' },
              { num: '5', title: 'Results', desc: 'Clean books, reports, and peace of mind' },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h4 className="font-600 text-forest mb-2">{step.title}</h4>
                <p className="text-text-mid text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} />

      {/* Final CTA */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-4xl font-fraunces font-600 mb-6">Ready for clean, accurate books?</h2>
          <p className="text-xl text-mint-light mb-8 max-w-2xl mx-auto">
            Join 1000+ small businesses that trust us with their financial operations. Same VA, every day. Month-to-month, no contracts.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 text-lg hover:bg-mint-light transition"
          >
            Schedule Your Strategy Call
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
