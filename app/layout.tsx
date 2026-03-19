import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
import ExcellenceAgent from '@/components/ui/ExcellenceAgent';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://accountantcapitalva.com'),
  title: 'Accountant Capital VA | Bookkeeping & Financial Virtual Assistant',
  description: 'Dedicated bookkeeping and financial virtual assistant services for small businesses. Starting at $700/mo. 6-year track record with 97% client retention.',
  keywords: ['bookkeeping virtual assistant', 'QuickBooks VA', 'accounting VA', 'financial virtual assistant'],
  authors: [{ name: 'Accountant Capital VA' }],
  creator: 'Accountant Capital VA',
  publisher: 'Accountant Capital VA',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://accountantcapitalva.com',
    title: 'Accountant Capital VA | Bookkeeping & Financial Virtual Assistant',
    description: 'Dedicated bookkeeping and financial virtual assistant services. Starting at $700/mo.',
    siteName: 'Accountant Capital VA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accountant Capital VA | Bookkeeping & Financial Virtual Assistant',
    description: 'Dedicated bookkeeping and financial virtual assistant services. Starting at $700/mo.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#1B3A2D" />
        <link rel="canonical" href="https://accountantcapitalva.com" />
      </head>
      <body className={`${fraunces.variable} ${manrope.variable}`}>
        {children}
        <ExcellenceAgent />

        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}
