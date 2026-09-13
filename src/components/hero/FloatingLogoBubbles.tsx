"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function FloatingLogoBubbles() {
  return (
    <div className="relative w-full max-w-[480px] h-[420px] sm:h-[460px] mx-auto flex items-center justify-center select-none pointer-events-auto">
      {/* Delicate Ambient Orbit Rings */}
      <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-emerald-200/60 pointer-events-none" />
      <div className="absolute w-[380px] h-[380px] sm:w-[420px] sm:h-[420px] rounded-full border border-slate-200/50 pointer-events-none" />

      {/* 1. CENTRAL HERO BUBBLE: ZOHO BOOKS */}
      <div className="relative z-20 flex flex-col items-center animate-bubble-pulse">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-emerald-500/30 shadow-2xl flex items-center justify-center p-3 relative group transition-transform hover:scale-105">
          <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <span>Hub</span>
          </div>
          <Image
            src="/images/logos/zoho-books.png"
            alt="Zoho Books"
            width={60}
            height={60}
            className="object-contain filter drop-shadow-xs"
            priority
          />
        </div>
        <div className="mt-2.5 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs text-center">
          <span className="text-xs font-bold text-slate-900 block">Central Zoho Books</span>
          <span className="text-[10px] font-medium text-emerald-600 block">Automated Financial Engine</span>
        </div>
      </div>

      {/* 2. TOP-LEFT BUBBLE: ZOHO PAYROLL */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 animate-bubble-1">
        <div className="flex items-center gap-2.5 p-2 pr-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg hover:shadow-xl transition-transform hover:scale-105">
          <div className="w-11 h-11 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-center p-1.5 shrink-0">
            <Image
              src="/images/logos/zoho-payroll.png"
              alt="Zoho Payroll"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Zoho Payroll</div>
            <div className="text-[10px] text-slate-500 font-medium">Auto Tax &amp; TDS</div>
          </div>
        </div>
      </div>

      {/* 3. TOP-RIGHT BUBBLE: ZOHO INVENTORY */}
      <div className="absolute top-6 right-4 sm:top-8 sm:right-6 z-10 animate-bubble-2">
        <div className="flex items-center gap-2.5 p-2 pr-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg hover:shadow-xl transition-transform hover:scale-105">
          <div className="w-11 h-11 rounded-xl bg-orange-50/70 border border-orange-100 flex items-center justify-center p-1.5 shrink-0">
            <Image
              src="/images/logos/zoho-inventory.png"
              alt="Zoho Inventory"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Zoho Inventory</div>
            <div className="text-[10px] text-slate-500 font-medium">Stock Sync</div>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM-LEFT BUBBLE: ZOHO BILLING */}
      <div className="absolute bottom-10 left-2 sm:bottom-12 sm:left-4 z-10 animate-bubble-3">
        <div className="flex items-center gap-2.5 p-2 pr-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg hover:shadow-xl transition-transform hover:scale-105">
          <div className="w-11 h-11 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-center p-1.5 shrink-0">
            <Image
              src="/images/logos/zoho-billing.png"
              alt="Zoho Billing"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Zoho Billing</div>
            <div className="text-[10px] text-slate-500 font-medium">Subscriptions</div>
          </div>
        </div>
      </div>

      {/* 5. BOTTOM-RIGHT BUBBLE: ZOHO EXPENSE */}
      <div className="absolute bottom-12 right-2 sm:bottom-14 sm:right-4 z-10 animate-bubble-1">
        <div className="flex items-center gap-2.5 p-2 pr-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg hover:shadow-xl transition-transform hover:scale-105">
          <div className="w-11 h-11 rounded-xl bg-rose-50/70 border border-rose-100 flex items-center justify-center p-1.5 shrink-0">
            <Image
              src="/images/logos/zoho-expense.png"
              alt="Zoho Expense"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Zoho Expense</div>
            <div className="text-[10px] text-slate-500 font-medium">Receipt AutoScan</div>
          </div>
        </div>
      </div>

      {/* 6. TOP-CENTER FLOATING MICRO BUBBLE: ALL ZOHO PRODUCTS / ONE */}
      <div className="absolute -top-2 z-10 animate-bubble-3 hidden sm:block">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
          <Image
            src="/images/logos/all-zoho-products.png"
            alt="All Zoho Products"
            width={20}
            height={20}
            className="object-contain"
          />
          <span className="text-[11px] font-bold text-slate-700">45+ Zoho Apps Unified</span>
        </div>
      </div>

      {/* 7. BOTTOM TRUST PILL */}
      <div className="absolute -bottom-2 z-20 animate-bubble-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-emerald-200 shadow-md text-slate-800 text-xs font-bold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Zoho Certified Partner</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-600 font-mono text-[11px]">ID: PI0626000</span>
        </div>
      </div>
    </div>
  );
}
