import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ChevronRight, Check, X, AlertCircle } from 'lucide-react';

const Bookkeeper360Comparison = () => {
  const faqs = [
    {
      question: "What's the main difference between Bookkeeper360 and Accountant Capital VA?",
      answer: "Bookkeeper360 operates a shared model—your bookkeeper handles multiple clients. You might get a different person each month or quarter. ACCA provides a dedicated bookkeeper assigned exclusively to your account. Same person, every day, who knows your business inside and out. That continuity is the difference between having a service and having a partner."
    },
    {
      question: "Doesn't Bookkeeper360 also offer dedicated bookkeepers?",
      answer: "Bookkeeper360 markets themselves as offering 'dedicated' bookkeepers, but what they mean is your account is assigned to someone—not that they work on it consistently. You may see different people or they may work part-time on your account alongside 20+ other clients. ACCA's dedicated model is truly one person, focused on your business, available when you need them."
    },
    {
      question: "Is Bookkeeper360 cheaper than Accountant Capital VA?",
      answer: "Bookkeeper360 starts at $399/month. Depending on your needs, ACCA can be competitive or even less expensive—especially when you factor in what you actually get: genuine continuity, broader services (payroll, tax coordination, AR management), and a person you can reach. Dollar-for-dollar, you're paying for shared attention vs. dedicated expertise."
    },
    {
      question: "Can I switch bookkeepers if I'm not happy with my Bookkeeper360 person?",
      answer: "Technically, yes. But in a shared model, continuity is already compromised. With ACCA, if there's ever any issue, you're working with the same person to resolve it, or we ensure you're properly transitioned to someone who knows your account. The goal is to build a lasting relationship, not rotate people."
    },
    {
      question: "What happens if my Accountant Capital VA bookkeeper gets sick or takes vacation?",
      answer: "We maintain a managed backup system. Our team knows your account structure, and we ensure coverage during any absences. Unlike Bookkeeper360, where someone new might jump in, we keep continuity and context intact. Your business doesn't miss a beat."
    }
  ];

  const comparisonFeatures = [
    { feature: "Dedicated Single Bookkeeper", acca: true, bk360: false, note: "ACCA: Same person. BK360: Shared across clients" },
    { feature: "Continuity & Relationship", acca: true, bk360: false, note: "ACCA: One person grows with your business" },
    { feature: "Invoicing & AR Management", acca: true, bk360: false, note: "ACCA: Hands-on, we follow up on payments" },
    { feature: "Accounts Payable Management", acca: true, bk360: false, note: "ACCA: Full AP processing and vendor relationships" },
    { feature: "Payroll Support", acca: true, bk360: true, note: "Both offer, ACCA more integrated" },
    { feature: "Tax Preparation Coordination", acca: true, bk360: true, note: "ACCA: Direct partnership with CPA" },
    { feature: "Financial Reporting", acca: true, bk360: true, note: "Both provide reports" },
    { feature: "Multi-Software Integration", acca: true, bk360: false, note: "ACCA: Connects your entire ecosystem" },
    { feature: "Proactive Tax Planning", acca: true, bk360: false, note: "ACCA: Identifies savings, BK360: Reactive" },
    { feature: "Business Advisory", acca: true, bk360: false, note: "ACCA: Growth and strategy focused" },
    { feature: "Direct Point of Contact", acca: true, bk360: false, note: "ACCA: Call/text your bookkeeper directly" },
    { feature: "Managed Backup System", acca: true, bk360: false, note: "ACCA: Coverage when someone's out" }
  ];

  return (
    <>
      <Head>
        <title>Bookkeeper360 Alternative | Accountant Capital VA</title>
        <meta name="description" content="Compare Bookkeeper360 vs Accountant Capital VA. Get a dedicated bookkeeper (not shared) with continuity, hands-on AR/AP management, and proactive tax planning." />
        <meta name="keywords" content="Bookkeeper360 alternative, dedicated bookkeeper, accounting services, Virginia bookkeeping" />
        <link rel="canonical" href="https://accountantcapitalva.com/compare/bookkeeper360" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ComparisonTable",
              headline: "Bookkeeper360 vs Accountant Capital VA",
              description: "Detailed feature and cost comparison between Bookkeeper360 and Accountant Capital VA",
              image: "https://accountantcapitalva.com/og-compare-bk360.jpg"
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
              <span className="text-gray-900 font-semibold">Bookkeeper360</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Bookkeeper360 Alternative: Why True Dedication Matters
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Bookkeeper360 markets "dedicated" bookkeepers, but their model is fundamentally shared. Your bookkeeper manages 20+ clients, you might see different people each quarter, and continuity suffers. Accountant Capital VA assigns one dedicated bookkeeper to your account—same person every day, who knows your business, manages your full financial operations, and actively partners in your success. That's the difference between a service and a real relationship.
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
                <p className="text-3xl font-bold text-[#1B3A2D] mb-1">$399+</p>
                <p className="text-gray-600">Bookkeeper360 monthly</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1B3A2D] mb-1">20+</p>
                <p className="text-gray-600">Clients per BK360 person</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1B3A2D] mb-1">1</p>
                <p className="text-gray-600">ACCA per account</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1B3A2D] mb-1">100%</p>
                <p className="text-gray-600">Focus on your business</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Core Difference */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">The Core Difference: Shared vs. Dedicated</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-orange-500" />
                Bookkeeper360 Model
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Bookkeeper manages 15-25+ clients simultaneously</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>You're one of many accounts on their workload</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Possible to see different people across quarters</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Limited hands-on management of invoicing/payments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Reactive bookkeeping (process, don't strategize)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>$399+/month for shared attention</span>
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
                  <span>One dedicated bookkeeper per account</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold">•</span>
                  <span>Your account gets 100% of their focus and expertise</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold">•</span>
                  <span>Same person every single day; relationship deepens</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold">•</span>
                  <span>Hands-on: Invoice follow-up, vendor payments, AR/AP</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold">•</span>
                  <span>Proactive: Identifies tax savings, improves cash flow</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold">•</span>
                  <span>Competitive pricing for genuine dedication and breadth</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-800">
              <strong>Why It Matters:</strong> When your bookkeeper has 20+ clients, they're context-switching constantly. Your business gets whatever mental bandwidth is left. A dedicated bookkeeper has zero distractions—they can spot patterns, anticipate problems, and build a relationship based on deep knowledge. That's worth real money in efficiency, tax savings, and peace of mind.
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
                  <th className="text-center px-6 py-4 font-bold text-gray-900">Bookkeeper360</th>
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
                      {item.bk360 ? (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Cost Analysis: What You're Actually Paying For</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-lg p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bookkeeper360 Annual Cost</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Base service ($399/mo)</span>
                  <span className="font-bold text-gray-900">$4,788</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Additional features/add-ons</span>
                  <span className="font-bold text-gray-900">$500-1,000</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">CPA coordination (separate)</span>
                  <span className="font-bold text-gray-900">$500-2,000</span>
                </div>
                <div className="border-t-2 border-orange-300 pt-4">
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-700"><strong>Total first year</strong></span>
                    <span className="font-bold text-orange-700 text-xl">$5,788-$8,788</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                <strong>What's included:</strong> Bookkeeping adjustments, basic reporting. Hands-on AR/AP, payroll, and tax coordination are limited or additional costs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#7DD4AA]/20 to-[#1B3A2D]/10 rounded-lg p-8 border border-[#7DD4AA]">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Accountant Capital VA Annual Value</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Dedicated bookkeeper (full-time focus)</span>
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
                  <span className="text-gray-700">Tax planning & CPA liaison</span>
                  <span className="font-bold text-gray-900">Included</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Business advisory</span>
                  <span className="font-bold text-gray-900">Included</span>
                </div>
                <div className="border-t-2 border-[#7DD4AA] pt-4">
                  <p className="text-gray-700 text-sm mb-4">
                    <strong>Hidden Bookkeeper360 costs:</strong> Payroll coordination ($150-300/mo), CPA coordination, AR follow-up labor, software integrations—easily adding $2,000-5,000/year.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm font-semibold text-[#1B3A2D]">
                When you factor in hidden costs, ACCA often costs the same or less while delivering far more value and genuine continuity.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
            <p className="text-gray-800 font-semibold mb-2">The Math That Matters</p>
            <p className="text-gray-700 mb-3">
              Bookkeeper360's $399/month assumes limited scope. Most clients need extras (payroll help, CPA coordination, AR management), pushing the real cost to $5,800-$8,800/year. ACCA's all-inclusive model often undercuts that while delivering:
            </p>
            <ul className="text-gray-700 space-y-1 ml-4">
              <li>• One person who knows your business (worth thousands in efficiency)</li>
              <li>• Hands-on AR/AP management (saves you 5-10 hours/month)</li>
              <li>• Proactive tax planning (typical value: $2,000-$5,000/year in savings)</li>
              <li>• Guaranteed continuity (eliminates onboarding overhead)</li>
            </ul>
          </div>
        </section>

        {/* Bookkeeper360 Strengths */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What Bookkeeper360 Does Well</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Broad Service Range</h3>
              <p className="text-gray-700">
                Bookkeeper360 offers bookkeeping, payroll, tax, and accounting services under one roof. That's convenient for single-vendor relationships. However, breadth without depth (because of the shared model) often means each service is handled reactively, not strategically.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tech Platform</h3>
              <p className="text-gray-700">
                They invest in their portal and client-facing tools. If you like a slick interface for viewing reports and communicating with your bookkeeper, that's solid. ACCA prioritizes personal relationship over UI perfection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">National Footprint</h3>
              <p className="text-gray-700">
                Bookkeeper360 operates nationwide, so if you ever relocate, they can follow. ACCA serves Virginia and surrounding areas with local expertise and relationships that national chains can't replicate.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-gray-800">
              <strong>Fair Assessment:</strong> Bookkeeper360 is professional and competent. The issue isn't their quality—it's their model. Even excellent bookkeepers can't deliver true continuity when managing 20+ accounts. You're buying a service, not a partnership.
            </p>
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
                  <h3 className="font-bold text-gray-900 mb-2">True Dedication</h3>
                  <p className="text-gray-700">
                    One bookkeeper, one account. Their job is to make your business succeed. They're not dividing attention across 20+ clients or context-switching all day.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Unbreakable Continuity</h3>
                  <p className="text-gray-700">
                    Same person every day. They remember your vendors, understand your patterns, know which invoices are chronic problems. Onboarding happens once, then it's all momentum.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Hands-On AR/AP</h3>
                  <p className="text-gray-700">
                    We don't just record your invoices and bills—we follow up on payments, negotiate with vendors, and optimize your cash flow. This alone saves most clients 5-10 hours per month.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Proactive Tax Strategy</h3>
                  <p className="text-gray-700">
                    We identify tax-saving opportunities mid-year, coordinate with your CPA, and help you make informed decisions. Typical value: $2,000-$5,000/year in tax savings or avoided penalties.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Real Relationship & Accountability</h3>
                  <p className="text-gray-700">
                    You know your bookkeeper by name. You can text or call them directly. When something matters, they get back to you same-day. That's not service, that's partnership.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="text-gray-700">
                    We understand Virginia business, tax requirements, and economic conditions. We have relationships with local CPAs, lenders, and tax professionals that benefit you.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#7DD4AA]/10 to-[#1B3A2D]/5 rounded-lg p-8 border border-[#7DD4AA]/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Dedicated Advantage</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Efficiency:</strong> No ramp-up, no explanations, no lost context</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Trust:</strong> Relationship grows over years, not quarters</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Proactivity:</strong> They see problems coming, not just reacting</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Cost Savings:</strong> Hands-on management saves thousands yearly</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Peace of Mind:</strong> One person who owns your success</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B3A2D] font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Scalability:</strong> Grows with your business seamlessly</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-[#7DD4AA]/30">
                <p className="text-sm text-gray-700 italic">
                  The difference between shared and dedicated isn't subtle—it's transformational. A dedicated bookkeeper becomes part of your team, not a vendor you contact quarterly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why People Switch */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Our Clients Switched from Bookkeeper360</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-[#1B3A2D] bg-white p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">"Different person every few months was exhausting"</h3>
              <p className="text-gray-700 mb-3">
                Jake's Bookkeeper360 account cycled through three different people in two years. Each time, he'd have to re-explain his business model, vendor relationships, and accounting quirks. It felt like running a bootcamp for bookkeepers instead of getting actual help. With ACCA, one person knows him—really knows him.
              </p>
              <p className="text-sm text-gray-600 italic">— Jake, B2B SaaS Company</p>
            </div>

            <div className="border-l-4 border-[#1B3A2D] bg-white p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">"They didn't care about cash flow, just books"</h3>
              <p className="text-gray-700 mb-3">
                Michelle's Bookkeeper360 bookkeeper recorded invoices but never followed up on unpaid ones. She was hemorrhaging cash from customer non-payment and didn't realize how bad it was until reviewing her report. ACCA's dedicated bookkeeper proactively manages AR, so she never loses track of what's owed.
              </p>
              <p className="text-sm text-gray-600 italic">— Michelle, Professional Services</p>
            </div>

            <div className="border-l-4 border-[#1B3A2D] bg-white p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">"I felt like a number, not a client"</h3>
              <p className="text-gray-700 mb-3">
                Ryan loved Bookkeeper360 initially, but after a year, he realized he never had a real conversation with anyone. It was all tickets and reports. ACCA's bookkeeper calls him monthly, understands his goals, and makes strategic suggestions. He feels like he has an actual partner.
              </p>
              <p className="text-sm text-gray-600 italic">— Ryan, Consulting Firm</p>
            </div>

            <div className="border-l-4 border-[#1B3A2D] bg-white p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">"The hidden costs kept piling up"</h3>
              <p className="text-gray-700 mb-3">
                What started at $399/month became $600+ with add-ons. Payroll coordination was extra. CPA coordination was extra. Within a year, Bookkeeper360 cost more than ACCA while delivering less. Lisa realized she was paying for breadth without depth.
              </p>
              <p className="text-sm text-gray-600 italic">— Lisa, E-commerce Store</p>
            </div>

            <div className="border-l-4 border-[#1B3A2D] bg-white p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">"I needed someone who would catch problems before they happened"</h3>
              <p className="text-gray-700 mb-3">
                Sam's Bookkeeper360 bookkeeper was competent but reactive. They recorded everything perfectly but never flagged issues until year-end. When his accountant discovered he'd missed a tax deadline, Sam switched to ACCA's proactive model. Now problems are caught mid-quarter, not after the fact.
              </p>
              <p className="text-sm text-gray-600 italic">— Sam, Manufacturing</p>
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

        {/* Comparison Decision */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Simple Decision Framework</h2>

          <div className="bg-gradient-to-r from-[#1B3A2D]/5 to-[#7DD4AA]/10 rounded-lg p-8 border border-[#7DD4AA]/30">
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-[#1B3A2D] text-white rounded-full font-bold">?</span>
                  Choose Bookkeeper360 if:
                </h3>
                <ul className="ml-10 space-y-2 text-gray-700">
                  <li>• You're absolutely certain you need zero continuity in bookkeeper relationships</li>
                  <li>• You prefer a large national company over local partnership</li>
                  <li>• You're fine with reactive bookkeeping (processing only, no strategy)</li>
                  <li>• You're willing to manage AR/AP yourself</li>
                </ul>
              </div>

              <div className="border-t border-[#7DD4AA]/30 pt-8">
                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-[#1B3A2D] text-white rounded-full font-bold">✓</span>
                  Choose Accountant Capital VA if:
                </h3>
                <ul className="ml-10 space-y-2 text-gray-700">
                  <li>• You want one dedicated bookkeeper assigned to your account</li>
                  <li>• You value continuity, relationship, and accountability</li>
                  <li>• You need hands-on AR/AP management (invoice follow-up, vendor negotiation)</li>
                  <li>• You want proactive tax planning, not just year-end records</li>
                  <li>• You prefer local expertise and direct access to your bookkeeper</li>
                  <li>• You're looking for a partner who scales with your growth</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-gradient-to-r from-[#1B3A2D] to-[#2D5A4A] rounded-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Switch from Bookkeeper360?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Stop splitting your bookkeeper with 20 other clients. Get someone dedicated to your success. One person who knows your business inside and out, manages your full financial operation, and actively works to improve your bottom line.
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
              No credit card required. No lock-in contracts. Just a conversation about whether we're right for you.
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
              <p className="text-gray-600">Retention rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1B3A2D] mb-2">7+ Years</p>
              <p className="text-gray-600">Average tenure per client</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1B3A2D] mb-2">24-48h</p>
              <p className="text-gray-600">Response time guarantee</p>
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
                  <li><Link href="/compare/quickbooks-live">vs QuickBooks Live</Link></li>
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

export default Bookkeeper360Comparison;
