import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Bookkeeper360 vs Accountant Capital VA: Dedicated Bookkeeper Comparison',
  'Compare Bookkeeper360 ($399+/mo, shared across accounts) vs Accountant Capital VA ($700-$1,300/mo, fully dedicated, same person always). Which offers better continuity and service?',
  'Bookkeeper360 alternative',
  '/compare/bookkeeper360'
);

const faqs = [
  {
    question: 'What does "fully dedicated" mean on Accountant Capital VA?',
    answer: 'Your VA works only on your account. Not shared with other clients. Same person handles your books every day. Bookkeeper360 shares bookkeepers across multiple accounts, which can lead to inconsistency.'
  },
  {
    question: 'Is Accountant Capital VA more expensive than Bookkeeper360?',
    answer: 'Yes upfront ($700 vs $399). But Bookkeeper360 often has add-on costs (payroll, tax prep, etc.). More importantly, dedicated attention means faster response times, better accuracy, and deeper business understanding. Value is worth the cost.'
  },
  {
    question: 'Can I switch from Bookkeeper360 to Accountant Capital VA?',
    answer: 'Yes. Your books and data stay yours. We import your history and transition smoothly (1-2 weeks). No data loss, no disruption.'
  },
  {
    question: 'Does Bookkeeper360 offer invoicing and AR?',
    answer: 'Bookkeeper360 has wide service range, but invoicing/AR are often add-ons or limited. Accountant Capital VA includes invoicing and AR management in both Part-Time and Full-Time plans.'
  },
  {
    question: 'What if I want to change bookkeepers?',
    answer: 'With Bookkeeper360, shared model means rotation might happen anyway. With Accountant Capital VA, your VA is dedicated to you. If you want to change, we facilitate a smooth transition, but continuity is the default.'
  }
];

export default function Bookkeeper360ComparePage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Compare', url: '/compare' },
          { name: 'Bookkeeper360', url: '/compare/bookkeeper360' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Bookkeeper360 vs Accountant Capital VA: Shared vs Dedicated
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Bookkeeper360 is larger and offers more services, but your bookkeeper may be juggling multiple clients. Accountant Capital VA is fully dedicated: same person, same business, always. See how continuity and focus make a difference.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Your Dedicated Bookkeeper
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Dedicated vs Shared: The Core Difference</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-stone-warm rounded-lg">
              <h3 className="font-600 text-forest mb-4 text-lg">Bookkeeper360 Model</h3>
              <ul className="space-y-3 text-text-mid text-sm">
                <li className="flex gap-2"><span className="text-forest">•</span><span>Your bookkeeper may have 5-10 clients</span></li>
                <li className="flex gap-2"><span className="text-forest">•</span><span>Rotating coverage and priority assignment</span></li>
                <li className="flex gap-2"><span className="text-forest">•</span><span>May not remember your specific patterns or history</span></li>
                <li className="flex gap-2"><span className="text-forest">•</span><span>Higher efficiency (shared resources), lower personal touch</span></li>
                <li className="flex gap-2"><span className="text-forest">•</span><span>Standardized processes over custom attention</span></li>
              </ul>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <h3 className="font-600 text-forest mb-4 text-lg">Accountant Capital VA Model</h3>
              <ul className="space-y-3 text-text-mid text-sm">
                <li className="flex gap-2"><span className="text-mint">✓</span><span>Your VA works only on your account</span></li>
                <li className="flex gap-2"><span className="text-mint">✓</span><span>Same person, every day, every month</span></li>
                <li className="flex gap-2"><span className="text-mint">✓</span><span>Knows your business deeply and proactively</span></li>
                <li className="flex gap-2"><span className="text-mint">✓</span><span>Personal touch with professional standards</span></li>
                <li className="flex gap-2"><span className="text-mint">✓</span><span>Customized attention to your specific needs</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Quick Comparison: Bookkeeper360 vs Accountant Capital VA</h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-mint">
                  <th className="text-left py-3 px-4 font-600 text-forest">Feature</th>
                  <th className="text-center py-3 px-4 font-600 text-forest">Bookkeeper360</th>
                  <th className="text-center py-3 px-4 font-600 text-mint">Accountant Capital VA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Base Monthly Cost</td>
                  <td className="text-center py-3 px-4">$399+</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">$700-$1,300</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Bookkeeper Dedication</td>
                  <td className="text-center py-3 px-4">Shared (5-10 clients)</td>
                  <td className="text-center py-3 px-4 font-606 text-mint">✓ Fully dedicated</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Consistency</td>
                  <td className="text-center py-3 px-4">May rotate staff</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Same person always</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Bookkeeping</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Invoicing & AR</td>
                  <td className="text-center py-3 px-4">Limited or add-on</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Included</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Expense & AP</td>
                  <td className="text-center py-3 px-4">Limited or add-on</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Included</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Payroll Support</td>
                  <td className="text-center py-3 px-4">Add-on cost</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Full-Time plan</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Client Manager</td>
                  <td className="text-center py-3 px-4">No (escalation process)</td>
                  <td className="text-center py-3 px-4 font-606 text-mint">✓ Yes (direct)</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Commitment</td>
                  <td className="text-center py-3 px-4">Annual or long-term</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">✓ Month-to-month</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-forest font-500">Annual Cost (base)</td>
                  <td className="text-center py-3 px-4 font-600">$4,788+</td>
                  <td className="text-center py-3 px-4 font-600 text-mint">$8,400-$15,600</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why People Switch from Bookkeeper360 to Accountant Capital VA</h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">1</span>
              <div>
                <p className="font-600 text-forest mb-1">Staff Rotation</p>
                <p className="text-text-mid text-sm">"Different bookkeeper every few months with Bookkeeper360. I had to re-explain my business every time. With Accountant Capital VA, my VA knows me inside-out. Massive quality improvement."</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">2</span>
              <div>
                <p className="font-606 text-forest mb-1">Invoicing Gaps</p>
                <p className="text-text-mid text-sm">"Bookkeeper360 didn't handle invoicing. That was a separate service or my problem. With Accountant Capital VA, invoicing and collections are built-in. Way more integrated."</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">3</span>
              <div>
                <p className="font-600 text-forest mb-1">Slow Response Times</p>
                <p className="text-text-mid text-sm">"With shared bookkeeper, response times were slow. 3-5 business days to get answers. My Accountant Capital VA responds same-day. The responsiveness difference is huge."</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-mint font-bold text-xl flex-shrink-0">4</span>
              <div>
                <p className="font-600 text-forest mb-1">No Proactive Support</p>
                <p className="text-text-mid text-sm">"Bookkeeper360 was reactive: I asked a question, they answered. My Accountant Capital VA is proactive: they flag issues before I see them. Huge difference in service quality."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready for a bookkeeper who's truly dedicated to your success?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Switch to Dedicated Bookkeeping</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
