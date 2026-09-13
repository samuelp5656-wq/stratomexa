import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  Cpu,
  FileSpreadsheet,
  TrendingUp,
  ShieldCheck,
  Scale,
  Lock,
  FileCheck,
  Briefcase,
  Rocket,
  BarChart3,
} from "lucide-react";
import { ZohoBooksLogo } from "@/components/logos/BrandLogos";

export const metadata: Metadata = {
  title: "Professional Financial & Zoho Implementation Services",
  description:
    "Explore Stratomexa's full suite of 11 financial services: Zoho Books setup & training, app integration, cloud bookkeeping, GST/TDS compliance, Virtual CFO, and transaction diligence.",
};

const iconMap: Record<string, React.ElementType> = {
  BookOpen: ZohoBooksLogo,
  Cpu: Cpu,
  FileSpreadsheet: FileSpreadsheet,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
  Scale: Scale,
  Lock: Lock,
  FileCheck: FileCheck,
  Briefcase: Briefcase,
  Rocket: Rocket,
  BarChart3: BarChart3,
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Practice Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Financial & Regulatory Services
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            From technical Zoho Books migrations to forensic GST reconciliation and institutional Virtual CFO leadership, we support your business at every stage.
          </p>
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Briefcase;
            return (
              <div
                key={service.slug}
                className="saas-card p-6 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      SERVICE #{service.orderNumber}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug">
                    <Link href={`/services/${service.slug}/`}>{service.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.excerpt}
                  </p>

                  {/* Scope Deliverables */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Scope Deliverables:
                    </span>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}/`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
                  >
                    <span>Read Full Scope & FAQs</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto space-y-4 shadow-xs">
          <h3 className="text-2xl font-bold text-slate-900">
            Need a Customized Retainer or Multi-Entity Architecture?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Every business model has distinct regulatory rhythms. We tailor monthly retainers combining bookkeeping, statutory compliance, and executive CFO reviews to match your exact transaction volume.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-colors"
            >
              <span>Speak with Our Practice Leads</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
