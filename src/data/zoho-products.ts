export interface ZohoProduct {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  signupUrl: string;
  logoImg: string;
  badge?: string;
  featured?: boolean;
  features: string[];
}

export const zohoProducts: ZohoProduct[] = [
  {
    id: "zoho-books",
    name: "Zoho Books",
    category: "Accounting & Finance",
    shortDesc: "GST-compliant cloud accounting, e-invoicing & automated reconciliation.",
    fullDesc: "India's leading GST-compliant cloud accounting software. Automate core financial tasks, generate e-invoices, manage receivables/payables, and gain real-time visibility into cash flow.",
    signupUrl: "https://store.zoho.in/ResellerCustomerSignUp.do?id=zkms014670000000080070532d5603fbfd5bbe22680ead8279b0d",
    logoImg: "/images/logos/zoho-books.png",
    badge: "Most Popular",
    featured: true,
    features: [
      "Automated GST e-invoicing & e-way bills",
      "Direct bank feeds & rule-based reconciliation",
      "End-to-end Accounts Receivable & Payable tracking",
      "Inventory tracking and multi-currency billing",
      "GSTR-1, 2B matching & GSTR-3B auto generation"
    ]
  },
  {
    id: "zoho-billing",
    name: "Zoho Billing",
    category: "Subscriptions & Invoicing",
    shortDesc: "Recurring billing, meter-based subscriptions & dunning management.",
    fullDesc: "The ultimate recurring billing platform for SaaS, subscription boxes, and service providers. Automate contract renewals, proration, dunning management, and complex usage-based pricing models.",
    signupUrl: "https://store.zoho.in/ResellerCustomerSignUp.do?id=zkms01467000000008007c82f98dd4711d9f2fa4383edcd91f8a5",
    logoImg: "/images/logos/zoho-billing.png",
    featured: true,
    features: [
      "Multi-tier, usage-based & tiered pricing management",
      "Automated card charge retries and dunning emails",
      "Proration calculations for mid-cycle plan upgrades",
      "Customer self-service portal for plan management",
      "Real-time SaaS metrics: MRR, ARR, Churn & LTV"
    ]
  },
  {
    id: "zoho-payroll",
    name: "Zoho Payroll",
    category: "Payroll & HR",
    shortDesc: "Automated, 100% compliant Indian payroll with PF, ESI, PT & TDS.",
    fullDesc: "Designed specifically for Indian businesses. Handles salary revisions, statutory deductions (PF, ESI, PT, TDS), employee reimbursements, and self-service portals with effortless ease.",
    signupUrl: "https://store.zoho.in/ResellerCustomerSignUp.do?id=zkms01467000000008007f47b92afe3f09a4c18db67484e663d8b",
    logoImg: "/images/logos/zoho-payroll.png",
    badge: "Essential for Teams",
    featured: true,
    features: [
      "Automated PF, ESI, Professional Tax & TDS calculation",
      "One-click direct salary disbursal with partner banks",
      "Employee self-service portal for IT declarations & payslips",
      "Seamless single-click journal sync into Zoho Books",
      "Quarterly Form 24Q preparation and salary revision history"
    ]
  },
  {
    id: "zoho-inventory",
    name: "Zoho Inventory",
    category: "Stock & Order Management",
    shortDesc: "Multi-channel inventory management, warehouse tracking & fulfillment.",
    fullDesc: "Track stock levels, fulfill customer orders across Amazon, Flipkart, and offline stores, and manage multi-location warehouses with automated reorder triggers.",
    signupUrl: "https://store.zoho.in/ResellerCustomerSignUp.do?id=zkms01467000000008007fd2eec793e113cbdccfc073a1c1cdc51",
    logoImg: "/images/logos/zoho-inventory.png",
    features: [
      "Multi-warehouse inventory tracking",
      "Barcode scanning and batch/expiry tracking",
      "Sync across Amazon, Shopify, and offline retail",
      "Automated purchase orders & vendor bills"
    ]
  },
  {
    id: "zoho-expense",
    name: "Zoho Expense",
    category: "Expense Management",
    shortDesc: "Automated expense reporting, corporate card feeds & travel approval.",
    fullDesc: "Effortless receipt scanning, automated expense report creation, multi-level travel approvals, and automatic ledger entries in Zoho Books.",
    signupUrl: "https://store.zoho.in/ResellerCustomerSignUp.do?id=zkms014670000000080079540262f1311d17a5ad53ab0df5d717e",
    logoImg: "/images/logos/zoho-expense.png",
    features: [
      "AutoScan receipts via mobile app",
      "Corporate card automatic reconciliation",
      "Multi-level approval workflows",
      "Direct reimbursement management"
    ]
  },
  {
    id: "zoho-financeplus",
    name: "Zoho FinancePlus",
    category: "Integrated Finance Suite",
    shortDesc: "Complete back-office suite combining Books, Billing, Inventory & Expense.",
    fullDesc: "An all-in-one financial operating system. Unify your accounting, subscription billing, inventory control, and employee expense operations under a unified interface.",
    signupUrl: "https://store.zoho.in/ResellerCustomerSignUp.do?id=zkms014670000000080074bc2e2c02be51bfa61082b2181d22929",
    logoImg: "/images/logos/zoho-financeplus.png",
    features: [
      "Books, Billing, Inventory & Expense in one license",
      "Unified customer & vendor records",
      "Cross-app automation & reports",
      "Complete back-office visibility"
    ]
  },
  {
    id: "zoho-checkout",
    name: "Zoho Checkout",
    category: "Online Payments",
    shortDesc: "Custom branded online payment pages for instant customer collections.",
    fullDesc: "Create beautiful, secure, mobile-responsive payment pages in minutes without writing code. Accept credit/debit cards, UPI, net banking, and international payments effortlessly.",
    signupUrl: "https://store.zoho.in/ResellerCustomerSignUp.do?id=zkms01467000000008007de16b1ec3f31abdc0f1d1b9b7614d07a",
    logoImg: "/images/logos/zoho-checkout.png",
    features: [
      "Custom branded payment pages with your logo & colors",
      "Instant integration with Razorpay, Stripe & PayPal",
      "Embedded checkout widgets for existing websites",
      "Zero coding required to start accepting customer funds",
      "Automated payment receipts and instant notification webhooks"
    ]
  },
  {
    id: "zoho-commerce",
    name: "Zoho Commerce",
    category: "eCommerce Platform",
    shortDesc: "All-in-one e-commerce website builder with integrated catalog & orders.",
    fullDesc: "Everything you need to launch, run, and grow your digital storefront. Includes drag-and-drop website templates, payment gateway connectors, shipping integrations, and native inventory sync.",
    signupUrl: "https://store.zoho.in/ResellerCustomerSignUp.do?id=zkms01467000000008007891935f3355552039b6282315215f1ad",
    logoImg: "/images/logos/zoho-commerce.png",
    features: [
      "Intuitive drag-and-drop store builder with responsive themes",
      "Built-in abandoned cart recovery and coupon engine",
      "Integrated domestic shipping carriers and live tracking",
      "Automated inventory decrement and order sync to Zoho Books",
      "SEO tools, custom domain setup, and product variants"
    ]
  },
  {
    id: "all-zoho-products",
    name: "All Zoho Products",
    category: "Full Enterprise Suite",
    shortDesc: "Browse the full suite of 45+ business apps including Zoho One.",
    fullDesc: "Run your entire organization on a single unified operating system. Explore Zoho CRM, Zoho Desk, Zoho People, Zoho Analytics, and Zoho One under official certified partner onboarding.",
    signupUrl: "https://store.zoho.in/ResellerCustomerSignUp.do?id=zkms01467000000008007a0431245f658fd970f4fa32243cd3dc23302ab23998c305f4e43174b119fb47f",
    logoImg: "/images/logos/all-zoho-products.png",
    badge: "Complete Operating System",
    featured: true,
    features: [
      "Single subscription to 45+ enterprise-grade business apps",
      "Zoho CRM for complete lead-to-deal conversion pipelines",
      "Zoho Analytics for cross-department business intelligence",
      "Centralized administrative control and single sign-on (SSO)",
      "Free dedicated partner onboarding guidance from Stratomexa"
    ]
  }
];
