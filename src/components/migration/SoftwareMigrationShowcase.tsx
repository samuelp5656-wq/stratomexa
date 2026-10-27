"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/assets";
import {
  TallyPrimeLogo,
  ExcelLogo,
  QuickBooksLogo,
  SapLogo,
} from "@/components/logos/BrandLogos";

import {
  ArrowRight,
  CheckCircle2,
  Database,
  Layers,
  RefreshCw,
  ShieldCheck,
  Zap,
  Clock,
  Sparkles,
  ArrowRightCircle,
} from "lucide-react";

interface SoftwareSource {
  id: string;
  name: string;
  category: string;
  description: string;
  logo: React.ReactNode;
  migrationTime: string;
  itemsMigrated: string[];
}

export default function SoftwareMigrationShowcase() {
  const sources: SoftwareSource[] = [
    {
      id: "tally",
      name: "Tally Prime / ERP 9",
      category: "Desktop Accounting",
      description: "Complete extraction of historical financial years, multiple companies, custom vouchers, and inventory ledgers.",
      logo: <TallyPrimeLogo size={48} />,
      migrationTime: "7 - 10 Business Days",
      itemsMigrated: [
        "Full Chart of Accounts & Sub-ledgers",
        "Multi-year Trial Balance Comparatives",
        "Customer & Vendor Master Ledgers with GSTIN",
        "Inventory Items, Batches & HSN/SAC Codes",
        "Unpaid Bills & Pending Customer Receivables",
      ],
    },
    {
      id: "excel",
      name: "Excel Spreadsheets / CSV",
      category: "Manual Accounting",
      description: "Cleanse fragmented workbook sheets, standardize master records, and convert manual data into structured Zoho ledgers.",
      logo: <ExcelLogo size={48} />,
      migrationTime: "5 - 7 Business Days",
      itemsMigrated: [
        "Cleaned Customer & Supplier Contacts",
        "Standardized Chart of Accounts",
        "Opening Trial Balance Balances",
        "Fixed Asset Register & Depreciation",
        "Historical Bank Statement Records",
      ],
    },
    {
      id: "quickbooks",
      name: "Intuit QuickBooks",
      category: "Cloud / Desktop",
      description: "Direct migration of chart of accounts, recurring invoices, customer databases, and historical journal entries.",
      logo: <QuickBooksLogo size={48} />,
      migrationTime: "5 - 8 Business Days",
      itemsMigrated: [
        "Complete General Ledger & Journals",
        "Customer Quotes, Invoices & Credits",
        "Vendor Bills & Payment Records",
        "Indian GST Tax Rate Classifications",
        "Bank Feed Rules & Categories",
      ],
    },
    {
      id: "sap",
      name: "SAP / Legacy ERP",
      category: "Enterprise System",
      description: "Structured migration from SAP Business One or legacy client-server ERPs to Zoho Books & Zoho One.",
      logo: <SapLogo size={48} />,
      migrationTime: "10 - 14 Business Days",
      itemsMigrated: [
        "Multi-location Warehouse Masters",
        "Enterprise Chart of Accounts Architecture",
        "Vendor & Customer Credit Limits",
        "Cost Center / Tagging Classifications",
        "Opening Balances & Trial Balance Match",
      ],
    },
  ];

  const [selectedId, setSelectedId] = useState<string>("tally");
  const selectedSource = sources.find((s) => s.id === selectedId) || sources[0];

  return (
    <div className="w-full bg-[#f8f6f1] border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
      {/* Header */}
      <div className="max-w-3xl mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1ab394]/10 text-[#0e8b72] border border-[#1ab394]/20 text-xs font-bold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5" />
          <span>Interactive Migration Engine</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#0a1628]">
          Migrate From Your Current Accounting Software to Zoho Books
        </h3>
        <p className="text-sm text-slate-600">
          Click your existing accounting software below to see the animated data migration flow and what gets transitioned into central Zoho Books.
        </p>
      </div>

      {/* Source Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {sources.map((src) => {
          const isSelected = src.id === selectedId;
          return (
            <button
              key={src.id}
              onClick={() => setSelectedId(src.id)}
              className={`p-4 sm:p-5 rounded-2xl text-left border transition-all flex flex-col justify-between space-y-3 sm:space-y-4 cursor-pointer ${
                isSelected
                  ? "bg-white border-[#c9a84c] ring-2 ring-[#c9a84c]/30 shadow-md transform -translate-y-1"
                  : "bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
                  {src.logo}
                </div>
                {isSelected && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1ab394] animate-ping" />
                )}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#0a1628] leading-tight">{src.name}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{src.category}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive 3-Step Animated Flow Stream */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        {/* Left Box: Selected Source Platform */}
        <div className="lg:col-span-4 p-5 rounded-xl bg-[#f8f6f1] border border-slate-200 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Source System
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
              Audit & Extraction
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
              {selectedSource.logo}
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0a1628]">{selectedSource.name}</h4>
              <p className="text-xs text-slate-500">{selectedSource.category}</p>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {selectedSource.description}
          </p>

          <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#c9a84c]" />
            <span>Cutover Window: <strong>{selectedSource.migrationTime}</strong></span>
          </div>
        </div>

        {/* Center: Animated Flow Arrow to Central Zoho Books */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center py-4 px-2 text-center space-y-3">
          <div className="text-xs font-bold text-[#0a1628] uppercase tracking-wider">
            Automated Cutover Stream
          </div>

          <div className="relative w-full max-w-[220px] h-10 flex items-center justify-center">
            {/* Animated Bar with Moving Pulse */}
            <div className="w-full h-2 rounded-full bg-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1ab394] via-[#c9a84c] to-[#e42527] animate-flow-arrow" />
            </div>
            <div className="absolute right-0 w-6 h-6 rounded-full bg-[#c9a84c] text-white flex items-center justify-center shadow-md">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="text-[11px] text-slate-500 leading-tight">
            Historical Data Cleanse &bull; Zero Downtime &bull; 100% Reconciliation
          </div>
        </div>

        {/* Right Box: Central Zoho Books Destination */}
        <div className="lg:col-span-4 p-5 rounded-xl bg-gradient-to-br from-[#0a1628] to-[#122040] text-white space-y-4 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#c9a84c] uppercase tracking-wider">
              Destination Core
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#1ab394]/20 text-[#1ab394] border border-[#1ab394]/30">
              Live Verified
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
              <Image
                src={getAssetPath("/images/logos/zoho-books.png")}
                alt="Zoho Books"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Central Zoho Books</h4>
              <p className="text-xs text-slate-300">GST-Ready Cloud Accounting</p>
            </div>
          </div>

          {/* Items Migrated Checkmarks */}
          <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs">
            {selectedSource.itemsMigrated.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1ab394] shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            <span>Staff Training Included</span>
            <a
              href="https://wa.me/917981395907?text=Hi%20Stratomexa%2C%20I%20want%20to%20book%20a%2015%20mins%20call%20for%20accounting%20migration%20to%20Zoho%20Books."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a84c] hover:underline font-bold flex items-center gap-1"
            >
              <span>Book 15 Mins Call</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Migration Consultation Bar */}
      <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-600 text-center sm:text-left">
          <strong className="text-[#0a1628] font-bold">Planning a migration to Zoho Books?</strong> Our certified implementation team ensures zero data loss, trial balance reconciliation, and GST master alignment.
        </div>
        <a
          href="https://wa.me/917981395907?text=Hi%20Stratomexa%2C%20I%20would%20like%20to%20book%20a%2015%20mins%20call%20for%20accounting%20migration%20to%20Zoho%20Books."
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-[#c9a84c] hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all flex items-center gap-2 shadow-xs"
        >
          <span>Book 15 Mins Call</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
