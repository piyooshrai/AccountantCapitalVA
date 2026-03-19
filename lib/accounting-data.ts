export const SERVICES = [
  {
    id: 'bookkeeping',
    name: 'Bookkeeping',
    slug: 'bookkeeping',
    keyword: 'bookkeeping virtual assistant',
    description: 'Daily transaction recording, expense categorization, receipt capture, and complete financial record management',
    tasks: [
      'Transaction recording and categorization',
      'Expense categorization for tax purposes',
      'Receipt capture and filing',
      'General ledger maintenance',
      'Chart of accounts management',
      'Month-end close support',
      'Journal entries and adjusting entries',
      'Financial data cleanup',
      'Historical bookkeeping catch-up',
      'Regular reconciliation support'
    ],
    tools: ['QuickBooks Online', 'QuickBooks Desktop', 'Xero', 'FreshBooks', 'Wave'],
    relatedIndustries: ['small-business', 'ecommerce', 'professional-services', 'real-estate', 'restaurant', 'construction']
  },
  {
    id: 'bank-reconciliation',
    name: 'Bank Reconciliation',
    slug: 'bank-reconciliation',
    keyword: 'bank reconciliation virtual assistant',
    description: 'Expert monthly statement reconciliation with discrepancy identification and exception reporting',
    tasks: [
      'Monthly statement reconciliation',
      'Discrepancy identification and resolution',
      'Outstanding check tracking',
      'Cleared transaction verification',
      'Credit card reconciliation',
      'Merchant account reconciliation',
      'Intercompany reconciliation',
      'Multi-account reconciliation',
      'Exception reporting and analysis',
      'Reconciliation documentation'
    ],
    tools: ['QuickBooks Online', 'QuickBooks Desktop', 'Xero'],
    relatedIndustries: ['small-business', 'ecommerce', 'professional-services', 'restaurant']
  },
  {
    id: 'invoicing-ar',
    name: 'Invoicing & Accounts Receivable',
    slug: 'invoicing-ar',
    keyword: 'invoicing virtual assistant',
    description: 'Complete AR management from invoice creation to payment tracking and collections',
    tasks: [
      'Invoice creation and sending',
      'Payment tracking and monitoring',
      'Overdue account follow-ups',
      'Aging report management',
      'Payment plan setup and administration',
      'Statement generation',
      'Collections correspondence',
      'Cash application to invoices',
      'Deposit recording',
      'Customer account maintenance'
    ],
    tools: ['QuickBooks', 'Xero', 'FreshBooks', 'Stripe', 'Square', 'PayPal'],
    relatedIndustries: ['small-business', 'professional-services', 'construction', 'restaurant']
  },
  {
    id: 'expense-ap',
    name: 'Expense & Accounts Payable',
    slug: 'expense-ap',
    keyword: 'accounts payable virtual assistant',
    description: 'Bill processing, vendor management, and complete AP workflow optimization',
    tasks: [
      'Vendor bill processing',
      'Payment scheduling and execution',
      'Expense categorization for tax purposes',
      'Receipt capture and matching',
      '1099 contractor tracking',
      'Purchase order matching',
      'Vendor statement reconciliation',
      'Early payment discount tracking',
      'Expense policy compliance',
      'Petty cash management'
    ],
    tools: ['Bill.com', 'Expensify', 'Dext', 'Concur', 'Ramp'],
    relatedIndustries: ['small-business', 'construction', 'restaurant', 'professional-services']
  },
  {
    id: 'payroll-support',
    name: 'Payroll Support',
    slug: 'payroll-support',
    keyword: 'payroll virtual assistant',
    description: 'Complete payroll administration support without the complexity',
    tasks: [
      'Payroll data entry and processing',
      'Hours tracking and verification',
      'PTO and sick leave management',
      'New employee setup and onboarding',
      'Contractor 1099 preparation',
      'Payroll tax deposit tracking',
      'Benefits enrollment coordination',
      'Workers compensation audit preparation',
      'Payroll register review and reconciliation',
      'Year-end W-2 coordination'
    ],
    tools: ['Gusto', 'ADP', 'Paychex', 'OnPay', 'Rippling'],
    relatedIndustries: ['small-business', 'construction', 'restaurant', 'professional-services']
  },
  {
    id: 'financial-reporting',
    name: 'Financial Reporting',
    slug: 'financial-reporting',
    keyword: 'financial reporting virtual assistant',
    description: 'Professional financial statements and custom reporting for better business decisions',
    tasks: [
      'P&L statement preparation',
      'Balance sheet preparation',
      'Cash flow statement preparation',
      'Budget vs actual analysis',
      'KPI dashboard creation',
      'Variance analysis and interpretation',
      'Departmental reporting',
      'Project profitability reports',
      'Board-ready financial packages',
      'Custom management reports'
    ],
    tools: ['QuickBooks reporting', 'Xero reports', 'Excel', 'Google Sheets', 'Fathom', 'LivePlan'],
    relatedIndustries: ['professional-services', 'real-estate', 'construction', 'small-business']
  },
  {
    id: 'tax-prep-support',
    name: 'Tax Preparation Support',
    slug: 'tax-prep-support',
    keyword: 'tax preparation support virtual assistant',
    description: 'Year-end preparation and documentation for seamless tax filing (Not a CPA)',
    tasks: [
      'Year-end reconciliation',
      '1099 preparation and coordination',
      'Receipt and expense organization',
      'Document collection from clients',
      'Prior year comparison analysis',
      'Estimated tax payment tracking',
      'Sales tax report preparation',
      'Depreciation schedule maintenance',
      'Charitable donation tracking',
      'CPA liaison and document delivery'
    ],
    tools: ['QuickBooks', 'Xero', 'Excel'],
    relatedIndustries: ['small-business', 'ecommerce', 'professional-services', 'construction'],
    note: 'VA is NOT a CPA. Does not file taxes or provide tax advice. Prepares documentation only.'
  },
  {
    id: 'ecommerce-bookkeeping',
    name: 'eCommerce Bookkeeping',
    slug: 'ecommerce-bookkeeping',
    keyword: 'ecommerce bookkeeping virtual assistant',
    description: 'Multi-channel reconciliation and complex eCommerce-specific financial management',
    tasks: [
      'Multi-channel sales reconciliation (Shopify, Amazon, eBay)',
      'COGS tracking and management',
      'Inventory valuation',
      'Sales tax tracking across states',
      'Payment processor reconciliation',
      'Refund and return accounting',
      'Marketplace fee tracking',
      'Shipping cost allocation',
      'Subscription revenue recognition',
      'Platform-specific reporting'
    ],
    tools: ['Shopify', 'Amazon Seller Central', 'A2X', 'Link My Books', 'TaxJar'],
    relatedIndustries: ['ecommerce']
  }
];

