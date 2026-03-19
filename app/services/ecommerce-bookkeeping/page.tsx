import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'eCommerce Bookkeeping Virtual Assistant Services',
  'Expert ecommerce bookkeeping VA. Multi-channel reconciliation (Shopify, Amazon, eBay), COGS tracking, inventory valuation, sales tax multi-state, payment processor reconciliation. Starting at $1,200/mo.',
  'ecommerce bookkeeping virtual assistant',
  '/services/ecommerce-bookkeeping'
);

export default function ECommerceBookkeepingPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Services', url: '/services' },
          { name: 'eCommerce Bookkeeping', url: '/services/ecommerce-bookkeeping' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            eCommerce Bookkeeping Virtual Assistant
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Expert bookkeeping for sellers. Multi-platform reconciliation (Shopify, Amazon, eBay), COGS tracking, inventory valuation, multi-state sales tax, payment processor reconciliation. Your financial foundation for growth. Starting at $1,200/month.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">What eCommerce Bookkeeping Includes</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Platform Management</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Multi-channel reconciliation (Shopify, Amazon Seller Central, eBay, WooCommerce, Etsy)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Daily sales reconciliation across all platforms</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Payment processor matching (Stripe, PayPal, Square, Amazon Pay)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Platform fee tracking and accounting</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Refund and return accounting</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Chargeback documentation and resolution</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Marketplace dispute tracking</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Inventory & Costs</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Cost of Goods Sold (COGS) tracking per product</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Inventory valuation (FIFO, LIFO, weighted average)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Landed cost calculation (product + shipping + duties + prep)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Warehouse and fulfillment fee tracking</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Supplier payments and invoice matching</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>SKU-level profitability analysis</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Shrinkage and loss documentation</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Advanced eCommerce Tasks</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Taxes & Compliance</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Sales tax collection and remittance tracking (nexus by state)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Sales tax return preparation (monthly, quarterly, annual)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Resale certificate and exemption documentation</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>International VAT/GST tracking (if applicable)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Tariff and duty documentation (imports)</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>COGS deduction optimization for tax filing</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-6">Reporting & Analysis</h3>
              <ul className="space-y-3 text-text-mid">
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Daily/weekly sales dashboards</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Profit margin analysis by platform and product</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Customer acquisition cost (CAC) tracking</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Return rate and chargeback analysis</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Seasonal trend reporting</span></li>
                <li className="flex gap-3"><span className="text-mint font-bold flex-shrink-0">✓</span><span>Cash flow forecasting (payment cycles, inventory investment)</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Why eCommerce Bookkeeping Is Complex</h2>

          <div className="space-y-6">
            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Multi-Platform Chaos</p>
              <p className="text-text-mid">Shopify on Monday, Amazon on Tuesday, eBay on Wednesday. Three different payment processors, three different fee structures, three different settlement dates. Manual reconciliation is error-prone and time-consuming. Most ecommerce sellers waste 15+ hours per week on platform reconciliation alone.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">COGS Tracking Nightmare</p>
              <p className="text-text-mid">Standard bookkeeping assumes straightforward purchases. eCommerce sellers have suppliers, prep fees, warehouse storage, shipping from suppliers, platform fees on returns, damaged inventory, shrinkage. Real COGS is 30%+ of revenue, but if you don't track it precisely, you're misrepresenting profitability by thousands per month.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Sales Tax Multiplied</p>
              <p className="text-text-mid">Local bookkeeper knows your home state sales tax. Selling in 15 states means 15 different rates, nexus rules, and filing deadlines. One mistake could be a $5,000+ penalty. Most ecommerce sellers outsource sales tax because it's complex and expensive to get wrong.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Payment Processor Reconciliation</p>
              <p className="text-text-mid">Platform shows $10,000 in sales, but Stripe deposited $9,200 (after fees). Amazon withheld $500 for returns. PayPal holds 10% for 21 days. Without systematic reconciliation, you think you made $10,000 when you actually made $8,700. Margin analysis becomes meaningless.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Inventory Valuation Changes Everything</p>
              <p className="text-text-mid">P&L with $50,000 inventory is completely different from P&L with $80,000 inventory (same sales, same actual profit). Inventory valuation method (FIFO vs LIFO) changes tax liability. Bad inventory accounting hides profit leaks and makes scaling decisions impossible.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Profitability Blindness</p>
              <p className="text-text-mid">Selling on three platforms, you might think Product A is your best seller at $100 revenue. But if you tracked COGS, platform fees, and payments processor costs by product, you'd realize Product A nets $18 per unit while Product B nets $42. Decisions based on raw revenue are expensive mistakes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Supported Platforms & Tools</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-600 text-forest mb-4">Sales Platforms</h3>
              <ul className="space-y-2 text-text-mid">
                <li className="flex gap-2"><span className="text-mint">•</span><span>Shopify (all plans)</span></li>
                <li className="flex gap-2"><span className="text-mint">•</span><span>Amazon Seller Central</span></li>
                <li className="flex gap-2"><span className="text-mint">•</span><span>eBay</span></li>
                <li className="flex gap-2"><span className="text-mint">•</span><span>WooCommerce</span></li>
                <li className="flex gap-2"><span className="text-mint">•</span><span>Etsy</span></li>
                <li className="flex gap-2"><span className="text-mint">•</span><span>BigCommerce</span></li>
                <li className="flex gap-2"><span className="text-mint">•</span><span>Magento</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-600 text-forest mb-4">Tools & Integrations</h3>
              <ul className="space-y-2 text-text-mid">
                <li className="flex gap-2"><span className="text-mint">•</span><span>A2X Accounting (Shopify/Amazon specialized)</span></li>
                <li className="flex gap-2"><span className="text-mint">•</span><span>Link My Books (multi-channel)</span></li>
                <li className="flex gap-2"><span className="text-mint">•</span><span>TaxJar (sales tax automation)</span></li>
                <li className="flex gap-2"><span className="text-mint">•</span><span>QuickBooks Online</span></li>
                <li className="flex gap-2"><span className="text-mint">•</span><span>Stripe, PayPal, Square</span></li>
                <li className="flex gap-2"><span className="text-mint">•</span><span>Fulfillment.com, Shopify Fulfillment</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Common eCommerce Scenarios</h2>

          <div className="space-y-6">
            <div className="p-6 border border-stone-warm rounded-lg">
              <h3 className="font-600 text-forest mb-2">Scenario 1: Multi-Platform Seller</h3>
              <p className="text-text-mid text-sm">You sell on Shopify, Amazon, and eBay simultaneously. Each has different payment settlement dates, fees, and shipping costs. Your VA reconciles all three daily, ensuring your accounting matches reality across platforms.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <h3 className="font-600 text-forest mb-2">Scenario 2: Private Label Amazon Seller</h3>
              <p className="text-text-mid text-sm">You source products from China suppliers, prep them in a US warehouse, and send them to Amazon FBA. COGS includes product cost, freight, import duties, prep fees, and storage. Your VA tracks each component so you know true profitability per unit.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <h3 className="font-600 text-forest mb-2">Scenario 3: Print-on-Demand</h3>
              <p className="text-text-mid text-sm">You run a Shopify store with print-on-demand fulfillment. Each order has variable COGS (design, printing, shipping). Your VA tracks order-level margins and flags low-margin products so you can reprice or discontinue.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <h3 className="font-600 text-forest mb-2">Scenario 4: Subscription Box</h3>
              <p className="text-text-mid text-sm">Monthly subscription revenue, variable unboxing costs, payment processor holds. Your VA tracks monthly recurring revenue (MRR), churn, and unit economics. Profitability by cohort becomes clear.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <h3 className="font-600 text-forest mb-2">Scenario 5: Multi-State Sales Tax Nexus</h3>
              <p className="text-text-mid text-sm">Selling nationally means 10+ states where you have sales tax nexus. Your VA files monthly or quarterly returns in each state, calculates liability correctly, and documents compliance for audit purposes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">The Accountant Capital VA Advantage for eCommerce</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">✓ Platform Expertise</p>
              <p className="text-text-mid text-sm">Most VAs are trained on general bookkeeping. Our eCommerce VA understands multi-channel reconciliation, COGS tracking, sales tax nexus, and platform-specific accounting nuances. You're not paying for learning curves.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">✓ Systematic Approach</p>
              <p className="text-text-mid text-sm">Chaos turns into order. Your VA implements a consistent reconciliation schedule, COGS tracking method, and inventory valuation approach. No more "I think I made this much" guesses.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">✓ Growth Support</p>
              <p className="text-text-mid text-sm">As you scale from Shopify to Amazon, your VA scales with you. One person, consistent systems, growing complexity handled seamlessly. No need to hire new bookkeepers as you expand platforms.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">✓ Tax Confidence</p>
              <p className="text-text-mid text-sm">Organized records, accurate COGS, proper inventory valuation, sales tax tracking. Your CPA has clean data for tax planning and filing. You avoid penalties and capture deductions you'd otherwise miss.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">✓ Profitability Visibility</p>
              <p className="text-text-mid text-sm">SKU-level profit margins, platform-by-platform performance, seasonal trends. You make pricing and inventory decisions based on real data, not guesses. Growth becomes deliberate.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">✓ Peace of Mind</p>
              <p className="text-text-mid text-sm">Someone else reconciles daily, tracks COGS, files sales taxes, and maintains records. You sleep well knowing your books are accurate and audit-ready.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8 text-center">Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-stone-warm">
              <h3 className="text-2xl font-bold text-forest mb-2">Growing Seller</h3>
              <div className="text-4xl font-bold text-mint mb-4">$1,200<span className="text-xl text-text-mid">/mo</span></div>
              <p className="text-text-mid mb-6">Multi-platform reconciliation, COGS tracking, monthly financial statements, sales tax return support (1-5 states).</p>
              <Link href="/contact" className="block w-full bg-forest text-white py-3 rounded-lg text-center font-600 hover:bg-forest-mid transition">
                Get Started
              </Link>
            </div>

            <div className="bg-forest text-white p-8 rounded-lg border-2 border-mint scale-105">
              <h3 className="text-2xl font-bold mb-2">Scaling Brand</h3>
              <div className="text-4xl font-bold text-mint mb-4">$1,800<span className="text-lg text-mint-light">/mo</span></div>
              <p className="text-mint-light mb-6">Complete ecommerce bookkeeping (5+ platforms, advanced COGS methods, multi-state sales tax, inventory valuation, margin analysis dashboards).</p>
              <Link href="/contact" className="block w-full bg-mint text-forest py-3 rounded-lg text-center font-600 hover:bg-mint-light transition">
                Get Started
              </Link>
            </div>
          </div>

          <p className="text-center text-text-mid mt-8 text-sm">Enterprise (high-volume, custom integrations): Contact for pricing</p>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Related Services</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/services/financial-reporting" className="p-6 bg-white rounded-lg hover:border-mint border-2 border-white transition">
              <p className="font-600 text-forest">Financial Reporting</p>
              <p className="text-text-mid text-sm">Dashboards and reports on your ecommerce performance</p>
            </Link>
            <Link href="/services/tax-prep-support" className="p-6 bg-white rounded-lg hover:border-mint border-2 border-white transition">
              <p className="font-600 text-forest">Tax Prep Support</p>
              <p className="text-text-mid text-sm">Year-end COGS and sales tax documentation for tax filing</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to understand your ecommerce profitability?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your Strategy Call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
