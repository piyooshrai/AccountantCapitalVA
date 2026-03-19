export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Accountant Capital VA',
  url: 'https://accountantcapitalva.com',
  logo: 'https://accountantcapitalva.com/logo.png',
  description: 'Dedicated bookkeeping and financial virtual assistant services for small businesses',
  sameAs: [
    'https://www.thehuman.capital'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    telephone: '(813) 761-8268',
    email: 'info@thehuman.capital'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Please contact for address',
    addressCountry: 'US'
  }
});

export const generateFinancialServiceSchema = (
  serviceName: string,
  description: string,
  areaServed: string[] = ['US', 'UK', 'AE', 'AU']
) => ({
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: serviceName,
  description,
  provider: {
    '@type': 'Organization',
    name: 'Accountant Capital VA',
    url: 'https://accountantcapitalva.com'
  },
  areaServed: areaServed.map(code => ({
    '@type': 'Country',
    name: code
  })),
  knowsAbout: ['Bookkeeping', 'Accounting', 'Financial Management', 'QuickBooks', 'Xero']
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const generateProductSchema = (
  name: string,
  price: string,
  currency: string = 'USD',
  description: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  offers: {
    '@type': 'Offer',
    price,
    priceCurrency: currency,
    availability: 'https://schema.org/InStock',
    url: 'https://accountantcapitalva.com/pricing'
  }
});

export const generateLocalBusinessSchema = (
  city: string,
  state: string,
  country: string = 'US'
) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: `Accountant Capital VA - ${city}, ${state}`,
  url: 'https://accountantcapitalva.com',
  areaServed: {
    '@type': 'City',
    name: city,
    addressRegion: state,
    addressCountry: country
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    telephone: '(813) 761-8268'
  }
});
