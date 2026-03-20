import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Hiring Bookkeeper on Upwork vs Accountant Capital VA: Risk vs Safety',
  'Upwork bookkeepers are cheap but risky: no vetting, no backup, no accountability. Accountant Capital VA is a managed service with vetted VAs, guarantee, insurance, and continuity. Which is better?',
  'hiring bookkeeper on Upwork',
  '/compare/upwork'
);

const faqs = [
  {
    question: 'Why is hiring on Upwork risky for bookkeeping?',
    answer: 'Upwork freelancers have no vetting, no accountability, and no insurance. If they disappear, make an error, or mishandle your data, you have limited recourse. Accountant Capital VA is a company with liability insurance, vetting process, and guarantees.'
  },
  {
    question: 'Is Accountant Capital VA more expensive than Upwork?',
    answer: 'Yes. Upwork might be $500-1,000/mo, while Accountant Capital VA is $700-$1,300. But Upwork\'s hidden costs are high: your management time, errors, turnover, security risks. Managed service is worth the cost.'
  },
  {
    question: 'What if an Upwork bookkeeper makes an error on my taxes?',
    answer: 'You have no recourse. They\'re independent contractors. With Accountant Capital VA, errors are caught internally and corrected. We have liability insurance. You\'re protected.'
  },
  {
    question: 'Can I switch from Upwork to Accountant Capital VA?',
    answer: 'Yes. We import your Upwork bookkeeper\'s records and continue from there. Transition is usually 1-2 weeks. Clean handoff, zero data loss.'
  },
  {
    question: 'Isn\'t it risky to give a VA access to my QuickBooks?',
    answer: 'Yes, which is why you need a vetted, professional service. Upwork has zero vetting. Accountant Capital VA has background checks (Checkr), NDAs, role-based access controls, and audit trails. Risk is minimized.'
  }
];