export const INDUSTRIES = [
  {
    id: 'small-business',
    name: 'Small Business',
    slug: 'small-business',
    keyword: 'bookkeeping virtual assistant for small business',
    description: 'Trusted bookkeeping support for growing businesses',
    challenges: 'Owner is often the bookkeeper. No dedicated finance team. Time spent on books = lost revenue.',
    keyServices: ['bookkeeping', 'bank-reconciliation', 'invoicing-ar', 'payroll-support'],
    seasonality: 'Year-end accounting crunch, quarterly tax payments'
  },
  {
    id: 'ecommerce',
    name: 'eCommerce & Retail',
    slug: 'ecommerce',
    keyword: 'bookkeeping virtual assistant for ecommerce',
    description: 'Expert bookkeeping for multi-channel eCommerce sellers',
    challenges: 'Complex multi-channel reconciliation. Inventory tracking. Multi-state sales tax. Rapid transactions.',
    keyServices: ['ecommerce-bookkeeping', 'bank-reconciliation', 'invoicing-ar', 'financial-reporting'],
    seasonality: 'Q4 holiday surge, inventory valuation before year-end'
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    slug: 'professional-services',
    keyword: 'bookkeeping virtual assistant for professional services',
    description: 'Financial management for consultants, agencies, and service firms',
    challenges: 'Project-based revenue. Time tracking complexity. Multiple revenue streams. Client billing.',
    keyServices: ['bookkeeping', 'invoicing-ar', 'financial-reporting', 'tax-prep-support'],
    seasonality: 'Year-end close, quarterly billing cycles'
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    slug: 'real-estate',
    keyword: 'real estate accounting virtual assistant',
    description: 'Property accounting and investment tracking',
    challenges: 'Rental property management. Depreciation tracking. Mortgage deductions. Tenant accounting.',
    keyServices: ['bookkeeping', 'financial-reporting', 'tax-prep-support', 'bank-reconciliation'],
    seasonality: 'Year-end depreciation schedules, Q4 tax planning'
  },
  {
    id: 'restaurant',
    name: 'Restaurant & Hospitality',
    slug: 'restaurant',
    keyword: 'restaurant bookkeeping virtual assistant',
    description: 'Daily operational accounting for food service and hospitality',
    challenges: 'High transaction volume. Daily cash reconciliation. Inventory shrinkage. Labor costs.',
    keyServices: ['bookkeeping', 'bank-reconciliation', 'payroll-support', 'expense-ap'],
    seasonality: 'Seasonal traffic, year-end inventory'
  },
  {
    id: 'construction',
    name: 'Construction',
    slug: 'construction',
    keyword: 'construction bookkeeping virtual assistant',
    description: 'Job costing and project-based accounting',
    challenges: 'Job costing complexity. Retention accounting. Subcontractor management. Equipment depreciation.',
    keyServices: ['bookkeeping', 'expense-ap', 'financial-reporting', 'tax-prep-support'],
    seasonality: 'Seasonal bidding, quarterly job reviews'
  }
];

