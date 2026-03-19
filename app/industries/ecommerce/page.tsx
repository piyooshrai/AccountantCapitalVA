import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Bookkeeping Virtual Assistant for eCommerce Sellers',
  'Expert ecommerce bookkeeping VA. Multi-channel reconciliation, COGS tracking, inventory valuation, sales tax compliance. Shopify, Amazon, eBay support. Starting at $1,200/mo.',
  'bookkeeping virtual assistant for ecommerce',
  '/industries/ecommerce'
);

const faqs = [
  {
    question: 'Do you handle Shopify, Amazon, and eBay simultaneously?',
    answer: 'Yes. Most ecommerce VAs specialize in one platform. We reconcile across Shopify, Amazon Seller Central, eBay, WooCommerce, and Etsy daily. One VA, one system, all platforms reconciled.'
  },
  {
    question: 'How do you track COGS for products with multiple suppliers?',
    answer: 'We assign COGS per product or SKU, accounting for supplier cost, freight, duties, prep fees, and storage. As your product mix evolves, COGS stays accurate. Profitability by SKU becomes clear.'
  },
  {
    question: 'What about sales tax in multiple states?',
    answer: 'We calculate and track sales tax liability by state where you have nexus, prepare monthly/quarterly returns for each state, and document compliance. No nexus confusion, no penalties.'
  },
  {
    question: 'Can you help forecast cash flow?',
    answer: 'Yes. We track payment processor settlement dates (Stripe on day 2, PayPal holds 10 days, Amazon pays every 14 days). You see when cash actually arrives, not when sales occur.'
  },
  {
    question: 'How often do you reconcile multi-platform sales?',
    answer: 'Daily or weekly, depending on your volume. Platform settlements are matched to bank deposits the same week. No mystery about why your platforms show $10K in sales but only $8.2K deposited.'
  }
];

