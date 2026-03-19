'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';

const INDUSTRIES = [
  'Small Business',
  'eCommerce & Retail',
  'Professional Services',
  'Real Estate',
  'Restaurant & Hospitality',
  'Construction',
  'Non-Profit',
  'Multi-Location',
  'Other'
];

const SOFTWARE = [
  'QuickBooks Online',
  'QuickBooks Desktop',
  'Xero',
  'FreshBooks',
  'Wave',
  'Not using accounting software',
  'Not sure',
  'Other'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    software: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSubmitted(true);
      setFormData({ name: '', businessName: '', email: '', phone: '', industry: '', software: '', message: '' });
    } catch (err) {
      setError('Failed to send form. Please try again or call us at (813) 761-8268.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <section className="max-w-container mx-auto px-6 py-8">
        <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} />
      </section>

      {/* Hero */}
      <section className="py-16 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-fraunces font-600 text-forest mb-6">
            Let's Talk About Your Books
          </h1>
          <p className="text-xl text-text-mid max-w-2xl leading-relaxed">
            Fill out the form below and we'll schedule a 15-minute call. No high-pressure sales. Just a conversation about your financial operations and whether we're a good fit.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          {submitted ? (
            <div className="bg-mint-light rounded-lg p-12 text-center">
              <h2 className="text-3xl font-fraunces font-600 text-forest mb-4">Thank You!</h2>
              <p className="text-text-mid text-lg mb-6">
                We've received your message. Our team will reach out within 24 hours to schedule your strategy call.
              </p>
              <p className="text-text-mid mb-8">
                In the meantime, here are some helpful resources:
              </p>
              <div className="space-y-3">
                <Link href="/how-it-works" className="inline-block bg-forest text-white px-6 py-3 rounded-lg font-600 hover:bg-forest-mid transition mr-4">
                  How It Works
                </Link>
                <Link href="/pricing" className="inline-block bg-forest text-white px-6 py-3 rounded-lg font-600 hover:bg-forest-mid transition">
                  Pricing
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-amber bg-opacity-20 border border-amber text-amber p-4 rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-600 text-forest mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-warm rounded-lg focus:outline-none focus:border-mint"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-600 text-forest mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-warm rounded-lg focus:outline-none focus:border-mint"
                    placeholder="ABC Consulting"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-600 text-forest mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-warm rounded-lg focus:outline-none focus:border-mint"
                    placeholder="jane@abc.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-600 text-forest mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-warm rounded-lg focus:outline-none focus:border-mint"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-600 text-forest mb-2">
                    Industry *
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-warm rounded-lg focus:outline-none focus:border-mint"
                  >
                    <option value="">Select your industry</option>
                    {INDUSTRIES.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-600 text-forest mb-2">
                    Current Accounting Software *
                  </label>
                  <select
                    name="software"
                    value={formData.software}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-warm rounded-lg focus:outline-none focus:border-mint"
                  >
                    <option value="">Select your software</option>
                    {SOFTWARE.map(soft => (
                      <option key={soft} value={soft}>{soft}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-600 text-forest mb-2">
                  Tell us a bit about your situation *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-stone-warm rounded-lg focus:outline-none focus:border-mint font-manrope"
                  placeholder="What's your biggest challenge with bookkeeping? What would help most?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-forest text-white py-4 rounded-lg font-600 text-lg hover:bg-forest-mid transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Schedule My Strategy Call'}
              </button>

              <p className="text-text-light text-sm text-center">
                We'll reach out within 24 hours to schedule your 15-minute call.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-stone">
        <div className="max-w-container mx-auto px-6">
          <h2 className="section-heading text-forest mb-12 text-center">Other Ways to Reach Us</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Call</h3>
              <a href="tel:(813)761-8268" className="text-mint font-600 text-lg hover:text-forest transition">
                (813) 761-8268
              </a>
              <p className="text-text-mid text-sm mt-2">Mon-Fri, 9am-5pm EST</p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Email</h3>
              <a href="mailto:info@thehuman.capital" className="text-mint font-600 text-lg hover:text-forest transition">
                info@thehuman.capital
              </a>
              <p className="text-text-mid text-sm mt-2">Response within 24 hours</p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-fraunces font-600 text-forest mb-4">Web</h3>
              <p className="text-text-mid mb-4">Chat with us using the widget in the bottom right of this page.</p>
              <p className="text-text-light text-sm">Available during business hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-mint mb-2">1000+</div>
              <p className="text-mint-light text-sm">Active clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-mint mb-2">97%</div>
              <p className="text-mint-light text-sm">Client retention</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-mint mb-2">Top 3%</div>
              <p className="text-mint-light text-sm">VAs vetted</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-mint mb-2">6 yrs</div>
              <p className="text-mint-light text-sm">In business</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