export const COMPETITORS = [
  {
    id: 'bench',
    name: 'Bench',
    pricingTier: 'Essential $249-$399/mo',
    positioning: 'Tech-driven, shared team, proprietary software',
    strengths: ['Affordable entry point', 'Simple onboarding', 'Established brand', 'Good for very small'],
    weaknesses: ['Shared team (not dedicated)', 'Proprietary software (not your QuickBooks)', 'Pricing scales with volume', 'Bookkeeping only', 'No Client Manager', 'Annual billing required'],
    acvaAdvantages: ['Dedicated person (same every day)', 'Works in YOUR software', 'Full financial admin (not just bookkeeping)', 'Invoicing + AR + AP + payroll support', 'Client Manager overseeing quality', 'Month-to-month, cancel anytime']
  },
  {
    id: 'pilot',
    name: 'Pilot',
    pricingTier: 'Starter $499/mo, Core $699/mo',
    positioning: 'Tech-forward, startup-focused, pricing scales with expenses',
    strengths: ['Polished interface', 'Good for VC-backed startups', 'Financial modeling available', 'Works with QuickBooks'],
    weaknesses: ['Expensive', 'Pricing increases as you grow', 'Startup-focused (not general business)', 'Bookkeeping only', 'No admin, invoicing, payroll support'],
    acvaAdvantages: ['$700/mo covers bookkeeping + admin + invoicing + payroll', 'Scales with you', 'Works with any software', 'Dedicated person', 'Designed for all business types']
  },
  {
    id: 'quickbooks-live',
    name: 'QuickBooks Live',
    pricingTier: '$200-$400/mo, scales with expenses',
    positioning: 'Intuit-owned, QuickBooks-only, certified bookkeepers, cleanup required',
    strengths: ['Direct QB integration', 'Trusted brand', 'QB-certified bookkeepers'],
    weaknesses: ['QuickBooks ONLY (no Xero, FreshBooks, Wave)', 'Shared bookkeeper', 'Limited scope', 'Transactional, not advisory', 'Cleanup fees to start'],
    acvaAdvantage: ['Works with ANY software', 'Dedicated person', 'Full financial admin', 'No startup fees']
  },
  {
    id: 'bookkeeper360',
    name: 'Bookkeeper360',
    pricingTier: 'Custom, generally $399+/mo',
    positioning: 'Flexible, growth-oriented, wide service range, shared across accounts',
    strengths: ['QB + Xero integration', 'Wide service range', 'Flexible packages'],
    weaknesses: ['Not dedicated (shared across accounts)', 'Pricing adds up with add-ons', 'Can get expensive', 'No guaranteed person continuity'],
    acvaAdvantages: ['Fully DEDICATED (not shared)', 'Same VA every day', 'Predictable pricing', 'Client Manager oversight']
  },
  {
    id: 'upwork',
    name: 'Freelance/Upwork',
    pricingTier: 'Highly variable',
    positioning: 'Unvetted freelancers, no guarantees, high variability',
    strengths: ['Lowest cost option', 'Easy to find'],
    weaknesses: ['No vetting', 'No backup coverage', 'No Client Manager', 'No NDA', 'No accountability', 'Variable quality', 'Constant sourcing burden'],
    acvaAdvantages: ['Top 3% vetting', 'Checkr background check', 'NDA + service guarantee', 'Dedicated Client Manager', 'Backup VA during leave', 'Consistent quality']
  }
];

