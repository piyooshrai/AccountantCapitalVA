import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ChevronRight, Check, X, AlertCircle } from 'lucide-react';

const QuickBooksLiveComparison = () => {
  const faqs = [
    {
      question: "Can Accountant Capital VA work with QuickBooks Online?",
      answer: "Absolutely. Unlike QuickBooks Live which is QuickBooks-only, we work with QuickBooks Online, Xero, FreshBooks, Wave, or any other accounting software you prefer. This means you keep your existing systems and get a dedicated bookkeeper who knows them inside and out."
    },
    {
      question: "What happens if my dedicated bookkeeper gets sick or takes time off?",
      answer: "We maintain a managed backup system. Our team ensures continuity of service—there's always someone who knows your account and can step in. With QuickBooks Live, you might get a different person from their network each time, which disrupts workflow and requires repeated explanations."
    },
    {
      question: "How does pricing compare over a year?",
      answer: "QuickBooks Live runs $200-$400/month ($2,400-$4,800/year) depending on your plan and add-ons. Accountant Capital VA offers dedicated bookkeeping services starting at competitive rates, but you get far broader services: invoicing, accounts receivable management, payroll support, and tax preparation assistance. You're comparing a specialized QuickBooks service to a comprehensive financial administration partner."
    },
    {
      question: "Can Accountant Capital VA handle payroll like QB Live claims to?",
      answer: "Yes, and our approach is more personalized. We don't just push you toward a third-party service—we actively manage your payroll process, work with your payroll provider, ensure tax compliance, and integrate everything with your books. We have hands-on experience with multiple payroll platforms."
    },
    {
      question: "What if I'm happy with QuickBooks Live but want more help?",
      answer: "Many of our clients come from QuickBooks Live after realizing they needed someone who could do more than QBO adjustments. They wanted their bookkeeper to also handle invoicing follow-ups, understand their business operations, and provide tax-planning insights. We offer that continuity plus expansion of services as your business grows."
    }
  ];

  const comparisonFeatures = [
    { feature: "Dedicated Bookkeeper", acca: true, qbl: false, note: "Same person, every time" },
    { feature: "Software Flexibility", acca: true, qbl: false, note: "Works with any accounting software" },
    { feature: "Invoicing & AR Management", acca: true, qbl: false, note: "We follow up on unpaid invoices" },
    { feature: "Accounts Payable Management", acca: true, qbl: false, note: "We negotiate and process payments" },
    { feature: "Payroll Support", acca: true, qbl: true, note: "ACCA: Hands-on. QBL: Limited/referral" },
    { feature: "Tax Preparation Assistance", acca: true, qbl: false, note: "We coordinate with your CPA" },
    { feature: "Financial Reporting", acca: true, qbl: true, note: "Both provide, ACCA adds interpretation" },
    { feature: "Continuity of Service", acca: true, qbl: false, note: "ACCA: Managed. QBL: Variable" },
    { feature: "Proactive Tax Planning", acca: true, qbl: false, note: "We identify tax-saving opportunities" },
    { feature: "Client Support Portal", acca: true, qbl: true, note: "Both offer access" },
    { feature: "Business Advisory", acca: true, qbl: false, note: "We help improve financial health" },
    { feature: "Multi-Software Integration", acca: true, qbl: false, note: "We integrate CRM, POS, etc." }
  ];

  return (
    <>
      <Head>
        <title>QuickBooks Live Alternative | Accountant Capital VA</title>
        <meta name="description" content="Compare QuickBooks Live vs Accountant Capital VA. Get a dedicated bookkeeper who works with any software, handles invoicing, payroll, and tax support—not just QuickBooks adjustments." />
        <meta name="keywords" content="QuickBooks Live alternative, bookkeeper, accounting services, QuickBooks Online help" />
        <link rel="canonical" href="https://accountantcapitalva.com/compare/quickbooks-live" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ComparisonTable",
              headline: "QuickBooks Live vs Accountant Capital VA",
              description: "Detailed feature and cost comparison between QuickBooks Live and Accountant Capital VA",
              image: "https://accountantcapitalva.com/og-compare-qbl.jpg"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(faq => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer
                }
              }))
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-200">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-gray-900">
              Accountant Capital VA
            </Link>
            <div className="flex gap-6 items-center">
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
                Services
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <button className="bg-gradient-to-r from-[#1B3A2D] to-[#2D5A4A] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition">
                Get Started
              </button>
            </div>
          </nav>
        </header>

        {/* Breadcrumbs */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/compare" className="hover:text-gray-900">Compare</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-semibold">QuickBooks Live</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              QuickBooks Live Alternative: Why Accountant Capital VA Wins
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              QuickBooks Live is limited to QuickBooks Online and focuses narrowly on bookkeeping adjustments. We provide a dedicated bookkeeper who works with your preferred software, manages invoicing and accounts payable, supports payroll, and partners in tax planning. Same person, every time. Broader solutions. Real accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#1B3A2D] to-[#2D5A4A] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition text-lg">
                Schedule Your Free Consultation
              </button>
              <button className="border-2 border-[#1B3A2D] text-[#1B3A2D] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition text-lg">
                Download Comparison Guide
              </button>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="bg-gradient-to-r from-[#1B3A2D]/5 to-[#7DD4AA]/10 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <p className="text-3xl font-bold text-[#1B3A2D] mb-1">$200-400</p>
                <p className="text-gray-600">QB Live monthly cost</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1B3A2D] mb-1">1 Service</p>
                <p className="text-gray-600">QB Live focus area</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1B3A2D] mb-1">6+ Services</p>
                <p className="text-gray-600">ACCA comprehensive suite</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1B3A2D] mb-1">1 Person</p>
                <p className="text-gray-600">Your dedicated bookkeeper</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Core Difference */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">The Core Difference: Dedicated vs. Shared</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-orange-500" />
                QuickBooks Live Model
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Shared bookkeeper pool across multiple clients</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Different person may work on your account each time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Limited to QuickBooks Online only</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Focus: Balance sheet and journal entry adjustments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>No hands-on invoicing or payment management</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>$200-$400/month (averaging $3,000-$4,800/year)</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-[#7DD4AA] rounded-lg p-8 bg-gradient-to-br from-[#7DD4AA]/5 to-transparent">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Check className="w-6 h-6 text-[#1B3A2D]" />
                Accountant Capital VA Model
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold">•</span>
                  <span>Dedicated bookkeeper assigned to your account</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold">•</span>
                  <span>Same person every day—they know your business cold</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold">•</span>
                  <span>Works with QuickBooks, Xero, FreshBooks, Wave, or your software</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold">•</span>
                  <span>Full financial administration: invoicing, AR, AP, payroll, tax prep coordination</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold">•</span>
                  <span>Proactive: Identifies tax savings, improves cash flow, advises on financial strategy</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold">•</span>
                  <span>Transparent pricing; broader value justifies the investment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-800">
              <strong>The Real Cost of "Shared":</strong> When a different bookkeeper touches your account each time, they waste hours getting up to speed. You repeat explanations. Details fall through cracks. And when something goes wrong, accountability is fuzzy. With a dedicated bookkeeper, that overhead vanishes, trust builds, and your business runs smoother.
            </p>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Feature Comparison: Side-by-Side</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="text-left px-6 py-4 font-bold text-gray-900">Feature</th>
                  <th className="text-center px-6 py-4 font-bold text-gray-900">Accountant Capital VA</th>
                  <th className="text-center px-6 py-4 font-bold text-gray-900">QuickBooks Live</th>
                  <th className="text-left px-6 py-4 font-bold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.feature}</td>
                    <td className="text-center px-6 py-4">
                      {item.acca ? (
                        <Check className="w-6 h-6 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="text-center px-6 py-4">
                      {item.qbl ? (
                        <Check className="w-6 h-6 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Cost Analysis */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Real Cost Analysis</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-lg p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">QuickBooks Live Annual Cost</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Base tier ($200/mo)</span>
                  <span className="font-bold text-gray-900">$2,400</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Mid tier ($300/mo)</span>
                  <span className="font-bold text-gray-900">$3,600</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Premium tier ($400/mo)</span>
                  <span className="font-bold text-gray-900">$4,800</span>
                </div>
                <div className="border-t-2 border-orange-300 pt-4">
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-700"><strong>Typical annual cost</strong></span>
                    <span className="font-bold text-orange-700 text-xl">$3,600-$4,800</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                <strong>What's included:</strong> QuickBooks Online journal entries and balance sheet adjustments only. Additional features (payroll coordination, CPA liaison) often cost extra or are unavailable.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#7DD4AA]/20 to-[#1B3A2D]/10 rounded-lg p-8 border border-[#7DD4AA]">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Accountant Capital VA Annual Value</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Dedicated bookkeeper</span>
                  <span className="font-bold text-gray-900">Included</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Invoicing & AR management</span>
                  <span className="font-bold text-gray-900">Included</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Payroll coordination</span>
                  <span className="font-bold text-gray-900">Included</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Tax planning assistance</span>
                  <span className="font-bold text-gray-900">Included</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Any accounting software</span>
                  <span className="font-bold text-gray-900">Included</span>
                </div>
                <div className="border-t-2 border-[#7DD4AA] pt-4">
                  <p className="text-gray-700 text-sm mb-4">
                    <strong>Hidden QB Live costs you're NOT seeing:</strong> Payroll coordination ($200-500/mo if you need help), CPA coordination fees, software integrations, tax planning consultation.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                <strong>What you get:</strong> Full financial administration, one person who knows your business, proactive tax and cash flow optimization, continuity that saves time every single day.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
            <p className="text-gray-800 font-semibold mb-2">The Hidden Cost of QB Live</p>
            <p className="text-gray-700">
              QB Live keeps you siloed in QuickBooks. If you use a separate CRM, POS system, or payroll tool, you're manually reconciling or hiring a bookkeeper anyway. ACCA integrates everything. One person. One source of truth. No duplicate data entry or confusion.
            </p>
          </div>
        </section>

        {/* When QB Live Makes Sense */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">When QB Live Might Make Sense (Honestly)</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">You're extremely solo and minimalist</h3>
              <p className="text-gray-700">
                If you have just a handful of transactions per month, use only QuickBooks Online, invoice manually, pay invoices manually, and don't care about tax planning—QB Live's minimal approach might be fine. But most growing businesses outgrow this quickly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">You're committed to QuickBooks forever</h3>
              <p className="text-gray-700">
                If you've decided QuickBooks Online is your forever tool and you never want to evaluate alternatives, QB Live locks you in. ACCA keeps you flexible—if Xero or another platform becomes better for your business, we switch with you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">You have no scalable growth plans</h3>
              <p className="text-gray-700">
                QB Live is fine for flat-lining. But if you plan to grow, add employees, manage more vendors, or improve cash flow optimization, you'll need more than QB Live offers. ACCA scales with you.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-gray-800">
              <strong>Here's the truth:</strong> Most QB Live customers end up here because it's the easiest upsell from QuickBooks. Not because it's the best solution for their business. If you're reading this, you've probably already realized QB Live doesn't do enough.
            </p>
          </div>
        </section>

        {/* Why People Switch */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Our Clients Switched from QB Live</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-[#1B3A2D] bg-white p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">"They never explained what they were doing"</h3>
              <p className="text-gray-700 mb-3">
                QB Live adjusts your books, but they don't explain why or what it means for your business. Our dedicated bookkeeper walks you through every change, explains the impact, and helps you understand your finances.
              </p>
              <p className="text-sm text-gray-600 italic">— Sarah, Marketing Agency Owner</p>
            </div>

            <div className="border-l-4 border-[#1B3A2D] bg-white p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">"I still had to chase down my invoices"</h3>
              <p className="text-gray-700 mb-3">
                QB Live doesn't manage accounts receivable. Sarah was still manually tracking who owed her money and sending reminder emails. Accountant Capital VA took over the entire AR process—invoicing, tracking, follow-ups. Cash flow improved 40%.
              </p>
              <p className="text-sm text-gray-600 italic">— Marcus, Consulting Firm</p>
            </div>

            <div className="border-l-4 border-[#1B3A2D] bg-white p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">"Different person every time—nothing stuck"</h3>
              <p className="text-gray-700 mb-3">
                QB Live's shared model meant a rotating cast of bookkeepers. Each one asked the same questions. Nothing carried forward. Our dedicated model meant consistency, relationship, and someone who remembers everything about the account.
              </p>
              <p className="text-sm text-gray-600 italic">— Jennifer, Real Estate Team</p>
            </div>

            <div className="border-l-4 border-[#1B3A2D] bg-white p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">"They couldn't help with payroll"</h3>
              <p className="text-gray-700 mb-3">
                When QB Live said "we don't do payroll," Tom had to hire someone else. Now he has one person managing books AND payroll, filing taxes, and giving tax advice. Simpler. Cheaper. Better coordinated.
              </p>
              <p className="text-sm text-gray-600 italic">— Tom, E-commerce Owner</p>
            </div>

            <div className="border-l-4 border-[#1B3A2D] bg-white p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">"I realized I was paying for a service I didn't fully need"</h3>
              <p className="text-gray-700 mb-3">
                QB Live's $300+/month felt expensive for just journal entries. But when Accountant Capital VA showed her the full scope—invoicing, payroll coordination, tax planning, business advisory—at a competitive price, the ROI was obvious.
              </p>
              <p className="text-sm text-gray-600 italic">— Angela, Service-Based Business</p>
            </div>
          </div>
        </section>

        {/* Accountant Capital VA Advantages */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Accountant Capital VA Wins</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Dedicated Person You Know</h3>
                  <p className="text-gray-700">
                    Same bookkeeper every day. They know your vendors, your patterns, your business priorities. Continuity means faster responses and smarter decisions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Works With Any Software</h3>
                  <p className="text-gray-700">
                    Not locked into QuickBooks. If you want to evaluate Xero, FreshBooks, Wave, or enterprise solutions, we make the switch frictionless.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Full Financial Administration</h3>
                  <p className="text-gray-700">
                    We manage invoicing, chase down payments, process vendor bills, coordinate payroll, and assist with tax prep. One person handles it all seamlessly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Proactive Not Reactive</h3>
                  <p className="text-gray-700">
                    We identify tax-saving opportunities, improve cash flow, spot financial trends, and advise on business decisions. QB Live just adjusts your books.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Accountable & Transparent</h3>
                  <p className="text-gray-700">
                    You have one point of contact. When something goes wrong or needs discussion, you know exactly who to call. No passing the buck.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Scales With Your Business</h3>
                  <p className="text-gray-700">
                    From solopreneur to multi-person firm, we adjust our scope and effort. QB Live keeps you in the same box.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#7DD4AA]/10 to-[#1B3A2D]/5 rounded-lg p-8 border border-[#7DD4AA]/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Our Dedicated Model Delivers</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Personal relationship</strong> with your bookkeeper—you text them, they call you back</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Continuity</strong> that eliminates the overhead of re-explaining your business</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Accountability</strong> you can't get from a faceless service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Integration</strong> with your entire financial ecosystem, not just QBO</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Backup</strong> so you're never stranded if someone gets sick</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Advisory</strong> that helps you grow, not just keep books</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer hover:border-[#7DD4AA] transition">
                <summary className="px-6 py-4 font-semibold text-gray-900 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition">
                  {faq.question}
                  <span className="text-[#1B3A2D] font-bold">+</span>
                </summary>
                <div className="px-6 py-4 text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Decision Framework */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Decision Framework</h2>

          <div className="bg-gradient-to-r from-[#1B3A2D]/5 to-[#7DD4AA]/10 rounded-lg p-8 border border-[#7DD4AA]/30">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-[#1B3A2D] text-white rounded-full font-bold">✓</span>
                  Choose QuickBooks Live if:
                </h3>
                <ul className="ml-10 space-y-2 text-gray-700">
                  <li>• You're committed to QuickBooks Online only</li>
                  <li>• You truly have minimal bookkeeping needs (&lt;5 transactions/month)</li>
                  <li>• You don't need payroll, invoicing, or tax coordination help</li>
                  <li>• You're okay with inconsistent bookkeeper relationships</li>
                </ul>
              </div>

              <div className="border-t border-[#7DD4AA]/30 pt-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-[#1B3A2D] text-white rounded-full font-bold">✓</span>
                  Choose Accountant Capital VA if:
                </h3>
                <ul className="ml-10 space-y-2 text-gray-700">
                  <li>• You want software flexibility (or might switch someday)</li>
                  <li>• You need dedicated continuity and one person who knows your business</li>
                  <li>• You manage invoices, payroll, or multiple vendor relationships</li>
                  <li>• You want tax planning and financial advisory, not just bookkeeping</li>
                  <li>• You're growing and need someone who scales with you</li>
                  <li>• You value accountability and a real relationship</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-gradient-to-r from-[#1B3A2D] to-[#2D5A4A] rounded-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Replace QB Live With a Real Partner?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Stop paying for a service that can't grow with you. Get a dedicated bookkeeper who works with your software, manages your full financial operations, and actually becomes part of your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#1B3A2D] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                Schedule Your Free 30-Minute Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
                View Our Service Options
              </button>
            </div>
            <p className="text-sm text-white/80 mt-6">
              No credit card required. No obligations. Just a conversation about whether we're a good fit.
            </p>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-[#1B3A2D] mb-2">500+</p>
              <p className="text-gray-600">Businesses served</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1B3A2D] mb-2">98%</p>
              <p className="text-gray-600">Client satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1B3A2D] mb-2">15+ Years</p>
              <p className="text-gray-600">Combined experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1B3A2D] mb-2">24-48h</p>
              <p className="text-gray-600">Response time</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><Link href="/services/bookkeeping">Bookkeeping</Link></li>
                  <li><Link href="/services/payroll">Payroll</Link></li>
                  <li><Link href="/services/tax">Tax Services</Link></li>
                  <li><Link href="/services/advisory">Advisory</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Compare</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><Link href="/compare/bookkeeper360">vs Bookkeeper360</Link></li>
                  <li><Link href="/compare/upwork">vs Upwork</Link></li>
                  <li><Link href="/compare">All Comparisons</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><Link href="/privacy">Privacy Policy</Link></li>
                  <li><Link href="/terms">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Accountant Capital VA. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default QuickBooksLiveComparison;
