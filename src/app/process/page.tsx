import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  PhoneCall,
  Search,
  Settings,
  Headphones,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work | 4-Step Structured Process",
  description:
    "Discover Stratomexa's 4-step onboarding and execution methodology: Free Consultation, System Assessment, Implementation, and Continuous Advisory Support.",
};

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Free 15-Minute Consultation",
      tagline: "Understanding Your Unique Business Architecture",
      icon: PhoneCall,
      description:
        "We begin with a focused discovery conversation to understand your business model, current software stack, transaction volumes, and compliance pain points.",
      deliverables: [
        "Assessment of current accounting system (Tally, Excel, QuickBooks)",
        "Identification of compliance gaps (pending GST/TDS filings, unreconciled ITC)",
        "Review of internal software integration needs (CRM, e-commerce, banking)",
        "Clear scope of work definition and transparent engagement proposal",
      ],
      timeframe: "Day 1",
    },
    {
      number: "02",
      title: "Comprehensive Financial & Tech Assessment",
      tagline: "Scrutinizing Ledgers & Mapping Automated Workflows",
      icon: Search,
      description:
        "Our senior consultants conduct a deep audit of your chart of accounts, tax returns, and operational procedures to design the ideal financial infrastructure.",
      deliverables: [
        "Historical ledger scrutiny and trial balance reconciliation",
        "Clean-up of customer/vendor masters and duplicate items",
        "Custom Chart of Accounts (COA) blueprint tailored to your industry",
        "Definition of role-based user permissions and approval hierarchies",
      ],
      timeframe: "Days 2 – 5",
    },
    {
      number: "03",
      title: "Setup, Historical Migration & Staff Training",
      tagline: "Flawless Execution with Zero Operational Downtime",
      icon: Settings,
      description:
        "As certified Zoho Implementation Partners, we configure your modules, migrate historical balances, link bank feeds, and train your team hands-on.",
      deliverables: [
        "Complete Zoho Books organization setup with custom invoice templates",
        "Zero-loss migration of opening balances, fixed assets, and ledgers",
        "Automated GST e-invoicing and direct bank feed integration",
        "Interactive department-specific staff training with recorded modules",
      ],
      timeframe: "Days 6 – 14",
    },
    {
      number: "04",
      title: "Ongoing Accounting, Compliance & Virtual CFO",
      tagline: "Continuous Peace of Mind & Strategic Scalability",
      icon: Headphones,
      description:
        "Once live, our team manages day-to-day bookkeeping, monthly GST/TDS filings, bank reconciliations, and executive MIS reporting packs.",
      deliverables: [
        "Daily/weekly transaction categorization and ledger maintenance",
        "Monthly GSTR-1, GSTR-3B filings with forensic 2B ITC matching",
        "Quarterly TDS return computation and Form 16A issuance",
        "Monthly Executive MIS pack with cashflow forecasts and CFO advisory",
      ],
      timeframe: "Ongoing Monthly Retainer",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Proven Framework
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our 4-Step Execution Framework
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            We eliminate accounting chaos and statutory risk through a structured, predictable onboarding roadmap.
          </p>
        </div>

        {/* Steps Stack */}
        <div className="space-y-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="saas-card p-8 sm:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-lg shadow-xs shrink-0">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-bold block">
                        Estimated: {step.timeframe}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                        {step.title}
                      </h2>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {step.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                        Key Milestones & Deliverables:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {step.deliverables.map((d, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-800 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto space-y-4 shadow-xs">
          <h3 className="text-2xl font-bold text-slate-900">
            Ready to Begin Step 1 with a Free 15-Minute Call?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            There is zero obligation. We&apos;ll evaluate your current accounting pain points and present an actionable cutover plan.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact/"
              className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-colors"
            >
              Book 15 Mins Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
