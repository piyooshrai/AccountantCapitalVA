import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';
import Image from 'next/image';

export const metadata: Metadata = generatePageMetadata(
  'About Accountant Capital VA',
  'Learn about our team, 6-year track record, 97% retention rate, and why businesses trust us with their financial operations.',
  'about bookkeeping virtual assistant',
  '/about'
);

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[{ name: 'About', url: '/about' }]} />
      </section>

      {/* Hero */}
      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            We believe your bookkeeper shouldn't keep changing.
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed">
            Accountant Capital VA was built on a simple idea: businesses shouldn't have to deal with bookkeeper turnover, inconsistency, and the constant burden of rebuilding relationships with new team members. You deserve stability. You deserve someone who knows your business.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Our Story</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="prose prose-lg text-text-mid space-y-6">
              <p>
                Accountant Capital VA was founded in 2019 as part of The Human Capital, a premium virtual assistant company serving over 500 clients globally. But our founders noticed a gap in the market: small businesses needed more than just general admin support. They needed someone who could manage their finances competently, consistently, and without the constant churn of hiring and re-training.
              </p>

              <p>
                The problem was simple but pervasive. Small business owners were either:
              </p>

              <ul className="space-y-2">
                <li>• Doing their own bookkeeping (costing them 5-8 hours/week)</li>
                <li>• Hiring local bookkeepers who quit or burned out</li>
                <li>• Trying expensive services like Bench or Pilot and feeling like they got a platform instead of a person</li>
              </ul>

              <p>
                We launched Accountant Capital VA as a vertical within The Human Capital specifically for bookkeeping and financial administration. We invested in training, vetting, and pairing dedicated VAs with bookkeeping clients. The result? 97% retention, clean books every month, and business owners who finally sleep well knowing their finances are handled.
              </p>
            </div>

            <div className="bg-stone-warm rounded-lg p-8">
              <h3 className="font-600 text-forest text-lg mb-6">Key Milestones</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-mint pl-4">
                  <div className="text-sm text-forest font-600">2019</div>
                  <p className="text-text-mid">Founded Accountant Capital VA</p>
                </div>
                <div className="border-l-4 border-mint pl-4">
                  <div className="text-sm text-forest font-600">2020-2021</div>
                  <p className="text-text-mid">Scaled to 150+ active clients, expanded to multi-location businesses</p>
                </div>
                <div className="border-l-4 border-mint pl-4">
                  <div className="text-sm text-forest font-600">2022</div>
                  <p className="text-text-mid">Introduced Client Manager oversight, backup VA guarantee</p>
                </div>
                <div className="border-l-4 border-mint pl-4">
                  <div className="text-sm text-forest font-600">2023-2024</div>
                  <p className="text-text-mid">Expanded to 1000+ active clients across US, UK, Middle East, APAC</p>
                </div>
                <div className="border-l-4 border-mint pl-4">
                  <div className="text-sm text-forest font-600">2025</div>
                  <p className="text-text-mid">97% client retention, recognized as trusted financial VA provider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Vetting */}
      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Who We Are</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Maya',
                image: '/agents/maya.jpg',
                title: 'Senior Bookkeeper VA',
                bio: 'QuickBooks certified with 8+ years of accounting experience. Specializes in multi-channel reconciliation and financial reporting.'
              },
              {
                name: 'Daniel',
                image: '/agents/daniel.jpg',
                title: 'Payroll & Accounts Payable Specialist',
                bio: 'Expert in Gusto, ADP, and payroll tax compliance. Managed accounting operations for healthcare group before joining us.'
              },
              {
                name: 'Elena',
                image: '/agents/elena.jpg',
                title: 'Financial Reporting & AR Manager',
                bio: 'Xero and Excel expert. Builds custom dashboards and financial reports. 10+ years managing AR for professional services.'
              }
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-64 bg-stone-warm relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-fraunces font-600 text-lg text-forest">{member.name}</h3>
                  <p className="text-sm text-mint font-600 mb-2">{member.title}</p>
                  <p className="text-text-mid text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-12 border-2 border-mint">
            <h3 className="text-2xl font-fraunces font-600 text-forest mb-8">Our Vetting Process</h3>
            <p className="text-text-mid mb-8 leading-relaxed">
              We hire the top 3% of applicants. Every VA on our team goes through a rigorous 5-step vetting process to ensure they can handle financial operations with accuracy, professionalism, and trustworthiness.
            </p>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { num: '1', title: 'Resume Review', desc: 'Screen for accounting/bookkeeping experience' },
                { num: '2', title: 'Skills Assessment', desc: 'QuickBooks, Xero, Excel, accounting knowledge' },
                { num: '3', title: 'Video Interview', desc: 'Communication, problem-solving, financial literacy' },
                { num: '4', title: 'Background Check', desc: 'Checkr verification + financial clearance' },
                { num: '5', title: 'Paid Trial', desc: 'Real-world bookkeeping tasks with oversight' },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h4 className="font-600 text-forest mb-2">{step.title}</h4>
                  <p className="text-text-mid text-sm">{step.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-text-mid mt-8 pt-8 border-t border-stone-warm">
              <strong>Why this matters:</strong> Your financial data is sensitive. We don't take that responsibility lightly. Every VA signs an NDA, passes a background check through Checkr, and proves their competence before ever touching a client's books.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why Businesses Trust Us</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-fraunces font-600 text-forest mb-6">By the Numbers</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-4xl font-bold text-mint flex-shrink-0">6</div>
                  <div>
                    <p className="font-600 text-forest">Years in Business</p>
                    <p className="text-text-mid text-sm">Proven track record since 2019</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl font-bold text-mint flex-shrink-0">97%</div>
                  <div>
                    <p className="font-600 text-forest">Client Retention</p>
                    <p className="text-text-mid text-sm">Clients stay because results speak</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl font-bold text-mint flex-shrink-0">1000+</div>
                  <div>
                    <p className="font-600 text-forest">Active Clients</p>
                    <p className="text-text-mid text-sm">Across US, UK, Middle East, APAC</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl font-bold text-mint flex-shrink-0">$500M+</div>
                  <div>
                    <p className="font-600 text-forest">Client Annual Revenue</p>
                    <p className="text-text-mid text-sm">From startups to established businesses</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-fraunces font-600 text-forest mb-6">Our Commitments</h3>
              <div className="space-y-4">
                <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
                  <h4 className="font-600 text-forest mb-2">Dedicated Person</h4>
                  <p className="text-text-mid text-sm">Same VA every day. They learn your business, your preferences, your workflows.</p>
                </div>

                <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
                  <h4 className="font-600 text-forest mb-2">Client Manager Oversight</h4>
                  <p className="text-text-mid text-sm">A dedicated Client Manager oversees your VA's work, quality checks, and performance reviews.</p>
                </div>

                <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
                  <h4 className="font-600 text-forest mb-2">Backup VA Guarantee</h4>
                  <p className="text-text-mid text-sm">If your primary VA is sick or on vacation, your backup steps in. No interruptions.</p>
                </div>

                <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
                  <h4 className="font-600 text-forest mb-2">Data Security & NDA</h4>
                  <p className="text-text-mid text-sm">Every VA signs an NDA, passes Checkr, and uses encrypted file sharing. Audit trails included.</p>
                </div>

                <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
                  <h4 className="font-600 text-forest mb-2">Month-to-Month Flexibility</h4>
                  <p className="text-text-mid text-sm">No contracts. Cancel anytime. We earn your business every month.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part of The Human Capital */}
      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Part of The Human Capital Family</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-text-mid mb-6 leading-relaxed">
                Accountant Capital VA is a specialized vertical within <a href="https://thehuman.capital" className="text-mint hover:text-forest font-600">The Human Capital</a>, a premium VA company serving 500+ clients globally since 2018.
              </p>

              <p className="text-lg text-text-mid mb-6 leading-relaxed">
                This means you get the stability and resources of a larger organization, but the dedicated, personalized service of a boutique firm. Our parent company handles recruitment, vetting, training, and management. We focus on matching you with the right VA and delivering results.
              </p>

              <p className="text-lg text-text-mid mb-6 leading-relaxed">
                It's the best of both worlds: institutional resources + personal attention.
              </p>

              <Link
                href="https://thehuman.capital"
                className="inline-block text-mint font-600 hover:text-forest transition"
              >
                Learn more about The Human Capital →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-12 border-2 border-stone-warm">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">The Human Capital</h3>
              <div className="space-y-4 text-text-mid">
                <div>
                  <p className="font-600 text-forest">500+</p>
                  <p className="text-sm">Active clients</p>
                </div>
                <div>
                  <p className="font-600 text-forest">50+</p>
                  <p className="text-sm">Specialized VAs</p>
                </div>
                <div>
                  <p className="font-600 text-forest">6 years</p>
                  <p className="text-sm">Track record</p>
                </div>
                <div>
                  <p className="font-600 text-forest">4 continents</p>
                  <p className="text-sm">Global presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to meet your dedicated VA?</h2>
          <p className="text-mint-light mb-8">Let's schedule a 15-minute call to understand your needs.</p>
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
