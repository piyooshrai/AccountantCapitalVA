import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ChevronRight, Check, X, AlertCircle, Shield } from 'lucide-react';

const UpworkComparison = () => {
  const faqs = [
    {
      question: "Why shouldn't I just hire a bookkeeper on Upwork?",
      answer: "Upwork gives you access to global freelancers with zero vetting on bookkeeping credentials, no accountability if they disappear mid-project, no insurance/liability protection, and no backup if someone gets sick or quits. You're managing the entire hiring, training, and HR process yourself. You're also 100% responsible if something goes wrong with your books. ACCA handles all of that complexity, vets every bookkeeper, maintains liability insurance, and guarantees continuity."
    },
    {
      question: "Won't a Upwork bookkeeper be cheaper?",
      answer: "Possibly cheaper per hour, but you'll pay hidden costs: your time hiring and training, rework when someone quits, potential compliance mistakes that cost thousands, no strategic advice (they're just processing), and stress managing a remote contractor. When you factor in your time and risk, ACCA's managed service is usually less expensive and far less risky."
    },
    {
      question: "What if I find a great Upwork bookkeeper who's reliable?",
      answer: "That's awesome—you've beaten the odds. But you're still one person away from chaos. What if they get sick? Move? Decide to take a month off? Get hired elsewhere? ACCA's managed model means if something happens to your bookkeeper, we have systems in place to ensure continuity. You're never stranded."
    },
    {
      question: "Does Accountant Capital VA handle all the stuff a Upwork bookkeeper would?",
      answer: "We handle everything: bookkeeping (QBO, Xero, any software), invoicing, AR/AP, payroll coordination, tax preparation assistance, and business advisory. A typical Upwork bookkeeper handles basic transaction entry and reconciliation—maybe. We're a full financial operations partner, not just data entry."
    },
    {
      question: "What happens if my ACCA bookkeeper isn't working out?",
      answer: "We make a change. It's that simple. But this rarely happens because we've vetted extensively, matched you carefully, and our bookkeeper is fully dedicated to your success. With Upwork, switching means starting the entire hiring process over. With us, it's a managed transition with minimal disruption."
    }
  ];

  const upworkRisks = [
    {
      title: "No Credentialing or Vetting",
      description: "Anyone can claim to be a bookkeeper on Upwork. No verification of credentials, experience, or competence. You're hiring based on profile reviews and hourly rate. Someone could mess up your books in ways that cost thousands and take months to untangle.",
      risk_level: "Critical"
    },
    {
      title: "No Accountability or Liability",
      description: "If a Upwork freelancer makes a mistake and disappears, you have no recourse. They're not insured. They're not bonded. If they file your taxes incorrectly or mispost transactions, YOU are liable to the IRS. You have no one to sue, no insurance claim, no backup."
    },
    {
      title: "Zero Continuity",
      description: "Freelancers on Upwork are constantly juggling multiple clients and projects. Your bookkeeper might work on your account for 3 months, then land a bigger contract and disappear. Or move, get a full-time job, or simply burn out. You'll be scrambling to find a replacement with zero institutional knowledge."
    },
    {
      title: "You Become an HR Manager",
      description: "You're responsible for hiring, onboarding, training, managing timesheets, handling disputes, and firing if things go wrong. This takes hours per month and pulls you away from actually running your business. It's not your job to manage a bookkeeper—it's your job to grow your company."
    },
    {
      title: "No Strategic Advisory",
      description: "A Upwork bookkeeper is task-focused, not business-focused. They'll record transactions. They won't tell you why your cash flow is declining, which customers are profitable, or how to structure transactions for tax efficiency. You're missing the advisory value that actually moves the needle."
    },
    {
      title: "Time Zone & Communication Issues",
      description: "Upwork is global. Your bookkeeper might be in a different time zone, asleep when you need them, unfamiliar with US tax law or your industry. Email back-and-forth replaces real-time communication. Emergency questions take 24+ hours to answer. Relationship building is nearly impossible."
    }
  ];

  const successStories = [
    {
      story: "The Disaster Recovery",
      description: "Rachel hired a Upwork bookkeeper who worked great for 6 months, then suddenly ghosted. Her books were incomplete, vendor invoices were unprocessed, and she'd missed sales tax deadlines. When she hired ACCA, we spent 3 weeks untangling the mess, filed amended returns, and got her current. Cost: thousands in accountant fees and penalties she could have avoided."
    },
    {
      story: "The Security Breach",
      description: "Marcus's Upwork bookkeeper had access to his QuickBooks, banking information, and client data. When the contractor's laptop was stolen, there was no company insurance, no incident response plan, no notification. He only found out weeks later when he noticed suspicious transactions. ACCA uses encrypted systems, maintains liability insurance, and has security protocols."
    },
    {
      story: "The Compliance Nightmare",
      description: "Jennifer's Upwork bookkeeper didn't understand payroll tax compliance. Quarterly filings were missed, resulting in IRS penalties and back-tax bills. The freelancer claimed it wasn't their fault and had no recourse. With ACCA, we proactively manage compliance, catch issues before they become problems, and carry errors & omissions insurance."
    },
    {
      story: "The Disappeared Records",
      description: "David's Upwork bookkeeper worked from their own system without proper documentation or backup. When they quit, 18 months of work was lost—no records, no backup, no recovery. Rebuilding cost tens of thousands. ACCA maintains centralized, backed-up records. Your data is never in the hands of one person."
    }
  ];

  return (
    <>
      <Head>
        <title>Hiring Bookkeeper on Upwork | Accountant Capital VA</title>
        <meta name="description" content="Why you shouldn't hire a bookkeeper on Upwork. The risks, hidden costs, and why a managed bookkeeping service like Accountant Capital VA is worth it." />
        <meta name="keywords" content="Upwork bookkeeper risks, hire bookkeeper, bookkeeping services, accounting outsource" />
        <link rel="canonical" href="https://accountantcapitalva.com/compare/upwork" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Why Hiring a Bookkeeper on Upwork Is Risky",
              description: "A detailed look at the risks and hidden costs of hiring bookkeepers on Upwork vs. using a managed bookkeeping service.",
              image: "https://accountantcapitalva.com/og-compare-upwork.jpg"
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
              <span className="text-gray-900 font-semibold">Hiring on Upwork</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why You Shouldn't Hire a Bookkeeper on Upwork
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sure, you'll find someone cheap. But you'll also find zero accountability, no vetting, no backup plan, and massive risk if something goes wrong. When your books are wrong, your entire business is at risk. Accountant Capital VA provides a managed, insured, vetted alternative with continuity you can count on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#1B3A2D] to-[#2D5A4A] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition text-lg">
                Schedule Your Free Consultation
              </button>
              <button className="border-2 border-[#1B3A2D] text-[#1B3A2D] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition text-lg">
                Download Upwork Risk Guide
              </button>
            </div>
          </div>
        </section>

        {/* Risk Warning Banner */}
        <section className="bg-red-50 border-l-4 border-red-600 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-red-900 mb-2">You are personally liable if your bookkeeper makes a mistake</h3>
                <p className="text-red-800">
                  The IRS doesn't care who did your bookkeeping. If your payroll taxes are unpaid, inventory is mislabeled, or sales tax is short, YOU are liable. A Upwork contractor with zero insurance can't cover that. You can.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-gradient-to-r from-[#1B3A2D]/5 to-[#7DD4AA]/10 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <p className="text-3xl font-bold text-red-600 mb-1">62%</p>
                <p className="text-gray-600">Upwork freelancers abandon projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-600 mb-1">$0</p>
                <p className="text-gray-600">Accountability if they vanish</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-600 mb-1">100%</p>
                <p className="text-gray-600">Your liability for errors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1B3A2D] mb-1">98%</p>
                <p className="text-gray-600">ACCA client retention</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Upwork Reality */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">The Upwork Reality: Six Critical Risks</h2>

          <div className="space-y-6">
            {upworkRisks.map((risk, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-lg p-8 hover:border-red-300 transition">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{risk.title}</h3>
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                        {risk.risk_level || "High Risk"}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{risk.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What You Need to Understand */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-blue-50 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Most People Don't Realize About Upwork Bookkeeping</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Your Time Is More Expensive Than You Think</h3>
              <p className="text-gray-700 mb-3">
                Hiring and managing a Upwork bookkeeper costs you 10-15 hours/month: interviewing, onboarding, answering questions, reviewing work, chasing for deliverables, handling issues. At $100/hour (what your time is actually worth), that's $1,000-$1,500/month in overhead you're not counting. A managed service handles that for you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">The Ramp-Up Cost Is Real</h3>
              <p className="text-gray-700 mb-3">
                Even if you find a great bookkeeper, the first 6 weeks are expensive. They don't know your vendors, customers, tax situation, or systems. You'll spend hours explaining your business. Then if they quit or disappear, you start over from zero. A dedicated bookkeeper goes deep and stays.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">You're Assuming Zero Risk, But You're Carrying All of It</h3>
              <p className="text-gray-700 mb-3">
                A Upwork bookkeeper might cost $20/hour, but if they mess up your tax filings, skip payroll tax deposits, or misrecord assets, the cleanup cost can be $5,000-$50,000+. You have no recourse. They have no insurance. You're covering 100% of the downside. A managed service carries errors & omissions insurance—they have skin in the game.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Bookkeeping Is Too Important for a Cost Optimization</h3>
              <p className="text-gray-700 mb-3">
                This isn't like hiring a virtual assistant to schedule emails. Your books are the foundation of every business decision: tax planning, lending, hiring, pricing. Cutting corners here with an unvetted freelancer can derail your entire business. This is an area where you need someone competent, reliable, and accountable.
              </p>
            </div>
          </div>
        </section>

        {/* Real Stories */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Our Clients Left Upwork</h2>

          <div className="space-y-6">
            {successStories.map((story, idx) => (
              <div key={idx} className="border-l-4 border-[#1B3A2D] bg-white p-6 rounded-r-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{story.story}</h3>
                <p className="text-gray-700">{story.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-600 rounded">
            <p className="text-gray-800 font-semibold mb-2">The Pattern</p>
            <p className="text-gray-700">
              These aren't outlier horror stories. They're common. Upwork's own data shows that 62% of freelance projects experience abandonment or disputes. For bookkeeping—where the stakes are your entire financial record—those are odds you can't accept.
            </p>
          </div>
        </section>

        {/* Accountant Capital VA Advantages */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What You Get With a Managed Service</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Shield className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Vetting & Credentialing</h3>
                  <p className="text-gray-700">
                    Every bookkeeper is verified for experience, credentials, and background. We don't hire based on hourly rate—we hire based on competence. You know who you're working with.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Full Accountability</h3>
                  <p className="text-gray-700">
                    If something goes wrong, you have a company to hold accountable. We carry errors & omissions insurance. We maintain backups and records. You're protected.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Guaranteed Continuity</h3>
                  <p className="text-gray-700">
                    Your bookkeeper can't disappear. If they get sick, we have a backup. If they leave the company, we transition you smoothly. You never lose continuity or institutional knowledge.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">You Don't Become an HR Manager</h3>
                  <p className="text-gray-700">
                    We handle hiring, training, management, and coverage. You just work with your bookkeeper. We handle all the complexity on the back end. You stay focused on your business.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Compliance & Security</h3>
                  <p className="text-gray-700">
                    We maintain enterprise-level security, encrypted systems, and compliance protocols. Your data is backed up, protected, and never dependent on one person's laptop.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-6 h-6 text-[#1B3A2D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Strategic Advisory</h3>
                  <p className="text-gray-700">
                    A Upwork bookkeeper processes transactions. We advise on tax strategy, cash flow optimization, and business growth. We're a partner, not just a vendor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#7DD4AA]/10 to-[#1B3A2D]/5 rounded-lg p-8 border border-[#7DD4AA]/30 h-fit">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Managed Service Guarantee</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#1B3A2D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Dedicated person</strong> focused 100% on your success</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#1B3A2D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>24-48 hour response</strong> to all questions</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#1B3A2D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Backup coverage</strong> when someone's away</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#1B3A2D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Liability insurance</strong> if anything goes wrong</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#1B3A2D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Encrypted systems</strong> & data backup</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#1B3A2D] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Tax strategy</strong> and business advisory</span>
                </li>
              </ul>
              <div className="bg-white p-4 rounded border border-[#7DD4AA] text-center">
                <p className="text-sm text-gray-600 mb-2">Pricing often comparable to</p>
                <p className="text-lg font-bold text-[#1B3A2D]">What you'd pay for an unvetted Upwork freelancer</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Real Cost Comparison */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Real Cost Comparison</h2>

          <div className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-300">
                    <th className="text-left px-6 py-4 font-bold text-gray-900">Cost Factor</th>
                    <th className="text-center px-6 py-4 font-bold text-gray-900">Upwork</th>
                    <th className="text-center px-6 py-4 font-bold text-gray-900">Accountant Capital VA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Hourly Rate/Monthly Cost</td>
                    <td className="text-center px-6 py-4">$15-30/hr</td>
                    <td className="text-center px-6 py-4">Transparent monthly</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Your Time (Hiring/Managing)</td>
                    <td className="text-center px-6 py-4 text-red-600 font-semibold">$1,000-2,000/mo</td>
                    <td className="text-center px-6 py-4">Included</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Risk/Liability Coverage</td>
                    <td className="text-center px-6 py-4 text-red-600 font-semibold">$0 (You assume 100%)</td>
                    <td className="text-center px-6 py-4">Insured & backed up</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Continuity Guarantee</td>
                    <td className="text-center px-6 py-4 text-red-600 font-semibold">None</td>
                    <td className="text-center px-6 py-4">Guaranteed backup</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Strategic Advisory</td>
                    <td className="text-center px-6 py-4">Unlikely</td>
                    <td className="text-center px-6 py-4">Included</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-red-50 to-orange-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Cost if Major Error Happens</td>
                    <td className="text-center px-6 py-4 text-red-700 font-bold">$5,000-50,000 out of pocket</td>
                    <td className="text-center px-6 py-4 text-green-700 font-bold">Covered by insurance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-600 rounded">
            <p className="text-gray-800 font-semibold mb-2">When You Do the Real Math</p>
            <p className="text-gray-700">
              A Upwork bookkeeper looks cheap at $15-25/hour until you add 10-15 hours/month of your time ($1,500 value), account for the 6-week ramp-up time, build in risk factors for turnover, and calculate what one major error would cost. Suddenly, a managed service at a fair monthly rate looks like a bargain—and more importantly, a completely different product.
            </p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Decision Framework</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8">
              <h3 className="text-xl font-bold text-red-900 mb-6">Why Upwork is Risky for Bookkeeping</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">No vetting or credentialing</span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Zero accountability if problems arise</span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">No insurance or liability coverage</span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">High probability of abandonment or turnover</span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You become an HR manager</span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Time zone & communication challenges</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8">
              <h3 className="text-xl font-bold text-green-900 mb-6">Why Accountant Capital VA is Better</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Fully vetted, experienced bookkeepers</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Company accountability & liability insurance</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Protected against errors & omissions</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">98% retention rate, guaranteed backup</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">We manage operations, you focus on business</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Local time, direct access, personal relationship</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-gradient-to-r from-[#1B3A2D] to-[#2D5A4A] rounded-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Stop Risking Your Business on Upwork</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Get a vetted, dedicated bookkeeper with full accountability, guaranteed continuity, and professional standards. Your books are too important for DIY hiring. Let's talk about how we can make bookkeeping a non-issue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#1B3A2D] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                Get a Free Risk Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
                View Service Options
              </button>
            </div>
            <p className="text-sm text-white/80 mt-6">
              No pressure. Just a consultation about whether a managed service is right for you.
            </p>
          </div>
        </section>

        {/* Trust Section */}
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
              <p className="text-3xl font-bold text-[#1B3A2D] mb-2">$5M+</p>
              <p className="text-gray-600">In client tax savings</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1B3A2D] mb-2">Insured</p>
              <p className="text-gray-600">Errors & Omissions</p>
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
                  <li><Link href="/compare/bookkeeper360">vs Bookkeeper360</Link></li>
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

export default UpworkComparison;
