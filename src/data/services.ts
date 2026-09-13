export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Zoho Implementation" | "Accounting & Bookkeeping" | "Statutory Compliance" | "Advisory & Strategy";
  iconName: string;
  orderNumber: string;
  excerpt: string;
  heroDescription: string;
  targetAudience: string[];
  deliverables: string[];
  benefits: { title: string; description: string }[];
  processSteps: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: Service[] = [
  {
    slug: "zoho-books-setup-training",
    title: "Zoho Books Setup, Migration & Staff Training",
    shortTitle: "Zoho Books Setup & Training",
    category: "Zoho Implementation",
    iconName: "BookOpen",
    orderNumber: "01",
    excerpt: "End-to-end setup, zero-loss migration from Tally/Excel, custom chart of accounts, and personalized staff training.",
    heroDescription: "Transform your financial operations with India's premier cloud accounting suite. As certified Zoho Implementation Partners (Partner ID: PI0626000), we configure customized workflows, historical data migration, bank feeds, and GST e-invoicing tailored to your business model.",
    targetAudience: [
      "Companies migrating from desktop software like Tally Prime, Busy, or Excel spreadsheets",
      "Fast-growing SMEs needing multi-user role-based cloud accounting",
      "Founders seeking automated e-invoicing, e-way bills, and automated bank reconciliation",
      "Businesses wanting official certified Zoho implementation support in Hyderabad & Pan-India"
    ],
    deliverables: [
      "Bespoke Chart of Accounts architecture aligned with your industry standards",
      "Zero-downtime ledger, customer, vendor, and opening balance migration from Tally/Excel",
      "Custom invoice templates with brand identity, payment QR codes, and digital signature",
      "Automated bank feeds, rule-based reconciliation, and payment gateway linkages",
      "GST master setup (HSN/SAC codes, tax rates, GSTIN verification, e-invoicing)",
      "Hands-on interactive training sessions for your finance, sales, and operations team"
    ],
    benefits: [
      {
        title: "Zero Disruption Migration",
        description: "Seamless transfer of multi-year financial ledgers, inventory masters, and open vouchers without operational halt."
      },
      {
        title: "100% Statutory Compliance",
        description: "Pre-configured for GSTR-1, GSTR-3B auto-population, e-invoicing, and real-time vendor input tax credit (ITC) reconciliation."
      },
      {
        title: "Certified Professional Touch",
        description: "Direct guidance from certified Zoho Books professionals ensuring you leverage 100% of Zoho's native automation capabilities."
      }
    ],
    processSteps: [
      { step: "01", title: "Diagnostic Review", description: "Review existing chart of accounts, transaction volume, pain points, and reporting requirements." },
      { step: "02", title: "Sandbox Configuration", description: "Design custom modules, item masters, approval hierarchies, and taxation rules." },
      { step: "03", title: "Data Cleansing & Cutover", description: "Validate closing balances, clean customer/vendor master data, and execute historical migration." },
      { step: "04", title: "Training & Go-Live", description: "Deliver department-specific training, oversee the first month's close, and provide priority ongoing support." }
    ],
    faqs: [
      {
        question: "Can you migrate all historical data from our old Tally Prime software?",
        answer: "Yes. We extract and clean your trial balance, opening balances, inventory items, customer/vendor masters, and prior year comparisons to ensure complete ledger continuity in Zoho Books."
      },
      {
        question: "How long does a typical Zoho Books implementation take?",
        answer: "Standard SME implementations take between 7 to 14 business days. For complex multi-branch setups or deep inventory configurations, we provide a detailed milestone schedule during the initial assessment."
      },
      {
        question: "Will you train our in-house accountants?",
        answer: "Absolutely. We conduct interactive training sessions covering day-to-day invoicing, purchase bills, bank reconciliation, expense logging, and monthly tax filings, supplemented by recorded walkthroughs."
      }
    ]
  },
  {
    slug: "zoho-app-integration",
    title: "Zoho Ecosystem & Third-Party App Integration",
    shortTitle: "Zoho App Integration",
    category: "Zoho Implementation",
    iconName: "Cpu",
    orderNumber: "02",
    excerpt: "Connect Zoho Books seamlessly with Zoho CRM, Inventory, Payroll, Analytics, payment gateways, and e-commerce channels.",
    heroDescription: "Break data silos and eliminate manual dual-entry. We integrate Zoho Books with your CRM pipelines, warehouse inventory, payroll engines, e-commerce stores (Shopify, WooCommerce), and banking APIs for synchronized financial intelligence.",
    targetAudience: [
      "Companies using disparate applications struggling with fragmented client and financial data",
      "E-commerce brands needing automated order-to-cash and inventory synchronization",
      "Sales organizations wanting automatic sales-order-to-invoice generation from Zoho CRM",
      "Enterprises implementing Zoho One or Zoho Finance Plus suite across departments"
    ],
    deliverables: [
      "Zoho CRM to Zoho Books two-way deal, contact, and quote-to-invoice synchronization",
      "Zoho Inventory multi-warehouse stock syncing, reorder points, and batch tracking",
      "Zoho Payroll automatic salary journal postings, TDS deductions, and payslip generation",
      "Payment gateway integrations (Razorpay, Cashfree, Stripe) with auto-reconciliation",
      "E-commerce connector setups for automated sales order processing and tax mapping",
      "Custom Zoho Analytics dashboards delivering executive real-time KPIs and cashflow forecasts"
    ],
    benefits: [
      {
        title: "Eliminate Manual Re-entry",
        description: "Sales teams close deals in CRM and invoices automatically generate in Books with zero human friction."
      },
      {
        title: "Real-Time Stock Valuation",
        description: "Accurate COGS, inventory asset values, and warehouse allocations updated instantly upon sale."
      },
      {
        title: "Unified Reporting Hub",
        description: "Consolidated business analytics linking marketing acquisition costs with true bottom-line gross margins."
      }
    ],
    processSteps: [
      { step: "01", title: "Workflow Mapping", description: "Audit data flows across your CRM, storefront, inventory, and accounting endpoints." },
      { step: "02", title: "Field & Schema Mapping", description: "Standardize data types, custom fields, tax classifications, and trigger events." },
      { step: "03", title: "Integration Testing", description: "Run sandbox test transactions to verify synchronization speed, tax accuracy, and error logs." },
      { step: "04", title: "Production Deployment", description: "Deploy live integrations, set up automated failure alerts, and train cross-functional teams." }
    ],
    faqs: [
      {
        question: "Can Zoho Books connect directly with our Shopify or WooCommerce store?",
        answer: "Yes. We configure automated integrations that pull orders, create customer profiles, calculate GST by state, and update inventory balances in real time."
      },
      {
        question: "How does the Zoho Payroll integration save time?",
        answer: "Salary structures, PF, ESI, and Professional Tax are calculated in Zoho Payroll and automatically pushed to Zoho Books as classified journal entries with one click."
      }
    ]
  },
  {
    slug: "financial-accounting-bookkeeping",
    title: "Financial Accounting & Cloud Bookkeeping",
    shortTitle: "Financial Accounting & Bookkeeping",
    category: "Accounting & Bookkeeping",
    iconName: "FileSpreadsheet",
    orderNumber: "03",
    excerpt: "Meticulous daily bookkeeping, accounts payable/receivable management, and monthly financial statement preparation.",
    heroDescription: "Get audit-ready, real-time books of accounts maintained by experienced accounting professionals. We handle your day-to-day transactions, ledger scrutinies, vendor reconciliations, and monthly financial closing so you always know your exact cash position.",
    targetAudience: [
      "Founders who want to delegate tedious accounting to seasoned financial experts",
      "SMEs requiring accurate monthly P&L, Balance Sheet, and Cash Flow statements",
      "Businesses suffering from delayed reconciliations, missing bills, or unreconciled bank balances",
      "Companies preparing for statutory audits or external funding rounds"
    ],
    deliverables: [
      "Daily ledger transaction recording (purchases, expenses, sales, and asset capitalization)",
      "Accounts Payable (AP) management: vendor bill verification, age analysis, and payment scheduling",
      "Accounts Receivable (AR) tracking: customer aging reports and payment follow-up assistance",
      "Monthly bank, credit card, and payment gateway statement reconciliations",
      "Fixed asset register maintenance with statutory depreciation schedules",
      "Monthly Management Accounts: Balance Sheet, Profit & Loss, and Cash Flow Analysis"
    ],
    benefits: [
      {
        title: "Real-Time Financial Clarity",
        description: "Always know your receivables, payables, and burn rate without waiting weeks for month-end reports."
      },
      {
        title: "Zero Year-End Scramble",
        description: "Continuous monthly reconciliation ensures your year-end books are 100% audit-ready on Day 1."
      },
      {
        title: "Cost Efficient",
        description: "Get the expertise of a full accounting department at a fraction of the overhead of hiring in-house staff."
      }
    ],
    processSteps: [
      { step: "01", title: "Receipts & Invoices Intake", description: "Collect bills, expense receipts, and bank statements digitally via cloud folders or email." },
      { step: "02", title: "Verification & Entry", description: "Verify GSTINs, categorize expenses, match purchase orders, and book entries in Zoho Books." },
      { step: "03", title: "Reconciliation", description: "Cross-examine 2B/2B ITC data, bank statement lines, and vendor ledger statements." },
      { step: "04", title: "Management Reporting", description: "Deliver comprehensive monthly MIS pack highlighting profitability, margins, and working capital." }
    ],
    faqs: [
      {
        question: "How do we send our bills and receipts to your team?",
        answer: "We set up a streamlined digital inbox and secure cloud drive. You can upload scanned invoices, forward emails, or snap pictures from the mobile app."
      },
      {
        question: "Will you coordinate directly with our statutory auditor at year-end?",
        answer: "Yes, our team directly interfaces with your statutory auditor, providing balance confirmations, sample vouchers, ledger extracts, and reconciliations."
      }
    ]
  },
  {
    slug: "financial-advisory-consulting",
    title: "Strategic Financial Advisory & Virtual CFO",
    shortTitle: "Financial Advisory & Consulting",
    category: "Advisory & Strategy",
    iconName: "TrendingUp",
    orderNumber: "04",
    excerpt: "High-level strategic financial leadership, cash flow modeling, capital allocation, and profitability optimization.",
    heroDescription: "Scale your enterprise with strategic financial direction. Our Virtual CFO and financial consulting services provide executive-level guidance on working capital optimization, cost reduction, pricing strategy, and institutional stakeholder reporting.",
    targetAudience: [
      "Companies scaling rapidly needing senior CFO leadership without full-time C-suite overhead",
      "Businesses facing cash flow crunches, margin compression, or working capital leaks",
      "Founders navigating debt financing, bank term loans, or working capital credit lines",
      "Leadership teams planning multi-year expansions and strategic capital investments"
    ],
    deliverables: [
      "Dynamic 13-week rolling cash flow forecasts and liquidity management models",
      "Unit economics analysis, product/service margin scrutiny, and pricing strategy reviews",
      "Working capital cycle compression strategies (DSO, DPO, and inventory turnover)",
      "Bank credit appraisal dossiers (CMA data preparation for CC/OD and term loans)",
      "Executive board presentations and monthly financial advisory consultations",
      "Capex evaluation and ROI payback benchmarking for major asset acquisitions"
    ],
    benefits: [
      {
        title: "Data-Driven Decision Making",
        description: "Transform gut feelings into precise financial metrics to evaluate hires, expansions, and investments."
      },
      {
        title: "Working Capital Optimization",
        description: "Uncover trapped cash in aged receivables and idle inventory to fund growth organically."
      },
      {
        title: "Bank & Investor Readiness",
        description: "Present institutional-grade financial projections and CMA reports that accelerate credit approvals."
      }
    ],
    processSteps: [
      { step: "01", title: "Financial Diagnostic", description: "Scrutinize 3-year historical financials, cost structures, and cash conversion cycles." },
      { step: "02", title: "Strategic Roadmap", description: "Formulate target gross margins, operating ratios, and 12-month capital deployment budgets." },
      { step: "03", title: "Execution & Oversight", description: "Institute weekly liquidity reviews, payment prioritizations, and departmental budget controls." },
      { step: "04", title: "Quarterly Strategy Alignment", description: "Review milestone achievements, variance drivers, and recalibrate forecasts with board members." }
    ],
    faqs: [
      {
        question: "What is the difference between an accountant and a Virtual CFO?",
        answer: "An accountant records historical transactions accurately; a Virtual CFO analyzes those numbers to predict future cash flows, optimize profitability, and guide strategic business expansion."
      },
      {
        question: "Can you help us prepare CMA reports for bank loan sanctions?",
        answer: "Yes. We prepare comprehensive CMA data, debt service coverage ratio (DSCR) calculations, and audited financial projections required by nationalized and private banks."
      }
    ]
  },
  {
    slug: "gst-tds-statutory-compliance",
    title: "GST, TDS & Indian Statutory Compliance",
    shortTitle: "GST, TDS & Statutory Compliance",
    category: "Statutory Compliance",
    iconName: "ShieldCheck",
    orderNumber: "05",
    excerpt: "Timely GST filings, GSTR-2B ITC matching, quarterly TDS returns, tax audit prep, and notice resolution.",
    heroDescription: "Protect your business from punitive penalties and tax department scrutiny. We manage complete end-to-end statutory compliance including GSTR-1, GSTR-3B, annual GSTR-9/9C, TDS deduction compliance, Form 26Q/24Q filings, and Section 16(4) ITC reconciliations.",
    targetAudience: [
      "Businesses losing money due to blocked or unclaimed Input Tax Credit (ITC)",
      "Companies facing compliance backlogs, late fees, or interest liabilities",
      "SMEs needing reliable TDS deduction, deposit, and Form 16/16A issuance support",
      "Enterprises receiving GST scrutiny notices or departmental demand letters"
    ],
    deliverables: [
      "Monthly GSTR-1 (sales) and GSTR-3B (tax liability & ITC) computation and filing",
      "Automated vendor reconciliation matching purchase register with Portal GSTR-2B to maximize ITC",
      "Annual GST Return (GSTR-9) and Reconciliation Statement (GSTR-9C) compilation",
      "Quarterly TDS return computation, challan verification, and e-filing (Forms 24Q, 26Q, 27Q)",
      "Automated generation and distribution of quarterly TDS certificates (Form 16A)",
      "Professional drafting of replies to GST departmental notices and audit summons"
    ],
    benefits: [
      {
        title: "Maximize Every Rupee of ITC",
        description: "Our rigorous 2B reconciliation identifies defaulting vendors early, preventing costly tax credit reversals."
      },
      {
        title: "Zero Late Fees or Interest",
        description: "Strict calendar adherence guarantees all filings occur well ahead of statutory deadlines."
      },
      {
        title: "Expert Representation",
        description: "Experienced tax professionals handle department queries and verification audits on your behalf."
      }
    ],
    processSteps: [
      { step: "01", title: "Monthly Data Cutoff", description: "Aggregate sales invoices, debit/credit notes, and purchase ledgers by the 5th of each month." },
      { step: "02", title: "Reconciliation & Scrutiny", description: "Run automated match against portal GSTR-2B to segregate eligible, ineligible, and missing ITC." },
      { step: "03", title: "Tax Challan & Sign-off", description: "Calculate net cash liability, prepare tax payment challans, and review with client." },
      { step: "04", title: "Timely Submission & Archival", description: "File returns with EVC/DSC, archive confirmation acknowledgments, and maintain statutory compliance dossiers." }
    ],
    faqs: [
      {
        question: "How do you ensure we don't lose Input Tax Credit (ITC)?",
        answer: "We run line-item matching against GSTR-2B each month. Any vendor who failed to upload your invoice is flagged immediately so you can hold payment until they comply."
      },
      {
        question: "Can you help us respond to a GST notice we received?",
        answer: "Yes. We analyze the notice, verify the underlying reconciliation discrepancies, compile legal citations and documentary proof, and draft a robust reply."
      }
    ]
  },
  {
    slug: "regulatory-advisory-fema-rbi-roc",
    title: "Regulatory Compliance Advisory (FEMA, RBI & ROC)",
    shortTitle: "Regulatory Advisory (FEMA/RBI/ROC)",
    category: "Statutory Compliance",
    iconName: "Scale",
    orderNumber: "06",
    excerpt: "MCA/ROC annual filings, director compliance, RBI reporting for foreign investment (FDI/FLA), and FEMA advisory.",
    heroDescription: "Navigate complex regulatory frameworks governing Indian corporate entities. We provide rigorous compliance management under the Companies Act 2013, Ministry of Corporate Affairs (MCA), Reserve Bank of India (RBI) Foreign Exchange Management Act (FEMA), and secretarial mandates.",
    targetAudience: [
      "Private Limited Companies, LLPs, and Section 8 entities requiring annual MCA filings",
      "Companies receiving Foreign Direct Investment (FDI) or making Overseas Direct Investment (ODI)",
      "Startups issuing shares, altering capital, or changing board directors",
      "Businesses seeking entity secretarial hygiene and statutory register compliance"
    ],
    deliverables: [
      "Annual ROC compliance (Form AOC-4 financial statements, MGT-7/7A annual returns)",
      "Director compliance: annual DIR-3 KYC, MBP-1 disclosure, and DIR-8 qualification filings",
      "Foreign Direct Investment reporting on the RBI FIRMS portal (Form FC-GPR / FC-TRS)",
      "Annual Foreign Liabilities and Assets (FLA) return filing with Reserve Bank of India",
      "Statutory Registers maintenance (Register of Members, Directors, Charges, and Share Transfers)",
      "Drafting board resolutions, notice of AGMs, and secretarial documentation"
    ],
    benefits: [
      {
        title: "Protection Against Disqualification",
        description: "Ensure directors remain in good standing with zero risk of DIN deactivation or legal penalties."
      },
      {
        title: "Clean Corporate Record",
        description: "Maintain an impeccable MCA portal record critical for vendor onboarding, bank loans, and investor diligence."
      },
      {
        title: "Cross-Border Regulatory Safety",
        description: "Avoid crippling compounding fees by adhering to strict RBI and FEMA capital reporting timelines."
      }
    ],
    processSteps: [
      { step: "01", title: "Corporate Secretarial Audit", description: "Review statutory registers, past MCA filings, and cap table allocations." },
      { step: "02", title: "Documentation & Resolution", description: "Draft required board resolutions, explanatory statements, and audited financial attachments." },
      { step: "03", title: "Certification & Filing", description: "Affix professional digital signatures (CA/CS) and submit e-forms on the MCA V3 portal." },
      { step: "04", title: "Compliance Repository", description: "Deliver signed master folders containing Challan SRNs, approved forms, and updated registers." }
    ],
    faqs: [
      {
        question: "When is the annual FLA return required to be filed with RBI?",
        answer: "Companies that have received FDI or made ODI must submit the annual FLA return by July 15th every year based on audited or provisional financials."
      },
      {
        question: "What happens if an MCA annual filing like AOC-4 is delayed?",
        answer: "MCA levies severe late fees of Rs. 100 per day per form with no upper cap, along with potential prosecution notices for directors. Our compliance calendar prevents these delays."
      }
    ]
  },
  {
    slug: "risk-internal-control-advisory",
    title: "Risk Management & Internal Financial Controls (IFC)",
    shortTitle: "Risk & Internal Control Advisory",
    category: "Advisory & Strategy",
    iconName: "Lock",
    orderNumber: "07",
    excerpt: "Identify operational vulnerabilities, prevent employee fraud, streamline authorization matrices, and design robust SOPs.",
    heroDescription: "Safeguard your enterprise assets and institutional reputation. We evaluate your existing operating procedures, detect revenue leaks, segregation-of-duties risks, and implement Internal Financial Controls (IFC) that ensure process integrity as your business scales.",
    targetAudience: [
      "Companies expanding transaction volumes who need institutional controls beyond founder oversight",
      "Businesses that have experienced billing discrepancies, inventory shrinkage, or payment errors",
      "Enterprises subject to statutory internal financial controls reporting under Companies Act",
      "Firms preparing for external audits or private equity investment"
    ],
    deliverables: [
      "Risk and Control Matrix (RCM) documentation across Procure-to-Pay, Order-to-Cash, and Hire-to-Retire",
      "Design and implementation of Standard Operating Procedures (SOPs) for financial functions",
      "Segregation of Duties (SoD) review and ERP user permission restructuring",
      "Vendor verification and procurement authorization approval matrix creation",
      "Inventory physical verification protocols and shrinkage investigation frameworks",
      "Fraud risk assessment and periodic compliance monitoring audits"
    ],
    benefits: [
      {
        title: "Prevent Revenue & Asset Leakage",
        description: "Institute multi-level checks that stop unauthorized payments, unbilled shipments, and duplicate vendor claims."
      },
      {
        title: "Smooth Operational Scale",
        description: "Empower managers to operate autonomously within approved SOP boundaries without founder micromanagement."
      },
      {
        title: "Clean Audit Sign-Off",
        description: "Fulfill statutory requirements regarding adequacy of Internal Financial Controls with documented test evidence."
      }
    ],
    processSteps: [
      { step: "01", title: "Process Walkthroughs", description: "Interview key department heads and map existing operational and financial workflows." },
      { step: "02", title: "Vulnerability Assessment", description: "Identify control gaps, lack of dual approvals, and potential points of fraud or error." },
      { step: "03", title: "Control Design & SOPs", description: "Formulate practical approval hierarchies, checklists, and authorization thresholds." },
      { step: "04", title: "Testing & Monitoring", description: "Perform sample walkthrough tests to confirm operational compliance with newly established controls." }
    ],
    faqs: [
      {
        question: "Why do growing SMEs need internal controls?",
        answer: "As founders stop inspecting every single payment or invoice personally, formal internal controls ensure that company policies, pricing rules, and payment authorizations are strictly enforced."
      },
      {
        question: "Can internal controls be configured directly within Zoho Books?",
        answer: "Yes! We configure role-based permissions, multi-level transaction approval rules, and audit trail logs directly inside your Zoho Books and CRM environments."
      }
    ]
  },
  {
    slug: "audit-assurance-support",
    title: "Statutory & Tax Audit Readiness & Assurance Support",
    shortTitle: "Audit & Assurance Support",
    category: "Accounting & Bookkeeping",
    iconName: "FileCheck",
    orderNumber: "08",
    excerpt: "End-to-end audit readiness, schedule preparation, auditor query management, and financial statement disclosures.",
    heroDescription: "Eliminate audit stress and prolonged review cycles. We act as your internal audit defense team—reconciling ledgers, preparing complete audit schedules, compiling supporting documentation, and interfacing directly with external statutory auditors for swift sign-offs.",
    targetAudience: [
      "Companies facing statutory audit under Companies Act, 2013 or Tax Audit under Income Tax Sec 44AB",
      "Finance teams overwhelmed by auditor PBC (Provided By Client) request lists",
      "Enterprises that experienced previous audit adjustments, qualifications, or delays",
      "Businesses seeking an independent review before submitting numbers to external auditors"
    ],
    deliverables: [
      "Comprehensive Audit Schedules: Fixed assets, debtor/creditor aging, loans, and statutory dues",
      "Balance confirmation letter drafting and independent vendor/customer circularization management",
      "Reconciliation between books of accounts, GSTR-9C, Form 26AS, AIS, and TIS",
      "Preparation of Schedule III compliant Balance Sheet, Profit & Loss, and Note Disclosures",
      "Direct technical liaison with statutory audit teams to address queries and sampling requirements",
      "Assessment of CARO 2020 reporting clauses and internal documentation readiness"
    ],
    benefits: [
      {
        title: "Fast-Track Audit Completion",
        description: "Pre-assembled audit files reduce external auditor review cycles from months down to a few weeks."
      },
      {
        title: "Zero Surprises or Qualifications",
        description: "Identify and resolve potential ledger discrepancies before external auditors begin their formal testing."
      },
      {
        title: "Unburden Your Internal Team",
        description: "Let our specialists handle sample pulls and technical audit queries while your core team focuses on business growth."
      }
    ],
    processSteps: [
      { step: "01", title: "Pre-Audit Scrutiny", description: "Review draft trial balance, opening balances, and ledger classifications 30 days prior to audit." },
      { step: "02", title: "PBC File Preparation", description: "Build working lead sheets, bank reconciliations, and supporting voucher document bundles." },
      { step: "03", title: "Auditor Facilitation", description: "Coordinate with the external audit team, clarify testing queries, and resolve technical matters." },
      { step: "04", title: "Final Disclosure Review", description: "Review final auditor notes, management representation letters, and assist with board sign-off." }
    ],
    faqs: [
      {
        question: "Do you replace our statutory auditor?",
        answer: "No. Statutory auditors must remain independent third parties. We act as your expert internal accounting partner who prepares the books, audit schedules, and reconciliations for the auditor to inspect."
      },
      {
        question: "When should we begin audit preparation?",
        answer: "Ideally within the first two weeks following financial year close (April), allowing you to complete your audit well ahead of September statutory tax filing deadlines."
      }
    ]
  },
  {
    slug: "due-diligence-transaction-support",
    title: "Financial Due Diligence & M&A Transaction Support",
    shortTitle: "Due Diligence & Transaction Support",
    category: "Advisory & Strategy",
    iconName: "Briefcase",
    orderNumber: "09",
    excerpt: "Sell-side diligence readiness, buy-side quality of earnings (QofE), data room setup, and deal structuring.",
    heroDescription: "Secure your valuation and negotiate transactions with total confidence. We deliver rigorous buy-side and sell-side financial due diligence, Quality of Earnings (QofE) analyses, working capital target benchmarking, and virtual data room (VDR) structuring for investments and acquisitions.",
    targetAudience: [
      "Founders preparing for venture capital, private equity, or strategic acquisition diligence",
      "Investors and acquirers evaluating target company financial health and hidden liabilities",
      "Enterprises negotiating mergers, joint ventures, or business asset sales",
      "Companies requiring normalized EBITDA calculations and debt-like item identification"
    ],
    deliverables: [
      "Quality of Earnings (QofE) report: normalized EBITDA, non-recurring expenses, and revenue recognition scrutiny",
      "Quality of Net Assets review: working capital peg analysis and unrecorded balance sheet liabilities",
      "Virtual Data Room (VDR) curation: structured folders, contracts, tax filings, and cap table data",
      "Tax diligence review: historical GST, Income Tax, TDS, PF/ESI exposure evaluation",
      "Definitive agreement financial advisory: review of representations, warranties, and closing covenants",
      "Post-acquisition financial integration roadmap and opening balance sheet finalization"
    ],
    benefits: [
      {
        title: "Defend Your Company Valuation",
        description: "Sell-side prep uncovers red flags early, eliminating buyer price-chipping during diligence."
      },
      {
        title: "Identify Hidden Deal Risks",
        description: "Buy-side scrutiny reveals undisclosed tax liabilities, customer concentration, and inflated earnings."
      },
      {
        title: "Accelerate Deal Closing",
        description: "A meticulously organized data room satisfies investor legal and financial teams in half the time."
      }
    ],
    processSteps: [
      { step: "01", title: "Scope & Request List", description: "Define transaction parameters and issue comprehensive financial/tax diligence request questionnaires." },
      { step: "02", title: "Deep-Dive Scrutiny", description: "Analyze 3-year historical audited books, customer cohorts, unit economics, and tax returns." },
      { step: "03", title: "EBITDA Normalization", description: "Isolate owner perks, one-off legal fees, and pro-forma adjustments to uncover true operating earnings." },
      { step: "04", title: "Diligence Report & Deal Support", description: "Deliver executive red-flag report, advise on indemnity escrow clauses, and assist closing adjustments." }
    ],
    faqs: [
      {
        question: "What is a Quality of Earnings (QofE) analysis?",
        answer: "A QofE analysis looks beneath the reported net profit to determine whether earnings are recurring, sustainable, and cash-backed, filtering out one-time windfalls or artificial adjustments."
      },
      {
        question: "How long does a typical financial due diligence exercise take?",
        answer: "Depending on target transaction size and data cleanliness, a standard diligence engagement takes 2 to 4 weeks from data room access to final report delivery."
      }
    ]
  },
  {
    slug: "startup-growth-advisory",
    title: "Startup Advisory, Cap Table & Investor Readiness",
    shortTitle: "Startup & Growth Advisory",
    category: "Advisory & Strategy",
    iconName: "Rocket",
    orderNumber: "10",
    excerpt: "Entity structuring, DPIIT startup registration, cap table modeling, financial models, and compliance foundations.",
    heroDescription: "Build your venture on an unshakeable financial and regulatory foundation. From DPIIT recognition and Section 56 angel tax exemptions to dynamic multi-year financial modeling, ESOP pool structuring, and investor reporting—we empower founders to scale without administrative friction.",
    targetAudience: [
      "Early-stage to Series A founders building high-growth tech or consumer brands",
      "Startups applying for Startup India (DPIIT) certification and Section 80-IAC tax holidays",
      "Founders raising external capital who need professional 5-year financial projection models",
      "Ventures seeking automated cloud accounting and payroll infrastructure from Day 1"
    ],
    deliverables: [
      "Optimal corporate entity incorporation advice and capital structure setup",
      "Startup India (DPIIT) recognition and Section 80-IAC 3-year income tax exemption filings",
      "5-year dynamic financial model with operational drivers, CAC/LTV, and hiring roadmap",
      "Cap table architecture, convertible note / SAFE / CCPS tracking, and ESOP pool planning",
      "Automated financial stack setup: Zoho Books, Zoho Payroll, and bank payment gateways",
      "Standardized monthly investor reporting templates (Burn rate, Runway, MRR/ARR metrics)"
    ],
    benefits: [
      {
        title: "Founder Focus",
        description: "Focus 100% on product, hiring, and customer acquisition while we manage company compliance."
      },
      {
        title: "Tax Exemption Access",
        description: "Leverage government startup incentives, angel tax exemptions, and R&D benefits effectively."
      },
      {
        title: "Pitch-Ready Financials",
        description: "Present institutional-grade financial projection spreadsheets that venture capitalists respect."
      }
    ],
    processSteps: [
      { step: "01", title: "Foundational Assessment", description: "Analyze business model, equity split, IP ownership, and projected runway." },
      { step: "02", title: "Statutory Setup", description: "Secure DPIIT recognition, GST registrations, MSME/Udyam, and professional tax certifications." },
      { step: "03", title: "Financial Model & Tech Stack", description: "Build dynamic operational financial model and configure integrated Zoho cloud stack." },
      { step: "04", title: "Growth & Board Governance", description: "Establish monthly investor update cadence, cash burn metrics, and quarterly board compliance." }
    ],
    faqs: [
      {
        question: "What are the benefits of getting DPIIT Startup Recognition?",
        answer: "DPIIT recognition grants eligibility for Section 80-IAC income tax exemptions, exemption from Angel Tax under Section 56(2)(viib), self-certification under labor/environmental laws, and fast-track patent review."
      },
      {
        question: "Can you help design our employee stock option plan (ESOP)?",
        answer: "Yes. We help design ESOP vesting schedules, option pool allocation limits, exercise pricing guidelines, and tax withholding compliance under Indian tax laws."
      }
    ]
  },
  {
    slug: "budgeting-financial-planning",
    title: "Budgeting, MIS Reporting & Financial Planning (FP&A)",
    shortTitle: "Budgeting & Financial Planning",
    category: "Advisory & Strategy",
    iconName: "BarChart3",
    orderNumber: "11",
    excerpt: "Annual departmental operating budgets, variance analysis, executive MIS reporting packs, and scenario models.",
    heroDescription: "Control expenses, predict cash flow requirements, and hold teams accountable to performance goals. Our Financial Planning & Analysis (FP&A) services translate strategic company goals into actionable departmental budgets, monthly variance scorecards, and predictive scenario simulations.",
    targetAudience: [
      "Companies exceeding budgets without clear visibility into where cash leaks occur",
      "Executive leadership needing timely, boardroom-ready monthly Management Information Systems (MIS)",
      "Department heads requiring budget vs. actual variance reports to guide spending",
      "Enterprises navigating seasonal revenue cycles or major capital expenditure programs"
    ],
    deliverables: [
      "Annual operating budget (AOP) creation aligned with revenue targets and headcount expansion",
      "Departmental expense allocation and budget threshold controls within Zoho Books",
      "Monthly Executive MIS Pack: Revenue breakdown, gross margin trends, OPEX variance, and net cashflow",
      "Budget vs. Actual variance analysis highlighting actionable efficiency recommendations",
      "Scenario modeling and sensitivity analyses (Best Case, Base Case, Downside Cash Survival)",
      "Customer, project, and product profitability dashboards with automated variance triggers"
    ],
    benefits: [
      {
        title: "Proactive Expense Discipline",
        description: "Stop unauthorized expense creep by requiring department heads to operate within pre-approved limits."
      },
      {
        title: "Predictable Cash Runway",
        description: "Know your upcoming tax liabilities, payroll outlays, and working capital needs months in advance."
      },
      {
        title: "Clarity on Profit Drivers",
        description: "Identify precisely which customer segments, service lines, or branches generate your highest returns."
      }
    ],
    processSteps: [
      { step: "01", title: "Historical Baseline", description: "Scrutinize past 24 months of revenue, COGS, and overhead line items to establish realistic cost benchmarks." },
      { step: "02", title: "Annual Budget Workshop", description: "Collaborate with executive management to formulate revenue targets, headcount plans, and marketing budgets." },
      { step: "03", title: "System Configuration", description: "Embed approved budget lines into Zoho Books reporting classes for automated tracking." },
      { step: "04", title: "Monthly MIS & Variance Reviews", description: "Present monthly financial dashboards, explain material variances, and implement course corrections." }
    ],
    faqs: [
      {
        question: "When should a company prepare its Annual Operating Plan (AOP)?",
        answer: "We recommend commencing the budgeting process in January or February so your annual operating budget is finalized and approved well before the new financial year begins on April 1st."
      },
      {
        question: "What information is included in your monthly MIS report?",
        answer: "Our executive MIS pack includes a summarized P&L, balance sheet summary, cash flow statement, 13-week cash forecast, departmental budget vs. actual analysis, aging of receivables/payables, and key operational KPIs."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
