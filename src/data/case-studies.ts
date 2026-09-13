export interface CaseStudy {
  slug: string;
  title: string;
  clientIndustry: string;
  location: string;
  serviceProvided: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  testimonial?: {
    quote: string;
    author: string;
    designation: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "d2c-retailer-tally-to-zoho-migration",
    title: "How an Omnichannel D2C Brand Migrated from Tally to Zoho Books & Accelerated Monthly Close by 65%",
    clientIndustry: "Consumer Retail & E-Commerce",
    location: "Hyderabad, Telangana",
    serviceProvided: "Zoho Books Setup, App Integration & Accounting",
    summary: "Stratomexa executed a zero-loss migration of 4 years of historical data from Tally Prime to Zoho Books, integrated Shopify and Razorpay, and established an automated GST e-invoicing workflow.",
    challenge: "The client operated 2 flagship retail stores and an e-commerce storefront generating 4,000+ monthly orders. Accounting was managed on desktop Tally, resulting in delayed inventory valuations, 3-week delays in monthly closing, and over 12 hours spent each month manually creating GST e-invoices.",
    solution: "Stratomexa audited their ledger chart, cleansed 18,000 SKUs, and configured Zoho Books with real-time Shopify order synchronization. We instituted automated Razorpay settlement reconciliation and auto e-invoicing directly through the IRP portal.",
    results: [
      { metric: "65%", label: "Faster Monthly Financial Close" },
      { metric: "100%", label: "Zero Discrepancy in Bank Reconciliations" },
      { metric: "14 hrs/mo", label: "Saved in Manual GST e-Invoicing" }
    ],
    testimonial: {
      quote: "Stratomexa transformed our messy desktop spreadsheets into a sleek, automated finance machine. We now close books in 3 days instead of 3 weeks.",
      author: "K. Venkatesh",
      designation: "Managing Director"
    }
  },
  {
    slug: "saas-startup-due-diligence-and-fpna",
    title: "Pre-Series A Financial Due Diligence & Clean Audit Sign-off for a B2B SaaS Enterprise",
    clientIndustry: "Enterprise Software (B2B SaaS)",
    location: "Bengaluru / Hyderabad",
    serviceProvided: "Due Diligence, Virtual CFO & Statutory Audit Prep",
    summary: "Prepared complete sell-side Virtual Data Room (VDR), normalized recurring revenue schedules, and secured an unqualified statutory audit report ahead of institutional funding.",
    challenge: "A fast-growing SaaS firm had unbilled revenue recognitions, messy capitalization of software development costs, and unresolved TDS deduction discrepancies that threatened to stall their $1.8M funding round.",
    solution: "Stratomexa's advisory team restructured the revenue recognition policies to adhere to Ind AS/AS standards, compiled audit-ready lead schedules, reconciled 3 years of 26AS/AIS statements, and interfaced directly with the external Big 4 due diligence team.",
    results: [
      { metric: "$1.8M", label: "Pre-Series A Round Successfully Closed" },
      { metric: "Zero", label: "Audit Qualifications or Material Discrepancies" },
      { metric: "10 Days", label: "Diligence Turnaround Time" }
    ],
    testimonial: {
      quote: "The diligence team from the VC fund was blown away by the clarity of our data room and audit schedules. Stratomexa is an indispensable strategic finance partner.",
      author: "Priya Sharma",
      designation: "Co-Founder & COO"
    }
  },
  {
    slug: "manufacturing-sme-itc-recovery",
    title: "Recovering ₹18.4 Lakhs in Blocked Input Tax Credit (ITC) for an Engineering Manufacturer",
    clientIndustry: "Precision Engineering & Manufacturing",
    location: "Secunderabad, Telangana",
    serviceProvided: "GST & Statutory Compliance Advisory",
    summary: "Conducted forensic line-item GSTR-2B reconciliation across 300+ vendor accounts, identifying unclaimed ITC and eliminating severe departmental notice risks.",
    challenge: "The company was routinely reversing Input Tax Credit due to vendor non-compliance under Section 16(4) of the CGST Act, hemorrhaging working capital while struggling to track which suppliers had defaulted on filing GSTR-1.",
    solution: "Stratomexa deployed automated matching scripts linking Zoho Books purchase registers with portal GSTR-2B. We established a strict vendor payment clearance workflow, releasing payments only after active portal verification of uploaded tax invoices.",
    results: [
      { metric: "₹18.4L", label: "Eligible Input Tax Credit Recovered" },
      { metric: "0", label: "Departmental Notices Pending" },
      { metric: "100%", label: "Timely GSTR-3B Filings" }
    ]
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