export default function ECommerceIndustryPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Industries', url: '/industries' },
          { name: 'eCommerce', url: '/industries/ecommerce' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Bookkeeping Virtual Assistant for eCommerce Sellers
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Expert bookkeeping built for ecommerce complexity. Multi-channel reconciliation, COGS tracking, inventory valuation, multi-state sales tax. Your financial foundation for growth. Starting at $1,200/month.
          </p>
          <Link href="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">The eCommerce Bookkeeping Crisis</h2>

          <div className="space-y-6">
            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Multi-Channel Madness</p>
              <p className="text-text-mid">You sell on Shopify, Amazon, and eBay. Three platforms, three different fee structures, three different payment settlement dates. Reconciling daily is a nightmare. Most sellers spend 15-20 hours per week just trying to match platforms to bank deposits.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">COGS Blindness</p>
              <p className="text-text-mid">You think Product A is your best seller because it has the highest revenue. But COGS tracking shows Product A nets $18/unit while Product B nets $42/unit. Without accurate COGS, you're making million-dollar decisions based on revenue, not profit.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Sales Tax Complexity</p>
              <p className="text-text-mid">You have nexus in 10 states now. Each state has different due dates, rates, and filing requirements. One mistake = $5,000 penalty. Most sellers pay a sales tax service $100-150/month just to stay compliant.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Inventory Valuation Black Hole</p>
              <p className="text-text-mid">You have $80,000 in inventory sitting in a warehouse. Is that valued correctly? FIFO vs LIFO changes your tax liability by thousands. Most sellers just guess and hope.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Payment Processor Confusion</p>
              <p className="text-text-mid">Stripe deposits day 2. Amazon pays every 14 days. PayPal holds 10%. By the time you trace payments to deposits, weeks have passed. Cash flow forecasting is impossible.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Tax Season Disaster</p>
              <p className="text-text-mid">Your CPA asks for COGS documentation, inventory valuation, sales tax records, and you scramble to assemble them in April. By then it's too late for deductions you could have captured.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">eCommerce Growth Timeline</h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">Year 1</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Shopify Single Store</h3>
                <p className="text-text-mid text-sm">Revenue $100K-$200K. One platform, one payment processor. Basic bookkeeping. Your VA ensures daily Shopify/Stripe reconciliation and monthly P&L.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">Year 2</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Amazon FBA Launch</h3>
                <p className="text-text-mid text-sm">Revenue $300K-$500K. Now Shopify + Amazon. Two payment streams, two fee structures. Your VA matches both daily, tracks FBA fees, and reconciles COGS by platform.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">Year 3</div>
              <div>
                <h3 className="font-600 text-forest mb-1">Multi-Channel Seller</h3>
                <p className="text-text-mid text-sm">Revenue $700K-$1.5M. Shopify, Amazon, eBay, possibly Etsy. Inventory in multiple warehouses. Your VA manages all platforms, tracks COGS by supplier/product, files multi-state sales tax returns.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full bg-mint text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">Year 4+</div>
              <div>
                <h3 className="font-606 text-forest mb-1">Scaling Brand</h3>
                <p className="text-text-mid text-sm">Revenue $2M+. Considering private label, own website, wholesale. Your VA transitions to an accounting firm or in-house controller.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Services Built for eCommerce Sellers</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/services/ecommerce-bookkeeping" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">eCommerce Bookkeeping</p>
              <p className="text-text-mid text-sm">Multi-platform reconciliation, COGS tracking, inventory valuation, multi-state sales tax. Purpose-built for sellers.</p>
            </Link>

            <Link href="/services/financial-reporting" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Financial Reporting</p>
              <p className="text-text-mid text-sm">Dashboards showing profit by platform, by product, by supplier. Daily/weekly data, not monthly lag.</p>
            </Link>

            <Link href="/services/invoicing-ar" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">Invoicing & AR</p>
              <p className="text-text-mid text-sm">If you sell wholesale or B2B, your VA manages invoicing and collection follow-ups.</p>
            </Link>

            <Link href="/services/tax-prep-support" className="p-6 bg-stone-warm rounded-lg hover:shadow-lg transition border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Tax Prep Support</p>
              <p className="text-text-mid text-sm">COGS documentation, inventory valuation, sales tax records. Year-end prep for your CPA.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Typical eCommerce Seller Profile</h2>

          <div className="space-y-4 max-w-3xl">
            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">Shopify Drop-Shipper</p>
              <p className="text-text-mid text-sm">Revenue $150K-$300K. One Shopify store, one Stripe account. Low COGS complexity (paying suppliers direct). Your VA reconciles daily, tracks orders/revenue/COGS simply. $1,200/mo gets you from chaos to clarity.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">Amazon FBA Private Label</p>
              <p className="text-text-mid text-sm">Revenue $400K-$800K. Amazon Seller Central, inventory at FBA. COGS includes product cost, freight, import duties, FBA prep fees, storage. Your VA matches Amazon payouts to bank deposits, tracks COGS per unit, files sales tax returns. $1,500-1,800/mo covers complexity.</p>
            </div>

            <div className="p-6 border border-stone-warm rounded-lg">
              <p className="font-606 text-forest mb-2">Multi-Channel Aggregator</p>
              <p className="text-text-mid text-sm">Revenue $700K-$2M. Shopify, Amazon, eBay, possibly Etsy or own marketplace. Multiple suppliers, multiple fulfillment methods. Your VA reconciles all channels daily, optimizes COGS per product, files multi-state sales tax. $1,800+/mo for full-service bookkeeping.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-8">Why eCommerce Sellers Choose Accountant Capital VA</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Multi-Channel Expert</p>
              <p className="text-text-mid text-sm">Not a general bookkeeper. We specialize in ecommerce complexity: Shopify, Amazon, eBay, payment processors, FBA fees, multi-state sales tax.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Daily Reconciliation</p>
              <p className="text-text-mid text-sm">Most services reconcile monthly. We reconcile daily or weekly, so you never wonder why your platforms show different numbers than your bank.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ COGS Expertise</p>
              <p className="text-text-mid text-sm">SKU-level COGS tracking tells you which products are actually profitable. Pricing, inventory, and scaling decisions become data-driven.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-606 text-forest mb-2">✓ Sales Tax Compliance</p>
              <p className="text-text-mid text-sm">We file multi-state sales tax returns, track nexus correctly, and document compliance. No $5K penalties, no audit risk.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Growth Ready</p>
              <p className="text-text-mid text-sm">Start on Shopify solo, scale to Amazon, expand to eBay. Your VA scales with you. No need to hire new bookkeepers as you grow.</p>
            </div>

            <div className="p-6 bg-stone-warm rounded-lg">
              <p className="font-600 text-forest mb-2">✓ Profitability Visibility</p>
              <p className="text-text-mid text-sm">Know profit by platform, by product, by supplier. Real-time dashboards. You can make pricing and inventory decisions confidently.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Cost Comparison: eCommerce Bookkeeping</h2>

          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-mint">
                  <th className="text-left py-3 px-4 font-600 text-forest">Option</th>
                  <th className="text-right py-3 px-4 font-600 text-forest">Cost</th>
                  <th className="text-left py-3 px-4 font-600 text-forest">Multi-Channel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Do It Yourself</td>
                  <td className="text-right py-3 px-4 font-600 text-forest">$0</td>
                  <td className="py-3 px-4 text-text-mid text-sm">15-20 hours/week spent on bookkeeping</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Sales Tax Service (e.g., TaxJar)</td>
                  <td className="text-right py-3 px-4 font-600 text-forest">$99-$299/mo</td>
                  <td className="py-3 px-4 text-text-mid text-sm">Sales tax only, no COGS or reconciliation</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-3 px-4 text-forest font-500">Generic Bookkeeper (ecommerce-inexperienced)</td>
                  <td className="text-right py-3 px-4 font-600 text-forest">$1,500-$2,000/mo</td>
                  <td className="py-3 px-4 text-text-mid text-sm">Handles basic reconciliation, misses COGS complexity</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-forest font-500 bg-mint/10 border-l-4 border-mint">Accountant Capital VA (eCommerce)</td>
                  <td className="text-right py-3 px-4 font-600 text-mint bg-mint/10">$1,200-$1,800/mo</td>
                  <td className="py-3 px-4 text-text-mid text-sm bg-mint/10">Multi-platform, COGS, inventory, all sales tax</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-text-mid text-sm mt-8">Accountant Capital VA is cheaper than a generic bookkeeper and includes services that would normally cost $300-500/mo extra.</p>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready to understand your ecommerce profitability?</h2>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Book Your Strategy Call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
