import Link from 'next/link';
import { SERVICES, INDUSTRIES, TOOLS } from '@/lib/accounting-data';

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-container mx-auto px-6 py-16">
        {/* 6-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="font-fraunces font-600 text-lg mb-6">Accountant Capital VA</h3>
            <p className="text-mint-light text-sm mb-6">
              Dedicated bookkeeping and financial VA services for growing businesses.
            </p>
            <p className="text-mint-light text-xs">
              Part of <a href="https://thehuman.capital" className="text-mint hover:text-white transition">The Human Capital</a>
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-600 text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-mint-light hover:text-mint transition text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="font-600 text-sm mb-4 uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2">
              {INDUSTRIES.map(industry => (
                <li key={industry.id}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="text-mint-light hover:text-mint transition text-sm"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Software */}
          <div>
            <h4 className="font-600 text-sm mb-4 uppercase tracking-wider">Software</h4>
            <ul className="space-y-2">
              {TOOLS.map(tool => (
                <li key={tool.id}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-mint-light hover:text-mint transition text-sm"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
            <h4 className="font-600 text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-mint-light hover:text-mint transition text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-mint-light hover:text-mint transition text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-mint-light hover:text-mint transition text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-mint-light hover:text-mint transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 6: Legal & Contact */}
          <div>
            <h4 className="font-600 text-sm mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-mint-light hover:text-mint transition text-sm">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-mint-light hover:text-mint transition text-sm">
                  Terms
                </Link>
              </li>
              <li>
                <a href="tel:(813)761-8268" className="text-mint-light hover:text-mint transition text-sm">
                  (813) 761-8268
                </a>
              </li>
              <li>
                <a href="mailto:info@thehuman.capital" className="text-mint-light hover:text-mint transition text-sm">
                  info@thehuman.capital
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-mid pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-mint-light">
          <p>&copy; {new Date().getFullYear()} Accountant Capital VA. All rights reserved.</p>
          <p>Part of <a href="https://thehuman.capital" className="text-mint hover:text-white transition">The Human Capital</a></p>
        </div>
      </div>
    </footer>
  );
}
