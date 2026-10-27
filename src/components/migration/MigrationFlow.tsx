"use client";

import React, { useState } from "react";
import {
  ZohoLogo,
  ZohoBooksLogo,
  ZohoPayrollLogo,
  ZohoCrmLogo,
  ZohoInventoryLogo,
  ZohoBillingLogo,
  ZohoAnalyticsLogo,
  ZohoOneLogo,
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
  Cpu,
  FileCheck2,
  TrendingUp,
} from "lucide-react";

export default function MigrationFlow() {
  const [activeStage, setActiveStage] = useState(2);

  const stages = [
    {
      id: 0,
      title: "1. Audit & Extraction",
      status: "Verified",
      desc: "Extract raw trial balances, customer/vendor masters, and item SKUs from desktop Tally/Excel.",
    },
    {
      id: 1,
      title: "2. Cleansing & Mapping",
      status: "Automated",
      desc: "Scrutinize HSN codes, eliminate duplicate ledgers, and standardize tax charts for Zoho Books.",
    },
    {
      id: 2,
      title: "3. Zero-Downtime Cutover",
      status: "In Progress",
      desc: "Post opening vouchers, map historical comparatives, and test initial trial balance balance matching.",
    },
    {
      id: 3,
      title: "4. Live Zoho Sync",
      status: "Continuous",
      desc: "Activate direct bank feeds, automated GST e-invoicing, and cross-app sync with Payroll & CRM.",
    },
  ];

  return (
    <div className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-sm">
      {/* Top Header & Stage Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>Zero-Downtime Cutover Architecture</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
            Seamless Data Migration into Central Zoho Books
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Watch how disparate legacy platforms flow seamlessly into a single unified financial operating system.
          </p>
        </div>

        {/* Stage Selector Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl shadow-xs">
          {stages.map((stg) => (
            <button
              key={stg.id}
              onClick={() => setActiveStage(stg.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeStage === stg.id
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {stg.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Stage Explainer */}
      <div className="py-4 px-4 my-6 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-slate-900">Current Phase: {stages[activeStage].title}</span>
          <span className="text-slate-400">·</span>
          <span className="text-slate-600">{stages[activeStage].desc}</span>
        </div>
        <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 shrink-0">
          Status: {stages[activeStage].status}
        </span>
      </div>

      {/* Main 3-Column Visual Flow Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
        {/* Left Column: Legacy Systems (3 cols) */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center justify-between">
            <span>Legacy & Source Data</span>
            <span className="text-[11px] font-normal text-slate-400">Extracted</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3">
              <TallyPrimeLogo size={36} />
              <div>
                <div className="text-xs font-bold text-slate-900">Tally Prime & ERP 9</div>
                <div className="text-[11px] text-slate-500">Historical Ledgers & Masters</div>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3">
              <ExcelLogo size={36} />
              <div>
                <div className="text-xs font-bold text-slate-900">Microsoft Excel / CSV</div>
                <div className="text-[11px] text-slate-500">Manual Spreadsheets & Bills</div>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3">
              <QuickBooksLogo size={36} />
              <div>
                <div className="text-xs font-bold text-slate-900">Intuit QuickBooks</div>
                <div className="text-[11px] text-slate-500">AP/AR Customer Records</div>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3">
              <SapLogo size={36} />
              <div>
                <div className="text-xs font-bold text-slate-900">SAP & Custom ERPs</div>
                <div className="text-[11px] text-slate-500">Multi-branch Warehouses</div>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
        </div>

        {/* Center Connecting Flow / Stream (1 col) */}
        <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center py-8">
          <div className="relative w-full flex items-center justify-center">
            {/* Animated Flow Pulse */}
            <div className="w-full h-0.5 bg-gradient-to-r from-slate-300 via-emerald-500 to-red-500 relative">
              <span className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-2 uppercase tracking-widest text-center">
            Mapping
          </div>
        </div>

        {/* Center Hub: The Central Zoho Engine (3 cols) */}
        <div className="lg:col-span-3">
          <div className="p-6 rounded-2xl bg-white border-2 border-red-500/80 shadow-lg shadow-red-500/10 text-center space-y-4 relative overflow-hidden">
            {/* Glowing badge */}
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold tracking-wide uppercase border border-red-100">
              <span>Central Operating Engine</span>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center mx-auto shadow-inner">
              <ZohoBooksLogo size={42} />
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900">Zoho Books Core</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Centralized general ledger, automated bank feeds, and real-time GST e-invoicing hub.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-left text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>2B ITC Matching</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>e-Way Bills</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Audit Trail</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Role Controls</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Connecting Flow (1 col) */}
        <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center py-8">
          <div className="relative w-full flex items-center justify-center">
            <div className="w-full h-0.5 bg-gradient-to-r from-red-500 via-blue-500 to-indigo-500 relative">
              <span className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-2 uppercase tracking-widest text-center">
            Sync
          </div>
        </div>

        {/* Right Column: Radiating Zoho Apps & Live Business Outcomes (3 cols) */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center justify-between">
            <span>Connected Zoho Ecosystem</span>
            <span className="text-[11px] font-normal text-emerald-600">Real-Time</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3">
              <ZohoPayrollLogo size={28} />
              <div>
                <div className="text-xs font-bold text-slate-900">Zoho Payroll</div>
                <div className="text-[11px] text-slate-500">Auto PF, ESI, TDS & Salaries</div>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
              Synced
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3">
              <ZohoCrmLogo size={28} />
              <div>
                <div className="text-xs font-bold text-slate-900">Zoho CRM</div>
                <div className="text-[11px] text-slate-500">Deal-to-Invoice Auto Creation</div>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
              Synced
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3">
              <ZohoInventoryLogo size={28} />
              <div>
                <div className="text-xs font-bold text-slate-900">Zoho Inventory</div>
                <div className="text-[11px] text-slate-500">Real-Time Stock & COGS Sync</div>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
              Synced
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3">
              <ZohoAnalyticsLogo size={28} />
              <div>
                <div className="text-xs font-bold text-slate-900">Zoho Analytics</div>
                <div className="text-[11px] text-slate-500">Executive MIS & Cash Forecasts</div>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
              Synced
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
