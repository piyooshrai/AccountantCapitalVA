import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Vetted Virtual Assistant Bookkeeping — Quality Over Quantity',
  'Meet our vetted virtual assistants. 5-step vetting process, top 3% acceptance rate, Checkr background checks, skills assessment, video interviews, paid trial. Who handles your books matters.',
  'vetted virtual assistant bookkeeping',
  '/compliance/vetting-process'
);

const faqs = [
  {
    question: 'Why is the 3% acceptance rate important?',
    answer: 'We receive hundreds of applications from VAs worldwide. We accept only 3% because bookkeeping accuracy and trustworthiness are non-negotiable. Your books are sacred. We only hire people we\'d trust with our own finances.'
  },
  {
    question: 'What if I don\'t like my assigned VA?',
    answer: 'We listen to feedback. If the match isn\'t working, we arrange a replacement. Usually one conversation is enough to fix the issue (communication preference, responsiveness, style). Switching VAs is part of our service guarantee.'
  },
  {
    question: 'Can I meet my VA before commitment?',
    answer: 'Yes. During qualification, you\'ll have a brief intro call with your potential VA. You can ask questions, get a feel for their communication style, and decide if you\'re comfortable. You\'re matching with a person, not a service.'
  },
  {
    question: 'What skills are you testing for?',
    answer: 'QuickBooks/Xero proficiency, reconciliation accuracy, attention to detail, numerical reasoning, communication, and customer service. We also assess whether they understand bookkeeping principles (not just software clicks).'
  },
  {
    question: 'How long is the paid trial period?',
    answer: 'Usually 1-2 weeks. Your VA works on your books and we evaluate quality, responsiveness, and fit. If it\'s not working, you don\'t commit. If it\'s perfect, you move to regular service. Low-risk for you.'
  }
];

