export interface BlogPost {
  slug: string;
  title: string;
  category: "GST & Tax" | "Zoho Tips" | "Startup Finance" | "Compliance";
  readTime: string;
  publishDate: string;
  excerpt: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tally-to-zoho-books-migration-checklist",
    title: "The Ultimate Checklist: Migrating from Tally Prime to Zoho Books Without Data Loss",
    category: "Zoho Tips",
    readTime: "6 min read",
    publishDate: "March 2026",
    excerpt: "Step-by-step blueprint on migrating opening balances, item masters, vendor ledgers, and prior year comparatives with zero business downtime.",
    content: [
      "Desktop accounting systems like Tally Prime served Indian businesses well for decades. However, the demands of real-time GST e-invoicing, multi-location collaboration, mobile expense approvals, and automated bank reconciliation make cloud accounting in Zoho Books the standard choice for modern enterprises.",
      "Step 1: Audit & Cleanse Your Current Chart of Accounts. Before pulling data from Tally, review inactive customer accounts, duplicate vendor ledgers, and obsolete inventory SKUs. Migrating dirty data into a new system defeats the purpose of starting fresh.",
      "Step 2: Balance Sheet & Trial Balance Freeze. Choose a clean cutoff date—ideally the end of a financial month or quarter. Finalize all purchase bills, debit notes, and bank reconciliations up to that date so your closing trial balance is immutable.",
      "Step 3: Master Data Export and Field Mapping. Export your customer master, supplier master, chart of accounts, and inventory items with their respective HSN/SAC codes. Map these into Zoho Books' standard CSV templates.",
      "Step 4: Opening Balance Cutover. Post opening trial balance vouchers in Zoho Books. Verify that the Trial Balance in Zoho Books matches Tally down to the exact rupee.",
      "Step 5: Bank Feeds & Automated Rule Setup. Link your corporate bank accounts directly inside Zoho Books to trigger automated rule-based reconciliations.",
      "As official Zoho Implementation Partners (Partner ID: PI0626000), Stratomexa handles this entire transition seamlessly, ensuring zero disruption to your daily operations."
    ]
  },
  {
    slug: "avoiding-itc-reversals-under-gst-section-16-4",
    title: "How to Avoid Crippling Input Tax Credit (ITC) Reversals Under Section 16(4)",
    category: "GST & Tax",
    readTime: "5 min read",
    publishDate: "February 2026",
    excerpt: "Crucial strategies for Indian SMEs to track defaulting suppliers, match GSTR-2B monthly, and claim every rupee of legitimate tax credit.",
    content: [
      "Input Tax Credit (ITC) is the lifeblood of working capital in the GST regime. However, under Section 16(4) of the CGST Act, taxpayers cannot claim ITC for a financial year past the prescribed deadline (30th November of the subsequent fiscal year).",
      "The primary reason businesses lose ITC is supplier non-compliance. When your vendor issues you an invoice but fails to upload it in their GSTR-1, the credit never reflects in your auto-populated GSTR-2B.",
      "If you claim ITC in your GSTR-3B that does not match GSTR-2B, the GST portal triggers automated notices (Form DRC-01B/DRC-01C), demanding interest penalties up to 18% per annum.",
      "Solution: Institute a 'Payment Against 2B Reflection' Policy. Add a clause in purchase orders stating that the tax component of the invoice will only be released after the invoice appears on the GST portal in your GSTR-2B statement.",
      "Automated Line-Item Reconciliation: Instead of manual eyeball checks, use Zoho Books' automated GST module to run instant variances between your purchase register and the government portal.",
      "Stratomexa provides monthly end-to-end ITC reconciliation, ensuring maximum credit claims while maintaining 100% statutory hygiene."
    ]
  },
  {
    slug: "essential-compliance-calendar-private-limited-india",
    title: "The Comprehensive Compliance Calendar for Private Limited Companies in India",
    category: "Compliance",
    readTime: "8 min read",
    publishDate: "January 2026",
    excerpt: "Never miss an MCA, GST, TDS, or Advance Tax deadline. A complete breakdown of monthly, quarterly, and annual statutory mandates.",
    content: [
      "Operating a Private Limited Company in India brings immense credibility and limited liability, but also requires disciplined compliance under the Companies Act 2013, Income Tax Act 1961, and GST laws.",
      "Monthly Filings: GSTR-1 (Outward supplies) by the 11th; GSTR-3B (Summary return & tax payment) by the 20th; TDS deposit via Challan ITNS 281 by the 7th.",
      "Quarterly Filings: Advance Tax installments on June 15, Sept 15, Dec 15, and March 15; Quarterly TDS returns (Form 24Q for salaries, Form 26Q for vendor payments) by the end of the following month.",
      "Annual ROC Filings: Form AOC-4 (Financial statements) within 30 days of AGM; Form MGT-7/7A (Annual return) within 60 days of AGM; DIR-3 KYC for all directors by September 30th.",
      "Late fees under the MCA V3 portal can compound quickly at ₹100 per day per form with no cap. Proactive calendar management is essential.",
      "Stratomexa acts as your single compliance officer, managing your GST, TDS, Income Tax, and ROC requirements under one coordinated roof."
    ]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((b) => b.slug === slug);
}
