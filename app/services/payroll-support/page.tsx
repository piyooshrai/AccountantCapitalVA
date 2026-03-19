import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Payroll Virtual Assistant Services',
  'Expert payroll VA support. Data entry, hours tracking, PTO management, payroll tax deposits, W-2 coordination. Gusto, ADP, Paychex. Starting at $700/mo.',
  'payroll virtual assistant',
  '/services/payroll-support'
);

export default function PayrollPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Services', url: '/services' },
          { name: 'Payroll Support', url: '/services/payroll-support' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Payroll Virtual Assistant Services
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Expert payroll support. Data entry, hours tracking, PTO management, tax compliance, new hire setup. Accurate payroll every pay period. Starting at $700/month.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What Payroll VA Includes</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Regular Payroll Tasks</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Payroll data entry and processing</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Hours tracking and verification</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>PTO and sick leave management</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Deduction tracking (insurance, 401k, etc.)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Paycheck accuracy verification</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Direct deposit coordination</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Payroll register review</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Compliance & Year-End</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Payroll tax deposit tracking</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>New employee onboarding (I-9, W-4, etc.)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Contractor 1099 preparation</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Benefits enrollment coordination</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Workers comp audit prep</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Year-end W-2 coordination</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Payroll tax filing support</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Payroll Platforms We Support</h2>

          <div className="grid md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {['Gusto', 'ADP', 'Paychex', 'OnPay', 'Rippling'].map((platform) => (
              <div key={platform} className="bg-white p-6 rounded-lg text-center border border-stone-warm">
                <p className="font-600 text-forest">{platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why Payroll VA Matters</h2>

          <div className="space-y-4">
            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-1">✓ Tax Compliance</p>
              <p className="text-text-mid text-sm">Payroll taxes are complex. Your VA ensures deposits are made on time, forms are filed correctly.</p>
            </div>
            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-1">✓ Accuracy</p>
              <p className="text-text-mid text-sm">Paycheck errors damage morale. Your VA verifies every detail before paychecks go out.</p>
            </div>
            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-1">✓ Time Savings</p>
              <p className="text-text-mid text-sm">Payroll processing takes hours. Your VA handles it in minutes, consistently.</p>
            </div>
            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-1">✓ Peace of Mind</p>
              <p className="text-text-mid text-sm">Employees get paid accurately and on time. You sleep well.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8 text-center">Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-stone-warm">
              <h3 className="text-2xl font-bold text-forest mb-4">Part-Time: $700/mo</h3>
              <p className="text-text-mid mb-6">Payroll processing for small teams (under 10 employees).</p>
              <Link href="/contact" className="block w-full bg-forest text-white py-3 rounded-lg text-center font-600 hover:bg-forest-mid transition">Get Started</Link>
            </div>

            <div className="bg-forest text-white p-8 rounded-lg border-2 border-mint">
              <h3 className="text-2xl font-bold mb-4">Full-Time: $1,300/mo</h3>
              <p className="text-mint-light mb-6">Complete payroll + tax compliance (10+ employees with full year-end support).</p>
              <Link href="/contact" className="block w-full bg-mint text-forest py-3 rounded-lg text-center font-600 hover:bg-mint-light transition">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready for accurate, compliant payroll?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your Strategy Call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