export const TOOLS = [
  {
    id: 'quickbooks-online',
    name: 'QuickBooks Online',
    slug: 'quickbooks-online',
    keyword: 'QuickBooks Online virtual assistant',
    type: 'Cloud-based accounting',
    popularity: 'Most popular for SMBs'
  },
  {
    id: 'quickbooks-desktop',
    name: 'QuickBooks Desktop',
    slug: 'quickbooks-desktop',
    keyword: 'QuickBooks Desktop virtual assistant',
    type: 'Desktop accounting',
    popularity: 'Legacy but still widely used'
  },
  {
    id: 'xero',
    name: 'Xero',
    slug: 'xero',
    keyword: 'Xero virtual assistant',
    type: 'Cloud-based accounting',
    popularity: 'Growing, especially in Australia & UK'
  },
  {
    id: 'freshbooks',
    name: 'FreshBooks',
    slug: 'freshbooks',
    keyword: 'FreshBooks virtual assistant',
    type: 'Cloud invoicing + accounting',
    popularity: 'Popular for service businesses'
  },
  {
    id: 'gusto',
    name: 'Gusto',
    slug: 'gusto',
    keyword: 'Gusto payroll virtual assistant',
    type: 'Payroll + HR',
    popularity: 'Leading SMB payroll solution'
  },
  {
    id: 'bill-com',
    name: 'Bill.com',
    slug: 'bill-com',
    keyword: 'Bill.com accounts payable virtual assistant',
    type: 'AP automation',
    popularity: 'Leading AP automation platform'
  }
];

export const REGIONS = [
  { id: 'us', name: 'United States', currency: 'USD', code: 'USD' },
  { id: 'uk', name: 'United Kingdom', currency: 'GBP', code: 'GBP' },
  { id: 'me', name: 'Middle East', currency: 'AED', code: 'AED' },
  { id: 'apac', name: 'Australia & NZ', currency: 'AUD/NZD', code: 'AUD' }
];

