import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getAssetPath } from "@/lib/assets";
import { zohoProducts } from "@/data/zoho-products";
import {
  ZohoLogo,
  ZohoBooksLogo,
  ZohoPayrollLogo,
  ZohoCrmLogo,
  ZohoInventoryLogo,
  ZohoBillingLogo,
  ZohoAnalyticsLogo,
  ZohoOneLogo,
} from "@/components/logos/BrandLogos";
import {
  ExternalLink,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Server,
  Headphones,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Official Zoho Partner Portal | Reseller Sign-Up Hub",
  description:
    "Official Zoho Certified Implementation Partner Portal (ID: PI0626000). Direct sign-up links for Zoho Books, Payroll, Billing, Checkout, and Zoho One with dedicated onboarding assistance.",
};

const logoMap: Record<string, React.ReactNode> = {
  "zoho-books": <ZohoBooksLogo size={36} />,
  "zoho-payroll": <ZohoPayrollLogo size={36} />,
  "zoho-billing": <ZohoBillingLogo size={36} />,
  "zoho-checkout": <ZohoBooksLogo size={36} />,
  "zoho-commerce": <ZohoInventoryLogo size={36} />,
  "zoho-all-products": <ZohoOneLogo size={36} />,
};

export default function ZohoProductsPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-xs">
            <ZohoLogo size={14} />
            <span className="text-[11px] font-bold text-slate-700 tracking-wide uppercase">
              Certified Implementation Partner · ID: PI0626000
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Official Zoho Software Portals
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Create your official Zoho account through our certified partner reseller links. Receive complimentary initial organization setup review and priority implementation support directly from Stratomexa.
          </p>
        </div>

        {/* Partner Benefits Strip */}
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Complimentary Setup Audit</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Our certified team reviews your tax rules, opening balances, and initial configuration at zero charge.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Indian Data Centre</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Accounts are automatically anchored to Zoho&apos;s Indian servers, fulfilling all domestic regulatory storage mandates.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Priority Partner Support</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Direct engineering escalation channel with Zoho product teams for rapid issue resolution.
              </p>
            </div>
          </div>
        </div>

        {/* Product Cards Grid with Official Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zohoProducts.map((product) => (
            <div
              key={product.id}
              className="saas-card p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1.5 shrink-0 shadow-2xs">
                      <Image
                        src={getAssetPath(product.logoImg)}
                        alt={product.name}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{product.name}</h3>
                      <span className="text-[11px] font-medium text-slate-500">{product.category}</span>
                    </div>
                  </div>
                  {product.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                      {product.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {product.fullDesc}
                </p>

                {/* Features */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Key Features:
                  </span>
                  {product.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <a
                  href={product.signupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-colors"
                >
                  <span>Sign Up via Partner Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <div className="text-center text-[11px] text-slate-400">
                  Official Reseller Link · Partner ID: PI0626000
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white text-center space-y-4">
          <h3 className="text-2xl font-bold">
            Need Help Selecting the Right Zoho License Tier?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Avoid overpaying for unnecessary tiers. Our certified specialists calculate your exact user, branch, and invoice volume to recommend the optimal licensing tier.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider shadow-xs transition-colors"
            >
              <span>Consult Our Licensing Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