export default function VettingProcessPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Compliance', url: '/compliance' },
          { name: 'Vetting Process', url: '/compliance/vetting-process' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Our Vetting Process: How We Find the Top 3%
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Your bookkeeper matters. We don't hire quickly or hire cheap. Our 5-step vetting process ensures you get a professional who's skilled, trustworthy, and detail-oriented. Here's how we find the best.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Let's Find Your VA
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">The 5-Step Vetting Process</h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-2xl">1</div>
              <div>
                <h3 className="text-2xl font-fraunces font-600 text-forest mb-2">Resume & Background Review</h3>
                <p className="text-text-mid mb-3">We review resume, work history, and background. Looking for: accounting/bookkeeping education or certifications (CPA, bookkeeping diploma), 3+ years of professional bookkeeping experience, references from previous employers or clients.</p>
                <p className="text-sm text-forest font-500">Result: ~200 applicants → 20 interviews (90% filtered at this stage)</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-2xl">2</div>
              <div>
                <h3 className="text-2xl font-fraunces font-600 text-forest mb-2">Technical Skills Assessment</h3>
                <p className="text-text-mid mb-3">Hands-on assessment of bookkeeping skills. We give a practical scenario (reconcile a bank statement, categorize transactions, prepare a simple P&L) and evaluate accuracy, process, and attention to detail. This isn't a trivia test—it's real bookkeeping work.</p>
                <p className="text-sm text-forest font-500">Result: ~20 candidates → 8 pass (60% filtered at this stage)</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-2xl">3</div>
              <div>
                <h3 className="text-2xl font-fraunces font-600 text-forest mb-2">Video Interview & Assessment</h3>
                <p className="text-text-mid mb-3">30-minute video interview with our hiring team. We assess communication (can they explain bookkeeping concepts clearly?), customer service mindset (how do they respond to difficult questions?), attention to detail (do they catch inconsistencies in their own speech?), and cultural fit (do they care about accuracy and customer satisfaction?).</p>
                <p className="text-sm text-forest font-500">Result: ~8 candidates → 5 move forward (37% filtered at this stage)</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-2xl">4</div>
              <div>
                <h3 className="text-2xl font-fraunces font-600 text-forest mb-2">Checkr Background Check & Reference Verification</h3>
                <p className="text-text-mid mb-3">Comprehensive Checkr background check (criminal history, identity verification, employment history verification) and direct outreach to references. We verify claims and assess trustworthiness. This is critical because bookkeeping requires access to sensitive financial data.</p>
                <p className="text-sm text-forest font-500">Result: ~5 candidates → 3-4 pass (20-40% filtered at this stage)</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-2xl">5</div>
              <div>
                <h3 className="text-2xl font-fraunces font-600 text-forest mb-2">Paid Trial Period (1-2 Weeks)</h3>
                <p className="text-text-mid mb-3">Passed all screening? You move to a paid trial. Your VA works on a sample bookkeeping project (or your actual books). We monitor quality, responsiveness, communication, and fit. You evaluate whether this is the right person for your business. If it's not a match, no commitment required.</p>
                <p className="text-sm text-forest font-500">Result: ~3-4 trial → 1-2 hired (final 33-50% filtered, based on fit)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why the 3% Standard?</h2>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Accuracy Is Non-Negotiable</p>
              <p className="text-text-mid">Bookkeeping errors compound. A $100 miscategorization in January throws off your entire year of reporting. We hire only people with track records of meticulous accuracy. No shortcuts.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">Trust Is Everything</p>
              <p className="text-text-mid">Your VA has access to sensitive financial data: customer names, transaction details, profit margins, tax information. We only hire people you can absolutely trust. Background checks, references, and behavioral assessment are critical.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Quality Over Volume</p>
              <p className="text-text-mid">We could hire faster and cheaper by relaxing standards. Instead, we reject 97% of applicants to ensure every VA is exceptional. Better to have fewer VAs who are brilliant than many who are mediocre.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Your Success Depends On It</p>
              <p className="text-text-mid">If your VA is careless or slow, your cash flow suffers, your tax planning fails, your business decisions are based on bad data. We hire only VAs who elevate your business, not drag it down.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Meet Our Team</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-stone-warm mb-4 flex items-center justify-center">
                <span className="text-4xl text-forest font-bold">D</span>
              </div>
              <h3 className="text-xl font-fraunces font-600 text-forest mb-1">Daniel</h3>
              <p className="text-sm text-text-mid mb-3">Senior Bookkeeper</p>
              <p className="text-sm text-text-mid">CPA (Colombia), 8 years bookkeeping & accounting. Specializes in multi-currency, international clients, complex reconciliations.</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-stone-warm mb-4 flex items-center justify-center">
                <span className="text-4xl text-forest font-bold">E</span>
              </div>
              <h3 className="text-xl font-fraunces font-600 text-forest mb-1">Elena</h3>
              <p className="text-sm text-text-mid mb-3">Senior Bookkeeper</p>
              <p className="text-sm text-text-mid">Certified bookkeeper, 6 years experience. Specializes in ecommerce, Shopify, inventory management, COGS tracking.</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-stone-warm mb-4 flex items-center justify-center">
                <span className="text-4xl text-forest font-bold">M</span>
              </div>
              <h3 className="text-xl font-fraunces font-600 text-forest mb-1">Maya</h3>
              <p className="text-sm text-text-mid mb-3">Operations & Client Mgr</p>
              <p className="text-sm text-text-mid">10 years bookkeeping + client management. Ensures quality, handles escalations, coordinates with your CPA. Your primary contact.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Ongoing Training & Quality Assurance</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Monthly Quality Reviews</p>
              <p className="text-text-mid text-sm">Every VA's work is reviewed monthly by our Operations Manager. We audit 10% of transactions, assess accuracy, evaluate efficiency. Continuous improvement mindset.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">Annual Certification Updates</p>
              <p className="text-text-mid text-sm">VAs maintain bookkeeping certifications and take annual CPE (continuing professional education) courses. Software updates, accounting standards, best practices—always current.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Client Feedback Loop</p>
              <p className="text-text-mid text-sm">We actively solicit client feedback every quarter. Is the VA responsive? Accurate? Proactive? Feedback shapes improvement plans and informs compensation/advancement.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Specialization Path</p>
              <p className="text-text-mid text-sm">VAs deepen expertise in specific areas (ecommerce, construction, real estate, etc.). The more specialized, the better service you get. We invest in expertise development.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">What This Means For You</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Expertise You Can Trust</p>
              <p className="text-text-mid text-sm">Your VA has been vetted thoroughly and has years of professional bookkeeping experience. No learning curves, no trial-and-error.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-606 text-forest mb-2">✓ Accuracy You Can Depend On</p>
              <p className="text-text-mid text-sm">Bookkeeping errors are caught and corrected. Your VA takes pride in accuracy. Your books are reliable for decision-making.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Security You Can Count On</p>
              <p className="text-text-mid text-sm">Background-checked, NDA-signed, audit-trail-logged. Your data is handled by trustworthy professionals.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Service You Can Rely On</p>
              <p className="text-text-mid text-sm">Responsive, proactive, professional. Your VA takes initiative to improve your books and support your growth.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to work with a vetted professional?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Start Your Vetting Process</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