export const CITIES = {
  us: [
    { city: 'New York', state: 'NY', salaryRange: '50-65k', stateTax: 'High', business: 'Finance hub' },
    { city: 'Los Angeles', state: 'CA', salaryRange: '48-62k', stateTax: 'High', business: 'Tech & entertainment' },
    { city: 'Chicago', state: 'IL', salaryRange: '42-54k', stateTax: 'Moderate', business: 'Finance & manufacturing' },
    { city: 'Houston', state: 'TX', salaryRange: '40-52k', stateTax: 'Low', business: 'Energy & petrochemical' },
    { city: 'Phoenix', state: 'AZ', salaryRange: '38-50k', stateTax: 'Moderate', business: 'Growing tech' },
    { city: 'Philadelphia', state: 'PA', salaryRange: '41-52k', stateTax: 'Moderate', business: 'Manufacturing & services' },
    { city: 'San Antonio', state: 'TX', salaryRange: '36-48k', stateTax: 'Low', business: 'Military & small business' },
    { city: 'San Diego', state: 'CA', salaryRange: '46-60k', stateTax: 'High', business: 'Biotech & defense' },
    { city: 'Dallas', state: 'TX', salaryRange: '39-51k', stateTax: 'Low', business: 'Finance & real estate' },
    { city: 'San Jose', state: 'CA', salaryRange: '50-65k', stateTax: 'High', business: 'Silicon Valley tech' },
    { city: 'Austin', state: 'TX', salaryRange: '42-55k', stateTax: 'Low', business: 'Tech & startups' },
    { city: 'Jacksonville', state: 'FL', salaryRange: '38-49k', stateTax: 'Low', business: 'Logistics & business services' },
    { city: 'Memphis', state: 'TN', salaryRange: '35-46k', stateTax: 'Low', business: 'Logistics & distribution' },
    { city: 'Boston', state: 'MA', salaryRange: '46-60k', stateTax: 'High', business: 'Education & biotech' },
    { city: 'Nashville', state: 'TN', salaryRange: '36-47k', stateTax: 'Low', business: 'Music & healthcare' },
    { city: 'Portland', state: 'OR', salaryRange: '42-54k', stateTax: 'Moderate', business: 'Tech & startups' },
    { city: 'Detroit', state: 'MI', salaryRange: '38-50k', stateTax: 'Moderate', business: 'Automotive & manufacturing' },
    { city: 'Denver', state: 'CO', salaryRange: '40-52k', stateTax: 'Moderate', business: 'Energy & tech' },
    { city: 'Washington DC', state: 'DC', salaryRange: '48-62k', stateTax: 'High', business: 'Government & lobbying' },
    { city: 'Seattle', state: 'WA', salaryRange: '45-58k', stateTax: 'Low', business: 'Tech (Amazon, Microsoft)' }
  ],
  uk: [
    { city: 'London', country: 'England', salaryRange: '£30-40k', taxEnv: 'High', business: 'Finance & tech hub' },
    { city: 'Manchester', country: 'England', salaryRange: '£25-35k', taxEnv: 'Moderate', business: 'Tech & media' },
    { city: 'Birmingham', country: 'England', salaryRange: '£24-33k', taxEnv: 'Moderate', business: 'Manufacturing' },
    { city: 'Leeds', country: 'England', salaryRange: '£24-33k', taxEnv: 'Moderate', business: 'Finance & legal services' }
  ],
  me: [
    { city: 'Dubai', country: 'UAE', salaryRange: '3,000-4,500 AED', taxEnv: 'Low', business: 'International business hub' },
    { city: 'Abu Dhabi', country: 'UAE', salaryRange: '2,800-4,200 AED', taxEnv: 'Low', business: 'Government & oil/gas' }
  ],
  apac: [
    { city: 'Sydney', country: 'Australia', salaryRange: 'A$50-65k', taxEnv: 'Moderate', business: 'Finance & professional services' },
    { city: 'Melbourne', country: 'Australia', salaryRange: 'A$48-63k', taxEnv: 'Moderate', business: 'Tech & startup hub' },
    { city: 'Auckland', country: 'NZ', salaryRange: 'NZ$55-70k', taxEnv: 'Moderate', business: 'Finance & tech' }
  ]
};

