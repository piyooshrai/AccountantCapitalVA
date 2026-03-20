# ACCOUNTANT CAPITAL VA — Complete Bookkeeping & Financial VA Website
# Feed this entire prompt + the accountantcapitalva-homepage.html reference file to Claude Code.

You are building accountantcapitalva.com from scratch. Standalone Next.js 14+ site for bookkeeping and financial virtual assistant services. Its own design, its own voice. Feeds leads to itself and the parent company (thehuman.capital).

The file accountantcapitalva-homepage.html is your design reference. Match its exact aesthetic: forest green (#1B3A2D) with mint (#7DD4AA) accents on stone (#F5F2EC). Fraunces for headlines + Manrope for body. Clean Swiss-inspired precision. Geometric clip-paths. Data-forward visual language (tables, charts, numbers). This site should feel like a modern fintech company, not a generic VA agency.

Read everything before writing code.

---

## TECH STACK
```
Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS 3.4+
Animations: CSS @keyframes + Intersection Observer (NO Framer Motion)
Fonts: Google Fonts (Fraunces, Manrope) via next/font/google
Forms: Next.js API route → Resend SDK → info@thehuman.capital
Blog: MDX with next-mdx-remote
Hosting: Vercel
Analytics: GA4 + Vercel Analytics
SEO: Next.js metadata API + next-sitemap
Performance target: Lighthouse 95+
```

---

## BRAND SYSTEM

### Colors
```
--forest: #1B3A2D (primary dark)
--forest-mid: #2D5A46
--forest-light: #4A8A6E
--mint: #7DD4AA (primary accent)
--mint-light: #A8E6C8
--stone: #F5F2EC (primary background)
--stone-warm: #EDE8DF (alternate sections)
--white: #FFFFFF (cards)
--text-dark: #1A1A1A
--text-mid: #5C5C5C
--text-light: #9A9A9A
--amber: #D4A843 (secondary accent for warnings/highlights)
```

### Typography
- Headlines: Fraunces, weights 300-700, italic for secondary emphasis
- Body/UI: Manrope, weights 300-800
- Section labels: 12px, 800 weight, 0.12em spacing, uppercase, forest-light
- Section headings: Fraunces 600, clamp(30px, 3.5vw, 46px)
- Body: 14-16px, line-height 1.75

### Design Rules
- Moderate border-radius (8-12px on cards, buttons)
- Geometric clip-paths on hero sections (angled dividers)
- Data-forward: comparison tables, numbers, financial dashboards as visual elements
- Tool tags on service cards (small pill badges showing QuickBooks, Xero, etc.)
- Numbered service cards (01, 02, 03...) in large Fraunces light weight
- Clean grid layouts with 1px borders
- NO emojis. NO decorative icons.
- Feels like a fintech company that happens to provide VAs

---

## SITE STRUCTURE

### CORE PAGES

#### Homepage (`/`)
Rebuild from accountantcapitalva-homepage.html. All sections including the comparison table and financial dashboard card.

#### About (`/about`) — 2,000+ words
#### How It Works (`/how-it-works`) — 2,000+ words
#### Pricing (`/pricing`) — 1,500+ words
- Three tiers
- Cost comparison: bookkeeper salary ($45K-$60K) vs freelancer vs Accountant Capital VA
- Competitor comparisons: vs Bench, vs Pilot, vs Bookkeeper360

#### Contact (`/contact`)
- Form: Name, Business Name, Email, Phone, Industry (dropdown: Small Business, eCommerce/Retail, Professional Services, Real Estate, Restaurant/Hospitality, Construction, Nonprofit, Multi-Location, Other), Current Software (dropdown: QuickBooks Online, QuickBooks Desktop, Xero, FreshBooks, Wave, None/Not Sure, Other), Message

---

### SERVICE PAGES (8 pages, 2,500+ words each)

#### `/services/bookkeeping`
Primary keyword: "bookkeeping virtual assistant"
Tasks: Transaction recording, expense categorization, receipt capture and filing, general ledger maintenance, chart of accounts management, month-end close support, journal entries, adjusting entries, financial data cleanup, historical bookkeeping catch-up
Tools: QuickBooks Online, QuickBooks Desktop, Xero, FreshBooks, Wave

#### `/services/bank-reconciliation`
Primary keyword: "bank reconciliation virtual assistant"
Tasks: Monthly statement reconciliation, discrepancy identification, outstanding check tracking, cleared transaction verification, credit card reconciliation, merchant account reconciliation, intercompany reconciliation, multi-account reconciliation, exception reporting, reconciliation documentation

#### `/services/invoicing-ar`
Primary keyword: "invoicing virtual assistant"
Tasks: Invoice creation and sending, payment tracking, overdue account follow-ups, aging report management, payment plan setup, statement generation, collections correspondence, cash application, deposit recording, customer account maintenance
Tools: QuickBooks, Xero, FreshBooks, Stripe, Square, PayPal

#### `/services/expense-ap`
Primary keyword: "accounts payable virtual assistant"
Tasks: Vendor bill processing, payment scheduling, expense categorization for tax purposes, receipt capture and matching, 1099 contractor tracking, purchase order matching, vendor statement reconciliation, early payment discount tracking, expense policy compliance, petty cash management
Tools: Bill.com, Expensify, Dext (Receipt Bank), Concur, Ramp

#### `/services/payroll-support`
Primary keyword: "payroll virtual assistant"
Tasks: Payroll data entry, hours tracking and verification, PTO and sick leave management, new employee setup, contractor 1099 preparation, payroll tax deposit tracking, benefits enrollment coordination, workers comp audit preparation, payroll register review, year-end W-2 coordination
Tools: Gusto, ADP, Paychex, OnPay, Rippling

#### `/services/financial-reporting`
Primary keyword: "financial reporting virtual assistant"
Tasks: P&L statement preparation, balance sheet preparation, cash flow statement preparation, budget vs actual analysis, KPI dashboard creation, variance analysis, departmental reporting, project profitability reports, board-ready financial packages, custom management reports
Tools: QuickBooks reporting, Xero reports, Excel, Google Sheets, Fathom, LivePlan

#### `/services/tax-prep-support`
Primary keyword: "tax preparation support virtual assistant"
Tasks: Year-end reconciliation, 1099 preparation and filing, receipt and expense organization, document collection from clients, prior year comparison, estimated tax payment tracking, sales tax report preparation, depreciation schedule maintenance, charitable donation tracking, CPA liaison and document delivery
Note: VA is NOT a CPA. Does not file taxes or provide tax advice. Prepares documentation.

#### `/services/ecommerce-bookkeeping`
Primary keyword: "ecommerce bookkeeping virtual assistant"
Tasks: Multi-channel sales reconciliation (Shopify, Amazon, eBay), COGS tracking, inventory valuation, sales tax tracking across states, payment processor reconciliation, refund and return accounting, marketplace fee tracking, shipping cost allocation, subscription revenue recognition, platform-specific reporting
Tools: Shopify, Amazon Seller Central, A2X, Link My Books, TaxJar

---

### INDUSTRY PAGES (6 pages, 1,500+ words each)

#### `/industries/small-business`
#### `/industries/ecommerce`
#### `/industries/professional-services`
#### `/industries/real-estate-accounting`
#### `/industries/restaurant-hospitality`
#### `/industries/construction`

Each targets "[industry] bookkeeping virtual assistant" keywords.

---

### COMPLIANCE PAGES

#### `/compliance/data-security` — 2,000+ words
How financial data is protected. NDA, Checkr, encryption, access controls. Comparison to how a local bookkeeper handles your QuickBooks login vs how Accountant Capital VA handles it.

#### `/compliance/vetting-process` — 2,000+ words
5-step vetting with emphasis on financial accuracy, software proficiency testing, and trustworthiness for handling sensitive financial data.

---

### COMPARISON PAGES (5 pages, 2,500+ words each)

#### `/compare/bench`
Bench: $299-$499/mo for bookkeeping only, no dedicated person, tech-driven
Position: Accountant Capital VA is a dedicated human, same person every day, handles more than just bookkeeping

#### `/compare/pilot`
Pilot: $599+/mo for startups, VC-backed bookkeeping
Position: Accountant Capital VA at $700 covers bookkeeping + admin + invoicing + payroll support

#### `/compare/bookkeeper360`
Bookkeeper360: $399+/mo, technology platform + human bookkeeper
Position: Accountant Capital VA is fully dedicated to you, not shared across accounts

#### `/compare/quickbooks-live`
QuickBooks Live Bookkeeping: $200-$400/mo, part of Intuit
Position: Limited to QuickBooks, no payroll, no AP/AR management, shared bookkeeper

#### `/compare/upwork-bookkeeper`
Hiring bookkeepers on Upwork vs managed service
Position: No vetting, no backup, no Client Manager, no NDA, no accountability

---

### TOOL PAGES (6 pages, 1,500+ words each)

#### `/tools/quickbooks-online` — QBO VA services
#### `/tools/quickbooks-desktop` — QBD VA services
#### `/tools/xero` — Xero VA services
#### `/tools/freshbooks` — FreshBooks VA services
#### `/tools/gusto` — Gusto payroll VA support
#### `/tools/bill-com` — Bill.com AP VA support

---

### LOCATION PAGES

Same programmatic structure:
- 4 regional hubs
- 26 city pages (same cities as other sites)
- ~160 city-service pages

#### Service slugs:
- bookkeeping
- bank-reconciliation
- invoicing-accounts-receivable
- expense-accounts-payable
- payroll-support
- financial-reporting
- tax-prep-support
- ecommerce-bookkeeping

#### City-service pages (2,500+ words):
Primary keyword: "[service] virtual assistant [city]"
Example: "bookkeeping virtual assistant Chicago"

Must reference:
- Local business tax environment (state income tax, sales tax, business-friendly states)
- Local CPA/accounting firm landscape
- Local bookkeeper salary data ($35K-$55K depending on city)
- State-specific compliance (sales tax nexus, payroll tax, filing requirements)

#### Currency: Same rules — USD for US, GBP for UK, AED for ME, AUD/NZD for APAC

---

### BLOG POSTS (10 articles, 1,800-2,500 words each)

#### Post 1: "How Much Does a Bookkeeping Virtual Assistant Cost in 2025?"
Slug: bookkeeping-va-cost | Keyword: "bookkeeping virtual assistant cost"
Content: Bench ($299-$499), Pilot ($599+), local bookkeeper ($45K-$60K), Accountant Capital VA ($700-$1,300). Full breakdown.

#### Post 2: "QuickBooks Virtual Assistant: Everything You Need to Know"
Slug: quickbooks-va-guide | Keyword: "QuickBooks virtual assistant"
Content: What a VA does inside QBO, setup, reconciliation, reporting, cleanup. The definitive resource.

#### Post 3: "The First 5 Financial Tasks to Delegate to a VA"
Slug: financial-tasks-delegate | Keyword: "bookkeeping tasks to outsource"
Content: Receipt capture, bank reconciliation, invoicing, expense categorization, monthly reporting. Time saved per task.

#### Post 4: "Bench vs Accountant Capital VA: Which Bookkeeping Service Is Right for You?"
Slug: vs-bench | Keyword: "Bench alternative"
Content: Honest comparison capturing competitor search traffic.

#### Post 5: "eCommerce Bookkeeping: Why Shopify Sellers Need a Dedicated VA"
Slug: ecommerce-bookkeeping | Keyword: "ecommerce bookkeeping virtual assistant"
Content: Multi-channel reconciliation, COGS, sales tax, inventory. Complex and underserved niche.

#### Post 6: "Year-End Bookkeeping Checklist: How a VA Prepares Your Books for Tax Season"
Slug: year-end-checklist | Keyword: "year end bookkeeping checklist"
Content: Seasonal content that ranks every Q4. Practical checklist + how a VA handles each item.

#### Post 7: "Why Your Bookkeeper Keeps Quitting (And What to Do About It)"
Slug: bookkeeper-turnover | Keyword: "bookkeeper turnover"
Content: Turnover data, replacement costs, impact on financial accuracy. Dedicated VA as the stable alternative.

#### Post 8: "Xero vs QuickBooks: Which Is Better for Your VA to Manage?"
Slug: xero-vs-quickbooks | Keyword: "Xero vs QuickBooks"
Content: Platform comparison from a VA management perspective. Both supported.

#### Post 9: "How Construction Companies Use Bookkeeping VAs to Manage Job Costing"
Slug: construction-bookkeeping-va | Keyword: "construction bookkeeping virtual assistant"
Content: Industry-specific niche content. Job costing, progress billing, retention tracking.

#### Post 10: "The Real Cost of Messy Books: What Disorganized Finances Cost Your Business"
Slug: cost-of-messy-books | Keyword: "cost of bad bookkeeping"
Content: Tax penalties, missed deductions, bad decisions from bad data, audit risk. Position clean books as ROI.

---

### RESOURCE PAGES

#### `/resources/roi-calculator`
Interactive: Input annual revenue + hours/week on bookkeeping + current cost → shows savings with Accountant Capital VA

#### `/resources/bookkeeping-checklist`
"Monthly Bookkeeping Checklist" — email-gated PDF download. Practical, useful, captures leads.

#### `/resources/tax-prep-guide`
"Tax Season Preparation Guide for Small Businesses" — email-gated

---

### LEGAL PAGES
- `/privacy`
- `/terms`

---

## DATA FILE

Create `/lib/accounting-data.ts` with:
- All regions and cities with local bookkeeper salary data, state tax environments, business climate context
- All 8 services with keywords, tools, related industries
- All 5 competitors with real pricing and feature data
- All 6 tools with platform details
- All 6 industries with specific financial needs
- Currency codes and conversion rates per region

---

## NAVIGATION

### Header Mega-Menu:
**Services**: Bookkeeping | Bank Reconciliation | Invoicing & AR | Expense & AP | Payroll Support | Financial Reporting | Tax Prep Support | eCommerce Bookkeeping

**Industries**: Small Business | eCommerce | Professional Services | Real Estate | Restaurant & Hospitality | Construction

**Software**: QuickBooks Online | QuickBooks Desktop | Xero | FreshBooks | Gusto | Bill.com

**Locations**: United States | United Kingdom | Middle East | Australia & NZ

**Pricing** (link)

**[CTA]** "Book Strategy Call"

### Deep Footer: 6 columns — Brand, Services, Industries, Software, Locations, Company (with link to thehuman.capital)

---

## INTERLINKING, SCHEMA, CONTENT UNITS

Same rules as the other two prompts:
- Every page: unique H1, unique meta, 1,500+ words minimum (2,500+ money pages), FAQ with schema, breadcrumbs, 6+ internal links, CTA, pricing anchor
- Schema: Organization, FinancialService, FAQPage, BreadcrumbList
- Footer: "Part of The Human Capital" with link
- Cross-linking to thehuman.capital where relevant

---

## BUILD ORDER

Data file → design system → layout → homepage → core pages → 8 service pages → 6 industry pages → compliance pages → 5 comparison pages → 6 tool pages → location pages (160+) → 10 blog posts → resource pages → legal pages → schema → breadcrumbs → interlinking → sitemap → analytics → build test.

Build everything. No placeholders. Every page fully rendered with real, deep, accounting-specific content. 230+ pages. Every page targets a specific search query that a business owner looking for bookkeeping help is typing right now.

---

## PART 13: EXCELLENCE AGENT (Chat Widget)

Build from ExcellenceAgent.tsx. Customize for accounting:

### Config:
```
AGENT_CONFIG = {
  name: 'Accountant Capital VA',
  agentName: 'Maya',
  phone: '(813) 761-8268',
  email: 'info@thehuman.capital',
  bookingLink: '/contact',
}
```

### Accounting-specific flows:

**Entry:** "Hey — I'm Maya from Accountant Capital VA. Looking for bookkeeping support for your business, or interested in joining our team?"

**Prospect qualification:**
- "What kind of business?" → Small Business / eCommerce / Professional Services / Restaurant / Construction / Multi-Location / Other
- "What's your biggest headache?" → Books are behind / Need someone on QuickBooks / Invoicing and collections / Payroll / Tax prep is a mess / All of it
- Based on answer, serve specific response

**Objection handling:**
- "How is this different from Bench?" → "Bench gives you a shared team and their own software. We give you one dedicated person who works inside YOUR QuickBooks or Xero, plus a Client Manager overseeing quality. Same person every day, not a rotating team."
- "What does it cost?" → "$700/mo part-time, $1,300 full-time. Month-to-month. That's less than Pilot ($499-$699 for bookkeeping only) and you get a full admin VA, not just bookkeeping."
- "Do they know QuickBooks?" → "QBO, QuickBooks Desktop, Xero, FreshBooks, Wave — we train on whatever you use. If you're not on anything yet, we'll set it up."
- "Is my financial data safe?" → "Every VA signs an NDA and passes a Checkr background check before touching any system. Encrypted file sharing. Your CPA will be relieved."

**All paths → CTA in 3 exchanges.**

**Transcript delivery:** Same Resend route. Subject: "Accountant Capital VA Chat Lead — [email]"

Add to root layout. Hidden on /contact.

---

## PART 14: REAL COMPETITOR DATA

### Bench (rebranding to Mainstreet)
- Price: Essential $249/mo (billed annually), Premium $399/mo (billed annually)
- 25,000+ small businesses served
- Proprietary software (NOT your QuickBooks — their own platform)
- US-based team, but shared across accounts (not dedicated)
- Includes monthly financial statements, tax-ready books
- Tax filing available on Premium
- Strengths: Affordable, simple, established brand, good for very small businesses
- Weaknesses: Shared team (not dedicated), proprietary software (can't use your QuickBooks), pricing scales with transaction volume, no payroll/AP/AR management, no Client Manager, limited to bookkeeping only

### Pilot
- Price: Starter $499/mo, Core $699/mo, Plus custom
- Pricing scales with monthly expenses
- Focused on startups and VC-backed companies
- Accrual-based bookkeeping, CFO services available
- Works on top of QuickBooks
- Strengths: Tech-forward, good for startups, polished portal, financial modeling
- Weaknesses: Expensive, pricing increases as you grow, focused on tech startups (not general business), bookkeeping only — no admin/invoicing/payroll support

### QuickBooks Live
- Price: Starting ~$200/mo, scales with monthly expenses
- Part of Intuit ecosystem
- QuickBooks-certified bookkeepers
- Clean-up fee required to start
- Strengths: Direct QuickBooks integration, trusted brand, certified bookkeepers
- Weaknesses: QuickBooks ONLY (can't use Xero), shared bookkeeper, limited scope (basic bookkeeping), more transactional than advisory, no payroll/AP/AR

### Bookkeeper360
- Price: Custom, generally $399+/mo
- Integrates with QuickBooks and Xero
- Offers payroll, HR, CFO-level services
- Strengths: Flexible, growth-oriented, wide service range
- Weaknesses: Pricing adds up with add-ons, can get expensive, not a dedicated person

### Merritt Bookkeeping
- Price: Flat $190/mo
- Cheapest option on the market
- Basic bookkeeping only
- Strengths: Extremely affordable, simple flat rate
- Weaknesses: No payroll, no tax prep, no AP/AR, bare-bones service, no dedicated person

### 1-800Accountant
- Price: Custom packages
- Full-service: bookkeeping + tax + payroll + entity formation
- Strengths: Comprehensive, one-stop shop
- Weaknesses: Can be overwhelming for simple needs, pricing not transparent

### Accountant Capital VA positioning:
- $700/mo part-time, $1,300 full-time
- DEDICATED person (not shared like Bench, not rotated like QuickBooks Live)
- Works in YOUR software (QuickBooks, Xero, FreshBooks — not proprietary)
- Full financial admin (bookkeeping + invoicing + AR + AP + payroll support + reporting — not just bookkeeping)
- Dedicated Client Manager overseeing quality
- NDA + Checkr background check
- Backup VA during leave
- Month-to-month, no annual commitment (Bench bills annually for best rate)
- Part of The Human Capital (6-year track record, 97% retention)
- Cannabis case study: started with bookkeeping VA, scaled to 7 locations with 5 VAs
- Key differentiator: Bench/Pilot/QBL are BOOKKEEPING SERVICES. Accountant Capital VA is a DEDICATED PERSON who does bookkeeping AND everything else financial.

---

## PART 15: KEYWORD TARGETS

### City-service pages — PRIMARY:
- "bookkeeping virtual assistant Chicago"
- "QuickBooks virtual assistant New York"
- "accounts payable virtual assistant Dallas"
- "bookkeeping VA London"
- "financial reporting virtual assistant Dubai"
- "payroll virtual assistant Miami"
- "ecommerce bookkeeping virtual assistant Los Angeles"

### Service pages — SECONDARY:
- "bookkeeping virtual assistant" (2,100 monthly searches est.)
- "QuickBooks virtual assistant" (1,400)
- "accounts payable virtual assistant" (800)
- "invoicing virtual assistant" (600)
- "payroll virtual assistant" (700)
- "financial reporting virtual assistant" (400)
- "ecommerce bookkeeping" (1,800)
- "bank reconciliation service" (900)
- "virtual bookkeeper" (3,200)

### Blog — LONG-TAIL:
- "how much does a bookkeeping virtual assistant cost" (high volume)
- "Bench alternative" (mid volume, very high intent)
- "QuickBooks virtual assistant setup" (low volume, tool-specific)
- "ecommerce bookkeeping Shopify" (mid volume, niche)
- "year end bookkeeping checklist" (seasonal, high volume in Q4)
- "bookkeeper turnover cost" (mid volume, pain point)
- "Xero vs QuickBooks" (high volume, comparison)
- "construction bookkeeping virtual assistant" (low volume, niche)
- "cost of bad bookkeeping small business" (mid volume, problem-aware)

### Comparison — BRANDED:
- "Bench alternative" / "Bench review" / "Bench vs"
- "Pilot bookkeeping review" / "Pilot alternative"
- "QuickBooks Live review" / "QuickBooks Live alternative"
- "Bookkeeper360 review"
- "Merritt Bookkeeping review"

### Placement rules — every page:
1. Target keyword in H1
2. Target keyword in meta title
3. Target keyword in meta description
4. Target keyword in first 100 words
5. Target keyword in at least one H2
6. Target keyword in URL slug

---

## PART 16: TESTIMONIAL FRAMEWORK

Place adapted testimonials:
- On bookkeeping pages: "Started with bookkeeping for one location. Now five VAs across seven." — Owner, Multi-Location Retail
- On QuickBooks pages: testimonial about clean books and happy CPA
- On pricing pages: testimonial about cost savings vs local bookkeeper hire
- On reconciliation pages: testimonial about catching discrepancies that saved thousands
- On ecommerce pages: testimonial about multi-channel reconciliation finally being accurate

All attributed as: Role + Business Type. No full names unless provided.

---

Build everything. No placeholders. No stubs. Every page targets a specific search query. Excellence Agent on every page. Real competitor data in comparisons. Keywords in every H1, meta tag, and opening paragraph.
