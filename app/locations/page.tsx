import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Bookkeeping Virtual Assistant by Location | Serve Your City',
  'Hire a local bookkeeping virtual assistant in your city. Accountant Capital VA serves businesses across the US, UK, Middle East, and Asia-Pacific. Find your regional office.',
  'bookkeeping virtual assistant by location',
  '/locations'
);

const regions = [
  {
    name: 'United States',
    slug: 'us',
    description: 'Serving small businesses across all 50 states',
    cities: [
      'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
      'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
      'Austin', 'Jacksonville', 'Memphis', 'Boston', 'Nashville',
      'Portland', 'Detroit', 'Denver', 'Washington DC', 'Seattle',
      'Las Vegas', 'Milwaukee', 'Louisville', 'Baltimore'
    ]
  },
  {
    name: 'United Kingdom',
    slug: 'uk',
    description: 'GDPR-compliant bookkeeping across the UK',
    cities: [
      'London', 'Manchester', 'Birmingham', 'Leeds'
    ]
  },
  {
    name: 'Middle East',
    slug: 'me',
    description: 'VAT & ZAR compliance for Gulf businesses',
    cities: [
      'Dubai', 'Abu Dhabi', 'Saudi Arabia'
    ]
  },
  {
    name: 'Asia-Pacific',
    slug: 'apac',
    description: 'Multi-currency, multi-country bookkeeping',
    cities: [
      'Sydney', 'Melbourne', 'Auckland'
    ]
  }
];

export default function LocationsPage() {
  return (
    <>
      <Header />
      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[
          { name: 'Locations', url: '/locations' }
        ]} />
      </section>

      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Bookkeeping Virtual Assistants by Location
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed mb-8">
            Accountant Capital VA serves businesses across the globe. No matter where your business is based, you get a dedicated VA with expertise in your local tax environment, accounting standards, and business landscape. Find your region and discover how local expertise + remote convenience works.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Our Global Reach</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {regions.map((region) => (
              <div key={region.slug} className="p-8 bg-stone rounded-lg border-l-4 border-mint">
                <h3 className="text-2xl font-fraunces font-600 text-forest mb-2">{region.name}</h3>
                <p className="text-text-mid mb-4">{region.description}</p>
                <p className="text-sm text-text-light mb-4">{region.cities.length} cities served</p>
                <Link
                  href={`/locations/${region.slug}`}
                  className="inline-block bg-forest text-white px-6 py-2 rounded-lg font-600 hover:bg-forest-mid transition"
                >
                  Explore {region.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">Why Location Matters for Bookkeeping</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Tax Environment Expertise</p>
              <p className="text-text-mid">Every state, country, and city has different tax obligations. Your VA knows your local sales tax rates, income tax thresholds, filing deadlines, and compliance requirements. This expertise isn't generic—it's customized to where your business operates.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Local Business Landscape</p>
              <p className="text-text-mid">Your VA understands your regional economy. They know what industries thrive in your area, seasonal patterns (tax season, Q4 revenue, busy seasons specific to your city), and business-specific challenges.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">Compliance & Best Practices</p>
              <p className="text-text-mid">Different regions have different standards. UK bookkeepers know GDPR and MTD requirements. US bookkeepers know state-specific filings. Your VA is an expert in YOUR jurisdiction.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-606 text-forest mb-2">CPA & Accountant Integration</p>
              <p className="text-text-mid">Your VA works with local CPAs and accountants who understand your market. They know the best practices for tax prep in your region and can collaborate with your advisors seamlessly.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-mint">
              <p className="font-600 text-forest mb-2">Time Zone & Availability</p>
              <p className="text-text-mid">Your VA works in (or near) your time zone, ensuring availability when you need it. Real-time support, same-day turnarounds on urgent issues, and synchronous communication.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12">How to Find Your Local VA</h2>

          <p className="text-lg text-text-mid mb-8 max-w-3xl">
            Select your region to explore cities we serve. Each city page includes local tax information, typical bookkeeping challenges, and how a dedicated VA saves you money in your specific market.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 bg-stone rounded-lg">
              <h3 className="font-600 text-forest mb-3">United States (23 Cities)</h3>
              <p className="text-text-mid mb-4">From New York to Seattle, Los Angeles to Miami. Your VA understands federal tax, state income tax, sales tax nexus, and industry-specific requirements for your state.</p>
              <Link href="/locations/us" className="text-forest font-600 hover:text-forest-mid">View US Cities →</Link>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <h3 className="font-600 text-forest mb-3">United Kingdom (4 Cities)</h3>
              <p className="text-text-mid mb-4">London, Manchester, Birmingham, Leeds. GDPR-compliant, VAT-savvy, and familiar with Making Tax Digital (MTD) requirements for UK businesses.</p>
              <Link href="/locations/uk" className="text-forest font-600 hover:text-forest-mid">View UK Cities →</Link>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <h3 className="font-606 text-forest mb-3">Middle East (3 Locations)</h3>
              <p className="text-text-mid mb-4">Dubai, Abu Dhabi, Saudi Arabia. Multi-currency, VAT-compliant, and expert in Gulf business practices and accounting standards.</p>
              <Link href="/locations/me" className="text-forest font-600 hover:text-forest-mid">View Middle East Locations →</Link>
            </div>

            <div className="p-6 bg-stone rounded-lg">
              <h3 className="font-606 text-forest mb-3">Asia-Pacific (3 Cities)</h3>
              <p className="text-text-mid mb-4">Sydney, Melbourne, Auckland. Multi-currency support, GST compliance, and understanding of AUS/NZ business environment.</p>
              <Link href="/locations/apac" className="text-forest font-600 hover:text-forest-mid">View APAC Cities →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-fraunces font-600 mb-4">Ready for a Local Bookkeeping VA?</h2>
          <p className="text-mint mb-6">Expert in your region. Available in your time zone. Dedicated to your business.</p>
          <Link href="/contact" className="inline-block bg-mint text-forest px-8 py-4 rounded-lg font-600 hover:bg-mint-light transition">Tell Us Your Location</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