export default function UpworkComparePage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Compare', url: '/compare' },
          { name: 'Upwork', url: '/compare/upwork' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Hiring Bookkeeper on Upwork vs Accountant Capital VA: Cheap Isn't Safe
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Upwork bookkeepers are cheap—but risky. No vetting, no backup, no accountability, no insurance. Your QuickBooks login with a stranger. Accountant Capital VA is vetted, managed, insured, and accountable. See the real cost of hiring wrong.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get a Safe Bookkeeping Solution
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">The 6 Critical Risks of Hiring on Upwork</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="p-6 bg-red-50 border-l-4 border-red-600 rounded-lg">
              <p className="font-600 text-red-900 mb-2">✗ Zero Vetting</p>
              <p className="text-sm text-red-800">Upwork has no background checks, no credential verification, no professional standards. Anyone can set up a profile and claim to be a bookkeeper. You don't know who has access to your financial data.</p>
            </div>

            <div className="p-6 bg-red-50 border-l-4 border-red-600 rounded-lg">
              <p className="font-600 text-red-900 mb-2">✗ No Accountability</p>
              <p className="text-sm text-red-800">Upwork freelancer makes an error on your books? You pay out of pocket. Makes an error on your taxes? You deal with the IRS. No insurance, no recourse, no company to hold responsible.</p>
            </div>

            <div className="p-6 bg-red-50 border-l-4 border-red-600 rounded-lg">
              <p className="font-606 text-red-900 mb-2">✗ Continuity Risk</p>
              <p className="text-sm text-red-800">Freelancer disappears without notice (common on Upwork). You're left without a bookkeeper and potentially without access to historical records. Disruption at the worst time.</p>
            </div>

            <div className="p-6 bg-red-50 border-l-4 border-red-600 rounded-lg">
              <p className="font-600 text-red-900 mb-2">✗ Security & Data Risk</p>
              <p className="text-sm text-red-800">You're giving a stranger your QuickBooks login, customer lists, financial details, tax info. No NDA, no data protection agreement, no audit trail. Data could be sold, leaked, or misused.</p>
            </div>

            <div className="p-6 bg-red-50 border-l-4 border-red-600 rounded-lg">
              <p className="font-600 text-red-900 mb-2">✗ Hidden Management Cost</p>
              <p className="text-sm text-red-800">You become their manager: onboarding, training, monitoring, fixing errors, handling excuses. 5+ hours/week of your time. That's not free—that's expensive.</p>
            </div>

            <div className="p-6 bg-red-50 border-l-4 border-red-600 rounded-lg">
              <p className="font-606 text-red-900 mb-2">✗ Quality Variability</p>
              <p className="text-sm text-red-800">Some Upwork bookkeepers are great. Many are mediocre or worse. You don't know which until it's too late. With a managed service, quality is guaranteed or your money back.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Real-World Upwork Horror Stories</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-lg border-l-4 border-red-600">
              <p className="font-600 text-forest mb-2">Disappeared Without Warning</p>
              <p className="text-text-mid text-sm">"My Upwork bookkeeper went silent for 2 months during tax season. No response, no notice. I had to scramble to hire someone else and reconstruct my books for filing. Cost me $3K in CPA hours."</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-red-600">
              <p className="font-606 text-forest mb-2">Tax Compliance Failure</p>
              <p className="text-text-mid text-sm">"Upwork bookkeeper didn't file sales tax returns. IRS sent me a notice. Penalties were $8,000+. No recourse with the freelancer. I was stuck paying it myself."</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-red-600">
              <p className="font-600 text-forest mb-2">Data Security Breach</p>
              <p className="text-text-mid text-sm">"Found out my Upwork bookkeeper was using my QuickBooks login from an unsecured home WiFi. Customer data was exposed in a malware attack. My business liability, not theirs."</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-red-600">
              <p className="font-600 text-forest mb-2">Embezzlement</p>
              <p className="text-text-mid text-sm">"Upwork bookkeeper added phantom invoices and pocketed payments. Discovered it 6 months later. Reported to Upwork, but had no legal recourse. Lost $12,000."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why Accountant Capital VA is Better</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-606 text-forest mb-2">✓ Fully Vetted</p>
              <p className="text-text-mid text-sm">Checkr background check, skills assessment, video interview, reference verification. Top 3% acceptance rate. You know who has access to your books.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Liability Insurance</p>
              <p className="text-text-mid text-sm">Errors & omissions insurance covers mistakes. If something goes wrong, you're protected. Upwork has zero insurance coverage.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Guaranteed Continuity</p>
              <p className="text-text-mid text-sm">Dedicated bookkeeper won't disappear. Backup coverage ensures your work gets done. No disruption.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Data Security</p>
              <p className="text-text-mid text-sm">Role-based access, NDA, encryption, audit trails, secure devices. Your data is protected like a bank protects money.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Company Accountability</p>
              <p className="text-text-mid text-sm">Mistakes are the company's responsibility. We fix them immediately. Legal recourse if something goes wrong.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-606 text-forest mb-2">✓ No Management Burden</p>
              <p className="text-text-mid text-sm">We manage everything. You don't train, monitor, or replace. Hands-off service with professional standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Cost Comparison: Upwork Vs Accountant Capital VA (Real Numbers)</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-600 text-forest mb-4">Upwork Bookkeeper (What You Think You'll Pay)</h3>
              <div className="space-y-2 text-text-mid text-sm">
                <p>• Hourly rate: $20-30/hour</p>
                <p>• 10 hours/week: $200-300/week</p>
                <p>• Monthly estimate: ~$800-1,200</p>
                <p className="pt-2 border-t border-stone font-600 text-forest">Stated cost: ~$800-$1,200/month</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-red-600">
              <h3 className="text-lg font-606 text-red-900 mb-4">Hidden Costs You Don't See</h3>
              <div className="space-y-2 text-text-mid text-sm">
                <p>• Your management time (10 hours/week): ~$1,000-2,000/month</p>
                <p>• Fixing bookkeeper errors: ~$500-1,000/month (CPA hours)</p>
                <p>• Turnover (finding replacements): ~$1,000-3,000 per hire</p>
                <p>• Security/data risks (potential liability): $$$</p>
                <p>• Stress & uncertainty: Priceless negative</p>
                <p className="pt-2 border-t border-red-600 font-606 text-red-900">Real cost: ~$2,500-$4,000/month + risk</p>
              </div>
            </div>

            <div className="bg-mint/10 p-6 rounded-lg border-2 border-mint">
              <h3 className="text-lg font-600 text-forest mb-4">Accountant Capital VA</h3>
              <div className="space-y-2 text-text-mid text-sm">
                <p>• Part-Time: $700/month (flat-rate, all-in)</p>
                <p>• Includes: bookkeeping, invoicing, AR, AP, reconciliation</p>
                <p>• No management time (fully managed)</p>
                <p>• Errors are caught internally & fixed</p>
                <p>• Continuity guaranteed (no turnover)</p>
                <p>• Insured & accountable</p>
                <p className="pt-2 border-t border-mint font-606 text-forest">Real cost: $700/month (total, no surprises, full protection)</p>
              </div>
            </div>

            <p className="text-center text-text-mid text-sm pt-4">
              Upwork appears cheaper but costs 3-5x more when you account for your time and risk. Accountant Capital VA is predictable, safe, and actually cheaper when you count everything.
            </p>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Stop the Upwork chaos. Get professional, managed bookkeeping.</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your Safety Consultation</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
