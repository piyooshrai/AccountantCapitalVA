import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'How It Works - Accountant Capital VA',
  'Learn our 5-step process: qualification, matching (48 hours), onboarding, integration, and results. Dedicated VA for your bookkeeping.',
  'how bookkeeping virtual assistant works',
  '/how-it-works'
);

const faqs = [
  {
    question: 'How long does the onboarding process take?',
    answer: 'Initial setup is 1-2 weeks. Your VA will request access to your accounting software, learn your chart of accounts, review recent transactions, and understand your business structure. We prioritize getting them up to speed quickly so you see results fast.'
  },
  {
    question: 'Can I request a different VA if there\'s not a good fit?',
    answer: 'Absolutely. We want you to be happy. If there\'s a personality clash or skill mismatch, we\'ll match you with someone else. No penalty, no hassle. Your success is our success.'
  },
  {
    question: 'What if I need to scale up or down?',
    answer: 'Simple. If you need more hours or a second VA, we adjust your plan. If you need to scale back, you can move from full-time to part-time. Month-to-month means you\'re never locked in.'
  },
  {
    question: 'How do you handle the transition if I decide to cancel?',
    answer: 'We make it easy. Your VA will document everything, prepare a final report, and hand off all files cleanly. We want you to leave with organized books and zero stress.'
  },
  {
    question: 'Do I ever meet my VA in person?',
    answer: 'Not required, but possible. Most communication happens over email, Slack, or video calls. We work with clients globally across different time zones. What matters is the work product and communication.'
  }
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />

      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[{ name: 'How It Works', url: '/how-it-works' }]} />
      </section>

      {/* Hero */}
      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            From Inquiry to Results in 5 Steps
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed">
            Our process is designed to get you matched with the right VA quickly, onboard them smoothly, and have them delivering results within weeks. No long contracts. No complicated setup. Just straightforward partnership.
          </p>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-16 text-center">The Process</h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-mint text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-3xl font-fraunces font-600 text-forest mb-4">Book Your Strategy Call</h3>
                <p className="text-text-mid text-lg leading-relaxed mb-6">
                  Schedule a 15-minute call with our team. No high-pressure sales pitch. We just want to understand your needs: What's your current accounting situation? What's eating your time? What software do you use? What's your budget?
                </p>
                <p className="text-text-mid text-lg leading-relaxed">
                  This call helps us understand if we're a good fit and what type of VA would work best for you.
                </p>
              </div>
              <div className="bg-stone-warm rounded-lg p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📞</div>
                  <p className="font-600 text-forest">15-Minute Call</p>
                  <p className="text-text-mid text-sm">No obligation</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-stone-warm rounded-lg p-8 h-64 flex items-center justify-center order-2 md:order-1">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="font-600 text-forest">We Assess</p>
                  <p className="text-text-mid text-sm">Your needs & fit</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-mint text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-3xl font-fraunces font-600 text-forest mb-4">We Assess Your Situation</h3>
                <p className="text-text-mid text-lg leading-relaxed mb-6">
                  After the call, our team reviews your needs. We look at: the complexity of your books, which software you use, how many transactions you process monthly, whether you need full-time or part-time support, and any specialized needs (payroll, eCommerce, multi-location, etc.).
                </p>
                <p className="text-text-mid text-lg leading-relaxed">
                  We determine whether a bookkeeping-focused VA, a payroll specialist, or a hybrid support model is right for you.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-mint text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-3xl font-fraunces font-600 text-forest mb-4">Perfect Match in 48 Hours</h3>
                <p className="text-text-mid text-lg leading-relaxed mb-6">
                  We match you with a VA from our vetted team. We look for the right skill set, personality fit, timezone compatibility (if that matters), and industry experience. If it's a match, we make the introduction.
                </p>
                <p className="text-text-mid text-lg leading-relaxed">
                  You'll meet your VA (and their backup) via video call. Ask questions. Make sure you feel confident. If something's off, we find a better match.
                </p>
              </div>
              <div className="bg-stone-warm rounded-lg p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">✓</div>
                  <p className="font-600 text-forest">Meet Your VA</p>
                  <p className="text-text-mid text-sm">+ backup VA</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-stone-warm rounded-lg p-8 h-64 flex items-center justify-center order-2 md:order-1">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="font-600 text-forest">Onboarding</p>
                  <p className="text-text-mid text-sm">1-2 weeks setup</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-mint text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mb-6">
                  4
                </div>
                <h3 className="text-3xl font-fraunces font-600 text-forest mb-4">Onboarding & Integration</h3>
                <p className="text-text-mid text-lg leading-relaxed mb-6">
                  Your VA requests access to your accounting software (QuickBooks, Xero, etc.). They review your account structure, recent transactions, vendor list, customer list, and any historical issues. They ask clarifying questions.
                </p>
                <p className="text-text-mid text-lg leading-relaxed mb-6">
                  Your Client Manager stays involved, ensuring the VA has everything they need and checking in on progress. By week 2, your VA is ready to take on regular tasks.
                </p>
                <p className="text-text-mid text-lg leading-relaxed">
                  You'll provide ongoing feedback and direction. Your VA adapts to your preferences.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-mint text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mb-6">
                  5
                </div>
                <h3 className="text-3xl font-fraunces font-600 text-forest mb-4">Results & Ongoing Support</h3>
                <p className="text-text-mid text-lg leading-relaxed mb-6">
                  Your VA starts handling daily bookkeeping: transaction recording, reconciliation, invoicing, expense management, payroll support, whatever you need. Clean, accurate, on-time.
                </p>
                <p className="text-text-mid text-lg leading-relaxed mb-6">
                  Your Client Manager stays involved: monthly check-ins, quality audits, performance reviews. If anything goes wrong, we fix it. If you need to pivot or scale, we adjust.
                </p>
                <p className="text-text-mid text-lg leading-relaxed">
                  You get peace of mind. Clean books. More time. Better decisions based on accurate financial data.
                </p>
              </div>
              <div className="bg-stone-warm rounded-lg p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="font-600 text-forest">Clean Books</p>
                  <p className="text-text-mid text-sm">Every month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Your VA Actually Does */}
      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What Happens After Onboarding</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Daily/Weekly Tasks</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">→</span>
                  <span>Process incoming invoices and expenses</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">→</span>
                  <span>Record transactions in your accounting software</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">→</span>
                  <span>Categorize expenses for tax purposes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">→</span>
                  <span>Capture and file receipts</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">→</span>
                  <span>Create and send invoices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">→</span>
                  <span>Track payment status and follow up on overdue accounts</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">→</span>
                  <span>Process bill payments on schedule</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Monthly/Quarterly Tasks</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">→</span>
                  <span>Reconcile bank and credit card statements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">→</span>
                  <span>Review aging reports and follow up on collections</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">→</span>
                  <span>Prepare month-end close documentation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">→</span>
                  <span>Generate financial statements (P&L, balance sheet)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">→</span>
                  <span>Track payroll and payroll tax payments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">→</span>
                  <span>Prepare expense reports</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint font-bold flex-shrink-0">→</span>
                  <span>Organize documentation for year-end tax prep</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Communication & Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">How We Stay Connected</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-stone-warm rounded-lg">
              <h3 className="text-xl font-600 text-forest mb-4">Communication</h3>
              <p className="text-text-mid mb-4">Primary channels: Email, Slack, or Teams. Weekly video calls if needed. Your VA respects your timezone and works asynchronously.</p>
              <p className="text-sm text-text-light">Response time: 24 hours typical. Urgent issues: sooner.</p>
            </div>

            <div className="p-8 bg-stone-warm rounded-lg">
              <h3 className="text-xl font-600 text-forest mb-4">Software Access</h3>
              <p className="text-text-mid mb-4">Your VA works inside your software: QuickBooks, Xero, FreshBooks, etc. We use encrypted file sharing for documents.</p>
              <p className="text-sm text-text-light">Role-based access only. No shared passwords. Audit trail available.</p>
            </div>

            <div className="p-8 bg-stone-warm rounded-lg">
              <h3 className="text-xl font-600 text-forest mb-4">Reporting</h3>
              <p className="text-text-mid mb-4">Monthly summary reports: what was completed, any issues, recommendations. Financial statements ready for your review.</p>
              <p className="text-sm text-text-light">Your Client Manager checks in monthly as well.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Manager Role */}
      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Your Client Manager</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-text-mid mb-6 leading-relaxed">
                Every Accountant Capital VA client gets a dedicated Client Manager. This isn't your VA—it's their supervisor and your advocate. Your Client Manager:
              </p>

              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-mint text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-600 text-forest">Monitors quality</p>
                    <p className="text-text-mid text-sm">Reviews work monthly, spots issues early</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-mint text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-600 text-forest">Handles performance reviews</p>
                    <p className="text-text-mid text-sm">Quarterly check-ins on accuracy, timeliness, communication</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-mint text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-600 text-forest">Escalates issues</p>
                    <p className="text-text-mid text-sm">If something's wrong, they fix it before it becomes a problem</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-mint text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-600 text-forest">Manages backup coverage</p>
                    <p className="text-text-mid text-sm">If your VA is out, the backup is prepped and ready</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-mint text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-600 text-forest">Is your point of contact</p>
                    <p className="text-text-mid text-sm">Questions, concerns, upgrades—they handle it</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-12 rounded-lg border-2 border-mint">
              <p className="text-lg italic text-text-dark mb-6">
                "The Client Manager makes all the difference. When something came up with my VA, I just emailed the Client Manager. It was handled within 24 hours. No drama, no stress."
              </p>
              <p className="font-600 text-forest">— Rebecca T., eCommerce owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} />

      {/* CTA */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to see how this works for your business?</h2>
          <p className="text-mint-light mb-8">Schedule a 15-minute call. No obligation. Let's talk about your books.</p>
          <Link
            href="/contact"
            className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition"
          >
            Schedule Your Strategy Call
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
