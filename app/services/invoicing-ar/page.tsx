import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Invoicing & Accounts Receivable Virtual Assistant',
  'Expert AR management. Invoice creation and sending, payment tracking, collection follow-ups, aging reports. Works in QuickBooks, Xero, FreshBooks. Starting at $700/mo.',
  'invoicing virtual assistant',
  '/services/invoicing-ar'
);

const faqs = [
  {
    question: 'How do you handle payment collections?',
    answer: 'Your VA sends friendly follow-up reminders for overdue invoices, checks aging reports weekly, and documents all collection attempts. Some clients authorize automatic payment reminders via email. We take the awkwardness out of collecting what you\'re owed.'
  },
  {
    question: 'Can a VA integrate with payment processors?',
    answer: 'Yes. If you use Stripe, Square, PayPal, or other payment gateways, your VA can monitor incoming payments, match them to invoices, and record them in your accounting software automatically.'
  },
  {
    question: 'What if a customer disputes an invoice?',
    answer: 'Your VA documents the dispute, investigates the issue, and communicates with you about next steps. They provide detailed information so you can make informed decisions about adjustments or re-invoicing.'
  },
  {
    question: 'How do you prevent late payments or missed invoices?',
    answer: 'Your VA maintains an invoice tracking system, monitors aging reports, and proactively follows up on anything past 30 days. Nothing falls through the cracks.'
  },
  {
    question: 'Can you handle payment plans or partial payments?',
    answer: 'Absolutely. Your VA can set up payment plans, record partial payments, and track the balance owed. They\'ll send reminders for upcoming payments.'
  }
];

export default function InvoicingARPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Services', url: '/services' },
          { name: 'Invoicing & AR', url: '/services/invoicing-ar' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Invoicing & Accounts Receivable Virtual Assistant
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Expert AR management. Invoice creation, payment tracking, collection follow-ups, aging reports. Your customers pay on time. Starting at $700/month.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What AR VA Services Include</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Invoice Management</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Invoice creation from sales orders or quotes</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Invoice formatting (your logo, terms, due date)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Professional invoice sending</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Invoice numbering and tracking</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Recurring invoice setup</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Invoice customization per customer</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Billing adjustments and credits</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Collections & Follow-Up</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Payment tracking and recording</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Aging report management (30/60/90+ days)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Overdue payment follow-ups</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Collection email templates</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Payment plan setup and tracking</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Partial payment processing</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Customer communication logs</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Why Businesses Need AR Management</h2>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <h3 className="font-600 text-forest mb-2">Faster Cash Flow</h3>
              <p className="text-text-mid">Consistent follow-ups mean customers pay faster. Your VA sends reminders before due date, not 60 days after.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <h3 className="font-600 text-forest mb-2">Reduced Bad Debt</h3>
              <p className="text-text-mid">Proactive follow-up catches payment issues early. Your VA can identify at-risk accounts and work out solutions before they become uncollectable.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <h3 className="font-600 text-forest mb-2">Professional Customer Experience</h3>
              <p className="text-text-mid">Your customers receive professional invoices, reminders, and communication. It reflects well on your business.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <h3 className="font-600 text-forest mb-2">Accurate Financial Reporting</h3>
              <p className="text-text-mid">Your aging reports are current, your revenue is accurate, and your balance sheet reflects true AR value.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Software Integration</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-stone-warm rounded-lg text-center">
              <p className="font-600 text-forest mb-2">Accounting Software</p>
              <p className="text-text-mid text-sm">QuickBooks, Xero, FreshBooks, Wave</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg text-center">
              <p className="font-600 text-forest mb-2">Payment Processors</p>
              <p className="text-text-mid text-sm">Stripe, Square, PayPal, Clover</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg text-center">
              <p className="font-600 text-forest mb-2">Communication</p>
              <p className="text-text-mid text-sm">Email, SMS, customer portals</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12 text-center">Invoicing & AR Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-stone-warm">
              <h3 className="text-2xl font-bold text-forest mb-2">Part-Time</h3>
              <div className="text-4xl font-bold text-mint mb-4">$700<span className="text-xl text-text-mid">/mo</span></div>
              <p className="text-text-mid mb-6">Invoice creation and basic AR tracking for small businesses (50-200 invoices/month).</p>
              <Link href="/contact" className="block w-full bg-forest text-white py-3 rounded-lg text-center font-600 hover:bg-forest-mid transition">
                Get Started
              </Link>
            </div>

            <div className="bg-forest text-white p-8 rounded-lg border-2 border-mint scale-105">
              <h3 className="text-2xl font-bold mb-2">Full-Time</h3>
              <div className="text-4xl font-bold text-mint mb-4">$1,300<span className="text-lg text-mint-light">/mo</span></div>
              <p className="text-mint-light mb-6">Complete AR management with proactive collections for high-volume businesses (500+ invoices/month).</p>
              <Link href="/contact" className="block w-full bg-mint text-forest py-3 rounded-lg text-center font-600 hover:bg-mint-light transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to improve your cash flow?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">
            Schedule Your Strategy Call
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
