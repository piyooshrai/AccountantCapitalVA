import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Bookkeeping Virtual Assistant USA | 23 Cities Served',
  'Hire a dedicated bookkeeping VA in your US city. Expert in federal tax, state income tax, sales tax, and local business practices. New York, Los Angeles, Chicago, and 20+ more cities.',
  'bookkeeping virtual assistant USA',
  '/locations/us'
);

const cities = [
  { name: 'New York', path: 'new-york' },
  { name: 'Los Angeles', path: 'los-angeles' },
  { name: 'Chicago', path: 'chicago' },
  { name: 'Houston', path: 'houston' },
  { name: 'Phoenix', path: 'phoenix' },
  { name: 'Philadelphia', path: 'philadelphia' },
  { name: 'San Antonio', path: 'san-antonio' },
  { name: 'San Diego', path: 'san-diego' },
  { name: 'Dallas', path: 'dallas' },
  { name: 'San Jose', path: 'san-jose' },
  { name: 'Austin', path: 'austin' },
  { name: 'Jacksonville', path: 'jacksonville' },
  { name: 'Memphis', path: 'memphis' },
  { name: 'Boston', path: 'boston' },
  { name: 'Nashville', path: 'nashville' },
  { name: 'Portland', path: 'portland' },
  { name: 'Detroit', path: 'detroit' },
  { name: 'Denver', path: 'denver' },
  { name: 'Washington DC', path: 'washington-dc' },
  { name: 'Seattle', path: 'seattle' },
  { name: 'Las Vegas', path: 'las-vegas' },
  { name: 'Milwaukee', path: 'milwaukee' },
  { name: 'Louisville', path: 'louisville' },
];

export default function USLocationsPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Locations', url: '/locations' },
          { name: 'United States', url: '/locations/us' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Bookkeeping Virtual Assistant in the USA
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Accountant Capital VA serves small businesses across all 50 states. Our US-based VAs understand federal tax requirements, state income tax complexity, multi-state sales tax, and the unique business landscape of your city. Get a dedicated bookkeeper who knows your market.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why US Businesses Choose Accountant Capital VA</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Federal Tax Expertise</p>
              <p className="text-sm text-text-mid">Your VA understands federal income tax, estimated quarterly tax, Schedule C filing, S-Corp taxation, and complex deductions specific to US businesses.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">State Income Tax & Sales Tax</p>
              <p className="text-sm text-text-mid">Every state has different income tax rates and sales tax rules. Your VA knows your state's specific requirements, filing deadlines, and nexus rules.</p>
            </div>

            <div className="p-6 bg-mint/10 border-2 border-mint rounded-lg">
              <p className="font-600 text-forest mb-3">Local Business Context</p>
              <p className="text-sm text-text-mid">Your VA understands the industries that thrive in your city, seasonal patterns, local economic trends, and how they impact your bookkeeping.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">US Tax Landscape for Bookkeepers</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            US bookkeeping is complex. Your VA navigates:
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Federal Income Tax (IRS)</p>
              <p className="text-sm text-text-mid">Sole proprietor, LLC, S-Corp, C-Corp. Each structure has different tax treatment. Your VA ensures you're taxed optimally and quarterly estimates are correct.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">State Income Tax (Varying by State)</p>
              <p className="text-sm text-text-mid">9 states have no income tax, others have rates up to 13%. Your VA knows your state's rates, deductions, and filing deadlines.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-600 text-forest mb-2">Sales Tax (Multi-State)</p>
              <p className="text-sm text-text-mid">If you sell across state lines or online, you may owe sales tax in multiple states. Your VA manages multi-state sales tax filing and compliance.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Payroll Tax (Federal + State)</p>
              <p className="text-sm text-text-mid">FICA (Social Security/Medicare), federal withholding, state withholding, unemployment insurance. Your VA ensures accurate payroll and timely filings.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-forest">
              <p className="font-606 text-forest mb-2">Local Taxes (City/County)</p>
              <p className="text-sm text-text-mid">Some cities and counties add local income tax or business tax. Your VA tracks these and ensures compliance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Choose Your City</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            Select a city to learn about local bookkeeping challenges, typical business profiles, and how a dedicated VA saves you money in your market.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <Link
                key={city.path}
                href={`/locations/us/${city.path}`}
                className="p-4 bg-stone rounded-lg border-2 border-transparent hover:border-mint hover:bg-mint/10 transition text-forest font-600"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">US Bookkeeping Cost & Market Insights</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            The cost of hiring a local bookkeeper varies by city and market. Here's what you should know:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Typical Bookkeeper Salary (USA)</p>
              <ul className="text-sm text-text-mid space-y-2">
                <li>• Entry-level: $35K-$40K per year</li>
                <li>• Mid-level: $45K-$60K per year</li>
                <li>• Senior bookkeeper: $60K-$80K+ per year</li>
                <li>• Plus: benefits, taxes, training, turnover costs</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <p className="font-600 text-forest mb-3">Accountant Capital VA Cost</p>
              <ul className="text-sm text-text-mid space-y-2">
                <li>• Part-Time: $700/month ($8.4K/year)</li>
                <li>• Full-Time: $1,300/month ($15.6K/year)</li>
                <li>• All-in pricing (no hidden fees)</li>
                <li>• Month-to-month flexibility</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-text-mid mt-8 max-w-3xl mx-auto">
            Hiring a local bookkeeper costs $45K-$80K+. Accountant Capital VA costs $700-$1,300/month with zero overhead, zero turnover risk, and expert specialization.
          </p>
        </div>
      </section>

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready for a US-Based Bookkeeping VA?</h2>
          <p className="text-mint mb-6">Expert in your state. Familiar with your city. Dedicated to your business.</p>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Schedule Your US Consultation</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
