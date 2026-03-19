import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Financial Data Security for Virtual Assistants',
  'Learn how Accountant Capital VA protects your financial data. Encryption, NDA agreements, role-based access, background checks, audit trails, compliance (GDPR, CCPA, SOC 2).',
  'financial data security virtual assistant',
  '/compliance/data-security'
);

const faqs = [
  {
    question: 'Who has access to my financial data?',
    answer: 'Only your dedicated VA and your Client Manager have access. No shared logins, no rotating staff. Access is role-based: your VA can see what they need to do their job, nothing more. All access is logged with timestamps.'
  },
  {
    question: 'What if my VA leaves or I want to switch?',
    answer: 'All access is revoked immediately. Your files remain yours. All documentation is handed over securely. We have a transition protocol to ensure zero data loss or exposure.'
  },
  {
    question: 'Are you GDPR and CCPA compliant?',
    answer: 'Yes. We operate under strict data protection policies compliant with GDPR (EU), CCPA (California), and other regulations. Your personal and financial data is treated as your property under your control.'
  },
  {
    question: 'What happens if there\'s a security breach?',
    answer: 'We maintain cyber insurance and have a breach notification protocol. You would be notified within 24 hours. We work with you to remediate and prevent recurrence. Complete transparency.'
  },
  {
    question: 'Can you share data with my CPA or accountant?',
    answer: 'Only if you authorize it. We can generate reports specifically for your CPA or provide them access to a read-only view if you request. You control the access.'
  }
];

