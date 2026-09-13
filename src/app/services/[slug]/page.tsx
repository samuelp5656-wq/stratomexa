import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Users,
  Layers,
  HelpCircle,
  Clock,
  PhoneCall,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Stratomexa`,
    description: service.excerpt,
    keywords: [
      service.title,
      service.shortTitle,
      service.category,
      "Zoho Partner Hyderabad",
      "Accounting services India",
      "Stratomexa Business Consulting",
    ],
    openGraph: {
      title: `${service.title} | Stratomexa Business Consulting`,
      description: service.heroDescription,
      url: `https://stratomexa.in/services/${service.slug}/`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* FAQ Schema */}
      <FaqJsonLd faqs={service.faqs} />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services/" className="hover:text-slate-900 transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold line-clamp-1">{service.shortTitle}</span>
        </div>

        {/* 1. HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-mono font-bold text-slate-500 px-2.5 py-1 rounded bg-slate-100">
                PRACTICE #{service.orderNumber}
              </span>
              <span className="text-[11px] font-bold text-blue-700 px-2.5 py-1 rounded bg-blue-50 border border-blue-100">
                {service.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {service.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://wa.me/917981395907?text=Hi%20Stratomexa%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(
                  service.shortTitle
                )}%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-colors"
              >
                Schedule Strategy Call
              </a>

              <Link
                href="/contact/"
                className="px-6 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-xs transition-colors"
              >
                Request Proposal
              </Link>
            </div>
          </div>

          {/* Practice Summary Card */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Practice Highlights
              </span>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Certified Zoho Implementation Oversight</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated Senior Account Manager</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Statutory Compliance Hygiene</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Hyderabad HQ & Pan-India Remote</span>
                </li>
              </ul>
              <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
                <span>Call Practice Desk: +91 7981395907</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. DELIVERABLES */}
        <section className="space-y-6 pt-6 border-t border-slate-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Scope of Deliverables</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Exact deliverables managed under this service agreement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. TARGET AUDIENCE */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <span>Who Is This Service For?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.targetAudience.map((audience, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
              >
                <span className="text-xs font-mono font-bold text-slate-500 shrink-0 mt-0.5">
                  0{idx + 1}.
                </span>
                <span className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {audience}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. KEY BENEFITS */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Measurable Business Benefits</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2"
              >
                <h3 className="text-sm font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PROCESS TIMELINE */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" />
              <span>Implementation Methodology</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.processSteps.map((p) => (
              <div
                key={p.step}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2"
              >
                <span className="text-xs font-mono font-bold text-slate-900">
                  STEP {p.step}
                </span>
                <h4 className="text-sm font-bold text-slate-900">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. FAQS */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-slate-600" />
              <span>Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2"
              >
                <h4 className="text-sm font-bold text-slate-900">
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. BOTTOM CTA */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white text-center space-y-5">
          <h3 className="text-2xl font-bold">
            Ready to Implement {service.shortTitle}?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Our certified practice leaders will review your operational requirements and deliver a detailed scope of work.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/917981395907?text=Hi%20Stratomexa%2C%20I%20would%20like%20to%20consult%20on%20${encodeURIComponent(
                service.shortTitle
              )}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg bg-[#25d366] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:brightness-110 transition-all"
            >
              Consult on WhatsApp
            </a>
            <Link
              href="/contact/"
              className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-colors"
            >
              Submit Proposal Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
