import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://accountantcapitalva.com'),
  title: 'Accountant Capital VA | Bookkeeping & Financial Virtual Assistant',
  description: 'Dedicated bookkeeping and financial virtual assistant services. Trusted by 1000+ small businesses. Starting at $700/mo.',
  keywords: 'bookkeeping virtual assistant, financial VA, accounting VA, QuickBooks VA',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://accountantcapitalva.com',
    title: 'Accountant Capital VA | Bookkeeping & Financial Virtual Assistant',
    description: 'Dedicated bookkeeping and financial virtual assistant services. Starting at $700/mo.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Accountant Capital VA'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accountant Capital VA | Bookkeeping & Financial Virtual Assistant',
    description: 'Dedicated bookkeeping and financial virtual assistant services. Starting at $700/mo.',
    images: ['/og-image.png']
  }
};

export const generateMetadata = (
  title: string,
  description: string,
  keyword: string,
  url: string,
  ogImage?: string
): Metadata => {
  const fullTitle = `${title} | Accountant Capital VA`;

  return {
    title: fullTitle,
    description,
    keywords: [keyword, 'bookkeeping', 'virtual assistant', 'accounting'],
    canonical: `https://accountantcapitalva.com${url}`,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `https://accountantcapitalva.com${url}`,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage || '/og-image.png',
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage || '/og-image.png']
    }
  };
};

export const formatPrice = (price: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0
  }).format(price);
};

export const generateCanonicalUrl = (path: string): string => {
  return `https://accountantcapitalva.com${path}`;
};

export const generateStructuredData = (data: any): string => {
  return JSON.stringify(data);
};