export default function DataSecurityPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Compliance', url: '/compliance' },
          { name: 'Data Security', url: '/compliance/data-security' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Financial Data Security at Accountant Capital VA
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Your financial data is sacred. We treat it like our own. Encryption, role-based access, background checks, audit trails, and strict compliance protocols ensure your books are secure and your peace of mind is absolute.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Schedule Your Security Consultation
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">The Security Challenge: Local Bookkeeper vs. Virtual Assistant</h2>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-fraunces font-600 text-forest mb-4">When You Hire a Local Bookkeeper</h3>
                <ul className="space-y-3 text-text-mid">
                  <li className="flex gap-3"><span className="text-red-600 font-bold flex-shrink-0">✗</span><span>They get your QuickBooks login (full admin access)</span></li>
                  <li className="flex gap-3"><span className="text-red-600 font-bold flex-shrink-0">✗</span><span>No audit trail of what they accessed or changed</span></li>
                  <li className="flex gap-3"><span className="text-red-600 font-bold flex-shrink-0">✗</span><span>If they leave, their access lingers (you hope they forget the password)</span></li>
                  <li className="flex gap-3"><span className="text-red-600 font-bold flex-shrink-0">✗</span><span>Personal tax returns, employee data, all visible to them</span></li>
                  <li className="flex gap-3"><span className="text-red-600 font-bold flex-shrink-0">✗</span><span>No formal NDA in many cases</span></li>
                  <li className="flex gap-3"><span className="text-red-600 font-bold flex-shrink-0">✗</span><span>Background check optional (many don't do them)</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-fraunces font-600 text-forest mb-4">Accountant Capital VA</h3>
                <ul className="space-y-3 text-text-mid">
                  <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Role-based access (your VA sees only what they need)</span></li>
                  <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Complete audit trail (timestamps, access logs, every change)</span></li>
                  <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Access revoked immediately upon termination</span></li>
                  <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>No personal tax returns or sensitive employee data visible</span></li>
                  <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Formal NDA (non-disclosure agreement) signed</span></li>
                  <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Checkr background check (top 3% accept)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">How We Protect Your Data</h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <h3 className="font-600 text-forest mb-2">Encryption at Rest & In Transit</h3>
              <p className="text-text-mid">All data transmitted to/from our VAs is encrypted with TLS 1.2+ (same standard banks use). Data stored is AES-256 encrypted. Your financial files are protected by the same security protocols as military-grade communications.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <h3 className="font-600 text-forest mb-2">Role-Based Access Control</h3>
              <p className="text-text-mid">Your VA doesn't have admin access to your QuickBooks. They have bookkeeper-level access: can record transactions, reconcile accounts, run reports. They cannot change user logins, delete data, or access unrelated modules. Principle of least privilege.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <h3 className="font-606 text-forest mb-2">Audit Trails & Logging</h3>
              <p className="text-text-mid">Every action is logged: who accessed what, when, and from where. If a transaction is recorded, modified, or deleted, there's a trail. You can audit access anytime. Full transparency and accountability.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <h3 className="font-600 text-forest mb-2">Checkr Background Checks</h3>
              <p className="text-text-mid">Every VA passes a comprehensive Checkr background check (criminal history, identity verification, employment verification). We only hire the top 3%. Your books are handled by trustworthy professionals.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <h3 className="font-600 text-forest mb-2">Non-Disclosure Agreements</h3>
              <p className="text-text-mid">Every VA signs a formal NDA. Unauthorized disclosure of your financial information is a breach of contract with legal consequences. Your confidentiality is protected legally.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <h3 className="font-600 text-forest mb-2">Secure Device Management</h3>
              <p className="text-text-mid">VAs use company-managed devices with encryption, password policies, and remote wipe capability. If a device is lost, data is remotely erased. No personal devices accessing your data.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <h3 className="font-600 text-forest mb-2">Cyber Insurance</h3>
              <p className="text-text-mid">We maintain cyber liability insurance to protect against data breaches, ransomware, and security incidents. If something goes wrong, your data and business are covered.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Regulatory Compliance</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-stone-warm rounded-lg">
              <h3 className="font-600 text-forest mb-3">GDPR (Europe)</h3>
              <p className="text-text-mid text-sm">We comply with the General Data Protection Regulation. If you have EU customers or operate in Europe, your data is protected under GDPR requirements: consent, data minimization, deletion rights, and breach notification.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <h3 className="font-606 text-forest mb-3">CCPA (California)</h3>
              <p className="text-text-mid text-sm">We comply with California Consumer Privacy Act requirements. You have rights to know what data we hold, delete it, and opt-out of certain uses. Your financial privacy is your right.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <h3 className="font-600 text-forest mb-3">SOC 2 Type II</h3>
              <p className="text-text-mid text-sm">We maintain SOC 2 Type II compliance, which means our systems and processes have been independently audited for security, availability, integrity, and confidentiality. Third-party verification of our security posture.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <h3 className="font-600 text-forest mb-3">PCI DSS (Payment Card Data)</h3>
              <p className="text-text-mid text-sm">If payment data is involved (unlikely in basic bookkeeping), we maintain PCI DSS compliance. Credit card data is never stored; only transaction amounts are recorded.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What You Control</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">You Own Your Data</p>
              <p className="text-text-mid text-sm">Your QuickBooks instance is yours. Your financial data is yours. We're guests with limited, revocable access. You can revoke access anytime, export your data anytime.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">You Approve Access</p>
              <p className="text-text-mid text-sm">Your VA doesn't auto-access everything. You decide what they can access (usually: QB Online, Xero, Stripe, PayPal, your bank). You control the integration.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">You Control Sharing</p>
              <p className="text-text-mid text-sm">Sharing reports with your CPA, bank, or investor? You decide. We'll provide reports, or we can request your CPA to view directly. Always your call.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">You Can Audit Anytime</p>
              <p className="text-text-mid text-sm">Access logs, transaction audit trail, change history. You can audit your VA's work anytime. Transparency is built-in.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">You Can Exit Anytime</p>
              <p className="text-text-mid text-sm">Month-to-month agreement. No long-term lock-in. Leave anytime and we transition your data cleanly to your new provider.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Client Testimonial: Trust & Peace of Mind</h2>

          <div className="p-8 bg-stone-warm rounded-lg border-l-4 border-mint max-w-3xl mx-auto">
            <p className="text-text-mid text-lg leading-relaxed mb-4">
              "I was nervous about giving a VA access to my QuickBooks. I'd heard horror stories of bookkeepers stealing or leaking data. But Accountant Capital VA was transparent about their security: Checkr background checks, NDA signed, role-based access only. I can see an audit trail of everything they do. More secure than my last in-house bookkeeper. Total peace of mind."
            </p>
            <p className="font-600 text-forest">
              Sarah M., E-Commerce Store Owner
            </p>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to trust your books to secure hands?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your Security Consultation</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
