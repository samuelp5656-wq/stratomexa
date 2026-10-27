"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import {
  COUNTRY_EDITIONS,
  PRICING_PLANS,
  COMPARISON_CATEGORIES,
  CountryEdition,
} from "@/data/pricing-comparison";
import {
  Check,
  X,
  ChevronDown,
  Sparkles,
  HelpCircle,
  Globe2,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Zap,
} from "lucide-react";
import { getAssetPath } from "@/lib/assets";

export default function PricingPage() {
  const [selectedCountryId, setSelectedCountryId] = useState<string>("in");
  const [isAnnual, setIsAnnual] = useState<boolean>(true);
  const [isEditionModalOpen, setIsEditionModalOpen] = useState<boolean>(false);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    "General & Organization Setup": true,
    "Sales & Invoicing": true,
    "Purchases, Expenses & Bills": true,
    "Banking & Bank Feeds": true,
    "Inventory & Warehousing": true,
    "Statutory Tax & Compliance": true,
    "Automation, Customization & Reporting": true,
    "Stratomexa Implementation Partner Value-Add": true,
  });

  const activeCountry =
    COUNTRY_EDITIONS.find((c) => c.id === selectedCountryId) || COUNTRY_EDITIONS[0];

  const toggleCategory = (catName: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [catName]: !prev[catName],
    }));
  };

  const expandAll = () => {
    const next: Record<string, boolean> = {};
    COMPARISON_CATEGORIES.forEach((c) => (next[c.category] = true));
    setOpenCategories(next);
  };

  const collapseAll = () => {
    const next: Record<string, boolean> = {};
    COMPARISON_CATEGORIES.forEach((c) => (next[c.category] = false));
    setOpenCategories(next);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200 py-14 sm:py-16">
        <div className="absolute inset-0 bg-radial from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Partner Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Official Zoho Certified Implementation Partner · ID: PI0626000</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            The Perfect Balance of Features and Value for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
              Your Business
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Compare plans, feature limits, and statutory editions across India &amp; Global jurisdictions. 
            Sign up directly or get turnkey implementation &amp; migration from Stratomexa certified architects.
          </p>

          {/* Interactive Controls: Edition Selector & Billing Frequency Toggle */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Edition Switcher Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsEditionModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-sm font-semibold shadow-xs hover:bg-slate-50 transition-all cursor-pointer"
              >
                <span className="text-lg leading-none">{activeCountry.flag}</span>
                <span>{activeCountry.name} Edition</span>
                <span className="text-xs text-slate-500 font-normal">({activeCountry.currency})</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Monthly / Annual Switcher */}
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  !isAnnual
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isAnnual
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>Yearly</span>
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-extrabold uppercase">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="mt-3 text-xs text-slate-500 font-medium">
            Jurisdiction: <span className="font-semibold text-slate-700">{activeCountry.taxLabel}</span> · All prices exclude statutory local taxes.
          </div>
        </div>
      </section>

      {/* 2. EDITIONS AND LANGUAGES POPUP MODAL */}
      {isEditionModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
          onClick={() => setIsEditionModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <Globe2 className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  Select Edition &amp; Language
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsEditionModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-500 mt-2 mb-6">
              Zoho Books provides country-tailored accounting engines with pre-configured chart of accounts, statutory tax rules, and local currency formats.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto pr-1">
              {COUNTRY_EDITIONS.map((c) => {
                const isSelected = c.id === activeCountry.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setSelectedCountryId(c.id);
                      setIsEditionModalOpen(false);
                    }}
                    className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-emerald-50/70 border-emerald-500 ring-2 ring-emerald-500/20"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-2xl shrink-0 mt-0.5">{c.flag}</span>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-slate-900 truncate">
                        {c.name}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {c.languages.join(", ")}
                      </div>
                      <div className="text-[10px] font-semibold text-emerald-700 mt-0.5">
                        {c.currency} · {c.taxLabel}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Need help picking the right jurisdiction?</span>
              <a
                href="https://wa.me/917981395907?text=Hi%20Stratomexa%2C%20I%20need%20guidance%20on%20choosing%20the%20right%20Zoho%20Books%20edition."
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-bold hover:underline"
              >
                Chat with our Zoho Architects →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 3. PRICING CARDS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {PRICING_PLANS.map((plan) => {
            const pricing = plan.pricing[activeCountry.id] || plan.pricing.global;
            const price = isAnnual ? pricing.annualPrice : pricing.monthlyPrice;
            const wasPrice = isAnnual ? pricing.wasAnnualPrice : pricing.wasMonthlyPrice;

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-2xl p-5 bg-white transition-all ${
                  plan.popular
                    ? "border-2 border-emerald-500 shadow-xl ring-4 ring-emerald-500/10 relative"
                    : "border border-slate-200 shadow-xs hover:border-slate-300"
                }`}
              >
                {/* Top Badge */}
                {plan.popular ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{plan.badge || "Most Popular"}</span>
                  </div>
                ) : plan.badge ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    {plan.badge}
                  </div>
                ) : null}

                <div>
                  <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider">
                    {plan.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 min-h-[34px] leading-snug">
                    {plan.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      {wasPrice && wasPrice > price && (
                        <span className="text-xs text-slate-400 line-through">
                          {activeCountry.currencySymbol}
                          {wasPrice}
                        </span>
                      )}
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {activeCountry.currencySymbol}
                        {price}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-500 block mt-0.5">
                      / organization / month
                    </span>
                    <span className="text-[9px] text-emerald-700 font-bold block mt-0.5">
                      {isAnnual ? "Billed annually" : "Billed monthly"}
                    </span>
                  </div>

                  {/* Feature Highlights */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    {plan.summaryFeatures.map((f, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-6 pt-3 border-t border-slate-100 space-y-2">
                  <a
                    href={activeCountry.signupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold text-center block transition-all ${
                      plan.popular
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    Start 14-Day Free Trial
                  </a>
                  <a
                    href={`https://wa.me/917981395907?text=Hi%20Stratomexa%2C%20I%20am%20interested%20in%20Zoho%20Books%20${plan.name}%20plan%20(${activeCountry.name}%20edition).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-1.5 text-center text-[11px] font-semibold text-slate-600 hover:text-emerald-700 block transition-colors"
                  >
                    Partner Setup Assistance →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. COMPREHENSIVE FEATURE COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Table Header Controls */}
          <div className="p-6 bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Feature-by-Feature Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Detailed Plan Feature Comparison
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Review complete operational limits, multi-currency features, and accounting capabilities across all editions.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={expandAll}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Expand All
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Sticky Table Header for Desktop */}
          <div className="hidden lg:grid grid-cols-12 bg-slate-100 border-b border-slate-200 text-xs font-bold text-slate-700 py-3.5 px-6 sticky top-16 z-30 shadow-xs">
            <div className="col-span-4 uppercase tracking-wider text-slate-500">
              Features &amp; Capabilities
            </div>
            <div className="col-span-1 text-center uppercase tracking-wider">Free</div>
            <div className="col-span-1 text-center uppercase tracking-wider">Standard</div>
            <div className="col-span-2 text-center uppercase tracking-wider text-emerald-700 font-extrabold">
              Professional ⭐
            </div>
            <div className="col-span-1 text-center uppercase tracking-wider">Premium</div>
            <div className="col-span-1 text-center uppercase tracking-wider">Elite</div>
            <div className="col-span-2 text-center uppercase tracking-wider">Ultimate</div>
          </div>

          {/* Comparison Categories Accordion */}
          <div className="divide-y divide-slate-200">
            {COMPARISON_CATEGORIES.map((cat) => {
              const isOpen = openCategories[cat.category] ?? true;

              return (
                <div key={cat.category} className="bg-white">
                  {/* Category Header Bar */}
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.category)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 bg-slate-50 hover:bg-slate-100/80 transition-colors text-left cursor-pointer"
                  >
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">
                        {isOpen ? "Hide Group" : "Show Group"}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown className="w-4 h-4 text-slate-600" />
                      </div>
                    </div>
                  </button>

                  {/* Feature Rows */}
                  {isOpen && (
                    <div className="divide-y divide-slate-100">
                      {cat.features.map((row, idx) => (
                        <div
                          key={idx}
                          className="grid grid-cols-1 lg:grid-cols-12 py-3.5 px-4 sm:px-6 hover:bg-slate-50/70 transition-colors items-center gap-2 lg:gap-0"
                        >
                          {/* Feature Name & Tooltip */}
                          <div className="lg:col-span-4 pr-4">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-semibold text-slate-800">
                                {row.name}
                              </span>
                              {row.tooltip && (
                                <span
                                  title={row.tooltip}
                                  className="text-slate-400 hover:text-slate-600 cursor-help"
                                >
                                  <HelpCircle className="w-3.5 h-3.5" />
                                </span>
                              )}
                            </div>
                            {row.tooltip && (
                              <div className="text-[11px] text-slate-400 mt-0.5 lg:hidden">
                                {row.tooltip}
                              </div>
                            )}
                          </div>

                          {/* Mobile Layout Wrapper */}
                          <div className="grid grid-cols-6 lg:contents gap-2 text-center pt-2 lg:pt-0">
                            {/* Free */}
                            <div className="col-span-1 flex flex-col lg:flex-row items-center justify-center text-xs">
                              <span className="text-[10px] text-slate-400 uppercase font-bold lg:hidden mb-1">
                                Free
                              </span>
                              <RenderFeatureValue val={row.free} />
                            </div>

                            {/* Standard */}
                            <div className="col-span-1 flex flex-col lg:flex-row items-center justify-center text-xs">
                              <span className="text-[10px] text-slate-400 uppercase font-bold lg:hidden mb-1">
                                Std
                              </span>
                              <RenderFeatureValue val={row.standard} />
                            </div>

                            {/* Professional (Highlighted) */}
                            <div className="col-span-1 lg:col-span-2 flex flex-col lg:flex-row items-center justify-center text-xs font-bold text-emerald-800 bg-emerald-50/60 lg:py-1 rounded-md">
                              <span className="text-[10px] text-emerald-600 uppercase font-extrabold lg:hidden mb-1">
                                Pro
                              </span>
                              <RenderFeatureValue val={row.professional} />
                            </div>

                            {/* Premium */}
                            <div className="col-span-1 flex flex-col lg:flex-row items-center justify-center text-xs">
                              <span className="text-[10px] text-slate-400 uppercase font-bold lg:hidden mb-1">
                                Prem
                              </span>
                              <RenderFeatureValue val={row.premium} />
                            </div>

                            {/* Elite */}
                            <div className="col-span-1 flex flex-col lg:flex-row items-center justify-center text-xs">
                              <span className="text-[10px] text-slate-400 uppercase font-bold lg:hidden mb-1">
                                Elite
                              </span>
                              <RenderFeatureValue val={row.elite} />
                            </div>

                            {/* Ultimate */}
                            <div className="col-span-1 lg:col-span-2 flex flex-col lg:flex-row items-center justify-center text-xs">
                              <span className="text-[10px] text-slate-400 uppercase font-bold lg:hidden mb-1">
                                Ult
                              </span>
                              <RenderFeatureValue val={row.ultimate} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. STRATOMEXA VALUE-ADD PARTNER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-[#0a1628] via-[#122040] to-[#0a1628] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Certified Implementation Advantage</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Why Sign Up or Migrate Through Stratomexa?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Purchasing Zoho Books directly gives you software, but purchasing with Stratomexa gives you a complete finance transformation. We ensure your chart of accounts matches your business reality, your GST &amp; tax returns file with zero errors, and your team is fully trained.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span className="text-xs text-slate-200">
                    <strong>Zero-Downtime Migration</strong> from Tally Prime, QuickBooks, SAP &amp; Excel.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span className="text-xs text-slate-200">
                    <strong>Statutory GST/VAT Architecture</strong> with auto GSTR-2B matching &amp; e-Invoicing.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span className="text-xs text-slate-200">
                    <strong>Custom Workflow Automation</strong> with tailored approval triggers &amp; webhooks.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span className="text-xs text-slate-200">
                    <strong>Hands-on Staff Workshops</strong> and dedicated WhatsApp / Phone support.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md space-y-4">
              <h3 className="text-lg font-bold text-white">
                Book Free 15-Min Onboarding Discovery
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with Anil Kumar Suvarapu (Certified Zoho Implementation Architect) to review your accounting structure, migration cutover timeline, and plan recommendation.
              </p>

              <div className="space-y-3 pt-2">
                <Link
                  href="/contact/"
                  className="w-full py-3 px-4 rounded-xl bg-[#c9a84c] hover:bg-[#d6b75e] text-[#0a1628] text-sm font-extrabold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book 15 Mins Call</span>
                </Link>

                <a
                  href="https://wa.me/917981395907?text=Hi%20Stratomexa%2C%20I%20am%20exploring%20Zoho%20Books%20plans%20and%20need%20expert%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-bold flex items-center justify-center gap-2 transition-colors border border-white/15"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp: +91 7981395907</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Everything you need to know about Zoho Books licensing, editions, and Stratomexa onboarding.
          </p>
        </div>

        <FaqItem
          question="Can I upgrade or downgrade my Zoho Books plan later?"
          answer="Yes. Zoho Books offers complete flexibility. You can upgrade instantly at any point during your subscription cycle with prorated billing. Downgrades take effect upon the renewal of your billing period."
        />
        <FaqItem
          question="What is the difference between the India edition and the Global edition?"
          answer="The India edition is built specifically for Indian statutory requirements, including automated GST e-Invoicing (IRP integration), e-Way bills, GSTR-1, GSTR-3B, GSTR-2B reconciliation, and TDS/TCS deductions. The Global edition supports multi-currency, international tax configurations, and foreign sales taxes for international operating entities."
        />
        <FaqItem
          question="Is my historical data from Tally or QuickBooks safe during migration?"
          answer="Yes. Stratomexa specializes in 100% audited data cutover. We export your historical ledgers, vouchers, customer/vendor masters, opening balances, and trial balances. Everything is verified against your trial balance before go-live, ensuring zero downtime and complete accounting hygiene."
        />
        <FaqItem
          question="Do I pay extra when signing up through Stratomexa?"
          answer="No! The Zoho Books software license price remains exactly the same as buying from Zoho directly (and you frequently receive exclusive partner perks, promotional extensions, and priority onboarding). You also gain access to our Hyderabad-based advisory architects for seamless setup."
        />
      </section>
    </div>
  );
}

function RenderFeatureValue({ val }: { val: string | boolean }) {
  if (typeof val === "boolean") {
    return val ? (
      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
        <Check className="w-3.5 h-3.5" />
      </span>
    ) : (
      <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
        <X className="w-3 h-3" />
      </span>
    );
  }

  return (
    <span className="font-semibold text-slate-700 leading-snug">
      {val}
    </span>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <span className="text-sm sm:text-base">{question}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
          {answer}
        </div>
      )}
    </div>
  );
}
