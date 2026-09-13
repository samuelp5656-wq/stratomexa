import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Case Studies & Transformations",
  description:
    "Explore how Stratomexa helps Indian businesses migrate to Zoho Books, recover blocked Input Tax Credit, and prepare for institutional audit sign-offs.",
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Case Studies
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Client Transformations & Impact
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Tangible outcomes from our Zoho implementations, forensic GST reviews, and Virtual CFO engagements.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-10">
          {caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="saas-card p-8 sm:p-10 space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    {cs.clientIndustry} · {cs.location}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 leading-snug">
                    {cs.title}
                  </h2>
                </div>
                <div className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg shrink-0">
                  {cs.serviceProvided}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-rose-700">
                    The Business Challenge
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Stratomexa&apos;s Solution
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Measured Operational Outcomes:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {cs.results.map((r, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-2xs"
                    >
                      <div className="text-2xl font-extrabold text-slate-900 font-serif">
                        {r.metric}
                      </div>
                      <div className="text-xs text-slate-600 mt-1">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {cs.testimonial && (
                <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-l-blue-600 border border-slate-200 space-y-2">
                  <p className="text-xs sm:text-sm italic text-slate-800 leading-relaxed">
                    &ldquo;{cs.testimonial.quote}&rdquo;
                  </p>
                  <div className="text-xs font-bold text-slate-900">
                    {cs.testimonial.author} · <span className="font-normal text-slate-500">{cs.testimonial.designation}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-200 max-w-2xl mx-auto space-y-3 shadow-xs">
          <h3 className="text-xl font-bold text-slate-900">
            Discuss Your Company&apos;s Financial Requirements
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Let our practice leads audit your current accounting processes and demonstrate measurable efficiency opportunities.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-colors"
            >
              <span>Schedule Free Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