export const PRICING_TIERS = [
  {
    name: 'Part-Time VA',
    price: '$700',
    period: '/month',
    hours: 'Up to 20 hours/week',
    features: [
      'Dedicated VA assigned only to you',
      'Works in YOUR software (QBO, Desktop, Xero, FreshBooks, Wave)',
      'Dedicated Client Manager overseeing quality',
      'Background checked (Checkr) and NDA signed',
      'Backup VA during leave',
      'Month-to-month, cancel anytime',
      'Perfect for: Bookkeeping, reconciliation, invoicing'
    ]
  },
  {
    name: 'Full-Time VA',
    price: '$1,300',
    period: '/month',
    hours: 'Up to 40 hours/week',
    features: [
      'Dedicated VA assigned only to you',
      'Works in YOUR software',
      'Dedicated Client Manager overseeing quality',
      'Background checked and NDA signed',
      'Backup VA during leave',
      'Month-to-month, cancel anytime',
      'Perfect for: Full financial admin (bookkeeping, AR, AP, payroll support, reporting)'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact for quote',
    hours: 'Multiple VAs, custom scope',
    features: [
      'Multiple dedicated VAs if needed',
      'Custom service scope',
      'Dedicated Client Manager + executive sponsorship',
      'Advanced reporting and analytics',
      'Priority support',
      'Perfect for: Multi-location, complex financial operations, high-growth'
    ]
  }
];

export const FAQ = {
  general: [
    {
      question: 'How is Accountant Capital VA different from Bench, Pilot, or other services?',
      answer: 'We provide a dedicated person (same VA every day) who works inside YOUR QuickBooks, Xero, or other software. Bench and Pilot use their own proprietary software and give you a shared team. We also cover more than just bookkeeping—invoicing, AR, AP, and payroll support. You get a real person, not a platform.'
    },
    {
      question: 'How much does it cost?',
      answer: '$700/mo for part-time (up to 20 hrs/week), $1,300/mo for full-time (up to 40 hrs/week). Both month-to-month with no lock-in. That\'s less than hiring a local bookkeeper, and you get a full admin VA, not just bookkeeping.'
    },
    {
      question: 'Do your VAs know QuickBooks?',
      answer: 'Yes. We train on QuickBooks Online, QuickBooks Desktop, Xero, FreshBooks, Wave, Gusto, Bill.com, and more. If you\'re not on any of these yet, we\'ll help you set it up.'
    },
    {
      question: 'Is my financial data safe?',
      answer: 'Every VA signs an NDA and passes a Checkr background check before touching any system. Encrypted file sharing, role-based access (not shared passwords), and an audit trail. Your CPA will feel confident.'
    },
    {
      question: 'What if my VA goes on vacation or gets sick?',
      answer: 'You have a backup VA assigned from day one. If your primary VA is unavailable, the backup steps in seamlessly. No interruption to your financial operations.'
    }
  ],
  services: [
    {
      question: 'What bookkeeping tasks do you handle?',
      answer: 'Transaction recording, expense categorization, receipt capture, GL maintenance, month-end close, journal entries, reconciliation, data cleanup, and more. Basically, all the daily financial record-keeping.'
    },
    {
      question: 'Can you help with invoicing and collections?',
      answer: 'Yes. We handle invoice creation, payment tracking, overdue follow-ups, aging reports, and customer account maintenance. We\'ll chase down your money for you.'
    },
    {
      question: 'Do you provide tax advice?',
      answer: 'No. We prepare tax documentation (1099s, receipts, reconciliations, expense organization) to make your tax filing smooth. But we\'re not CPAs. Tax strategy and filing happens with your CPA.'
    }
  ]
};

export const COMPANY_INFO = {
  name: 'Accountant Capital VA',
  parent: 'The Human Capital',
  phone: '(813) 761-8268',
  email: 'info@thehuman.capital',
  years: 6,
  retention: '97%',
  teamPhotos: {
    maya: '/agents/maya.jpg',
    daniel: '/agents/daniel.jpg',
    elena: '/agents/elena.jpg'
  }
};
