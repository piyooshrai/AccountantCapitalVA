import Link from 'next/link';
import { SERVICES, INDUSTRIES, TOOLS } from '@/lib/accounting-data';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-warm">
      <div className="max-w-container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-forest rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-fraunces font-600 text-forest text-lg">Accountant Capital VA</span>
          </Link>

          {/* Nav - Desktop Only */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services */}
            <div className="group relative">
              <button className="text-text-dark font-500 hover:text-mint transition">
                Services
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white border border-stone-warm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {SERVICES.map(service => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2 text-sm text-text-dark hover:bg-stone hover:text-forest transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="group relative">
              <button className="text-text-dark font-500 hover:text-mint transition">
                Industries
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white border border-stone-warm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {INDUSTRIES.map(industry => (
                    <Link
                      key={industry.id}
                      href={`/industries/${industry.slug}`}
                      className="block px-4 py-2 text-sm text-text-dark hover:bg-stone hover:text-forest transition"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="group relative">
              <button className="text-text-dark font-500 hover:text-mint transition">
                Software
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white border border-stone-warm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {TOOLS.map(tool => (
                    <Link
                      key={tool.id}
                      href={`/tools/${tool.slug}`}
                      className="block px-4 py-2 text-sm text-text-dark hover:bg-stone hover:text-forest transition"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/pricing" className="text-text-dark font-500 hover:text-mint transition">
              Pricing
            </Link>

            <Link href="/about" className="text-text-dark font-500 hover:text-mint transition">
              About
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-block bg-forest text-white px-6 py-2 rounded-lg font-600 text-sm hover:bg-forest-mid transition"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
